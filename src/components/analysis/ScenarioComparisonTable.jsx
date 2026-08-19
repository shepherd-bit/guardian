import { motion } from 'framer-motion';
import { Layers, CheckCircle2 } from 'lucide-react';

const scenarios = [
  {
    name: 'Standard 30-Yr Fixed',
    rate: '6.5%',
    monthlyPayment: '$2,528',
    totalInterest: '$510,120',
    payoffTime: '30 Years',
    recommended: false,
  },
  {
    name: '15-Yr Accelerated',
    rate: '6.0%',
    monthlyPayment: '$3,375',
    totalInterest: '$207,450',
    payoffTime: '15 Years',
    recommended: true,
  },
  {
    name: 'Custom Extra Principal',
    rate: '6.5%',
    monthlyPayment: '$2,828',
    totalInterest: '$382,400',
    payoffTime: '22 Years',
    recommended: false,
  },
];

export default function ScenarioComparisonTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white rounded-xl border-2 border-blue-300 p-6 shadow-sm mt-6"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">Scenario Comparison Matrix</h2>
            <p className="text-xs text-slate-500">Side-by-side evaluation of loan strategies</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          3 Active Scenarios
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-blue-300 text-slate-700 text-xs uppercase tracking-wider">
              <th className="pb-3 px-3 font-bold">Strategy</th>
              <th className="pb-3 px-3 font-bold">Interest Rate</th>
              <th className="pb-3 px-3 font-bold">Monthly Payment</th>
              <th className="pb-3 px-3 font-bold">Total Interest</th>
              <th className="pb-3 px-3 font-bold">Payoff Horizon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {scenarios.map((item, idx) => (
              <tr 
                key={idx} 
                className={`transition-colors text-sm ${item.recommended ? 'bg-blue-50/50 hover:bg-blue-50' : 'hover:bg-slate-50'}`}
              >
                <td className="py-3.5 px-3 font-semibold text-slate-900 flex items-center space-x-2">
                  <span>{item.name}</span>
                  {item.recommended && (
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full border border-blue-200">
                      <CheckCircle2 className="w-3 h-3 text-blue-600" />
                      <span>Best Value</span>
                    </span>
                  )}
                </td>
                <td className="py-3.5 px-3 text-slate-600">{item.rate}</td>
                <td className="py-3.5 px-3 font-bold text-slate-900">{item.monthlyPayment}</td>
                <td className="py-3.5 px-3 text-rose-500 font-medium">{item.totalInterest}</td>
                <td className="py-3.5 px-3 text-blue-600 font-semibold">{item.payoffTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}