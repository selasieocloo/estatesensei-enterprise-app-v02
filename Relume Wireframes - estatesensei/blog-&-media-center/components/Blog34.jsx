"use client";

import { Badge, Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog34() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">News</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Latest Insights and Updates
            </h2>
            <p className="md:text-md">Stay informed with our newsletters</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Updates</Badge>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Exploring Real Estate Trends
              </h2>
            </a>
            <p>Discover the latest trends in African real estate.</p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Insights</Badge>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Business Opportunities in Africa
              </h2>
            </a>
            <p>Uncover new business opportunities across the continent.</p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
          <div className="flex size-full flex-col items-start justify-start text-start">
            <a href="#" className="mb-6 w-full">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                alt="Relume placeholder image 1"
                className="aspect-[3/2] size-full rounded-image object-cover"
              />
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Business</Badge>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a className="mb-2 flex justify-start text-start" href="#">
              <h2 className="text-xl font-bold md:text-2xl">
                Relocation Tips for Families
              </h2>
            </a>
            <p>Essential tips for families relocating to Africa.</p>
            <Button
              title="Read more"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-6 flex items-center justify-center gap-x-2"
            >
              Read more
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
