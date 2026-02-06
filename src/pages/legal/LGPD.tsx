import React from 'react';
import { ShieldCheck, Users, FileText } from 'lucide-react';
import { LegalPageLayout, LegalIntro, LegalSection, LegalCallout } from '../../components/LegalPageComponents';

export function LGPD() {
  return (
    <LegalPageLayout
      title="LGPD"
      subtitle="Lei Geral de Proteção de Dados (Lei nº 13.709/2018)"
      icon={ShieldCheck}
    >
      <LegalIntro title="Nosso Compromisso" icon={Users}>
        <p className="text-gray-400">
          A Codepacce (CNPJ: 58.174.388/0001-27) está comprometida com a conformidade à LGPD e a proteção dos dados pessoais de nossos usuários.
        </p>
      </LegalIntro>

      <div className="space-y-8">
        <LegalSection title="1. Bases Legais">
          <p className="text-gray-400 mb-4">
            Processamos dados pessoais com base nas seguintes condições:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Consentimento do titular</li>
            <li>Cumprimento de obrigação legal</li>
            <li>Execução de contrato</li>
            <li>Legítimo interesse</li>
          </ul>
        </LegalSection>

        <LegalSection title="2. Direitos do Titular">
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
        </LegalSection>

        <LegalSection title="3. Medidas de Segurança">
          <p className="text-gray-400 mb-4">
            Implementamos medidas técnicas e organizacionais para proteger seus dados:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Criptografia de dados</li>
            <li>Controle de acesso</li>
            <li>Auditorias regulares</li>
            <li>Treinamento de equipe</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Encarregado de Dados (DPO)">
          <p className="text-gray-400 mb-4">
            Para exercer seus direitos ou esclarecer dúvidas, contate nosso DPO:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>E-mail: dpo@codepacce.com.br</li>
            <li>Telefone: (79) 98105-4320</li>
            <li>Endereço: Aracaju, Sergipe</li>
          </ul>
        </LegalSection>

        <LegalCallout title="Solicitações e Prazos" icon={FileText}>
          <p>
            Respondemos às solicitações relacionadas aos seus direitos em até 15 dias, conforme estabelecido pela LGPD.
          </p>
        </LegalCallout>
      </div>
    </LegalPageLayout>
  );
}
