import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Award,
  Rocket,
  Eye,
  Heart,
  Coffee,
  Clock,
  Zap,
  ArrowRight
} from 'lucide-react';

export function Sobre() {
  const values = [
    {
      icon: Heart,
      title: "Paixão por Tecnologia",
      description: "Somos movidos pela paixão em criar soluções inovadoras que transformam negócios."
    },
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Priorizamos entender e atender as necessidades específicas de cada cliente."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos a excelência em cada linha de código que escrevemos."
    },
    {
      icon: Rocket,
      title: "Inovação",
      description: "Estamos sempre atualizados com as últimas tendências e tecnologias."
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "Fundação",
      description: "Início da jornada com foco em desenvolvimento web e mobile."
    },
    {
      year: "2023",
      title: "Expansão",
      description: "Ampliação do portfólio e equipe, incluindo soluções enterprise."
    },
    {
      year: "2024",
      title: "Consolidação",
      description: "Reconhecimento no mercado e parcerias estratégicas."
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Clientes Satisfeitos"
    },
    {
      icon: Coffee,
      value: "100+",
      label: "Projetos Entregues"
    },
    {
      icon: Clock,
      value: "15k+",
      label: "Horas Codando"
    },
    {
      icon: Zap,
      value: "99%",
      label: "Taxa de Satisfação"
    }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-6 backdrop-blur-sm tracking-wide">
              Nossa História
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight text-white">
              Transformando ideias em <br />
              <span className="text-blue-500">realidade digital</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto font-sans">
              Somos uma empresa de tecnologia dedicada a criar soluções digitais inovadoras 
              que não apenas resolvem problemas, mas impulsionam o sucesso dos nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-white/5 p-10 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Rocket className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-display">Nossa Missão</h3>
            <p className="text-gray-400 leading-relaxed font-sans">
              Capacitar empresas através da tecnologia, entregando soluções inovadoras que geram valor real e duradouro.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group bg-white/5 p-10 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-display">Nossa Visão</h3>
            <p className="text-gray-400 leading-relaxed font-sans">
              Ser referência global em desenvolvimento de software, reconhecida pela excelência técnica e design centrado no usuário.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-display text-white"
          >
            Nossos Valores
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg font-light max-w-2xl mx-auto"
          >
            Os princípios fundamentais que guiam cada decisão e linha de código
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.02] p-8 rounded-2xl backdrop-blur-sm border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 text-gray-300 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display text-white">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-display text-white"
          >
            Nossa Jornada
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 md:left-1/2 md:-ml-px" />

          {timeline.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 md:text-right pl-16 md:pl-0">
                <div className={`bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8 md:text-left'
                }`}>
                  <span className="text-blue-400 font-bold text-lg mb-2 block font-display">{item.year}</span>
                  <h3 className="text-xl font-bold mb-2 text-white font-display">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-sans">{item.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Spacer for alternate side */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats - Minimalist */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all duration-300">
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-4xl font-bold text-white mb-2 font-display tracking-tight group-hover:text-blue-400 transition-colors duration-300">{stat.value}</p>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider font-sans">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-12 md:p-20 text-center group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -mt-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
              Vamos construir algo incrível?
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed font-sans">
              Estamos prontos para ajudar a transformar suas ideias em realidade.
              Entre em contato e descubra como podemos impulsionar seu negócio.
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
