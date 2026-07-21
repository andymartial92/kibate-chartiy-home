import React, { useEffect, useState } from 'react';
import { STATS_DATA } from '../data/mockData';
import { Megaphone, Users, DollarSign, HeartHandshake } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    'stat-1': 0,
    'stat-2': 0,
    'stat-3': 0,
    'stat-4': 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        'stat-1': Math.floor(STATS_DATA[0].number * Math.min(progress, 1)),
        'stat-2': Math.floor(STATS_DATA[1].number * Math.min(progress, 1)),
        'stat-3': Math.floor(STATS_DATA[2].number * Math.min(progress, 1)),
        'stat-4': Math.floor(STATS_DATA[3].number * Math.min(progress, 1)),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Megaphone':
        return Megaphone;
      case 'Users':
        return Users;
      case 'DollarSign':
        return DollarSign;
      case 'HeartHandshake':
      default:
        return HeartHandshake;
    }
  };

  return (
    <section className="py-16 bg-slate-50/80 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat) => {
            const IconComponent = getIcon(stat.iconName);
            const displayValue = counts[stat.id] || 0;

            return (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xs border border-slate-100 space-y-3 transform hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 text-[#E5533D] flex items-center justify-center">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {displayValue.toLocaleString()}
                </div>

                <span className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
