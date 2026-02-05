import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, animate } from 'framer-motion';
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
  ArrowRight,
  Terminal,
  CheckCircle,
  Code,
  Search,
  Compass,
  Rocket,
  FileSearch,
  Layers,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PiBinoculars, PiStrategy, PiRocketLaunch, PiTrendUp, PiBrain, PiLightbulb, PiDesktop, PiDeviceMobile, PiWrench, PiUsersThree, PiShoppingCart, PiClock, PiCurrencyDollar, PiCheckSquare } from 'react-icons/pi';
export function Home() {


  const services = [
    {
      icon: PiBrain,
      title: "Inteligência Artificial",
      description: "Aumente seus resultados com Inteligência Artificial. Nossa expertise em IA ajuda sua empresa a automatizar tarefas complexas, identificar padrões e tomar decisões estratégicas baseadas em dados. Com soluções personalizadas, tornamos suas operações mais eficientes e preparadas para o futuro.",
      features: ["Automação Inteligente", "Análise Preditiva", "Machine Learning", "NLP"]
    },
    {
      icon: PiLightbulb,
      title: "Consultoria",
      description: "Transforme desafios em oportunidades com nossa Consultoria de TI. Analisamos sua operação, identificamos gargalos e propomos soluções estratégicas para impulsionar a eficiência e a inovação em seu negócio. Nossa expertise conecta tecnologia e objetivos de negócios, criando um plano sob medida para o seu sucesso.",
      features: ["Diagnóstico Tecnológico", "Planejamento Estratégico", "Otimização de Processos", "Transformação Digital"]
    },
    {
      icon: PiDesktop,
      title: "Sistemas",
      description: "Desenvolvemos sistemas personalizados para web e desktop que transformam a maneira como sua empresa opera. Com soluções inteligentes para automatizar processos e gerenciar dados, nossos sistemas são projetados para impulsionar a vantagem competitiva da sua empresa. Conte com especialistas que entendem suas necessidades para entregar resultados eficientes e inovadores.",
      features: ["Sistemas Web", "Aplicações Desktop", "Integração de APIs", "Dashboards"]
    },
    {
      icon: PiDeviceMobile,
      title: "Aplicações",
      description: "Crie experiências incríveis em dispositivos móveis com nossos aplicativos. Desenvolvemos soluções completas e intuitivas, personalizadas para atender às necessidades dos seus clientes em dispositivos móveis. Com foco em usabilidade e desempenho, nossos aplicativos transformam ideias em realidade e aproximam sua empresa do seu público.",
      features: ["iOS e Android", "React Native", "UX/UI Design", "Performance Mobile"]
    },
    {
      icon: PiWrench,
      title: "Suporte e Evolução",
      description: "Garanta o desempenho e a evolução contínua de seus sistemas e aplicativos. Nossos serviços de Suporte e Evolução mantêm sua infraestrutura sempre atualizada e eficiente, permitindo que sua empresa se adapte rapidamente às mudanças do mercado. Experimente estabilidade, inovação e alto desempenho ao seu alcance.",
      features: ["Monitoramento 24/7", "Manutenção Preventiva", "Atualizações de Segurança", "SLA Garantido"]
    },
    {
      icon: PiUsersThree,
      title: "Esquadrão como um Serviço",
      description: "Transforme suas operações com nosso modelo de Equipe como Serviço. Com profissionais altamente qualificados e gerenciamento completo de equipes, ajudamos sua empresa a reduzir custos, aumentar a produtividade e entregar softwares de alta qualidade. Concentre-se no que realmente importa: o crescimento do seu negócio.",
      features: ["Profissionais Qualificados", "Gestão Completa", "Redução de Custos", "Alta Performance"]
    },
    {
      icon: PiShoppingCart,
      title: "Comércio eletrônico",
      description: "Está pensando em vender online e se sente limitado por soluções prontas? Prazer em conhecê-lo! Conosco, sua ideia inovadora finalmente sairá do papel e será lançada para seus clientes, seja na área de IoT ou IA. Conte conosco.",
      features: ["Plataformas Personalizadas", "Integração de Pagamentos", "Experiência do Usuário", "Escalabilidade"]
    }
  ];

  const [currentService, setCurrentService] = React.useState(0);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  const Counter = ({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "-50px" });
    
    React.useEffect(() => {
      const node = nodeRef.current;
      if (!node || !inView) return;

      const controls = animate(0, value, {
        duration: 2.5,
        onUpdate(v) {
          node.textContent = v.toFixed(v % 1 !== 0 ? decimals : 0) + suffix;
        },
        ease: "easeOut"
      });

      return () => controls.stop();
    }, [value, suffix, decimals, inView]);

    return <span ref={nodeRef}>0{suffix}</span>;
  };

  const stats = [
    {
      value: 100,
      suffix: "+",
      label: "Soluções Entregues",
      decimals: 0
    },
    {
      value: 50,
      suffix: "+",
      label: "Parceiros de Negócio",
      decimals: 0
    },
    {
      value: 99.9,
      suffix: "%",
      label: "Uptime Garantido",
      decimals: 1
    },
    {
      value: 24,
      suffix: "/7",
      label: "Suporte Especializado",
      decimals: 0
    }
  ];

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

  const processSteps = [
    {
      title: "Descobrir",
      // icon: PiBinoculars, // Substituído por imagem conforme solicitado
      image: "/discovery-icon.png", 
      description: "Chegou a hora de reunir os requisitos, listá-los e, finalmente, agrupar as entregas por valor, alinhando-as às suas expectativas. É a construção do foguete!"
    },
    {
      title: "Projeto",
      image: "/lancamento (1).png",
      description: "As entregas são divididas em ciclos de Sprint, onde iniciamos o trabalho e você pode acompanhar e fornecer feedback em cada ciclo. Essencial para alcançar a perfeição."
    },
    {
      title: "Construir",
      image: "/trabalho-em-progresso (1).png",
      description: "Após a conclusão, iniciamos o processo de melhoria contínua para aprimorar o projeto a cada dia. Um aspecto crucial para agregar valor. Vamos fazer o foguete \"andar em marcha à ré\"!"
    },
    {
      title: "Crescer",
      image: "/start-up.png",
      description: "Realizamos uma revisão geral do projeto para identificar melhorias importantes para uma excelente experiência do usuário e visualização de valor."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 mix-blend-overlay"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/bg-banner-nano.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-20 container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-medium text-gray-300 tracking-[0.2em] uppercase font-sans">Novos Projetos Disponíveis</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter text-white font-display"
          >
            Sua ideia merece uma <br className="hidden md:block" />
            <span className="text-blue-500">
              solução de impacto
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light font-sans"
          >
            Desenvolvemos softwares, apps e soluções digitais sob medida,
            <br className="hidden md:block" /> com foco em inovação, estratégia e resultados reais.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link 
              to="/contato" 
              className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-105 flex items-center gap-3 font-display"
            >
              <span>Iniciar Projeto</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/portfolio" 
              className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105 font-display"
            >
              Ver Cases
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner - Floating Glass Bar */}
      <div className="relative z-30 -mt-24 pb-24 pointer-events-none">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center px-4 relative group"
                >
                  <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="relative text-5xl md:text-6xl font-light text-white mb-3 tracking-tighter font-display">
                    <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </p>
                  <p className="relative text-xs text-gray-400 uppercase tracking-[0.2em] font-medium font-sans">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Process Section - Animated & Horizontal */}
      <section className="container mx-auto px-4 py-32 relative overflow-hidden">
        <div className="mb-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-blue-400 font-mono text-xs tracking-[0.2em] uppercase mb-4 block">Nossa Metodologia</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-display">
              Como Transformamos <span className="text-blue-500">Ideias</span>
            </h2>
            <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto opacity-50"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Connector Arrow (Desktop only, not on last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent pointer-events-none z-0 transform translate-y-2"></div>
              )}

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
                className="relative z-10 mb-8"
              >
                <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 shadow-2xl backdrop-blur-md">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  {step.image ? (
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-10 h-10 object-contain relative z-10"
                    />
                  ) : (
                    <step.icon className="w-10 h-10 text-white relative z-10 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-4 font-display">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[220px] mx-auto font-light">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section - Carousel */}
      <section className="container mx-auto px-4 py-24 relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl relative">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-1 bg-blue-600 mb-6 rounded-full"
            />
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight font-display">
              Nossos Serviços
            </h2>
            <p className="text-gray-400 font-light text-lg font-sans">
              Soluções sob medida para cada etapa do seu crescimento.
            </p>
          </div>
        </div>

        <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 md:p-16 backdrop-blur-sm overflow-hidden group hover:border-white/20 transition-colors duration-500">
          {/* Background Grid Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
                  {services[currentService].title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light font-sans">
                  {services[currentService].description}
                </p>
                <ul className="space-y-4 mb-10">
                  {services[currentService].features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-base text-gray-400 font-sans"
                    >
                      <div className="p-1 rounded-full bg-blue-500/10 text-blue-400">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Navigation Dots */}
              <div className="flex items-center gap-6">
                <button 
                  onClick={prevService}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white border border-white/5 hover:border-white/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-3">
                  {services.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentService(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentService === idx ? 'bg-blue-500 w-8' : 'bg-white/20 w-2 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextService}
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white border border-white/5 hover:border-white/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Image/Icon */}
            <div className="flex-1 flex justify-center items-center">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                {/* 3D-like Icon Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
                  {React.createElement(services[currentService].icon, {
                    className: "w-32 h-32 text-blue-500/80 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:text-blue-400 group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-500"
                  })}
                  
                  {/* Floating Elements Effect */}
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-16 h-16 bg-[#050505] rounded-xl border border-white/10 flex items-center justify-center shadow-2xl"
                  >
                    <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#050505] rounded-xl border border-white/10 flex items-center justify-center shadow-2xl"
                  >
                    <Code className="w-8 h-8 text-blue-400" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section - Minimalist Cards */}
      <section className="container mx-auto px-4 py-32 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-8 backdrop-blur-sm tracking-wide"
          >
            Por que a Codepacce?
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight font-display tracking-tighter"
          >
            Enquanto eles discutem o "como",<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">nós entregamos o resultado</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed font-sans"
          >
            O que esperar de nós? Soluções completas e focadas na entrega, sem perder tempo com debates cansativos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: PiClock,
              value: "6+",
              label: "Anos de experiência"
            },
            {
              icon: PiCurrencyDollar,
              value: "3M+",
              label: "de reais faturados para nossos clientes"
            },
            {
              icon: PiCheckSquare,
              value: "20+",
              label: "Projetos entregues"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center group hover:border-blue-500/20 hover:bg-white/10 transition-all duration-500"
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                <item.icon className="w-10 h-10 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">{item.value}</h3>
              <p className="text-gray-400 font-light text-lg font-sans">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
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

      {/* CTA Section - Minimalist & Refined */}
      <section className="container mx-auto px-4 py-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 md:p-24 text-center group"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -mt-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tighter font-display leading-tight"
            >
              Pronto para construir o <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">extraordinário</span>?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl font-sans"
          >
            Não apenas entregamos software. Entregamos vantagem competitiva, performance e escala para o seu negócio.
          </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/contato" 
                className="group relative inline-flex items-center px-10 py-4 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                <span className="font-display tracking-wide text-lg">Iniciar Projeto</span>
                <div className="ml-3 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black text-black group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}