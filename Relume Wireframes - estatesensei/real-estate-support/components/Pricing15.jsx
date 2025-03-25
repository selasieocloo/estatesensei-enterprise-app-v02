"use client";

import {
  Button,
  Card,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing15() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h2>
          <p className="md:text-md">
            Choose the best plan for your real estate needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                  Basic Plan
                </h3>
                <h4 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  $19/mo
                </h4>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Market analysis report</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Investment opportunity insights</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Expert consultation session</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                  Business Plan
                </h3>
                <h4 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  $29/mo
                </h4>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Comprehensive market insights</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Tailored investment strategies</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Ongoing support services</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Access to resources</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Priority consultation access</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                  Premium Plan
                </h3>
                <h4 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  $180/yr
                </h4>
                <p className="mt-2 font-medium">
                  Save 20% with the annual plan
                </p>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>All basic plan features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Advanced market analytics</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Personalised investment guidance</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h3 className="text-md leading-[1.4] font-bold md:text-xl">
                  Premium Plan
                </h3>
                <h4 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                  $280/yr
                </h4>
                <p className="mt-2 font-medium">
                  Save 20% with the annual plan
                </p>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>All business plan features</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Dedicated account manager</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Exclusive market reports</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Full access to webinars</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Customised business strategies</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get started" className="w-full">
                  Get started
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
