import React from 'react';
import {
  Layout,
  Hammer,
  Wrench,
  ShieldCheck,
  Sparkles,
  Clock,
  Check,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Icon Map for dynamic lookup
const iconMap: Record<string, LucideIcon> = {
  Layout,
  Hammer,
  Wrench,
  ShieldCheck,
  Sparkles,
  Clock,
};

export function Services() {
  const { services } = siteConfig;

  return (
    <Section
      id="services"
      badge={services.badge}
      title={services.title}
      subtitle={services.subtitle}
      background="subtle"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.items.map((item) => {
          const IconComponent = iconMap[item.iconName] || Hammer;

          return (
            <Card
              key={item.id}
              className={`flex flex-col justify-between relative ${
                item.popular ? 'border-brand-500/80 shadow-md ring-1 ring-brand-500/20' : ''
              }`}
            >
              <div>
                {/* Popular Pill */}
                {item.popular && (
                  <div className="absolute -top-3 right-6">
                    <Badge variant="primary" size="sm" className="shadow-sm">
                      Plus demandé
                    </Badge>
                  </div>
                )}

                {/* Icon Header */}
                <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Features Checklist */}
                {item.features && (
                  <ul className="space-y-2.5 mb-8 border-t border-surface-100 dark:border-surface-800 pt-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-surface-700 dark:text-surface-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Card Action */}
              <div className="pt-2">
                <Button
                  href="#contact"
                  variant="outline"
                  size="sm"
                  className="w-full justify-between group"
                >
                  <span>Demander une estimation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
