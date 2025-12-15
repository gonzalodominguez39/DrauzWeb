'use client';

import { useState } from 'react';
import { SearchType } from '../types/search.types';
import { useFilterPropertiesStore } from '../hooks/useFilterPropertiesStore';

interface SearchTypeToggleProps {
  onTypeChange?: (type: SearchType) => void;
}

export const SearchTypeToggle = ({ onTypeChange }: SearchTypeToggleProps) => {
  const { currentType, setSearchType } = useFilterPropertiesStore();

  return (
    <div className="flex flex-1 gap-3 flex-wrap justify-center w-full md:w-auto">
      <button
        onClick={() => {
          setSearchType('venta');
          onTypeChange?.('venta');
        }}
        className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] grow transition-colors ${currentType === 'venta'
          ? 'bg-[#009B77] text-[#121212] hover:bg-[#00b388]'
          : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
      >
        <span className="truncate">Venta</span>
      </button>
      <button
        onClick={() => {
          setSearchType('alquiler');
          onTypeChange?.('alquiler');
        }}
        className={`flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] grow transition-colors ${currentType === 'alquiler'
          ? 'bg-[#009B77] text-[#121212] hover:bg-[#00b388]'
          : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
      >
        <span className="truncate">Alquiler</span>
      </button>
    </div>
  );
};
