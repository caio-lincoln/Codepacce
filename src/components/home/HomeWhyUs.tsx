import { motion } from 'framer-motion';
import { Clock, DollarSign, CheckSquare } from 'lucide-react';

export function HomeWhyUs() {
  return (
    <section className="container mx-auto px-4 py-32 relative">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-8 backdrop-blur-sm tracking-wide"
        >
          Por que a Codepacce?
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-display tracking-tighter"
        >
          Enquanto eles discutem o "como",<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">nós entregamos o resultado</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed font-sans"
        >
          O que esperar de nós? Soluções completas e focadas na entrega, sem perder tempo com debates cansativos.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: Clock,
            value: "6+",
            label: "Anos de experiência"
          },
          {
            icon: DollarSign,
            value: "3M+",
            label: "de reais faturados para nossos clientes"
          },
          {
            icon: CheckSquare,
            value: "20+",
            label: "Projetos entregues"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center group hover:border-blue-500/20 hover:bg-white/10 transition-all duration-500"
          >
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
              <item.icon className="w-10 h-10 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h3 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">{item.value}</h3>
            <p className="text-gray-400 font-light text-lg font-sans">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}