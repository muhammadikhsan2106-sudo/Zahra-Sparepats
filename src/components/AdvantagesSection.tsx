import React from 'react';
import {
  AlertCircle,
  CheckCircle2,
  BadgePercent,
  ShieldCheck,
  Cpu,
  Coffee,
  Check
} from 'lucide-react';
import { ADVANTAGES_LIST } from '../data/workshopData.ts';

export const AdvantagesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'AlertCircle':
        return <AlertCircle className="w-6 h-6 text-orange-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-blue-400" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Layers':
        return <Cpu className="w-6 h-6 text-sky-400" />;
      case 'Coffee':
        return <Coffee className="w-6 h-6 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section id="keunggulan" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Mengapa Memilih Kami
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Keunggulan Zahra Spare Parts & Servis
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Komitmen kami adalah memberikan rasa aman bagi setiap pengendara melalui kejujuran biaya, ketepatan diagnosa, dan kesiapan teknisi kami di jalan raya.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES_LIST.map((adv, idx) => {
            const isMarquee = idx === 0; // First item is the road assistance
            return (
              <div
                key={adv.id}
                className={`rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  isMarquee
                    ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-orange-500/40 shadow-lg shadow-orange-950/20'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getIcon(adv.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5">
                    {adv.title}
                  </h3>

                  <div className="text-xs font-semibold text-orange-400 mb-3">
                    {adv.highlight}
                  </div>

                  {adv.description ? (
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {adv.description}
                    </p>
                  ) : null}
                </div>

                {isMarquee && (
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                      <Check className="w-4 h-4" />
                      Siap Jumper Aki di Lokasi
                    </span>
                    <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                      <Check className="w-4 h-4" />
                      Penggantian Ban Serep / Vanbelt
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
