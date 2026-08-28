'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

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
        className="p-2.5 rounded-xl text-surface-800 hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors"
        aria-label={isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-surface-950/70 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header of Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-surface-200">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-surface-950 p-1 flex items-center justify-center">
                <Image
                  src={siteConfig.logo.transparent}
                  alt={siteConfig.name}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-surface-950 block">
                  Glow & Shine
                </span>
                <span className="text-[10px] font-semibold text-brand-700">Ouest-Foire, Dakar</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-surface-500 hover:bg-surface-100 transition-colors"
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
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-surface-700 hover:text-brand-700 hover:bg-brand-50 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </a>
            ))}
          </nav>
        </div>

        {/* Quick Contact Drawer Footer */}
        <div className="pt-6 border-t border-surface-200 space-y-3">
          <div className="flex items-center gap-2 text-xs text-surface-500">
            <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span>Ouest-Foire (près VDN / CICES), Dakar</span>
          </div>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-3 text-sm font-semibold text-surface-800 hover:text-brand-700"
          >
            <div className="p-2 rounded-lg bg-brand-50 text-brand-700">
              <Phone className="w-4 h-4" />
            </div>
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <Button
            href={siteConfig.contact.whatsappUrl}
            isExternal
            onClick={() => setIsOpen(false)}
            variant="primary"
            size="md"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Réserver sur WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
