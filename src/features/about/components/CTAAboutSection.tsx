'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export const CTAAboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r from-[#009B77] to-[#00d9a5]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para empezar?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Únete a miles de usuarios que ya confían en Drauz para sus transacciones inmobiliarias
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/properties"
            className="inline-flex items-center gap-2 bg-white text-[#009B77] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 group"
          >
            Explorar Propiedades
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/api/auth/signin"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300 group"
          >
            Crear Cuenta
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
