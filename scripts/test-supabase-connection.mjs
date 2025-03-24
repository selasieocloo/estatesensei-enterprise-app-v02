// Simple script to test Supabase connection
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if the environment variables are available
if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Supabase URL or Anon Key is missing in .env.local');
  process.exit(1);
}

console.log('Supabase URL:', supabaseUrl);
console.log('Attempting to connect to Supabase...');

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Test connection by checking for current user session
async function testConnection() {
  try {
    const { data, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Connection error:', error.message);
    } else {
      console.log('Connection successful!');
      console.log('Session data:', data);
      
      // Try to query the database public schema (should work even without tables)
      const { error: schemaError } = await supabase
        .from('_pgsodium_key_key_id_seq')
        .select('*')
        .limit(1);
        
      if (schemaError) {
        if (schemaError.code === 'PGRST116') {
          // This error means the table doesn't exist, which is fine - we just want to test the connection
          console.log('Database connection verified. Ready to create tables and work with data.');
        } else {
          console.log('Database query error (but connection seems ok):', schemaError.message);
        }
      } else {
        console.log('Database query successful. Supabase is fully operational.');
      }
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

// Run the test
testConnection();
