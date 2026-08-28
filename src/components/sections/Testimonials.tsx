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
      background="subtle"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.items.map((item) => (
          <Card key={item.id} className="flex flex-col justify-between relative bg-white border-surface-200 shadow-sm">
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-brand-300" />
              </div>

              {/* Review Text */}
              <p className="text-sm sm:text-base text-surface-700 leading-relaxed italic mb-6">
                « {item.content} »
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-surface-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-surface-950">
                  {item.author}
                </h4>
                <p className="text-xs text-surface-500">
                  {item.role} {item.location ? `• ${item.location}` : ''}
                </p>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Vérifié</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
