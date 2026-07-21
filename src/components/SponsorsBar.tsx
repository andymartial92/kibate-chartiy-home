import React from 'react';
import { Leaf, ShieldCheck, Heart, Users, Globe, Building2 } from 'lucide-react';

export const SponsorsBar: React.FC = () => {
  const sponsors = [
    { name: 'NATURAL', icon: Leaf },
    { name: 'ECO SAFE', icon: ShieldCheck },
    { name: 'ORGANIC', icon: Heart },
    { name: 'COMMUNITY', icon: Users },
    { name: 'BUILDTECH', icon: Building2 },
    { name: 'GLOBAL CARE', icon: Globe },
  ];

  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          {sponsors.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="flex items-center justify-center space-x-2 text-slate-700 hover:text-[#E5533D] transition-colors py-2 cursor-pointer">
                <Icon className="w-5 h-5" />
                <span className="font-extrabold text-xs tracking-wider">{s.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
