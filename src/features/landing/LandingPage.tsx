import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { HeroSection } from './components/HeroSection';
import { CTASection } from './components/CTASection';
import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { featuredProperties } from '@/features/properties/data/mockProperties';

export const LandingPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#121212] overflow-x-hidden">
      <Header />
      
      <main>
        <HeroSection />
        <PropertyGrid properties={featuredProperties} />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};
