import React from 'react';
import { Play } from 'lucide-react';

interface WelcomeSectionProps {
  onOpenVideo: () => void;
  onOpenDonate: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenVideo, onOpenDonate }) => {
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Gallery with overlapping frames */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Red Dot Grid Accent (Bottom Left) */}
              <div className="absolute -bottom-6 -left-6 z-0 grid grid-cols-5 gap-2 opacity-80">
                {Array.from({ length: 25 }).map((_, i) => (
                  <span key={i} className="w-2 h-2 rounded-full bg-[#E5533D]"></span>
                ))}
              </div>

              {/* Top Main Image - Black & White children photo */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/src/assets/images/welcome_bw_kids_1784666216466.jpg"
                  alt="Children at Kibate Charity Home community"
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              {/* Bottom Overlapping Image - Children with sign */}
              <div className="relative z-20 -mt-20 ml-8 sm:ml-16 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-300 max-w-[85%]">
                <img
                  src="/src/assets/images/welcome_sign_kids_1784666229061.jpg"
                  alt="Children asking for food and support"
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </div>

            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Red Accent Marker & Tag */}
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-4 text-[#E5533D]" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M2 14C8 2 16 2 22 14" strokeLinecap="round" />
                <path d="M6 10C10 4 14 4 18 10" strokeLinecap="round" />
              </svg>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                Welcome to Kibate Charity Home
              </span>
            </div>

            {/* Main Section Title with Yellow Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2]">
              A world where{' '}
              <span className="relative inline-block px-2 py-0.5 bg-amber-200/80 rounded-md text-slate-900">
                poverty
              </span>{' '}
              will not exist
            </h2>

            {/* Coral Red Highlight Subtitle */}
            <p className="text-base sm:text-lg font-bold text-[#E5533D]">
              We are the largest crowdfunding
            </p>

            {/* Description Paragraphs */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Kibate Charity Home, we believe every child deserves a life free from hunger, poverty, and disease. Our mission is to provide nutritious food, clean drinking water, access to education, and compassionate shelter for vulnerable children in underserved communities.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Through direct community outreach and transparent fundraising, your generous donations go directly towards feeding programs, school supplies, healthcare essentials, and building safe spaces where children can thrive.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenDonate}
                className="px-8 py-3.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                Learn more
              </button>

              <button
                onClick={onOpenVideo}
                className="flex items-center space-x-3 group text-slate-900 hover:text-[#E5533D] font-semibold text-sm transition-colors cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full border-2 border-[#E5533D] flex items-center justify-center text-[#E5533D] group-hover:bg-[#E5533D] group-hover:text-white transition-all shadow-xs">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>How we work</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
