'use client';

import React from 'react';
import { Check, MessageCircle, Sparkles, Crown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function Offers() {
  const { offers } = siteConfig;

  return (
    <Section
      id="tarifs"
      badge={offers.badge}
      title={offers.title}
      subtitle={offers.subtitle}
      background="default"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {offers.categories.map((cat) => {
          const isPopular = cat.popular;
          const waLink = `https://wa.me/2250749911390?text=Bonjour%20Docteur%20Cakes%2C%20je%20souhaite%20commander%20pour%20la%20cat%C3%A9gorie%20%3A%20${encodeURIComponent(
            cat.title
          )}`;

          return (
            <Card
              key={cat.id}
              className={`flex flex-col justify-between p-7 sm:p-8 rounded-3xl transition-all duration-300 relative ${
                isPopular
                  ? 'bg-gradient-to-b from-[#241B08] via-[#1A150D] to-[#120F0A] border-2 border-[#D4AF37] ring-2 ring-[#D4AF37]/30 shadow-2xl scale-[1.02] lg:scale-105 z-10'
                  : 'bg-[#15120E] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60'
              }`}
            >
              <div>
                {/* Popular Pill */}
                {isPopular ? (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#F6D020] via-[#D4AF37] to-[#B89020] text-stone-950 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl shadow-md">
                      <Crown className="w-3.5 h-3.5 text-stone-950" />
                      Le plus demandé
                    </span>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#241C0C] px-3 py-1 rounded-lg border border-[#D4AF37]/30">
                      Gamme Artisanale
                    </span>
                  </div>
                )}

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 font-heading leading-tight">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Price block */}
                <div className="p-4 rounded-2xl bg-black/60 border border-[#D4AF37]/30 mb-6 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#F6D020] font-heading">
                      {cat.unitPrice}
                    </span>
                    <span className="text-xs font-bold text-stone-300 uppercase tracking-wide">/ la part</span>
                  </div>
                  <p className="text-xs font-bold text-stone-200">
                    {cat.minimumOrder} · <span className="text-[#FFF08F]">{cat.startingPrice}</span>
                  </p>
                </div>

                {/* Inclusions */}
                <div className="space-y-3 mb-8">
                  {cat.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <div className="pt-4 border-t border-white/10">
                <Button
                  href={waLink}
                  isExternal
                  variant={isPopular ? 'primary' : 'outline'}
                  size="sm"
                  className={`w-full justify-center font-black text-xs uppercase tracking-wider py-3.5 rounded-xl ${
                    isPopular
                      ? 'bg-gradient-to-r from-[#F6D020] via-[#D4AF37] to-[#B89020] text-stone-950 shadow-lg shadow-[#D4AF37]/20 border border-[#FFF8C7]/50'
                      : 'border-[#D4AF37]/50 hover:bg-white/10 text-[#F6D020] hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Commander sur WhatsApp</span>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
