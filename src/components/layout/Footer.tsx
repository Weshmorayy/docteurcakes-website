import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUp, Clock, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerNavigation } from '@/config/navigation';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-950 text-surface-300 pt-16 pb-12 border-t border-brand-900/40">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-surface-800">
          {/* Brand & Description (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-black p-1.5 flex items-center justify-center border border-brand-500/40">
                <Image
                  src={siteConfig.logo.transparent}
                  alt={siteConfig.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight font-heading block">
                  Glow <span className="text-brand-400 font-serif italic">&</span> Shine
                </span>
                <span className="text-xs text-brand-300 font-medium block uppercase tracking-wider">
                  Beauty and Fashion • Dakar
                </span>
              </div>
            </div>
            <p className="text-sm text-surface-400 leading-relaxed max-w-sm">
              {siteConfig.tagline}. Un seul endroit à Ouest-Foire pour prendre soin de vous de la tête aux pieds.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-brand-300 font-medium">
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>Ouvert 7 jours sur 7 (09h00 - 20h00)</span>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Prestations
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-brand-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Le Salon
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-brand-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Nous Trouver
            </h3>
            <ul className="space-y-3 text-sm text-surface-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.neighborhood}, {siteConfig.contact.address.city}, {siteConfig.contact.address.country}
                  <span className="block text-xs text-surface-500 mt-0.5">{siteConfig.contact.landmarkNotice}</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-semibold text-emerald-400"
                >
                  WhatsApp: {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors font-medium text-surface-300"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors truncate text-xs"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-xs text-surface-400">
                <Clock className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  {siteConfig.contact.openingHours.map((h, i) => (
                    <div key={i} className="text-brand-200">
                      {h.days} : {h.hours}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-400">
          <p>© {currentYear} {siteConfig.legal.companyName} • Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            {footerNavigation.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-brand-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Retour en haut de la page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Haut</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
