"use client";

import { Button, Card } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Relocation</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h2>
          <p className="md:text-md">
            Choose the perfect tier for your relocation journey to Africa with
            our expert support.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Base Plan
                </h3>
                <p>Essential guidance for your initial relocation steps.</p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Core Plan
                </h3>
                <p>Comprehensive support tailored to your relocation needs.</p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md leading-[1.4] font-bold md:mb-4 md:text-xl">
                  Complete Plan
                </h3>
                <p>
                  All-inclusive assistance for a seamless transition to your new
                  home.
                </p>
              </div>
            </div>
          </div>
          <Card className="h-full px-6 py-8 md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="mb-2 text-xl font-bold md:text-2xl">
                  Basic Plan
                </h4>
                <p>Starting at $19/month</p>
              </div>
              <h5 className="justify-self-end text-6xl font-bold md:text-9xl lg:text-10xl">
                $19/mo
              </h5>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-border" />
            <p>Includes:</p>
            <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Initial consultation session</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Relocation checklist</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Local area insights</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Email support</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Resource library access</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Budget planning tools</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Personalised advice</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Follow-up support</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Community access</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Expert relocation tips</p>
              </div>
            </div>
            <div className="my-8 h-px w-full shrink-0 bg-border" />
            <div>
              <Button title="Get Started" className="w-full">
                Get Started
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
