'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Scissors,
  Crown,
  Heart,
  Eye,
  ShieldCheck,
  UserCheck,
  Smile,
  Check,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Scissors,
  Crown,
  Heart,
  Eye,
  ShieldCheck,
  UserCheck,
  Smile,
};

export function Services() {
  const { services, contact } = siteConfig;
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', ...services.categories];

  const filteredItems =
    selectedCategory === 'Tous'
      ? services.items
      : services.items.filter((item) => item.category === selectedCategory);

  return (
    <Section
      id="services"
      badge={services.badge}
      title={services.title}
      subtitle={services.subtitle}
      background="subtle"
    >
      {/* Category Pills Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-surface-950 text-brand-300 shadow-md ring-1 ring-brand-400/40'
                : 'bg-white text-surface-700 hover:bg-brand-50 border border-surface-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const IconComponent = iconMap[item.iconName] || Sparkles;
          const whatsappServiceLink = `https://wa.me/221771644848?text=Bonjour%20Glow%20%26%20Shine%2C%20je%20souhaite%20des%20informations%20et%20r%C3%A9server%20pour%20%3A%20${encodeURIComponent(
            item.title
          )}`;

          return (
            <Card
              key={item.id}
              className={`flex flex-col justify-between relative bg-white border-surface-200 hover:border-brand-400 ${
                item.popular ? 'border-brand-400 ring-2 ring-brand-400/20 shadow-md' : ''
              }`}
            >
              <div>
                {/* Popular Pill */}
                {item.popular && (
                  <div className="absolute -top-3 right-6">
                    <Badge variant="primary" size="sm" className="bg-brand-500 text-white font-bold shadow-sm border-none">
                      Top Prestation
                    </Badge>
                  </div>
                )}

                {/* Category & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-surface-500 uppercase tracking-wider bg-surface-100 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-surface-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-surface-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Features Checklist */}
                {item.features && (
                  <ul className="space-y-2 mb-6 border-t border-surface-100 pt-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-surface-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Card Action & Price Note */}
              <div className="pt-4 border-t border-surface-100 space-y-3">
                {item.priceNote && (
                  <p className="text-xs font-semibold text-brand-800 text-center">
                    ✨ {item.priceNote}
                  </p>
                )}
                <Button
                  href={whatsappServiceLink}
                  isExternal
                  variant="outline"
                  size="sm"
                  className="w-full justify-center bg-brand-50/50 hover:bg-brand-100/60 border-brand-300 text-brand-900 group font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5 text-emerald-600" />
                  <span>Réserver sur WhatsApp</span>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
