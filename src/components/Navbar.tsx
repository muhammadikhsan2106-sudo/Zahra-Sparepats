import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData.ts';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Lokasi & Jam', href: '#lokasi' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Quiet Utility Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>Workshop: Sen - Sab 08.00-18.00 WIB</span>
            </span>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-amber-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Mekanik Panggilan Darurat: 24 Jam Nonstop</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{WORKSHOP_INFO.city}</span>
            </span>
            <a
              href={`tel:${WORKSHOP_INFO.whatsappNumber}`}
              className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hotline: {WORKSHOP_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-5 Nav Links) — Zone 3 (1 Primary Action) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
            : 'bg-slate-950 border-b border-slate-900 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single element Brand wordmark & logo */}
          <a
            href="/"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg p-0.5"
            aria-label="Kembali ke beranda Zahra Spare Parts"
          >
            <BrandLogo size="md" variant="horizontal" />
          </a>

          {/* Zone 2: 4–6 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:scale-95 rounded-lg shadow-md shadow-orange-500/20 transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              Booking Servis
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 text-xs font-bold text-white bg-orange-600 rounded-md active:scale-95"
            >
              Booking
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-lg"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-orange-400 hover:bg-slate-800/60 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-lg shadow-md transition-colors"
                >
                  Formulir Booking Servis
                </button>
                <a
                  href={`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=Halo%20Zahra%20Sparepart,%20saya%20butuh%20bantuan%20servis%20/mekanik`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-center text-sm font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  WhatsApp Darurat 24 Jam
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
