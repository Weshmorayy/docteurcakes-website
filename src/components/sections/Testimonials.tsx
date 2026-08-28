import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <Section
      id="testimonials"
      badge={testimonials.badge}
      title={testimonials.title}
      subtitle={testimonials.subtitle}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.items.map((item) => (
          <Card key={item.id} className="flex flex-col justify-between relative">
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-brand-200 dark:text-brand-900/60" />
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-surface-700 dark:text-surface-300 leading-relaxed italic mb-6">
                « {item.content} »
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-surface-100 dark:border-surface-800 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-surface-900 dark:text-white">
                  {item.author}
                </h4>
                <p className="text-xs text-surface-500">
                  {item.role} {item.company ? `• ${item.company}` : ''}
                </p>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3" />
                <span>Vérifié</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
