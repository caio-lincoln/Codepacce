import React from 'react';
import { Link } from 'react-router-dom';
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
  Zap
} from 'lucide-react';

export function Solucoes() {
  const solutions = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Criamos aplicações web modernas e responsivas que proporcionam a melhor experiência aos usuários.",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Portais Corporativos",
        "E-commerce",
        "Sistemas de Gestão",
        "Integrações com APIs"
      ],
      technologies: ["React", "Next.js", "Vue.js", "Node.js", "TypeScript"]
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Mobile",
      description: "Desenvolvemos aplicativos nativos e multiplataforma que engajam seus usuários.",
      features: [
        "Apps iOS e Android",
        "Apps Multiplataforma",
        "UI/UX Mobile",
        "Integração com APIs",
        "Push Notifications",
        "Offline First"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Implementamos soluções em nuvem escaláveis e processos de desenvolvimento ágeis.",
      features: [
        "Arquitetura Cloud",
        "CI/CD Pipeline",
        "Containerização",
        "Monitoramento",
        "Segurança",
        "Backup"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins"]
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Projetamos e implementamos soluções de dados eficientes e escaláveis.",
      features: [
        "Modelagem de Dados",
        "Otimização",
        "Migração",
        "Replicação",
        "Backup",
        "Monitoramento"
      ],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Implementamos as melhores práticas de segurança em todas as soluções.",
      features: [
        "Autenticação",
        "Autorização",
        "Criptografia",
        "Testes de Penetração",
        "Compliance",
        "Auditoria"
      ],
      technologies: ["OAuth", "JWT", "SSL/TLS", "WAF"]
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Transformamos dados em insights acionáveis para seu negócio.",
      features: [
        "Dashboards",
        "Relatórios",
        "ETL",
        "Data Warehouse",
        "Analytics",
        "Visualização"
      ],
      technologies: ["Power BI", "Tableau", "Python", "R"]
    }
  ];

  return (
    <div className="py-20">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Nossas Soluções</h1>
          <p className="text-gray-400 text-lg">
            Oferecemos um conjunto completo de serviços de desenvolvimento de software
            para atender às necessidades específicas do seu negócio.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="group bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10 
                         transition-all duration-500 hover:scale-105 hover:bg-blue-900/20
                         hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="relative">
                <solution.icon className="text-blue-500 w-12 h-12 mb-6 transition-transform duration-500 
                                       group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 
                              group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 transition-colors duration-300 
                           group-hover:text-blue-400">{solution.title}</h3>
              
              <p className="text-gray-400 mb-6 transition-colors duration-300 
                          group-hover:text-gray-300">{solution.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 transition-colors duration-300 
                             group-hover:text-blue-400">Recursos:</h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 transition-transform duration-300 
                                           hover:translate-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full transition-all duration-300 
                                    group-hover:scale-150 group-hover:bg-blue-400" />
                      <span className="text-gray-400 transition-colors duration-300 
                                     group-hover:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 transition-colors duration-300 
                             group-hover:text-blue-400">Tecnologias:</h4>
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 text-sm
                               transition-all duration-300 hover:scale-110 hover:bg-blue-500/20
                               hover:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nosso Processo</h2>
          <p className="text-gray-400">Como transformamos suas ideias em realidade</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center transform transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4
                          transition-all duration-500 hover:bg-blue-500/20 group">
              <Users className="w-8 h-8 text-blue-500 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="font-bold mb-2">1. Discovery</h3>
            <p className="text-gray-400">Entendemos suas necessidades e objetivos</p>
          </div>
          
          <div className="text-center transform transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4
                          transition-all duration-500 hover:bg-blue-500/20 group">
              <Code className="w-8 h-8 text-blue-500 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="font-bold mb-2">2. Desenvolvimento</h3>
            <p className="text-gray-400">Construímos sua solução com as melhores práticas</p>
          </div>

          <div className="text-center transform transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4
                          transition-all duration-500 hover:bg-blue-500/20 group">
              <Settings className="w-8 h-8 text-blue-500 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="font-bold mb-2">3. Testes</h3>
            <p className="text-gray-400">Garantimos qualidade e performance</p>
          </div>

          <div className="text-center transform transition-all duration-500 hover:scale-105">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4
                          transition-all duration-500 hover:bg-blue-500/20 group">
              <Zap className="w-8 h-8 text-blue-500 transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="font-bold mb-2">4. Deploy</h3>
            <p className="text-gray-400">Entregamos e mantemos sua solução</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/5 p-12 rounded-2xl backdrop-blur-sm border border-blue-500/20 text-center
                      transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/10">
          <h2 className="text-4xl font-bold mb-4">Vamos Construir Algo Incrível?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Estamos prontos para transformar sua ideia em realidade.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white
                     transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}