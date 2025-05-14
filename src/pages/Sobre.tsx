import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  Award,
  Rocket,
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
      value: "15000+",
      label: "Horas Codando"
    },
    {
      icon: Zap,
      value: "99%",
      label: "Taxa de Satisfação"
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-gray-400 text-lg">
            Somos uma empresa de tecnologia dedicada a transformar ideias em 
            soluções digitais inovadoras que impulsionam o sucesso dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-gray-400">
              Desenvolver soluções tecnológicas inovadoras que transformam 
              a maneira como as empresas operam, sempre priorizando a qualidade 
              e a satisfação do cliente.
            </p>
          </div>
          <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
            <p className="text-gray-400">
              Ser referência em desenvolvimento de software, reconhecida pela 
              excelência técnica e capacidade de entregar soluções que fazem 
              a diferença no mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Os princípios que guiam nossa jornada e definem quem somos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-white/10 text-center">
              <value.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A jornada que nos trouxe até aqui
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-8 mb-8">
              <div className="w-24 flex-shrink-0 text-right">
                <span className="text-blue-500 font-bold">{item.year}</span>
              </div>
              <div className="flex-grow bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black/50 p-6 rounded-lg backdrop-blur-sm border border-white/10 text-center">
              <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <p className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/5 p-12 rounded-2xl backdrop-blur-sm border border-blue-500/20 text-center">
          <h2 className="text-4xl font-bold mb-4">Vamos Trabalhar Juntos?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Estamos prontos para ajudar a transformar suas ideias em realidade.
          </p>
          <Link 
            to="/contato" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-all duration-300 transform hover:scale-105"
          >
            <span>Iniciar Projeto</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}