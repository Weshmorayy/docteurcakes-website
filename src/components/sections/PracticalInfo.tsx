import React from 'react';
import { CreditCard, Truck, MapPin, Clock, Phone, MessageCircle, AlertTriangle } from 'lucide-react';
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
        <Card className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base text-surface-950 font-heading">
              Acompte & Paiements Mobile Money
            </h3>
          </div>

          <p className="text-xs text-surface-700 leading-relaxed">
            {contact.payments.notice}
          </p>

          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-200 text-xs">
              <span className="font-bold text-amber-900">Wave :</span>
              <span className="font-mono font-bold text-surface-900">{contact.payments.wave}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-200 text-xs">
              <span className="font-bold text-amber-900">MTN Money :</span>
              <span className="font-mono font-bold text-surface-900">{contact.payments.mtn}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-200 text-xs">
              <span className="font-bold text-amber-900">Orange Money :</span>
              <span className="font-mono font-bold text-surface-900">{contact.payments.orange}</span>
            </div>
          </div>
        </Card>

        {/* Delivery & Studio Info */}
        <Card className="p-6 rounded-2xl bg-surface-50 border border-surface-200 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-900 text-white flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </div>
            <h3 className="font-extrabold text-base text-surface-950 font-heading">
              Frais de Livraison & Retrait
            </h3>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-200 text-xs">
              <span className="font-semibold text-surface-800">Cocody :</span>
              <span className="font-bold text-amber-800">{contact.delivery.cocody}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-200 text-xs">
              <span className="font-semibold text-surface-800">Abidjan (hors Cocody) :</span>
              <span className="font-bold text-amber-800">{contact.delivery.horsCocody}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-surface-200 text-xs">
              <span className="font-semibold text-surface-800">Hors Abidjan / Intérieur :</span>
              <span className="font-bold text-amber-800">{contact.delivery.horsAbidjan}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-surface-200 text-xs text-surface-600 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>Retrait possible à l’atelier : <strong>{contact.address.street}, {contact.address.neighborhood} ({contact.address.city})</strong>.</span>
          </div>
        </Card>
      </div>
    </Section>
  );
}
