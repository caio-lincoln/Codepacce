import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Lock, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMounted } from '../hooks/useIsMounted';
import { PageBackground } from '../components/PageLayoutComponents';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const isMounted = useIsMounted();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.updateUser({ password });
      
      if (!isMounted()) return;
      
      setLoading(false);
      if (error) {
        setError('Erro ao redefinir a senha. O link pode ter expirado ou já ter sido usado.');
      } else {
        setSuccess('Senha redefinida com sucesso! Você pode fazer login com a nova senha.');
        setTimeout(() => {
          if (isMounted()) navigate('/login');
        }, 2500);
      }
    } catch (err: unknown) {
      if (!isMounted()) return;
      if (err instanceof Error && (err.name === 'AbortError' || err.message?.includes('aborted'))) return;
      setLoading(false);
      setError('Ocorreu um erro inesperado.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <PageBackground />
      <div className="w-full max-w-md bg-black/80 rounded-2xl p-8 border border-white/10 shadow-lg relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Definir Nova Senha</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-gray-400 mb-1">Nova Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-white/10 bg-black/50 pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none hover:border-white/20"
                placeholder="Digite a nova senha"
              />
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-400 mb-1">Confirmar Nova Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="confirmPassword"
                type="password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="block w-full rounded-lg border border-white/10 bg-black/50 pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none hover:border-white/20"
                placeholder="Confirme a nova senha"
              />
            </div>
          </div>
          {error && <div className="text-white text-sm text-center bg-gray-800 p-2 rounded border border-white/10">{error}</div>}
          {success && <div className="text-blue-500 text-sm text-center bg-blue-500/10 p-2 rounded border border-blue-500/20">{success}</div>}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            disabled={loading}
          >
            {loading ? 'Redefinindo...' : <><ArrowRight className="w-5 h-5" /> Redefinir Senha</>}
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-blue-400 hover:underline">Voltar para o login</Link>
        </div>
      </div>
    </div>
  );
} 