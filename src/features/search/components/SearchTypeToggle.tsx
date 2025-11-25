'use client';

import { useState } from 'react';
import { SearchType } from '../types/search.types';

interface SearchTypeToggleProps {
  onTypeChange?: (type: SearchType) => void;
}

export const SearchTypeToggle = ({ onTypeChange }: SearchTypeToggleProps) => {
  const [activeType, setActiveType] = useState<SearchType>('venta');

  const handleTypeChange = (type: SearchType) => {
    setActiveType(type);
    onTypeChange?.(type);
  };

  return (
    <div className="flex flex-1 gap-3 flex-wrap justify-center w-full md:w-auto">
      <button
        onClick={() => handleTypeChange('venta')}
        className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] grow transition-colors ${
          activeType === 'venta'
            ? 'bg-[#009B77] text-[#121212] hover:bg-[#00b388]'
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        <span className="truncate">Venta</span>
      </button>
      <button
        onClick={() => handleTypeChange('alquiler')}
        className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] grow transition-colors ${
          activeType === 'alquiler'
            ? 'bg-[#009B77] text-[#121212] hover:bg-[#00b388]'
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        <span className="truncate">Alquiler</span>
      </button>
    </div>
  );
};
