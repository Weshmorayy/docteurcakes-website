import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { mainNavigation } from '@/config/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-white/90 dark:bg-surface-950/90 border-b border-surface-200/80 dark:border-surface-800/80 transition-all">
      {/* Top Banner (Optional for emergency / trust notice) */}
      <div className="bg-surface-900 text-surface-200 py-1.5 px-4 text-xs sm:text-sm font-medium">
        <Container size="lg" className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Devis sous 48h • Garantie décennale certifiée</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>{siteConfig.contact.openingHours[0]?.hours}</span>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-semibold text-white hover:text-brand-300 flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <Container size="lg">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md shadow-brand-500/30">
              {siteConfig.name.charAt(0)}
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-surface-900 dark:text-white block leading-tight">
                {siteConfig.name}
              </span>
              <span className="text-xs text-surface-500 font-medium block">
                {siteConfig.tagline.slice(0, 32)}...
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm font-semibold text-surface-700 hover:text-brand-600 rounded-lg hover:bg-surface-100/70 dark:text-surface-300 dark:hover:text-white dark:hover:bg-surface-800 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hidden xl:flex items-center gap-2 text-sm font-semibold text-surface-700 dark:text-surface-300 hover:text-brand-600 transition-colors mr-1"
            >
              <div className="p-2 rounded-lg bg-surface-100 dark:bg-surface-800 text-brand-600">
                <Phone className="w-4 h-4" />
              </div>
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <Button href="#contact" variant="primary" size="sm" className="hidden lg:inline-flex">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
