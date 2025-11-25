import { Property } from '../types/property.types';
import { PropertyCard } from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  title?: string;
}

export const PropertyGrid = ({ properties, title = "Propiedades Destacadas" }: PropertyGridProps) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          {title}
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};
