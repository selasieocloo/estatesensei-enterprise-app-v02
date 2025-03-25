'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@relume_io/relume-ui';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5">
        <div className="flex items-center">
          <Link href="/" className="mr-10 flex items-center">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
              EstateSensei
            </span>
          </Link>
          <nav className="hidden lg:flex">
            <ul className="flex space-x-8">
              <li>
                <Link href="/relocation-to-africa" className="hover:text-primary-600">
                  Relocation to Africa
                </Link>
              </li>
              <li>
                <Link href="/real-estate-support" className="hover:text-primary-600">
                  Real Estate Support
                </Link>
              </li>
              <li>
                <Link href="/starting-and-growing-businesses" className="hover:text-primary-600">
                  Business Growth
                </Link>
              </li>
              <li>
                <Link href="/mapping-and-guides" className="hover:text-primary-600">
                  Mapping & Guides
                </Link>
              </li>
              <li>
                <Link href="/blog-and-media-center" className="hover:text-primary-600">
                  Media Center
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden items-center lg:flex">
          <Link href="/login" className="mr-8">
            Log In
          </Link>
          <Button>Get Started</Button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-primary-600 focus:ring-primary-300 rounded-lg p-2 focus:outline-none focus:ring-2 lg:hidden"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 z-10 w-full bg-white px-5 py-3 shadow-md lg:hidden">
          <ul className="space-y-4">
            <li>
              <Link href="/relocation-to-africa" className="hover:text-primary-600 block">
                Relocation to Africa
              </Link>
            </li>
            <li>
              <Link href="/real-estate-support" className="hover:text-primary-600 block">
                Real Estate Support
              </Link>
            </li>
            <li>
              <Link href="/starting-and-growing-businesses" className="hover:text-primary-600 block">
                Business Growth
              </Link>
            </li>
            <li>
              <Link href="/mapping-and-guides" className="hover:text-primary-600 block">
                Mapping & Guides
              </Link>
            </li>
            <li>
              <Link href="/blog-and-media-center" className="hover:text-primary-600 block">
                Media Center
              </Link>
            </li>
            <li className="pt-4">
              <Link href="/login" className="block pb-4">
                Log In
              </Link>
              <Button className="w-full">Get Started</Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
