'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, MessageCircle, Clock, Cake } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { mainNavigation } from '@/config/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-surface-200 shadow-xs">
      {/* Top Banner with Akwaba & Quick Contact */}
      <div className="bg-surface-900 text-surface-200 py-1.5 px-3 text-xs">
        <Container size="lg" className="flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto lg:mx-0">
            <span className="text-amber-400 font-bold">Akwaba !</span>
            <span className="text-surface-300">Pâtisserie Docteur Cakes · Atelier Cocody, Abidjan</span>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp : {siteConfig.contact.phoneDisplay}</span>
            </a>
            <span className="text-surface-700">|</span>
            <span className="text-surface-400">Paiements : Wave, MTN & Orange Money</span>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <div className="py-2.5 sm:py-3">
        <Container size="lg">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-white rounded-2xl p-1 border border-surface-200 shadow-xs group-hover:border-amber-400 transition-colors">
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
                <span className="font-black text-lg sm:text-xl text-surface-950 block leading-tight font-heading">
                  DOCTEUR CAKES
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 block uppercase tracking-wider">
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
                  className="px-3 py-1.5 text-xs sm:text-sm font-bold text-surface-700 hover:text-amber-800 hover:bg-amber-50/60 rounded-xl transition-colors"
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
                className="bg-amber-600 hover:bg-amber-700 text-white font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-xs"
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
