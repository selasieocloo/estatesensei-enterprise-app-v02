"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface PriceRange {
  min: number | "";
  max: number | "";
}

interface FilterOption {
  value: string;
  label: string;
}

export interface PropertyFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  onFilter?: (filters: PropertyFilters) => void;
  propertyTypes?: FilterOption[];
  locations?: FilterOption[];
  initialFilters?: Partial<PropertyFilters>;
  className?: string;
}

export interface PropertyFilters {
  keyword: string;
  propertyType: string;
  location: string;
  bedrooms: string;
  bathrooms: string;
  priceRange: PriceRange;
  status: string;
}

export function PropertyFilter({
  onFilter,
  propertyTypes = [
    { value: "", label: "Any Type" },
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "condo", label: "Condo" },
    { value: "land", label: "Land" },
    { value: "commercial", label: "Commercial" },
  ],
  locations = [
    { value: "", label: "Any Location" },
    { value: "accra", label: "Accra" },
    { value: "kumasi", label: "Kumasi" },
    { value: "takoradi", label: "Takoradi" },
    { value: "tamale", label: "Tamale" },
    { value: "cape-coast", label: "Cape Coast" },
  ],
  initialFilters,
  className,
  ...props
}: PropertyFilterProps) {
  const defaultFilters: PropertyFilters = {
    keyword: "",
    propertyType: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    priceRange: { min: "", max: "" },
    status: "",
  };

  const [filters, setFilters] = useState<PropertyFilters>({
    ...defaultFilters,
    ...initialFilters,
  });

  const [isAdvancedVisible, setIsAdvancedVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handlePriceChange = (key: "min" | "max", value: string) => {
    const numValue = value === "" ? "" : Number(value);
    setFilters((prev) => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [key]: numValue,
      },
    }));
  };

  const handleReset = () => {
    setFilters(defaultFilters);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onFilter) {
      onFilter(filters);
    }
  };

  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            {/* Basic Search */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div className="md:col-span-2">
                <Input
                  name="keyword"
                  placeholder="Search by keywords..."
                  value={filters.keyword}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <select
                  name="propertyType"
                  value={filters.propertyType}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <select
                  name="location"
                  value={filters.location}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {locations.map((location) => (
                    <option key={location.value} value={location.value}>
                      {location.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
                onClick={() => setIsAdvancedVisible(!isAdvancedVisible)}
              >
                {isAdvancedVisible ? "Hide" : "Show"} Advanced Filters
              </button>
            </div>

            {isAdvancedVisible && (
              <div className="mt-4 grid grid-cols-1 gap-4 rounded-md border border-gray-200 bg-gray-50 p-4 md:grid-cols-3">
                <div>
                  <label htmlFor="status" className="mb-1 block text-sm font-medium">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={filters.status}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Any Status</option>
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                    <option value="Sold">Sold</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bedrooms" className="mb-1 block text-sm font-medium">
                    Bedrooms
                  </label>
                  <select
                    id="bedrooms"
                    name="bedrooms"
                    value={filters.bedrooms}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="bathrooms" className="mb-1 block text-sm font-medium">
                    Bathrooms
                  </label>
                  <select
                    id="bathrooms"
                    name="bathrooms"
                    value={filters.bathrooms}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
                
                <div className="md:col-span-3">
                  <label htmlFor="price-range" className="mb-1 block text-sm font-medium">
                    Price Range
                  </label>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <Input
                        id="price-min"
                        name="price-min"
                        type="number"
                        placeholder="Min Price"
                        value={filters.priceRange.min}
                        onChange={(e) => handlePriceChange("min", e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        id="price-max"
                        name="price-max"
                        type="number"
                        placeholder="Max Price"
                        value={filters.priceRange.max}
                        onChange={(e) => handlePriceChange("max", e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-4 flex items-center justify-between space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
              >
                Reset Filters
              </Button>
              <Button type="submit">Search Properties</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
