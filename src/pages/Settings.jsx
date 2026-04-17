import React from 'react';
import { User, Shield, Bell, Globe, Mail, Lock } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-3xl font-serif text-[#06142e] mb-1">Account Settings</h2>
        <p className="text-sm text-slate-500">Manage your profile, security, and institutional preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-1">
          <nav className="space-y-1">
            {[
              { label: 'Profile Info', icon: User, active: true },
              { label: 'Security', icon: Shield },
              { label: 'Notifications', icon: Bell },
              { label: 'Language', icon: Globe },
            ].map((item) => (
              <button 
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  item.active ? 'bg-[#06142e] text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm space-y-6">
            <div className="flex items-center gap-6 pb-6 border-b border-slate-50">
              <div className="h-20 w-20 rounded-full bg-slate-100 border-4 border-slate-50 flex items-center justify-center text-slate-300">
                <User size={40} />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg">Prof. Sterling</h4>
                <p className="text-sm text-slate-500">Music Theory Department</p>
                <button className="mt-2 text-xs font-bold text-blue-600 hover:underline uppercase tracking-wider">Change Avatar</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                 <div className="relative">
                   <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                   <input type="text" defaultValue="Sterling Archer" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent rounded-lg text-sm focus:bg-white focus:border-slate-200 focus:outline-none transition-all" />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Employee ID</label>
                 <div className="relative">
                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                   <input type="text" defaultValue="AAST-99238" disabled className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-transparent rounded-lg text-sm text-slate-500 cursor-not-allowed" />
                 </div>
               </div>
               <div className="space-y-2 md:col-span-2">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                 <div className="relative">
                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                   <input type="email" defaultValue="s.archer@aastmt.edu" className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-transparent rounded-lg text-sm focus:bg-white focus:border-slate-200 focus:outline-none transition-all" />
                 </div>
               </div>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button className="px-6 py-2.5 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">Cancel</button>
              <button className="px-6 py-2.5 bg-[#06142e] text-white text-sm font-bold rounded-lg hover:bg-[#0a1e45] transition-colors uppercase tracking-widest shadow-lg shadow-blue-900/10">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
