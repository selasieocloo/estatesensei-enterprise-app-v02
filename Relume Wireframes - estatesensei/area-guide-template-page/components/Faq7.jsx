"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to common questions about the area, investment, and
            relocation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are the best neighbourhoods?
            </h2>
            <p>
              The best neighbourhoods vary by city, but generally, areas with
              good amenities, schools, and transport links are ideal. Research
              local crime rates and community reviews to ensure a safe
              environment. Popular choices often include up-and-coming districts
              that offer a blend of culture and convenience.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What investment tips exist?
            </h2>
            <p>
              Investing in real estate requires thorough market research and
              understanding of local trends. Look for areas with growth
              potential and consider long-term rental yields. Engaging with
              local experts can provide invaluable insights.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How to relocate smoothly?
            </h2>
            <p>
              Start by planning your move well in advance, considering logistics
              and legal requirements. Research your new area to understand local
              customs and services. Connecting with relocation experts can
              simplify the process significantly.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Are there local resources?
            </h2>
            <p>
              Yes, many local resources are available, including community
              centres, online forums, and local government websites. These can
              provide valuable information on services, events, and support
              networks. Engaging with local expat groups can also enhance your
              experience.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What about safety concerns?
            </h2>
            <p>
              Safety varies by area, so it's crucial to research crime
              statistics and community feedback. Staying informed about local
              laws and customs can help you navigate potential challenges.
              Always trust your instincts and seek advice from locals.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
