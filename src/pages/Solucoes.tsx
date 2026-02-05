import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Cloud,
  Code,
  Database,
  Shield,
  BarChart,
  Settings,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export function Solucoes() {
  const solutions = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas, escaláveis e otimizadas para conversão.",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Portais Corporativos",
        "E-commerce High-End"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Mobile",
      description: "Experiências nativas e multiplataforma que encantam usuários.",
      features: [
        "Apps iOS e Android",
        "Design System Mobile",
        "Integração com Hardware",
        "Offline First"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infraestrutura robusta para garantir disponibilidade total.",
      features: [
        "Arquitetura Serverless",
        "CI/CD Pipelines",
        "Containerização",
        "Auto-scaling"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      icon: Database,
      title: "Engenharia de Dados",
      description: "Arquiteturas de dados preparadas para alto volume e velocidade.",
      features: [
        "Modelagem de Dados",
        "Data Warehousing",
        "Migrações Complexas",
        "Real-time Analytics"
      ],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Kafka"]
    },
    {
      icon: Shield,
      title: "Cibersegurança",
      description: "Proteção avançada para seus ativos digitais mais valiosos.",
      features: [
        "Auditoria de Código",
        "Testes de Penetração",
        "Compliance (LGPD/GDPR)",
        "Criptografia E2E"
      ],
      technologies: ["OAuth 2.0", "JWT", "WAF", "Zero Trust"]
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Transforme dados brutos em decisões estratégicas precisas.",
      features: [
        "Dashboards Interativos",
        "ETL Pipelines",
        "Relatórios Automatizados",
        "Predictive Analytics"
      ],
      technologies: ["Power BI", "Python", "Tableau", "Pandas"]
    }
  ];

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        <div className="absolute top-40 left-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-6 backdrop-blur-sm tracking-wide">
              Expertise Técnica
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight text-white">
              Soluções de ponta a ponta para <br />
              <span className="text-blue-500">desafios complexos</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto font-sans">
              Nossa stack tecnológica é selecionada para garantir performance, segurança e escalabilidade para o seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 p-8 rounded-[2rem] backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-gray-300 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-300 group-hover:scale-110">
                <solution.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 font-display text-white group-hover:text-blue-400 transition-colors">{solution.title}</h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed font-sans">{solution.description}</p>
              
              <div className="mt-auto">
                <div className="mb-6 space-y-3">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-sans">
                      <CheckCircle2 className="w-4 h-4 text-blue-500/50 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {solution.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section - Refined */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-display text-white"
          >
            Metodologia Ágil
          </motion.h2>
          <p className="text-gray-400 font-sans">Como transformamos complexidade em simplicidade</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-blue-900/30" />

          {[
            { icon: Users, title: "Discovery", desc: "Imersão no negócio" },
            { icon: Code, title: "Build", desc: "Desenvolvimento iterativo" },
            { icon: Settings, title: "Test", desc: "QA rigoroso" },
            { icon: Zap, title: "Deploy", desc: "Entrega contínua" }
          ].map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative z-10 group"
            >
              <div className="w-24 h-24 mx-auto bg-[#0a0a0a] rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] transition-all duration-300">
                <step.icon className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="font-bold mb-2 text-white font-display text-xl">{step.title}</h3>
              <p className="text-gray-400 text-sm font-sans">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-20 text-center group"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -mt-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
              Pronto para escalar sua tecnologia?
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed font-sans">
              Agende uma consultoria gratuita com nossos especialistas e descubra o melhor caminho para o seu projeto.
            </p>
            <Link 
              to="/contato" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300 group"
            >
              <span className="font-display">Falar com Especialista</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
