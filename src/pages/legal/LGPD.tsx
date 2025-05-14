import React from 'react';
import { ShieldCheck, Users, FileText, AlertCircle } from 'lucide-react';

export function LGPD() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LGPD</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-500" />
                Nosso Compromisso
              </h2>
              <p className="text-gray-400">
                A Codepacce (CNPJ: 58.174.388/0001-27) está comprometida com a conformidade à LGPD e a proteção dos dados pessoais de nossos usuários.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">1. Bases Legais</h2>
                <p className="text-gray-400 mb-4">
                  Processamos dados pessoais com base nas seguintes condições:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Consentimento do titular</li>
                  <li>Cumprimento de obrigação legal</li>
                  <li>Execução de contrato</li>
                  <li>Legítimo interesse</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">2. Direitos do Titular</h2>
                <p className="text-gray-400 mb-4">
                  Conforme a LGPD, você tem direito a:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Confirmação da existência de tratamento</li>
                  <li>Acesso aos dados</li>
                  <li>Correção de dados incompletos</li>
                  <li>Anonimização ou bloqueio</li>
                  <li>Portabilidade dos dados</li>
                  <li>Eliminação dos dados</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">3. Medidas de Segurança</h2>
                <p className="text-gray-400 mb-4">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Criptografia de dados</li>
                  <li>Controle de acesso</li>
                  <li>Auditorias regulares</li>
                  <li>Treinamento de equipe</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">4. Encarregado de Dados (DPO)</h2>
                <p className="text-gray-400 mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas, contate nosso DPO:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>E-mail: dpo@codepacce.com.br</li>
                  <li>Telefone: (79) 98105-4320</li>
                  <li>Endereço: Aracaju, Sergipe</li>
                </ul>
              </section>

              <div className="bg-blue-500/10 p-8 rounded-lg border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-2">Solicitações e Prazos</h2>
                    <p className="text-gray-400">
                      Respondemos às solicitações relacionadas aos seus direitos em até 15 dias, conforme estabelecido pela LGPD.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}