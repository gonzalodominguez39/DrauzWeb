'use client';

import React from 'react';
import { CompanySection } from '@/features/about/components/CompanySection';
import { ServicesAboutSection } from '@/features/about/components/ServicesAboutSection';
import { TeamSection } from '@/features/about/components/TeamSection';
import { ValuesSection } from '@/features/about/components/ValuesSection';
import { CTAAboutSection } from '@/features/about/components/CTAAboutSection';

const AboutUsPage = () => {
  return (
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
    </div>
  );
};

export default AboutUsPage;