import React, { useState, useEffect, useRef } from 'react';
import { X, Heart, CreditCard, CheckCircle2, ShieldCheck, Smartphone, Lock } from 'lucide-react';
import { Cause, DonorRecord } from '../types';
import { saveDonationRecord } from '../utils/storage';

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  causes: Cause[];
  selectedCause?: Cause | null;
  onDonateSuccess: (causeId: string, amount: number, record: DonorRecord) => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({
  isOpen,
  onClose,
  causes,
  selectedCause,
  onDonateSuccess,
}) => {
  const [selectedCauseId, setSelectedCauseId] = useState<string>('');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo' | 'paypal' | 'gpay'>('card');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+256 ');
  const [momoPin, setMomoPin] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [coverFees, setCoverFees] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  // FIX ISSUE #3: Keep selectedCauseId synced whenever selectedCause prop or isOpen changes!
  useEffect(() => {
    if (isOpen) {
      if (selectedCause && selectedCause.id) {
        setSelectedCauseId(selectedCause.id);
      } else if (causes.length > 0) {
        setSelectedCauseId(causes[0].id);
      }
    }
  }, [selectedCause, isOpen, causes]);

  // Escape key listener & body lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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

  const currentCause = causes.find((c) => c.id === selectedCauseId) || causes[0];
  const baseAmount = customAmount ? parseFloat(customAmount) || 0 : amount;
  const feeAmount = coverFees ? baseAmount * 0.05 : 0;
  const totalAmount = parseFloat((baseAmount + feeAmount).toFixed(2));

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (baseAmount <= 0 || !currentCause) return;

    setIsProcessing(true);

    setTimeout(() => {
      const txRef = `KBT-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const donorRecord: DonorRecord = {
        id: `don-${Date.now()}`,
        donorName: isAnonymous ? 'Anonymous Supporter' : (name.trim() || 'Generous Donor'),
        email: email.trim() || 'donor@example.com',
        amount: totalAmount,
        causeId: currentCause.id,
        causeTitle: currentCause.title,
        paymentMethod,
        phoneNumber: paymentMethod === 'momo' ? phone : undefined,
        isAnonymous,
        coverFees,
        timestamp: new Date().toISOString(),
        transactionRef: txRef,
      };

      // Save to persistent storage log
      saveDonationRecord(donorRecord);

      // Trigger success callback up to App
      onDonateSuccess(currentCause.id, totalAmount, donorRecord);

      setIsProcessing(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="donate-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-100"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#E5533D] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 id="donate-modal-title" className="text-xl font-extrabold text-slate-900">
                Make a Direct Donation
              </h2>
              <p className="text-xs text-slate-500">100% transparent funding for Kampala, Uganda</p>
            </div>
          </div>

          {/* Select Target Campaign Cause */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              Selected Campaign
            </label>
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
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                Donation Amount ($ USD)
              </label>
              {paymentMethod === 'momo' && (
                <span className="text-[11px] font-medium text-amber-700">
                  ≈ UGX {(baseAmount * 3700).toLocaleString()}
                </span>
              )}
            </div>

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
              min="1"
              placeholder="Or enter custom amount ($)"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount(0);
              }}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
            />
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">
              Payment Method
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`py-2 px-1 rounded-xl border flex flex-col items-center justify-center text-[11px] font-bold cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#E5533D] bg-orange-50/70 text-[#E5533D]'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <CreditCard className="w-4 h-4 mb-1" />
                <span>Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('momo')}
                className={`py-2 px-1 rounded-xl border flex flex-col items-center justify-center text-[11px] font-bold cursor-pointer transition-all ${
                  paymentMethod === 'momo'
                    ? 'border-[#E5533D] bg-amber-50 text-amber-800'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Smartphone className="w-4 h-4 mb-1 text-amber-600" />
                <span>Mobile Money</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('paypal')}
                className={`py-2 px-1 rounded-xl border flex flex-col items-center justify-center text-[11px] font-bold cursor-pointer transition-all ${
                  paymentMethod === 'paypal'
                    ? 'border-[#E5533D] bg-sky-50 text-sky-700'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="font-extrabold text-sm leading-none">P</span>
                <span className="mt-1">PayPal</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('gpay')}
                className={`py-2 px-1 rounded-xl border flex flex-col items-center justify-center text-[11px] font-bold cursor-pointer transition-all ${
                  paymentMethod === 'gpay'
                    ? 'border-[#E5533D] bg-slate-100 text-slate-900'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Lock className="w-4 h-4 mb-1 text-slate-700" />
                <span>Google Pay</span>
              </button>
            </div>
          </div>

          {/* Conditional Payment Method Fields */}
          {paymentMethod === 'momo' ? (
            <div className="bg-amber-50/70 p-3.5 rounded-2xl border border-amber-200 space-y-2 text-xs">
              <span className="font-bold text-amber-900 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-amber-600" />
                MTN / Airtel Mobile Money (Uganda & EA)
              </span>
              <div>
                <label className="text-[11px] text-amber-800 font-medium">Telephone Number (+256)</label>
                <input
                  type="text"
                  required
                  placeholder="+256 771 234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-white border border-amber-300 rounded-lg text-slate-900 text-xs font-mono focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[11px] text-amber-800 font-medium">Mobile Money PIN Prompt Simulation</label>
                <input
                  type="password"
                  maxLength={5}
                  placeholder="Enter 5-digit MoMo PIN (e.g. 12345)"
                  value={momoPin}
                  onChange={(e) => setMomoPin(e.target.value)}
                  className="w-full mt-1 px-3 py-2 bg-white border border-amber-300 rounded-lg text-slate-900 text-xs font-mono focus:outline-none"
                />
              </div>
            </div>
          ) : paymentMethod === 'card' ? (
            <div className="space-y-2 bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <input
                type="text"
                placeholder="Card Number (4242 •••• •••• 4242)"
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="MM/YY"
                  required
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none"
                />
                <input
                  type="password"
                  maxLength={4}
                  placeholder="CVC / CVV"
                  required
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none"
                />
              </div>
            </div>
          ) : null}

          {/* Donor Personal Information */}
          <div className="space-y-2.5">
            <input
              type="text"
              placeholder="Your Full Name"
              required={!isAnonymous}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
            />
            <input
              type="email"
              placeholder="Your Email Address (for instant receipt)"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
            />
          </div>

          {/* Options: Cover fees & Anonymous */}
          <div className="space-y-2 text-xs pt-1">
            <label className="flex items-center space-x-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={coverFees}
                onChange={(e) => setCoverFees(e.target.checked)}
                className="rounded border-slate-300 text-[#E5533D] focus:ring-[#E5533D]"
              />
              <span>I will cover 5% platform & payment fees (${feeAmount.toFixed(2)})</span>
            </label>
            <label className="flex items-center space-x-2 text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="rounded border-slate-300 text-[#E5533D] focus:ring-[#E5533D]"
              />
              <span>Keep my donation anonymous on the public donor roll</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-3.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {isProcessing ? (
              <span className="flex items-center space-x-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>Processing Payment...</span>
              </span>
            ) : (
              <>
                <Heart className="w-4 h-4 fill-current" />
                <span>Complete Donation (${totalAmount.toFixed(2)})</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>256-bit Encrypted Payment • Tax Deductible (Reg INDR150892019N)</span>
          </div>
        </form>
      </div>
    </div>
  );
};
