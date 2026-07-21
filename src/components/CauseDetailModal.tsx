import React, { useEffect } from 'react';
import { X, Heart, Users, Target, Calendar, CheckCircle2, Share2, ShieldCheck } from 'lucide-react';
import { Cause, DonorRecord } from '../types';
import { getStoredDonations } from '../utils/storage';

interface CauseDetailModalProps {
  cause: Cause | null;
  onClose: () => void;
  onOpenDonate: (cause: Cause) => void;
}

export const CauseDetailModal: React.FC<CauseDetailModalProps> = ({ cause, onClose, onOpenDonate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && cause) onClose();
    };
    if (cause) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cause, onClose]);

  if (!cause) return null;

  const percentage = Math.min(Math.round((cause.raised / cause.goal) * 100), 100);
  const allDonations = getStoredDonations().filter((d) => d.causeId === cause.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: cause.title,
        text: cause.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Campaign link copied to clipboard!');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cause-detail-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-100">
        
        {/* Banner Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-slate-100">
          <img src={cause.image} alt={cause.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="absolute top-4 left-4 bg-[#E5533D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {cause.category}
          </span>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <h2 id="cause-detail-title" className="text-xl sm:text-2xl font-black leading-tight">
              {cause.title}
            </h2>
            <p className="text-xs text-slate-300 mt-1">Verified Campaign • Kampala, Uganda</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Progress Card */}
          <div className="bg-orange-50/60 p-4 sm:p-5 rounded-2xl border border-orange-100 space-y-3">
            <div className="flex justify-between items-baseline text-sm">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase">Raised</span>
                <div className="text-2xl font-black text-[#E5533D]">
                  ${cause.raised.toLocaleString()} <span className="text-xs font-normal text-slate-500">USD</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500 uppercase">Goal</span>
                <div className="text-lg font-bold text-slate-800">${cause.goal.toLocaleString()} USD</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-400 to-[#E5533D] rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-600 pt-1">
              <span className="font-bold text-[#E5533D]">{percentage}% Goal Achieved</span>
              <span>{allDonations.length + 12} Generous Donors</span>
            </div>
          </div>

          {/* Full Story */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
              About This Campaign
            </h3>
            <div className="text-sm text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
              {cause.fullStory || cause.description}
            </div>
          </div>

          {/* Fund Breakdown Chart */}
          {cause.breakdown && cause.breakdown.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Where Your Funds Go
              </h3>
              <div className="space-y-2">
                {cause.breakdown.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Updates Timeline */}
          {cause.updates && cause.updates.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide">
                Field Updates & Progress
              </h3>
              <div className="space-y-3">
                {cause.updates.map((up) => (
                  <div key={up.id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-800">
                      <span>{up.title}</span>
                      <span className="text-[11px] text-slate-400 font-normal">{up.date}</span>
                    </div>
                    <p className="text-slate-600 mt-1">{up.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent Donors for this Cause */}
          <div className="space-y-2 pt-2">
            <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide flex items-center justify-between">
              <span>Recent Backers</span>
              <span className="text-xs font-normal text-slate-500">{allDonations.length} recorded</span>
            </h3>
            {allDonations.length === 0 ? (
              <p className="text-xs text-slate-500 italic">Be the first to donate to this campaign!</p>
            ) : (
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {allDonations.slice(0, 5).map((d) => (
                  <div key={d.id} className="p-2.5 bg-slate-50 rounded-xl flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800">{d.donorName}</span>
                    <span className="font-extrabold text-[#E5533D]">${d.amount} USD</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenDonate(cause);
              }}
              className="flex-1 py-3.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Donate to This Campaign</span>
            </button>
            <button
              onClick={handleShare}
              className="py-3.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#E5533D]" />
              <span>Share</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Kibate Charity Home • Registered NGO Reg No: INDR150892019N</span>
          </div>

        </div>
      </div>
    </div>
  );
};
