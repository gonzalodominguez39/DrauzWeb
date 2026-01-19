'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ValuationFormData {
    location: string;
    propertyType: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    yearBuilt: number;
    condition: string;
    amenities: string[];
}

interface ValuationFormProps {
    onSubmit?: (data: ValuationFormData) => void;
}

export const ValuationForm = ({ onSubmit }: ValuationFormProps) => {
    const [formData, setFormData] = useState<ValuationFormData>({
        location: '',
        propertyType: 'casa',
        bedrooms: 2,
        bathrooms: 1,
        area: 100,
        yearBuilt: 2010,
        condition: 'buen',
        amenities: [],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(formData);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'bedrooms' || name === 'bathrooms' || name === 'area' || name === 'yearBuilt'
                ? Number(value)
                : value
        }));
    };

    const handleAmenitiesChange = (amenity: string) => {
        setFormData(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }));
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0a0a0a] border border-[#009B77]/20 rounded-3xl p-8 max-w-2xl mx-auto"
        >
            <h2 className="text-2xl font-bold text-white mb-8">Información de la Propiedad</h2>

            {/* Location */}
            <div className="mb-6">
                <label className="block text-white/80 font-medium mb-2">Ubicación</label>
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Barrio, ciudad..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-[#009B77] outline-none transition-colors"
                />
            </div>

            {/* Property Type */}
            <div className="mb-6">
                <label className="block text-white/80 font-medium mb-2">Tipo de Propiedad</label>
                <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#009B77] outline-none transition-colors"
                >
                    <option value="casa">Casa Unifamiliar</option>
                    <option value="piso">Piso/Apartamento</option>
                    <option value="terreno">Terreno</option>
                    <option value="local">Local Comercial</option>
                    <option value="oficina">Oficina</option>
                    <option value="chalet">Chalet Adosado</option>
                </select>
            </div>

            {/* Grid 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Bedrooms */}
                <div>
                    <label className="block text-white/80 font-medium mb-2">Habitaciones</label>
                    <input
                        type="number"
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleInputChange}
                        min="0"
                        max="10"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#009B77] outline-none transition-colors"
                    />
                </div>

                {/* Bathrooms */}
                <div>
                    <label className="block text-white/80 font-medium mb-2">Baños</label>
                    <input
                        type="number"
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                        min="0"
                        max="10"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#009B77] outline-none transition-colors"
                    />
                </div>

                {/* Area */}
                <div>
                    <label className="block text-white/80 font-medium mb-2">Área (m²)</label>
                    <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#009B77] outline-none transition-colors"
                    />
                </div>

                {/* Year Built */}
                <div>
                    <label className="block text-white/80 font-medium mb-2">Año de Construcción</label>
                    <input
                        type="number"
                        name="yearBuilt"
                        value={formData.yearBuilt}
                        onChange={handleInputChange}
                        min="1900"
                        max={new Date().getFullYear()}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#009B77] outline-none transition-colors"
                    />
                </div>
            </div>

            {/* Condition */}
            <div className="mb-6">
                <label className="block text-white/80 font-medium mb-2">Estado General</label>
                <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#009B77] outline-none transition-colors"
                >
                    <option value="excelente">Excelente</option>
                    <option value="buen">Buen Estado</option>
                    <option value="regular">Regular</option>
                    <option value="necesita">Necesita Reforma</option>
                </select>
            </div>

            {/* Amenities */}
            <div className="mb-8">
                <label className="block text-white/80 font-medium mb-4">Características Adicionales</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Jardín', 'Piscina', 'Garaje', 'Terraza', 'Ascensor', 'Aire Acondicionado'].map((amenity) => (
                        <motion.button
                            key={amenity}
                            type="button"
                            onClick={() => handleAmenitiesChange(amenity)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${formData.amenities.includes(amenity)
                                ? 'bg-[#009B77] text-white border-[#009B77]'
                                : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30'
                                }`}
                        >
                            {amenity}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Submit Button */}
            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#009B77] to-[#00d9a5] rounded-lg font-bold text-[#121212] text-lg hover:shadow-lg hover:shadow-[#009B77]/50 transition-all duration-300"
            >
                Obtener Tasación
            </motion.button>
        </motion.form>
    );
};
