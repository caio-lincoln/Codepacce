import React from 'react';
import { Shield, CheckCircle, AlertCircle } from 'lucide-react';

export function Termos() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Termos de Uso</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-blue max-w-none">
            <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-500" />
                Informações da Empresa
              </h2>
              <p className="text-gray-400 mb-4">
                A Codepacce, inscrita no CNPJ sob o nº 58.174.388/0001-27, estabelece os seguintes termos de uso para acesso e utilização de seus serviços e plataformas.
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                <p className="text-gray-400 mb-4">
                  Ao acessar e utilizar os serviços da Codepacce, você concorda com estes termos de uso e todas as condições aqui estabelecidas.
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Aceite integral das condições estabelecidas</li>
                  <li>Compromisso em seguir as diretrizes de uso</li>
                  <li>Responsabilidade pelas informações fornecidas</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">2. Serviços Oferecidos</h2>
                <p className="text-gray-400 mb-4">
                  A Codepacce oferece serviços de desenvolvimento de software, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Desenvolvimento web e mobile</li>
                  <li>Soluções em cloud computing</li>
                  <li>Consultoria em tecnologia</li>
                  <li>Manutenção e suporte técnico</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">3. Responsabilidades do Usuário</h2>
                <p className="text-gray-400 mb-4">
                  O usuário se compromete a:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Fornecer informações verdadeiras e atualizadas</li>
                  <li>Manter a confidencialidade de suas credenciais</li>
                  <li>Utilizar os serviços de forma ética e legal</li>
                  <li>Respeitar os direitos de propriedade intelectual</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">4. Propriedade Intelectual</h2>
                <p className="text-gray-400 mb-4">
                  Todo o conteúdo disponibilizado pela Codepacce está protegido por direitos autorais, incluindo:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Códigos-fonte desenvolvidos</li>
                  <li>Documentação técnica</li>
                  <li>Marcas e logotipos</li>
                  <li>Material visual e textual</li>
                </ul>
              </section>

              <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold mb-4">5. Limitação de Responsabilidade</h2>
                <p className="text-gray-400 mb-4">
                  A Codepacce não se responsabiliza por:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>Uso indevido da plataforma por terceiros</li>
                  <li>Interrupções temporárias do serviço</li>
                  <li>Danos indiretos causados pelo uso do serviço</li>
                </ul>
              </section>

              <div className="bg-blue-500/10 p-8 rounded-lg border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-xl font-bold mb-2">Observação Importante</h2>
                    <p className="text-gray-400">
                      Estes termos podem ser atualizados a qualquer momento. Recomendamos a verificação periódica para se manter informado sobre possíveis alterações.
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