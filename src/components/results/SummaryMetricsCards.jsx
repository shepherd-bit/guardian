import { motion } from 'framer-motion';
import { DollarSign, Percent, Calendar, ShieldAlert } from 'lucide-react';

const metrics = [
  {
    title: 'Monthly PITI Payment',
    value: '$3,028',
    subtitle: 'Principal, Interest, Taxes & Ins.',
    icon: DollarSign,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Total Loan Amount',
    value: '$400,000',
    subtitle: 'Base loan after down payment',
    icon: Percent,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    title: 'Payoff Horizon',
    value: '30 Years',
    subtitle: 'Standard amortization schedule',
    icon: Calendar,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    title: 'Total Interest Payable',
    value: '$510,120',
    subtitle: 'Estimated over full term',
    icon: ShieldAlert,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
];

export default function SummaryMetricsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-xl border-2 border-blue-300 p-5 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {item.title}
              </span>
              <div className={`p-2 rounded-lg ${item.bgColor} ${item.color}`}>
                <IconComponent className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {item.subtitle}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}