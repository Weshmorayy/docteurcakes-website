import React from 'react';
import { MessageCircle, Phone, Sparkles, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function ContactCTA() {
  const { contact } = siteConfig;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-surface-950 via-[#16130E] to-surface-950 text-white relative overflow-hidden">
      {/* Decorative Warm Gold Glow Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <Container size="md" className="relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-400/40 text-brand-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-400" />
          <span>Réservation Rapide & Sans Attente</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-heading">
          Envie d’une mise en beauté d’exception ?
        </h2>

        <p className="text-base sm:text-lg text-surface-300 max-w-xl mx-auto leading-relaxed">
          Rejoignez-nous à Ouest-Foire ou réservez votre créneau directement sur WhatsApp avec notre équipe. Nous sommes ouverts 7j/7 de 09h à 20h.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href={contact.whatsappUrl}
            isExternal
            variant="glow"
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-xl shadow-emerald-600/30"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span>Réserver via WhatsApp</span>
          </Button>

          <Button
            href={`tel:${contact.phone}`}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-brand-400/60 hover:bg-white/10 text-white"
          >
            <Phone className="w-5 h-5 mr-2 text-brand-400" />
            <span>{contact.phoneDisplay}</span>
          </Button>
        </div>

        {/* Location & Hours note */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-surface-300">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-400" />
            <span>Ouest-Foire, Dakar (proche VDN / CICES)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-400" />
            <span>7j/7 de 09h00 à 20h00</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
