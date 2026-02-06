import React from 'react';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { LegalPageLayout, LegalIntro, LegalSection, LegalCallout } from '../../components/LegalPageComponents';

export function Termos() {
  return (
    <LegalPageLayout
      title="Termos de Uso"
      subtitle={`Última atualização: ${new Date().toLocaleDateString('pt-BR')}`}
      icon={Shield}
    >
      <LegalIntro title="Informações da Empresa" icon={CheckCircle}>
        <p className="text-gray-400 mb-4">
          A Codepacce, inscrita no CNPJ sob o nº 58.174.388/0001-27, estabelece os seguintes termos de uso para acesso e utilização de seus serviços e plataformas.
        </p>
      </LegalIntro>

      <div className="space-y-8">
        <LegalSection title="1. Aceitação dos Termos">
          <p className="text-gray-400 mb-4">
            Ao acessar e utilizar os serviços da Codepacce, você concorda com estes termos de uso e todas as condições aqui estabelecidas.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Aceite integral das condições estabelecidas</li>
            <li>Compromisso em seguir as diretrizes de uso</li>
            <li>Responsabilidade pelas informações fornecidas</li>
          </ul>
        </LegalSection>

        <LegalSection title="2. Serviços Oferecidos">
          <p className="text-gray-400 mb-4">
            A Codepacce oferece serviços de desenvolvimento de software, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Desenvolvimento web e mobile</li>
            <li>Soluções em cloud computing</li>
            <li>Consultoria em tecnologia</li>
            <li>Manutenção e suporte técnico</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Responsabilidades do Usuário">
          <p className="text-gray-400 mb-4">
            O usuário se compromete a:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Fornecer informações verdadeiras e atualizadas</li>
            <li>Manter a confidencialidade de suas credenciais</li>
            <li>Utilizar os serviços de forma ética e legal</li>
            <li>Respeitar os direitos de propriedade intelectual</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Propriedade Intelectual">
          <p className="text-gray-400 mb-4">
            Todo o conteúdo disponibilizado pela Codepacce está protegido por direitos autorais, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Códigos-fonte desenvolvidos</li>
            <li>Documentação técnica</li>
            <li>Marcas e logotipos</li>
            <li>Material visual e textual</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Limitação de Responsabilidade">
          <p className="text-gray-400 mb-4">
            A Codepacce não se responsabiliza por:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Uso indevido da plataforma por terceiros</li>
            <li>Interrupções temporárias do serviço</li>
            <li>Danos indiretos causados pelo uso do serviço</li>
          </ul>
        </LegalSection>

        <LegalCallout title="Observação Importante" icon={AlertCircle}>
          <p>
            Estes termos podem ser atualizados a qualquer momento. Recomendamos a verificação periódica para se manter informado sobre possíveis alterações.
          </p>
        </LegalCallout>
      </div>
    </LegalPageLayout>
  );
}
