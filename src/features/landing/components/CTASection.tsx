export const CTASection = () => {
  return (
    <section className="bg-[#212121]">
      <div className="container mx-auto px-4 py-16 sm:py-20 text-center">
        <h3 className="text-3xl font-bold text-white mb-3">
          ¿Quieres vender o alquilar tu propiedad?
        </h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Nuestros expertos te ayudarán a conseguir el mejor precio del mercado. 
          Contacta con nosotros para una valoración gratuita y sin compromiso.
        </p>
        <button className="flex mx-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#009B77] text-[#121212] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#00b388] transition-colors">
          <span className="truncate">Habla con nuestros expertos</span>
        </button>
      </div>
    </section>
  );
};
