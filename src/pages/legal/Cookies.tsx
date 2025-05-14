import React from 'react';
import { Cookie, Shield, Settings, AlertCircle } from 'lucide-react';

export function Cookies() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <Cookie className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Cookies</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-500" />
                Sobre Cookies
              </h2>
              <p className="text-gray-400">
                A Codepacce (CNPJ: 58.174.388/0001-27) utiliza cookies e tecnologias similares para melhorar sua experiência em nossos serviços.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">1. O que são Cookies?</h2>
                <p className="text-gray-400 mb-4">
                  Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você visita nosso site.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Armazenam preferências</li>
                  <li>Melhoram a navegação</li>
                  <li>Personalizam conteúdo</li>
                  <li>Analisam uso do site</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">2. Tipos de Cookies que Utilizamos</h2>
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
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">3. Gerenciamento de Cookies</h2>
                <p className="text-gray-400 mb-4">
                  Você pode gerenciar suas preferências de cookies através:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Configurações do navegador</li>
                  <li>Painel de preferências do site</li>
                  <li>Ferramentas de terceiros</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">4. Cookies de Terceiros</h2>
                <p className="text-gray-400 mb-4">
                  Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Google Analytics</li>
                  <li>Redes sociais</li>
                  <li>Ferramentas de marketing</li>
                  <li>Serviços de pagamento</li>
                </ul>
              </section>

              <div className="bg-blue-500/10 p-8 rounded-lg border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <Settings className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-2">Configurações de Cookies</h2>
                    <p className="text-gray-400">
                      Você pode ajustar suas preferências de cookies a qualquer momento através do painel de configurações em nosso site.
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