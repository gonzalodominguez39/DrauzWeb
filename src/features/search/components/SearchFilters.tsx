import { FilterIcon } from '@/shared/components/icons/icons';

interface SearchFiltersProps {
  onClick?: () => void;
}

export const SearchFilters = ({ onClick }: SearchFiltersProps) => {
  return (
    <button
      onClick={onClick}
      className="flex-1 md:flex-none flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-transparent text-white gap-2 pl-4 text-base font-bold leading-normal tracking-[0.015em] border border-white/20 hover:bg-white/10 transition-colors"
    >
      <FilterIcon />
      <span className="truncate">Filtros</span>
    </button>
  );
};
