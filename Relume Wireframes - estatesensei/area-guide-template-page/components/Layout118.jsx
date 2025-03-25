"use client";

import React from "react";

export function Layout118() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl">
              Discover Key Statistics That Define This Vibrant Area
            </h3>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              This area boasts a diverse population with a rich cultural
              heritage. Economic indicators show steady growth, making it an
              attractive destination for investors.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  60%
                </h3>
                <p>Population growth rate over the last decade.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  5%
                </h3>
                <p>Current unemployment rate in the region.</p>
              </div>
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
