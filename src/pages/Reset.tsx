import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Reset() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/reset-password',
    });
    setLoading(false);
    if (error) {
      setError('Erro ao enviar e-mail de recuperação. Verifique o e-mail informado.');
    } else {
      setSuccess('E-mail de recuperação enviado! Verifique sua caixa de entrada.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-black/80 rounded-2xl p-8 border border-white/10 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Recuperar Senha</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-400 mb-1">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="block w-full rounded-lg border border-white/10 bg-black/50 pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none hover:border-white/20"
                placeholder="Seu e-mail"
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
            {loading ? 'Enviando...' : <><ArrowRight className="w-5 h-5" /> Enviar e-mail de recuperação</>}
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-blue-400 hover:underline">Voltar para o login</Link>
        </div>
      </div>
    </div>
  );
} 