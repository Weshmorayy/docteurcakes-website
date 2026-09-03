import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerNavigation } from '@/config/navigation';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, socials } = siteConfig;

  const facebook = socials.find((s) => s.platform === 'facebook');

  return (
    <footer className="bg-surface-900 text-surface-300 pt-12 pb-8 border-t border-surface-800">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-surface-800 text-xs sm:text-sm">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 p-1 bg-white rounded-xl">
                <Image
                  src={siteConfig.logo.transparent}
                  alt={siteConfig.name}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-black text-base text-white block font-heading">
                  DOCTEUR CAKES
                </span>
                <span className="text-[10px] text-amber-400 font-bold block uppercase tracking-wider">
                  Cocody, Abidjan
                </span>
              </div>
            </div>
            <p className="text-surface-400 text-xs leading-relaxed">
              Gâteaux d’anniversaire, wedding cakes et douceurs personnalisées. Commandes ouvertes 7j/7.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-amber-400">
              Nos Gâteaux & Tarifs
            </h4>
            <ul className="space-y-1.5 text-xs text-surface-400">
              {footerNavigation.products.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-amber-400">
              Contact & WhatsApp
            </h4>
            <div className="space-y-1.5 text-xs text-surface-400">
              <p>Atelier : {contact.address.street}, {contact.address.neighborhood} ({contact.address.city})</p>
              <p>
                WhatsApp :{' '}
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-bold"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
              <p>Ligne 2 : {contact.phoneDisplaySecondary}</p>
              {facebook && (
                <p>
                  <a href={facebook.url} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:underline">
                    Suivez-nous sur Facebook (57K fans)
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-surface-500">
          <p>© {currentYear} Pâtisserie Docteur Cakes · Abidjan. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            {footerNavigation.legal.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-surface-300">
                {item.label}
              </a>
            ))}
            <a href="#" className="inline-flex items-center gap-1 hover:text-white">
              <ArrowUp className="w-3 h-3" />
              <span>Haut</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
