import { useEffect, useState } from 'react'
import { createBrowserSupabaseClient } from '@/lib/supabase'
import { Session } from '@supabase/supabase-js'

type AuthProps = {
  children: React.ReactNode
}

export function SupabaseAuth({ children }: AuthProps) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const supabase = createBrowserSupabaseClient()

    // Check for active session on component mount
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.error('Error checking session:', error)
        }
        setSession(session)
      } catch (err) {
        console.error('Error checking session:', err)
      } finally {
        setLoading(false)
      }
    }

    // Setup authentication state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
        setLoading(false)
      }
    )

    checkSession()

    // Cleanup subscription when component unmounts
    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </>
  )
}

export default SupabaseAuth
