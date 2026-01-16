'use client';

import React from 'react';
import { Header } from '@/shared/components/layout/header/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { CompanySection } from '@/features/about/components/CompanySection';
import { ServicesAboutSection } from '@/features/about/components/ServicesAboutSection';
import { TeamSection } from '@/features/about/components/TeamSection';
import { ValuesSection } from '@/features/about/components/ValuesSection';
import { CTAAboutSection } from '@/features/about/components/CTAAboutSection';
import { ButtonWpp } from '@/shared/components/layout/ButtonWpp';
import { useAuthStore } from '@/features/login/store/useAuthStore';
import { useState } from 'react';
import Login from '@/features/login/Login';

const AboutUsPage = () => {
  const { onLoginClick } = useAuthStore();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const { authView } = useAuthStore();


  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <>
      <div className="bg-[#0a0a0a] min-h-screen">


        {/* Company Section */}
        <CompanySection />

        {/* Services Section */}
        <ServicesAboutSection />

        {/* Team Section */}
        <TeamSection />

        {/* Values Section */}
        <ValuesSection />

        {/* CTA Section */}
        <CTAAboutSection />

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <ButtonWpp />

          {/* Login Modal */}
        {authView && <Login authView={authView} />}
      </div>
    </>
  );
};

export default AboutUsPage;