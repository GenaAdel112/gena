import React from 'react';
import { LayoutDashboard, Users, Building2, Calendar as CalendarIcon, ArrowUpRight, Clock } from 'lucide-react';

const stats = [
  { label: 'Total Halls', value: '24', icon: Building2, color: 'blue', change: '+2 new' },
  { label: 'Active Sessions', value: '18', icon: CalendarIcon, color: 'green', change: 'Current' },
  { label: 'Students', value: '1,240', icon: Users, color: 'purple', change: '+12% vs last month' },
  { label: 'Pending Requests', value: '5', icon: Clock, color: 'orange', change: 'Requires action' },
];

const upcomingSessions = [
  { id: 1, hall: 'Grand Auditorium A', subject: 'Music Theory 101', time: '10:30 AM', instructor: 'Prof. Sterling' },
  { id: 2, hall: 'Room 204', subject: 'Classical Harmony', time: '12:00 PM', instructor: 'Dr. Aris' },
  { id: 3, hall: 'Studio 1', subject: 'Digital Composition', time: '02:30 PM', instructor: 'Prof. Sterling' },
];

const Overview = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-serif text-[#06142e] mb-1">Academic Overview</h2>
          <p className="text-sm text-slate-500">Welcome back, Prof. Sterling. Here is what is happening today.</p>
        </div>
        <button className="bg-[#06142e] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-[#0a1e45] transition-colors shadow-lg shadow-blue-900/10">
          Export Report <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 bg-${stat.color}-50 text-${stat.color}-600 rounded-lg`}>
                <stat.icon size={22} />
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded ${
                stat.color === 'green' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400'
              }`}>
                {stat.change}
              </span>
            </div>
            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</h4>
            <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
            <h3 className="font-bold text-slate-800 text-sm">Today's Detailed Schedule</h3>
            <button className="text-xs font-bold text-blue-600 hover:underline">View Full Calendar</button>
          </div>
          <div className="p-6">
             <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="flex items-center gap-4 p-4 rounded-lg border border-slate-50 hover:bg-slate-50 transition-colors">
                    <div className="w-16 text-center">
                      <div className="text-sm font-bold text-[#06142e]">{session.time}</div>
                      <div className="text-[10px] text-slate-400 uppercase">Start</div>
                    </div>
                    <div className="h-10 w-px bg-slate-100"></div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-800">{session.subject}</div>
                      <div className="text-xs text-slate-500">{session.hall} • {session.instructor}</div>
                    </div>
                    <button className="px-3 py-1.5 text-[10px] font-bold border border-slate-200 rounded hover:bg-white text-slate-600">Details</button>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 space-y-6">
           <h3 className="font-bold text-slate-800 text-sm border-b border-slate-50 pb-4">Facility Status</h3>
           <div className="space-y-5">
              {[
                { label: 'Building A (Main)', status: 'Active', load: 85 },
                { label: 'South Conservatory', status: 'Moderate', load: 45 },
                { label: 'North Labs', status: 'Maintenance', load: 0 },
              ].map((building) => (
                <div key={building.label} className="space-y-2">
                   <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-600">{building.label}</span>
                      <span className="text-slate-400">{building.load}% Capacity</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${building.load > 70 ? 'bg-red-400' : 'bg-blue-400'}`} 
                        style={{ width: `${building.load}%` }} 
                      />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
