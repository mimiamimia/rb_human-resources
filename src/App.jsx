import './App.css'
import DescriptionCard from './components/DescriptionCard'
import FounderSection from './components/FounderSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import RegistrationSection from './components/RegistrationSection'
import Footer from './components/Footer'


function App() {
  
  
  return (
    <div className="min-h-screen bg-white">
    <Header />

    <HeroSection />

    <FounderSection />

    <RegistrationSection />

    <DescriptionCard />

    <Footer />
    </div>
  )
}

export default App
