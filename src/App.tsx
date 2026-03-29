import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import DevTeam from './pages/DevTeam'
import Stores from './pages/Stores'

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apoiadores" element={<DevTeam />} />
        <Route path="/restaurantes" element={<Stores />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
