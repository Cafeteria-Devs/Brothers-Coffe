import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import DevTeam from './pages/DevTeam'
import Stores from './pages/Stores'
import Contacts from './pages/Contact'
import Products from './pages/Products'
import Comprar from './pages/Comprar'
import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './pages/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apoiadores" element={<DevTeam />} />
        <Route path="/restaurantes" element={<Stores />} />
        <Route path="/contatos" element={<Contacts />} />
        <Route path="/cardapio" element={<Products />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
