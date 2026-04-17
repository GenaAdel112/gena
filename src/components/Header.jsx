import { Search, Bell, HelpCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-slate-50 border-b border-transparent">
      <div className="flex items-center gap-8 flex-1">
        <h1 className="text-xl font-black tracking-tight text-brand-blue">
          Digital Conservatory
        </h1>
        <div className="relative w-96 max-w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search events, students..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-500 hover:text-slate-700 transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <button className="text-slate-500 hover:text-slate-700 transition-colors">
          <HelpCircle className="h-5 w-5 fill-slate-400 text-slate-50" />
        </button>
        
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden md:block">
            <div className="text-sm font-semibold text-brand-blue">Prof. Sterling</div>
            <div className="text-[11px] text-slate-500">Administrator</div>
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-end justify-center pt-1">
            {/* Simple avatar placeholder */}
            <div className="w-6 h-6 bg-slate-400 rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
