import React, { useState } from 'react';
import { X, Heart, CreditCard, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Cause } from '../types';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  causes: Cause[];
  selectedCause?: Cause | null;
  onDonateSuccess: (causeId: string, amount: number) => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  causes,
  selectedCause,
  onDonateSuccess,
}) => {
  const [selectedCauseId, setSelectedCauseId] = useState<string>(
    selectedCause ? selectedCause.id : causes[0]?.id || ''
  );
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'gpay'>('card');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentCause = causes.find((c) => c.id === selectedCauseId) || causes[0];

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? parseFloat(customAmount) : amount;
    if (finalAmount > 0 && currentCause) {
      onDonateSuccess(currentCause.id, finalAmount);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Thank you for your generosity!</h3>
            <p className="text-slate-600 text-sm">
              Your donation of <strong className="text-slate-900">${customAmount || amount}</strong> towards{' '}
              <strong className="text-[#E5533D]">{currentCause?.title}</strong> makes a meaningful impact!
            </p>
            <span className="text-xs text-slate-400 block pt-2">A receipt has been sent to your email.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 text-[#E5533D] flex items-center justify-center">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Make a Donation</h3>
                <p className="text-xs text-slate-500">Support Jago Welfare causes directly</p>
              </div>
            </div>

            {/* Select Target Cause */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Select Campaign</label>
              <select
                value={selectedCauseId}
                onChange={(e) => setSelectedCauseId(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#E5533D]"
              >
                {causes.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} (${c.raised.toLocaleString()} raised)
                  </option>
                ))}
              </select>
            </div>

            {/* Select Donation Amount */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Donation Amount ($)</label>
              <div className="grid grid-cols-4 gap-2">
                {[10, 25, 50, 100].map((val) => (
                  <button
                    type="button"
                    key={val}
                    onClick={() => handleAmountSelect(val)}
                    className={`py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                      amount === val && !customAmount
                        ? 'bg-[#E5533D] text-white shadow-xs'
                        : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    ${val}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Or enter custom amount ($)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount(0);
                }}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D] mt-2"
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-xl border flex items-center justify-center space-x-1.5 text-xs font-semibold cursor-pointer ${
                    paymentMethod === 'card' ? 'border-[#E5533D] bg-orange-50/50 text-[#E5533D]' : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-2.5 rounded-xl border flex items-center justify-center space-x-1.5 text-xs font-semibold cursor-pointer ${
                    paymentMethod === 'paypal' ? 'border-[#E5533D] bg-orange-50/50 text-[#E5533D]' : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <span>PayPal</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('gpay')}
                  className={`p-2.5 rounded-xl border flex items-center justify-center space-x-1.5 text-xs font-semibold cursor-pointer ${
                    paymentMethod === 'gpay' ? 'border-[#E5533D] bg-orange-50/50 text-[#E5533D]' : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <span>Google Pay</span>
                </button>
              </div>
            </div>

            {/* Donor Details */}
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Complete Donation ${customAmount || amount}</span>
            </button>

            <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>256-bit SSL Secure & Encrypted Payment</span>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
