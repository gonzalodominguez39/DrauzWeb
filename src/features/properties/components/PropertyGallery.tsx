'use client';

import Image from 'next/image';
import { useState } from 'react';

interface PropertyGalleryProps {
  images: string[];
  alt: string;
}

export const PropertyGallery = ({ images, alt }: PropertyGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    console.log('No images provided', images[0]);
    return null;
  }

  return (
    <div className="w-full">
      {/* Imagen principal */}
      <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden mb-4">
        <Image
          src={images[selectedIndex]}
          alt={`${alt} - Imagen ${selectedIndex + 1}`}
          fill
          className="object-cover"
          priority
        />

        {/* Contador de imágenes */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedIndex === index
              ? 'border-[#009B77] scale-105'
              : 'border-transparent hover:border-white/30'
              }`}
          >
            <Image
              src={image}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
