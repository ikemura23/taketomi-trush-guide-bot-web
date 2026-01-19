import Hero from './components/Hero'
import Features from './components/Features'
import HowToUse from './components/HowToUse'
import Transparency from './components/Transparency'
import Notice from './components/Notice'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Notice />
      <HowToUse />
      <Transparency />
      <Footer />
    </div>
  )
}

export default App
