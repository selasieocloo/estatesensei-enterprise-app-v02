'use client';

import React from 'react';
import { Navbar } from '../../components/relume-wireframes/home/Navbar';
import { Header } from '../../components/relume-wireframes/home/Header';
import { ServicesSection } from '../../components/relume-wireframes/home/ServicesSection';
import { CTASection } from '../../components/relume-wireframes/home/CTASection';
import { Footer } from '../../components/relume-wireframes/home/Footer';

export default function WireframePreviewClient() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Header />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
