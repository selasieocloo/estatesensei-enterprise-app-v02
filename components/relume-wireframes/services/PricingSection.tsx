'use client';

import React from 'react';
import { Button, Card } from '@relume_io/relume-ui';
import { BiCheck } from 'react-icons/bi';

const supportPlans = [
  {
    icon: '🔍',
    title: 'Basic Support Plan',
    description: 'Ideal for individuals seeking initial guidance in their journey.'
  },
  {
    icon: '🏠',
    title: 'Core Support Plan',
    description: 'Comprehensive support for those ready to take the next step in their venture.'
  },
  {
    icon: '🌍',
    title: 'Complete Support Plan',
    description: 'All-inclusive service for those who want full assistance throughout their process.'
  }
];

const pricingFeatures = [
  'Initial consultation session',
  'Resource guide access',
  'Email support',
  'Market insights report',
  'Follow-up consultation',
  'Business planning tools',
  'Investment opportunity alerts',
  'Community access',
  'Webinar invitations',
  'Exclusive content access'
];

export function PricingSection() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold text-blue-600 md:mb-4">Plans</p>
          <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
            Pricing Options
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan tailored to your needs for our consultative
            support services.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            {supportPlans.map((plan, index) => (
              <div key={index} className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-2xl">
                    {plan.icon}
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold leading-tight md:mb-4">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Card className="h-full px-6 py-8 md:p-8 shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="mb-2 text-xl font-bold md:text-2xl">
                  Basic Plan
                </h4>
                <p className="text-gray-600">Access to essential resources</p>
              </div>
              <h5 className="justify-self-end text-4xl font-bold md:text-5xl text-blue-600">
                $19<span className="text-lg font-normal text-gray-600">/mo</span>
              </h5>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
            <p className="font-medium">Includes:</p>
            <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex self-start">
                  <div className="mr-4 flex-none self-start text-blue-600">
                    <BiCheck className="h-6 w-6" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-gray-200" />
            <div>
              <Button className="w-full">
                Get started
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
