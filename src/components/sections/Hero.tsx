'use client';

import React from 'react';
import Image from 'next/image';
import { Cake, Sparkles, MapPin, CheckCircle2, Radio, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const { hero, contact } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#14100C] via-[#0C0A09] to-[#0C0A09] text-white pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-[#D4AF37]/20">
      {/* Warm Ambient Gold Backlights */}
      <div className="absolute top-0 right-0 w-[550px] h-[480px] bg-gradient-to-bl from-[#D4AF37]/15 via-amber-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[380px] bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-[130px] pointer-events-none -z-10" />

      {/* Subtle Gold Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241C0C] text-[#F6D020] border border-[#D4AF37]/40 text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5.5xl font-black text-white tracking-tight leading-[1.12] font-heading">
              {hero.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF08F] via-[#F6D020] to-[#D4AF37]">
                {hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle with high contrast readable text */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {hero.subtitle}
            </p>

            {/* Reassurance Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold pt-1">
              <span className="flex items-center gap-2 bg-[#1A1612] text-stone-100 px-3.5 py-2 rounded-xl border border-[#D4AF37]/30 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Dès 3 500 F la part
              </span>
              <span className="flex items-center gap-2 bg-[#1A1612] text-stone-100 px-3.5 py-2 rounded-xl border border-[#D4AF37]/30 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                13 parfums au choix
              </span>
              <span className="flex items-center gap-2 bg-[#1A1612] text-stone-100 px-3.5 py-2 rounded-xl border border-[#D4AF37]/30 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                Livraison Abidjan & intérieur
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href={hero.ctaPrimary.href}
                variant="primary"
                size="md"
                className="w-full sm:w-auto bg-gradient-to-r from-[#F6D020] via-[#D4AF37] to-[#B89020] hover:from-[#FFE54C] hover:to-[#D4AF37] text-stone-950 font-black text-xs sm:text-sm uppercase tracking-wider px-7 py-4 rounded-xl shadow-xl shadow-[#D4AF37]/20 border border-[#FFF8C7]/50"
              >
                <Cake className="w-4 h-4 mr-2 text-stone-950" />
                <span>{hero.ctaPrimary.text}</span>
              </Button>
              <Button
                href={contact.whatsappChannelUrl}
                isExternal
                variant="outline"
                size="md"
                className="w-full sm:w-auto border-[#D4AF37]/50 hover:bg-white/10 text-[#F6D020] hover:text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl"
              >
                <Radio className="w-4 h-4 mr-2 text-[#D4AF37]" />
                <span>Chaîne WhatsApp</span>
              </Button>
            </div>

            {/* Address callout */}
            <p className="text-xs text-stone-300 flex items-center justify-center lg:justify-start gap-1.5 pt-2">
              <MapPin className="w-4 h-4 text-[#F6D020] shrink-0" />
              <span>Atelier : <strong className="text-white">{contact.address.street}, {contact.address.neighborhood} ({contact.address.city})</strong></span>
            </p>
          </div>

          {/* Right Column (5 cols) : Real Featured Cake */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] rounded-3xl p-3 bg-gradient-to-b from-[#D4AF37]/40 via-[#1A1612] to-[#261B01] shadow-2xl border border-[#D4AF37]/40">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src={hero.featuredCake.image}
                  alt={hero.featuredCake.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-[#D4AF37] text-stone-950 px-2.5 py-1 rounded-md inline-block">
                    {hero.featuredCake.tag}
                  </span>
                  <h3 className="font-black text-base sm:text-lg leading-snug text-white">
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
