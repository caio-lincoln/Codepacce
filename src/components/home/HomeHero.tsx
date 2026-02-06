import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HomeHero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
          onError={(e) => {
            // Ignorar erros de abortamento de carregamento de mídia ao trocar de rota
            const target = e.target as HTMLVideoElement;
            if (target.error?.code === MediaError.MEDIA_ERR_ABORTED) return;
            // Opcional: tentar recarregar se for outro erro ou apenas ignorar
          }}
        >
          <source src="/bg-banner-nano.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-medium text-gray-300 tracking-[0.2em] uppercase font-sans">Novos Projetos Disponíveis</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter text-white font-display"
        >
          Sua ideia merece uma <br className="hidden md:block" />
          <span className="text-blue-500">
            solução de impacto
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light font-sans"
        >
          Desenvolvemos softwares, apps e soluções digitais sob medida,
          <br className="hidden md:block" /> com foco em inovação, estratégia e resultados reais.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link 
            to="/contato" 
            className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 flex items-center gap-3 font-display"
          >
            <span>Iniciar Projeto</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/cases" 
            className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105 font-display"
          >
            Ver Cases
          </Link>
        </motion.div>
      </div>
    </section>
  );
}