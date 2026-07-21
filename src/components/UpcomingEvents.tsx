import React from 'react';
import { EVENTS_DATA } from '../data/mockData';
import { EventItem } from '../types';
import { MapPin, Clock } from 'lucide-react';

interface UpcomingEventsProps {
  onSelectEvent: (event: EventItem) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ onSelectEvent }) => {
  const featuredEvent = EVENTS_DATA.find((e) => e.isFeatured) || EVENTS_DATA[0];
  const listEvents = EVENTS_DATA.filter((e) => !e.isFeatured);

  return (
    <section className="py-16 lg:py-24 bg-white" id="events">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-6 h-4 text-[#E5533D]" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 14C8 2 16 2 22 14" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Upcoming events
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Join our upcoming{' '}
            <span className="relative inline-block px-2 py-0.5 bg-amber-200/90 rounded-md text-slate-900">
              events
            </span>{' '}
            for contribution
          </h2>
        </div>

        {/* Section Content: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Big Featured Event Card */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-xs flex flex-col group">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Date Badge Pill Top Right */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#E5533D] text-white flex flex-col items-center justify-center shadow-lg font-bold leading-none text-center">
                <span className="text-sm">{featuredEvent.dateDay}</span>
                <span className="text-[10px] font-medium uppercase tracking-tight">{featuredEvent.dateMonth}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#E5533D] uppercase tracking-wider block">
                  {featuredEvent.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#E5533D] transition-colors leading-snug">
                  {featuredEvent.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {featuredEvent.description}
                </p>
              </div>

              {/* Location & Time Info */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E5533D]" />
                    <span>Location: <strong className="text-slate-700 font-semibold">{featuredEvent.location}</strong></span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E5533D]" />
                    <span>Starts at: <strong className="text-slate-700 font-semibold">{featuredEvent.time}</strong></span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectEvent(featuredEvent)}
                  className="px-6 py-2.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-xs rounded-full shadow-xs transition-all cursor-pointer"
                >
                  Join event
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: 3 Horizontal Event Row Cards */}
          <div className="lg:col-span-6 space-y-4">
            {listEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className="bg-slate-50/80 hover:bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-md cursor-pointer flex items-start gap-4 sm:gap-6 relative group"
              >
                {/* Text Content */}
                <div className="flex-1 space-y-2">
                  <span className="text-xs font-bold text-[#E5533D] uppercase tracking-wider block">
                    {event.tag}
                  </span>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E5533D] transition-colors leading-snug">
                    {event.title}
                  </h4>

                  <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center space-x-4 text-[11px] text-slate-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#E5533D]" />
                      <span>Location: <strong className="text-slate-700 font-semibold">{event.location}</strong></span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#E5533D]" />
                      <span>Starts at: <strong className="text-slate-700 font-semibold">{event.time}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Red Circle Date Badge Right */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E5533D] text-white flex-shrink-0 flex flex-col items-center justify-center font-bold text-center shadow-sm">
                  <span className="text-xs sm:text-sm leading-none">{event.dateDay}</span>
                  <span className="text-[9px] font-normal uppercase tracking-tight">{event.dateMonth}</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
