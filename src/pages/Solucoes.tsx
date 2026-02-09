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
  CheckCircle2
} from 'lucide-react';
import { PageBackground, PageHero, SectionHeader, CTASection } from '../components/PageLayoutComponents';
import { FeatureCard } from '../components/ui/FeatureCard';

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
      <PageBackground />

      <PageHero
        badge="Expertise Técnica"
        title={
          <>
            Soluções de ponta a ponta para <br />
            <span className="text-blue-500">desafios complexos</span>
          </>
        }
        description="Nossa stack tecnológica é selecionada para garantir performance, segurança e escalabilidade para o seu negócio."
      />

      {/* Solutions Grid */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              delay={index * 0.1}
            >
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
            </FeatureCard>
          ))}
        </div>
      </section>

      {/* Process Section - Refined */}
      <section className="container mx-auto px-4 mb-32 relative z-10">
        <SectionHeader
          title="Metodologia Ágil"
          subtitle="Como transformamos complexidade em simplicidade"
        />

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

      <CTASection
        title="Pronto para escalar sua tecnologia?"
        description="Agende uma consultoria gratuita com nossos especialistas e descubra o melhor caminho para o seu projeto."
        buttonText="Falar com Especialista"
        buttonLink="/contato"
      />
    </div>
  );
}
