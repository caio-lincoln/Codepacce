import React from 'react';
import { Lock, Shield, Eye, Database, AlertCircle } from 'lucide-react';

export function Privacidade() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <Lock className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
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
                Compromisso com sua Privacidade
              </h2>
              <p className="text-gray-400">
                A Codepacce (CNPJ: 58.174.388/0001-27) está comprometida com a proteção da sua privacidade. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">1. Coleta de Dados</h2>
                <p className="text-gray-400 mb-4">
                  Coletamos os seguintes tipos de informações:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Dados de identificação (nome, e-mail, telefone)</li>
                  <li>Informações de uso do serviço</li>
                  <li>Dados técnicos (IP, navegador, dispositivo)</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">2. Uso das Informações</h2>
                <p className="text-gray-400 mb-4">
                  Utilizamos seus dados para:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Personalizar sua experiência</li>
                  <li>Enviar comunicações relevantes</li>
                  <li>Garantir a segurança da plataforma</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">3. Compartilhamento de Dados</h2>
                <p className="text-gray-400 mb-4">
                  Seus dados podem ser compartilhados com:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Parceiros de serviço autorizados</li>
                  <li>Autoridades legais quando requerido</li>
                  <li>Processadores de pagamento</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">4. Segurança dos Dados</h2>
                <p className="text-gray-400 mb-4">
                  Implementamos medidas de segurança como:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Controles de acesso rigorosos</li>
                  <li>Monitoramento contínuo</li>
                  <li>Backups regulares</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">5. Seus Direitos</h2>
                <p className="text-gray-400 mb-4">
                  Você tem direito a:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Acessar seus dados pessoais</li>
                  <li>Solicitar correções</li>
                  <li>Pedir exclusão de dados</li>
                  <li>Revogar consentimento</li>
                </ul>
              </section>

              <div className="bg-blue-500/10 p-8 rounded-lg border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <Eye className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-2">Transparência</h2>
                    <p className="text-gray-400">
                      Mantemos esta política atualizada e acessível. Para exercer seus direitos ou esclarecer dúvidas, entre em contato através do e-mail: privacidade@codepacce.com.br
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