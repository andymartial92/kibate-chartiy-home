import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { EventItem } from '../types';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState(1);
  const [registered, setRegistered] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setRegistered(true);
      setTimeout(() => {
        setRegistered(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {registered ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Event Registration Confirmed!</h3>
            <p className="text-slate-600 text-sm">
              You have registered <strong className="text-slate-900">{tickets} ticket(s)</strong> for{' '}
              <strong className="text-[#E5533D]">{event.title}</strong>.
            </p>
            <span className="text-xs text-slate-400 block pt-2">Event details and pass have been emailed to you.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {event.image && (
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden -mt-1 mb-2">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#E5533D] uppercase tracking-wider block">{event.tag}</span>
              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">{event.title}</h3>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl space-y-2 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-[#E5533D]" />
                <span>Date: <strong className="text-slate-800">{event.dateDay} {event.dateMonth}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#E5533D]" />
                <span>Starts at: <strong className="text-slate-800">{event.time}</strong></span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#E5533D]" />
                <span>Location: <strong className="text-slate-800">{event.location}</strong></span>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">{event.description}</p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide">Register For This Event</h4>
              <input
                type="text"
                placeholder="Your Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#E5533D]"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:border-[#E5533D]"
              />
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-slate-600">Number of attendees:</label>
                <select
                  value={tickets}
                  onChange={(e) => setTickets(parseInt(e.target.value))}
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 focus:outline-none"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Person' : 'People'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              Confirm Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
