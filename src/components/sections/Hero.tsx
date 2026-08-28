import React from 'react';
import Image from 'next/image';
import { Star, MessageCircle, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  const { hero, contact } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F3EB] via-[#FAF8F5] to-white pt-8 sm:pt-14 pb-16 lg:pb-28 border-b border-surface-200/70">
      {/* Subtle Warm Gold Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-300/20 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div>
              <Badge variant="primary" size="md" className="gap-2 px-4 py-1.5 shadow-sm bg-brand-100/70 text-brand-900 border-brand-300">
                <span className="text-amber-600">👑</span>
                <span>{hero.badge}</span>
              </Badge>
            </div>

            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-surface-950 leading-[1.12] font-heading">
              {hero.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-amber-600 to-brand-700">
                {hero.titleHighlight}
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg sm:text-xl text-surface-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href={hero.primaryCta.href}
                isExternal
                variant="glow"
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-lg shadow-emerald-600/25"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>{hero.primaryCta.text}</span>
              </Button>
              <Button
                href={hero.secondaryCta.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-brand-400/80 hover:bg-brand-50 text-surface-900"
              >
                <span>{hero.secondaryCta.text}</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-brand-600" />
              </Button>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-6 border-t border-surface-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-surface-600">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <span className="font-bold text-surface-950">{hero.trustBadges.rating}</span>
                <span>({hero.trustBadges.reviewCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="font-semibold text-surface-900">{hero.trustBadges.label}</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-3 bg-gradient-to-tr from-brand-200 via-brand-100 to-amber-100 shadow-2xl">
              {/* Image Frame */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-inner bg-surface-950">
                <Image
                  src={hero.heroImage.src}
                  alt={hero.heroImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider bg-surface-950/80 text-brand-200 backdrop-blur-md rounded-xl border border-brand-500/40 shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Boho Knotless Braids</span>
                  </span>
                </div>

                {/* Bottom Quick Callout Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-surface-950/85 backdrop-blur-md border border-brand-400/30 text-white shadow-xl flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-[11px] font-medium text-brand-300 uppercase tracking-wide">
                      Glow & Shine • Ouest-Foire
                    </p>
                    <p className="text-sm font-bold text-white">
                      « La beauté n’a pas de frontières »
                    </p>
                  </div>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-transform hover:scale-105"
                    aria-label="Envoyer un message WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
