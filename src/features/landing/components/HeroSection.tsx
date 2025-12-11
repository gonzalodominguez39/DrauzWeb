'use client';

import { SearchBar } from '@/features/search/components/SearchBar';


export const HeroSection = () => {
  return (
    <div className="relative py-16 sm:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"

      />

      <div className="relative container mx-auto px-4 text-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl">
              Encuentra tu hogar ideal
            </h1>
            <h2 className="text-white/80 text-base font-normal leading-normal sm:text-lg max-w-2xl mx-auto">
              Explora las mejores propiedades en venta y alquiler en las ubicaciones más exclusivas.
            </h2>
          </div>

          <SearchBar />
        </div>
      </div>
    </div>
  );
};
