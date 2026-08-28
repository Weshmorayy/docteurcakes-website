import React from 'react';
import Image from 'next/image';
import { Phone, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { mainNavigation } from '@/config/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/95 border-b border-surface-200/80 transition-all shadow-sm">
      {/* Top Banner with Salon Info */}
      <div className="bg-surface-950 text-brand-200 py-1.5 px-4 text-xs sm:text-sm font-medium border-b border-brand-900/30">
        <Container size="lg" className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✨</span>
            <span className="text-white font-medium">
              Glow & Shine Dakar (Ouest-Foire) • <span className="text-brand-300">Ouvert 7j/7</span> (09h - 20h)
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp RDV Direct</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-bold text-white hover:text-brand-300 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Container size="lg">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Crown Branding */}
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg group"
          >
            <div className="relative w-12 h-12 rounded-xl bg-surface-950 p-1 flex items-center justify-center shadow-md border border-brand-400/30 group-hover:border-brand-500 transition-colors">
              <Image
                src={siteConfig.logo.transparent}
                alt={siteConfig.name}
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-surface-950 block leading-tight font-heading">
                Glow <span className="text-brand-600 font-serif italic">&</span> Shine
              </span>
              <span className="text-[11px] font-semibold text-brand-700 uppercase tracking-wider block">
                Beauty & Fashion • Dakar
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-semibold text-surface-700 hover:text-brand-700 rounded-lg hover:bg-brand-50/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href={siteConfig.contact.whatsappUrl}
              isExternal
              variant="glow"
              size="sm"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              <span>Réserver (WhatsApp)</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
