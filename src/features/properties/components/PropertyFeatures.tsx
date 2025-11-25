interface PropertyFeaturesProps {
  features?: string[];
  amenities?: string[];
}

export const PropertyFeatures = ({ features, amenities }: PropertyFeaturesProps) => {
  if (!features && !amenities) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* Características */}
      {features && features.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Características</h2>
          <div className="bg-[#212121] p-6 rounded-xl border border-white/10">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-white/80">
                  <svg className="w-5 h-5 text-[#009B77] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Amenidades */}
      {amenities && amenities.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Amenidades</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-[#212121] p-4 rounded-xl border border-white/10 text-center hover:border-[#009B77] transition-colors"
              >
                <p className="text-white/80 text-sm">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
