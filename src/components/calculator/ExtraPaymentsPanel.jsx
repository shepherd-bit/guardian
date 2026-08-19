import { motion } from 'framer-motion';
import { PlusCircle, DollarSign } from 'lucide-react';

export default function ExtraPaymentsPanel({ values, onChange }) {
  const extraMonthly = values?.extraMonthly ?? 0;
  const extraYearly = values?.extraYearly ?? 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
      className="bg-white rounded-xl border-2 border-blue-300 p-6 shadow-sm mt-6"
    >
      <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center justify-between">
        <span>Extra Payments</span>
        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-blue-300 rounded-md text-slate-700">Optional</span>
      </h2>

      <div className="space-y-4">
        {/* Extra Monthly Payment */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Extra Monthly Payment ($)
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              <DollarSign className="w-4 h-4" />
            </span>
            <input
              type="number"
              value={extraMonthly}
              onChange={(e) => onChange('extraMonthly', Number(e.target.value))}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border-2 border-blue-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-blue-500"
              placeholder="0"
            />
          </div>
        </div>

        {/* Extra Yearly Payment */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Extra Yearly Payment ($)
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              <PlusCircle className="w-4 h-4" />
            </span>
            <input
              type="number"
              value={extraYearly}
              onChange={(e) => onChange('extraYearly', Number(e.target.value))}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border-2 border-blue-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-blue-500"
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}