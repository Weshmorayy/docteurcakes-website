import React from 'react';
import Image from 'next/image';
import { Heart, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';

export function About() {
  const { about } = siteConfig;

  return (
    <Section id="about" badge={about.badge} title={about.title} subtitle={about.subtitle}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Text Content & Points (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-surface-700">
          {about.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base sm:text-lg leading-relaxed">
              {p}
            </p>
          ))}

          {/* Key Advantages Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-brand-50/60 border border-brand-200">
              <Sparkles className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-surface-950 text-sm">Zéro Douleur & Douceur</h4>
                <p className="text-xs text-surface-600">Techniques expertes respectueuses de vos racines</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-surface-950 text-sm">Ouvert 7 jours sur 7</h4>
                <p className="text-xs text-surface-600">De 09h00 à 20h00 sans interruption à Ouest-Foire</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Key Figures & Photo Showcase (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                Savoir-Faire & Bienveillance
              </span>
              <p className="text-sm font-semibold">Des soins capillaires adaptés aux textures afro & métisses</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-surface-200 text-center flex flex-col justify-center space-y-1 shadow-sm"
              >
                <span className="text-3xl font-black text-brand-600 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-surface-950">
                  {stat.label}
                </span>
                {stat.description && (
                  <span className="text-[11px] text-surface-500">{stat.description}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
