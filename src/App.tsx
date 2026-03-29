import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import DevTeam from './pages/DevTeam'
import Stores from './pages/Stores'
import Contacts from './pages/Contact'
import Products from './pages/Products'

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
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
