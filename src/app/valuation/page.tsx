'use client';

import { useState } from 'react';
import { ValuationHero, ValuationForm, ValuationResult, ValuationFeatures, ValuationFAQ } from '@/features/valuation/components';
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

interface ValuationResultData {
    confidence: number;
    pricePerM2: number;
}

export default function ValuationPage() {
    const [showResult, setShowResult] = useState(false);
    const [formData, setFormData] = useState<ValuationFormData | null>(null);
    const [resultData, setResultData] = useState<ValuationResultData | null>(null);

    // Mock calculation function
    const calculateValuation = (data: ValuationFormData) => {
        // Base prices by property type (€/m²)
        const basePrices: Record<string, number> = {
            casa: 3500,
            piso: 4200,
            terreno: 1800,
            local: 5000,
            oficina: 4500,
            chalet: 3800,
        };

        const basePrice = basePrices[data.propertyType] || 3500;
        let calculatedPrice = basePrice * data.area;

        // Adjustments
        const conditionMultipliers: Record<string, number> = {
            excelente: 1.15,
            buen: 1.0,
            regular: 0.85,
            necesita: 0.65,
        };

        calculatedPrice *= conditionMultipliers[data.condition] || 1.0;

        // Year built adjustment
        const yearAdjustment = (new Date().getFullYear() - data.yearBuilt) * -100;
        calculatedPrice += yearAdjustment * data.area;

        // Bedrooms adjustment
        calculatedPrice += (data.bedrooms - 2) * 30000;

        // Amenities adjustment
        calculatedPrice += data.amenities.length * 15000;

        // Random variation for realism
        const variation = calculatedPrice * (Math.random() * 0.1 - 0.05);
        calculatedPrice += variation;

        // Calculate random values once and store them
        const randomConfidence = 85 + Math.random() * 10;
        const randomPricePerM2 = Math.round(4500 + Math.random() * 1000);

        setFormData(data);
        setResultData({
            confidence: randomConfidence,
            pricePerM2: randomPricePerM2,
        });
        setShowResult(true);
    };

    return (
        <div className="bg-[#121212] min-h-screen">
            {/* Hero Section */}
            <ValuationHero />

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-20">
                {showResult && formData ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-20"
                    >
                        <ValuationResult
                            data={{
                                estimatedPrice: Math.round(4500 * formData.area * (formData.bedrooms / 2)),
                                range: {
                                    min: Math.round(4500 * formData.area * (formData.bedrooms / 2) * 0.9),
                                    max: Math.round(4500 * formData.area * (formData.bedrooms / 2) * 1.1),
                                },
                                confidence: resultData?.confidence || 85,
                                pricePerM2: resultData?.pricePerM2 || 4500,
                                marketTrend: 'up',
                            }}
                            location={formData.location}
                        />

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            onClick={() => setShowResult(false)}
                            className="block mx-auto mt-12 px-8 py-3 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-colors"
                        >
                            Nueva Tasación
                        </motion.button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-20"
                    >
                        <ValuationForm onSubmit={calculateValuation} />
                    </motion.div>
                )}
            </div>

            {/* Features Section */}
            <ValuationFeatures />

            {/* FAQ Section */}
            <ValuationFAQ />

            {/* CTA Section */}
            <section className="py-20 px-4 bg-linear-to-r from-[#009B77]/20 via-transparent to-transparent border-t border-white/10">
                <div className="container mx-auto max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            ¿Necesitas una Tasación Profesional?
                        </h2>
                        <p className="text-white/60 text-lg mb-8">
                            Nuestro equipo de expertos está listo para proporcionarte una valoración oficial detallada
                        </p>
                        <button className="px-8 py-3 bg-[#009B77] text-white font-bold rounded-lg hover:bg-[#00b388] transition-colors">
                            Contactar Asesor
                        </button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
