import React, { useState, useEffect } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { saveContactMessage } from '../utils/storage';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    saveContactMessage({ name, email, phone, subject: subject || 'General Inquiry', message });
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-100 space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1">
          <span className="text-xs font-bold text-[#E5533D] uppercase tracking-wider">Contact Us</span>
          <h2 id="contact-modal-title" className="text-xl font-extrabold text-slate-900">
            Get in Touch with Kibate Charity Home
          </h2>
          <p className="text-xs text-slate-500">We are located in Kampala, Uganda and welcome all inquiries.</p>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Message Received!</h3>
            <p className="text-xs text-slate-600">
              Thank you for reaching out, <strong>{name}</strong>. Our Kampala team will respond to <strong>{email}</strong> shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Your Full Name *"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="email"
                placeholder="Your Email *"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
              />
              <input
                type="text"
                placeholder="Phone Number (Optional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
              />
            </div>

            <div>
              <textarea
                rows={4}
                placeholder="Your Message *"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#E5533D]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#E5533D] hover:bg-[#d0422d] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

        <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-600">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-[#E5533D] flex-shrink-0" />
            <span><strong>Location:</strong> Kampala, Uganda</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-[#E5533D] flex-shrink-0" />
            <span><strong>Direct Email:</strong> kibate12@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-[#E5533D] flex-shrink-0" />
            <span><strong>Hotline:</strong> +256 771450806</span>
          </div>
        </div>

      </div>
    </div>
  );
};
