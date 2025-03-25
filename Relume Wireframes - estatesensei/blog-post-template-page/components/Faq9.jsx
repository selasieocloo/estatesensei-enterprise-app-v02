"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions related to our blog post topic.
          </p>
        </div>
        <div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pt-5 pb-10 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pt-6 md:pb-12 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">What is EstateSensei?</h2>
            <p>
              EstateSensei is a platform designed to assist individuals and
              businesses in navigating the African real estate market. We
              provide valuable insights, resources, and support tailored to your
              needs. Whether you're an investor, entrepreneur, or relocating, we
              are here to guide you.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pt-5 pb-10 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pt-6 md:pb-12 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">How does it work?</h2>
            <p>
              Our platform operates through a structured consulting process that
              includes service selection, payment, and document submission.
              Users can easily manage their profiles and track their
              consultation status through a user-friendly dashboard. We ensure a
              seamless experience from start to finish.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pt-5 pb-10 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pt-6 md:pb-12 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">Who can benefit?</h2>
            <p>
              EstateSensei is ideal for property investors, entrepreneurs, and
              individuals planning to relocate to Africa. Our services cater to
              a diverse audience, providing tailored solutions for each unique
              situation. No matter your background, we have resources to support
              your journey.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pt-5 pb-10 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pt-6 md:pb-12 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">What services are offered?</h2>
            <p>
              We offer a wide range of services, including real estate support,
              business launch guidance, and relocation assistance. Our
              three-tier service structure ensures that we meet the varying
              needs of our clients effectively. Each service is designed to
              provide comprehensive support throughout your journey.
            </p>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 items-start gap-x-10 gap-y-4 border-t border-border-primary pt-5 pb-10 sm:grid-cols-[0.75fr_1fr] md:gap-x-12 md:gap-y-16 md:pt-6 md:pb-12 lg:gap-x-16 lg:gap-y-20">
            <h2 className="font-bold md:text-md">How to get started?</h2>
            <p>
              Getting started is simple! Visit our website to explore the
              services we offer and select the one that suits your needs. Once
              you've chosen, follow the prompts to begin the consultation
              process.
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            We're here to help you with any inquiries.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
