import React, { useState } from 'react';
import { X, Search, Heart, Calendar, Newspaper } from 'lucide-react';
import { Cause, EventItem, NewsItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  causes: Cause[];
  events: EventItem[];
  news: NewsItem[];
  onSelectCause: (cause: Cause) => void;
  onSelectEvent: (event: EventItem) => void;
  onSelectNews: (news: NewsItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  causes,
  events,
  news,
  onSelectCause,
  onSelectEvent,
  onSelectNews,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredCauses = query
    ? causes.filter((c) => c.title.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase()))
    : causes;

  const filteredEvents = query
    ? events.filter((e) => e.title.toLowerCase().includes(query.toLowerCase()) || e.location.toLowerCase().includes(query.toLowerCase()))
    : events;

  const filteredNews = query
    ? news.filter((n) => n.title.toLowerCase().includes(query.toLowerCase()) || n.tag.toLowerCase().includes(query.toLowerCase()))
    : news;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative border border-slate-100 max-h-[80vh] flex flex-col">
        
        {/* Search Header Bar */}
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-[#E5533D]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search causes, events, or news articles..."
            className="w-full text-base font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6">
          
          {/* Causes */}
          {filteredCauses.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                <Heart className="w-3.5 h-3.5 text-[#E5533D]" />
                <span>Campaign Causes</span>
              </span>
              <div className="space-y-1.5">
                {filteredCauses.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => {
                      onSelectCause(c);
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-orange-50/60 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{c.title}</h4>
                      <span className="text-xs text-slate-500">{c.category} • ${c.raised.toLocaleString()} raised</span>
                    </div>
                    <span className="text-xs font-semibold text-[#E5533D]">Donate →</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events */}
          {filteredEvents.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                <span>Upcoming Events</span>
              </span>
              <div className="space-y-1.5">
                {filteredEvents.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => {
                      onSelectEvent(e);
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{e.title}</h4>
                      <span className="text-xs text-slate-500">{e.dateDay} {e.dateMonth} • {e.location}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Join →</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News */}
          {filteredNews.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                <Newspaper className="w-3.5 h-3.5 text-sky-500" />
                <span>Latest News</span>
              </span>
              <div className="space-y-1.5">
                {filteredNews.map((n) => (
                  <div
                    key={n.id}
                    onClick={() => {
                      onSelectNews(n);
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{n.title}</h4>
                      <span className="text-xs text-slate-500">{n.tag} • {n.date}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Read →</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
