import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { addSubscriber } from '../utils/storage';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [alreadyExists, setAlreadyExists] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      const added = addSubscriber(email.trim());
      if (added) {
        setSubscribed(true);
        setAlreadyExists(false);
      } else {
        setSubscribed(true);
        setAlreadyExists(true);
      }
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section className="py-12 bg-slate-50 relative z-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Text Title */}
          <div className="md:max-w-md space-y-2 text-center md:text-left">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Newsletter</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              To get weekly & monthly news,{' '}
              <span className="relative inline-block px-1.5 py-0.5 bg-amber-200/90 rounded-md text-slate-900">
                subscribe
              </span>{' '}
              to our newsletter.
            </h3>
          </div>

          {/* Form */}
          <div className="w-full md:w-auto flex-1 max-w-md">
            {subscribed ? (
              <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 p-4 rounded-full border border-emerald-200 text-sm font-semibold justify-center animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Thank you for subscribing to Kibate Charity Home!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full pl-5 pr-36 py-3.5 bg-slate-50 border border-slate-200 rounded-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D] focus:bg-white transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-6 py-2.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-xs rounded-full shadow-xs transition-all cursor-pointer flex items-center space-x-1.5"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
