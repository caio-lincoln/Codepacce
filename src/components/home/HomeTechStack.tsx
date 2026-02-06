import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Cloud,
  Layout,
  Server,
  ArrowRight
} from 'lucide-react';

const techStack = [
  {
    category: "Frontend",
    icon: Layout,
    techs: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind", level: "Expert" }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    techs: [
      { name: "Node.js", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Advanced" },
      { name: "Go", level: "Advanced" }
    ]
  },
  {
    category: "Mobile",
    icon: Smartphone,
    techs: [
      { name: "React Native", level: "Expert" },
      { name: "Flutter", level: "Expert" },
      { name: "Swift", level: "Advanced" },
      { name: "Kotlin", level: "Advanced" }
    ]
  },
  {
    category: "DevOps",
    icon: Cloud,
    techs: [
      { name: "Docker", level: "Expert" },
      { name: "K8s", level: "Expert" },
      { name: "AWS", level: "Expert" },
      { name: "Terraform", level: "Advanced" }
    ]
  }
];

export function HomeTechStack() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider mb-6"
          >
            STACK TECNOLÓGICO
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-display"
          >
            Construído com <span className="text-blue-500">Excelência</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light font-sans"
          >
            Utilizamos as ferramentas mais modernas e robustas do mercado para garantir performance, escalabilidade e segurança.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <stack.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 font-display">{stack.category}</h3>
              
              <ul className="space-y-3">
                {stack.techs.map((tech, idx) => (
                  <li key={idx} className="flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mr-3" />
                    {tech.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link 
            to="/tecnologias" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 group"
          >
            <span>Ver especificações técnicas completas</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}