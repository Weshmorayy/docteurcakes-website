import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Offers } from '@/components/sections/Offers';
import { Flavors } from '@/components/sections/Flavors';
import { OrderBuilder } from '@/components/sections/OrderBuilder';
import { Gallery } from '@/components/sections/Gallery';
import { PracticalInfo } from '@/components/sections/PracticalInfo';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Offers />
      <Flavors />
      <OrderBuilder />
      <Gallery />
      <PracticalInfo />
    </>
  );
}
