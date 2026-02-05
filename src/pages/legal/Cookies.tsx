import React from 'react';
import { Cookie, Shield, Settings } from 'lucide-react';
import { LegalPageLayout, LegalIntro, LegalSection, LegalCallout } from '../../components/LegalPageComponents';

export function Cookies() {
  return (
    <LegalPageLayout
      title="Política de Cookies"
      subtitle={`Última atualização: ${new Date().toLocaleDateString('pt-BR')}`}
      icon={Cookie}
    >
      <LegalIntro title="Sobre Cookies" icon={Shield}>
        <p className="text-gray-400">
          A Codepacce (CNPJ: 58.174.388/0001-27) utiliza cookies e tecnologias similares para melhorar sua experiência em nossos serviços.
        </p>
      </LegalIntro>

      <div className="space-y-8">
        <LegalSection title="1. O que são Cookies?">
          <p className="text-gray-400 mb-4">
            Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita nosso site.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Armazenam preferências</li>
            <li>Melhoram a navegação</li>
            <li>Personalizam conteúdo</li>
            <li>Analisam uso do site</li>
          </ul>
        </LegalSection>

        <LegalSection title="2. Tipos de Cookies que Utilizamos">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Cookies Essenciais</h3>
              <p className="text-gray-400">Necessários para o funcionamento básico do site</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cookies de Desempenho</h3>
              <p className="text-gray-400">Coletam informações sobre como você usa nosso site</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cookies de Funcionalidade</h3>
              <p className="text-gray-400">Lembram suas preferências e escolhas</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cookies de Marketing</h3>
              <p className="text-gray-400">Utilizados para publicidade direcionada</p>
            </div>
          </div>
        </LegalSection>

        <LegalSection title="3. Gerenciamento de Cookies">
          <p className="text-gray-400 mb-4">
            Você pode gerenciar suas preferências de cookies através:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Configurações do navegador</li>
            <li>Painel de preferências do site</li>
            <li>Ferramentas de terceiros</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Cookies de Terceiros">
          <p className="text-gray-400 mb-4">
            Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Google Analytics</li>
            <li>Redes sociais</li>
            <li>Ferramentas de marketing</li>
            <li>Serviços de pagamento</li>
          </ul>
        </LegalSection>

        <LegalCallout title="Configurações de Cookies" icon={Settings}>
          <p>
            Você pode ajustar suas preferências de cookies a qualquer momento através do painel de configurações em nosso site.
          </p>
        </LegalCallout>
      </div>
    </LegalPageLayout>
  );
}
