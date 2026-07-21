import React from 'react';
import { Heart, MapPin, Phone, Mail, Twitter, Facebook, Instagram, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenDonate: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenContact, onOpenDonate }) => {
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Support Kibate Charity Home - Providing food, education, and shelter in Kampala, Uganda!');
    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#111827] text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Kibate Charity Home Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <Heart className="w-4 h-4 text-[#E5533D] fill-[#E5533D]" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-lg text-white tracking-tight">Kibate</span>
                <span className="font-normal text-lg text-[#E5533D]">Charity Home</span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated to ending poverty, providing fresh market produce, supporting children's education, and offering safe shelter for families in need in Kampala, Uganda.
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#E5533D] flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Address:</strong> Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#E5533D] flex-shrink-0" />
                <span><strong className="text-slate-200">Phone:</strong> +256 771450806</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#E5533D] flex-shrink-0" />
                <span><strong className="text-slate-200">Email:</strong> kibate12@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#E5533D] transition-colors cursor-pointer">
                  About Us & NGO Credentials
                </button>
              </li>
              <li>
                <a href="#causes" className="hover:text-[#E5533D] transition-colors">
                  Active Campaign Causes
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#E5533D] transition-colors">
                  Upcoming Community Drives
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-[#E5533D] transition-colors">
                  Field News & Stories
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E5533D] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Donor Support</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenContact} className="hover:text-[#E5533D] transition-colors cursor-pointer">
                  Contact Field Office
                </button>
              </li>
              <li>
                <button onClick={onOpenDonate} className="hover:text-[#E5533D] transition-colors cursor-pointer">
                  Donate via Mobile Money / Card
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E5533D] transition-colors">
                  Tax Deductible Receipts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Organization Status */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">NGO Registration</h4>
            <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Non-Profit</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                Reg No: <strong>INDR150892019N</strong>
                <br />
                National NGO Board, Uganda
              </p>
              <button
                onClick={onOpenDonate}
                className="mt-2 w-full py-2 bg-[#E5533D] hover:bg-[#d0422d] text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Donate Now
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Kibate Charity Home. Kampala, Uganda. All Rights Reserved.</p>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleShare('facebook')}
              aria-label="Share on Facebook"
              className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <Facebook className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              aria-label="Share on Twitter"
              className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <Twitter className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
