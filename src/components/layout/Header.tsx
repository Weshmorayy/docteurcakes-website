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
    <header className="sticky top-0 z-40 w-full bg-[#0C0A09]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-xl">
      {/* Top Banner with Akwaba & Quick Contact */}
      <div className="bg-[#050403] text-stone-300 py-2 px-3 text-xs border-b border-white/5">
        <Container size="lg" className="flex items-center justify-between">
          <div className="flex items-center justify-center lg:justify-start gap-2 w-full lg:w-auto text-center">
            <span className="text-[#F6D020] font-black whitespace-nowrap">Akwaba !</span>
            <span className="text-stone-300 truncate">Pâtisserie Docteur Cakes · Atelier Cocody, Abidjan</span>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteConfig.contact.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F6D020] hover:text-[#FFF08F] font-bold flex items-center gap-1.5 transition-colors"
            >
              <Radio className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Chaîne WhatsApp</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-extrabold flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp : {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <div className="py-2.5 sm:py-3.5">
        <Container size="lg">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-black rounded-2xl p-1 border border-[#D4AF37]/50 shadow-md group-hover:border-[#D4AF37] transition-colors">
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
                <span className="text-[10px] sm:text-[11px] font-extrabold text-[#F6D020] block uppercase tracking-wider">
                  Pâtisserie & Cake Design · Abidjan
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {mainNavigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-xs sm:text-sm font-bold text-stone-200 hover:text-[#F6D020] hover:bg-white/5 rounded-xl transition-colors"
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
                className="bg-gradient-to-r from-[#F6D020] via-[#D4AF37] to-[#B89020] hover:from-[#FFE54C] hover:to-[#D4AF37] text-stone-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg shadow-[#D4AF37]/20 border border-[#FFF8C7]/50"
              >
                <Cake className="w-4 h-4 mr-1.5 text-stone-950" />
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
