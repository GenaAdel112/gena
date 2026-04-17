import { Building2 } from 'lucide-react';

const requests = [
  {
    id: 1,
    name: 'Elena Vasquez',
    role: 'Cello, Performance III',
    room: 'Studio 12B',
    time: 'Fri, 16 Sep • 14:00 - 16:00',
    avatarColor: 'bg-teal-500' // Placeholder for avatar image styling
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Composition Dept.',
    room: 'Steinway Hall',
    time: 'Sat, 17 Sep • 10:00 - 12:00',
    avatarColor: 'bg-slate-500' // Placeholder for avatar image styling
  }
];

export default function RightSidebar() {
  return (
    <div className="w-80 bg-slate-50 h-screen overflow-y-auto border-l border-slate-200 p-8 flex flex-col gap-6 fixed right-0 top-0">
      
      {/* Pending Requests Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-800 leading-tight">
          Pending<br/>Requests
        </h3>
        <div className="bg-brand-goldBg text-brand-goldBorder text-[10px] font-bold px-2 py-1 rounded">
          4 NEW
        </div>
      </div>

      {/* Requests */}
      <div className="flex flex-col gap-4">
        {requests.map(req => (
          <div key={req.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-3">
              <div className={`h-10 w-10 rounded-lg ${req.avatarColor} overflow-hidden shadow-inner flex items-end justify-center pt-1 border border-slate-200`}>
                 <div className="w-6 h-6 bg-white/20 rounded-t-full" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">{req.name}</div>
                <div className="text-[10px] text-slate-500">{req.role}</div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-2 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="h-3 w-3 text-slate-400" />
                <span className="text-[11px] font-semibold text-slate-700">{req.room}</span>
              </div>
              <div className="text-[10px] text-slate-500 ml-5">{req.time}</div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button className="bg-brand-dark hover:bg-slate-800 text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                Approve
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 text-xs font-semibold py-2 rounded-lg transition-colors">
                Deny
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
        <button className="text-[11px] font-bold tracking-widest text-slate-500 hover:text-slate-800 uppercase transition-colors">
          View All Requests
        </button>
      </div>

      {/* Widgets Area */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {/* Usage Widget */}
        <div className="bg-brand-dark rounded-xl p-5 text-white flex flex-col justify-between h-32">
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Usage</div>
          <div>
            <div className="text-3xl font-black mb-2">84%</div>
            <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[84%] rounded-full" />
            </div>
          </div>
        </div>

        {/* Halls Widget */}
        <div className="bg-slate-200/60 rounded-xl p-5 flex flex-col justify-between h-32">
          <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500">Halls</div>
          <div>
            <div className="text-3xl font-black text-brand-dark">12/14</div>
            <div className="text-[10px] text-slate-500 mt-1">Currently active</div>
          </div>
        </div>
      </div>

      {/* Facility Update */}
      <div className="bg-[#2a303c] rounded-xl p-5 text-white mt-auto shadow-md">
        <h4 className="font-bold mb-2">Facility Update</h4>
        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          West Wing piano maintenance scheduled for tomorrow morning.
        </p>
        <button className="text-[10px] font-bold tracking-widest text-[#b4985a] hover:text-[#d4b87a] transition-colors uppercase flex items-center gap-1">
          View Schedule <span className="text-lg leading-none">&rsaquo;</span>
        </button>
      </div>

    </div>
  );
}
