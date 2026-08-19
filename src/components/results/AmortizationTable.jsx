import { motion } from 'framer-motion';

const mockTableData = [
  { period: 1, payment: 3028, principal: 828, interest: 2200, balance: 399172 },
  { period: 2, payment: 3028, principal: 832, interest: 2196, balance: 398340 },
  { period: 3, payment: 3028, principal: 837, interest: 2191, balance: 397503 },
  { period: 4, payment: 3028, principal: 841, interest: 2187, balance: 396662 },
  { period: 5, payment: 3028, principal: 846, interest: 2182, balance: 395816 },
];

export default function AmortizationTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-xl border-2 border-blue-300 p-6 shadow-sm mt-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-slate-900">Amortization Schedule</h2>
        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
          First 5 Periods (Mock Data)
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-blue-300 text-slate-700 text-xs uppercase tracking-wider">
              <th className="pb-3 px-3 font-bold">Period</th>
              <th className="pb-3 px-3 font-bold">Payment</th>
              <th className="pb-3 px-3 font-bold">Principal</th>
              <th className="pb-3 px-3 font-bold">Interest</th>
              <th className="pb-3 px-3 font-bold">Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockTableData.map((row) => (
              <tr key={row.period} className="hover:bg-slate-50 transition-colors text-sm">
                <td className="py-3 px-3 font-semibold text-slate-900">Yr {row.period}</td>
                <td className="py-3 px-3 text-slate-600">${row.payment.toLocaleString()}</td>
                <td className="py-3 px-3 text-emerald-600 font-medium">${row.principal.toLocaleString()}</td>
                <td className="py-3 px-3 text-rose-500 font-medium">${row.interest.toLocaleString()}</td>
                <td className="py-3 px-3 font-bold text-blue-600">${row.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}