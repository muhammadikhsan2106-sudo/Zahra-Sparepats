import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  Navigation,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData.ts';

export const LocationHoursSection: React.FC = () => {
  const handleOpenGoogleMaps = () => {
    // Open Google Maps search for workshop
    const query = encodeURIComponent(`${WORKSHOP_INFO.name} ${WORKSHOP_INFO.address}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent('Halo Zahra Sparepart, saya mau menanyakan lokasi bengkel dan rute jalan.');
    window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="lokasi" className="py-20 bg-slate-950 text-slate-100 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Kunjungi Bengkel Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lokasi & Jam Operasional
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Akses bengkel luas dan mudah dijangkau untuk mobil dan motor, serta armada mekanik yang siap bergerak ke lokasi Anda 24 jam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Alamat, Jam Buka, Kontak */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8">
            <div className="space-y-6">
              {/* Alamat */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                  <MapPin className="w-4 h-4" />
                  <span>Alamat Bengkel Workshop</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-white">
                  {WORKSHOP_INFO.address}
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  {WORKSHOP_INFO.city} (akses mudah roda 4 & roda 2).
                </p>
              </div>

              {/* Jam Operasional */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                  <Clock className="w-4 h-4" />
                  <span>Jam Buka Operasional</span>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-semibold text-white">Workshop Bengkel (Fisik):</span>
                    <span className="font-mono text-slate-300 font-bold">Senin – Sabtu: 08.00 – 18.00 WIB</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-semibold text-white">Minggu:</span>
                    <span className="text-slate-400">Buka Khusus Booking / Perjanjian</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-orange-950/40 border border-orange-500/40 text-orange-300">
                    <span className="font-bold">Mekanik Panggilan Darurat:</span>
                    <span className="font-mono font-extrabold text-amber-300">24 JAM SETIAP HARI</span>
                  </div>
                </div>
              </div>

              {/* Jangkauan Layanan */}
              <div className="space-y-2 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                  <Compass className="w-4 h-4" />
                  <span>Radius Layanan Panggilan</span>
                </div>
                <p className="text-xs text-slate-300">
                  {WORKSHOP_INFO.serviceRadius}. Melayani jalan, perumahan, gedung perkantoran, dan pinggir jalan.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Tangerang selatan
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Bintaro
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Pamulang
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Bsd
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleOpenGoogleMaps}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah Maps</span>
              </button>

              <button
                onClick={handleWhatsAppChat}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Lokasi via WA</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 relative shadow-xl flex flex-col">
            <div className="p-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                <span>Peta Workshop & Area Siaga Mekanik</span>
              </div>
              <span className="font-semibold text-orange-400">Peta Terverifikasi</span>
            </div>

            {/* Map Frame */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[420px] bg-slate-950">
              <iframe
                title="Peta Lokasi Zahra Sparepart"
                src={WORKSHOP_INFO.mapsEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Map Card */}
              <div className="absolute top-4 left-4 max-w-xs p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 shadow-lg pointer-events-auto">
                <div className="font-extrabold text-sm text-white">
                  Zahra Spareparts
                </div>
                <div className="text-[11px] text-orange-400 font-semibold">
                  Workshop & Bengkel Mobil/Motor
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Parkir luas, ruang tunggu, fasilitas cuci tangan & toilet bersih.
                </div>
                <button
                  onClick={handleOpenGoogleMaps}
                  className="mt-2.5 w-full py-1.5 px-2.5 text-center text-[11px] font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors"
                >
                  Buka di Google Maps App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
