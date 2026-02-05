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
import logo from '../assets/logo-site-codepacce.png';

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
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <img 
                src={logo} 
                alt="Codepacce Logo" 
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed font-light">
              Transformando ideias em software de alta performance. Excelência técnica e compromisso com o resultado.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Soluções</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  <span>Desenvolvimento Web</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  <span>Apps Mobile</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  <span>Cloud & DevOps</span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                  <span>Consultoria Técnica</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-1 duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-1 duration-300">
                  Cases
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-1 duration-300">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-1 duration-300">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contato@codepacce.com.br" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm">contato@codepacce.com.br</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5579981054320" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-colors">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm">WhatsApp: (79) 98105-4320</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 group">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm">Aracaju, Sergipe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm font-light">
              © {new Date().getFullYear()} Codepacce. CNPJ: 58.174.388/0001-27.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <Link to="/termos" className="text-gray-500 hover:text-white transition-colors">
                Termos
              </Link>
              <Link to="/privacidade" className="text-gray-500 hover:text-white transition-colors">
                Privacidade
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-white transition-colors">
                Cookies
              </Link>
              <Link to="/lgpd" className="text-gray-500 hover:text-white transition-colors">
                LGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}