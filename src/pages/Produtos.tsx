import { Link } from 'react-router-dom';
import {
  Bot,
  Mail,
  Brain,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  Code2,
  Database,
  Network,
  BarChart,
  CheckCircle
} from 'lucide-react';

export function Produtos() {
  const mainProduct = {
    name: "Selene",
    tagline: "Sistema Inteligente de Disparo de Emails",
    description: "Uma solução avançada de IA que revoluciona o envio de emails em massa, garantindo alta entregabilidade e respostas automatizadas inteligentes através de machine learning.",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80",
    features: [
      {
        icon: Zap,
        title: "Alta Performance",
        description: "Capacidade de envio de mais de 100 mil emails em milissegundos com taxa de entrega otimizada"
      },
      {
        icon: Brain,
        title: "IA Avançada",
        description: "Machine learning que aprende e se adapta ao perfil da sua empresa para respostas personalizadas"
      },
      {
        icon: Shield,
        title: "Anti-Spam",
        description: "Sistema inteligente que garante que seus emails não caiam na caixa de spam"
      },
      {
        icon: Mail,
        title: "Automação Inteligente",
        description: "Resposta automática para múltiplos clientes com personalização contextual"
      },
      {
        icon: BarChart,
        title: "Analytics Avançado",
        description: "Métricas detalhadas de entrega, abertura, cliques e engajamento em tempo real"
      },
      {
        icon: Database,
        title: "Aprendizado Contínuo",
        description: "Sistema que evolui constantemente com base nas interações e padrões de comunicação"
      }
    ],
    benefits: [
      "Taxa de entrega superior a 99%",
      "Redução de 95% no tempo de envio",
      "Zero ocorrências de spam",
      "Respostas automáticas com 90% de precisão",
      "Economia de 80% em recursos humanos",
      "Escalabilidade ilimitada de envios"
    ],
    stats: [
      {
        value: "100k+",
        label: "Emails/segundo"
      },
      {
        value: "99.9%",
        label: "Taxa de Entrega"
      },
      {
        value: "0%",
        label: "Taxa de Spam"
      },
      {
        value: "90%",
        label: "Precisão IA"
      }
    ],
    capabilities: [
      "Processamento de linguagem natural avançado",
      "Análise de sentimentos em tempo real",
      "Personalização dinâmica de conteúdo",
      "Otimização automática de horários de envio",
      "Segmentação inteligente de destinatários",
      "Detecção e prevenção proativa de spam"
    ]
  };

  const comingSoon = [
    {
      name: "Atlas",
      description: "Plataforma de análise de dados com IA",
      icon: Network,
      status: "Em Desenvolvimento"
    },
    {
      name: "Nova",
      description: "Sistema de automação de processos",
      icon: Code2,
      status: "Em Breve"
    },
    {
      name: "Quantum",
      description: "Solução de segurança cibernética",
      icon: Shield,
      status: "Planejado"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Nossos Produtos</h1>
          <p className="text-gray-400 text-lg">
            Soluções inovadoras desenvolvidas com tecnologia de ponta para 
            transformar a maneira como você se comunica.
          </p>
        </div>
      </section>

      {/* Main Product - Selene */}
      <section className="container mx-auto px-4 mb-20">
        <div className="bg-black/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
          {/* Product Header */}
          <div className="relative h-[300px] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${mainProduct.image})` }}
            >
              <div className="absolute inset-0 bg-blue-900/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12 text-center">
              <Bot className="w-16 h-16 text-blue-500 mb-6 mx-auto" />
              <h2 className="text-4xl font-bold mb-4 text-blue-500">{mainProduct.name}</h2>
              <p className="text-xl text-gray-300 mb-6">{mainProduct.tagline}</p>
              <p className="text-gray-400 max-w-3xl mx-auto">{mainProduct.description}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 border-t border-white/10">
            {mainProduct.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="p-8 lg:p-12 border-t border-white/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainProduct.features.map((feature, index) => (
                <div 
                  key={index}
                  className="feature-item group bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-white/10
                           hover:bg-blue-900/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-blue-500 mb-4 transition-transform duration-300 
                                       group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits & Capabilities */}
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 bg-gradient-to-b from-transparent to-blue-900/10 border-t border-white/10">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-500" />
                Benefícios
              </h3>
              <ul className="space-y-4">
                {mainProduct.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 feature-item">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-400">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Brain className="w-6 h-6 text-blue-500" />
                Capacidades IA
              </h3>
              <ul className="space-y-4">
                {mainProduct.capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center gap-3 feature-item">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-gray-400">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Em Breve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {comingSoon.map((product, index) => (
            <div 
              key={index}
              className="group bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10
                       hover:bg-blue-900/20 hover:border-blue-500/30 transition-all duration-300
                       text-center"
            >
              <product.icon className="w-12 h-12 text-blue-500 mx-auto mb-6 transition-transform 
                                   duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <span className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 text-sm">
                {product.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-blue-600/20 p-12 rounded-2xl backdrop-blur-sm 
                     border border-blue-500/20 text-center hover-lift">
          <h2 className="text-4xl font-bold mb-4">Revolucione sua Comunicação por Email</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Descubra como a Selene pode transformar sua estratégia de email marketing com 
            inteligência artificial e performance incomparável.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 
                     rounded-full text-white transition-all duration-300 hover:scale-105
                     hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span>Agendar Demonstração</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}