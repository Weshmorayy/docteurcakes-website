import React from 'react';
import Image from 'next/image';
import { Radio, MessageCircle, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { footerNavigation } from '@/config/navigation';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { contact, socials } = siteConfig;

  const facebook = socials.find((s) => s.platform === 'facebook');

  return (
    <footer className="bg-[#050403] text-stone-300 pt-14 pb-10 border-t border-[#D4AF37]/25">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-stone-800 text-xs sm:text-sm">
          {/* Col 1 */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-1 bg-black rounded-2xl border border-[#D4AF37]/50 flex items-center justify-center">
                <Image
                  src={siteConfig.logo.transparent}
                  alt={siteConfig.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-black text-lg text-white block font-heading tracking-tight">
                  DOCTEUR CAKES
                </span>
                <span className="text-[10px] text-[#F6D020] font-black block uppercase tracking-wider">
                  Cocody, Abidjan
                </span>
              </div>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Gâteaux d’anniversaire sur mesure, wedding cakes et douceurs personnalisées. Commandes ouvertes 7j/7.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-wider text-[#F6D020]">
              Nos Gâteaux & Tarifs
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
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
          <div className="space-y-3">
            <h4 className="font-black text-xs uppercase tracking-wider text-[#F6D020]">
              Contact Direct & Réseaux
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <p>Atelier : <span className="text-white font-semibold">{contact.address.street}, {contact.address.neighborhood} ({contact.address.city})</span></p>
              <p>
                WhatsApp :{' '}
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-extrabold"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={contact.whatsappChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F6D020] hover:text-[#FFF08F] font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Radio className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Rejoindre la Chaîne WhatsApp</span>
                </a>
              </p>
              {facebook && (
                <p>
                  <a href={facebook.url} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition-colors">
                    Page Facebook : <strong className="text-white">57K fans</strong>
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 font-medium">
          <p>© {currentYear} Pâtisserie Docteur Cakes · Abidjan. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            {footerNavigation.legal.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-stone-300 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <ArrowUp className="w-3 h-3" />
              <span>Haut</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
