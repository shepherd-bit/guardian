import { motion } from 'framer-motion';
import { PieChart, ShieldCheck, Home, FileText } from 'lucide-react';

export default function PitiBreakdown({ values, calculatedResults }) {
  const principalAndInterest = calculatedResults?.monthlyPI ?? 2528.27;
  const propertyTaxes = values?.propertyTaxes ?? 350;
  const homeInsurance = values?.homeInsurance ?? 150;
  const pmi = values?.pmi ?? 0;

  const totalPiti = principalAndInterest + propertyTaxes + homeInsurance + pmi;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
      className="bg-white rounded-xl border-2 border-blue-300 p-6 shadow-sm mt-6"
    >
      <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center justify-between">
        <span>Monthly Payment (PITI)</span>
        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-blue-300 rounded-md text-slate-700">
          ${Math.round(totalPiti).toLocaleString()}/mo
        </span>
      </h2>

      <div className="space-y-3">
        {/* Principal & Interest */}
        <div className="flex items-center justify-between p-3 bg-slate-50 border-2 border-blue-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <FileText className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-700 uppercase">Principal & Interest</p>
              <p className="text-sm font-semibold text-slate-900">Base loan payment</p>
            </div>
          </div>
          <span className="font-bold text-slate-900">${Math.round(principalAndInterest).toLocaleString()}</span>
        </div>

        {/* Property Taxes */}
        <div className="flex items-center justify-between p-3 bg-slate-50 border-2 border-blue-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="p-2 bg-red-100 text-red-600 rounded-lg">
              <Home className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-700 uppercase">Property Taxes</p>
              <p className="text-sm font-semibold text-slate-900">Estimated annual assessment</p>
            </div>
          </div>
          <span className="font-bold text-slate-900">${Number(propertyTaxes).toLocaleString()}</span>
        </div>

        {/* Home Insurance */}
        <div className="flex items-center justify-between p-3 bg-slate-50 border-2 border-blue-200 rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="p-2 bg-amber-100 text-amber-600 rounded-lg">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <div>
              <p className="text-xs font-bold text-slate-700 uppercase">Homeowners Insurance</p>
              <p className="text-sm font-semibold text-slate-900">Hazard and fire protection</p>
            </div>
          </div>
          <span className="font-bold text-slate-900">${Number(homeInsurance).toLocaleString()}</span>
        </div>

        {/* PMI (if applicable) */}
        {pmi > 0 && (
          <div className="flex items-center justify-between p-3 bg-slate-50 border-2 border-blue-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <PieChart className="w-4 h-4" />
              </span>
              <div>
                <p className="text-xs font-bold text-slate-700 uppercase">Mortgage Insurance (PMI)</p>
                <p className="text-sm font-semibold text-slate-900">Lender protection</p>
              </div>
            </div>
            <span className="font-bold text-slate-900">${Number(pmi).toLocaleString()}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}