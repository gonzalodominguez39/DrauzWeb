'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Property } from '../types/property.types';
import { PropertyBadge } from './PropertyBadge';
import { HeartIcon, HomeIcon, BathroomIcon, AreaIcon } from '@/shared/components/icons/icons';
import { formatPrice } from '@/shared/utils/formatters';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link href={`/properties/${property.id}`} className="block group">
      <div className="flex flex-col bg-[#212121] rounded-xl overflow-hidden border border-white/10 shadow-lg group-hover:border-[#009B77] transition-all duration-300">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {property.badge && <PropertyBadge badge={property.badge} />}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: Implementar favoritos
            }}
            className="absolute top-3 right-3 bg-[#212121]/50 p-2 rounded-full text-white hover:text-[#009B77] hover:bg-[#212121] transition-colors"
          >
            <HeartIcon />
          </button>
        </div>
        
        <div className="p-5 flex flex-col flex-1">
          <div className="flex-1">
            <p className="text-2xl font-bold text-[#009B77] mb-1">
              {formatPrice(property.price, property.isRental)}
            </p>
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#009B77] transition-colors">{property.title}</h4>
            <p className="text-sm text-white/70 mb-4">{property.location}</p>
          </div>
          
          <div className="flex items-center gap-4 text-white/80 border-t border-white/10 pt-4 mt-auto text-sm">
            <span className="flex items-center gap-2">
              <HomeIcon />
              {property.bedrooms} hab
            </span>
            <span className="flex items-center gap-2">
              <BathroomIcon />
              {property.bathrooms} baños
            </span>
            <span className="flex items-center gap-2">
              <AreaIcon />
              {property.area} m²
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
