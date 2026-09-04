import React from 'react';
import { Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';

export function Flavors() {
  const { flavors } = siteConfig;

  return (
    <Section
      id="parfums"
      badge={flavors.badge}
      title={flavors.title}
      subtitle={flavors.subtitle}
      background="subtle"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {flavors.list.map((flavor, idx) => (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                flavor.isPopular
                  ? 'bg-surface-50 border-brand-500/40 shadow-xs'
                  : 'bg-surface-900 border-surface-200'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className="font-bold text-xs sm:text-sm text-white">
                  {flavor.name}
                </span>
                {flavor.isPopular && (
                  <Sparkles className="w-3 h-3 text-brand-400 shrink-0" />
                )}
              </div>
              {flavor.note ? (
                <span className="text-[10px] font-bold text-brand-300 bg-brand-500/20 px-2 py-0.5 rounded-md inline-block w-fit border border-brand-500/30">
                  {flavor.note}
                </span>
              ) : (
                <span className="text-[10px] text-surface-400">Classique</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-surface-50 border border-brand-500/30 text-center text-xs text-surface-600 font-medium">
          💡 <strong className="text-brand-300">Astuce :</strong> Vous pouvez combiner 2 parfums dans le même gâteau (ex: Chocolat & Baileys, ou Vanille & Fruits rouges).
        </div>
      </div>
    </Section>
  );
}
