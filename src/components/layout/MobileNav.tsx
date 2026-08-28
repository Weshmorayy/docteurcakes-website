'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl text-surface-700 hover:text-surface-900 hover:bg-surface-100 dark:text-surface-300 dark:hover:text-white dark:hover:bg-surface-800 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
        aria-label={isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-surface-950/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white dark:bg-surface-900 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header of Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-surface-200 dark:border-surface-800">
            <span className="font-extrabold text-xl text-surface-900 dark:text-white">
              {siteConfig.shortName}
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {mainNavigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-surface-700 hover:text-brand-600 hover:bg-brand-50/50 dark:text-surface-300 dark:hover:text-white dark:hover:bg-surface-800 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </nav>
        </div>

        {/* Quick Contact Drawer Footer */}
        <div className="pt-6 border-t border-surface-200 dark:border-surface-800 space-y-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-3 text-sm font-medium text-surface-600 dark:text-surface-400 hover:text-brand-600"
          >
            <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600">
              <Phone className="w-4 h-4" />
            </div>
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-3 text-sm font-medium text-surface-600 dark:text-surface-400 hover:text-brand-600"
          >
            <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600">
              <Mail className="w-4 h-4" />
            </div>
            <span className="truncate">{siteConfig.contact.email}</span>
          </a>

          <Button
            href="#contact"
            onClick={() => setIsOpen(false)}
            variant="primary"
            size="md"
            className="w-full"
          >
            Demander un devis
          </Button>
        </div>
      </div>
    </div>
  );
}
