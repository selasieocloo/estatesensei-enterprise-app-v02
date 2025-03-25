"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

interface NavbarProps {
  items?: NavItem[];
  logoText?: string;
  logoImg?: string;
}

export function Navbar({
  items = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Our Services",
      href: "/services",
      children: [
        {
          title: "Real Estate Support",
          href: "/services/real-estate-support",
          description: "Find and secure properties across Africa"
        },
        {
          title: "Relocation Guidance",
          href: "/services/relocation-guidance",
          description: "End-to-end support for your move to Africa"
        },
        {
          title: "Business Setup",
          href: "/services/business-setup",
          description: "Establish and grow your business in Africa"
        }
      ]
    },
    {
      title: "Area Guides",
      href: "/area-guides",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    }
  ],
  logoText = "EstateSensei",
  logoImg,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {logoImg && (
                <img
                  src={logoImg}
                  alt={logoText}
                  className="h-8 w-auto"
                />
              )}
              <span className="text-xl font-semibold">{logoText}</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {items.map((item) => 
              item.children ? (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">
                      <span>{item.title}</span>
                      <ChevronDown className="h-4 w-4 opacity-70" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.title} asChild>
                        <Link href={child.href} className="cursor-pointer">
                          <div>
                            <div className="font-medium">{child.title}</div>
                            {child.description && <p className="text-xs text-gray-500">{child.description}</p>}
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100",
                    pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* Auth buttons */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            <Link href="/login">
              <Button variant="outline" size="sm">Log in</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {items.map((item) => (
              <React.Fragment key={item.title}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium",
                    pathname === item.href
                      ? "bg-gray-100 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1 pt-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center space-x-2 px-4">
              <Link href="/login" className="w-full">
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link href="/register" className="w-full">
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
