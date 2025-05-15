import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import {
  ShoppingBag,
  Smartphone,
  Building2,
  Briefcase,
  ArrowRight,
  ExternalLink,
  X,
  Code,
  Calendar,
  Users,
  CheckCircle,
  Clock,
  Layers,
  Database,
  Globe,
  Server,
  Shield,
  Zap,
  BarChart,
  Cpu
} from 'lucide-react';

type Projeto = {
  id: string;
  titulo: string;
  descricao: string;
  imagem_url?: string;
  link?: string;
  criado_em: string;
  criado_por: string;
  linguagens?: string[];
  categorias?: string[];
};

export function Projetos() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);
  const [allProjects, setAllProjects] = useState<Projeto[]>([]);
  const [projects, setProjects] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [novoProjeto, setNovoProjeto] = useState({
    titulo: '',
    descricao: '',
    imagem_url: '',
    link: ''
  });
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [editProjeto, setEditProjeto] = useState({
    titulo: '',
    descricao: '',
    imagem_url: '',
    link: ''
  });
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [linguagensOpcoes, setLinguagensOpcoes] = useState<{ id: string, nome: string }[]>([]);
  const [categoriasOpcoes, setCategoriasOpcoes] = useState<{ id: string, nome: string }[]>([]);
  const [loadingGlobal, setLoadingGlobal] = useState(false);
  const [linguagensSelecionadas, setLinguagensSelecionadas] = useState<string[]>([]);
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<string[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const projetosPorPagina = 9;

  useEffect(() => {
    setLoadingGlobal(true);
    fetchTags().then(() => {
      setLoadingGlobal(false);
    });
    supabase.auth.getUser().then(({ data }: { data: { user: any } }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event: any, session: any) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (linguagensOpcoes.length > 0 && categoriasOpcoes.length > 0) {
      fetchProjetosComTags();
    }
    // eslint-disable-next-line
  }, [linguagensOpcoes, categoriasOpcoes]);

  // Adicionar este useEffect para garantir que ao trocar o filtro, a página volte para 1
  useEffect(() => {
    if (paginaAtual !== 1) {
      setPaginaAtual(1);
    }
    // Não atualize os projetos aqui, deixe o outro useEffect cuidar disso
    // Isso evita que a grid fique vazia ao trocar o filtro estando em outra página
    // eslint-disable-next-line
  }, [activeFilter]);

  // No useEffect de filtragem e paginação, só atualize os projetos se a página já estiver correta
  useEffect(() => {
    // Filtrar projetos
    const filtered = activeFilter === 'todos'
      ? allProjects
      : allProjects.filter(project => project.categorias?.map(cat => cat.toLowerCase()).includes(activeFilter));

    // Calcular total de páginas com base nos resultados filtrados
    const novoTotalPaginas = Math.max(1, Math.ceil(filtered.length / projetosPorPagina));
    setTotalPaginas(novoTotalPaginas);

    // Se a página atual for maior que o novo total de páginas, ajustar para a última página
    if (paginaAtual > novoTotalPaginas) {
      setPaginaAtual(novoTotalPaginas);
    }

    // Paginar
    const from = (paginaAtual - 1) * projetosPorPagina;
    const to = from + projetosPorPagina;
    setProjects(filtered.slice(from, to));
  }, [allProjects, activeFilter, paginaAtual, projetosPorPagina]);

  // Adicionar useEffect para scroll ao topo ao trocar de página
  useEffect(() => {
    const filtros = document.getElementById('projetos-filtros');
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80; // ajuste se necessário

    if (filtros) {
      const y = filtros.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [paginaAtual]);

  // Filtro dinâmico de categorias
  const categories = [
    { id: 'todos', label: 'Todos' },
    ...categoriasOpcoes.map(cat => ({ id: cat.nome.toLowerCase(), label: cat.nome }))
  ];

  const openProjectDetails = (project: Projeto) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  function handleEdit(project: Projeto) {
    setEditId(project.id);
    setEditProjeto({
      titulo: project.titulo,
      descricao: project.descricao,
      imagem_url: project.imagem_url || '',
      link: project.link || ''
    });
    setEditError(null);
  }

  function handleCancelEdit() {
    setEditId(null);
    setEditProjeto({ titulo: '', descricao: '', imagem_url: '', link: '' });
    setEditError(null);
  }

  async function handleSaveEdit(id: string) {
    setEditLoading(true);
    setEditError(null);
    if (!editProjeto.titulo || !editProjeto.descricao) {
      setEditError('Título e descrição são obrigatórios.');
      setEditLoading(false);
      return;
    }
    const { error } = await supabase.from('projetos').update(editProjeto).eq('id', id);
    setEditLoading(false);
    if (error) {
      setEditError('Erro ao salvar alterações.');
    } else {
      setProjects(projects.map(p => p.id === id ? { ...p, ...editProjeto } : p));
      setEditId(null);
      setEditProjeto({ titulo: '', descricao: '', imagem_url: '', link: '' });
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Tem certeza que deseja remover este projeto?')) return;
    const { error } = await supabase.from('projetos').delete().eq('id', id);
    if (error) {
      alert('Erro ao remover projeto.');
    } else {
      setProjects(projects.filter(p => p.id !== id));
      if (selectedProject && selectedProject.id === id) {
        closeProjectDetails();
      }
    }
  }

  async function handleAddProjeto(e: React.FormEvent) {
    e.preventDefault();
    setAddLoading(true);
    setAddError(null);
    if (!novoProjeto.titulo || !novoProjeto.descricao) {
      setAddError('Título e descrição são obrigatórios.');
      setAddLoading(false);
      return;
    }
    const { data, error } = await supabase.from('projetos').insert({
      ...novoProjeto,
      criado_por: user.id
    }).select('id');
    if (error || !data || !data[0]?.id) {
      setAddError('Erro ao adicionar projeto.');
      setAddLoading(false);
      return;
    }
    const projetoId = data[0].id;
    const linguagensIds = linguagensOpcoes.filter(l => linguagensSelecionadas.includes(l.nome)).map(l => l.id);
    for (const linguagem_id of linguagensIds) {
      await supabase.from('projeto_linguagem').insert({ projeto_id: projetoId, linguagem_id });
    }
    const categoriasIds = categoriasOpcoes.filter(c => categoriasSelecionadas.includes(c.nome)).map(c => c.id);
    for (const categoria_id of categoriasIds) {
      await supabase.from('projeto_categoria').insert({ projeto_id: projetoId, categoria_id });
    }
    setAddLoading(false);
    setNovoProjeto({ titulo: '', descricao: '', imagem_url: '', link: '' });
    setLinguagensSelecionadas([]);
    setCategoriasSelecionadas([]);
    fetchProjetosComTags();
  }

  // Função para buscar opções de tags
  async function fetchTags() {
    const { data: langs } = await supabase.from('linguagens').select('id, nome').order('nome');
    const { data: cats } = await supabase.from('categorias').select('id, nome').order('nome');
    setLinguagensOpcoes(langs || []);
    setCategoriasOpcoes(cats || []);
  }

  // Função para buscar projetos + relacionamentos
  async function fetchProjetosComTags() {
    setLoading(true);
    // Buscar total de projetos para calcular páginas
    const { count } = await supabase.from('projetos').select('*', { count: 'exact', head: true });
    setTotalPaginas(Math.max(1, Math.ceil((count || 0) / projetosPorPagina)));
    // Buscar todos os projetos (remover range)
    const { data: projetosData, error } = await supabase
      .from('projetos')
      .select('*')
      .order('criado_em', { ascending: false });
    if (error || !projetosData) {
      setProjects([]);
      setLoading(false);
      return;
    }
    const { data: relLinguagens } = await supabase.from('projeto_linguagem').select('projeto_id, linguagem_id');
    const { data: relCategorias } = await supabase.from('projeto_categoria').select('projeto_id, categoria_id');
    const projetosComTags = projetosData.map(proj => {
      const linguagensIds = relLinguagens?.filter(r => r.projeto_id === proj.id).map(r => r.linguagem_id) || [];
      const categoriasIds = relCategorias?.filter(r => r.projeto_id === proj.id).map(r => r.categoria_id) || [];
      return {
        ...proj,
        linguagens: linguagensOpcoes.filter(l => linguagensIds.includes(l.id)).map(l => l.nome),
        categorias: categoriasOpcoes.filter(c => categoriasIds.includes(c.id)).map(c => c.nome),
      };
    });
    setProjects(projetosComTags);
    setAllProjects(projetosComTags);
    setLoading(false);
  }

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Nossos Projetos</h1>
          <p className="text-gray-400 text-lg">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos clientes
            a alcançarem seus objetivos através da tecnologia.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section id="projetos-filtros" className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-button px-6 py-2 rounded-full ${
                activeFilter === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-black/50 text-gray-400 hover:bg-blue-500/10 hover:text-blue-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projetos-grid" className="container mx-auto px-4">
        {loadingGlobal ? (
          <div className="flex items-center justify-center min-h-screen text-gray-400">Carregando...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div className="bg-black/60 rounded-2xl overflow-hidden border border-white/10 shadow-lg project-card flex flex-col" key={project.id}>
                <div className="relative flex items-center justify-center h-48 bg-black/80 overflow-hidden">
                  {project.imagem_url && (
                    <img
                      src={project.imagem_url}
                      alt={project.titulo}
                      className="max-h-40 w-auto object-contain mx-auto"
                      style={{ maxWidth: '100%' }}
                    />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-2">{project.titulo}</h3>
                  <p className="text-gray-300 mb-4 flex-1">{project.descricao}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.linguagens && project.linguagens.length > 0 ? (
                      project.linguagens.map((lang: string, idx: number) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">{lang}</span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-xs">Nenhuma linguagem</span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.categorias && project.categorias.length > 0 ? (
                      project.categorias.map((cat: string, idx: number) => (
                        <span key={idx} className="bg-blue-900/20 text-blue-400 px-3 py-1 rounded-full text-sm">{cat}</span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-xs">Nenhuma categoria</span>
                    )}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-2">Ver Projeto</a>
                  )}
                  <p className="text-xs text-gray-500 mt-auto">Criado em: {new Date(project.criado_em).toLocaleDateString('pt-BR')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Controles de paginação - agora logo após a grid */}
        <div className="flex justify-center mt-8 gap-2">
          <button onClick={() => setPaginaAtual(p => Math.max(1, p - 1))} disabled={paginaAtual === 1} className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50">Anterior</button>
          {[...Array(totalPaginas)].map((_, idx) => (
            <button key={idx} onClick={() => setPaginaAtual(idx + 1)} className={`px-3 py-1 rounded ${paginaAtual === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white'}`}>{idx + 1}</button>
          ))}
          <button onClick={() => setPaginaAtual(p => Math.min(totalPaginas, p + 1))} disabled={paginaAtual === totalPaginas} className="px-3 py-1 rounded bg-gray-700 text-white disabled:opacity-50">Próxima</button>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div 
            className="bg-black/90 border border-white/10 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden">
              {selectedProject.imagem_url && (
                <img
                  src={selectedProject.imagem_url}
                  alt={selectedProject.titulo}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-bold">{selectedProject.titulo}</h2>
              </div>
              <button 
                onClick={closeProjectDetails}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Modal Content */}
            <div className="p-8">
              <p className="text-gray-400 mb-6">{selectedProject.descricao}</p>
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline block mb-4">Ver Projeto</a>
              )}
              <p className="text-xs text-gray-500 mt-2">Criado em: {new Date(selectedProject.criado_em).toLocaleDateString('pt-BR')}</p>
              <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
                <button
                  onClick={closeProjectDetails}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors flex items-center gap-2"
                >
                  <span>Fechar Detalhes</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/5 p-12 rounded-2xl backdrop-blur-sm border border-blue-500/20 text-center">
          <h2 className="text-4xl font-bold mb-4">Vamos Criar Seu Projeto?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Transforme sua ideia em realidade com nossa expertise em desenvolvimento.
          </p>
          <Link 
            to="/contato" 
            className="cta-button inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white"
          >
            <span>Iniciar Projeto</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}