import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import TrustStats from '@/components/TrustStats';
import FeaturedPeaks from '@/components/FeaturedPeaks';
import JourneyFlow from '@/components/JourneyFlow';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

/**
 * Home Page
 * Design: Modern Luxury Expedition
 * Integrates all premium components for a cohesive, cinematic experience
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#102433]">
      <Navbar />
      <HeroSlider />
      <div id="why-us" className="scroll-mt-28">
        <TrustStats />
      </div>
      <div id="peaks" className="scroll-mt-28">
        <FeaturedPeaks />
      </div>
      <JourneyFlow />
      <WhyChooseUs />
      <div id="testimonials" className="scroll-mt-28">
        <Testimonials />
      </div>
      <div id="faq" className="scroll-mt-28">
        <FAQ />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
