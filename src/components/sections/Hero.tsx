'use client';

import React from 'react';
import Image from 'next/image';
import { Cake, Sparkles, MapPin, CheckCircle2, Radio } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const { hero, contact } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#14120F] via-surface-900 to-black text-white pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-brand-500/20">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[450px] bg-brand-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[350px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-50 text-brand-300 border border-brand-500/40 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-brand-400" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5.5xl font-black text-white tracking-tight leading-tight font-heading">
              {hero.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-amber-400 to-brand-500">
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-surface-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* Quick Guarantees in Dark & Gold Luxury Cards */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold pt-1">
              <span className="flex items-center gap-1.5 bg-surface-50 text-surface-800 px-3 py-1.5 rounded-xl border border-brand-500/20 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Dès 3 500 F la part
              </span>
              <span className="flex items-center gap-1.5 bg-surface-50 text-surface-800 px-3 py-1.5 rounded-xl border border-brand-500/20 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                13 parfums au choix
              </span>
              <span className="flex items-center gap-1.5 bg-surface-50 text-surface-800 px-3 py-1.5 rounded-xl border border-brand-500/20 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Livraison Abidjan & intérieur
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                href={hero.ctaPrimary.href}
                variant="primary"
                size="md"
                className="w-full sm:w-auto bg-gradient-to-r from-brand-500 via-amber-400 to-brand-600 hover:from-brand-400 hover:to-amber-300 text-surface-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg shadow-brand-500/20 border border-brand-300/40"
              >
                <Cake className="w-4 h-4 mr-2 text-surface-950" />
                <span>{hero.ctaPrimary.text}</span>
              </Button>
              <Button
                href={contact.whatsappChannelUrl}
                isExternal
                variant="outline"
                size="md"
                className="w-full sm:w-auto border-brand-500/40 hover:bg-white/10 text-brand-300 hover:text-white font-bold text-xs px-5 py-3.5 rounded-xl"
              >
                <Radio className="w-3.5 h-3.5 mr-1.5 text-brand-400" />
                <span>Chaîne WhatsApp</span>
              </Button>
            </div>

            {/* Address callout */}
            <p className="text-xs text-surface-400 flex items-center justify-center lg:justify-start gap-1 pt-2">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>Atelier : {contact.address.street}, {contact.address.neighborhood} ({contact.address.city})</span>
            </p>
          </div>

          {/* Right Column (5 cols) : Real Featured Cake */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] rounded-3xl p-2.5 bg-gradient-to-b from-brand-500/30 via-surface-50 to-surface-100 shadow-2xl border border-brand-400/30">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src={hero.featuredCake.image}
                  alt={hero.featuredCake.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-brand-500 text-surface-950 px-2.5 py-1 rounded-md mb-1 inline-block">
                    {hero.featuredCake.tag}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug text-white">
                    {hero.featuredCake.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
