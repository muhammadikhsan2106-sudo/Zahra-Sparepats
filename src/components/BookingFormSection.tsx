import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  AlertCircle
} from 'lucide-react';
import { WORKSHOP_INFO, SERVICES_LIST, ServiceItem } from '../data/workshopData.ts';

interface BookingFormSectionProps {
  preFilledService?: ServiceItem | null;
  preFilledDetails?: {
    vehicleType: string;
    services: string[];
    isMobile: boolean;
  } | null;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  preFilledService,
  preFilledDetails,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleType, setVehicleType] = useState<'mobil' | 'motor'>('mobil');
  const [vehicleModel, setVehicleModel] = useState('');
  const [selectedService, setSelectedService] = useState('Servis Rutin / Berkala');
  const [serviceType, setServiceType] = useState<'bengkel' | 'panggilan'>('bengkel');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('09:00');
  const [locationAddress, setLocationAddress] = useState('');
  const [complaintNote, setComplaintNote] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Set initial default date to tomorrow or today
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setBookingDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Sync pre-filled data if passed from services or calculator
  useEffect(() => {
    if (preFilledService) {
      setSelectedService(preFilledService.name);
      if (preFilledService.category === 'darurat') {
        setServiceType('panggilan');
      }
    }
  }, [preFilledService]);

  useEffect(() => {
    if (preFilledDetails) {
      setVehicleType(preFilledDetails.vehicleType === 'Motor' ? 'motor' : 'mobil');
      if (preFilledDetails.services.length > 0) {
        setSelectedService(preFilledDetails.services.join(' + '));
      }
      setServiceType(preFilledDetails.isMobile ? 'panggilan' : 'bengkel');
    }
  }, [preFilledDetails]);

  // Generate clean formatted WhatsApp text
  const formattedWhatsAppText = `*FORM BOOKING SERVIS - ZAHRA SPAREPARTS*
Halo Tim Mekanik Zahra Sparepart, saya ingin menjadwalkan servis kendaraan:

- *Nama*: ${name || '-'}
- *No. WhatsApp*: ${phone || '-'}
- *Jenis Kendaraan*: ${vehicleType === 'mobil' ? 'Mobil' : 'Motor'}
- *Merk / Tipe / Tahun*: ${vehicleModel || '-'}
- *Pilihan Servis*: ${selectedService}
- *Tipe Layanan*: ${serviceType === 'bengkel' ? 'Datang ke Bengkel' : 'Mekanik Panggilan ke Lokasi'}
- *Tanggal & Jam*: ${bookingDate} | ${bookingTime} WIB
${serviceType === 'panggilan' ? `- *Alamat / Titik Jemput*: ${locationAddress || '-'}\n` : ''}- *Keluhan / Catatan*: ${complaintNote || '-'}

Mohon konfirmasi ketersediaan slot & estimasi pengerjaan. Terima kasih!`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const encoded = encodeURIComponent(formattedWhatsAppText);
    const waUrl = `https://wa.me/${WORKSHOP_INFO.whatsappNumber}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedWhatsAppText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="booking-section" className="py-20 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Pemesanan Mudah & Cepat
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formulir Booking Servis & Mekanik Panggilan
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Pesan antrian tanpa perlu mengantre lama di bengkel, atau panggil mekanik langsung ke rumah maupun lokasi mogok Anda. Pesan otomatis terhubung ke WhatsApp resmi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Nama Lengkap *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Hendra Pratama"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Nomor WhatsApp / HP *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Contoh: 081234567890"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Tipe Kendaraan *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setVehicleType('mobil')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                        vehicleType === 'mobil'
                          ? 'bg-orange-500 border-orange-400 text-white'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span>🚗 Mobil</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setVehicleType('motor')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors flex items-center justify-center gap-1.5 ${
                        vehicleType === 'motor'
                          ? 'bg-orange-500 border-orange-400 text-white'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <span>🏍️ Motor</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Merk / Tipe / Tahun Kendaraan *
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      placeholder="Misal: Avanza 2018 / Vario 160"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Service & Visit Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Layanan Utama yang Diinginkan
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  >
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Servis Lengkap & Ganti Sparepart">
                      Servis Lengkap + Ganti Sparepart
                    </option>
                    <option value="Konsultasi Kendala Lainnya">
                      Konsultasi / Cek Masalah Lain
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Tipe Kunjungan
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setServiceType('bengkel')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                        serviceType === 'bengkel'
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      Datang ke Bengkel
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType('panggilan')}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                        serviceType === 'panggilan'
                          ? 'bg-orange-500 border-orange-400 text-white'
                          : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      Mekanik Panggilan
                    </button>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Tanggal Pengerjaan
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Perkiraan Jam (WIB)
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    >
                      <option value="08:30">08:30 WIB (Pagi)</option>
                      <option value="09:30">09:30 WIB</option>
                      <option value="11:00">11:00 WIB</option>
                      <option value="13:30">13:30 WIB (Siang)</option>
                      <option value="15:00">15:00 WIB</option>
                      <option value="16:30">16:30 WIB (Sore)</option>
                      <option value="24JAM-DARURAT">SEGERA / DARURAT SEKARANG</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Conditional Location if Mobile Service */}
              {serviceType === 'panggilan' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
                    Alamat Lengkap / Patokan Lokasi Jemput *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={locationAddress}
                      onChange={(e) => setLocationAddress(e.target.value)}
                      placeholder="Contoh: Jl. Anggrek No. 12 atau Pinggir Tol KM 14 arah Jakarta"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-amber-500/50 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Complaint Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Keluhan / Gejala Kendaraan (Opsional)
                </label>
                <textarea
                  rows={3}
                  value={complaintNote}
                  onChange={(e) => setComplaintNote(e.target.value)}
                  placeholder="Misal: Tarikan brebet saat gas dibuka, ada bunyi dengung di roda depan kanan, atau lampu aki menyala..."
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 shadow-lg shadow-emerald-950/60 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Booking via WhatsApp Resmi</span>
              </button>
            </form>
          </div>

          {/* WhatsApp Preview Side */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-7 space-y-5 lg:sticky lg:top-28">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Live Preview Pesan WhatsApp
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 font-medium py-1 px-2 rounded-md hover:bg-slate-900 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Pesan</span>
                  </>
                )}
              </button>
            </div>

            {/* Simulated Chat Bubble */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto">
              {formattedWhatsAppText}
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>
                Saat Anda menekan tombol kirim, WhatsApp akan langsung terbuka dengan teks di atas. Anda dapat melampirkan foto/video kendala atau membagikan live location (titik GPS).
              </span>
            </div>

            {submitted && (
              <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Formulir disiapkan! Tab WhatsApp telah dibuka untuk menyelesaikan booking.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
