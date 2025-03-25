"use client";

import Image from "next/image";
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

export interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  rating?: number;
  className?: string;
}

export function Testimonial({
  quote,
  author,
  rating = 5,
  className,
}: TestimonialProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="flex h-full flex-col justify-between p-6">
        {/* Rating Stars */}
        {rating > 0 && (
          <div className="mb-4 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={cn(
                  "h-5 w-5",
                  i < rating ? "text-yellow-400" : "text-gray-300"
                )}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}
        
        {/* Quote */}
        <p className="mb-6 flex-grow text-gray-700">"{quote}"</p>
        
        {/* Author Info */}
        <div className="flex items-center">
          {author.avatar ? (
            <div className="relative mr-4 h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              {author.name.charAt(0)}
            </div>
          )}
          
          <div>
            <h4 className="font-medium text-gray-900">{author.name}</h4>
            {author.role && (
              <p className="text-sm text-gray-500">{author.role}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
