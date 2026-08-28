import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function Portfolio() {
  const { portfolio } = siteConfig;

  return (
    <Section
      id="portfolio"
      badge={portfolio.badge}
      title={portfolio.title}
      subtitle={portfolio.subtitle}
      background="subtle"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolio.items.map((item) => (
          <Card key={item.id} className="p-0 overflow-hidden group flex flex-col">
            {/* Visual Thumbnail / Showcase Box */}
            <div className="relative aspect-[16/10] bg-surface-900 overflow-hidden flex items-center justify-center p-6 text-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-950 via-surface-900 to-surface-800 transition-transform duration-500 group-hover:scale-105" />
              
              <div className="relative z-10 text-center space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">
                  {item.category}
                </span>
                <h4 className="text-xl font-bold text-white max-w-sm px-4">
                  {item.title}
                </h4>
              </div>

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="surface" size="sm" className="bg-white/20 text-white backdrop-blur-md border-white/20">
                  {item.category}
                </Badge>
              </div>
            </div>

            {/* Card Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-surface-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-surface-100 text-surface-700 dark:bg-surface-800 dark:text-surface-300"
                    >
                      <Tag className="w-3 h-3 opacity-60" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-6 mt-6 border-t border-surface-100 dark:border-surface-800">
                <Button href="#contact" variant="ghost" size="sm" className="w-full justify-between">
                  <span>Demander un projet similaire</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
