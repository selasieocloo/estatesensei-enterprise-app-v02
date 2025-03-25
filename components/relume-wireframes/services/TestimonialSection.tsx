'use client';

import React, { useEffect, useState } from 'react';
import { BiSolidStar } from 'react-icons/bi';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@relume_io/relume-ui';

const testimonials = [
  {
    quote: "Thanks to EstateSensei, my transition to Ghana was incredibly smooth. Their guidance on property acquisition saved me from several potential pitfalls and helped me find the perfect home.",
    author: "James Wilson",
    position: "Real Estate Investor, USA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "The business support services provided by EstateSensei were instrumental in establishing my tech startup in Nairobi. Their market insights and local connections were invaluable.",
    author: "Sarah Johnson",
    position: "Tech Entrepreneur, UK",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    quote: "I was hesitant about investing in African real estate until I found EstateSensei. Their comprehensive area guides and property insights gave me the confidence to make informed decisions.",
    author: "Michael Chen",
    position: "Property Developer, Singapore",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export function TestimonialSection() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-16 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <div>
            <p className="mb-3 font-semibold text-blue-600 md:mb-4">Testimonials</p>
            <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-gray-600">
              Hear from our satisfied clients who have successfully navigated their African ventures with our support
            </p>
          </div>
        </div>

        <div className="relative">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full rounded-xl bg-white p-6 shadow-md md:p-8">
                    <div className="mb-4 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <BiSolidStar key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-6 text-lg">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="mr-4 h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="static translate-y-0" />
              <div className="text-sm text-gray-600">
                {current} / {count}
              </div>
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
