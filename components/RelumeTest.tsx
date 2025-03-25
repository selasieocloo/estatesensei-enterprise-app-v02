'use client';

import { 
  Button, 
  Card, 
  CheckboxComponent,
  Heading, 
  InputText,
  Stack,
  Text
} from '@relume_io/relume-ui';
import React from 'react';

export function RelumeTest() {
  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <Heading as="h1" className="mb-6 text-center">EstateSensei with Relume UI</Heading>
      
      <Card className="max-w-md mx-auto p-6 shadow-lg">
        <Heading as="h2" className="mb-4">Property Inquiry Form</Heading>
        
        <Text className="mb-4">
          Fill out this form to inquire about our properties.
        </Text>
        
        <Stack className="gap-4">
          <InputText
            label="Full Name"
            placeholder="Enter your full name"
          />
          
          <InputText
            label="Email Address"
            placeholder="Enter your email"
            type="email"
          />
          
          <InputText
            label="Phone Number"
            placeholder="Enter your phone number"
            type="tel"
          />
          
          <InputText
            label="Property Interest"
            placeholder="What type of property are you looking for?"
            as="textarea"
            rows={3}
          />
          
          <CheckboxComponent label="I agree to be contacted about this inquiry" />
          
          <Button 
            className="mt-2"
            variant="primary"
          >
            Submit Inquiry
          </Button>
        </Stack>
      </Card>
    </div>
  );
}
