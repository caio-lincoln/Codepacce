import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  delay = 0,
  children
}: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`group bg-white/5 p-8 rounded-[2rem] backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex flex-col ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-gray-300 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-300 group-hover:scale-110">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 font-display text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-8 font-light leading-relaxed font-sans">{description}</p>
      
      {children && <div className="mt-auto">{children}</div>}
    </motion.div>
  );
}
