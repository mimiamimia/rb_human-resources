import './App.css'
import DescriptionCard from './components/DescriptionCard'
import DescriptionSection from './components/DescriptionSection'
import FounderSection from './components/FounderSection'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import RegistrationSection from './components/RegistrationSection'
import StatItem from './components/StatItem'
import StatsSection from './components/StatsSection'
import Footer from './components/Footer'


function App() {
  
  return (
    <div className="min-h-screen bg-white">
    <Header />

    <HeroSection />

    <FounderSection />

    <RegistrationSection />

    <DescriptionCard />

    <DescriptionSection />
    
    <StatItem />

    <StatsSection />

    <Footer />
    </div>
  )
}

export default App
