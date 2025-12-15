'use client';

import { SearchTypeToggle } from './SearchTypeToggle';
import { SearchFilters } from './SearchFilters';
import { SearchIcon } from '@/shared/components/icons/icons';
import { SearchType } from '../types/search.types';
import { useFilterPropertiesStore } from '../hooks/useFilterPropertiesStore';

interface SearchBarProps {
  onSearch?: (query: string, type: SearchType) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { searchQuery, setSearchQuery, currentType } = useFilterPropertiesStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(searchQuery, currentType);
  };


  return (
    <div className="w-full max-w-4xl mt-6 p-4 bg-[#212121]/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/10">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <SearchTypeToggle />

          <label className="flex flex-col h-14 w-full md:flex-1 md:h-12">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-white/70 flex border border-white/20 bg-[#121212] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <SearchIcon />
              </div>
              <input
                name="query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-0 border border-white/20 border-l-0 bg-[#121212] focus:border-[#009B77] h-full placeholder:text-white/50 px-4 text-base font-normal leading-normal"
                placeholder="¿Qué estás buscando? (Ciudad, barrio...)"
              />
            </div>
          </label>

          <div className="flex w-full md:w-auto gap-3">
            <SearchFilters />
            <button
              type="submit"
              className="flex-1 md:flex-none flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#009B77] text-[#121212] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#00b388] transition-colors"
            >
              <span className="truncate">Buscar</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
