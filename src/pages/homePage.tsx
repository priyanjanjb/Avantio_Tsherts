import NavigationBar from '../components/NavigationBar'
import HeroSection from '../components/HeroSection'
import Selection from '../components/Selection'
import Features from '../components/features'
import Footer from '../components/Footer'
function homePage() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <Selection />
      <Features />
      <Footer/>
    </div>
  )
}

export default homePage
