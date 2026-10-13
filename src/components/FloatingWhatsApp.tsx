import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Halo Zahra Sparepart, saya ingin tanya servis kendaraan / bantuan mekanik panggilan.'
    );
    window.open(`https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <aside aria-label="Bantuan Cepat WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {/* Tooltip prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-slate-900/95 border border-slate-700 text-xs text-white shadow-xl backdrop-blur-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="font-medium">Butuh mekanik darurat? Chat kami</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Tutup petunjuk"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Direct Call Button (Mobile & Desktop) */}
        <a
          href={`tel:${WORKSHOP_INFO.whatsappNumber}`}
          className="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 hover:border-orange-500 text-slate-200 hover:text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Telepon darurat langsung"
        >
          <Phone className="w-4 h-4 text-orange-400" />
        </a>

        {/* Primary WhatsApp Action */}
        <button
          onClick={handleWhatsAppClick}
          className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-950/60 transition-transform hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Hubungi kami melalui WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 shrink-0 relative z-10" />
        </button>
      </div>
    </aside>
  );
};
