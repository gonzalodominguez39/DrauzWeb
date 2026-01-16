'use client';

import React from 'react';
import { FiHome, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi';

export const CompanySection = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiénes Somos
          </h1>
          <div className="w-20 h-1 bg-[#009B77] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Drauz</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Somos una plataforma inmobiliaria innovadora dedicada a transformar la forma en que las personas compran, venden y alquilan propiedades. Con tecnología de punta y un equipo apasionado, conectamos compradores y vendedores de manera transparente y eficiente.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Nuestro objetivo es democratizar el acceso al mercado inmobiliario, eliminando barreras innecesarias y proporcionando herramientas profesionales para todas las partes involucradas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-[#009B77]/30 p-6 rounded-lg text-white hover:bg-white/10 transition-all">
              <FiHome className="text-2xl text-[#009B77] mb-3" />
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm text-white/60">Propiedades Activas</div>
            </div>
            <div className="bg-white/5 border border-[#009B77]/30 p-6 rounded-lg text-white hover:bg-white/10 transition-all">
              <FiUsers className="text-2xl text-[#009B77] mb-3" />
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm text-white/60">Usuarios Registrados</div>
            </div>
            <div className="bg-white/5 border border-[#009B77]/30 p-6 rounded-lg text-white hover:bg-white/10 transition-all">
              <FiTrendingUp className="text-2xl text-[#009B77] mb-3" />
              <div className="text-3xl font-bold mb-2">5K+</div>
              <div className="text-sm text-white/60">Transacciones Exitosas</div>
            </div>
            <div className="bg-white/5 border border-[#009B77]/30 p-6 rounded-lg text-white hover:bg-white/10 transition-all">
              <FiShield className="text-2xl text-[#009B77] mb-3" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-white/60">Verificado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
