import { Navigation } from './Navigation';
import { COMPANY_INFO } from '@/config/constants';

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-[#121212]/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center p-4 justify-between border-b border-white/10">
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
      </div>
    </header>
  );
};
