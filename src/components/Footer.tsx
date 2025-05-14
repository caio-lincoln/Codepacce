import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Mail,
  Phone,
  MapPin,
  Globe,
  Smartphone,
  Cloud,
  Code2,
  MessageSquare
} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      url: "https://facebook.com/codepacce",
      label: "Facebook"
    },
    {
      icon: Instagram,
      url: "https://instagram.com/codepacce",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      url: "https://linkedin.com/company/codepacce",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      url: "https://twitter.com/codepacce",
      label: "Twitter"
    },
    {
      icon: Github,
      url: "https://github.com/codepacce",
      label: "GitHub"
    }
  ];

  return (
    <footer className="bg-black/80 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="block mb-6">
              <img 
                src="https://i.ibb.co/ZphzLz7K/Logo-1.png" 
                alt="Codepacce Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/200x50/000000/FFFFFF?text=Codepacce';
                }}
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Transformando ideias em software de qualidade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Desenvolvimento Web</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Apps Mobile</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  <span>Cloud & DevOps</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span>Desenvolvimento Customizado</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-blue-400">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-blue-400">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-blue-400">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-blue-400 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Fale Conosco</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contato@codepacce.com.br" 
                  className="text-gray-400 hover:text-blue-400 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@codepacce.com.br</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5579981054320" 
                  className="text-gray-400 hover:text-blue-400 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp: (79) 98105-4320</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Aracaju, Sergipe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Codepacce. CNPJ: 58.174.388/0001-27. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/termos" className="text-gray-400 hover:text-blue-400">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="text-gray-400 hover:text-blue-400">
                Política de Privacidade
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-400">
                Política de Cookies
              </Link>
              <Link to="/lgpd" className="text-gray-400 hover:text-blue-400">
                LGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}