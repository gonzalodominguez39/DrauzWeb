import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { FloatingMenu } from '@/shared/components/layout/FloatingMenu';
import { HeroSection } from './components/HeroSection';
import { CTASection } from './components/CTASection';
import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { featuredProperties } from '@/features/properties/data/mockProperties';
import { HERO_BACKGROUND_IMAGE } from '@/config/constants';

export const LandingPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#121212] overflow-x-hidden"
    >
      <div style={{
        backgroundImage: `linear-gradient(to top, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0.7) 70%, rgba(18, 18, 18, 0.3) 100%), url("${HERO_BACKGROUND_IMAGE}")`
      }}>
        <Header />
        <HeroSection />
      </div>
      <main>
        <PropertyGrid properties={featuredProperties} />
        <CTASection />
      </main>
      <Footer />
      <FloatingMenu />
    </div>
  );
};
