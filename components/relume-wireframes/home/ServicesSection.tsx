'use client';

import React from 'react';
import { Button } from '@relume_io/relume-ui';

const services = [
  {
    title: 'Relocation to Africa',
    description: 'Comprehensive guides, support, and consultations for those looking to relocate to African countries.',
    icon: '🏠',
    link: '/relocation-to-africa'
  },
  {
    title: 'Real Estate Support',
    description: 'Find, evaluate and secure your ideal property with our expert guidance and network of trusted partners.',
    icon: '🏢',
    link: '/real-estate-support'
  },
  {
    title: 'Business Growth',
    description: 'Launch and scale your business in Africa with our strategic consulting and market intelligence.',
    icon: '📈',
    link: '/starting-and-growing-businesses'
  },
  {
    title: 'Mapping & Area Guides',
    description: 'Detailed maps and area guides to help you understand the best locations for your needs.',
    icon: '🗺️',
    link: '/mapping-and-guides'
  }
];

export function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold lg:text-5xl">Our Services</h2>
          <p className="mb-12 text-lg text-gray-600">
            We offer specialized services to help you navigate the African real estate market, 
            whether you're relocating, investing, or building a business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg"
            >
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-6 flex-grow text-gray-600">{service.description}</p>
              <Button 
                variant="secondary" 
                className="mt-auto self-start"
                onClick={() => window.location.href = service.link}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
