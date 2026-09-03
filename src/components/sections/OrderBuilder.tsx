'use client';

import React, { useState } from 'react';
import { MessageCircle, Cake, Sparkles, Truck, AlertCircle } from 'lucide-react';
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
  'Caramel',
  'Chocolat',
  'Vanille',
  'Oreo',
  'Baileys',
  'Cerelac',
  'Crème toffee muscade',
  'Spéculoos',
  'Citron',
];

const DELIVERY_ZONES = [
  { id: 'cocody', name: 'Cocody (15 000 F)', fee: 15000 },
  { id: 'horsCocody', name: 'Abidjan hors Cocody (25 000 F)', fee: 25000 },
  { id: 'horsAbidjan', name: 'Hors Abidjan / Intérieur (40 000 F)', fee: 40000 },
  { id: 'retrait', name: 'Retrait à l’atelier (Gratuit)', fee: 0 },
];

export function OrderBuilder() {
  const { orderBuilder, contact } = siteConfig;

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
      background="white"
    >
      <div className="max-w-2xl mx-auto">
        <Card className="p-6 sm:p-8 bg-white border border-amber-300 shadow-xl rounded-3xl space-y-6">
          {/* Step 1: Cake Type */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-surface-800">
              1. Type de gâteau :
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {CAKE_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setSelectedType(t);
                    if (parts < t.minParts) setParts(t.minParts);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                    selectedType.id === t.id
                      ? 'bg-amber-50 border-amber-600 text-amber-950 font-bold ring-1 ring-amber-500'
                      : 'bg-white border-surface-200 text-surface-700 hover:bg-surface-50'
                  }`}
                >
                  <span className="text-xs block font-bold">{t.name}</span>
                  <span className="text-[11px] text-amber-700 block">
                    {t.pricePerPortion.toLocaleString('fr-FR')} F/part (min. {t.minParts}p)
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Portions Slider */}
          <div className="space-y-2 p-4 rounded-xl bg-surface-50 border border-surface-200">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-surface-800">
                2. Nombre de parts :
              </label>
              <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-900 font-extrabold text-sm">
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
              className="w-full h-2 bg-surface-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
            />
            <div className="flex justify-between text-[10px] text-surface-500">
              <span>Min. {selectedType.minParts} parts</span>
              <span>50 parts</span>
              <span>100 parts</span>
            </div>
          </div>

          {/* Step 3: Flavor selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-surface-800 mb-1.5">
                3. Parfum principal :
              </label>
              <select
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-surface-300 text-xs font-semibold bg-white focus:ring-2 focus:ring-amber-500"
              >
                {FLAVOR_OPTIONS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-surface-800 mb-1.5">
                4. Zone de livraison :
              </label>
              <select
                value={deliveryZone}
                onChange={(e) => setDeliveryZone(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-surface-300 text-xs font-semibold bg-white focus:ring-2 focus:ring-amber-500"
              >
                {DELIVERY_ZONES.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 5: Custom note/theme */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-surface-800 mb-1">
              5. Thème / Prénom / Âge (optionnel) :
            </label>
            <input
              type="text"
              value={customTheme}
              onChange={(e) => setCustomTheme(e.target.value)}
              placeholder="Ex: Thème Oursons & Cookies pour Naïla 4 ans"
              className="w-full px-3.5 py-2.5 rounded-xl border border-surface-300 text-xs bg-white focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Price Calculation Summary */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-800 block">
                Estimation totale (Gâteau + Livraison)
              </span>
              <span className="text-2xl font-black text-amber-900 font-heading">
                {totalPrice.toLocaleString('fr-FR')} FCFA
              </span>
            </div>
            <span className="text-[11px] text-amber-800 font-semibold text-right">
              Acompte requis<br />pour bloquer la date
            </span>
          </div>

          {/* Send on WhatsApp Button */}
          <Button
            onClick={handleSendWhatsApp}
            variant="primary"
            size="lg"
            className="w-full justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-md cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Envoyer ma commande sur WhatsApp</span>
          </Button>
        </Card>
      </div>
    </Section>
  );
}
