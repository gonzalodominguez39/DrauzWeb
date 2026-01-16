'use client';

import React from 'react';
import { FiEye, FiZap, FiLock, FiGlobe } from 'react-icons/fi';
import { aboutData } from '../data/aboutData';

export const ValuesSection = () => {
  const valueIcons = [
    <FiEye key="1" />,
    <FiZap key="2" />,
    <FiLock key="3" />,
    <FiGlobe key="4" />
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Valores
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Los principios que guían cada decisión que tomamos
          </p>
          <div className="w-20 h-1 bg-[#009B77] mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.values.map((value, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-lg text-center hover:border-[#009B77]/50 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 text-[#009B77] group-hover:scale-110 transition-transform flex justify-center">
                {valueIcons[index]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
