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
      background="dark"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {flavors.list.map((flavor, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                flavor.isPopular
                  ? 'bg-[#1C1710] border-[#D4AF37]/50 shadow-md ring-1 ring-[#D4AF37]/20'
                  : 'bg-[#12100E] border-[#D4AF37]/20 hover:border-[#D4AF37]/40'
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="font-extrabold text-sm text-white">
                  {flavor.name}
                </span>
                {flavor.isPopular && (
                  <Sparkles className="w-3.5 h-3.5 text-[#F6D020] shrink-0" />
                )}
              </div>
              {flavor.note ? (
                <span className="text-[10px] font-bold text-[#F6D020] bg-[#2A1E08] px-2.5 py-1 rounded-md inline-block w-fit border border-[#D4AF37]/40 uppercase tracking-wider">
                  {flavor.note}
                </span>
              ) : (
                <span className="text-[10px] text-stone-400 font-medium">Parfum Authentique</span>
              )}
            </div>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-[#1C1710] border border-[#D4AF37]/40 text-center text-xs sm:text-sm text-stone-200 font-medium shadow-md">
          💡 <strong className="text-[#F6D020]">Astuce Gourmande :</strong> Vous pouvez combiner 2 parfums dans le même gâteau (ex: Chocolat & Baileys, ou Vanille & Fruits rouges) sans supplément.
        </div>
      </div>
    </Section>
  );
}
