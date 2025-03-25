'use client';

import React from 'react';
import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-6 text-3xl font-bold">Test Page Working</h1>
      <p className="mb-4">If you can see this content, the basic page rendering is working correctly.</p>
      <div className="mt-8">
        <Link href="/" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Return Home
        </Link>
      </div>
    </div>
  );
}
