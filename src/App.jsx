import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import FeedMe from './pages/projects/FeedMe'
import Pantas from './pages/projects/Pantas'
import Hireti from './pages/projects/Hireti'
import APSpace from './pages/projects/APSpace'

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
      </Routes>
    </BrowserRouter>
  )
}
