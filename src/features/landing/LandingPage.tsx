'use client';

import { HeroCarousel } from './components/HeroCarousel';
import { FeaturedSection } from './components/FeaturedSection';
import { ServicesSection } from './components/ServicesSection';
import { CTASection } from './components/CTASection';

export const LandingPage = () => {
  return (
    <div className="bg-[#121212] min-h-screen">
      <HeroCarousel />

      {/* Main Content */}
      <main>
        <FeaturedSection />
        <ServicesSection />
        <CTASection />
      </main>
    </div>
  );
};
