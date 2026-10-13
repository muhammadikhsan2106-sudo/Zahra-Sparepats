import React, { useState } from 'react';
import {
  Wrench,
  Cpu,
  Droplet,
  ShieldAlert,
  Cog,
  Zap,
  Truck,
  CheckCircle
} from 'lucide-react';
import { SERVICES_LIST, ServiceItem } from '../data/workshopData.ts';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService: _onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'mobil' | 'motor' | 'darurat'>('all');

  const filteredServices = SERVICES_LIST.filter((service) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'darurat') return service.category === 'darurat';
    if (activeTab === 'mobil') return service.category === 'mobil' || service.category === 'both';
    if (activeTab === 'motor') return service.category === 'motor' || service.category === 'both';
    return true;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Cog':
        return <Cog className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'Truck':
        return <Truck className="w-5 h-5" />;
      default:
        return <Wrench className="w-5 h-5" />;
    }
  };

  return (
    <section id="layanan" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-400">
              Solusi Lengkap Motor & Mobil
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Layanan Bengkel Profesional & Terpercaya
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Mulai dari perawatan berkala, tune up digital, overhaul mesin, hingga penanganan darurat saat mogok di jalan raya. Dilengkapi teknisi ahli dan suku cadang asli.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Semua Layanan
            </button>
            <button
              onClick={() => setActiveTab('mobil')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'mobil'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Servis Mobil
            </button>
            <button
              onClick={() => setActiveTab('motor')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'motor'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Servis Motor
            </button>
            <button
              onClick={() => setActiveTab('darurat')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeTab === 'darurat'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Panggilan 24 Jam
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const isEmergency = service.category === 'darurat';
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-7 border transition-all duration-300 group hover:-translate-y-1 ${
                  isEmergency
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-orange-500/50 shadow-lg shadow-orange-950/20'
                    : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  {/* Service Card Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isEmergency
                          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                          : 'bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:bg-orange-500/20 group-hover:text-orange-400 group-hover:border-orange-500/30'
                      }`}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    {/* Editorial number identifier */}
                    <span className="font-mono text-xs font-bold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-orange-400/90 font-medium mt-1 mb-3">
                    {service.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
