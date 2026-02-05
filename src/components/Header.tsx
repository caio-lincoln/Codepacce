import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, LogOut, ArrowRight } from 'lucide-react';
import { supabase } from '../supabaseClient';
import logo from '../assets/logo-site-codepacce.png';
import { useIsMounted } from '../hooks/useIsMounted';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isMounted = useIsMounted();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getSession() {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (!isMounted()) return;
        if (error) throw error;
        setUser(data.user);
      } catch (error: any) {
        if (
          error.name === 'AbortError' || 
          signal.aborted || 
          error.message?.includes('aborted') || 
          error.code === 20 // DOMException.ABORT_ERR
        ) return;
        console.error('Error getting user:', error);
      }
    }

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (isMounted()) {
        setUser(session?.user ?? null);
      }
    });

    return () => {
      abortController.abort();
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
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-5xl bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl px-8 py-4 flex items-center justify-between transition-all duration-300 hover:bg-black/60 hover:border-white/20 hover:shadow-blue-500/5">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <img 
                src={logo} 
                alt="Codepacce Logo" 
                className="h-6 md:h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link to="/sobre" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-display tracking-wide">
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/servicos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-display tracking-wide">
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/cases" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-display tracking-wide">
              Cases
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contato" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group font-display tracking-wide">
              Consultoria Gratuita
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            {user && (
              <Link to="/dashboard" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors font-display">Dashboard</Link>
            )}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500 hidden xl:block font-sans">{user.email?.split('@')[0]}</span>
                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Sair"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link 
                to="/contato" 
                className="group flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-all text-sm font-bold hover:scale-105 font-display"
              >
                <span>Contato</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          lg:hidden flex flex-col
        `}
        style={{ top: '0' }}
      >
        <div className="flex justify-end p-6 pt-8">
          {/* Close button handled by header */}
        </div>

        <div className="container mx-auto px-6 pt-32 pb-10 flex flex-col items-center justify-center space-y-8 overflow-y-auto">
          <Link 
            to="/" 
            className="text-3xl font-bold hover:text-blue-500 transition-colors font-display tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/sobre" 
            className="text-3xl font-bold hover:text-blue-500 transition-colors font-display tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link 
            to="/servicos" 
            className="text-3xl font-bold hover:text-blue-500 transition-colors font-display tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link 
            to="/cases" 
            className="text-3xl font-bold hover:text-blue-500 transition-colors font-display tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            Cases
          </Link>
          <Link 
            to="/produtos" 
            className="text-3xl font-bold hover:text-blue-500 transition-colors font-display tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            Produtos
          </Link>
          <Link 
            to="/contato" 
            className="text-3xl font-bold hover:text-blue-500 transition-colors font-display tracking-tight"
            onClick={() => setIsMenuOpen(false)}
          >
            Consultoria Gratuita
          </Link>

          <div className="pt-8 flex flex-col items-center gap-6">
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="text-xl font-medium text-blue-400 font-display"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-xl font-medium text-white font-display"
                >
                  <LogOut className="w-6 h-6" />
                  <span>Sair</span>
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-bold transition-all font-display"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
