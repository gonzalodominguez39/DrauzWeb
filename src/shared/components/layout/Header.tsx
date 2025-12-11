'use client';

import { Navigation } from './Navigation';
import { COMPANY_INFO } from '@/config/constants';
import drauzLogo from '@/assets/images/logo_drauz.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHome, FaBuilding, FaProjectDiagram, FaUsers, FaEnvelope } from 'react-icons/fa';

const MENU_ITEMS = [
  { label: 'Venta', href: '#', icon: FaHome },
  { label: 'Alquiler', href: '#', icon: FaBuilding },
  { label: 'Proyectos', href: '#', icon: FaProjectDiagram },
  { label: 'Nosotros', href: '#', icon: FaUsers },
  { label: 'Contacto', href: '#', icon: FaEnvelope },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldBeScrolled = scrollPosition > 100;
      console.log('Scroll position:', scrollPosition, 'isScrolled:', shouldBeScrolled);
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'bg-black/80' : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent'
      }`}>
      <div className="container mx-auto">
        {!isScrolled ? (
          // Full header when at top
          <div className="flex items-center p-4 justify-between">
            <div className="rounded-full overflow-hidden object-contain m-3 w-18 h-18">
              <Image src={drauzLogo} alt="drauz logo" />
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1">
              {COMPANY_INFO.name}
            </h2>

            <Navigation />

            <div className="flex flex-1 items-center justify-end">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009B77] text-[#121212] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#00b388] transition-colors">
                <span className="truncate">Iniciar Sesión</span>
              </button>
            </div>
          </div>
        ) : (
          // Collapsed header when scrolled
          <div className="flex items-center p-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full overflow-hidden object-contain w-12 h-12">
                <Image src={drauzLogo} alt="drauz logo" />
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#009B77] transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>

            <div className="flex items-center justify-end">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009B77] text-[#121212] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#00b388] transition-colors">
                <span className="truncate">Iniciar Sesión</span>
              </button>
            </div>
          </div>
        )}

        {/* Dropdown Menu */}
        {isScrolled && isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto p-4">
              <nav className="flex flex-col gap-2">
                {MENU_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 group"
                    >
                      <Icon className="text-[#009B77] group-hover:scale-110 transition-transform" size={20} />
                      <span className="font-medium">{item.label}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
