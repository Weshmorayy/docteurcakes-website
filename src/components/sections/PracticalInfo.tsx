import React from 'react';
import { CreditCard, Truck, MapPin, Radio, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export function PracticalInfo() {
  const { conditions, contact } = siteConfig;

  return (
    <Section
      id="infos"
      badge={conditions.badge}
      title={conditions.title}
      subtitle={conditions.subtitle}
      background="subtle"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {/* Payments Card */}
        <Card className="p-7 rounded-3xl bg-[#15120E] border border-[#D4AF37]/35 space-y-5 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F6D020] to-[#D4AF37] text-stone-950 flex items-center justify-center font-bold shadow-md shrink-0">
              <CreditCard className="w-5 h-5 text-stone-950" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-white font-heading">
                Acompte & Paiements Mobile Money
              </h3>
              <span className="text-[11px] text-[#F6D020] font-semibold">Validation obligatoire en cuisine</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            {contact.payments.notice}
          </p>

          <div className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/25 text-xs sm:text-sm">
              <span className="font-extrabold text-[#F6D020]">Wave :</span>
              <span className="font-mono font-bold text-white tracking-wider">{contact.payments.wave}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/25 text-xs sm:text-sm">
              <span className="font-extrabold text-[#F6D020]">MTN Money :</span>
              <span className="font-mono font-bold text-white tracking-wider">{contact.payments.mtn}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/25 text-xs sm:text-sm">
              <span className="font-extrabold text-[#F6D020]">Orange Money :</span>
              <span className="font-mono font-bold text-white tracking-wider">{contact.payments.orange}</span>
            </div>
          </div>
        </Card>

        {/* Delivery & Studio Info */}
        <Card className="p-7 rounded-3xl bg-[#15120E] border border-[#D4AF37]/35 space-y-5 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#241C0C] text-[#F6D020] flex items-center justify-center border border-[#D4AF37]/40 shadow-md shrink-0">
              <Truck className="w-5 h-5 text-[#F6D020]" />
            </div>
            <div>
              <h3 className="font-black text-base sm:text-lg text-white font-heading">
                Frais de Livraison & Retrait
              </h3>
              <span className="text-[11px] text-[#F6D020] font-semibold">Abidjan & Toutes villes de Côte d'Ivoire</span>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/25 text-xs sm:text-sm">
              <span className="font-medium text-stone-200">Cocody :</span>
              <span className="font-bold text-[#F6D020]">{contact.delivery.cocody}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/25 text-xs sm:text-sm">
              <span className="font-medium text-stone-200">Abidjan (hors Cocody) :</span>
              <span className="font-bold text-[#F6D020]">{contact.delivery.horsCocody}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#0E0C0A] border border-[#D4AF37]/25 text-xs sm:text-sm">
              <span className="font-medium text-stone-200">Hors Abidjan / Intérieur :</span>
              <span className="font-bold text-[#F6D020]">{contact.delivery.horsAbidjan}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#D4AF37]/20 text-xs text-stone-300 flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#F6D020] shrink-0 mt-0.5" />
            <span>Retrait sans frais à l’atelier : <strong className="text-white">{contact.address.street}, {contact.address.neighborhood} ({contact.address.city})</strong>.</span>
          </div>
        </Card>
      </div>
    </Section>
  );
}
