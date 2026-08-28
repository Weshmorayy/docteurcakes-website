import React from 'react';
import { Check, Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Pricing() {
  const { pricing, contact } = siteConfig;

  if (!pricing || !pricing.items || pricing.items.length === 0) {
    return null;
  }

  return (
    <Section
      id="pricing"
      badge={pricing.badge}
      title={pricing.title}
      subtitle={pricing.subtitle}
      background="white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pricing.items.map((plan) => (
          <Card
            key={plan.id}
            className={`flex flex-col justify-between relative transition-all duration-300 ${
              plan.isPopular
                ? 'bg-surface-950 text-white border-brand-400 ring-2 ring-brand-400/40 shadow-2xl scale-105 z-10'
                : 'bg-white text-surface-900 border-surface-200 hover:border-brand-300'
            }`}
          >
            <div>
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge
                    variant="primary"
                    size="sm"
                    className="bg-gradient-to-r from-amber-500 to-brand-500 text-white font-black px-3.5 py-1 border-none shadow-md"
                  >
                    👑 Recommandé par nos clientes
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                    plan.isPopular ? 'text-brand-300' : 'text-brand-700'
                  }`}
                >
                  {plan.categoryName}
                </span>
                <h3
                  className={`text-2xl font-black mb-2 ${
                    plan.isPopular ? 'text-white' : 'text-surface-950'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    plan.isPopular ? 'text-surface-300' : 'text-surface-600'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Price Tag */}
              <div className="mb-6 pb-6 border-b border-surface-200/40">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-3xl font-black ${
                      plan.isPopular ? 'text-brand-300' : 'text-brand-700'
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-xs font-semibold ${
                        plan.isPopular ? 'text-surface-400' : 'text-surface-500'
                      }`}
                    >
                      / {plan.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm">
                    <Check
                      className={`w-4 h-4 shrink-0 ${
                        plan.isPopular ? 'text-brand-400' : 'text-emerald-600'
                      }`}
                    />
                    <span className={plan.isPopular ? 'text-surface-200' : 'text-surface-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan CTA Button */}
            <div className="pt-4 border-t border-surface-200/40">
              <Button
                href={plan.ctaHref}
                isExternal
                variant={plan.isPopular ? 'glow' : 'outline'}
                size="md"
                className={`w-full justify-center ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white'
                    : 'border-brand-400 hover:bg-brand-50 text-surface-900'
                }`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>{plan.ctaText}</span>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
