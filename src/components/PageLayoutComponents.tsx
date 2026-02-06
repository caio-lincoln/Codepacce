import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface PageBackgroundProps {
  opacity?: number;
  blobColors?: {
    primary: string;
    secondary: string;
  };
}

export function PageBackground({ 
  opacity = 0.03,
  blobColors = { primary: 'bg-blue-500/10', secondary: 'bg-blue-900/10' }
}: PageBackgroundProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className={`absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[${opacity}]`} />
      <div className={`absolute top-40 left-20 w-[600px] h-[600px] ${blobColors.primary} rounded-full blur-[120px] -z-10`} />
      <div className={`absolute bottom-40 right-20 w-[600px] h-[600px] ${blobColors.secondary} rounded-full blur-[120px] -z-10`} />
    </div>
  );
}

interface PageHeroProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  align?: 'center' | 'left';
}

export function PageHero({ badge, title, description, align = 'center' }: PageHeroProps) {
  return (
    <section className="container mx-auto px-4 mb-32 relative z-10">
      <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-4xl`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm mb-6 backdrop-blur-sm tracking-wide">
              {badge}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight text-white">
            {title}
          </h1>
          <p className="text-gray-400 text-xl font-light leading-relaxed max-w-2xl mx-auto font-sans">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeader({ title, subtitle, align = 'center', className = '' }: SectionHeaderProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} mb-16 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-4 font-display text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-gray-400 text-lg font-light ${align === 'center' ? 'max-w-2xl mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="container mx-auto px-4 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 p-12 md:p-20 text-center group"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full -mt-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display text-white">
            {title}
          </h2>
          <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed font-sans">
            {description}
          </p>
          <Link 
            to={buttonLink} 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-all duration-300 group"
          >
            <span className="font-display">{buttonText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
