'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const { contactSection, contact } = siteConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate submission or connect to webhook
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch {
      setErrorMessage('Une erreur est survenue lors de l’envoi. Veuillez nous contacter directement par téléphone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      badge={contactSection.badge}
      title={contactSection.title}
      subtitle={contactSection.subtitle}
      background="subtle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left: Contact Info & Reassurances (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-surface-900 dark:text-white">
              Parlons de votre projet
            </h3>
            <p className="text-sm sm:text-base text-surface-600 dark:text-surface-400 leading-relaxed">
              Nous répondons avec précision à toutes vos demandes. Nos devis sont gratuits et sans aucun engagement.
            </p>
          </div>

          {/* Contact Coordinate Cards */}
          <div className="space-y-3">
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-900 border border-surface-200/80 dark:border-surface-800 hover:border-brand-500 transition-colors shadow-sm group"
            >
              <div className="p-3 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-surface-500 font-medium">Téléphone direct</p>
                <p className="text-base font-bold text-surface-900 dark:text-white">{contact.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-900 border border-surface-200/80 dark:border-surface-800 hover:border-brand-500 transition-colors shadow-sm group"
            >
              <div className="p-3 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <p className="text-xs text-surface-500 font-medium">Email professionnel</p>
                <p className="text-base font-bold text-surface-900 dark:text-white truncate">{contact.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-900 border border-surface-200/80 dark:border-surface-800 shadow-sm">
              <div className="p-3 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-surface-500 font-medium">Atelier & Siège</p>
                <p className="text-sm font-bold text-surface-900 dark:text-white">
                  {contact.address.street}, {contact.address.postalCode} {contact.address.city}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-surface-900 border border-surface-200/80 dark:border-surface-800 shadow-sm">
              <div className="p-3 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs text-surface-600 dark:text-surface-400 space-y-0.5">
                <p className="font-bold text-surface-900 dark:text-white text-sm">Horaires d’ouverture</p>
                {contact.openingHours.map((h, idx) => (
                  <p key={idx}>{h.days} : {h.hours}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Form (7 cols) */}
        <div className="lg:col-span-7">
          <Card className="shadow-lg">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-surface-900 dark:text-white">
                {contactSection.formTitle}
              </h4>
              <p className="text-xs sm:text-sm text-surface-500">
                {contactSection.formDescription}
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h5 className="text-xl font-bold text-surface-900 dark:text-white">
                  Merci ! Votre message a bien été envoyé.
                </h5>
                <p className="text-sm text-surface-600 dark:text-surface-400 max-w-md mx-auto">
                  Notre équipe étudie votre demande et prendra contact avec vous dans un délai maximal de 48h ouvrées.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="sm"
                  className="mt-4"
                >
                  Envoyer une autre demande
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-surface-700 dark:text-surface-300 uppercase tracking-wider mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Jean Dupont"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-surface-700 dark:text-surface-300 uppercase tracking-wider mb-1.5">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-surface-700 dark:text-surface-300 uppercase tracking-wider mb-1.5">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="jean.dupont@email.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-surface-700 dark:text-surface-300 uppercase tracking-wider mb-1.5">
                      Type de projet
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    >
                      <option value="">Sélectionnez un domaine...</option>
                      {siteConfig.services.items.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                      <option value="autre">Autre demande spécifique</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-surface-700 dark:text-surface-300 uppercase tracking-wider mb-1.5">
                    Description de votre projet *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Décrivez votre besoin (dimensions approximatives, délais souhaités, localisation du chantier...)"
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                  />
                </div>

                <div className="text-xs text-surface-500">
                  En soumettant ce formulaire, vous acceptez que vos coordonnées soient utilisées pour vous recontacter dans le cadre de votre demande. Aucune donnée n’est cédée à des tiers.
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}</span>
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </Section>
  );
}
