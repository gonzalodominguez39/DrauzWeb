'use client';

import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { FloatingMenu } from '@/shared/components/layout/FloatingMenu';
import { HeroCarousel } from './components/HeroCarousel';
import { FeaturedSection } from './components/FeaturedSection';
import { ServicesSection } from './components/ServicesSection';
import { CTASection } from './components/CTASection';
import Login from '../login/Login';
import { ButtonWpp } from '@/shared/components/layout/ButtonWpp';
import { useAuthStore } from '../login/store/useAuthStore';
import { Toaster } from 'sonner';

export const LandingPage = () => {
  const { authView, onLoginClick } = useAuthStore();

  return (
    <>
      <Toaster />
      <div className="bg-[#121212] min-h-screen">
        {/* Header */}
        <Header onLoginClick={onLoginClick} />

        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Main Content */}
        <main>
          {/* Propiedades Destacadas */}
          <FeaturedSection />

          {/* Servicios: Comercialización, Administración, Tasación */}
          <ServicesSection />

          {/* CTA Section */}
          <CTASection />
        </main>

        {/* Floating Elements */}
        <div className="flex flex-col right-4 z-50">
          <FloatingMenu />
          <ButtonWpp />
        </div>

        {/* Footer */}
        <Footer />

        {/* Login Modal */}
        {authView && <Login authView={authView} />}
      </div>
    </>
  );
};
