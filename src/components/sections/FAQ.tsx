'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';

export function FAQ() {
  const { faq } = siteConfig;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      id="faq"
      badge={faq.badge}
      title={faq.title}
      subtitle={faq.subtitle}
      containerSize="md"
    >
      <div className="space-y-4">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="rounded-2xl border border-surface-200/80 dark:border-surface-800 bg-white dark:bg-surface-900 transition-all overflow-hidden shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-surface-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-surface-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-surface-600 dark:text-surface-300 leading-relaxed border-t border-surface-100 dark:border-surface-800/60 animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
