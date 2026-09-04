import React from 'react';
import { CreditCard, Truck, MapPin, Radio } from 'lucide-react';
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
      background="white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Payments Card */}
        <Card className="p-6 rounded-2xl bg-surface-50 border border-brand-500/30 space-y-4 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-500 text-surface-950 flex items-center justify-center font-bold">
              <CreditCard className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base text-white font-heading">
              Acompte & Paiements Mobile Money
            </h3>
          </div>

          <p className="text-xs text-surface-400 leading-relaxed">
            {contact.payments.notice}
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-900 border border-brand-500/20 text-xs">
              <span className="font-bold text-brand-300">Wave :</span>
              <span className="font-mono font-bold text-white">{contact.payments.wave}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-900 border border-brand-500/20 text-xs">
              <span className="font-bold text-brand-300">MTN Money :</span>
              <span className="font-mono font-bold text-white">{contact.payments.mtn}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-900 border border-brand-500/20 text-xs">
              <span className="font-bold text-brand-300">Orange Money :</span>
              <span className="font-mono font-bold text-white">{contact.payments.orange}</span>
            </div>
          </div>
        </Card>

        {/* Delivery & Studio Info */}
        <Card className="p-6 rounded-2xl bg-surface-50 border border-brand-500/30 space-y-4 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-100 text-brand-400 flex items-center justify-center border border-brand-500/30">
              <Truck className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base text-white font-heading">
              Frais de Livraison & Retrait
            </h3>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-900 border border-brand-500/20 text-xs">
              <span className="font-semibold text-surface-300">Cocody :</span>
              <span className="font-bold text-brand-400">{contact.delivery.cocody}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-900 border border-brand-500/20 text-xs">
              <span className="font-semibold text-surface-300">Abidjan (hors Cocody) :</span>
              <span className="font-bold text-brand-400">{contact.delivery.horsCocody}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-900 border border-brand-500/20 text-xs">
              <span className="font-semibold text-surface-300">Hors Abidjan / Intérieur :</span>
              <span className="font-bold text-brand-400">{contact.delivery.horsAbidjan}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-surface-200 text-xs text-surface-400 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
            <span>Retrait possible à l’atelier : <strong className="text-white">{contact.address.street}, {contact.address.neighborhood} ({contact.address.city})</strong>.</span>
          </div>
        </Card>
      </div>
    </Section>
  );
}
