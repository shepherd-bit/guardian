export default function Navbar() {
  return (
    <header className="border-b-2 border-slate-800 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo and Branding */}
        <div className="flex items-center space-x-3">
          <div className="flex text-2xl font-extrabold tracking-tight select-none">
            <span className="text-blue-600">G</span>
            <span className="text-red-500">u</span>
            <span className="text-amber-500">a</span>
            <span className="text-blue-600">r</span>
            <span className="text-emerald-600">d</span>
            <span className="text-red-500">i</span>
            <span className="text-blue-600">a</span>
            <span className="text-emerald-600">n</span>
          </div>
        </div>

        {/* Right Nav Badge with dark distinct border and soft gray shadow */}
        <div className="flex items-center space-x-2 text-xs font-semibold bg-slate-50 text-slate-900 px-3.5 py-2 rounded-lg border-2 border-slate-800 shadow-sm">
          <span>Advanced Mortgage Suite</span>
        </div>

      </div>
    </header>
  );
}