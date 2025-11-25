'use client';

interface NavigationProps {
  className?: string;
}

const NAV_ITEMS = [
  { label: 'Venta', href: '#', active: true },
  { label: 'Alquiler', href: '#', active: false },
  { label: 'Proyectos', href: '#', active: false },
  { label: 'Nosotros', href: '#', active: false },
  { label: 'Contacto', href: '#', active: false },
];

export const Navigation = ({ className = '' }: NavigationProps) => {
  return (
    <nav className={`hidden md:flex flex-1 items-center justify-center ${className}`}>
      <div className="flex gap-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-2 pt-2 ${
              item.active
                ? 'border-b-[#009B77] text-white'
                : 'border-b-transparent text-white/70 hover:text-white'
            }`}
            href={item.href}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">
              {item.label}
            </p>
          </a>
        ))}
      </div>
    </nav>
  );
};
