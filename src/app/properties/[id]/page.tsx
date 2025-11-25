import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPropertyById } from '@/features/properties/utils/getPropertyById';
import { PropertyGallery } from '@/features/properties/components/PropertyGallery';
import { PropertyInfo } from '@/features/properties/components/PropertyInfo';
import { PropertyFeatures } from '@/features/properties/components/PropertyFeatures';
import { PropertyContact } from '@/features/properties/components/PropertyContact';
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#121212]">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Botón volver */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al listado
          </Link>

          {/* Galería */}
          {property.gallery && property.gallery.length > 0 && (
            <div className="mb-8">
              <PropertyGallery images={property.gallery} alt={property.title} />
            </div>
          )}

          {/* Layout de 2 columnas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna principal - Info y Features */}
            <div className="lg:col-span-2 space-y-8">
              <PropertyInfo property={property} />
              <PropertyFeatures features={property.features} amenities={property.amenities} />
            </div>

            {/* Columna lateral - Contacto */}
            <div className="lg:col-span-1">
              <PropertyContact propertyTitle={property.title} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
