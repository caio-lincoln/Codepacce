import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  X,
  Code,
  Calendar
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
  const [linguagensOpcoes, setLinguagensOpcoes] = useState<{ id: string, nome: string }[]>([]);
  const [categoriasOpcoes, setCategoriasOpcoes] = useState<{ id: string, nome: string }[]>([]);
  const [loadingGlobal, setLoadingGlobal] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const projetosPorPagina = 9;

  useEffect(() => {
    setLoadingGlobal(true);
    fetchTags().then(() => {
      setLoadingGlobal(false);
    });
  }, []);

  useEffect(() => {
    if (linguagensOpcoes.length > 0 && categoriasOpcoes.length > 0) {
      fetchProjetosComTags();
    }
    // eslint-disable-next-line
  }, [linguagensOpcoes, categoriasOpcoes]);

  useEffect(() => {
    if (paginaAtual !== 1) {
      setPaginaAtual(1);
    }
    // eslint-disable-next-line
  }, [activeFilter]);

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

  useEffect(() => {
    const filtros = document.getElementById('projetos-filtros');
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 80;

    if (filtros) {
      const y = filtros.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [paginaAtual]);

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

  async function fetchTags() {
    const { data: langs } = await supabase.from('linguagens').select('id, nome').order('nome');
    const { data: cats } = await supabase.from('categorias').select('id, nome').order('nome');
    setLinguagensOpcoes(langs || []);
    setCategoriasOpcoes(cats || []);
  }

  async function fetchProjetosComTags() {
    setLoading(true);
    const { count } = await supabase.from('projetos').select('*', { count: 'exact', head: true });
    setTotalPaginas(Math.max(1, Math.ceil((count || 0) / projetosPorPagina)));
    
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
    <div className="pt-32 pb-20 overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.svg')] opacity-[0.03]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 mb-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-6 backdrop-blur-sm tracking-wide">
              Cases
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight text-white">
              Nossas <span className="text-blue-500">Obras Primas</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto font-sans">
              Explore nossa galeria de projetos e descubra como transformamos desafios complexos em soluções digitais elegantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section id="projetos-filtros" className="container mx-auto px-4 mb-16 relative z-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === category.id
                  ? 'bg-blue-500 border-blue-500 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projetos-grid" className="container mx-auto px-4 relative z-10">
        {loadingGlobal ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode='popLayout'>
                {projects.map((project, index) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={() => openProjectDetails(project)}
                    className="group cursor-pointer rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden bg-black/20 p-8 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                      {project.imagem_url ? (
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          src={project.imagem_url}
                          alt={project.titulo}
                          className="relative z-10 max-h-full max-w-full object-contain drop-shadow-2xl"
                        />
                      ) : (
                        <Code className="w-16 h-16 text-gray-600" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        {project.categorias?.slice(0, 2).map((cat, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {cat}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-blue-400 transition-colors">
                        {project.titulo}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-sans">
                        {project.descricao}
                      </p>

                      <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {new Date(project.criado_em).toLocaleDateString('pt-BR')}
                        </div>
                        <span className="flex items-center gap-2 text-sm font-medium text-white group-hover:translate-x-1 transition-transform">
                          Ver Detalhes
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Pagination */}
            {totalPaginas > 1 && (
              <div className="flex justify-center mt-16 gap-3">
                <button 
                  onClick={() => setPaginaAtual(p => Math.max(1, p - 1))} 
                  disabled={paginaAtual === 1} 
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all font-display"
                >
                  Anterior
                </button>
                <div className="flex gap-2">
                  {[...Array(totalPaginas)].map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setPaginaAtual(idx + 1)} 
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-display transition-all ${
                        paginaAtual === idx + 1 
                          ? 'bg-blue-500 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]' 
                          : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setPaginaAtual(p => Math.min(totalPaginas, p + 1))} 
                  disabled={paginaAtual === totalPaginas} 
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-all font-display"
                >
                  Próxima
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={closeProjectDetails}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={closeProjectDetails}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="relative h-[40vh] overflow-hidden bg-white/5">
                {selectedProject.imagem_url ? (
                  <img
                    src={selectedProject.imagem_url}
                    alt={selectedProject.titulo}
                    className="w-full h-full object-contain p-10"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-700">
                    <Code className="w-24 h-24" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-10">
                  <div className="flex items-center gap-3 mb-4">
                    {selectedProject.categorias?.map((cat, idx) => (
                      <span key={idx} className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-display tracking-tight">
                    {selectedProject.titulo}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-10 grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 font-display">Sobre o Projeto</h3>
                    <p className="text-gray-400 leading-relaxed text-lg font-light font-sans">
                      {selectedProject.descricao}
                    </p>
                  </div>

                  {selectedProject.linguagens && selectedProject.linguagens.length > 0 && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 font-display">Tecnologias</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.linguagens.map((lang, idx) => (
                          <span key={idx} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Data</span>
                      <span className="text-white">{new Date(selectedProject.criado_em).toLocaleDateString('pt-BR')}</span>
                    </div>
                    {/* Add more metadata if available */}
                  </div>

                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                    >
                      <span>Ver Projeto Online</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 md:p-20 text-center group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -mt-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
              Gostou do que viu?
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              Vamos criar o próximo case de sucesso da sua empresa.
            </p>
            <Link 
              to="/contato" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300 group"
            >
              <span className="font-display">Iniciar Projeto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
