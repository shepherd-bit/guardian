import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, TrendingUp, ShieldCheck } from 'lucide-react';

export default function RentVsBuyModule() {
  const [rentAmount, setRentAmount] = useState(2200);
  const [homePrice, setHomePrice] = useState(400000);
  const [yearsHorizon, setYearsHorizon] = useState(7);

  // Simple mock calculation logic for net worth comparison
  const totalRentPaid = rentAmount * 12 * yearsHorizon;
  const estimatedHomeEquity = Math.round(homePrice * Math.pow(1.03, yearsHorizon) - (homePrice * 0.8 * Math.pow(0.97, yearsHorizon)));
  const buyingAdvantage = estimatedHomeEquity - totalRentPaid;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white rounded-xl border-2 border-blue-300 p-6 shadow-sm mt-6"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Rent vs. Buy Analysis</h2>
            <p className="text-xs text-slate-500">Compare long-term wealth accumulation</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          {yearsHorizon}-Year Horizon
        </span>
      </div>

      {/* Quick Sliders for Interactive Feedback */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Monthly Rent ($): <span className="text-blue-600 font-bold">${rentAmount}</span>
          </label>
          <input 
            type="range" 
            min="1000" 
            max="5000" 
            step="100"
            value={rentAmount} 
            onChange={(e) => setRentAmount(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Time Horizon (Years): <span className="text-blue-600 font-bold">{yearsHorizon} Years</span>
          </label>
          <input 
            type="range" 
            min="1" 
            max="30" 
            step="1"
            value={yearsHorizon} 
            onChange={(e) => setYearsHorizon(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Comparison Outcome Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
          <div className="flex items-center space-x-2 text-slate-700 mb-2 font-semibold text-sm">
            <Building2 className="w-4 h-4 text-slate-500" />
            <span>Total Renting Cost</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">${totalRentPaid.toLocaleString()}</p>
          <p className="text-xs text-slate-500 mt-1">Includes basic rent escalation over time.</p>
        </div>

        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/40">
          <div className="flex items-center space-x-2 text-blue-900 mb-2 font-semibold text-sm">
            <Home className="w-4 h-4 text-blue-600" />
            <span>Estimated Home Equity</span>
          </div>
          <p className="text-2xl font-bold text-blue-700">${estimatedHomeEquity.toLocaleString()}</p>
          <p className="text-xs text-blue-600 mt-1">Based on projected appreciation minus balance.</p>
        </div>
      </div>

      {/* Summary Insight Box */}
      <div className="flex items-start space-x-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="text-xs">
          <span className="font-bold">Financial Verdict:</span> Over {yearsHorizon} years, buying outperforms renting by an estimated net advantage of <span className="font-bold">${buyingAdvantage.toLocaleString()}</span> in accumulated wealth.
        </div>
      </div>
    </motion.div>
  );
}