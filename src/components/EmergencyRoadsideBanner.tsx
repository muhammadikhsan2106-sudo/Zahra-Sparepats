import React from 'react';
import { AlertTriangle, MapPin, Wrench, ShieldCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData.ts';

export const EmergencyRoadsideBanner: React.FC = () => {
  const handleEmergencyWhatsApp = () => {
    const text = encodeURIComponent(
      'DARURAT: Mobil/Motor saya mengalami kendala di jalan, mohon bantuan mekanik panggilan segera!'
    );
    window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-slate-900 border-y border-slate-800 relative overflow-hidden py-10">
      {/* Background visual texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-orange-500/30 p-6 sm:p-8 lg:p-10 shadow-xl shadow-orange-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info & Headline */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Unit Reaksi Cepat 24 Jam</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Kendaraan Mogok di Jalan atau Rumah?{' '}
                <span className="text-orange-400">Mekanik Kami Langsung Datang!</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tidak perlu panik jika aki drop, ban kempis, vanbelt putus, mesin overheat, atau motor/mobil mati mendadak di tengah perjalanan. Tim mekanik Zahra Spareparts siaga 24 jam dengan perkakas bengkel lengkap untuk perbaikan langsung di tempat.
              </p>

              {/* 3 Step Roadside Assistance Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Langkah 1</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Share Live Location & keluhan via WhatsApp
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase mb-1">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>Langkah 2</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Mekanik meluncur membawa sparepart darurat
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Langkah 3</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Ditangani di tempat & bergaransi resmi
                  </div>
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-5 flex flex-col gap-3 p-6 rounded-xl bg-slate-950 border border-slate-800">
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Hubungi Bantuan Darurat Sekarang
              </div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight">
                {WORKSHOP_INFO.phoneDisplay}
              </div>
              <p className="text-xs text-slate-400">
                Layanan aktif 24 jam sehari, 7 hari seminggu. Respon kilat dalam hitungan menit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleEmergencyWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>WA Darurat</span>
                </button>
                <a
                  href={`tel:${WORKSHOP_INFO.whatsappNumber}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-md"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Telepon Langsung</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
