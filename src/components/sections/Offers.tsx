'use client';

import React from 'react';
import { Check, MessageCircle, Sparkles, Crown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export function Offers() {
  const { offers } = siteConfig;

  return (
    <Section
      id="tarifs"
      badge={offers.badge}
      title={offers.title}
      subtitle={offers.subtitle}
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {offers.categories.map((cat) => {
          const isPopular = cat.popular;
          const waLink = `https://wa.me/2250749911390?text=Bonjour%20Docteur%20Cakes%2C%20je%20souhaite%20commander%20pour%20la%20cat%C3%A9gorie%20%3A%20${encodeURIComponent(
            cat.title
          )}`;

          return (
            <div
              key={cat.id}
              className={`flex flex-col justify-between p-7 sm:p-8 rounded-3xl transition-all duration-300 relative ${
                isPopular
                  ? 'bg-gradient-to-b from-[#14110E] to-[#0A0908] text-white border-2 border-[#D4AF37] ring-4 ring-[#D4AF37]/20 shadow-2xl scale-[1.02] lg:scale-105 z-10'
                  : 'bg-white text-stone-900 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-xl'
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
                    <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#937012] bg-[#FFF9E6] px-3 py-1 rounded-lg border border-[#D4AF37]/40">
                      Gamme Artisanale
                    </span>
                  </div>
                )}

                <h3
                  className={`text-xl sm:text-2xl font-black mb-2 font-heading leading-tight ${
                    isPopular ? 'text-white' : 'text-stone-950'
                  }`}
                >
                  {cat.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm mb-6 leading-relaxed ${
                    isPopular ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {cat.description}
                </p>

                {/* Price block */}
                <div
                  className={`p-4 rounded-2xl mb-6 space-y-1 ${
                    isPopular
                      ? 'bg-black/60 border border-[#D4AF37]/40'
                      : 'bg-[#FFFDF5] border border-[#D4AF37]/40'
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-3xl font-black font-heading ${
                        isPopular ? 'text-[#F6D020]' : 'text-[#937012]'
                      }`}
                    >
                      {cat.unitPrice}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-wide ${
                        isPopular ? 'text-stone-400' : 'text-stone-600'
                      }`}
                    >
                      / la part
                    </span>
                  </div>
                  <p
                    className={`text-xs font-bold ${
                      isPopular ? 'text-stone-200' : 'text-stone-800'
                    }`}
                  >
                    {cat.minimumOrder} ·{' '}
                    <span className={isPopular ? 'text-[#FFF08F]' : 'text-[#B89020]'}>
                      {cat.startingPrice}
                    </span>
                  </p>
                </div>

                {/* Inclusions */}
                <div className="space-y-3 mb-8">
                  {cat.features.map((f, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                        isPopular ? 'text-stone-200' : 'text-stone-700 font-medium'
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPopular ? 'text-[#D4AF37]' : 'text-emerald-600'
                        }`}
                      />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <div
                className={`pt-4 border-t ${
                  isPopular ? 'border-white/10' : 'border-stone-200'
                }`}
              >
                <Button
                  href={waLink}
                  isExternal
                  variant={isPopular ? 'primary' : 'outline'}
                  size="sm"
                  className={`w-full justify-center font-black text-xs uppercase tracking-wider py-3.5 rounded-xl cursor-pointer ${
                    isPopular
                      ? 'bg-gradient-to-r from-[#F6D020] via-[#D4AF37] to-[#B89020] text-stone-950 shadow-lg shadow-[#D4AF37]/20 border border-[#FFF8C7]/50'
                      : 'border-[#D4AF37] bg-white hover:bg-[#FFFDF5] text-[#937012] font-bold shadow-xs'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Commander sur WhatsApp</span>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
