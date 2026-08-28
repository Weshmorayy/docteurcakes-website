import React from 'react';
import { Phone, Mail, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-brand-900 via-brand-800 to-indigo-950 text-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-brand-200 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5" />
              Devis & déplacement d’étude gratuits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Un projet en tête ? Obtenez votre étude chiffrée sous 48h
            </h2>
            <p className="text-base sm:text-lg text-brand-100 max-w-2xl mx-auto lg:mx-0">
              Contactez directement notre équipe pour échanger sur vos envies, vos contraintes et vos délais.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-brand-900 font-extrabold hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 text-brand-600" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>
            <Button href="#contact" variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
              <span>Remplir le formulaire</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
