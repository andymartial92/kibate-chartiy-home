import React from 'react';
import { TrendingUp, Coins } from 'lucide-react';

interface HeroProps {
  onOpenDonate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/90 to-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Share your{' '}
              <span className="relative inline-block text-slate-900">
                love
                {/* Curved brush underline stroke */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-amber-400 z-0"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M3 9C25 3 75 3 97 9"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              <br className="hidden sm:inline" />
              to make someone's life better
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Every child deserves hope, education, clean water, and a bright future. Join Kibate Charity Home to empower vulnerable children and families in need.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenDonate}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-base rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                Donate now
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Graphic */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Background Blob & Shapes */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex justify-center items-center">
              
              {/* Outer Yellow Decorative Circle */}
              <div className="absolute w-[88%] h-[88%] rounded-full border-4 border-amber-300/60 -rotate-12 scale-105"></div>
              
              {/* Main Orange Organic Blob */}
              <div className="absolute w-[82%] h-[82%] bg-[#F88D2B] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] shadow-lg transition-all duration-700"></div>

              {/* Central Children Image */}
              <div className="relative z-10 w-[80%] h-[90%] flex items-center justify-center overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/src/assets/images/hero_children_1784665722619.jpg"
                  alt="Children at Kibate Charity Home"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                />
              </div>

              {/* Floating Badge 1 (Top Right): Total Donations */}
              <div className="absolute top-4 right-0 sm:-right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center space-x-3 transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F88D2B] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 block">Total donations</span>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-sm font-extrabold text-slate-900">$3 Billion</span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">▲</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Right): Volunteer Team */}
              <div className="absolute bottom-6 -right-2 sm:right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-slate-100 flex flex-col space-y-1.5 transition-transform hover:scale-105">
                <span className="text-xs font-semibold text-slate-800">Join our volunteer team</span>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2 overflow-hidden">
                    <img
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                      alt="Volunteer 1"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                      alt="Volunteer 2"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
                      alt="Volunteer 3"
                      referrerPolicy="no-referrer"
                    />
                    <img
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
                      alt="Volunteer 4"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="bg-[#E5533D] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    70+
                  </span>
                </div>
              </div>

              {/* Floating Badge 3 (Left Middle): Red Coin Icon */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#E5533D] text-white flex items-center justify-center shadow-lg animate-bounce">
                <Coins className="w-5 h-5" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
