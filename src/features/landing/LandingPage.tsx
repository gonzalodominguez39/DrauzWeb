'use client';

import { Header } from '@/shared/components/layout/header/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { HeroCarousel } from './components/HeroCarousel';
import { FeaturedSection } from './components/FeaturedSection';
import { ServicesSection } from './components/ServicesSection';
import { CTASection } from './components/CTASection';
import Login from '../login/Login';
import { ButtonWpp } from '@/shared/components/layout/ButtonWpp';
import { useAuthStore } from '../login/store/useAuthStore';
import { Toaster } from 'sonner';
import { useState } from 'react';

export const LandingPage = () => {

  return (
    <>
      <Toaster />
      <div className="bg-[#121212] min-h-screen">

        <HeroCarousel />

        {/* Main Content */}
        <main>
          <FeaturedSection />
          <ServicesSection />

          <CTASection />
        </main>
      
        </div>
        <Footer />

    </>
  );
};
