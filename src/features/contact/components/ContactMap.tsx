'use client';

import { ContactLocation } from '../data/contactData';
import { motion } from 'framer-motion';
import { FiMapPin as MapPin, FiPhone as Phone, FiMail as Mail, FiClock as Clock } from 'react-icons/fi';

interface ContactMapProps {
  location: ContactLocation;
}

export const ContactMap = ({ location }: ContactMapProps) => {
  // Construir URL de mapa de Google Maps
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5370766353046!2d${location.longitude}!3d${location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(location.address + ', ' + location.city)}!5e0!3m2!1ses!2sco!4v1234567890`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10"
    >
      {/* Encabezado de ubicación */}
      <div className="p-6 border-b border-white/10">
        <h3 className="text-xl font-bold text-white mb-4">{location.name}</h3>
        
        <div className="space-y-3">
          {/* Dirección */}
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#009B77] mt-1 shrink-0" />
            <div>
              <p className="text-white/80">{location.address}</p>
              <p className="text-white/60 text-sm">{location.city}, {location.country}</p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#009B77]" />
            <a href={`tel:${location.phone}`} className="text-white/80 hover:text-[#009B77] transition">
              {location.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#009B77]" />
            <a href={`mailto:${location.email}`} className="text-white/80 hover:text-[#009B77] transition">
              {location.email}
            </a>
          </div>

          {/* Horario */}
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#009B77]" />
            <p className="text-white/80">{location.hours}</p>
          </div>
        </div>
      </div>

      {/* Mapa embebido */}
      <div className="relative w-full h-80 bg-gradient-to-br from-[#009B77]/10 to-transparent">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapsUrl}
          className="w-full h-full"
        />
      </div>
    </motion.div>
  );
};
