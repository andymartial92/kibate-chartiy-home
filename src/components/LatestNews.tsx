import React from 'react';
import { NEWS_DATA } from '../data/mockData';
import { NewsItem } from '../types';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface LatestNewsProps {
  onSelectNews: (news: NewsItem) => void;
}

export const LatestNews: React.FC<LatestNewsProps> = ({ onSelectNews }) => {
  return (
    <section className="py-16 lg:py-24 bg-white" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-6 h-4 text-[#E5533D]" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 14C8 2 16 2 22 14" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
              Our latest blog
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Check all{' '}
            <span className="relative inline-block px-2 py-0.5 bg-amber-200/90 rounded-md text-slate-900">
              our latest
            </span>{' '}
            news and updates
          </h2>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="bg-slate-50/70 rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#E5533D] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>By {item.author}</span>
                    </div>
                  </div>

                  <div className="text-[#E5533D] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
