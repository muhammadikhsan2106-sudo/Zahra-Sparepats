import React from 'react';
import { MessageSquare, CalendarCheck, ShieldCheck, Wrench, PhoneCall, Sparkles } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleWhatsAppChat = () => {
    const message = encodeURIComponent(
      'Halo ZahraSparepart, saya ingin konsultasi servis kendaraan / mekanik panggilan.'
    );
    window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
      {/* Background ambient lighting accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        {/* Main 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust Kicker - Clean unboxed metadata with separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-orange-400">
              <span className="flex items-center gap-1.5 text-orange-400">
                <Sparkles className="w-4 h-4 text-orange-500" />
                MOTOR & MOBIL
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">SPAREPARTS & SERVICE RESMI</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-bold">SIAGA 24 JAM</span>
            </div>

            {/* Requested Hero Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Zahra Spare Parts -{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Bengkel Motor Dan Mobil
              </span>
              , Mekanik Panggilan 24 Jam, Solusi Perawatan & Perbaikan Kendaraan Terpercaya
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Layanan perbaikan motor & mobil profesional dengan teknisi berpengalaman, suku cadang original bergaransi, serta unit mekanik mobile siaga 24 jam ke lokasi Anda saat mogok di jalan.
            </p>

            {/* Emergency road notice box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Mogok di Jalan / Arteri?</h2>
                  <p className="text-xs text-slate-300">Mekanik darurat siap meluncur membawa perkakas & spare parts pengganti.</p>
                </div>
              </div>
              <a
                href={`tel:${WORKSHOP_INFO.whatsappNumber}`}
                className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg text-center transition-colors shrink-0 shadow-sm"
              >
                Call Hotline 24 Jam
              </a>
            </div>

            {/* Requested CTAs: Hubungi Kami Via WhatsApp & Booking Servis */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={handleWhatsAppChat}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 rounded-xl shadow-lg shadow-emerald-950/50 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                <span>Hubungi Kami Via WhatsApp</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:scale-95 rounded-xl shadow-lg shadow-orange-950/40 border border-orange-400/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 whitespace-nowrap"
              >
                <CalendarCheck className="w-5 h-5 shrink-0" />
                <span>Booking Servis</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Garansi Servis s/d 30 Hari
              </span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-orange-400" />
                100% Suku Cadang Asli Tersegel
              </span>
              <span className="flex items-center gap-1.5">
                <span className="font-mono text-slate-300">Rp 0,-</span>
                Konsultasi & Estimasi Awal Gratis
              </span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-black/80 group">
              <img
                src="/src/assets/images/hero_bengkel_service_1791887477658.jpg"
                alt="Area bengkel Zahra Spare Parts modern dengan lift hidrolik mobil dan motor"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

              {/* Visual Card Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs text-orange-400 font-bold uppercase tracking-wider">
                      
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-300 font-mono text-xs font-bold shrink-0">
                    Buka 08:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Proof & KPI Strip (Remaining verified metrics) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              24<span className="text-emerald-500"> Jam</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Layanan Roadside Darurat</div>
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              4.9<span className="text-slate-500 text-lg">/5.0</span>
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Kepuasan Pelanggan Nyata</div>
          </div>
        </div>
      </div>
    </section>
  );
};
