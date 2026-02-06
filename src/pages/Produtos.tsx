import {
  Bot,
  Mail,
  Brain,
  Zap,
  Shield,
  BarChart,
  Database,
  Network,
  Sparkles,
  CheckCircle,
  Code2
} from 'lucide-react';
import { PageBackground, PageHero, CTASection } from '../components/PageLayoutComponents';
import { FeatureCard } from '../components/ui/FeatureCard';
import { StatCard } from '../components/ui/StatCard';

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
      <PageBackground />

      <PageHero
        title="Nossos Produtos"
        description="Soluções inovadoras desenvolvidas com tecnologia de ponta para transformar a maneira como você se comunica."
      />

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
              <StatCard
                key={index}
                value={stat.value}
                label={stat.label}
                type="minimal"
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Features Grid */}
          <div className="p-8 lg:p-12 border-t border-white/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainProduct.features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                  className="bg-black/50 border-white/10 hover:bg-blue-900/20 hover:border-blue-500/30"
                />
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

      {/* Coming Soon Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Em Breve</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {comingSoon.map((product, index) => (
            <FeatureCard
              key={index}
              icon={product.icon}
              title={product.name}
              description={product.description}
              delay={index * 0.1}
            >
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className={`text-sm px-3 py-1 rounded-full border ${
                  product.status === 'Em Desenvolvimento' 
                    ? 'text-blue-400 border-blue-500/30 bg-blue-500/10'
                    : 'text-gray-400 border-white/10 bg-white/5'
                }`}>
                  {product.status}
                </span>
              </div>
            </FeatureCard>
          ))}
        </div>
      </section>

      <CTASection
        title="Interessado em nossas soluções?"
        description="Entre em contato conosco para saber mais sobre como nossos produtos podem impulsionar o seu negócio."
        buttonText="Fale Conosco"
        buttonLink="/contato"
      />
    </div>
  );
}