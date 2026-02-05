import React from 'react';
import { LucideIcon } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  subtitle?: React.ReactNode;
  icon: LucideIcon;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, subtitle, icon: Icon, children }: LegalPageLayoutProps) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <Icon className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {subtitle && (
            <div className="text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-blue max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}

export function LegalIntro({ title, icon: Icon, children }: { title: string, icon?: LucideIcon, children: React.ReactNode }) {
  return (
    <div className="bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-white/10 mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        {Icon && <Icon className="w-6 h-6 text-blue-500" />}
        {title}
      </h2>
      {children}
    </div>
  );
}

export function LegalCallout({ title, icon: Icon, children }: { title: string, icon: LucideIcon, children: React.ReactNode }) {
  return (
    <div className="bg-blue-500/10 p-8 rounded-lg border border-blue-500/20">
      <div className="flex items-start gap-4">
        <Icon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="text-gray-400">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
