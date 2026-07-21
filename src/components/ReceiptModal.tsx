import React from 'react';
import { X, Printer, Download, CheckCircle, ShieldCheck, Heart, Share2 } from 'lucide-react';
import { DonorRecord } from '../types';

interface ReceiptModalProps {
  receipt: DonorRecord | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ receipt, onClose }) => {
  if (!receipt) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Donation Receipt - Kibate Charity Home',
        text: `I just donated $${receipt.amount} to "${receipt.causeTitle}" at Kibate Charity Home!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="receipt-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in print:p-0 print:bg-white"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[92vh] overflow-y-auto print:shadow-none print:border-none print:max-h-none print:w-full">
        
        {/* Close Button - hidden in print */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors print:hidden"
          aria-label="Close receipt"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="text-center pb-6 border-b border-dashed border-slate-200">
          <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 print:mb-1">
            <CheckCircle className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-emerald-600 tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full inline-block mb-2">
            Verified Tax-Deductible Receipt
          </span>
          <h2 id="receipt-title" className="text-2xl font-black text-slate-900">
            Kibate Charity Home
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            NGO Reg No: INDR150892019N • Kampala, Uganda
          </p>
          <p className="text-xs text-slate-400">
            Email: kibate12@gmail.com • Phone: +256 771450806
          </p>
        </div>

        {/* Receipt Details */}
        <div className="py-6 space-y-4">
          <div className="bg-orange-50/70 rounded-2xl p-4 border border-orange-100 text-center">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Donation Amount</span>
            <div className="text-3xl font-black text-[#E5533D] mt-1">
              ${receipt.amount.toLocaleString()} USD
            </div>
            {receipt.paymentMethod === 'momo' && (
              <span className="text-xs text-amber-700 block mt-1 font-medium">
                ≈ UGX {(receipt.amount * 3700).toLocaleString()} (Mobile Money)
              </span>
            )}
          </div>

          <div className="space-y-2.5 text-xs text-slate-700 divide-y divide-slate-100">
            <div className="flex justify-between pt-2">
              <span className="font-medium text-slate-500">Transaction Reference:</span>
              <span className="font-mono font-bold text-slate-900">{receipt.transactionRef}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-medium text-slate-500">Date & Time:</span>
              <span className="font-semibold text-slate-800">
                {new Date(receipt.timestamp).toLocaleString('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-medium text-slate-500">Donor Name:</span>
              <span className="font-bold text-slate-900">
                {receipt.isAnonymous ? 'Anonymous Supporter' : receipt.donorName}
              </span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-medium text-slate-500">Donor Email:</span>
              <span className="font-semibold text-slate-800">{receipt.email}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-medium text-slate-500">Campaign Cause:</span>
              <span className="font-bold text-[#E5533D] text-right max-w-[220px]">{receipt.causeTitle}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-medium text-slate-500">Payment Channel:</span>
              <span className="font-semibold text-slate-800 capitalize">
                {receipt.paymentMethod === 'momo' ? 'Mobile Money (Uganda)' : receipt.paymentMethod}
              </span>
            </div>
            {receipt.phoneNumber && (
              <div className="flex justify-between pt-2">
                <span className="font-medium text-slate-500">Mobile Money Phone:</span>
                <span className="font-mono font-semibold text-slate-800">{receipt.phoneNumber}</span>
              </div>
            )}
            <div className="flex justify-between pt-2">
              <span className="font-medium text-slate-500">Covered Platform Fees:</span>
              <span className="font-semibold text-emerald-600">{receipt.coverFees ? 'Yes (+5%)' : 'No'}</span>
            </div>
          </div>
        </div>

        {/* Legal Footer Note */}
        <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-[11px] text-slate-500 space-y-1">
          <div className="flex items-center space-x-1 font-bold text-slate-700">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Official NGO Contribution Certificate</span>
          </div>
          <p>
            100% of your net contribution is directly allocated to field operations, food procurement, and education programs in Kampala, Uganda.
          </p>
        </div>

        {/* Actions - hidden in print */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 print:hidden">
          <button
            onClick={handlePrint}
            className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
          <button
            onClick={handleShare}
            className="py-3 px-4 bg-orange-50 hover:bg-orange-100 text-[#E5533D] font-semibold text-xs rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Impact</span>
          </button>
          <button
            onClick={onClose}
            className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
