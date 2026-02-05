import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useIsMounted } from '../hooks/useIsMounted';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isMounted = useIsMounted();

  useEffect(() => {
    async function checkUser() {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (!isMounted()) return;
        if (error) throw error;
        setUser(data.user);
      } catch (error: any) {
        if (!isMounted()) return;
        // Ignorar erros de abortamento
        if (error.name === 'AbortError' || error.message?.includes('aborted')) return;
        console.error('Auth error:', error);
      } finally {
        if (isMounted()) setLoading(false);
      }
    }

    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted()) {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [isMounted]);

  if (loading) return <div>Carregando...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
} 