import React from 'react';
import { Heart, MapPin, Phone, Mail, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Jago Welfare Info */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <Heart className="w-4 h-4 text-[#E5533D] fill-[#E5533D]" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-xl text-white tracking-tight">Jago</span>
                <span className="font-normal text-xl text-slate-400">welfare</span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#E5533D] flex-shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Address:</strong> 658 Pronomoid Ave, West Chester, PA 19382</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#E5533D] flex-shrink-0" />
                <span><strong className="text-slate-200">Phone:</strong> +011 234 567 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#E5533D] flex-shrink-0" />
                <span><strong className="text-slate-200">Email:</strong> info@jagowelfare.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick links</h4>
            <ul className="space-y-2.5 text-xs">
              {['About us', 'Services', 'Projects', 'News', 'Career'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-[#E5533D] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5 text-xs">
              {['Help & FAQ', 'Pricing', 'Contact us', 'Terms of service', 'Privacy policy'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-[#E5533D] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Latest Tweets */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Latest tweets</h4>
            <div className="space-y-3 text-xs">
              <div className="flex space-x-2">
                <Twitter className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="#" className="text-sky-400 font-semibold hover:underline block">@JagoMarketing</a>
                  <p className="text-slate-400 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor...
                  </p>
                  <span className="text-[10px] text-slate-500 block mt-1">December 15, 2021, 04:20 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>Copyright © 2022 All Rights Reserved</p>

          <div className="flex items-center space-x-3">
            <a href="#" className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all">
              <Twitter className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all">
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
