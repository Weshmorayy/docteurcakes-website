'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle, ArrowRight, Cake, Radio } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';

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

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const drawerContent = (
    <div className="relative z-[99999]">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#12100E] text-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-brand-500/30 transform transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-surface-200">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 flex items-center justify-center bg-black rounded-xl p-1 border border-brand-500/40">
                <Image
                  src={siteConfig.logo.transparent}
                  alt={siteConfig.name}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-black text-sm text-white block font-heading">
                  DOCTEUR CAKES
                </span>
                <span className="text-[10px] font-bold text-brand-400 block">
                  Cocody, Abidjan
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-surface-400 hover:text-white hover:bg-white/10"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-5 flex flex-col space-y-1">
            {mainNavigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl text-xs sm:text-sm font-bold text-surface-300 hover:text-brand-300 hover:bg-white/5 transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-400" />
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-surface-200 space-y-2.5">
          <a
            href={siteConfig.contact.whatsappChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-surface-100 text-brand-300 border border-brand-500/30 font-bold text-xs"
          >
            <Radio className="w-4 h-4 text-brand-400" />
            <span>Chaîne WhatsApp Officielle</span>
          </a>

          <a
            href="#simulateur"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#simulateur');
            }}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 via-amber-400 to-brand-600 text-surface-950 font-black text-xs uppercase tracking-wider shadow-md"
          >
            <Cake className="w-4 h-4" />
            <span>Composer mon gâteau</span>
          </a>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-xl text-brand-300 hover:bg-white/10 border border-brand-500/30"
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-5 h-5" />
      </button>

      {mounted && isOpen && createPortal(drawerContent, document.body)}
    </>
  );
}
