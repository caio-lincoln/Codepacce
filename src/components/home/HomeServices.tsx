import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Code,
  ChevronLeft,
  ChevronRight,
  Brain,
  Lightbulb,
  Monitor,
  Smartphone,
  Wrench,
  Users,
  ShoppingCart
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description: "Aumente seus resultados com Inteligência Artificial. Nossa expertise em IA ajuda sua empresa a automatizar tarefas complexas, identificar padrões e tomar decisões estratégicas baseadas em dados. Com soluções personalizadas, tornamos suas operações mais eficientes e preparadas para o futuro.",
    features: ["Automação Inteligente", "Análise Preditiva", "Machine Learning", "NLP"]
  },
  {
    icon: Lightbulb,
    title: "Consultoria",
    description: "Transforme desafios em oportunidades com nossa Consultoria de TI. Analisamos sua operação, identificamos gargalos e propomos soluções estratégicas para impulsionar a eficiência e a inovação em seu negócio. Nossa expertise conecta tecnologia e objetivos de negócios, criando um plano sob medida para o seu sucesso.",
    features: ["Diagnóstico Tecnológico", "Planejamento Estratégico", "Otimização de Processos", "Transformação Digital"]
  },
  {
    icon: Monitor,
    title: "Sistemas",
    description: "Desenvolvemos sistemas personalizados para web e desktop que transformam a maneira como sua empresa opera. Com soluções inteligentes para automatizar processos e gerenciar dados, nossos sistemas são projetados para impulsionar a vantagem competitiva da sua empresa. Conte com especialistas que entendem suas necessidades para entregar resultados eficientes e inovadores.",
    features: ["Sistemas Web", "Aplicações Desktop", "Integração de APIs", "Dashboards"]
  },
  {
    icon: Smartphone,
    title: "Aplicações",
    description: "Crie experiências incríveis em dispositivos móveis com nossos aplicativos. Desenvolvemos soluções completas e intuitivas, personalizadas para atender às necessidades dos seus clientes em dispositivos móveis. Com foco em usabilidade e desempenho, nossos aplicativos transformam ideias em realidade e aproximam sua empresa do seu público.",
    features: ["iOS e Android", "React Native", "UX/UI Design", "Performance Mobile"]
  },
  {
    icon: Wrench,
    title: "Suporte e Evolução",
    description: "Garanta o desempenho e a evolução contínua de seus sistemas e aplicativos. Nossos serviços de Suporte e Evolução mantêm sua infraestrutura sempre atualizada e eficiente, permitindo que sua empresa se adapte rapidamente às mudanças do mercado. Experimente estabilidade, inovação e alto desempenho ao seu alcance.",
    features: ["Monitoramento 24/7", "Manutenção Preventiva", "Atualizações de Segurança", "SLA Garantido"]
  },
  {
    icon: Users,
    title: "Esquadrão como um Serviço",
    description: "Transforme suas operações com nosso modelo de Equipe como Serviço. Com profissionais altamente qualificados e gerenciamento completo de equipes, ajudamos sua empresa a reduzir custos, aumentar a produtividade e entregar softwares de alta qualidade. Concentre-se no que realmente importa: o crescimento do seu negócio.",
    features: ["Profissionais Qualificados", "Gestão Completa", "Redução de Custos", "Alta Performance"]
  },
  {
    icon: ShoppingCart,
    title: "Comércio eletrônico",
    description: "Está pensando em vender online e se sente limitado por soluções prontas? Prazer em conhecê-lo! Conosco, sua ideia inovadora finalmente sairá do papel e será lançada para seus clientes, seja na área de IoT ou IA. Conte conosco.",
    features: ["Plataformas Personalizadas", "Integração de Pagamentos", "Experiência do Usuário", "Escalabilidade"]
  }
];

export function HomeServices() {
  const [currentService, setCurrentService] = useState(0);

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
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
  );
}