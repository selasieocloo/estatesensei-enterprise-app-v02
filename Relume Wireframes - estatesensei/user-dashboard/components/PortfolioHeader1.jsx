"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader1() {
  return (
    <section id="relume" className="px-[5%]">
      <div className="mx-auto max-w-lg py-16 text-center md:py-24 lg:py-28">
        <div>
          <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
            Consultation Progress
          </h1>
          <p className="md:text-md">
            Track your ongoing consultations and stay updated on your progress
            through each stage.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 md:mt-6">
            <Badge>
              <a href="#">In Progress</a>
            </Badge>
            <Badge>
              <a href="#">Pending Payment</a>
            </Badge>
            <Badge>
              <a href="#">Completed</a>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
