import { useSeo } from '@/hooks/useSeo';
import HeroCarousel from '@/components/home/HeroCarousel';
import Intro from '@/components/home/Intro';
import Services from '@/components/home/Services';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  useSeo(
    'Eezhaa Constructions | Building Trust, Building Tomorrow',
    'Eezhaa Constructions builds homes, offices and interiors across Tamil Nadu with TATA TISCON-grade reinforcement and on-time delivery.'
  );

  return (
    <>
      <HeroCarousel />
      <Intro />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  );
}
