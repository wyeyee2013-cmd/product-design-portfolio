import Dock from './components/Dock.jsx'
import Hero from './components/Hero.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import WindowProvider from './components/WindowProvider.jsx'

export default function App() {
  return (
    <WindowProvider>
      {/* the scroll container: each section is one viewport and snaps into place */}
      <main className="snap">
        <Hero />
        <ProjectsSection />
        <About />
        <Reviews />
        <Footer />
      </main>
      <Dock />
    </WindowProvider>
  )
}
