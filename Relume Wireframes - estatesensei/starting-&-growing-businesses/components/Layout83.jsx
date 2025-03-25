"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout83() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Insights</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Empowering Entrepreneurs for Sustainable Growth
            </h2>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              Our business consulting services have helped over 1,000
              entrepreneurs successfully launch their ventures in Africa. With a
              focus on tailored strategies and local market insights, we drive
              impactful results.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  75%
                </h3>
                <p>of our clients report increased revenue within 12 months.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  90%
                </h3>
                <p>
                  of businesses we support achieve their goals successfully.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
