import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WaFab from '@/components/WaFab'
import Home from '@/pages/Home'
import Events from '@/pages/Events'
import Gallery from '@/pages/Gallery'
import Accommodation from '@/pages/Accommodation'
import Booking from '@/pages/Booking'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/events"         element={<Events />} />
          <Route path="/gallery"        element={<Gallery />} />
          <Route path="/accommodation"  element={<Accommodation />} />
          <Route path="/booking"        element={<Booking />} />
          <Route path="/about"          element={<About />} />
          <Route path="/contact"        element={<Contact />} />
          {/* Catch-all → Home */}
          <Route path="*"               element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WaFab />
    </BrowserRouter>
  )
}
