'use client';

import React from 'react';

export function ServicesHeader() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-6xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
            Our Expert Services
          </h1>
          <p className="text-white text-lg">
            Unlock unparalleled opportunities in African real estate, business,
            and relocation with our tailored services.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full object-cover"
          alt="African cityscape"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
