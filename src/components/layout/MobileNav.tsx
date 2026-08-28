'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const drawerContent = (
    <div className="relative z-[99999]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-out Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 ease-in-out border-l border-surface-200"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div>
          {/* Header of Drawer */}
          <div className="flex items-center justify-between pb-5 border-b border-surface-200">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-surface-950 p-1 flex items-center justify-center border border-brand-400/40">
                <Image
                  src={siteConfig.logo.transparent}
                  alt={siteConfig.name}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-lg text-surface-950 block leading-tight font-heading">
                  Glow & Shine
                </span>
                <span className="text-[10px] font-semibold text-brand-700 block">
                  Ouest-Foire, Dakar
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-surface-600 hover:text-surface-950 hover:bg-surface-100 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-5 flex flex-col space-y-1">
            {mainNavigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-surface-800 hover:text-brand-700 hover:bg-brand-50 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-brand-600 opacity-60" />
              </a>
            ))}
          </nav>
        </div>

        {/* Quick Contact Drawer Footer */}
        <div className="pt-5 border-t border-surface-200 space-y-3 bg-white">
          <div className="flex items-center gap-2 text-xs text-surface-600">
            <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span>Ouest-Foire (près VDN / CICES), Dakar</span>
          </div>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-surface-50 hover:bg-brand-50 text-sm font-bold text-surface-900 hover:text-brand-700 transition-colors border border-surface-200"
          >
            <Phone className="w-4 h-4 text-brand-600" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <Button
            href={siteConfig.contact.whatsappUrl}
            isExternal
            onClick={() => setIsOpen(false)}
            variant="primary"
            size="md"
            className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Réserver sur WhatsApp</span>
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-xl text-surface-900 hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-colors border border-surface-200"
        aria-label="Ouvrir le menu de navigation"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Render via Portal to body to avoid clipping / stacking context bugs */}
      {mounted && isOpen && createPortal(drawerContent, document.body)}
    </>
  );
}
