import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import {
  MessageSquare,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  ArrowRight,
  Smartphone,
  Globe,
  Database,
  Code2
} from 'lucide-react';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_diijv1q";
const EMAILJS_TEMPLATE_ID = "template_soxxbyt";
const EMAILJS_PUBLIC_KEY = "ibWbG1y-es78gpzir";

export function Contato() {
  const formRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project_type: 'Desenvolvimento Web',
    budget: 'Até R$ 10.000',
    message: '',
    source: 'Site',
    newsletter: 'Não',
    date: new Date().toLocaleDateString('pt-BR'),
    year: new Date().getFullYear().toString()
  });
  const [errors, setErrors] = useState({});

  const projectTypes = [
    { value: 'Desenvolvimento Web', icon: Globe },
    { value: 'Aplicativo Mobile', icon: Smartphone },
    { value: 'Sistema Empresarial', icon: Database },
    { value: 'Desenvolvimento Customizado', icon: Code2 }
  ];

  const budgetRanges = [
    'Até R$ 10.000',
    'R$ 10.000 - R$ 30.000',
    'R$ 30.000 - R$ 50.000',
    'R$ 50.000 - R$ 100.000',
    'Acima de R$ 100.000'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
      if (!formData.email.trim()) {
        newErrors.email = 'Email é obrigatório';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email inválido';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;
    
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Enviando sua mensagem...'
    });

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formData,
      EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        project_type: 'Desenvolvimento Web',
        budget: 'Até R$ 10.000',
        message: '',
        source: 'Site',
        newsletter: 'Não',
        date: new Date().toLocaleDateString('pt-BR'),
        year: new Date().getFullYear().toString()
      });
      setCurrentStep(1);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato diretamente pelo telefone.'
      });
    });
  };

  const resetForm = () => {
    setFormStatus({
      submitted: false,
      success: false,
      message: ''
    });
  };

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-gray-400 text-lg">
            Estamos prontos para transformar suas ideias em realidade. 
            Entre em contato e descubra como podemos ajudar no seu próximo projeto.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10 h-full">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <a 
                      href="tel:+5579981054320" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      (79) 98105-4320
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a 
                      href="mailto:contato@codepacce.com.br" 
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      contato@codepacce.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Localização</h3>
                    <p className="text-gray-400">
                      Aracaju, Sergipe<br />
                      CNPJ: 58.174.388/0001-27
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-400">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Resposta Rápida</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  Nossa equipe responde em até 24 horas durante dias úteis. 
                  Projetos urgentes podem ter prioridade.
                </p>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
              {formStatus.submitted ? (
                <div className="text-center py-8">
                  {formStatus.success ? (
                    <div className="animate-fadeIn">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Mensagem Enviada!</h2>
                      <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        {formStatus.message}
                      </p>
                      <button
                        onClick={resetForm}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors"
                      >
                        Enviar Nova Mensagem
                      </button>
                    </div>
                  ) : (
                    <div className="animate-fadeIn">
                      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-8 h-8 text-red-500" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Ops! Algo deu errado.</h2>
                      <p className="text-gray-400 mb-8 max-w-md mx-auto">
                        {formStatus.message}
                      </p>
                      <button
                        onClick={resetForm}
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors"
                      >
                        Tentar Novamente
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Formulário de Contato</h2>
                    <p className="text-gray-400">
                      Preencha o formulário abaixo para iniciar uma conversa sobre seu projeto.
                    </p>
                  </div>
                  
                  {/* Progress Steps */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
                      }`}>
                        1
                      </div>
                      <div className="ml-2">Seus Dados</div>
                    </div>
                    
                    <div className={`flex-grow mx-4 h-1 ${
                      currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-700'
                    }`}></div>
                    
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
                      }`}>
                        2
                      </div>
                      <div className="ml-2">Projeto</div>
                    </div>
                    
                    <div className={`flex-grow mx-4 h-1 ${
                      currentStep >= 3 ? 'bg-blue-500' : 'bg-gray-700'
                    }`}></div>
                    
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep >= 3 ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'
                      }`}>
                        3
                      </div>
                      <div className="ml-2">Finalizar</div>
                    </div>
                  </div>
                  
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Personal Info */}
                    {currentStep === 1 && (
                      <div className="animate-fadeIn">
                        <h3 className="text-xl font-semibold mb-4">Informações Pessoais</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-1">
                              Nome Completo <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 bg-black/30 border ${
                                errors.name ? 'border-red-500' : 'border-white/10'
                              } rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                              placeholder="Seu nome completo"
                            />
                            {errors.name && (
                              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 bg-black/30 border ${
                                errors.email ? 'border-red-500' : 'border-white/10'
                              } rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                              placeholder="seu.email@exemplo.com"
                            />
                            {errors.email && (
                              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                              Telefone <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`w-full px-4 py-3 bg-black/30 border ${
                                errors.phone ? 'border-red-500' : 'border-white/10'
                              } rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                              placeholder="(00) 00000-0000"
                            />
                            {errors.phone && (
                              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium mb-1">
                              Empresa
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                              placeholder="Nome da sua empresa (opcional)"
                            />
                          </div>
                        </div>
                        
                        <div className="mt-8 flex justify-end">
                          <button
                            type="button"
                            onClick={nextStep}
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors flex items-center gap-2"
                          >
                            <span>Próximo</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 2: Project Info */}
                    {currentStep === 2 && (
                      <div className="animate-fadeIn">
                        <h3 className="text-xl font-semibold mb-4">Detalhes do Projeto</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium mb-3">
                              Tipo de Projeto
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {projectTypes.map((type) => (
                                <div
                                  key={type.value}
                                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                                    formData.project_type === type.value
                                      ? 'border-blue-500 bg-blue-500/10'
                                      : 'border-white/10 bg-black/30 hover:border-white/30'
                                  }`}
                                  onClick={() => setFormData({...formData, project_type: type.value})}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                      formData.project_type === type.value
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white/5 text-gray-400'
                                    }`}>
                                      <type.icon className="w-4 h-4" />
                                    </div>
                                    <span>{type.value}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-3">
                              Orçamento Estimado
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                            >
                              {budgetRanges.map((range) => (
                                <option key={range} value={range}>
                                  {range}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                              Descreva seu Projeto
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                              placeholder="Conte-nos sobre seu projeto, objetivos e funcionalidades desejadas..."
                            ></textarea>
                          </div>
                        </div>
                        
                        <div className="mt-8 flex justify-between">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/10 rounded-full text-white transition-colors"
                          >
                            Voltar
                          </button>
                          <button
                            type="button"
                            onClick={nextStep}
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors flex items-center gap-2"
                          >
                            <span>Próximo</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Step 3: Review and Submit */}
                    {currentStep === 3 && (
                      <div className="animate-fadeIn">
                        <h3 className="text-xl font-semibold mb-4">Resumo da Solicitação</h3>
                        
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm text-gray-400 mb-1">Informações Pessoais</h4>
                              <div className="space-y-2">
                                <p>
                                  <span className="text-blue-500">Nome:</span> {formData.name}
                                </p>
                                <p>
                                  <span className="text-blue-500">Email:</span> {formData.email}
                                </p>
                                <p>
                                  <span className="text-blue-500">Telefone:</span> {formData.phone}
                                </p>
                                <p>
                                  <span className="text-blue-500">Empresa:</span> {formData.company || 'Não informado'}
                                </p>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm text-gray-400 mb-1">Detalhes do Projeto</h4>
                              <div className="space-y-2">
                                <p>
                                  <span className="text-blue-500">Tipo:</span> {formData.project_type}
                                </p>
                                <p>
                                  <span className="text-blue-500">Orçamento:</span> {formData.budget}
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm text-gray-400 mb-1">Mensagem</h4>
                            <div className="p-4 bg-black/30 border border-white/10 rounded-lg">
                              {formData.message || 'Nenhuma mensagem adicional.'}
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="newsletter"
                              checked={formData.newsletter === 'Sim'}
                              onChange={(e) => setFormData({...formData, newsletter: e.target.checked ? 'Sim' : 'Não'})}
                              className="w-4 h-4 text-blue-500 border-white/10 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="newsletter" className="ml-2 text-sm text-gray-400">
                              Desejo receber novidades e atualizações por email
                            </label>
                          </div>
                        </div>
                        
                        <div className="mt-8 flex justify-between">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="px-6 py-3 bg-transparent hover:bg-white/5 border border-white/10 rounded-full text-white transition-colors"
                          >
                            Voltar
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors flex items-center gap-2"
                          >
                            <span>Enviar Mensagem</span>
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processo de desenvolvimento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-black/50 rounded-lg backdrop-blur-sm border border-white/10 p-6">
              <h3 className="text-lg font-bold mb-2">Qual é o prazo médio para desenvolvimento de um projeto?</h3>
              <p className="text-gray-400">
                O prazo varia de acordo com a complexidade do projeto. Aplicações web simples podem levar de 4 a 8 semanas, 
                enquanto projetos mais complexos podem levar de 3 a 6 meses. Fornecemos um cronograma detalhado após a análise 
                inicial dos requisitos.
              </p>
            </div>
            
            <div className="bg-black/50 rounded-lg backdrop-blur-sm border border-white/10 p-6">
              <h3 className="text-lg font-bold mb-2">Como funciona o processo de desenvolvimento?</h3>
              <p className="text-gray-400">
                Nosso processo inclui: 1) Levantamento de requisitos e planejamento; 2) Design e prototipagem; 
                3) Desenvolvimento; 4) Testes e garantia de qualidade; 5) Lançamento; 6) Suporte contínuo. 
                Mantemos comunicação constante durante todo o ciclo.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-black/50 rounded-lg backdrop-blur-sm border border-white/10 p-6">
              <h3 className="text-lg font-bold mb-2">Vocês oferecem suporte após o lançamento do projeto?</h3>
              <p className="text-gray-400">
                Sim, oferecemos diferentes planos de suporte e manutenção após o lançamento. Isso inclui correção de bugs, 
                atualizações de segurança, melhorias de performance e implementação de novas funcionalidades conforme necessário.
              </p>
            </div>
            
            <div className="bg-black/50 rounded-lg backdrop-blur-sm border border-white/10 p-6">
              <h3 className="text-lg font-bold mb-2">Qual é o investimento necessário para desenvolver um software?</h3>
              <p className="text-gray-400">
                O investimento depende da complexidade, escopo e tecnologias utilizadas. Trabalhamos com orçamentos 
                transparentes e detalhados, divididos em etapas claras. Entre em contato para uma avaliação personalizada 
                do seu projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/5 p-12 rounded-2xl backdrop-blur-sm border border-blue-500/20 text-center">
          <h2 className="text-4xl font-bold mb-4">Vamos Desenvolver Juntos?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para transformar sua ideia em realidade.
          </p>
          <a 
            href="tel:+5579981054320" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>(79) 98105-4320</span>
          </a>
        </div>
      </section>
    </div>
  );
}