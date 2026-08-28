import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function Pricing() {
  const { pricing } = siteConfig;
  if (!pricing) return null;

  return (
    <Section
      id="pricing"
      badge={pricing.badge}
      title={pricing.title}
      subtitle={pricing.subtitle}
      background="subtle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pricing.items.map((plan) => (
          <Card
            key={plan.id}
            className={`flex flex-col justify-between relative ${
              plan.isPopular
                ? 'border-brand-500 ring-2 ring-brand-500/20 shadow-xl bg-white dark:bg-surface-900'
                : ''
            }`}
          >
            <div>
              {/* Highlight Tag */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge variant="primary" size="md" className="shadow-md font-bold">
                    Recommandé
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-surface-500 min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              {/* Plan Price */}
              <div className="mb-6 pb-6 border-b border-surface-100 dark:border-surface-800">
                <span className="text-3xl sm:text-4xl font-extrabold text-surface-900 dark:text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-xs text-surface-500 ml-2 font-medium">
                    / {plan.period}
                  </span>
                )}
              </div>

              {/* Feature List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-surface-700 dark:text-surface-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <Button
                href={plan.ctaHref}
                variant={plan.isPopular ? 'glow' : 'outline'}
                size="md"
                className="w-full"
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
