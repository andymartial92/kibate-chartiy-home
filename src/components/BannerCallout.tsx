import React from 'react';

interface BannerCalloutProps {
  onOpenDonate: () => void;
}

export const BannerCallout: React.FC<BannerCalloutProps> = ({ onOpenDonate }) => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1600"
          alt="Children smiling"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-300 uppercase block">
          We are here to stop poverty.
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          We are fundraising for the people who are fighting against poverty
        </h2>

        <div className="pt-4">
          <button
            onClick={onOpenDonate}
            className="px-9 py-3.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            Donate now
          </button>
        </div>
      </div>
    </section>
  );
};
