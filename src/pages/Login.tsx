import React, { useState } from 'react';
import { LogIn, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const email = `${username}@gmail.com`;
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setError('Usuário ou senha inválidos.');
    } else {
      window.location.href = '/dashboard'; // Redireciona para a página de projetos
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-blue-900/90" />
        </div>
        
        <div className="relative z-10 flex flex-col justify-center px-12">
          <h2 className="text-4xl font-bold mb-6 text-blue-500">
            Bem-vindo de volta
          </h2>
          <p className="text-gray-300 text-lg max-w-md">
            Acesse sua conta para gerenciar seus projetos e acompanhar o progresso 
            das suas soluções tecnológicas.
          </p>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/3 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-300" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-600/10 rounded-full blur-xl animate-pulse delay-700" />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-black">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <LogIn className="mx-auto h-12 w-12 text-blue-500 hover-lift" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight">
              Acessar Plataforma
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Entre com suas credenciais para continuar
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="sr-only">
                  Usuário
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-lg border border-white/10 bg-black/50 pl-12 pr-4 py-3 
                             text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none
                             hover:border-white/20"
                    placeholder="Seu usuário"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Senha
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg border border-white/10 bg-black/50 pl-12 pr-12 py-3 
                             text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none
                             hover:border-white/20"
                    placeholder="Sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400
                             hover:text-gray-300 transition-colors duration-300"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/10 bg-black/50 text-blue-500 
                           focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Lembrar-me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/reset" className="font-medium text-blue-500 hover:text-blue-400 transition-colors">
                  Esqueceu a senha?
                </Link>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-blue-500 px-4 py-3 
                       text-sm font-semibold text-white transition-all duration-300
                       hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20
                       hover:shadow-lg hover:shadow-blue-500/20"
              disabled={loading}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
              </span>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}