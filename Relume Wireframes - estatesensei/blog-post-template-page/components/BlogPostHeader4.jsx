"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronLeft } from "react-icons/rx";

export function BlogPostHeader4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid gap-x-20 gap-y-12 md:grid-cols-[.5fr_1fr]">
          <div className="mx-auto flex size-full max-w-lg flex-col items-start justify-start">
            <div className="rb-12 flex flex-col items-start justify-start">
              <a
                className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none border-0 text-text-primary gap-2 bg-transparent p-0 mb-6 md:mb-8"
                href={undefined}
              >
                <RxChevronLeft />
                View All
              </a>
              <div className="rb-4 mb-5 flex w-full items-center justify-start md:mb-6">
                <Badge className="mr-4">Insights</Badge>
                <p className="inline text-sm font-semibold">
                  Approximately 5 minutes
                </p>
              </div>
              <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
                Exploring Real Estate Opportunities in Africa
              </h1>
              <div className="mt-6 flex size-full flex-col items-start md:mt-8">
                <div className="rb-4 flex items-center sm:mb-8 md:mb-0">
                  <div className="mr-8 md:mr-10 lg:mr-12">
                    <p className="text-sm">Date Published 11 January 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
