import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HomeCTA() {
  return (
    <section className="container mx-auto px-4 py-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 md:p-24 text-center group"
      >
        {/* Subtle Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -mt-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tighter font-display leading-tight"
          >
            Pronto para construir o <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">extraordinário</span>?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl font-sans"
        >
          Não apenas entregamos software. Entregamos vantagem competitiva, performance e escala para o seu negócio.
        </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/contato" 
              className="group relative inline-flex items-center px-10 py-4 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <span className="font-display tracking-wide text-lg">Iniciar Projeto</span>
              <div className="ml-3 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black text-black group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}