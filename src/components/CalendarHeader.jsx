export default function CalendarHeader() {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <div className="text-[11px] font-bold tracking-widest text-[#b4985a] uppercase mb-2">
          Academic View
        </div>
        <h2 className="text-3xl font-black text-brand-dark tracking-tight">
          Weekly Conservatory Grid
        </h2>
      </div>

      <div className="flex bg-slate-100 rounded-lg p-1">
        <button className="px-4 py-1.5 text-sm font-medium text-slate-600 rounded-md hover:text-slate-900 transition-colors">
          Month
        </button>
        <button className="px-4 py-1.5 text-sm font-semibold text-brand-dark bg-white shadow-sm rounded-md transition-colors">
          Week
        </button>
        <button className="px-4 py-1.5 text-sm font-medium text-slate-600 rounded-md hover:text-slate-900 transition-colors">
          Day
        </button>
      </div>
    </div>
  );
}
