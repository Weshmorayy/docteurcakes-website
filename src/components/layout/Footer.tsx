import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Clock, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerNavigation } from '@/config/navigation';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-950 text-surface-300 pt-16 pb-12 border-t border-surface-800">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-surface-800">
          {/* Brand & Description (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md">
                {siteConfig.name.charAt(0)}
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-surface-400 leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-surface-400">
              <Shield className="w-4 h-4 text-brand-400" />
              <span>SIRET: {siteConfig.legal.siret} • {siteConfig.legal.rcsCity}</span>
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
                    className="hover:text-white transition-colors"
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
              L’Entreprise
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
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
              Coordonnées
            </h3>
            <ul className="space-y-3 text-sm text-surface-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode}{' '}
                  {siteConfig.contact.address.city}
                </span>
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
                  className="hover:text-white transition-colors truncate"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-xs text-surface-400">
                <Clock className="w-4 h-4 text-surface-500 shrink-0 mt-0.5" />
                <div>
                  {siteConfig.contact.openingHours.map((h, i) => (
                    <div key={i}>
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
          <p>© {currentYear} {siteConfig.legal.companyName}. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            {footerNavigation.legal.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-surface-200 transition-colors"
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
