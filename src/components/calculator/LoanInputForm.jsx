import { useState } from 'react';
import { DollarSign, Percent, Calendar } from 'lucide-react';

export default function LoanInputForm({ values, onChange }) {
  const rawLoanAmount = values?.loanAmount ?? 400000;
  const [displayValue, setDisplayValue] = useState(rawLoanAmount.toLocaleString());

  const handleLoanAmountChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, '');
    if (rawValue === '') {
      setDisplayValue('');
      onChange('loanAmount', 0);
      return;
    }
    const numericValue = Number(rawValue);
    if (!isNaN(numericValue)) {
      setDisplayValue(numericValue.toLocaleString());
      onChange('loanAmount', numericValue);
    }
  };

  return (
    <div className="bg-white rounded-xl border-2 border-blue-300 p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center justify-between">
        <span>Loan Parameters</span>
        <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-blue-300 rounded-md text-slate-700">Core Inputs</span>
      </h2>

      <div className="space-y-4">
        {/* Home Value / Loan Amount with Commas */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Loan Amount ($)
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              <DollarSign className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={displayValue}
              onChange={handleLoanAmountChange}
              onBlur={() => setDisplayValue(Number(rawLoanAmount).toLocaleString())}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border-2 border-blue-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Interest Rate (%)
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              <Percent className="w-4 h-4" />
            </span>
            <input
              type="number"
              step="0.1"
              value={values?.interestRate ?? 6.5}
              onChange={(e) => onChange('interestRate', Number(e.target.value))}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border-2 border-blue-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Loan Term - Expanded Options */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Loan Term (Years)
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
              <Calendar className="w-4 h-4" />
            </span>
            <select
              value={values?.loanTerm ?? 30}
              onChange={(e) => onChange('loanTerm', Number(e.target.value))}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border-2 border-blue-300 rounded-lg text-slate-900 font-semibold focus:outline-none focus:border-blue-500"
            >
              <option value={10}>10 Years</option>
              <option value={15}>15 Years</option>
              <option value={20}>20 Years</option>
              <option value={25}>25 Years</option>
              <option value={30}>30 Years</option>
              <option value={40}>40 Years</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}