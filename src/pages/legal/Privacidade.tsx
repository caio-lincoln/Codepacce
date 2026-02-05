import React from 'react';
import { Lock, Shield, Eye } from 'lucide-react';
import { LegalPageLayout, LegalIntro, LegalSection, LegalCallout } from '../../components/LegalPageComponents';

export function Privacidade() {
  return (
    <LegalPageLayout
      title="Política de Privacidade"
      subtitle={`Última atualização: ${new Date().toLocaleDateString('pt-BR')}`}
      icon={Lock}
    >
      <LegalIntro title="Compromisso com sua Privacidade" icon={Shield}>
        <p className="text-gray-400">
          A Codepacce (CNPJ: 58.174.388/0001-27) está comprometida com a proteção da sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
        </p>
      </LegalIntro>

      <div className="space-y-8">
        <LegalSection title="1. Coleta de Dados">
          <p className="text-gray-400 mb-4">
            Coletamos os seguintes tipos de informações:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Dados de identificação (nome, e-mail, telefone)</li>
            <li>Informações de uso do serviço</li>
            <li>Dados técnicos (IP, navegador, dispositivo)</li>
            <li>Cookies e tecnologias similares</li>
          </ul>
        </LegalSection>

        <LegalSection title="2. Uso das Informações">
          <p className="text-gray-400 mb-4">
            Utilizamos seus dados para:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Personalizar sua experiência</li>
            <li>Enviar comunicações relevantes</li>
            <li>Garantir a segurança da plataforma</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Compartilhamento de Dados">
          <p className="text-gray-400 mb-4">
            Seus dados podem ser compartilhados com:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Parceiros de serviço autorizados</li>
            <li>Autoridades legais quando requerido</li>
            <li>Processadores de pagamento</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Segurança dos Dados">
          <p className="text-gray-400 mb-4">
            Implementamos medidas de segurança como:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Criptografia de dados sensíveis</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo</li>
            <li>Backups regulares</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Seus Direitos">
          <p className="text-gray-400 mb-4">
            Você tem direito a:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Acessar seus dados pessoais</li>
            <li>Solicitar correções</li>
            <li>Pedir exclusão de dados</li>
            <li>Revogar consentimento</li>
          </ul>
        </LegalSection>

        <LegalCallout title="Transparência" icon={Eye}>
          <p>
            Mantemos esta política atualizada e acessível. Para exercer seus direitos ou esclarecer dúvidas, entre em contato através do e-mail: privacidade@codepacce.com.br
          </p>
        </LegalCallout>
      </div>
    </LegalPageLayout>
  );
}
