'use client';

import React from 'react';
import { Cake, Check, MessageCircle, Sparkles } from 'lucide-react';
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
                  ? 'bg-amber-50/50 border-2 border-amber-500 shadow-md relative'
                  : 'bg-white border border-surface-200 hover:border-amber-300'
              }`}
            >
              <div>
                {cat.popular && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1 bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                      <Sparkles className="w-3 h-3" />
                      Le plus demandé
                    </span>
                  </div>
                )}

                <h3 className="text-lg sm:text-xl font-black text-surface-950 mb-1 font-heading">
                  {cat.title}
                </h3>

                <p className="text-xs text-surface-600 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Price block */}
                <div className="p-3.5 rounded-xl bg-surface-100 mb-5 space-y-1">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-amber-700">
                      {cat.unitPrice}
                    </span>
                    <span className="text-xs font-bold text-surface-600">/ la part</span>
                  </div>
                  <p className="text-xs font-semibold text-surface-700">
                    {cat.minimumOrder} · <span className="text-amber-800 font-bold">{cat.startingPrice}</span>
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {cat.features.map((f, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-surface-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <div className="pt-3 border-t border-surface-200/60">
                <Button
                  href={waLink}
                  isExternal
                  variant={cat.popular ? 'primary' : 'outline'}
                  size="sm"
                  className={`w-full justify-center font-bold text-xs py-2.5 rounded-xl ${
                    cat.popular
                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                      : 'border-surface-300 hover:bg-amber-50 text-surface-900'
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
