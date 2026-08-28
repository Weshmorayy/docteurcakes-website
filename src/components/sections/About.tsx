import React from 'react';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function About() {
  const { about } = siteConfig;

  return (
    <Section id="about" badge={about.badge} title={about.title} subtitle={about.subtitle}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Text Content & Points (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-surface-700 dark:text-surface-300">
          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg leading-relaxed">
              {p}
            </p>
          ))}

          {/* Key Advantages List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-50 dark:bg-surface-900 border border-surface-200/60 dark:border-surface-800">
              <Award className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-surface-900 dark:text-white text-sm">Normes & Qualité</h4>
                <p className="text-xs text-surface-500">Matériaux écologiques certifiés</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-50 dark:bg-surface-900 border border-surface-200/60 dark:border-surface-800">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-surface-900 dark:text-white text-sm">Garantie Totale</h4>
                <p className="text-xs text-surface-500">Assurance décennale française</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Key Figures / Stats Grid (5 cols) */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
          {about.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-50 dark:bg-surface-900 border border-surface-200/80 dark:border-surface-800 text-center flex flex-col justify-center space-y-1 shadow-sm"
            >
              <span className="text-3xl sm:text-4xl font-black text-brand-600 dark:text-brand-400 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-surface-900 dark:text-white">
                {stat.label}
              </span>
              {stat.description && (
                <span className="text-xs text-surface-500">{stat.description}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
