import { useEffect, useState, useRef } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    async function checkUser() {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (!isMounted.current) return;
        if (error) throw error;
        setUser(data.user);
      } catch (error: any) {
        if (!isMounted.current) return;
        // Ignorar erros de abortamento
        if (error.name === 'AbortError' || error.message?.includes('aborted')) return;
        console.error('Auth error:', error);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }

    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted.current) {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      isMounted.current = false;
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
} 