import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { EmergencyRoadsideBanner } from './components/EmergencyRoadsideBanner.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { AdvantagesSection } from './components/AdvantagesSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { BookingFormSection } from './components/BookingFormSection.tsx';
import { LocationHoursSection } from './components/LocationHoursSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ServiceItem } from './data/workshopData.ts';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('booking-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* 2. Roadside Emergency Assistance Highlight Banner */}
        <EmergencyRoadsideBanner />

        {/* 3. Layanan Kami */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 4. Keunggulan Kami */}
        <AdvantagesSection />

        {/* 5. Galeri & Aktivitas Pengerjaan */}
        <GallerySection />

        {/* 6. Testimoni Pelanggan */}
        <TestimonialsSection />

        {/* 7. Formulir Booking Servis & WhatsApp Generator */}
        <BookingFormSection preFilledService={selectedService} />

        {/* 8. Lokasi & Jam Operasional */}
        <LocationHoursSection />

        {/* 9. Tanya Jawab (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
