import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Solucoes } from './pages/Solucoes';
import { Projetos } from './pages/Projetos';
import { Sobre } from './pages/Sobre';
import { Login } from './pages/Login';
import { Produtos } from './pages/Produtos';
import { Termos } from './pages/legal/Termos';
import { Privacidade } from './pages/legal/Privacidade';
import { Cookies } from './pages/legal/Cookies';
import { LGPD } from './pages/legal/LGPD';
import { Contato } from './pages/Contato';
import { ChatBot } from './components/ChatBot';
import { Tecnologias } from './pages/Tecnologias';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Dashboard } from './pages/Dashboard';
import Reset from './pages/Reset';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
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
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;