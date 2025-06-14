"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout117() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Insights</p>
            <h3 className="text-5xl leading-[1.2] font-bold md:text-7xl lg:text-8xl">
              Key Statistics on African Real Estate Growth
            </h3>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              The African real estate market is witnessing unprecedented growth,
              with investment opportunities expanding across various sectors.
              Stay informed with the latest statistics to make educated
              decisions.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  75%
                </h3>
                <p>Increase in property investments over the last year.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  60%
                </h3>
                <p>Growth in demand for commercial properties in Africa.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Subscribe"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Subscribe
              </Button>
            </div>
          </div>
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
