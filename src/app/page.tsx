import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { ContactForm } from '@/components/sections/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <ContactCTA />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
    </>
  );
}
