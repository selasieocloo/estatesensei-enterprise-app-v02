"use client";

import React from "react";

export function Layout90() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
            Unlock the Potential of African Real Estate with Our Mapping &
            Guides
          </h3>
          <p className="md:text-md">
            Our Mapping & Guides section offers invaluable insights tailored for
            Property Investors, Business Entrepreneurs, and Relocation Clients.
            Access interactive maps and detailed area profiles to identify
            lucrative investment opportunities and navigate the complexities of
            moving to Africa. Empower your decisions with comprehensive market
            insights and expert guidance, ensuring a successful journey in the
            African real estate landscape.
          </p>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full rounded-image object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
