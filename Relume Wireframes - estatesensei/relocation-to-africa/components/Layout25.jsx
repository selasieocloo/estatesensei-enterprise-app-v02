"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Adapt</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Cultural Orientation and Language Support Services
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Navigating a new culture can be challenging. Our training and
              resources ensure you feel at home in your new environment.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  50%
                </h3>
                <p>Embrace your new life with confidence and ease.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  50%
                </h3>
                <p>Learn the essentials of local languages.</p>
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
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
