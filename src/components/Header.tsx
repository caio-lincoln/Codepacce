import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { supabase } from '../supabaseClient';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://i.ibb.co/ZphzLz7K/Logo-1.png" 
                alt="Codepacce Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/200x50/000000/FFFFFF?text=Codepacce';
                }}
              />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <Link to="/" className="nav-link text-sm font-medium hover:text-blue-500 transition-colors">Home</Link>
              <Link to="/servicos" className="nav-link text-sm font-medium hover:text-blue-500 transition-colors">Serviços</Link>
              <Link to="/portfolio" className="nav-link text-sm font-medium hover:text-blue-500 transition-colors">Portfólio</Link>
              <Link to="/produtos" className="nav-link text-sm font-medium hover:text-blue-500 transition-colors">Produtos</Link>
              <Link to="/sobre" className="nav-link text-sm font-medium hover:text-blue-500 transition-colors">Sobre</Link>
              {user && (
                <Link to="/dashboard" className="nav-link text-sm font-medium hover:text-blue-500 transition-colors">Dashboard</Link>
              )}
            </nav>
            {user ? (
              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400 font-medium">{user.email.split('@')[0]}</span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center space-x-2 text-xl font-medium text-red-400 hover:text-red-300 transition-colors py-2"
                >
                  <LogOut className="w-6 h-6" />
                  <span>Sair</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="login-outline-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-5 h-5 mr-2" />
                <span>Login</span>
              </Link>
            )}
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div 
        className={`
          fixed inset-0 bg-black transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden
        `}
      >
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-xl font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/servicos" 
              className="text-xl font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/portfolio" 
              className="text-xl font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfólio
            </Link>
            <Link 
              to="/produtos" 
              className="text-xl font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              to="/sobre" 
              className="text-xl font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            {user ? (
              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-blue-400" />
                <span className="text-blue-400 font-medium">{user.email.split('@')[0]}</span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center space-x-2 text-xl font-medium text-red-400 hover:text-red-300 transition-colors py-2"
                >
                  <LogOut className="w-6 h-6" />
                  <span>Sair</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="login-outline-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-5 h-5 mr-2" />
                <span>Login</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}