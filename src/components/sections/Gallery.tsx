import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function Gallery() {
  const { gallery } = siteConfig;

  return (
    <Section
      id="galerie"
      badge={gallery.badge}
      title={gallery.title}
      subtitle={gallery.subtitle}
      background="subtle"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {gallery.items.map((item) => (
          <Card
            key={item.id}
            className="p-0 overflow-hidden bg-white border border-surface-200 rounded-2xl shadow-xs hover:shadow-md transition-all group"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-100">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                  {item.category}
                </span>
                <h3 className="font-extrabold text-sm leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="p-3.5">
              <p className="text-xs text-surface-600 leading-relaxed">
                {item.details}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
