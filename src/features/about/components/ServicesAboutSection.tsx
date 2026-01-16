'use client';

import React from 'react';
import { FiShoppingCart, FiTrendingUp, FiKey, FiBarChart, FiLock, FiHeadphones } from 'react-icons/fi';
import { aboutData } from '../data/aboutData';

export const ServicesAboutSection = () => {
  const icons = [
    <FiShoppingCart key="1" />,
    <FiTrendingUp key="2" />,
    <FiKey key="3" />,
    <FiBarChart key="4" />,
    <FiLock key="5" />,
    <FiHeadphones key="6" />
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿En Qué Te Podemos Ayudar?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ofrecemos una suite completa de herramientas para todas tus necesidades inmobiliarias
          </p>
          <div className="w-20 h-1 bg-[#009B77] mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-lg hover:border-[#009B77]/50 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 text-[#009B77] group-hover:scale-110 transition-transform">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
