import React, { useEffect } from 'react';
import { X, ShieldCheck, MapPin, Mail, Phone, Heart, Award, Users, CheckCircle2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDonate: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenDonate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-100 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="space-y-1">
          <span className="text-xs font-bold text-[#E5533D] uppercase tracking-wider">
            About Kibate Charity Home
          </span>
          <h2 id="about-modal-title" className="text-2xl font-black text-slate-900">
            A world where poverty will not exist
          </h2>
        </div>

        {/* Verified NGO Registration Banner */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start space-x-3 text-emerald-900">
          <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs space-y-1">
            <span className="font-extrabold text-emerald-800 text-sm block">
              Verified Non-Profit Organization (NGO)
            </span>
            <p>
              Registered with the National NGO Board under Reg No: <strong>INDR150892019N</strong> in Kampala, Uganda.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="bg-orange-50/60 p-4 rounded-2xl border border-orange-100 space-y-2">
            <h3 className="font-bold text-[#E5533D] text-sm flex items-center space-x-1.5">
              <Heart className="w-4 h-4 fill-current" />
              <span>Our Mission</span>
            </h3>
            <p className="text-slate-700 leading-relaxed">
              To empower vulnerable orphans, women, and low-income families through nutritious food security, clean drinking water, accessible village education, and safe emergency shelter.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Our Vision</span>
            </h3>
            <p className="text-slate-700 leading-relaxed">
              A self-sustaining society in East Africa where no child suffers from malnutrition or stays out of school due to extreme poverty.
            </p>
          </div>
        </div>

        {/* Key Pillars */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            Our Core Operation Pillars
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2 text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold">Direct Field Impact</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2 text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold">Zero Administrative Waste</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2 text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold">Mobile Money & Card Safety</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2 text-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span className="font-semibold">Audited Quarterly Reports</span>
            </div>
          </div>
        </div>

        {/* Contact Info Box */}
        <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-[#E5533D]" />
              <span className="font-medium text-slate-800">Kampala, Uganda Field Office</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-[#E5533D]" />
              <span>kibate12@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-[#E5533D]" />
              <span>+256 771450806</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenDonate();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#E5533D] hover:bg-[#d0422d] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            Donate to Support Us
          </button>
        </div>
      </div>
    </div>
  );
};
