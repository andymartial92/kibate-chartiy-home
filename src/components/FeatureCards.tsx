import React from 'react';
import { BookOpen, Droplets, Stethoscope, Utensils, ArrowRight } from 'lucide-react';

interface FeatureCardsProps {
  onSelectCause: (category: string) => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({ onSelectCause }) => {
  const cards = [
    {
      id: 'children',
      subtitle: 'Donate for',
      title: 'Children education',
      bgColor: 'bg-[#E3F2FD]/80 hover:bg-[#E3F2FD]',
      borderColor: 'border-blue-100',
      iconBg: 'bg-white text-sky-600',
      icon: BookOpen,
      category: 'Education',
    },
    {
      id: 'water',
      subtitle: 'Donate for',
      title: 'Clean mineral water',
      bgColor: 'bg-[#FFF8E1]/80 hover:bg-[#FFF8E1]',
      borderColor: 'border-amber-100',
      iconBg: 'bg-white text-amber-600',
      icon: Droplets,
      category: 'Food & Water',
    },
    {
      id: 'surgery',
      subtitle: 'Donate for',
      title: 'Surgery & treatment',
      bgColor: 'bg-[#E0F2F1]/80 hover:bg-[#E0F2F1]',
      borderColor: 'border-teal-100',
      iconBg: 'bg-white text-teal-600',
      icon: Stethoscope,
      category: 'Medical',
    },
    {
      id: 'food',
      subtitle: 'Donate for',
      title: 'Healthy & good food',
      bgColor: 'bg-[#EDE7F6]/80 hover:bg-[#EDE7F6]',
      borderColor: 'border-purple-100',
      iconBg: 'bg-white text-purple-600',
      icon: Utensils,
      category: 'Food & Water',
    },
  ];

  return (
    <section className="py-8 bg-white relative z-20 -mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => onSelectCause(card.category)}
                className={`relative overflow-hidden p-6 rounded-2xl border ${card.borderColor} ${card.bgColor} transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-md cursor-pointer group`}
              >
                {/* Decorative Pattern Lines in Bottom Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                    <pattern id={`stripe-${card.id}`} width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="2.5" />
                    </pattern>
                    <rect width="100" height="100" fill={`url(#stripe-${card.id})`} />
                  </svg>
                </div>

                {/* Top Icon Badge */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-xs mb-6 transition-transform group-hover:scale-110 bg-white">
                  <IconComponent className="w-6 h-6 text-slate-800" />
                </div>

                {/* Card Text */}
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  {card.subtitle}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-[#E5533D] transition-colors leading-snug">
                  {card.title}
                </h3>

                {/* Link Action */}
                <div className="flex items-center space-x-1 text-xs font-bold text-[#E5533D] group-hover:underline">
                  <span>More details...</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
