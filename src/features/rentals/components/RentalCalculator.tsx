'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface RentalCalculatorProps {
    monthlyRent?: number;
}

export const RentalCalculator = ({ monthlyRent = 1200 }: RentalCalculatorProps) => {
    const [rent, setRent] = useState(monthlyRent);
    const [utilities, setUtilities] = useState(150);
    const [deposit, setDeposit] = useState(1); // months
    const [income, setIncome] = useState(3000);

    const totalMonthly = rent + utilities;
    const totalDeposit = rent * deposit;
    const affordabilityRatio = income > 0 ? (totalMonthly / income) * 100 : 0;
    const isAffordable = affordabilityRatio <= 30;

    return (
        <div className="space-y-4">
            {/* Monthly Rent */}
            <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                    Renta Mensual (€)
                </label>
                <input
                    type="number"
                    value={rent}
                    onChange={(e) => setRent(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
                />
            </div>

            {/* Utilities */}
            <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                    Servicios (€)
                </label>
                <input
                    type="number"
                    value={utilities}
                    onChange={(e) => setUtilities(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
                />
            </div>

            {/* Deposit */}
            <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                    Fianza (meses)
                </label>
                <select
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                >
                    <option value={1}>1 mes</option>
                    <option value={2}>2 meses</option>
                    <option value={3}>3 meses</option>
                </select>
            </div>

            {/* Income for Affordability */}
            <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                    Ingresos Mensuales (€)
                </label>
                <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:border-blue-500 focus:outline-none"
                />
            </div>

            {/* Results */}
            <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex justify-between">
                    <span className="text-white/70">Total mensual:</span>
                    <span className="text-white font-semibold">€{totalMonthly}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-white/70">Fianza total:</span>
                    <span className="text-white font-semibold">€{totalDeposit}</span>
                </div>

                {/* Affordability Indicator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-3 rounded-lg border ${
                        isAffordable
                            ? 'bg-green-500/10 border-green-500/30 text-green-400'
                            : 'bg-red-500/10 border-red-500/30 text-red-400'
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                            {isAffordable ? 'Asequible' : 'Poco asequible'}
                        </span>
                        <span className="text-sm">{affordabilityRatio.toFixed(1)}%</span>
                    </div>
                    <div className="text-xs mt-1 opacity-75">
                        {affordabilityRatio <= 30 ? 'Ideal: ≤30% de ingresos' : 'Considera opciones más económicas'}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};