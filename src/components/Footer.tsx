import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { Phone, MapPin, Mail, Clock, MessageSquare, ArrowUp } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" variant="horizontal" />
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Zahra Spareparts adalah bengkel motor dan mobil profesional yang berkomitmen memberikan solusi perawatan dan perbaikan terpercaya, suku cadang original, serta unit mekanik darurat 24 jam.
            </p>
            <div className="pt-2 text-slate-300 font-mono text-xs">
              Mekanik Panggilan Darurat: <span className="text-amber-400 font-bold">24 Jam Nonstop</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Layanan Utama
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#layanan" className="hover:text-orange-400 transition-colors">
                  Servis Rutin Berkala
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-400 transition-colors">
                  Tune Up
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-400 transition-colors">
                  Ganti Oli & Filter Asli
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-400 transition-colors">
                  Rem & Suspensi Kaki-Kaki
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-400 transition-colors">
                  Overhaul (Turun Mesin)
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-400 transition-colors">
                  Mekanik Panggilan 24 Jam
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Navigasi Cepat
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#keunggulan" className="hover:text-orange-400 transition-colors">
                  Keunggulan Kami
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-orange-400 transition-colors">
                  Galeri Bengkel & Fasilitas
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-orange-400 transition-colors">
                  Testimoni Pelanggan
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-orange-400 transition-colors">
                  Lokasi & Jam Operasional
                </a>
              </li>
              <li>
                <a href="#booking-section" className="hover:text-orange-400 transition-colors">
                  Formulir Booking Servis
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-xs">
              Kontak Bengkel
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-tight">
                  {WORKSHOP_INFO.address}, {WORKSHOP_INFO.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="font-mono">{WORKSHOP_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {WORKSHOP_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Senin – Sabtu: 08.00 – 18.00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} {WORKSHOP_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
