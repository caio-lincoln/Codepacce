import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Building2,
  Phone,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Video,
  MapPin,
  Copy,
  ExternalLink
} from 'lucide-react';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_diijv1q";
const EMAILJS_TEMPLATE_ID = "template_soxxbyt";
const EMAILJS_PUBLIC_KEY = "ibWbG1y-es78gpzir";

// Calendar Helpers
const DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

export function Contato() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  // Ref para rastrear se o componente está montado
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) return;
    }
    if (step === 2) {
      if (!selectedDate || !selectedTime) return;
    }
    setDirection(1);
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    setStep(prev => prev - 1);
  };

  const handleBookMeeting = async () => {
    if (!isMounted.current) return;
    setFormStatus({ loading: true, success: false, error: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: `Agendamento de Consultoria: ${selectedDate?.toLocaleDateString('pt-BR')} às ${selectedTime}\nTópico: ${formData.topic}`,
        project_type: 'Consultoria',
        budget: 'N/A',
        source: 'Agenda'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (isMounted.current) {
        setFormStatus({ loading: false, success: true, error: '' });
        setStep(3);
      }
    } catch (error: any) {
      if (!isMounted.current) return;
      // Ignorar erros de abortamento
      if (error.name === 'AbortError' || error.message?.includes('aborted')) return;
      
      console.error('Error sending email:', error);
      setFormStatus({ loading: false, success: false, error: 'Erro ao agendar. Tente novamente.' });
    }
  };

  // Calendar Logic
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
  };

  const { days, firstDay } = getDaysInMonth(currentMonth);
  const today = new Date();

  const changeMonth = (offset: number) => {
    const newMonth = new Date(currentMonth.setMonth(currentMonth.getMonth() + offset));
    setCurrentMonth(new Date(newMonth));
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dayOfWeek = date.getDay();
    // Disable past dates and weekends
    return date < new Date(today.setHours(0,0,0,0)) || dayOfWeek === 0 || dayOfWeek === 6;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="pt-32 pb-20 min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6 backdrop-blur-sm tracking-wide">
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
              Entre em <span className="text-blue-500">Contato</span>
            </h1>
            <p className="text-gray-400 text-lg font-light">
              Estamos prontos para atender você. Escolha a melhor forma de falar com nossa equipe.
            </p>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors text-blue-500">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-6">Envie suas dúvidas ou solicitações</p>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
              <span className="text-sm font-mono text-gray-300 truncate">contato@codepacce.com.br</span>
              <button 
                onClick={() => copyToClipboard('contato@codepacce.com.br')}
                className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white ml-auto"
                title="Copiar email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-green-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors text-green-500">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 mb-6">Fale diretamente conosco</p>
            <a 
              href="https://wa.me/5579981054320" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors group/link"
            >
              <span className="text-sm font-mono text-gray-300">(79) 98105-4320</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover/link:text-white" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-purple-500/30 transition-all group"
          >
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors text-purple-500">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Localização</h3>
            <p className="text-gray-400 mb-6">Nossa base de operações</p>
            <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
              <span className="text-sm text-gray-300">Aracaju, Sergipe - Brasil</span>
            </div>
          </motion.div>
        </div>

        {/* Scheduling Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-display text-white">
            Ou agende uma <span className="text-blue-500">Consultoria Gratuita</span>
          </h2>
          <p className="text-gray-400">
            Escolha o melhor horário para uma videochamada com nossos especialistas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-3 min-h-[600px]">
              
              {/* Sidebar Info */}
              <div className="bg-blue-900/20 border-r border-white/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <Video className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Google Meet</h3>
                      <p className="text-sm text-gray-400">Reunião Online</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-3 text-gray-300">
                      <Clock className="w-5 h-5 text-blue-400 mt-1" />
                      <div>
                        <p className="font-medium text-white">30 Minutos</p>
                        <p className="text-sm text-gray-400">Duração estimada</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-gray-300">
                      <CalendarIcon className="w-5 h-5 text-blue-400 mt-1" />
                      <div>
                        <p className="font-medium text-white">
                          {selectedDate 
                            ? selectedDate.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })
                            : 'Escolha uma data'}
                        </p>
                        <p className="text-sm text-gray-400">
                          {selectedTime ? `Horário: ${selectedTime}` : 'Selecione um horário'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex gap-2 mb-2">
                    {[1, 2, 3].map((s) => (
                      <div 
                        key={s} 
                        className={`h-1 flex-1 rounded-full transition-colors ${s <= step ? 'bg-blue-500' : 'bg-white/10'}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    Passo {step} de 3
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 p-6 md:p-8 relative overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  
                  {/* Step 1: User Info */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full flex flex-col"
                    >
                      <h2 className="text-2xl font-bold text-white mb-6">Seus Dados</h2>
                      <div className="space-y-4 flex-1">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400">Nome Completo</label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Seu nome"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400">Email Corporativo</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="seu@email.com"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400">Telefone / WhatsApp</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="(11) 99999-9999"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm text-gray-400">Empresa (Opcional)</label>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                              <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white focus:border-blue-500 focus:outline-none transition-colors"
                                placeholder="Sua empresa"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm text-gray-400">Sobre o que vamos falar?</label>
                          <textarea
                            value={formData.topic}
                            onChange={(e) => setFormData({...formData, topic: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition-colors h-32 resize-none"
                            placeholder="Breve descrição do seu projeto ou desafio..."
                          />
                        </div>
                      </div>

                      <div className="flex justify-end pt-6">
                        <button
                          onClick={handleNext}
                          disabled={!formData.name || !formData.email || !formData.phone}
                          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continuar <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Date & Time */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full flex flex-col"
                    >
                      <h2 className="text-2xl font-bold text-white mb-6">Escolha a Data e Hora</h2>
                      
                      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-medium text-white">
                            {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                          </h3>
                          <div className="flex gap-2">
                            <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={() => changeMonth(1)} className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-colors">
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2 mb-8">
                          {DAYS.map(day => (
                            <div key={day} className="text-center text-xs text-gray-500 py-2">
                              {day}
                            </div>
                          ))}
                          {Array.from({ length: firstDay }).map((_, i) => (
                            <div key={`empty-${i}`} />
                          ))}
                          {Array.from({ length: days }).map((_, i) => {
                            const day = i + 1;
                            const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                            const isSelected = selectedDate?.toDateString() === date.toDateString();
                            const disabled = isDateDisabled(day);

                            return (
                              <button
                                key={day}
                                onClick={() => {
                                  setSelectedDate(date);
                                  setSelectedTime(null);
                                }}
                                disabled={disabled}
                                className={`
                                  aspect-square rounded-lg flex items-center justify-center text-sm transition-all
                                  ${isSelected ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' : ''}
                                  ${!isSelected && !disabled ? 'hover:bg-white/10 text-gray-300' : ''}
                                  ${disabled ? 'text-gray-700 cursor-not-allowed opacity-50' : ''}
                                `}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>

                        {/* Time Slots */}
                        {selectedDate && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <h3 className="text-sm font-medium text-gray-400 mb-4">Horários Disponíveis</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                              {TIME_SLOTS.map(time => (
                                <button
                                  key={time}
                                  onClick={() => setSelectedTime(time)}
                                  className={`
                                    py-2 px-3 rounded-lg text-sm border transition-all
                                    ${selectedTime === time 
                                      ? 'bg-blue-500/20 border-blue-500 text-blue-400' 
                                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/30'}
                                  `}
                                >
                                  {time}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div className="flex justify-between pt-6 mt-4 border-t border-white/5">
                        <button
                          onClick={handleBack}
                          className="px-6 py-3 text-gray-400 hover:text-white transition-colors font-medium"
                        >
                          Voltar
                        </button>
                        <button
                          onClick={handleBookMeeting}
                          disabled={!selectedDate || !selectedTime || formStatus.loading}
                          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {formStatus.loading ? 'Agendando...' : 'Confirmar Agendamento'}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Success */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">Agendamento Confirmado!</h2>
                      <p className="text-gray-400 max-w-md mb-8">
                        Enviamos um convite para <strong>{formData.email}</strong> com o link da reunião no Google Meet.
                      </p>
                      
                      <div className="bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-sm mb-8">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <CalendarIcon className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-medium">
                            {selectedDate?.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-medium">{selectedTime}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => window.location.href = '/'}
                        className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors"
                      >
                        Voltar para Home
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
