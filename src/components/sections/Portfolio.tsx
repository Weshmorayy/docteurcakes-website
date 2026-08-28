'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function Portfolio() {
  const { portfolio, contact } = siteConfig;
  const [selectedTag, setSelectedTag] = useState<string>('Tous');

  // Extract unique categories/tags
  const allTags = ['Tous', ...Array.from(new Set(portfolio.items.map((p) => p.category)))];

  const filteredItems =
    selectedTag === 'Tous'
      ? portfolio.items
      : portfolio.items.filter((p) => p.category === selectedTag);

  return (
    <Section
      id="portfolio"
      badge={portfolio.badge}
      title={portfolio.title}
      subtitle={portfolio.subtitle}
      background="subtle"
    >
      {/* Category filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedTag === tag
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-white text-surface-700 hover:bg-brand-50 border border-surface-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => {
          const bookingLink = `https://wa.me/221771644848?text=Bonjour%20Glow%20%26%20Shine%2C%20je%20souhaite%20r%C3%A9aliser%20le%20style%20%3A%20${encodeURIComponent(
            item.title
          )}`;

          return (
            <Card
              key={item.id}
              className="p-0 overflow-hidden group bg-white border-surface-200 hover:border-brand-400 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/5] overflow-hidden bg-surface-950">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Pill on Top of Image */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold bg-surface-950/80 text-brand-300 backdrop-blur-md rounded-lg border border-brand-400/30">
                      {item.category}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-5">
                  <p className="text-xs sm:text-sm text-surface-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-brand-800 bg-brand-50 px-2.5 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <Button
                  href={bookingLink}
                  isExternal
                  variant="outline"
                  size="sm"
                  className="w-full justify-center text-xs font-bold border-brand-300 hover:bg-brand-50 text-surface-900"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                  <span>Demander ce style</span>
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
