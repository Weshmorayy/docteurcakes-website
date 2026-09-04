'use client';

import React from 'react';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
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
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {offers.categories.map((cat) => {
          const waLink = `https://wa.me/2250749911390?text=Bonjour%20Docteur%20Cakes%2C%20je%20souhaite%20commander%20pour%20la%20cat%C3%A9gorie%20%3A%20${encodeURIComponent(
            cat.title
          )}`;

          return (
            <Card
              key={cat.id}
              className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl transition-all ${
                cat.popular
                  ? 'bg-gradient-to-b from-surface-100 to-surface-50 border-2 border-brand-400 text-white shadow-xl shadow-brand-500/10 relative scale-[1.02]'
                  : 'bg-surface-50 border border-surface-200 hover:border-brand-500/50 text-surface-800'
              }`}
            >
              <div>
                {cat.popular && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-brand-500 to-amber-400 text-surface-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                      <Sparkles className="w-3 h-3 text-surface-950" />
                      Le plus demandé
                    </span>
                  </div>
                )}

                <h3 className="text-lg sm:text-xl font-black text-white mb-1 font-heading">
                  {cat.title}
                </h3>

                <p className="text-xs text-surface-500 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Price block */}
                <div className="p-3.5 rounded-xl bg-black/50 border border-brand-500/20 mb-5 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-brand-400">
                      {cat.unitPrice}
                    </span>
                    <span className="text-xs font-bold text-surface-400">/ la part</span>
                  </div>
                  <p className="text-xs font-semibold text-surface-300">
                    {cat.minimumOrder} · <span className="text-brand-300 font-bold">{cat.startingPrice}</span>
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {cat.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-surface-600">
                      <Check className="w-3.5 h-3.5 text-brand-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <div className="pt-3 border-t border-surface-200">
                <Button
                  href={waLink}
                  isExternal
                  variant={cat.popular ? 'primary' : 'outline'}
                  size="sm"
                  className={`w-full justify-center font-bold text-xs py-2.5 rounded-xl ${
                    cat.popular
                      ? 'bg-gradient-to-r from-brand-500 via-amber-400 to-brand-600 text-surface-950 shadow-md'
                      : 'border-brand-500/40 hover:bg-white/5 text-brand-300 hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
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
