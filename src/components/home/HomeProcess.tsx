import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Descobrir",
    // icon: PiBinoculars, // Substituído por imagem conforme solicitado
    image: "/discovery-icon.png", 
    description: "Chegou a hora de reunir os requisitos, listá-los e, finalmente, agrupar as entregas por valor, alinhando-as às suas expectativas. É a construção do foguete!"
  },
  {
    title: "Projeto",
    image: "/lancamento (1).png",
    description: "As entregas são divididas em ciclos de Sprint, onde iniciamos o trabalho e você pode acompanhar e fornecer feedback em cada ciclo. Essencial para alcançar a perfeição."
  },
  {
    title: "Construir",
    image: "/trabalho-em-progresso (1).png",
    description: "Após a conclusão, iniciamos o processo de melhoria contínua para aprimorar o projeto a cada dia. Um aspecto crucial para agregar valor. Vamos fazer o foguete \"andar em marcha à ré\"!"
  },
  {
    title: "Crescer",
    image: "/start-up.png",
    description: "Realizamos uma revisão geral do projeto para identificar melhorias importantes para uma excelente experiência do usuário e visualização de valor."
  }
];

export function HomeProcess() {
  return (
    <section className="container mx-auto px-4 py-32 relative overflow-hidden">
      <div className="mb-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">Nossa Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-display">
            Como Transformamos <span className="text-blue-500">Ideias</span>
          </h2>
          <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto opacity-50"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {processSteps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center group">
            {/* Connector Arrow (Desktop only, not on last item) */}
            {index < processSteps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent pointer-events-none z-0 transform translate-y-2"></div>
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
              className="relative z-10 mb-8"
            >
              <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 shadow-2xl backdrop-blur-md">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                {step.image ? (
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    loading="lazy"
                    className="w-10 h-10 object-contain relative z-10"
                  />
                ) : (
                  // Fallback if icon was used
                  <div className="w-10 h-10" />
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-4 font-display">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-[220px] mx-auto font-light">
                {step.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}