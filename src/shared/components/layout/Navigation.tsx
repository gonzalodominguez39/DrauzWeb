'use client';

import { useState } from "react";

interface NavigationProps {
  className?: string;
}

const NAV_ITEMS = [
  { label: 'Venta', href: '#' },
  { label: 'Alquiler', href: '#' },
  { label: 'Proyectos', href: '#' },
  { label: 'Nosotros', href: '#' },
  { label: 'Contacto', href: '#' },
];

export const Navigation = ({ className = '' }: NavigationProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(NAV_ITEMS[0].label);

  return (
    <nav className={`hidden md:flex flex-1 items-center justify-center ${className}`}>
      <div className="flex gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            onClick={() => setActiveItem(item.label)}
            key={item.label}
            className={`group relative flex flex-col items-center justify-center pb-2 pt-2 cursor-pointer`}
            href={item.href}
          >
            <p className={`text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-300 ease-in-out ${activeItem === item.label ? 'text-white scale-110' : 'text-white/70 group-hover:text-white group-hover:scale-110'
              }`}>
              {item.label}
            </p>
            <span className={`absolute bottom-0 left-0 h-[3px] w-full bg-[#009B77] rounded-full transition-transform duration-300 origin-center ${activeItem === item.label ? 'scale-x-100' : 'scale-x-0'
              }`} />
          </a>
        ))}
      </div>
    </nav>
  );
};
