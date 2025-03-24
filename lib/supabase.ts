import { createBrowserClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'

// These environment variables are set in the project
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Create a Supabase client for server-side operations
export const createServerClient = () =>
  createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  })

// Create a Supabase client for client-side operations
export const createBrowserSupabaseClient = () =>
  createBrowserClient(supabaseUrl, supabaseAnonKey)
