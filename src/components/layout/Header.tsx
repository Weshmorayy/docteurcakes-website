'use client';

import React from 'react';
import Image from 'next/image';
import { Cake, MessageCircle, Radio } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { mainNavigation } from '@/config/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#0E0C0A]/95 backdrop-blur-md border-b border-brand-500/25 shadow-lg">
      {/* Top Banner with Akwaba & Quick Contact */}
      <div className="bg-black/90 text-surface-400 py-1.5 px-3 text-xs border-b border-white/5">
        <Container size="lg" className="flex items-center justify-between">
          <div className="flex items-center justify-center lg:justify-start gap-1.5 w-full lg:w-auto text-center">
            <span className="text-brand-400 font-bold whitespace-nowrap">Akwaba !</span>
            <span className="text-surface-300 truncate">Pâtisserie Docteur Cakes · Atelier Cocody, Abidjan</span>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteConfig.contact.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-300 hover:text-brand-200 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Radio className="w-3.5 h-3.5 text-brand-400" />
              <span>Rejoindre notre Chaîne WhatsApp</span>
            </a>
            <span className="text-surface-700">|</span>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp : {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <div className="py-2.5 sm:py-3">
        <Container size="lg">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-black rounded-2xl p-1 border border-brand-500/40 shadow-inner group-hover:border-brand-400 transition-colors">
                <Image
                  src={siteConfig.logo.transparent}
                  alt={siteConfig.name}
                  width={50}
                  height={50}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="font-black text-lg sm:text-xl text-white block leading-tight font-heading tracking-tight">
                  DOCTEUR CAKES
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-brand-400 block uppercase tracking-wider">
                  Pâtisserie & Cake Design · Abidjan
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNavigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-bold text-surface-300 hover:text-brand-300 hover:bg-white/5 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="#simulateur"
                variant="primary"
                size="sm"
                className="bg-gradient-to-r from-brand-500 via-amber-400 to-brand-600 hover:from-brand-400 hover:to-amber-300 text-surface-950 font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-md border border-brand-300/40"
              >
                <Cake className="w-3.5 h-3.5 mr-1.5" />
                <span>Commander un gâteau</span>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="block lg:hidden">
              <MobileNav />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
