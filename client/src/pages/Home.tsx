import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import TrustStats from '@/components/TrustStats';
import FeaturedPeaks from '@/components/FeaturedPeaks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Design: Modern Luxury Expedition
 * Integrates all premium components for a cohesive, cinematic experience
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <div id="why-us">
        <TrustStats />
      </div>
      <div id="peaks">
        <FeaturedPeaks />
      </div>
      <WhyChooseUs />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
