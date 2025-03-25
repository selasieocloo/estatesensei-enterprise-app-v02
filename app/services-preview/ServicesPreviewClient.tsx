'use client';

import React from 'react';
import { Navbar } from '../../components/relume-wireframes/home/Navbar';
import { Footer } from '../../components/relume-wireframes/home/Footer';
import { ServicesHeader } from '../../components/relume-wireframes/services/Header';
import { ServiceOverview } from '../../components/relume-wireframes/services/ServiceOverview';
import { PricingSection } from '../../components/relume-wireframes/services/PricingSection';
import { TestimonialSection } from '../../components/relume-wireframes/services/TestimonialSection';

export default function ServicesPreviewClient() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServicesHeader />
        <ServiceOverview />
        <PricingSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
