'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Service {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    color: string;
}

const services: Service[] = [
    {
        id: 'comercializacion',
        title: 'Comercialización',
        subtitle: 'Venta y Alquiler',
        description: 'Gestionamos la venta y alquiler de tu propiedad con estrategias de marketing efectivas y una amplia red de contactos.',
        features: [
            'Fotografía profesional y tour virtual',
            'Publicación en portales premium',
            'Gestión de visitas y negociación',
            'Asesoramiento legal y fiscal',
            'Marketing digital personalizado',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
        ),
        color: '#009B77',
    },
    {
        id: 'administracion',
        title: 'Administración',
        subtitle: 'Gestión Integral',
        description: 'Administramos tu propiedad de manera integral, desde el cobro de alquileres hasta el mantenimiento preventivo.',
        features: [
            'Cobro y gestión de alquileres',
            'Selección rigurosa de inquilinos',
            'Gestión de incidencias 24/7',
            'Mantenimiento preventivo',
            'Informes mensuales detallados',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M3 9h18" /><path d="M9 21V9" />
            </svg>
        ),
        color: '#6366f1',
    },
    {
        id: 'tasacion',
        title: 'Tasación',
        subtitle: 'Valoración Profesional',
        description: 'Realizamos tasaciones profesionales con metodología rigurosa para conocer el valor real de tu propiedad.',
        features: [
            'Análisis de mercado actualizado',
            'Comparativas de zona',
            'Informe detallado de valoración',
            'Tasación oficial certificada',
            'Asesoramiento gratuito',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                <path d="M12 18V6" />
            </svg>
        ),
        color: '#f59e0b',
    },
];

export const ServicesSection = () => {
    const [activeService, setActiveService] = useState<string | null>(null);

    return (
        <section className="bg-[#0a0a0a] py-20 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-white/70 text-sm font-medium mb-4">
                        Nuestros Servicios
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Soluciones Inmobiliarias
                        <br />
                        <span className="bg-linear-to-r from-[#009B77] to-[#00d9a5] bg-clip-text text-transparent">
                            a tu medida
                        </span>
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Ofrecemos un servicio integral para todas tus necesidades inmobiliarias
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setActiveService(service.id)}
                            onMouseLeave={() => setActiveService(null)}
                            className={`relative group p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${activeService === service.id
                                    ? 'bg-white/5 border-white/20 scale-[1.02]'
                                    : 'bg-white/[0.02] border-white/10 hover:bg-white/5'
                                }`}
                        >
                            {/* Glow Effect */}
                            <div
                                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                                style={{ backgroundColor: service.color }}
                            />

                            {/* Icon */}
                            <div
                                className={`relative inline-flex p-4 rounded-2xl mb-6 transition-all duration-300`}
                                style={{
                                    backgroundColor: `${service.color}20`,
                                    color: service.color,
                                }}
                            >
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <p
                                    className="text-sm font-medium mb-2"
                                    style={{ color: service.color }}
                                >
                                    {service.subtitle}
                                </p>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                                            className="flex items-center gap-3 text-white/70 text-sm"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                style={{ color: service.color }}
                                            >
                                                <path d="M20 6 9 17l-5-5" />
                                            </svg>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button
                                    className="mt-8 flex items-center gap-2 text-sm font-medium transition-all duration-300 group/btn"
                                    style={{ color: service.color }}
                                >
                                    Más información
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="group-hover/btn:translate-x-1 transition-transform"
                                    >
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                            </div>

                            {/* Corner Decoration */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-tr-3xl"
                                style={{
                                    background: `radial-gradient(circle at top right, ${service.color}, transparent)`
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <p className="text-white/50 mb-6">
                        ¿Necesitas más información sobre nuestros servicios?
                    </p>
                    <button className="px-8 py-4 bg-[#009B77] text-white font-bold rounded-xl hover:bg-[#00b388] transition-all duration-300 shadow-lg shadow-[#009B77]/30">
                        Contactar con un asesor
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
