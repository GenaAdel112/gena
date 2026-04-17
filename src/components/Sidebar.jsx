import { 
  GraduationCap, 
  Plus, 
  LayoutDashboard, 
  CalendarDays, 
  BookOpen, 
  Building2, 
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Calendar', icon: CalendarDays, path: '/dashboard/calendar' },
  { name: 'Bookings', icon: BookOpen, path: '/dashboard/bookings' },
  { name: 'Halls', icon: Building2, path: '/dashboard/halls' },
  { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6 pb-8">
        <div className="flex items-center gap-3 text-slate-800 font-bold text-xl">
          <div className="bg-brand-dark rounded p-2">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="leading-tight text-slate-900">Academic Hall</div>
            <div className="text-[10px] font-normal tracking-widest text-slate-500 uppercase mt-0.5">Conservatory System</div>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <button className="w-full bg-brand-dark hover:bg-slate-800 text-white flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium transition-colors">
          <Plus className="h-5 w-5" />
          New Booking
        </button>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              isActive 
                ? 'bg-white text-brand-blue shadow-sm border border-slate-100 relative' 
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute left-0 top-2 bottom-2 w-1 bg-brand-blue rounded-r-full" />
                )}
                <item.icon className="h-5 w-5" />
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 space-y-1 mb-4 border-t border-slate-200">
        <NavLink to="/dashboard/support" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
          <HelpCircle className="h-5 w-5" />
          Support
        </NavLink>
        <NavLink to="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
          <LogOut className="h-5 w-5" />
          Logout
        </NavLink>
      </div>
    </aside>
  );
}
