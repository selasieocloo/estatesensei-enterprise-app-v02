'use client';

import React from 'react';
import { Button } from '@relume_io/relume-ui';

export function Header() {
  return (
    <section
      id="hero-section"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Achieve Your Dreams in African Real Estate
        </h1>
        <p className="text-lg text-gray-600">
          At EstateSensei, we're the number 1 source on reliable information on
          everything you need to succeed in Africa. Whether you are looking into
          real estate, relocation or business - we help you find and secure
          lucrative opportunities, enhance your knowledge, and to turn your
          long-held dreams into your everyday reality.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button>Learn More</Button>
          <Button variant="secondary">Sign Up</Button>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury home in Africa"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1495714096525-285e85481090?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="African architecture"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1590846083693-f23fdede3a7e?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern African home"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="African real estate"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
