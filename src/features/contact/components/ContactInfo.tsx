'use client';

import { motion } from 'framer-motion';
import { FiPhone as Phone, FiMail as Mail, FiGlobe as Globe } from 'react-icons/fi';
import { generalContactInfo } from '../data/contactData';

export const ContactInfo = () => {
  const contactItems = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: generalContactInfo.phone,
      href: `tel:${generalContactInfo.phone}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: generalContactInfo.email,
      href: `mailto:${generalContactInfo.email}`,
    },
    {
      icon: Globe,
      label: 'Sitio web',
      value: generalContactInfo.website,
      href: `https://${generalContactInfo.website}`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {contactItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={index}
            href={item.href}
            target={item.label === 'Sitio web' ? '_blank' : undefined}
            rel={item.label === 'Sitio web' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-8 group hover:border-[#009B77]/50 transition cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#009B77]/10 flex items-center justify-center group-hover:bg-[#009B77]/20 transition">
                <Icon className="w-6 h-6 text-[#009B77]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.label}</h3>
            </div>
            <p className="text-white/60 group-hover:text-white transition">
              {item.value}
            </p>
          </motion.a>
        );
      })}
    </div>
  );
};
