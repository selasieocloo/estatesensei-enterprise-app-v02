'use client';

import React from 'react';

// Simplified version to debug the white screen issue
export default function ServicesPreviewClient() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="bg-blue-600 p-6 text-white">
        <h1 className="text-3xl font-bold">EstateSensei</h1>
      </header>
      <main className="flex-grow p-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Services Wireframe Preview</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            This is a simplified version to help diagnose rendering issues.
            Once this works, we'll reintroduce the complete wireframe components.
          </p>
        </div>
        
        <div className="p-8 bg-gray-50 mb-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Services</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {['Real Estate Support', 'Business Setup', 'Relocation Guidance'].map((service) => (
              <div key={service} className="bg-white rounded-lg border p-6 shadow-md">
                <h4 className="mb-3 text-xl font-semibold">{service}</h4>
                <p className="text-gray-600">This is a preview of the service offering content.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Pricing Options</h3>
          <div className="bg-white rounded-lg border p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold">Basic Plan</h4>
              <span className="text-2xl font-bold text-blue-600">$19/mo</span>
            </div>
            <p className="mb-4">Access to essential resources</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 p-6 text-center">
        <p>&copy; 2025 EstateSensei</p>
      </footer>
    </div>
  );
}
