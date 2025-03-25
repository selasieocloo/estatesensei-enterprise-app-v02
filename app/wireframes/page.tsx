'use client';

import React from 'react';
import Link from 'next/link';

export default function WireframesIndexPage() {
  const wireframeOptions = [
    {
      title: 'Home Page',
      description: 'Preview of the home page wireframe with hero section, services overview, and CTA',
      link: '/wireframe-preview'
    },
    {
      title: 'Services Page',
      description: 'Preview of the services page with service details, pricing, and testimonials',
      link: '/services-preview'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">EstateSensei Wireframe Previews</h1>
      <p className="mb-12 text-lg text-gray-600">
        Click on any of the links below to preview the wireframe implementations for the different 
        sections of the EstateSensei application.
      </p>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wireframeOptions.map((option, index) => (
          <div key={index} className="rounded-lg border border-gray-200 p-6 shadow-md transition-all hover:shadow-lg">
            <h2 className="mb-3 text-2xl font-semibold">{option.title}</h2>
            <p className="mb-6 text-gray-600">{option.description}</p>
            <Link 
              href={option.link}
              className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
            >
              View Preview
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <h3 className="mb-4 text-xl font-semibold">Important Note</h3>
        <p className="text-gray-600">
          These wireframes are adapted from the Relume UI components in the 
          /Relume Wireframes - estatesensei directory and have been integrated 
          with the Next.js App Router architecture. They demonstrate how the design 
          can be implemented within your existing application structure.
        </p>
      </div>
    </div>
  );
}
