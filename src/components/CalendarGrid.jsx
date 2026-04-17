import EventCard from './EventCard';

const days = [
  { name: 'MON', date: '12' },
  { name: 'TUE', date: '13' },
  { name: 'WED', date: '14' },
  { name: 'THU', date: '15' },
  { name: 'FRI', date: '16' },
  { name: 'SAT', date: '17' },
  { name: 'SUN', date: '18' },
];

const times = ['08:00', '09:00', '10:00', '11:00'];

const events = [
  { day: 0, timeIndex: 0, title: 'SYMPHONY REHEARSAL', subtitle: 'Grand Hall A', variant: 'blue' },
  { day: 1, timeIndex: 1, title: 'MASTERCLASS: BACH', subtitle: 'Main Auditorium', variant: 'gold' },
  { day: 2, timeIndex: 2, title: 'THEORY SEMINAR', subtitle: 'Library Wing', variant: 'blue' },
  { day: 3, timeIndex: 0, title: 'CHAMBER MUSIC', subtitle: 'Recital Room 4', variant: 'green' },
  { day: 4, timeIndex: 3, title: 'OPEN PRACTICE', subtitle: 'East Hall', variant: 'green' },
  { day: 5, timeIndex: 3, title: 'GUEST RECITAL', subtitle: 'Grand Hall A', variant: 'gold' },
];

export default function CalendarGrid() {
  return (
    <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden mb-6">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="min-w-[800px]">
          {/* Header Row */}
          <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-slate-100">
            <div className="p-4" /> {/* Empty corner */}
            {days.map((day, i) => (
              <div key={i} className="py-4 text-center border-l border-slate-100 first:border-l-0">
                <div className="text-[10px] font-bold text-slate-400 tracking-wider mb-0.5">{day.name}</div>
                <div className="text-xl font-bold text-slate-800">{day.date}</div>
              </div>
            ))}
          </div>

          {/* Time Rows */}
          {times.map((time, timeIdx) => (
            <div key={time} className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-slate-100 last:border-b-0 min-h-[100px]">
              {/* Time Label */}
              <div className="p-4 text-xs font-semibold text-slate-400 text-center border-r border-slate-100">
                {time}
              </div>

              {/* Day Cells */}
              {days.map((_, dayIdx) => {
                const event = events.find(e => e.day === dayIdx && e.timeIndex === timeIdx);
                
                return (
                  <div key={dayIdx} className="border-r border-slate-100 last:border-r-0 relative">
                    {event ? (
                      <EventCard 
                        title={event.title} 
                        subtitle={event.subtitle} 
                        variant={event.variant} 
                        className="absolute inset-x-2 inset-y-1"
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="p-4 flex flex-wrap items-center gap-6 border-t border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-blueBorder"></div>
          <span className="text-xs font-semibold text-slate-700">Fixed Lectures</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-greenBorder"></div>
          <span className="text-xs font-semibold text-slate-700">Multi-purpose Halls</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-goldBorder"></div>
          <span className="text-xs font-semibold text-slate-700">Exceptional Bookings</span>
        </div>
      </div>
    </div>
  );
}
