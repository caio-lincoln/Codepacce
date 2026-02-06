import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Counter } from './Counter';

interface StatCardProps {
  icon?: LucideIcon;
  value: string | number;
  label: string;
  suffix?: string;
  decimals?: number;
  delay?: number;
  type?: 'minimal' | 'boxed' | 'hero'; 
}

export function StatCard({
  icon: Icon,
  value,
  label,
  suffix = "",
  decimals = 0,
  delay = 0,
  type = 'minimal'
}: StatCardProps) {
  if (type === 'boxed') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center text-center group hover:border-blue-500/20 hover:bg-white/10 transition-all duration-500"
      >
        {Icon && (
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
            <Icon className="w-10 h-10 text-blue-400 relative z-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
        )}
        <h3 className="text-5xl font-bold text-white mb-4 font-display tracking-tight">{value}{suffix}</h3>
        <p className="text-gray-400 font-light text-lg font-sans">{label}</p>
      </motion.div>
    );
  }

  // Hero style (as seen in HomeStats)
  if (type === 'hero') {
    return (
      <div className="text-center px-4 relative group">
        <div className="absolute inset-0 bg-blue-500/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <p className="relative text-5xl md:text-6xl font-light text-white mb-3 tracking-tighter font-display">
          {typeof value === 'number' ? (
             <Counter value={value} suffix={suffix} decimals={decimals} />
          ) : (
            <>{value}{suffix}</>
          )}
        </p>
        <p className="relative text-xs text-gray-400 uppercase tracking-[0.2em] font-medium font-sans">
          {label}
        </p>
      </div>
    );
  }

  // Minimal style (default)
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="text-center group"
    >
      {Icon && (
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
      )}
      <p className="text-4xl font-bold text-white mb-2 font-display tracking-tight group-hover:text-blue-400 transition-colors duration-300">{value}{suffix}</p>
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider font-sans">{label}</p>
    </motion.div>
  );
}
