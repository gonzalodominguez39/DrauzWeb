import { Property } from '../types/property.types';
import { PropertyBadge } from './PropertyBadge';
import { HomeIcon, BathroomIcon, AreaIcon } from '@/shared/components/icons/icons';
import { formatPrice } from '@/shared/utils/formatters';

interface PropertyInfoProps {
  property: Property;
}

export const PropertyInfo = ({ property }: PropertyInfoProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {property.title}
          </h1>
          {property.badge && (
            <div className="ml-4">
              <PropertyBadge badge={property.badge} variant="static" />
            </div>
          )}
        </div>
        <p className="text-white/70 text-lg">{property.location}</p>
      </div>

      {/* Precio */}
      <div className="bg-[#212121] p-6 rounded-xl border border-white/10">
        <p className="text-white/70 text-sm mb-1">Precio</p>
        <p className="text-4xl font-bold text-[#009B77]">
          {formatPrice(property.price, property.isRental)}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#212121] p-4 rounded-xl border border-white/10 text-center">
          <HomeIcon className="w-6 h-6 mx-auto mb-2 text-[#009B77]" />
          <p className="text-white text-lg font-bold">{property.bedrooms}</p>
          <p className="text-white/70 text-sm">Habitaciones</p>
        </div>
        <div className="bg-[#212121] p-4 rounded-xl border border-white/10 text-center">
          <BathroomIcon className="w-6 h-6 mx-auto mb-2 text-[#009B77]" />
          <p className="text-white text-lg font-bold">{property.bathrooms}</p>
          <p className="text-white/70 text-sm">Baños</p>
        </div>
        <div className="bg-[#212121] p-4 rounded-xl border border-white/10 text-center">
          <AreaIcon className="w-6 h-6 mx-auto mb-2 text-[#009B77]" />
          <p className="text-white text-lg font-bold">{property.area}</p>
          <p className="text-white/70 text-sm">m²</p>
        </div>
      </div>

      {/* Descripción */}
      {property.description && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Descripción</h2>
          <p className="text-white/80 leading-relaxed">{property.description}</p>
        </div>
      )}

      {/* Detalles adicionales */}
      {(property.yearBuilt || property.parking) && (
        <div className="grid grid-cols-2 gap-4">
          {property.yearBuilt && (
            <div className="bg-[#212121] p-4 rounded-xl border border-white/10">
              <p className="text-white/70 text-sm">Año de construcción</p>
              <p className="text-white text-lg font-bold">{property.yearBuilt}</p>
            </div>
          )}
          {property.parking && (
            <div className="bg-[#212121] p-4 rounded-xl border border-white/10">
              <p className="text-white/70 text-sm">Plazas de garaje</p>
              <p className="text-white text-lg font-bold">{property.parking}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
