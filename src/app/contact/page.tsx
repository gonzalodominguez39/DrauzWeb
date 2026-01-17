'use client';

import { motion } from 'framer-motion';
import { ContactInfo, ContactForm, ContactMap, ContactFAQ } from '@/features/contact/components';
import { contactLocations } from '@/features/contact/data/contactData';

export default function ContactPage() {
  return (
    <div className="bg-[#121212] min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pt-0 pb-12"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#009B77]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ponte en contacto con nosotros
            </h1>
            <p className="text-white/60 text-lg">
              ¿Tienes preguntas? Estamos aquí para ayudarte. Contacta con nuestro equipo
              y te responderemos en las próximas 24 horas.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 py-12">
        <ContactInfo />
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Formulario - 3 columnas */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Info secundaria - 2 columnas */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-8 h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6">Oficinas</h3>
              <div className="space-y-6">
                {contactLocations.map((location, index) => (
                  <div key={index} className="pb-6 border-b border-white/10 last:border-0">
                    <h4 className="text-white font-semibold mb-2">{location.name}</h4>
                    <p className="text-white/60 text-sm mb-1">{location.address}</p>
                    <p className="text-white/60 text-sm">{location.city}, {location.country}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Nuestras ubicaciones</h2>
          <p className="text-white/60">
            Visita cualquiera de nuestras oficinas para una atención personalizada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactLocations.map((location, index) => (
            <ContactMap key={index} location={location} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12 pb-24">
        <ContactFAQ />
      </section>
    </div>
  );
}
