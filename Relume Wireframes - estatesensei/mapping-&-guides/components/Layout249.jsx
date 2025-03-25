"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout249() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Explore</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Discover Africa's Real Estate Opportunities
            </h2>
            <p className="md:text-md">
              Our Mapping & Guides section offers invaluable insights into the
              diverse real estate landscape across Africa. From market trends to
              property types, we equip you with the knowledge to make informed
              investment decisions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              In-Depth Market Insights for Investors
            </h3>
            <p>
              Stay ahead of the curve with our comprehensive analysis of market
              dynamics and trends.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Diverse Property Types to Explore
            </h3>
            <p>
              From residential to commercial, discover the variety of properties
              available in each region.
            </p>
          </div>
          <div className="flex w-full flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image"
                className="rounded-image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Investment Opportunities Tailored for You
            </h3>
            <p>
              Uncover unique investment prospects that align with your goals.
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
          <Button variant="secondary">Learn More</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
