import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { ProtectedRoute } from './components/ProtectedRoute';

// Lazy loading pages for better performance
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Solucoes = lazy(() => import('./pages/Solucoes').then(module => ({ default: module.Solucoes })));
const Projetos = lazy(() => import('./pages/Projetos').then(module => ({ default: module.Projetos })));
const Sobre = lazy(() => import('./pages/Sobre').then(module => ({ default: module.Sobre })));
const Login = lazy(() => import('./pages/Login').then(module => ({ default: module.Login })));
const Produtos = lazy(() => import('./pages/Produtos').then(module => ({ default: module.Produtos })));
const Contato = lazy(() => import('./pages/Contato').then(module => ({ default: module.Contato })));
const Tecnologias = lazy(() => import('./pages/Tecnologias').then(module => ({ default: module.Tecnologias })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));
const Reset = lazy(() => import('./pages/Reset'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

// Legal pages
const Termos = lazy(() => import('./pages/legal/Termos').then(module => ({ default: module.Termos })));
const Privacidade = lazy(() => import('./pages/legal/Privacidade').then(module => ({ default: module.Privacidade })));
const Cookies = lazy(() => import('./pages/legal/Cookies').then(module => ({ default: module.Cookies })));
const LGPD = lazy(() => import('./pages/legal/LGPD').then(module => ({ default: module.LGPD })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Solucoes />} />
            <Route path="/cases" element={<Projetos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/lgpd" element={<LGPD />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/tecnologias" element={<Tecnologias />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;