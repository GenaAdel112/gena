import React from 'react';
import { Search, Filter, MapPin, Users, Calendar } from 'lucide-react';

const hallsList = [
  { id: 1, name: 'Grand Auditorium A', building: 'Building 1', capacity: 500, status: 'Available', type: 'Lecture Hall' },
  { id: 2, name: 'Seminar Room 102', building: 'Building B', capacity: 50, status: 'Occupied', type: 'Meeting Room' },
  { id: 3, name: 'Computer Lab 3', building: 'South Wing', capacity: 30, status: 'Maintenance', type: 'Laboratory' },
  { id: 4, name: 'Faculty Hall', building: 'Main Office', capacity: 100, status: 'Available', type: 'Conference' },
  { id: 5, name: 'Music Studio 1', building: 'Conservatory', capacity: 15, status: 'Booked', type: 'Studio' },
];

const Halls = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-serif text-[#06142e] mb-1">Academic Halls</h2>
          <p className="text-sm text-slate-500">Manage and explore all available room resources.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search halls..." 
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#06142e]/10 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hallsList.map((hall) => (
          <div key={hall.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
            <div className="h-32 bg-slate-100 relative group-hover:bg-slate-200 transition-colors">
               <Building2 size={48} className="absolute inset-0 m-auto text-slate-300 group-hover:scale-110 transition-transform" />
               <div className={`absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                 hall.status === 'Available' ? 'bg-green-100 text-green-700' : 
                 hall.status === 'Occupied' ? 'bg-red-100 text-red-700' :
                 hall.status === 'Maintenance' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
               }`}>
                 {hall.status}
               </div>
            </div>
            <div className="p-5">
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{hall.type}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">{hall.name}</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <MapPin size={16} /> {hall.building}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <Users size={16} /> {hall.capacity} Seats
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <button className="flex-1 py-2 bg-[#06142e] text-white text-xs font-bold rounded hover:bg-[#0a1e45] transition-colors">
                  BOOK NOW
                </button>
                <button className="px-3 py-2 border border-slate-200 text-slate-400 rounded hover:bg-slate-50 transition-colors">
                  <Calendar size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simple icon wrapper since we need Building2
const Building2 = ({...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 22V4c0-.5.2-1 .6-1.4.4-.4.9-.6 1.4-.6h8c.5 0 1 .2 1.4.6.4.4.6.9.6 1.4v18"/><path d="M6 18h12"/><path d="M10 22v-4h4v4"/><path d="M9 7h1"/><path d="M9 11h1"/><path d="M9 15h1"/><path d="M14 7h1"/><path d="M14 11h1"/><path d="M14 15h1"/></svg>;

export default Halls;
