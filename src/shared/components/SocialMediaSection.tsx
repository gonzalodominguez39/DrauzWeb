import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const SocialMediaSection = () => {
    const socialLinks = [
        {
            name: 'Instagram',
            icon: FaInstagram,
            url: 'https://instagram.com/drauz',
            color: 'hover:text-pink-400',
            bgColor: 'hover:bg-pink-400/10'
        },
        {
            name: 'Facebook',
            icon: FaFacebook,
            url: 'https://facebook.com/drauz',
            color: 'hover:text-blue-400',
            bgColor: 'hover:bg-blue-400/10'
        }
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-b from-transparent via-[#009B77]/5 to-transparent border-y border-white/10">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Síguenos en Redes Sociales
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
                        Mantente al día con las últimas propiedades, consejos inmobiliarios y novedades de Drauz
                    </p>

                    <div className="flex justify-center gap-6">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`group flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 ${social.bgColor} ${social.color}`}
                            >
                                <social.icon className="w-6 h-6 text-white/70 group-hover:text-current transition-colors duration-300" />
                            </motion.a>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 text-white/40 text-sm"
                    >
                        <p>#Drauz #Propiedades #Inmuebles</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};