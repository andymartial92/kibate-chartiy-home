import React, { useState } from 'react';
import { Mail, Phone, Search, Menu, X, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

interface HeaderProps {
  onOpenDonate: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Causes', href: '#causes' },
    { name: 'Events', href: '#events' },
    { name: 'Pages', href: '#pages' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-xs">
      {/* Top Bar */}
      <div className="border-b border-slate-100 bg-slate-50/80 text-xs text-slate-600 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Left info */}
          <div className="flex items-center space-x-6">
            <a href="mailto:donation@domain.com" className="flex items-center gap-1.5 hover:text-[#E5533D] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#E5533D]" />
              <span>donation@domain.com</span>
            </a>
            <a href="tel:+01123456789" className="flex items-center gap-1.5 hover:text-[#E5533D] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#E5533D]" />
              <span>+011 234 567 89</span>
            </a>
            <a href="#faq" className="hover:text-[#E5533D] transition-colors">
              Faq
            </a>
          </div>

          {/* Right Socials */}
          <div className="flex items-center space-x-3">
            <a href="#" className="w-6 h-6 rounded-full bg-slate-200/60 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all text-slate-600">
              <Facebook className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-slate-200/60 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all text-slate-600">
              <Twitter className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-slate-200/60 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all text-slate-600">
              <Instagram className="w-3 h-3" />
            </a>
            <a href="#" className="w-6 h-6 rounded-full bg-slate-200/60 hover:bg-[#E5533D] hover:text-white flex items-center justify-center transition-all text-slate-600">
              <Linkedin className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden bg-orange-50">
            {/* Colorful hands / heart logo representation */}
            <div className="relative w-7 h-7 flex items-center justify-center">
              <span className="absolute w-3.5 h-3.5 bg-amber-400 rounded-full top-0 left-0 opacity-90"></span>
              <span className="absolute w-3.5 h-3.5 bg-[#E5533D] rounded-full top-0 right-0 opacity-90"></span>
              <span className="absolute w-3.5 h-3.5 bg-purple-500 rounded-full bottom-0 left-0 opacity-90"></span>
              <span className="absolute w-3.5 h-3.5 bg-teal-500 rounded-full bottom-0 right-0 opacity-90"></span>
              <Heart className="w-4 h-4 text-white z-10 fill-white" />
            </div>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-bold text-2xl text-slate-900 tracking-tight">Jago</span>
            <span className="font-normal text-2xl text-slate-600">welfare</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveNav(item.name)}
              className={`transition-colors py-1 relative ${
                activeNav === item.name
                  ? 'text-[#E5533D] font-semibold'
                  : 'text-slate-700 hover:text-[#E5533D]'
              }`}
            >
              {item.name}
              {activeNav === item.name && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E5533D] rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-600 hover:text-[#E5533D] transition-colors rounded-full hover:bg-slate-100"
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

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#E5533D]"
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
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                setActiveNav(item.name);
                setMobileMenuOpen(false);
              }}
              className={`block py-2 text-base font-medium ${
                activeNav === item.name ? 'text-[#E5533D] font-semibold' : 'text-slate-700'
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full py-3 bg-[#E5533D] text-white font-semibold text-sm rounded-full text-center shadow-xs"
            >
              Donate now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
