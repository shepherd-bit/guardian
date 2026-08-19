import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      align: 'end',
      labels: {
        boxWidth: 10,
        font: { size: 11, family: 'Inter', weight: '600' },
        color: '#475569',
      },
    },
    tooltip: {
      backgroundColor: '#1e293b',
      titleFont: { size: 12, family: 'Inter' },
      bodyFont: { size: 11, family: 'Inter' },
      padding: 8,
      cornerRadius: 6,
      callbacks: {
        title: function (context) {
          return `Year ${context[0].label}`;
        },
        label: function (context) {
          return ` Balance: $${context.raw.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: '#f8fafc',
      },
      title: {
        display: true,
        text: 'Time (Years)',
        color: '#475569',
        font: { size: 11, family: 'Inter', weight: '600' },
      },
      ticks: {
        color: '#64748b',
        font: { size: 10, family: 'Inter' },
        callback: function (value, index) {
          const num = index + 1;
          return num === 1 || num % 5 === 0 ? num : '';
        },
        maxRotation: 0,
        minRotation: 0,
      },
    },
    y: {
      grid: { color: '#f1f5f9' },
      title: {
        display: true,
        text: 'Loan Balance ($)',
        color: '#475569',
        font: { size: 11, family: 'Inter', weight: '600' },
      },
      ticks: {
        color: '#64748b',
        font: { size: 10, family: 'Inter' },
        callback: function (value) {
          return `$${(value / 1000).toFixed(0)}k`;
        },
      },
    },
  },
};

export default function AmortizationChart({ yearlyBalances = [] }) {
  // Map dynamic yearlyBalances to Chart.js format
  const chartData = {
    labels: yearlyBalances.map((item) => `${item.year}`),
    datasets: [
      {
        fill: true,
        label: 'Remaining Balance',
        data: yearlyBalances.map((item) => item.balance),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(254, 240, 138, 0.4)',
        borderWidth: 2,
        pointRadius: 2,
        pointHoverRadius: 4,
        pointBackgroundColor: '#2563eb',
        tension: 0.2,
      },
    ],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl border-2 border-blue-300 p-5 shadow-sm mt-6"
    >
      <h2 className="text-base font-bold text-slate-900 mb-3">Balance Decay Over Time</h2>
      <div className="h-[260px] w-full">
        <Line data={chartData} options={options} />
      </div>
    </motion.div>
  );
}