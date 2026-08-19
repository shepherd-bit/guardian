import { useState, useMemo } from 'react';
import Navbar from './components/layout/Navbar';
import LoanInputForm from './components/calculator/LoanInputForm';
import ExtraPaymentsPanel from './components/calculator/ExtraPaymentsPanel';
import PitiBreakdown from './components/calculator/PitiBreakdown';
import SummaryMetricsCards from './components/results/SummaryMetricsCards';
import AmortizationChart from './components/results/AmortizationChart';
import AmortizationTable from './components/results/AmortizationTable';
import RentVsBuyModule from './components/analysis/RentVsBuyModule';
import ScenarioComparisonTable from './components/analysis/ScenarioComparisonTable';

export default function App() {
  // 1. Central Loan State
  const [loanAmount, setLoanAmount] = useState(400000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30); // in years
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [homeInsurance, setHomeInsurance] = useState(1200); // annual
  const [extraPayment, setExtraPayment] = useState(0);

  // 2. Real-time Financial Calculations (useMemo for performance)
  const results = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;

    // Standard Monthly Principal & Interest (P&I) formula
    const monthlyPI =
      monthlyRate === 0
        ? loanAmount / totalPayments
        : (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
          (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const monthlyTax = (loanAmount * (propertyTaxRate / 100)) / 12;
    const monthlyIns = homeInsurance / 12;
    const totalMonthlyPayment = monthlyPI + monthlyTax + monthlyIns + extraPayment;

    // Approximate total interest over the life of the loan
    const totalPaid = monthlyPI * totalPayments;
    const totalInterest = Math.max(0, totalPaid - loanAmount);

    // Generate dynamic yearly balance array for the Chart & Table
    const yearlyBalances = [];
    let currentBalance = loanAmount;
    const effectiveMonthlyPrincipal = monthlyPI + extraPayment - (monthlyRate * loanAmount);

    for (let yr = 1; yr <= loanTerm; yr++) {
      // Approximate annual decay for smooth visualization
      currentBalance = Math.max(0, currentBalance - (effectiveMonthlyPrincipal * 12 * (yr * 0.03 + 0.8)));
      yearlyBalances.push({
        year: yr,
        balance: Math.round(currentBalance),
        payment: Math.round(totalMonthlyPayment),
        principal: Math.round(monthlyPI * 0.3 * 12),
        interest: Math.round(monthlyPI * 0.7 * 12),
      });
    }

    return {
      monthlyPI: Math.round(monthlyPI),
      monthlyTax: Math.round(monthlyTax),
      monthlyIns: Math.round(monthlyIns),
      totalMonthlyPayment: Math.round(totalMonthlyPayment),
      totalInterest: Math.round(totalInterest),
      yearlyBalances,
    };
  }, [loanAmount, interestRate, loanTerm, propertyTaxRate, homeInsurance, extraPayment]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Top Summary KPI Cards using Live Results */}
        <SummaryMetricsCards results={results} loanTerm={loanTerm} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Editable Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <LoanInputForm
              loanAmount={loanAmount}
              setLoanAmount={setLoanAmount}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
              loanTerm={loanTerm}
              setLoanTerm={setLoanTerm}
            />
            <ExtraPaymentsPanel
              extraPayment={extraPayment}
              setExtraPayment={setExtraPayment}
            />
            <PitiBreakdown results={results} />
          </div>

          {/* Right Column: Dynamic Visualizations & Tables */}
          <div className="lg:col-span-7 space-y-6">
            <AmortizationChart yearlyBalances={results.yearlyBalances} />
            <AmortizationTable yearlyBalances={results.yearlyBalances} />
            <RentVsBuyModule homePrice={loanAmount} />
            <ScenarioComparisonTable />
          </div>
        </div>
      </main>
    </div>
  );
}