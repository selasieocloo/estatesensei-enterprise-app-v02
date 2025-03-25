'use client';

import React from 'react';
import * as RelumeUI from '@relume_io/relume-ui';

export function RelumeTest() {
  // Check what components are available from Relume UI
  console.log('Available Relume UI components:', Object.keys(RelumeUI));
  
  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h1 className="mb-6 text-center text-2xl font-bold">EstateSensei with Relume UI</h1>
      
      {/* Simple box with shadow using Tailwind classes */}
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-semibold">Property Inquiry Form</h2>
        
        <p className="mb-4 text-gray-600">
          Fill out this form to inquire about our properties.
        </p>
        
        <div className="flex flex-col gap-4">
          {/* Basic form fields using standard HTML */}
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input 
              type="email" 
              className="w-full p-2 border border-gray-300 rounded" 
              placeholder="Enter your email"
            />
          </div>
          
          {/* Button using Relume UI if available, otherwise fallback */}
          {RelumeUI.Button ? (
            <RelumeUI.Button 
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit Inquiry
            </RelumeUI.Button>
          ) : (
            <button 
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit Inquiry
            </button>
          )}
        </div>
      </div>
      
      {/* Debug section to show available components */}
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Available Relume UI Components:</h3>
        <pre className="text-xs overflow-auto max-h-40">
          {JSON.stringify(Object.keys(RelumeUI), null, 2)}
        </pre>
      </div>
    </div>
  );
}
