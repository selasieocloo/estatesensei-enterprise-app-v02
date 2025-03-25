'use client';

import React from 'react';
import { Button } from '@relume_io/relume-ui';
import { RxChevronRight } from 'react-icons/rx';

const serviceItems = [
  {
    title: 'Your Gateway to Relocation, Real Estate, and Business Success',
    description: 'We offer tailored solutions for relocating to Africa, investing in real estate, and starting businesses.',
    image: 'https://images.unsplash.com/photo-1629078691977-dc51096260bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttonText: 'Learn More',
    link: '/services/overview'
  },
  {
    title: 'Seamless Relocation Services to Make Your Move Effortless',
    description: 'Our relocation experts provide comprehensive support to ensure a smooth transition.',
    image: 'https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttonText: 'Get Started',
    link: '/relocation-to-africa'
  },
  {
    title: 'Expert Real Estate Support to Maximise Your Investment Potential',
    description: 'Receive personalised advice on property investments across diverse African markets.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    buttonText: 'Discover',
    link: '/real-estate-support'
  }
];

export function ServiceOverview() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-2xl text-center md:mb-16 lg:mb-20">
          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Explore Our Comprehensive Services for Your African Journey
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {serviceItems.map((item, index) => (
            <div key={index} className="flex w-full flex-col items-center text-center">
              <div className="mb-6 h-60 w-full overflow-hidden rounded-lg md:mb-8">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button 
                  variant="link" 
                  onClick={() => window.location.href = item.link}
                  className="flex items-center"
                >
                  {item.buttonText}
                  <RxChevronRight className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
