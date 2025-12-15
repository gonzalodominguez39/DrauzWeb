
'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { FloatingMenu } from '@/shared/components/layout/FloatingMenu';
import { HeroSection } from './components/HeroSection';
import { CTASection } from './components/CTASection';
import { PropertyGrid } from '@/features/properties/components/PropertyGrid';
import { HERO_BACKGROUND_IMAGE } from '@/config/constants';
import { useFilterPropertiesStore } from '@/features/search/hooks/useFilterPropertiesStore';
import useLogin from '../login/hooks/useLogin';
import Login from '../login/Login';


export const LandingPage = () => {
  const { filteredProperties } = useFilterPropertiesStore();
  const { authView, onLoginClick, onSignupClick, onCloseClick } = useLogin();
  return (
    <>

      <div style={{
        backgroundImage: `linear-gradient(to top, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0.7) 70%, rgba(18, 18, 18, 0.3) 100%), url("${HERO_BACKGROUND_IMAGE}")`
      }}>
        <Header onLoginClick={onLoginClick} />
        <HeroSection />
      </div>
      <main>
        <PropertyGrid properties={filteredProperties} />
        <CTASection />
      </main>
      <Footer />
      <FloatingMenu />
      authView && <Login authView={authView} onCloseClick={onCloseClick} onLoginClick={onLoginClick} onSignupClick={onSignupClick} />




    </>
  );
};
