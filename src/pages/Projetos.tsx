import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  X,
  Code,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { projectsService, Projeto } from '../services/projectsService';
import { PageBackground, PageHero, CTASection } from '../components/PageLayoutComponents';

export function Projetos() {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);
  const [allProjects, setAllProjects] = useState<Projeto[]>([]);
  const [projects, setProjects] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState(true);
  const [linguagensOpcoes, setLinguagensOpcoes] = useState<{ id: string, nome: string }[]>([]);
  const [categoriasOpcoes, setCategoriasOpcoes] = useState<{ id: string, nome: string }[]>([]);
  const [loadingGlobal, setLoadingGlobal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination Configuration
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function loadData() {
      setLoadingGlobal(true);
      setError(null);
      try {
        const [loadedProjects, loadedCats] = await Promise.all([
          projectsService.getAllProjects(signal),
          projectsService.getCategories(signal)
        ]);
        
        if (!mounted) return;

        setAllProjects(loadedProjects);
        setProjects(loadedProjects);
        setCategoriasOpcoes(loadedCats);
      } catch (error: unknown) {
        if (error instanceof Error && (error.name === 'AbortError' || signal.aborted)) return;
        console.error('Falha ao carregar dados:', error);
        if (mounted) setError('Falha ao carregar projetos. Por favor, tente novamente.');
      } finally {
        if (mounted) setLoadingGlobal(false);
      }
    }

    loadData();

    return () => {
      mounted = false;
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    // Filtrar projetos
    const filtered = activeFilter === 'todos'
      ? allProjects
      : allProjects.filter(project => project.categorias?.map(cat => cat.toLowerCase()).includes(activeFilter));

    // Exibir todos os projetos filtrados sem paginação
    setProjects(filtered);
    setCurrentPage(1); // Resetar para primeira página ao filtrar
  }, [allProjects, activeFilter]);

  // Pagination Logic
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const currentProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      document.getElementById('projetos-grid')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <div className="pt-32 pb-20 overflow-hidden min-h-screen">
      <PageBackground />

      <PageHero
        title={
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Nossos Projetos
          </span>
        }
        description="Conheça algumas das soluções que desenvolvemos para transformar a realidade de nossos clientes."
      />

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
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <div className="text-red-400 mb-4 text-xl">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 hover:bg-red-500/20 transition-colors"
            >
              Recarregar página
            </button>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode='popLayout'>
                {currentProjects.map((project, index) => (
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
                          loading="lazy"
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-16">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 border ${
                      currentPage === page
                        ? 'bg-blue-500 border-blue-500 text-white shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)]'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
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
      <CTASection
        title="Gostou do que viu?"
        description="Vamos criar o próximo case de sucesso da sua empresa."
        buttonText="Iniciar Projeto"
        buttonLink="/contato"
      />
    </div>
  );
}
