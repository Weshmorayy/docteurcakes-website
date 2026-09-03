'use client';

import React from 'react';
import Image from 'next/image';
import { MessageCircle, Cake, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const { hero, contact } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-surface-50 to-white pt-8 sm:pt-14 pb-14 sm:pb-20 border-b border-surface-200">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-surface-950 tracking-tight leading-tight font-heading">
              {hero.title}{' '}
              <span className="text-amber-700 underline decoration-amber-300 decoration-wavy decoration-2">
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-surface-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-bold text-surface-800 pt-1">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-surface-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Dès 3 500 F la part
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-surface-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                13 parfums au choix
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-surface-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Livraison Abidjan & intérieur
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                href={hero.ctaPrimary.href}
                variant="primary"
                size="md"
                className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm"
              >
                <Cake className="w-4 h-4 mr-2" />
                <span>{hero.ctaPrimary.text}</span>
              </Button>
              <Button
                href={hero.ctaSecondary.href}
                variant="outline"
                size="md"
                className="w-full sm:w-auto border-surface-300 hover:bg-white text-surface-800 font-bold text-xs px-5 py-3.5 rounded-xl"
              >
                <span>{hero.ctaSecondary.text}</span>
              </Button>
            </div>

            {/* Address callout */}
            <p className="text-xs text-surface-500 flex items-center justify-center lg:justify-start gap-1 pt-2">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>Atelier : {contact.address.street}, {contact.address.neighborhood} ({contact.address.city})</span>
            </p>
          </div>

          {/* Right Column (5 cols) : Real Featured Cake */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] rounded-3xl p-2.5 bg-white shadow-xl border border-amber-200/80">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-surface-100">
                <Image
                  src={hero.featuredCake.image}
                  alt={hero.featuredCake.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-600/90 px-2.5 py-1 rounded-md mb-1 inline-block">
                    {hero.featuredCake.tag}
                  </span>
                  <h3 className="font-extrabold text-sm sm:text-base leading-snug">
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
