import React, { useState } from 'react';
import { Cause } from '../types';
import { Calendar, User, Heart } from 'lucide-react';

interface TrendingCausesProps {
  causes: Cause[];
  onDonateCause: (cause: Cause) => void;
}

export const TrendingCauses: React.FC<TrendingCausesProps> = ({ causes, onDonateCause }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Food & Water', 'Education', 'Shelter'];

  const filteredCauses = activeCategory === 'All'
    ? causes
    : causes.filter((c) => c.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70" id="causes">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-6 h-4 text-[#E5533D]" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 14C8 2 16 2 22 14" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Trending causes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            We are always where other people{' '}
            <span className="relative inline-block px-2 py-0.5 bg-amber-200/90 rounded-md text-slate-900">
              need
            </span>{' '}
            help
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#E5533D] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Causes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCauses.map((cause) => {
            const percentage = Math.min(Math.round((cause.raised / cause.goal) * 100), 100);

            return (
              <div
                key={cause.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
              >
                {/* Image Container with Tag */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cause.image}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                    {cause.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Progress Bar & Amounts */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-[#E5533D]">
                        ${cause.raised.toLocaleString()} <span className="text-slate-400 font-medium">Raised</span>
                      </span>
                      <span className="text-slate-700">
                        ${cause.goal.toLocaleString()} <span className="text-slate-400 font-medium">Goal</span>
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-[#E5533D] rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E5533D] transition-colors leading-snug line-clamp-2">
                      {cause.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                      {cause.description}
                    </p>
                  </div>

                  {/* Meta Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{cause.date}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>By {cause.author}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onDonateCause(cause)}
                      className="p-2 rounded-full text-[#E5533D] hover:bg-orange-50 transition-colors"
                      title="Donate to this cause"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
