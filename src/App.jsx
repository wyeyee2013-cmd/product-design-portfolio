import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FeedMe from './pages/projects/FeedMe'
import Pantas from './pages/projects/Pantas'
import Hireti from './pages/projects/Hireti'
import APSpace from './pages/projects/APSpace'
import WolfPlanet from './pages/projects/WolfPlanet'
import Tomo from './pages/projects/Tomo'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/feedme" element={<FeedMe />} />
        <Route path="/projects/pantas" element={<Pantas />} />
        <Route path="/projects/hireti" element={<Hireti />} />
        <Route path="/projects/apspace" element={<APSpace />} />
        <Route path="/projects/wolfplanet" element={<WolfPlanet />} />
        <Route path="/projects/tomo" element={<Tomo />} />
      </Routes>
    </BrowserRouter>
  )
}
