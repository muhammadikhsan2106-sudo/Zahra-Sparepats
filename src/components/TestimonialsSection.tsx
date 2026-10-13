import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/workshopData.ts';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="py-20 bg-slate-950 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Bukti Nyata Kepuasan Pelanggan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Kata Pemilik Mobil & Motor?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Pengalaman langsung para pelanggan setia yang mempercayakan perawatan rutin hingga perbaikan darurat di jalan kepada tim mekanik Zahra Spare Parts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_LIST.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 sm:p-7 bg-slate-900 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-700 to-orange-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                    {item.avatarText}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-white truncate">
                      {item.name}
                    </div>
                    {/* Unboxed metadata */}
                    <div className="text-xs text-orange-400 font-medium truncate">
                      {item.vehicle}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {item.serviceUsed} · {item.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
