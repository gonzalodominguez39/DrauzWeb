'use client';

import { useState } from 'react';

interface PropertyContactProps {
  propertyTitle: string;
}

export const PropertyContact = ({ propertyTitle }: PropertyContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hola, estoy interesado en "${propertyTitle}". Me gustaría recibir más información.`
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envío
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#212121] p-6 rounded-xl border border-white/10 sticky top-24">
      <h3 className="text-2xl font-bold text-white mb-4">¿Interesado?</h3>
      <p className="text-white/70 mb-6">Completa el formulario y te contactaremos</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white/80 text-sm mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#121212] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#009B77] transition-colors"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-white/80 text-sm mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#121212] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#009B77] transition-colors"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label className="block text-white/80 text-sm mb-2">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#121212] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#009B77] transition-colors"
            placeholder="+34 600 000 000"
          />
        </div>

        <div>
          <label className="block text-white/80 text-sm mb-2">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-[#121212] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#009B77] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#009B77] text-[#121212] font-bold py-3 px-6 rounded-lg hover:bg-[#00b388] transition-colors"
        >
          Enviar Consulta
        </button>
      </form>
    </div>
  );
};
