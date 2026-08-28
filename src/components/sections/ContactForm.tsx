'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const { contact, contactSection } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Pre-fill WhatsApp message and launch
    const text = `*Nouvelle Demande de Rendez-vous - Glow & Shine*%0A` +
      `👤 *Nom :* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Téléphone :* ${encodeURIComponent(formData.phone)}%0A` +
      `💇‍♀️ *Prestation :* ${encodeURIComponent(formData.service || 'Non spécifiée')}%0A` +
      `📅 *Date souhaitée :* ${encodeURIComponent(formData.date || 'Dès que possible')}%0A` +
      `💬 *Précisions :* ${encodeURIComponent(formData.message || 'Aucun message particulier')}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/221771644848?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <Section
      id="contact"
      badge={contactSection.badge}
      title={contactSection.title}
      subtitle={contactSection.subtitle}
      background="white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-surface-950 text-white space-y-6 border border-brand-500/30 shadow-lg">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>Glow & Shine Dakar</span>
            </h3>
            <p className="text-sm text-surface-300 leading-relaxed">
              Venez vivre une expérience beauté conviviale et chaleureuse. Notre équipe vous accueille 7 jours sur 7.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Localisation</p>
                  <p className="text-surface-300">
                    {contact.address.neighborhood}, {contact.address.city}, {contact.address.country}
                  </p>
                  <p className="text-xs text-brand-300 mt-0.5">{contact.landmarkNotice}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Horaires d’ouverture</p>
                  {contact.openingHours.map((h, idx) => (
                    <p key={idx} className="text-surface-300">
                      {h.days} : {h.hours}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">WhatsApp Direct</p>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Téléphone</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-surface-300 hover:text-white transition-colors"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-surface-300 hover:text-white transition-colors text-xs"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column (7 cols) */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8 bg-white border-surface-200 shadow-md">
            <div className="mb-6">
              <h4 className="text-xl font-bold text-surface-950 mb-1">
                {contactSection.formTitle}
              </h4>
              <p className="text-xs sm:text-sm text-surface-600">
                {contactSection.formDescription}
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h5 className="text-xl font-bold text-surface-950">
                  Votre demande a été transmise !
                </h5>
                <p className="text-sm text-surface-600 max-w-md mx-auto">
                  Si WhatsApp ne s’est pas ouvert automatiquement, vous pouvez nous écrire directement au {contact.phoneDisplay}.
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
                    <label htmlFor="name" className="block text-xs font-bold text-surface-700 uppercase tracking-wider mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Awa Diop"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 bg-white text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-surface-700 uppercase tracking-wider mb-1.5">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: +221 77 ... ou 06 ..."
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 bg-white text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-surface-700 uppercase tracking-wider mb-1.5">
                      Prestation souhaitée
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 bg-white text-surface-900 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    >
                      <option value="">Sélectionnez un soin...</option>
                      {siteConfig.services.items.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Forfait Mariée / Événement">Forfait Mariée / Événement</option>
                      <option value="Autre demande">Autre prestation spécifique</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-xs font-bold text-surface-700 uppercase tracking-wider mb-1.5">
                      Date ou créneau souhaité
                    </label>
                    <input
                      type="text"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      placeholder="Ex: Samedi après-midi"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-300 bg-white text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-surface-700 uppercase tracking-wider mb-1.5">
                    Détails ou questions (optionnel)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Longueur des mèches, couleur souhaitée, motif de nail art..."
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-300 bg-white text-surface-900 placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>{isSubmitting ? 'Préparation...' : 'Confirmer et ouvrir sur WhatsApp'}</span>
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </Section>
  );
}
