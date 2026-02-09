import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { supabase } from '../supabaseClient';
import { User } from '@supabase/supabase-js';
import { Folder, BarChart2, FolderOpen, LogOut } from 'lucide-react';
import { useIsMounted } from '../hooks/useIsMounted';
import { Projeto } from '../services/projectsService';

export function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<{ total: number; ultimo: string | null }>({ total: 0, ultimo: null });
  // States para formulário de upload
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [link, setLink] = useState('');
  const [linguagens, setLinguagens] = useState<string[]>([]);
  const [categorias, setCategorias] = useState<string[]>([]);
  const [imagemFile, setImagemFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // State para lista de projetos
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [loadingProjetos, setLoadingProjetos] = useState(true);
  
  // State para abas
  const [aba, setAba] = useState<'portfolio' | 'estatisticas' | 'tags'>('portfolio');
  const [linguagensOpcoes, setLinguagensOpcoes] = useState<{ id: string, nome: string }[]>([]);
  const [categoriasOpcoes, setCategoriasOpcoes] = useState<{ id: string, nome: string }[]>([]);
  // Estados para CRUD de tags
  const [novaLinguagem, setNovaLinguagem] = useState('');
  const [novaCategoria, setNovaCategoria] = useState('');
  const [editLinguagemId, setEditLinguagemId] = useState<string | null>(null);
  const [editLinguagemNome, setEditLinguagemNome] = useState('');
  const [editCategoriaId, setEditCategoriaId] = useState<string | null>(null);
  const [editCategoriaNome, setEditCategoriaNome] = useState('');
  // Novo estado para modal de edição
  const [modalProjeto, setModalProjeto] = useState<Projeto | null>(null);
  const [modalEditLoading, setModalEditLoading] = useState(false);
  const [modalEditError, setModalEditError] = useState<string | null>(null);
  // Novo estado para arquivo de imagem no modal
  const [modalImagemFile, setModalImagemFile] = useState<File | null>(null);
  const [loadingGlobal, setLoadingGlobal] = useState(false);
  // Estados de paginação
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const projetosPorPagina = 9;
  
  const isMounted = useIsMounted();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (isMounted()) setUser(data.user);
    }).catch(() => {});

    setLoadingGlobal(true);
    fetchTags().then(() => {
      if (isMounted()) setLoadingGlobal(false);
    });
  }, [fetchTags, isMounted]);


  useEffect(() => {
    if (linguagensOpcoes.length > 0 && categoriasOpcoes.length > 0) {
      fetchProjetos();
    }
  }, [paginaAtual, linguagensOpcoes, categoriasOpcoes, fetchProjetos]);

  // Atualizar estatísticas sempre que a lista de projetos mudar
  useEffect(() => {
    if (projetos.length === 0) {
      setStats({ total: 0, ultimo: null });
      return;
    }
    const total = projetos.length;
    // Encontrar o projeto mais recente
    const ultimoProjeto = projetos.reduce<Projeto | null>((maisRecente, atual) => {
      if (!maisRecente) return atual;
      return new Date(atual.criado_em) > new Date(maisRecente.criado_em) ? atual : maisRecente;
    }, null);
    setStats({ total, ultimo: ultimoProjeto?.criado_em || null });
  }, [projetos]);

  // Buscar projetos ao carregar e após upload
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetchProjetos(signal);

    return () => {
      abortController.abort();
    };
  }, [fetchProjetos]); // Dependências do fetch

  const fetchProjetos = useCallback(async (signal?: AbortSignal) => {
    if (!isMounted()) return;
    setLoadingProjetos(true);
    
    try {
      // Buscar todos os projetos (sem range)
      const { data: projetosData, error } = await supabase
        .from('projetos')
        .select('*')
        .order('criado_em', { ascending: false })
        .abortSignal(signal || new AbortController().signal);

      if (!isMounted()) return;

      if (error) throw error;
      
      if (!projetosData) {
        setProjetos([]);
        setLoadingProjetos(false);
        return;
      }
      // Buscar relacionamentos
      const { data: relLinguagens, error: relLinguagensError } = await supabase
        .from('projeto_linguagem')
        .select('projeto_id, linguagem_id')
        .abortSignal(signal || new AbortController().signal);
        
      if (relLinguagensError) throw relLinguagensError;

      const { data: relCategorias, error: relCategoriasError } = await supabase
        .from('projeto_categoria')
        .select('projeto_id, categoria_id')
        .abortSignal(signal || new AbortController().signal);

      if (relCategoriasError) throw relCategoriasError;

      if (!isMounted()) return;

      const projetosComTags = projetosData.map(proj => {
        const linguagensIds = relLinguagens?.filter(r => r.projeto_id === proj.id).map(r => r.linguagem_id) || [];
        const categoriasIds = relCategorias?.filter(r => r.projeto_id === proj.id).map(r => r.categoria_id) || [];
        return {
          ...proj,
          linguagens: linguagensOpcoes.filter(l => linguagensIds.includes(l.id)).map(l => l.nome),
          categorias: categoriasOpcoes.filter(c => categoriasIds.includes(c.id)).map(c => c.nome),
        };
      });
      setProjetos(projetosComTags);
      setTotalPaginas(Math.max(1, Math.ceil(projetosComTags.length / projetosPorPagina)));
    } catch (error: unknown) {
      if (
        error instanceof Error && 
        (error.name === 'AbortError' || error.message?.includes('aborted'))
      ) {
        return;
      }
      console.error('Erro ao buscar projetos:', error);
    } finally {
      if (isMounted()) {
        setLoadingProjetos(false);
      }
    }
  }, [isMounted, linguagensOpcoes, categoriasOpcoes, projetosPorPagina]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  // Helper para buscar ids das linguagens/categorias selecionadas
  function getIdsFromNomes(nomes: string[], opcoes: { id: string, nome: string }[]) {
    return nomes.map(nome => opcoes.find(o => o.nome === nome)?.id).filter(Boolean);
  }

  async function handleUploadProjeto(e: React.FormEvent) {
    e.preventDefault();
    setUploading(true);
    setUploadError(null);
    let imagem_url = '';
    if (imagemFile) {
      const fileExt = imagemFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).slice(2, 10)}.${fileExt}`;
      const { error } = await supabase.storage.from('portfolio').upload(fileName, imagemFile);
      if (error) {
        setUploadError('Erro ao fazer upload da imagem.');
        setUploading(false);
        return;
      }
      imagem_url = supabase.storage.from('portfolio').getPublicUrl(fileName).data.publicUrl;
    }
    // Garantir mapeamento correto
    const linguagensIds = getIdsFromNomes(linguagens, linguagensOpcoes);
    const categoriasIds = getIdsFromNomes(categorias, categoriasOpcoes);
    // Salvar projeto sem linguagens/categorias
    if (!user) {
        setUploadError('Usuário não autenticado.');
        setUploading(false);
        return;
    }
    const { data, error } = await supabase.from('projetos').insert({
      titulo,
      descricao,
      link,
      imagem_url,
      criado_por: user.id
    }).select('id');
    if (error || !data || !data[0]?.id) {
      setUploadError('Erro ao salvar projeto.');
      setUploading(false);
      return;
    }
    const projetoId = data[0].id;
    // Relacionar linguagens
    for (const linguagem_id of linguagensIds) {
      await supabase.from('projeto_linguagem').insert({ projeto_id: projetoId, linguagem_id });
    }
    // Relacionar categorias
    for (const categoria_id of categoriasIds) {
      await supabase.from('projeto_categoria').insert({ projeto_id: projetoId, categoria_id });
    }
    setUploading(false);
    setTitulo('');
    setDescricao('');
    setLink('');
    setLinguagens([]);
    setCategorias([]);
    setImagemFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    // Atualiza estatísticas e lista
    const statsData = await supabase
      .from('projetos')
      .select('id, criado_em')
      .order('criado_em', { ascending: false });
    setStats({
      total: statsData.data?.length || 0,
      ultimo: statsData.data?.[0]?.criado_em || null
    });
    fetchProjetos();
  }

  /* 
   * Funções de edição removidas se não forem utilizadas. 
   * Caso queira implementar edição no futuro, descomente e ajuste.
   */
  
  /*
  function handleEditProjeto(id: string) {
    const projeto = projetos.find(p => p.id === id);
    setEditId(id);
    setEditProjeto({ ...projeto });
    setEditImagemFile(null);
    setEditError(null);
  }
  function handleCancelEdit() {
    setEditId(null);
    setEditProjeto(null);
    setEditImagemFile(null);
    setEditError(null);
  }
  async function handleSaveEdit(id: string) {
    setEditLoading(true);
    setEditError(null);
    let imagem_url = editProjeto?.imagem_url || '';
    if (editImagemFile) {
      const fileExt = editImagemFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 8)}.${fileExt}`;
      const { error } = await supabase.storage.from('portfolio').upload(fileName, editImagemFile);
      if (error) {
        setEditError('Erro ao fazer upload da nova imagem.');
        setEditLoading(false);
        return;
      }
      imagem_url = supabase.storage.from('portfolio').getPublicUrl(fileName).data.publicUrl;
    }
    // Atualizar projeto (exceto linguagens/categorias)
    const { error } = await supabase.from('projetos').update({
      titulo: editProjeto?.titulo,
      descricao: editProjeto?.descricao,
      link: editProjeto?.link,
      imagem_url
    }).eq('id', id);
    if (error) {
      setEditError('Erro ao salvar alterações.');
      setEditLoading(false);
      return;
    }
    // Atualizar relacionamentos: remover todos e inserir os novos
    await supabase.from('projeto_linguagem').delete().eq('projeto_id', id);
    await supabase.from('projeto_categoria').delete().eq('projeto_id', id);
    if (editProjeto) {
      const linguagensIds = getIdsFromNomes(editProjeto.linguagens, linguagensOpcoes);
      const categoriasIds = getIdsFromNomes(editProjeto.categorias, categoriasOpcoes);
      for (const linguagem_id of linguagensIds) {
        await supabase.from('projeto_linguagem').insert({ projeto_id: id, linguagem_id });
      }
      for (const categoria_id of categoriasIds) {
        await supabase.from('projeto_categoria').insert({ projeto_id: id, categoria_id });
      }
    }
    setEditLoading(false);
    setEditId(null);
    setEditProjeto(null);
    setEditImagemFile(null);
    fetchProjetos();
  }
  */

  // --- Funções CRUD de Tags (Linguagens/Categorias) ---

  // Placeholders para editar/remover
  async function handleRemoverProjeto(id: string) {
    if (!window.confirm('Tem certeza que deseja remover este projeto?')) return;
    // Buscar projeto para pegar o nome do arquivo da imagem
    const projeto = projetos.find(p => p.id === id);
    let storagePath = '';
    if (projeto?.imagem_url) {
      // Extrair o path do arquivo do publicUrl
      const urlParts = projeto.imagem_url.split('/');
      storagePath = urlParts[urlParts.length - 1];
    }
    // Remover do Supabase
    const { error } = await supabase.from('projetos').delete().eq('id', id);
    if (error) {
      alert('Erro ao remover projeto.');
    } else {
      // Remover imagem do Storage (opcional)
      if (storagePath) {
        await supabase.storage.from('portfolio').remove([storagePath]);
      }
      fetchProjetos();
      // Atualiza estatísticas
      const { data } = await supabase
        .from('projetos')
        .select('id, criado_em')
        .order('criado_em', { ascending: false });
      setStats({
        total: data?.length || 0,
        ultimo: data?.[0]?.criado_em || null
      });
    }
  }

  // Funções CRUD linguagens
  async function adicionarLinguagem() {
    if (!novaLinguagem.trim()) return;
    await supabase.from('linguagens').insert({ nome: novaLinguagem.trim() });
    setNovaLinguagem('');
    await fetchTags();
    await fetchProjetos();
  }
  async function removerLinguagem(id: string) {
    await supabase.from('linguagens').delete().eq('id', id);
    await fetchTags();
    await fetchProjetos();
  }
  async function iniciarEdicaoLinguagem(id: string, nome: string) {
    setEditLinguagemId(id);
    setEditLinguagemNome(nome);
  }
  async function salvarEdicaoLinguagem() {
    if (!editLinguagemId || !editLinguagemNome.trim()) return;
    await supabase.from('linguagens').update({ nome: editLinguagemNome.trim() }).eq('id', editLinguagemId);
    setEditLinguagemId(null);
    setEditLinguagemNome('');
    await fetchTags();
    await fetchProjetos();
  }
  async function cancelarEdicaoLinguagem() {
    setEditLinguagemId(null);
    setEditLinguagemNome('');
  }
  // Funções CRUD categorias
  async function adicionarCategoria() {
    if (!novaCategoria.trim()) return;
    await supabase.from('categorias').insert({ nome: novaCategoria.trim() });
    setNovaCategoria('');
    await fetchTags();
    await fetchProjetos();
  }
  async function removerCategoria(id: string) {
    await supabase.from('categorias').delete().eq('id', id);
    await fetchTags();
    await fetchProjetos();
  }
  async function iniciarEdicaoCategoria(id: string, nome: string) {
    setEditCategoriaId(id);
    setEditCategoriaNome(nome);
  }
  async function salvarEdicaoCategoria() {
    if (!editCategoriaId || !editCategoriaNome.trim()) return;
    await supabase.from('categorias').update({ nome: editCategoriaNome.trim() }).eq('id', editCategoriaId);
    setEditCategoriaId(null);
    setEditCategoriaNome('');
    await fetchTags();
    await fetchProjetos();
  }
  async function cancelarEdicaoCategoria() {
    setEditCategoriaId(null);
    setEditCategoriaNome('');
  }

  const fetchTags = useCallback(async () => {
    const { data: langs } = await supabase.from('linguagens').select('id, nome').order('nome');
    if (!isMounted()) return;
    const { data: cats } = await supabase.from('categorias').select('id, nome').order('nome');
    if (!isMounted()) return;
    setLinguagensOpcoes(langs || []);
    setCategoriasOpcoes(cats || []);
  }, [isMounted]);

  function openModalProjeto(proj: Projeto) {
    setModalProjeto({ ...proj });
    setModalEditError(null);
  }
  function closeModalProjeto() {
    setModalProjeto(null);
    setModalEditError(null);
  }
  async function salvarModalProjeto() {
    if (!modalProjeto) return;
    setModalEditLoading(true);
    setModalEditError(null);
    let imagem_url = modalProjeto.imagem_url;
    if (modalImagemFile) {
      const fileExt = modalImagemFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).slice(2, 10)}.${fileExt}`;
      const { error } = await supabase.storage.from('portfolio').upload(fileName, modalImagemFile);
      if (error) {
        setModalEditError('Erro ao fazer upload da nova imagem.');
        setModalEditLoading(false);
        return;
      }
      imagem_url = supabase.storage.from('portfolio').getPublicUrl(fileName).data.publicUrl;
    }
    // Não permitir campos obrigatórios vazios
    if (!modalProjeto.titulo || !modalProjeto.descricao) {
      setModalEditError('Título e descrição são obrigatórios.');
      setModalEditLoading(false);
      return;
    }
    // Atualizar projeto (exceto linguagens/categorias)
    const { error } = await supabase.from('projetos').update({
      titulo: modalProjeto.titulo,
      descricao: modalProjeto.descricao,
      link: modalProjeto.link,
      imagem_url
    }).eq('id', modalProjeto.id);
    if (error) {
      setModalEditError('Erro ao salvar alterações.');
      setModalEditLoading(false);
      return;
    }
    // Atualizar relacionamentos: remover todos e inserir os novos
    await supabase.from('projeto_linguagem').delete().eq('projeto_id', modalProjeto.id);
    await supabase.from('projeto_categoria').delete().eq('projeto_id', modalProjeto.id);
    const linguagensIds = getIdsFromNomes(modalProjeto.linguagens || [], linguagensOpcoes);
    for (const linguagem_id of linguagensIds) {
      await supabase.from('projeto_linguagem').insert({ projeto_id: modalProjeto.id, linguagem_id });
    }
    const categoriasIds = getIdsFromNomes(modalProjeto.categorias || [], categoriasOpcoes);
    for (const categoria_id of categoriasIds) {
      await supabase.from('projeto_categoria').insert({ projeto_id: modalProjeto.id, categoria_id });
    }
    setModalEditLoading(false);
    setModalProjeto(null);
    fetchProjetos();
  }
  async function removerModalProjeto() {
    if (!modalProjeto) return;
    if (!window.confirm('Tem certeza que deseja remover este projeto?')) return;
    await handleRemoverProjeto(modalProjeto.id);
    setModalProjeto(null);
  }

  return (
    loadingGlobal ? (
      <div className="flex items-center justify-center min-h-screen text-gray-400">Carregando...</div>
    ) : (
      <div className="flex min-h-screen bg-black text-white">
        {/* Sidebar */}
        <aside className="w-64 bg-black/80 border-r border-white/10 flex flex-col justify-between py-8 px-6">
          <div>
            <div className="mb-12">
              <h1 className="text-2xl font-bold gradient-text">Dashboard</h1>
              <p className="text-gray-400 text-sm mt-2">Bem-vindo{user ? `, ${user.email}` : ''}</p>
            </div>
            <nav className="flex flex-col gap-4">
              <button onClick={() => setAba('portfolio')} className={`flex items-center gap-3 text-lg font-medium transition-colors ${aba === 'portfolio' ? 'text-blue-400' : 'hover:text-blue-400'}`}> <Folder className="w-5 h-5" /> Cases </button>
              <button onClick={() => setAba('estatisticas')} className={`flex items-center gap-3 text-lg font-medium transition-colors ${aba === 'estatisticas' ? 'text-blue-400' : 'hover:text-blue-400'}`}> <BarChart2 className="w-5 h-5" /> Estatísticas </button>
              <button onClick={() => setAba('tags')} className={`flex items-center gap-3 text-lg font-medium transition-colors ${aba === 'tags' ? 'text-blue-400' : 'hover:text-blue-400'}`}> <FolderOpen className="w-5 h-5" /> Tags </button>
              <button onClick={handleLogout} className="flex items-center gap-3 text-lg font-medium text-red-500 hover:text-red-400 transition-colors mt-8"> <LogOut className="w-5 h-5" /> Sair </button>
            </nav>
          </div>
        </aside>
        {/* Área principal */}
        <main className="flex-1 p-10 bg-black min-h-screen">
          <h2 className="text-3xl font-bold mb-8">Painel de Cases</h2>
          {/* Estatísticas rápidas - só na aba estatísticas */}
          {aba === 'estatisticas' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-black/60 rounded-xl p-6 flex items-center gap-4 border border-white/10 shadow hover-lift">
                <FolderOpen className="w-10 h-10 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-blue-400">{stats.total}</p>
                  <p className="text-gray-400">Projetos cadastrados</p>
                </div>
              </div>
              <div className="bg-black/60 rounded-xl p-6 flex items-center gap-4 border border-white/10 shadow hover-lift">
                <BarChart2 className="w-10 h-10 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-blue-400">{stats.ultimo ? new Date(stats.ultimo).toLocaleDateString('pt-BR') : '--'}</p>
                  <p className="text-gray-400">Último projeto enviado</p>
                </div>
              </div>
            </div>
          )}
          {/* Formulário e listagem de projetos - só na aba portfólio */}
          {aba === 'portfolio' && (
            <>
              <form onSubmit={handleUploadProjeto} className="bg-black/60 rounded-xl p-8 mb-10 border border-white/10 max-w-2xl mx-auto flex flex-col gap-4">
                <h3 className="text-2xl font-bold mb-2">Adicionar Case</h3>
                <input
                  type="text"
                  placeholder="Título"
                  className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white"
                  value={titulo}
                  onChange={e => setTitulo(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Descrição"
                  className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white"
                  value={descricao}
                  onChange={e => setDescricao(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Link do Projeto (opcional)"
                  className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white"
                  value={link}
                  onChange={e => setLink(e.target.value)}
                />
                {/* Linguagens (select múltiplo) */}
                <div>
                  <label className="block text-gray-400 mb-1">Linguagens</label>
                  <select
                    multiple
                    className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white w-full"
                    value={linguagens}
                    onChange={e => {
                      const selected = Array.from(e.target.selectedOptions, option => option.value);
                      setLinguagens(selected);
                    }}
                  >
                    {linguagensOpcoes.map(lang => (
                      <option key={lang.id} value={lang.nome}>{lang.nome}</option>
                    ))}
                  </select>
                </div>
                {/* Categorias (select múltiplo) */}
                <div>
                  <label className="block text-gray-400 mb-1">Categorias</label>
                  <select
                    multiple
                    className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white w-full"
                    value={categorias}
                    onChange={e => {
                      const selected = Array.from(e.target.selectedOptions, option => option.value);
                      setCategorias(selected);
                    }}
                  >
                    {categoriasOpcoes.map(cat => (
                      <option key={cat.id} value={cat.nome}>{cat.nome}</option>
                    ))}
                  </select>
                </div>
                {/* Upload de imagem */}
                <div>
                  <label className="block text-gray-400 mb-1">Imagem do Projeto</label>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/webp, image/svg+xml"
                    ref={fileInputRef}
                    onChange={e => setImagemFile(e.target.files?.[0] || null)}
                    className="block w-full text-gray-300"
                    required
                  />
                </div>
                {uploadError && <div className="text-red-500 text-sm">{uploadError}</div>}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  disabled={uploading || linguagensOpcoes.length === 0 || categoriasOpcoes.length === 0}
                >
                  {uploading ? 'Enviando...' : 'Adicionar Projeto'}
                </button>
              </form>
              {/* Listagem de projetos com paginação e imagens centralizadas/redimensionadas */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {loadingProjetos ? (
                  <div className="col-span-full text-center text-gray-400">Carregando projetos...</div>
                ) : projetos.length === 0 ? (
                  <div className="col-span-full text-center text-gray-400">Nenhum projeto cadastrado ainda.</div>
                ) : (
                  projetos
                    .slice((paginaAtual - 1) * projetosPorPagina, paginaAtual * projetosPorPagina)
                    .map((proj) => (
                      <div key={proj.id} className="bg-black/60 rounded-2xl overflow-hidden border border-white/10 shadow-lg project-card flex flex-col">
                        <div className="relative flex items-center justify-center h-48 bg-black/80 overflow-hidden">
                          {proj.imagem_url && (
                            <img
                              src={proj.imagem_url}
                              alt={proj.titulo}
                              loading="lazy"
                              className="max-h-40 w-auto object-contain mx-auto"
                              style={{ maxWidth: '100%' }}
                            />
                          )}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-2xl font-bold mb-2">{proj.titulo}</h3>
                          <p className="text-gray-300 mb-4 flex-1">{proj.descricao}</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {proj.linguagens && proj.linguagens.length > 0 ? (
                              proj.linguagens.map((lang: string, idx: number) => (
                                <span key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">{lang}</span>
                              ))
                            ) : (
                              <span className="text-gray-500 text-xs">Nenhuma linguagem</span>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {proj.categorias && proj.categorias.length > 0 ? (
                              proj.categorias.map((cat: string, idx: number) => (
                                <span key={idx} className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-sm">{cat}</span>
                              ))
                            ) : (
                              <span className="text-gray-500 text-xs">Nenhuma categoria</span>
                            )}
                          </div>
                          {proj.link && (
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">Ver Projeto</a>
                          )}
                          <p className="text-xs text-gray-500 mt-auto">Criado em: {new Date(proj.criado_em).toLocaleDateString('pt-BR')}</p>
                          <div className="flex gap-2 mt-4">
                            <button className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white rounded border border-white/10" onClick={() => openModalProjeto(proj)}>Editar</button>
                            <button className="px-3 py-1 bg-black hover:bg-white/10 text-white rounded border border-white/20" onClick={() => handleRemoverProjeto(proj.id)}>Remover</button>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
              {/* Controles de paginação */}
              <div className="flex justify-center mt-8 gap-2">
                <button onClick={() => setPaginaAtual(p => Math.max(1, p - 1))} disabled={paginaAtual === 1} className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50">Anterior</button>
                {[...Array(totalPaginas)].map((_, idx) => (
                  <button key={idx} onClick={() => setPaginaAtual(idx + 1)} className={`px-3 py-1 rounded ${paginaAtual === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>{idx + 1}</button>
                ))}
                <button onClick={() => setPaginaAtual(p => Math.min(totalPaginas, p + 1))} disabled={paginaAtual === totalPaginas} className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50">Próxima</button>
              </div>
            </>
          )}
          {/* Renderizar painel de tags */}
          {aba === 'tags' && (
            <div className="max-w-2xl mx-auto bg-black/60 rounded-xl p-8 border border-white/10 mt-8">
              <h3 className="text-2xl font-bold mb-6">Gerenciar Tags</h3>
              <div className="mb-8">
                <h4 className="font-semibold mb-2">Linguagens</h4>
                <div className="flex gap-2 mb-2">
                  <input type="text" value={novaLinguagem} onChange={e => setNovaLinguagem(e.target.value)} placeholder="Nova linguagem" className="px-3 py-2 rounded bg-black/30 border border-white/10 text-white" />
                  <button onClick={adicionarLinguagem} className="bg-blue-500 px-4 py-2 rounded text-white">Adicionar</button>
                </div>
                <ul>
                  {linguagensOpcoes.map(l => (
                    <li key={l.id} className="flex items-center gap-2 mb-1">
                      {editLinguagemId === l.id ? (
                        <>
                          <input type="text" value={editLinguagemNome} onChange={e => setEditLinguagemNome(e.target.value)} className="px-2 py-1 rounded bg-black/30 border border-white/10 text-white" />
                          <button onClick={salvarEdicaoLinguagem} className="bg-blue-600 px-2 py-1 rounded text-white">Salvar</button>
                          <button onClick={cancelarEdicaoLinguagem} className="bg-gray-700 px-2 py-1 rounded text-white">Cancelar</button>
                        </>
                      ) : (
                        <>
                          <span>{l.nome}</span>
                          <button onClick={() => iniciarEdicaoLinguagem(l.id, l.nome)} className="bg-gray-800 border border-white/10 px-2 py-1 rounded text-white">Editar</button>
                          <button onClick={() => removerLinguagem(l.id)} className="bg-black border border-white/20 px-2 py-1 rounded text-white">Remover</button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Categorias</h4>
                <div className="flex gap-2 mb-2">
                  <input type="text" value={novaCategoria} onChange={e => setNovaCategoria(e.target.value)} placeholder="Nova categoria" className="px-3 py-2 rounded bg-black/30 border border-white/10 text-white" />
                  <button onClick={adicionarCategoria} className="bg-blue-500 px-4 py-2 rounded text-white">Adicionar</button>
                </div>
                <ul>
                  {categoriasOpcoes.map(c => (
                    <li key={c.id} className="flex items-center gap-2 mb-1">
                      {editCategoriaId === c.id ? (
                        <>
                          <input type="text" value={editCategoriaNome} onChange={e => setEditCategoriaNome(e.target.value)} className="px-2 py-1 rounded bg-black/30 border border-white/10 text-white" />
                          <button onClick={salvarEdicaoCategoria} className="bg-green-500 px-2 py-1 rounded text-white">Salvar</button>
                          <button onClick={cancelarEdicaoCategoria} className="bg-gray-500 px-2 py-1 rounded text-white">Cancelar</button>
                        </>
                      ) : (
                        <>
                          <span>{c.nome}</span>
                          <button onClick={() => iniciarEdicaoCategoria(c.id, c.nome)} className="bg-yellow-500 px-2 py-1 rounded text-white">Editar</button>
                          <button onClick={() => removerCategoria(c.id)} className="bg-red-500 px-2 py-1 rounded text-white">Remover</button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {/* Renderizar modal se modalProjeto estiver aberto */}
          {modalProjeto && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
              <div className="bg-black/90 border border-white/10 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
                <button onClick={closeModalProjeto} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-blue-500/20 transition-colors"><span className="text-white">×</span></button>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Editar Projeto</h2>
                  <div className="flex flex-col gap-4">
                    <input type="text" className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white" value={modalProjeto.titulo} onChange={e => setModalProjeto({ ...modalProjeto, titulo: e.target.value })} placeholder="Título" />
                    <textarea className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white" value={modalProjeto.descricao} onChange={e => setModalProjeto({ ...modalProjeto, descricao: e.target.value })} placeholder="Descrição" />
                    <input type="text" className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white" value={modalProjeto.link || ''} onChange={e => setModalProjeto({ ...modalProjeto, link: e.target.value })} placeholder="Link do Projeto (opcional)" />
                    {/* Imagem atual e upload */}
                    <div>
                      <label className="block text-gray-400 mb-1">Imagem do Projeto</label>
                      {modalProjeto.imagem_url && (
                        <img src={modalProjeto.imagem_url} alt="Imagem atual" loading="lazy" className="mb-2 rounded max-h-40" />
                      )}
                      <input type="file" accept="image/png, image/jpeg, image/webp, image/svg+xml" onChange={e => setModalImagemFile(e.target.files?.[0] || null)} className="block w-full text-gray-300" />
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-1">Linguagens</label>
                      <select multiple className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white w-full" value={modalProjeto.linguagens} onChange={e => setModalProjeto({ ...modalProjeto, linguagens: Array.from(e.target.selectedOptions, option => option.value) })}>
                        {linguagensOpcoes.map(lang => (
                          <option key={lang.id} value={lang.nome}>{lang.nome}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-400 mb-1">Categorias</label>
                      <select multiple className="px-4 py-2 rounded bg-black/30 border border-white/10 text-white w-full" value={modalProjeto.categorias} onChange={e => setModalProjeto({ ...modalProjeto, categorias: Array.from(e.target.selectedOptions, option => option.value) })}>
                        {categoriasOpcoes.map(cat => (
                          <option key={cat.id} value={cat.nome}>{cat.nome}</option>
                        ))}
                      </select>
                    </div>
                    {modalEditError && <div className="text-red-500 text-sm">{modalEditError}</div>}
                    <div className="flex gap-4 mt-4">
                      <button onClick={salvarModalProjeto} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" disabled={modalEditLoading}>{modalEditLoading ? 'Salvando...' : 'Salvar Alterações'}</button>
                      <button onClick={removerModalProjeto} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Remover Projeto</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    )
  );
} 