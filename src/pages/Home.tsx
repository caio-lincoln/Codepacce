import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Cloud,
  Code2,
  Database,
  Shield,
  BarChart,
  Settings,
  Users,
  Zap,
  Cpu,
  Layout,
  Server,
  ArrowRight
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function Home() {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const fullDataWithSoftware = [10, 35, 85, 150, 250, 400];
  const fullDataWithoutSoftware = [10, 15, 20, 25, 30, 35];
  
  const [animatedDataWithSoftware, setAnimatedDataWithSoftware] = useState([10]);
  const [animatedDataWithoutSoftware, setAnimatedDataWithoutSoftware] = useState([10]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDataIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < fullDataWithSoftware.length) {
          setAnimatedDataWithSoftware(fullDataWithSoftware.slice(0, nextIndex + 1));
          setAnimatedDataWithoutSoftware(fullDataWithoutSoftware.slice(0, nextIndex + 1));
          return nextIndex;
        } else {
          setCurrentDataIndex(0);
          setAnimatedDataWithSoftware([10]);
          setAnimatedDataWithoutSoftware([10]);
          return 0;
        }
      });
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: "100+",
      label: "Projetos Entregues"
    },
    {
      value: "50+",
      label: "Clientes Ativos"
    },
    {
      value: "2",
      label: "Anos no Mercado"
    },
    {
      value: "99%",
      label: "Satisfação"
    }
  ];

  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas e responsivas com foco em performance e experiência do usuário.",
      features: ["Single Page Apps", "E-commerce", "Portais", "Sistemas Web"]
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Desenvolvimento de aplicativos nativos e multiplataforma para iOS e Android.",
      features: ["React Native", "Flutter", "iOS Nativo", "Android Nativo"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Soluções em nuvem escaláveis e automatização de processos de desenvolvimento.",
      features: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Modelagem e implementação de bancos de dados otimizados e seguros.",
      features: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Implementação de práticas avançadas de segurança e proteção de dados.",
      features: ["Criptografia", "OAuth 2.0", "Pentest", "Compliance"]
    },
    {
      icon: BarChart,
      title: "Business Intelligence",
      description: "Transformamos dados em insights acionáveis para seu negócio.",
      features: ["Dashboards", "Relatórios", "ETL", "Analytics"]
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: Layout,
      techs: [
        { name: "React", level: "Avançado" },
        { name: "Next.js", level: "Avançado" },
        { name: "TypeScript", level: "Avançado" },
        { name: "Tailwind CSS", level: "Avançado" }
      ]
    },
    {
      category: "Backend",
      icon: Server,
      techs: [
        { name: "Node.js", level: "Avançado" },
        { name: "Python", level: "Avançado" },
        { name: "Java", level: "Avançado" },
        { name: "Go", level: "Intermediário" }
      ]
    },
    {
      category: "Mobile",
      icon: Smartphone,
      techs: [
        { name: "React Native", level: "Avançado" },
        { name: "Flutter", level: "Avançado" },
        { name: "Swift", level: "Intermediário" },
        { name: "Kotlin", level: "Intermediário" }
      ]
    },
    {
      category: "DevOps",
      icon: Cloud,
      techs: [
        { name: "Docker", level: "Avançado" },
        { name: "Kubernetes", level: "Avançado" },
        { name: "AWS", level: "Avançado" },
        { name: "CI/CD", level: "Avançado" }
      ]
    }
  ];

  const chartData = {
    labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'].slice(0, animatedDataWithSoftware.length),
    datasets: [
      {
        label: 'Com Software',
        data: animatedDataWithSoftware,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Sem Software',
        data: animatedDataWithoutSoftware,
        borderColor: 'rgb(156, 163, 175)',
        backgroundColor: 'rgba(156, 163, 175, 0.1)',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 600,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'center' as const,
        labels: {
          boxWidth: 15,
          padding: 15,
          color: 'rgb(229, 231, 235)',
          font: {
            size: 12,
            weight: '500'
          }
        }
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
        backgroundColor: 'rgb(17, 24, 39)',
        titleColor: 'rgb(229, 231, 235)',
        bodyColor: 'rgb(229, 231, 235)',
        borderColor: 'rgb(75, 85, 99)',
        borderWidth: 1,
        padding: 10,
        bodySpacing: 5,
        titleSpacing: 10
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
          drawBorder: false
        },
        ticks: {
          color: 'rgb(229, 231, 235)',
          font: {
            size: 11
          },
          maxRotation: 0
        }
      },
      y: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
          drawBorder: false
        },
        ticks: {
          color: 'rgb(229, 231, 235)',
          font: {
            size: 11
          },
          padding: 8
        },
        title: {
          display: true,
          text: 'Crescimento (%)',
          color: 'rgb(229, 231, 235)',
          font: {
            size: 12,
            weight: '500'
          }
        },
        min: 0,
        max: 450,
        beginAtZero: true
      }
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24 pb-12 md:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Transformando Ideias em{' '}
              <span className="gradient-text">Software de Qualidade</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              Desenvolvemos soluções tecnológicas sob medida para impulsionar 
              seu negócio. Da concepção ao deploy, criamos software que faz a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contato" 
                className="cta-button bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap"
              >
                <Code2 className="w-5 h-5" />
                <span>Quero um Orçamento</span>
              </Link>
              <Link 
                to="/portfolio" 
                className="cta-button border border-white/20 hover:border-blue-500/50 hover:bg-blue-500/10 px-6 py-3 rounded-full text-center w-full sm:w-auto whitespace-nowrap"
              >
                Ver Portfolio
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 overflow-hidden">
            <div className="chart-container bg-black/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl hover-lift">
              <div className="aspect-[4/3] w-full max-w-2xl mx-auto">
                <Line data={chartData} options={chartOptions} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="hover-lift bg-black/50 p-4 md:p-8 rounded-lg backdrop-blur-sm border border-white/10">
              <p className="stat-number text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">{stat.value}</p>
              <p className="text-sm sm:text-base text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos um conjunto completo de serviços de desenvolvimento para 
            transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-black/50 p-6 md:p-8 rounded-lg backdrop-blur-sm border border-white/10">
              <service.icon className="service-icon text-blue-500 w-12 h-12 mb-6" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Utilizamos as tecnologias mais modernas e robustas do mercado para 
            entregar soluções de alta qualidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {techStack.map((stack, index) => (
            <div key={index} className="tech-card bg-black/50 p-6 md:p-8 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <stack.icon className="tech-icon text-blue-500 w-8 h-8" />
                <h3 className="text-xl font-bold">{stack.category}</h3>
              </div>
              
              <div className="space-y-4">
                {stack.techs.map((tech, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-gray-400">{tech.name}</span>
                    <span className={`tech-tag px-3 py-1 rounded-full text-xs ${
                      tech.level === 'Avançado' 
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'bg-gray-500/10 text-gray-400'
                    }`}>
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/tecnologias" 
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
          >
            <span>Explorar tecnologias</span>
            <Cpu className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="hover-lift bg-gradient-to-r from-blue-600/20 to-blue-400/5 p-6 sm:p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-blue-500/20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Pronto para Desenvolver seu Projeto?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos transformar suas ideias em realidade.
          </p>
          <Link 
            to="/contato" 
            className="cta-button inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20"
          >
            <span className="relative z-10">Iniciar Conversa</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}