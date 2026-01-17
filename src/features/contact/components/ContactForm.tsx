'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend as Send, FiAlertCircle as AlertCircle, FiCheckCircle as CheckCircle } from 'react-icons/fi';
import { toast } from 'sonner';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulamos envío del formulario
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Aquí iría la llamada real a tu API
      toast.success('¡Mensaje enviado exitosamente!');
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Resetear estado después de 3 segundos
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      toast.error('Error al enviar el mensaje. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-[#0a0a0a] rounded-2xl border border-white/10 p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h2>

      <div className="space-y-6">
        {/* Nombre */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Nombre completo
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#009B77] transition"
            placeholder="Tu nombre"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#009B77] transition"
            placeholder="tu@email.com"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#009B77] transition"
            placeholder="+57 (1) 234-5678"
          />
        </div>

        {/* Asunto */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Asunto
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#009B77] transition"
            placeholder="¿En qué podemos ayudarte?"
          />
        </div>

        {/* Mensaje */}
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Mensaje
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#009B77] transition resize-none"
            placeholder="Cuéntanos más detalles..."
          />
        </div>

        {/* Estado de envío */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-[#009B77]/10 border border-[#009B77]/50 rounded-lg flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-[#009B77]" />
            <p className="text-[#009B77]">¡Mensaje enviado correctamente!</p>
          </motion.div>
        )}

        {/* Botón enviar */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-[#009B77] to-[#00d084] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#009B77]/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Enviar mensaje
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
};
