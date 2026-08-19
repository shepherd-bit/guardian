import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoanInputForm from './components/calculator/LoanInputForm';
import ExtraPaymentsPanel from './components/calculator/ExtraPaymentsPanel';
import PitiBreakdown from './components/calculator/PitiBreakdown';
import SummaryMetricsCards from './components/results/SummaryMetricsCards';
import AmortizationChart from './components/results/AmortizationChart';
import AmortizationTable from './components/results/AmortizationTable';
import RentVsBuyModule from './components/analysis/RentVsBuyModule';
import ScenarioComparisonTable from './components/analysis/ScenarioComparisonTable';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-['Inter']">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        <SummaryMetricsCards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6 lg:col-span-1">
            <LoanInputForm />
            <ExtraPaymentsPanel />
            <PitiBreakdown />
          </div>
          <div className="space-y-6 lg:col-span-2">
            <AmortizationChart />
            <AmortizationTable />
          </div>
        </div>
        <RentVsBuyModule />
        <ScenarioComparisonTable />
      </main>
      <Footer />
    </div>
  );
}