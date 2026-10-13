import React, { useState } from 'react';
import { Maximize2, X, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/workshopData.ts';

export const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="galeri" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Dokumentasi Bengkel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeri Fasilitas & Aktivitas Pengerjaan
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Lihat langsung suasana bengkel bersih, peralatan hidrolik modern, stok suku cadang resmi tersegel, dan armada mekanik mobile kami yang selalu siap siaga.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer shadow-lg hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Zero broken image fallback
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback container */}
                <div
                  className="hidden absolute inset-0 items-center justify-center bg-slate-900 text-slate-500 flex-col gap-2 p-4 text-center"
                  style={{ display: 'none' }}
                >
                  <ImageIcon className="w-8 h-8 text-orange-400" />
                  <span className="text-xs">{item.title}</span>
                </div>

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Zoom Icon badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-slate-950/70 border border-slate-700/80 backdrop-blur-md flex items-center justify-center text-slate-300 group-hover:text-orange-400 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-orange-400 mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 text-white hover:text-orange-400 flex items-center justify-center border border-slate-700 transition-colors"
              aria-label="Tutup preview gambar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-black">
              <img
                src={selectedImage.imageSrc}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-slate-950">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                {selectedImage.category}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-300">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
