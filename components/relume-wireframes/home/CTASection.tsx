'use client';

import React from 'react';
import { Button } from '@relume_io/relume-ui';

export function CTASection() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready to Start Your African Journey?</h2>
          <p className="mb-10 text-lg">
            Join EstateSensei today and get access to exclusive resources, expert consultations, 
            and a community of like-minded individuals pursuing opportunities in Africa.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Button>
            <Button variant="secondary" className="border-white text-white hover:bg-blue-700">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
