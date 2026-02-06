import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Award,
  Rocket,
  Eye,
  Coffee,
  Clock,
  Zap,
  Heart
} from 'lucide-react';
import { PageBackground, PageHero, SectionHeader, CTASection } from '../components/PageLayoutComponents';
import { FeatureCard } from '../components/ui/FeatureCard';
import { StatCard } from '../components/ui/StatCard';

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
      <PageBackground />

      <PageHero
        badge="Nossa História"
        title={
          <>
            Transformando ideias em <br />
            <span className="text-blue-500">realidade digital</span>
          </>
        }
        description="Somos uma empresa de tecnologia dedicada a criar soluções digitais inovadoras que não apenas resolvem problemas, mas impulsionam o sucesso dos nossos clientes."
      />

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
        <SectionHeader
          title="Nossos Valores"
          subtitle="Os princípios fundamentais que guiam cada decisão e linha de código"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <FeatureCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 0.1}
              className="bg-white/[0.02] rounded-2xl border-white/[0.05] hover:bg-white/[0.04]"
            />
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <SectionHeader title="Nossa Jornada" />

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
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Vamos construir algo incrível?"
        description="Estamos prontos para ajudar a transformar suas ideias em realidade. Entre em contato e descubra como podemos impulsionar seu negócio."
        buttonText="Iniciar Projeto"
        buttonLink="/contato"
      />
    </div>
  );
}
