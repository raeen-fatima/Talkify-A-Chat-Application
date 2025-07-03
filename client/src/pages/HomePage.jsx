import Hero from '../components/Hero.jsx'
import HowItWorks from '../components/HowItworks.jsx'
import Testimonials from '../components/Testinomals.jsx'
import CallToAction from '../components/CallToAction.jsx'
import Pricing from '../components/Pricing.jsx'
import BlogSection from '../components/Blogsection.jsx'
import Footer from '../components/Footer.jsx'
import FeaturesSection from '../components/FeatureSection.jsx'

function HomePage() {
  return (
    <div>
        {/* <Navbar /> */}
        <Hero />
        <FeaturesSection />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CallToAction />
        <BlogSection />
        <Footer />
    </div>
  )
}

export default HomePage
