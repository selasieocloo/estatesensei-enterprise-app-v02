'use client';

import React from 'react';

// Creating a simplified version to debug the white screen issue
export default function WireframePreviewClient() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="bg-blue-600 p-6 text-white">
        <h1 className="text-3xl font-bold">EstateSensei</h1>
      </header>
      <main className="flex-grow p-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Home Wireframe Preview</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            This is a simplified version to help diagnose rendering issues.
            Once this works, we'll reintroduce the complete wireframe components.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example content */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg border p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold">Service {item}</h3>
              <p className="text-gray-600">This is a preview of service content for the wireframe.</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-100 p-6 text-center">
        <p>&copy; 2025 EstateSensei</p>
      </footer>
    </div>
  );
}
