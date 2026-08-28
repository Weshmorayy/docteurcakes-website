import React from 'react';
import { Star, ShieldCheck, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-surface-50 via-white to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-900 pt-10 sm:pt-16 pb-20 lg:pb-32 border-b border-surface-200/60 dark:border-surface-800/60">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div>
              <Badge variant="primary" size="md" className="gap-2 px-4 py-1.5 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                <span>{hero.badge}</span>
              </Badge>
            </div>

            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-surface-900 dark:text-white leading-[1.12]">
              {hero.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 dark:from-brand-400 dark:to-indigo-400">
                {hero.titleHighlight}
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-lg sm:text-xl text-surface-600 dark:text-surface-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button href={hero.primaryCta.href} variant="glow" size="lg" className="w-full sm:w-auto">
                <span>{hero.primaryCta.text}</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline" size="lg" className="w-full sm:w-auto">
                <span>{hero.secondaryCta.text}</span>
              </Button>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-6 border-t border-surface-200 dark:border-surface-800 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-surface-600 dark:text-surface-400">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-surface-900 dark:text-white">{hero.trustBadges.rating}</span>
                <span>({hero.trustBadges.reviewCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span className="font-medium">{hero.trustBadges.label}</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-3 bg-gradient-to-tr from-surface-200 via-brand-200 to-surface-100 dark:from-surface-800 dark:via-brand-900/40 dark:to-surface-800 shadow-2xl">
              {/* Visual Card / Placeholder Showcase */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-900 flex flex-col justify-between p-6 text-white shadow-inner">
                {/* Visual Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-surface-900 to-surface-950 -z-0" />
                
                {/* Top Badge */}
                <div className="relative z-10 flex justify-between items-center">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-lg border border-white/10">
                    Artisanat de Prestige
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Center Visual Mockup Accent */}
                <div className="relative z-10 py-6 text-center space-y-2">
                  <p className="text-2xl font-bold tracking-tight text-white">
                    {siteConfig.name}
                  </p>
                  <p className="text-xs text-surface-300 font-light max-w-xs mx-auto">
                    Conception • Fabrication • Pose soignée
                  </p>
                </div>

                {/* Bottom Quick Call Card */}
                <div className="relative z-10 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-500 text-white">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-surface-300">Ligne directe devis</p>
                      <p className="text-xs font-bold text-white">{siteConfig.contact.phoneDisplay}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-300 font-medium">Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
