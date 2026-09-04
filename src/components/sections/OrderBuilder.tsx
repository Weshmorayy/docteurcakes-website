'use client';

import React, { useState } from 'react';
import { MessageCircle, Cake } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface CakeType {
  id: string;
  name: string;
  pricePerPortion: number;
  minParts: number;
}

const CAKE_TYPES: CakeType[] = [
  { id: 'creme', name: 'Gâteau à la crème', pricePerPortion: 3500, minParts: 5 },
  { id: 'pate-sucre', name: 'Pâte à sucre thématique', pricePerPortion: 4000, minParts: 10 },
  { id: 'wedding-cake', name: 'Wedding Cake Prestige', pricePerPortion: 4000, minParts: 35 },
];

const FLAVOR_OPTIONS = [
  'Fruits rouges',
  'Caramel beurre salé',
  'Chocolat intense',
  'Vanille de Madagascar',
  'Oreo & Cream',
  'Baileys gourmand',
  'Cerelac régressif',
  'Crème toffee muscade',
  'Spéculoos croquant',
  'Citron meringué',
];

const DELIVERY_ZONES = [
  { id: 'cocody', name: 'Cocody (15 000 FCFA)', fee: 15000 },
  { id: 'horsCocody', name: 'Abidjan hors Cocody (25 000 FCFA)', fee: 25000 },
  { id: 'horsAbidjan', name: 'Hors Abidjan / Intérieur (40 000 FCFA)', fee: 40000 },
  { id: 'retrait', name: 'Retrait à l’atelier Cocody (Gratuit)', fee: 0 },
];

export function OrderBuilder() {
  const { orderBuilder } = siteConfig;

  const [selectedType, setSelectedType] = useState<CakeType>(CAKE_TYPES[0]);
  const [parts, setParts] = useState<number>(10);
  const [selectedFlavor, setSelectedFlavor] = useState<string>(FLAVOR_OPTIONS[0]);
  const [deliveryZone, setDeliveryZone] = useState<string>('cocody');
  const [customTheme, setCustomTheme] = useState<string>('');

  const effectiveParts = Math.max(parts, selectedType.minParts);
  const cakePrice = effectiveParts * selectedType.pricePerPortion;
  const currentDelivery = DELIVERY_ZONES.find((z) => z.id === deliveryZone) || DELIVERY_ZONES[0];
  const totalPrice = cakePrice + currentDelivery.fee;

  const handleSendWhatsApp = () => {
    const text =
      `*Nouvelle Commande de Gâteau - Docteur Cakes*%0A` +
      `🎂 *Type :* ${encodeURIComponent(selectedType.name)}%0A` +
      `🍰 *Nombre de parts :* ${effectiveParts} parts (${effectiveParts * selectedType.pricePerPortion} FCFA)%0A` +
      `🍓 *Parfum choisi :* ${encodeURIComponent(selectedFlavor)}%0A` +
      `🎨 *Thème / Inscription :* ${encodeURIComponent(customTheme || 'À définir')}%0A` +
      `🚚 *Livraison :* ${encodeURIComponent(currentDelivery.name)}%0A` +
      `💰 *Total estimé :* ${totalPrice.toLocaleString('fr-FR')} FCFA%0A%0A` +
      `💬 *Je souhaite confirmer ma commande et régler l’acompte.*`;

    window.open(`https://wa.me/2250749911390?text=${text}`, '_blank');
  };

  return (
    <Section
      id="simulateur"
      badge={orderBuilder.badge}
      title={orderBuilder.title}
      subtitle={orderBuilder.subtitle}
      background="dark"
    >
      <div className="max-w-2xl mx-auto">
        <Card className="p-7 sm:p-10 bg-[#15120E] border-2 border-[#D4AF37]/35 shadow-2xl rounded-[32px] space-y-7 text-white">
          {/* Step 1: Cake Type */}
          <div className="space-y-3">
            <label className="block text-xs font-black uppercase tracking-wider text-[#F6D020]">
              1. Choisissez le type de gâteau :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CAKE_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setSelectedType(t);
                    if (parts < t.minParts) setParts(t.minParts);
                  }}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                    selectedType.id === t.id
                      ? 'bg-gradient-to-r from-[#2A1E08] to-[#1C1710] border-[#D4AF37] text-white font-bold ring-2 ring-[#D4AF37]/40 shadow-lg'
                      : 'bg-[#0E0C0A] border-[#D4AF37]/20 text-stone-300 hover:bg-[#1C1710] hover:text-white'
                  }`}
                >
                  <span className="text-xs sm:text-sm block font-extrabold text-white">{t.name}</span>
                  <span className="text-xs text-[#F6D020] block mt-1 font-semibold">
                    {t.pricePerPortion.toLocaleString('fr-FR')} F/part
                  </span>
                  <span className="text-[10px] text-stone-400 block mt-0.5">
                    (min. {t.minParts} parts)
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Portions Slider */}
          <div className="space-y-3 p-5 rounded-2xl bg-[#0E0C0A] border border-[#D4AF37]/25">
            <div className="flex items-center justify-between">
              <label className="text-xs font-black uppercase tracking-wider text-[#F6D020]">
                2. Nombre de parts souhaité :
              </label>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#261B01] text-[#F6D020] font-black text-sm sm:text-base border border-[#D4AF37]/50">
                {effectiveParts} parts
              </span>
            </div>

            <input
              type="range"
              min={selectedType.minParts}
              max={100}
              step={selectedType.id === 'creme' ? 1 : 5}
              value={effectiveParts}
              onChange={(e) => setParts(Number(e.target.value))}
              className="w-full h-2.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
            />
            <div className="flex justify-between text-[11px] text-stone-400 font-semibold">
              <span>Min. {selectedType.minParts} parts</span>
              <span>50 parts</span>
              <span>100 parts</span>
            </div>
          </div>

          {/* Step 3: Flavor & Delivery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#F6D020] mb-2">
                3. Parfum principal :
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 text-xs sm:text-sm font-semibold bg-[#0E0C0A] text-white focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
              >
                {FLAVOR_OPTIONS.map((f) => (
                  <option key={f} value={f} className="bg-[#171410] text-white">
                    {f}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-[#F6D020] mb-2">
                4. Zone de livraison :
              </label>
              <select
                value={deliveryZone}
                onChange={(e) => setDeliveryZone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 text-xs sm:text-sm font-semibold bg-[#0E0C0A] text-white focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
              >
                {DELIVERY_ZONES.map((z) => (
                  <option key={z.id} value={z.id} className="bg-[#171410] text-white">
                    {z.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 5: Custom note/theme */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#F6D020] mb-2">
              5. Thème / Prénom / Âge (optionnel) :
            </label>
            <input
              type="text"
              value={customTheme}
              onChange={(e) => setCustomTheme(e.target.value)}
              placeholder="Ex: Thème Oursons & Cookies pour Naïla 4 ans"
              className="w-full px-4 py-3 rounded-xl border border-[#D4AF37]/30 text-xs sm:text-sm bg-[#0E0C0A] text-white placeholder-stone-500 focus:ring-2 focus:ring-[#D4AF37] focus:outline-none"
            />
          </div>

          {/* Price Calculation Summary */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#2B1F08] via-[#1F1707] to-[#141005] border border-[#D4AF37]/50 flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase font-bold text-[#F6D020] block">
                Estimation totale (Gâteau + Livraison)
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white font-heading">
                {totalPrice.toLocaleString('fr-FR')} FCFA
              </span>
            </div>
            <span className="text-xs text-[#FFF08F] font-semibold text-right leading-tight">
              Acompte requis<br />pour bloquer la date
            </span>
          </div>

          {/* Send on WhatsApp Button */}
          <Button
            onClick={handleSendWhatsApp}
            variant="primary"
            size="lg"
            className="w-full justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-4 rounded-2xl shadow-xl shadow-emerald-600/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Envoyer ma commande sur WhatsApp</span>
          </Button>
        </Card>
      </div>
    </Section>
  );
}
