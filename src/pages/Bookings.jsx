import React from 'react';
import { Clock, CheckCircle2, AlertCircle, XCircle, MoreVertical } from 'lucide-react';

const myBookings = [
  { id: 1, hall: 'Grand Auditorium A', date: 'Oct 24, 2024', time: '09:00 AM - 11:00 AM', status: 'Confirmed', instructor: 'Prof. Sterling', department: 'Music Theory' },
  { id: 2, hall: 'Seminar Room 102', date: 'Oct 25, 2024', time: '02:00 PM - 04:00 PM', status: 'Pending', instructor: 'Dr. Aris', department: 'Acoustics' },
  { id: 3, hall: 'Lab 3', date: 'Oct 26, 2024', time: '10:00 AM - 12:00 PM', status: 'Rejected', instructor: 'Prof. Sterling', department: 'Digital Arts' },
  { id: 4, hall: 'Faculty Hall', date: 'Oct 27, 2024', time: '01:00 PM - 03:00 PM', status: 'Confirmed', instructor: 'Prof. Sterling', department: 'Administration' },
];

const Bookings = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-serif text-[#06142e] mb-1">My Bookings</h2>
        <p className="text-sm text-slate-500">Track and manage your scheduled sessions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total', value: 12, icon: Clock, color: 'blue' },
          { label: 'Confirmed', value: 8, icon: CheckCircle2, color: 'green' },
          { label: 'Pending', value: 3, icon: AlertCircle, color: 'orange' },
          { label: 'Rejected', value: 1, icon: XCircle, color: 'red' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
            </div>
            <div className={`p-3 bg-${stat.color}-50 text-${stat.color}-500 rounded-lg`}>
              <stat.icon size={20} />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hall / Room</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date & Time</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {myBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{booking.hall}</div>
                    <div className="text-xs text-slate-400">{booking.instructor}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600">{booking.date}</div>
                    <div className="text-xs text-slate-400">{booking.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase">
                      {booking.department}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 text-xs font-bold ${
                      booking.status === 'Confirmed' ? 'text-green-600' : 
                      booking.status === 'Pending' ? 'text-orange-500' : 'text-red-500'
                    }`}>
                      <div className={`h-1.5 w-1.5 rounded-full ${
                        booking.status === 'Confirmed' ? 'bg-green-600' : 
                        booking.status === 'Pending' ? 'bg-orange-500' : 'bg-red-500'
                      }`} />
                      {booking.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/30 flex justify-between items-center">
            <p className="text-xs text-slate-400 font-medium whitespace-nowrap">Showing 4 of 12 bookings</p>
            <div className="flex gap-2">
               <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50">Prev</button>
               <button className="px-3 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600 hover:bg-slate-50">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
