"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "./badge";
import { Card, CardContent, CardFooter } from "./card";
import { cn } from "@/lib/utils";

export interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  currency?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  areaUnit?: string;
  imageUrl: string;
  status?: "For Sale" | "For Rent" | "Sold" | "Pending";
  isNew?: boolean;
  isFeatured?: boolean;
  href?: string;
  className?: string;
}

export function PropertyCard({
  id,
  title,
  location,
  price,
  currency = "$",
  bedrooms,
  bathrooms,
  area,
  areaUnit = "sqft",
  imageUrl,
  status = "For Sale",
  isNew = false,
  isFeatured = false,
  href = "#",
  className,
}: PropertyCardProps) {
  // Format price with commas
  const formattedPrice = new Intl.NumberFormat().format(price);
  
  // Determine status variant color
  const getStatusVariant = () => {
    switch (status) {
      case "For Sale":
        return "info";
      case "For Rent":
        return "secondary";
      case "Sold":
        return "destructive";
      case "Pending":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Link href={href}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </Link>
        
        {/* Status badge */}
        <div className="absolute left-3 top-3 z-10">
          <Badge variant={getStatusVariant()}>{status}</Badge>
        </div>
        
        {/* Tags */}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
          {isNew && <Badge variant="success">New</Badge>}
          {isFeatured && <Badge variant="warning">Featured</Badge>}
        </div>
      </div>
      
      <CardContent className="p-4">
        <Link href={href}>
          <h3 className="line-clamp-1 text-lg font-semibold hover:text-blue-600">{title}</h3>
        </Link>
        <p className="mt-1 text-sm text-gray-500">{location}</p>
        <p className="mt-2 text-xl font-bold text-blue-600">
          {currency}{formattedPrice}
          {status === "For Rent" && <span className="text-sm font-normal text-gray-500">/month</span>}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div className="flex space-x-4">
          {bedrooms !== undefined && (
            <div className="flex items-center text-sm">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-1 h-4 w-4 text-gray-400"
              >
                <path d="M2 9V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z" />
                <path d="M16 9V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1Z" />
                <path d="M2 20v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z" />
                <path d="M16 20v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1Z" />
              </svg>
              <span>{bedrooms} {bedrooms === 1 ? "Bed" : "Beds"}</span>
            </div>
          )}
          
          {bathrooms !== undefined && (
            <div className="flex items-center text-sm">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-1 h-4 w-4 text-gray-400"
              >
                <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                <line x1="10" x2="8" y1="5" y2="7" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <line x1="7" x2="7" y1="19" y2="21" />
                <line x1="17" x2="17" y1="19" y2="21" />
              </svg>
              <span>{bathrooms} {bathrooms === 1 ? "Bath" : "Baths"}</span>
            </div>
          )}
          
          {area !== undefined && (
            <div className="flex items-center text-sm">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-1 h-4 w-4 text-gray-400"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
              <span>{area} {areaUnit}</span>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
