import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Smartphone, Heart, Award } from 'lucide-react';
import { FAQ_DATA } from '../utils/storage';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Tax & Transparency', 'Mobile Money', 'Donations', 'General'];

  const filteredFaqs = selectedCat === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((f) => f.category === selectedCat);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-orange-100/80 rounded-full text-[#E5533D] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers for Donors & Supporters
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Learn how Kibate Charity Home manages funds, processes Mobile Money & card donations, and guarantees field transparency in Kampala, Uganda.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#E5533D] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-slate-800 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-orange-100 text-[#E5533D]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/30 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
