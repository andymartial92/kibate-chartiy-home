import React, { useState } from 'react';
import { Mail, Phone, Search, Menu, X, Facebook, Twitter, Instagram, Linkedin, Heart, Settings } from 'lucide-react';

interface HeaderProps {
  onOpenDonate: () => void;
  onOpenSearch: () => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDonate,
  onOpenSearch,
  onOpenAbout,
  onOpenContact,
  onOpenAdmin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home', action: null },
    { name: 'About us', href: '#about', action: onOpenAbout },
    { name: 'Causes', href: '#causes', action: null },
    { name: 'Events', href: '#events', action: null },
    { name: 'News', href: '#news', action: null },
    { name: 'FAQ', href: '#faq', action: null },
    { name: 'Contact', href: '#contact', action: onOpenContact },
  ];

  const handleNavClick = (item: { name: string; href: string; action: (() => void) | null }) => {
    setActiveNav(item.name);
    setMobileMenuOpen(false);
    if (item.action) {
      item.action();
    } else {
      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSocialClick = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Support Kibate Charity Home - Providing food, education, and shelter in Kampala, Uganda!');
    if (platform === 'facebook') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    if (platform === 'twitter') window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
    if (platform === 'whatsapp') window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
  };

  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-xs">
      {/* Top Bar */}
      <div className="border-b border-slate-100 bg-slate-50/80 text-xs text-slate-600 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left info */}
          <div className="flex items-center space-x-6">
            <a href="mailto:kibate12@gmail.com" className="flex items-center gap-1.5 hover:text-[#E5533D] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#E5533D]" />
              <span>kibate12@gmail.com</span>
            </a>
            <a href="tel:+256771450806" className="flex items-center gap-1.5 hover:text-[#E5533D] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#E5533D]" />
              <span>+256 771450806</span>
            </a>
            <a href="#faq" className="hover:text-[#E5533D] transition-colors font-medium">
              FAQ
            </a>
          </div>

          {/* Right Socials & Admin */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleSocialClick('facebook')}
              aria-label="Share on Facebook"
              className="w-6 h-6 rounded-full bg-slate-200/60 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all text-slate-600 cursor-pointer"
            >
              <Facebook className="w-3 h-3" />
            </button>
            <button
              onClick={() => handleSocialClick('twitter')}
              aria-label="Share on Twitter"
              className="w-6 h-6 rounded-full bg-slate-200/60 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all text-slate-600 cursor-pointer"
            >
              <Twitter className="w-3 h-3" />
            </button>
            <button
              onClick={() => handleSocialClick('whatsapp')}
              aria-label="Share on WhatsApp"
              className="w-6 h-6 rounded-full bg-slate-200/60 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all text-slate-600 cursor-pointer"
            >
              <Instagram className="w-3 h-3" />
            </button>

            <button
              onClick={onOpenAdmin}
              className="ml-2 flex items-center space-x-1 px-2.5 py-1 bg-slate-200/80 hover:bg-slate-900 hover:text-white rounded-full text-[11px] font-bold text-slate-700 transition-colors cursor-pointer"
              title="NGO Staff CMS"
            >
              <Settings className="w-3 h-3" />
              <span>Staff CMS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden bg-orange-50">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <span className="absolute w-3.5 h-3.5 bg-amber-400 rounded-full top-0 left-0 opacity-90"></span>
              <span className="absolute w-3.5 h-3.5 bg-[#E5533D] rounded-full top-0 right-0 opacity-90"></span>
              <span className="absolute w-3.5 h-3.5 bg-purple-500 rounded-full bottom-0 left-0 opacity-90"></span>
              <span className="absolute w-3.5 h-3.5 bg-teal-500 rounded-full bottom-0 right-0 opacity-90"></span>
              <Heart className="w-4 h-4 text-white z-10 fill-white" />
            </div>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-extrabold text-xl text-slate-900 tracking-tight">Kibate</span>
            <span className="font-semibold text-xl text-[#E5533D]">Charity Home</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`transition-colors py-1 relative cursor-pointer ${
                activeNav === item.name
                  ? 'text-[#E5533D] font-semibold'
                  : 'text-slate-700 hover:text-[#E5533D]'
              }`}
            >
              {item.name}
              {activeNav === item.name && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E5533D] rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-600 hover:text-[#E5533D] transition-colors rounded-full hover:bg-slate-100 cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={onOpenDonate}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#E5533D] text-[#E5533D] hover:bg-[#E5533D] hover:text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer"
          >
            Donate now
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#E5533D] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left py-2 text-base font-medium cursor-pointer ${
                activeNav === item.name ? 'text-[#E5533D] font-semibold' : 'text-slate-700'
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3 bg-[#E5533D] text-white font-semibold text-sm rounded-full text-center shadow-xs cursor-pointer"
            >
              Donate now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
