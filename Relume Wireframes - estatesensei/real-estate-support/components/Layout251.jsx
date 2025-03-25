"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout251() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Renting</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Navigate the Home Rental Process in Africa
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              Renting a home in Africa can be a rewarding experience, but it
              requires understanding local regulations and market dynamics. Our
              guidance covers everything from finding the right property to
              negotiating leases, ensuring you feel confident throughout the
              process. Whether you're a tenant or a property owner, we provide
              tailored support to meet your needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Understanding Rental Agreements and Legalities
            </h3>
            <p>We help you navigate the legal aspects of renting.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Finding the Right Property for You
            </h3>
            <p>Our experts assist in locating your ideal rental.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Tips for Successful Tenant and Owner Relations
            </h3>
            <p>We provide insights on fostering positive relationships.</p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Learn More</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
}
