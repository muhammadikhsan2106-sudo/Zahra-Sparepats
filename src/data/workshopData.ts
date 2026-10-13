export interface ServiceItem {
  id: string;
  name: string;
  category: 'mobil' | 'motor' | 'both' | 'darurat';
  headline: string;
  description: string;
  features: string[];
  duration: string;
  estimatedPrice: string;
  recommendedFor: string;
  iconName: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  vehicle: string;
  avatarText: string;
  rating: number;
  date: string;
  review: string;
  serviceUsed: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const WORKSHOP_INFO = {
  name: 'Zahra Spareparts & Servis',
  subName: 'Berkah Jaya Motor & Mobil',
  tagline: 'Bengkel Motor Dan Mobil, Mekanik Panggilan 24 Jam, Solusi Perawatan & Perbaikan Kendaraan Terpercaya',
  phone: '+62 831-7810-3534',
  phoneDisplay: '0831-7810-3534',
  whatsappNumber: '6283178103534',
  emergencyHotline: '0831-7810-3534',
  email: 'kontak@zahrasparepart.com',
  address: 'https://maps.app.goo.gl/uV8U1FqmRsf945so6',
  city: 'BUARAN HANKAM - TANGERANG SELATAN',
  operationalHoursWorkshop: 'Senin – Sabtu: 08.00 – 18.00 WIB (Minggu: By Appointment)',
  operationalHoursEmergency: '24 Jam Nonstop Setiap Hari (Siaga Darurat)',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.28589768653!2d106.8227!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e89fb2!2sSentra%20Otomotif!5e0!3m2!1sid!2sid!4v1700000000000',
  serviceRadius: 'tangerang selatan dan sekitarnya',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'servis-berkala',
    name: 'Servis Rutin / Berkala',
    category: 'both',
    headline: 'Perawatan preventif menyeluruh 25+ titik inspeksi',
    description: 'Pengecekan sistem rem, filter udara, busi, transmisi, tekanan ban, fluida pendingin, dan pembersihan ruang bakar untuk menjaga performa maksimal.',
    features: [
      'Pembersihan throttle body & injektor',
      'Pengecekan 25+ titik kelayakan keselamatan',
      'Pembersihan sistem pengereman 4 roda/roda 2',
      'Pengecekan belt, rantai, dan fluida radiator'
    ],
    duration: '60 - 90 Menit',
    estimatedPrice: 'Mulai Rp 100.000 (Motor) / Rp 350.000 (Mobil)',
    recommendedFor: 'Setiap kelipatan 5.000 - 10.000 km atau 6 bulan sekali',
    iconName: 'Wrench',
},
  {
    id: 'tune-up-ecu',
    name: 'Tune Up & Diagnostic Scan',
    category: 'both',
    headline: 'Reset & kalibrasi komputer injeksi mesin presisi',
    description: 'Diagnostik mendalam, serta mengoptimalkan efisiensi BBM.',
    features: [
      'Diagnostik scanner multi-brand computerized',
      'Gurah mesin & carbon cleaner ruang bakar',
      'Kalibrasi sensor airflow & oxygen sensor',
      'Penyetelan celah katup / klep presisi'
    ],
    duration: '90 - 120 Menit',
    estimatedPrice: 'Mulai Rp 150.000 (Motor) / Rp 450.000 (Mobil)',
    recommendedFor: 'Kendaraan terasa berat, boros BBM, atau lampu check engine menyala',
    iconName: 'Cpu',
  },
  {
    id: 'ganti-oli-filter',
    name: 'Ganti Oli & Filter Original',
    category: 'both',
    headline: '100% oli resmi tersegel & filter oli genuine',
    description: 'Tersedia ragam pelumas terkemuka (Shell, Pertamina Fastron, Castrol, Motul, Yamalube, Honda AHM) dengan jaminan keaslian barcode resmi distributor.',
    features: [
      'Jaminan 100% oli asli bersertifikat',
    ],
    duration: '20 - 35 Menit',
    estimatedPrice: 'Mulai Rp 65.000 (Motor) / Rp 320.000 (Mobil paket 4L)',
    recommendedFor: 'Setiap 2.500 - 4.000 km (Motor) / 5.000 - 10.000 km (Mobil)',
    iconName: 'Droplet',
  },
  {
    id: 'overhaul-mesin',
    name: 'Overhaul Mesin (Turun Mesin)',
    category: 'both',
    headline: 'Restorasi performa mesin prima bergaransi tertulis',
    description: 'Perbaikan besar untuk mesin yang mengalami overheat, asap putih/ngebul, suara kasar, oli rembes, atau hilang kompresi dengan suku cadang presisi pabrikan.',
    features: [
      'Skir klep presisi & ganti seal klep',
      'Ganti ring piston, metal jalan/duduk, & paking set',
      'Pembersihan kerak ruang bakar menyeluruh',
      'Garansi pengerjaan & suku cadang hingga 30 hari'
    ],
    duration: '2 - 5 Hari Kerja',
    estimatedPrice: 'Konsultasi & Estimasi Rinci di Awal',
    recommendedFor: 'Mesin ngebul putih, kompresi hilang, air radiator campur oli',
    iconName: 'Cog',
  },
  {
    id: 'kelistrikan-aki',
    name: 'Kelistrikan, Aki & Starter',
    category: 'both',
    headline: 'Solusi sistem starter, alternator, aki soak, & perkabelan',
    description: 'Penanganan kelistrikan bodi, servis dinamo starter & alternator pengisian aki, ganti aki bergaransi, instalasi lampu LED terang, serta perbaikan korsleting kabel.',
    features: [
      'Servis dinamo starter & dinamo ampere (alternator)',
      'Perbaikan jalur perkabelan & sekring rapuh'
    ],
    duration: '45 - 90 Menit',
    estimatedPrice: 'Mulai Rp 50.000 (Jasa cek) / Harga aki resmi',
    recommendedFor: 'Kendaraan susah distarter, lampu redup, atau sering aki tekor',
    iconName: 'Zap',
  },
  {
    id: 'mekanik-panggilan-24jam',
    name: 'Mekanik Panggilan Darurat 24 Jam',
    category: 'darurat',
    headline: 'Solusi cepat saat motor atau mobil mogok di jalan & rumah',
    description: 'Unit mekanik mobile siap meluncur kapan pun dengan perkakas darurat lengkap: jumper aki, ganti vanbelt putus, tambal ban/ganti ban serep, dan perbaikan mesin di tempat.',
    features: [
      'Respon cepat langsung via WhatsApp & telepon 24 jam',
      'Mekanik berpengalaman datang membawa spare parts darurat'
    ],
    duration: 'Tiba 30 - 45 Menit (tergantung jarak)',
    estimatedPrice: 'Jasa panggilan transparan mulai Rp 100.000 + parts',
    recommendedFor: 'Mogok di jalan, kantor, atau garasi rumah',
    iconName: 'Truck',
  },
];

export const ADVANTAGES_LIST: AdvantageItem[] = [
  {
    id: 'adv-roadside',
    title: 'Solusi Kendala Saat di Jalan',
    highlight: 'Mekanik Panggilan Siaga 24 Jam Nonstop',
    description: 'Tidak perlu panik ketika kendaraan mogok malam hari atau di perjalanan. Mekanik kami siap meluncur ke lokasi dengan peralatan lengkap dan spare parts darurat.',
    iconName: 'AlertCircle',
  },
  {
    id: 'adv-experience',
    title: 'Mekanik Berpengalaman & Tersertifikasi',
    highlight: 'Teknisi Handal dan berpengalaman',
    description: 'Seluruh mekanik menguasai berbagai sistem injeksi, transmisi matic/manual, karburator, dan kelistrikan modern untuk mobil dan motor.',
    iconName: 'CheckCircle2',
  },
  {
    id: 'adv-transparency',
    title: 'Harga Transparan & Jujur',
    highlight: 'Estimasi di Awal Tanpa Biaya Siluman',
    description: 'Setiap penggantian spare part dan biaya jasa dikonfirmasikan kepada Anda sebelum pengerjaan. Bukti fisik suku cadang lama selalu kami serahkan kembali.',
    iconName: 'BadgePercent',
  },
  {
    id: 'adv-warranty',
    title: 'Garansi Pengerjaan & Suku Cadang Asli',
    highlight: 'Ketenangan dengan Garansi Nyata',
    description: 'Kami memberikan jaminan garansi servis serta hanya menggunakan suku cadang original atau aftermarket berkualitas standar OEM terbaik yang tahan lama.',
    iconName: 'ShieldCheck',
  },
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'testi-2',
    name: 'Rian Firmansyah',
    role: 'Karyawan Swasta',
    vehicle: 'Yamaha NMAX 155 Connected',
    avatarText: 'RF',
    rating: 5,
    date: '1 minggu yang lalu',
    review: 'Rutin servis CVT dan ganti oli Motul di sini. Tarikan motor jadi enteng banget dan getaran gredek hilang total. Mekaniknya teliti, dijelasin detail kondisi v-belt dan roller tanpa maksa ganti kalau masih bagus. Sangat jujur!',
    serviceUsed: 'Servis Berkala & Tune Up Motor',
  },
  {
    id: 'testi-3',
    name: 'Hj. Siti Rahmawati',
    role: 'Ibu Rumah Tangga',
    vehicle: 'Honda Brio Satya E 2021',
    avatarText: 'SR',
    rating: 5,
    date: '2 minggu yang lalu',
    review: 'Kaki-kaki depan bunyi kletek-kletek pas lewat jalan jelek. Setelah dicek dan ganti link stabilizer serta kampas rem di Zahra Sparepart, mobil langsung hening lagi. Harganya jauh lebih terjangkau dibanding bengkel resmi tapi kualitasnya setara.',
    serviceUsed: 'Perbaikan Rem & Kaki-kaki',
  },
  {
    id: 'testi-4',
    name: 'Deni Kurniawan',
    role: 'Driver Online',
    vehicle: 'Toyota Kijang Innova Reborn Diesel',
    avatarText: 'DK',
    rating: 5,
    date: '3 minggu yang lalu',
    review: 'Scan komputer dan kuras ruang bakar mesin diesel. Tarikan kembali responsif, asap hitam hilang. Yang paling saya suka mekaniknya transparan soal estimasi biaya dari awal sebelum sentuh baut. Recommended buat pemilik mobil keluarga!',
    serviceUsed: 'Tune Up & Diagnostic Scan',
  },
  {
    id: 'testi-5',
    name: 'Agus Santoso',
    role: 'Komuter Harian',
    vehicle: 'Honda Vario 125 FI',
    avatarText: 'AS',
    rating: 5,
    date: '1 bulan yang lalu',
    review: 'Aki tiba-tiba tekor di parkiran kantor pas mau pulang kerja hujan-hujan. Mekanik Zahra datang bawa aki GS Astra baru yang segel dan bantu pasang sampai hidup lancar. Sangat sigap dan ramah!',
    serviceUsed: 'Layanan Panggilan Darurat & Ganti Aki',
  },
  {
    id: 'testi-6',
    name: 'Hendrik Wijaya',
    role: 'Pecinta Otomotif',
    vehicle: 'Mitsubishi Pajero Sport Dakar',
    avatarText: 'HW',
    rating: 5,
    date: '1 bulan yang lalu',
    review: 'Tempat langganan servis rutin dan ganti oli mesin sintetis. Ruang tunggunya bersih ber-AC dan kita bisa lihat mekanik kerja langsung lewat kaca transparan. Alat hidroliknya modern dan spare part terjamin original.',
    serviceUsed: 'Ganti Oli & Inspeksi Lengkap',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Area Bengkel Modern',
    category: 'Fasilitas Bengkel',
    imageSrc: '/src/assets/images/hero_bengkel_service_1791887477658.jpg',
    caption: 'Fasilitas bengkel bersih dengan servis motor terpisah untuk pengerjaan aman.',
  },
  {
    id: 'gal-2',
    title: 'Mekanik Panggilan Darurat 24 Jam',
    category: 'Layanan Panggilan',
    imageSrc: '/src/assets/images/mechanic_panggilan_24jam_1791887478307.jpg',
    caption: 'Armada mekanik mobile siaga meluncur ke jalan tol, perkantoran, dan perumahan saat kendaraan mogok.',
  },
  {
    id: 'gal-3',
    title: 'Presisi Tune Up & Overhaul Mesin',
    category: 'Pengerjaan Mesin',
    imageSrc: '/src/assets/images/bengkel_engine_tuneup_1791887479257.jpg',
    caption: 'Pengerjaan mekanik teliti menggunakan perkakas standar industri untuk restorasi performa mesin kendaraan.',
  },
  {
    id: 'gal-4',
    title: 'Showroom Sparepart Asli & Oli Resmi',
    category: 'Suku Cadang Asli',
    imageSrc: '/src/assets/images/bengkel_spareparts_rack_1791887478884.jpg',
    caption: 'Rak suku cadang original, kampas rem, filter, dan pelumas resmi tersegel langsung dari distributor terpercaya.',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Bagaimana cara memanggil mekanik saat mobil atau motor mogok di jalan?',
    answer: 'Cukup klik tombol "Hubungi Kami Via WhatsApp" atau "Panggilan Darurat 24 Jam" di website ini. Kirimkan titik lokasi Anda (Share Live Location), sebutkan jenis kendaraan dan kendala yang dialami. Tim mekanik darurat kami akan segera meluncur dengan peralatan yang sesuai.',
  },
  {
    id: 'faq-3',
    question: 'Apakah suku cadang (spare parts) yang dijual dijamin 100% original?',
    answer: 'Ya, Zahra Spare Parts menjamin keaslian setiap suku cadang original (OEM) dari APM resmi seperti Honda, Yamaha, Toyota, Suzuki, Mitsubishi, Daihatsu, serta brand aftermarket teruji (Denso, Bosch, Aspira, Brembo). Kardus dan barcode dapat Anda verifikasi langsung.',
  },
  {
    id: 'faq-5',
    question: 'Apakah ada garansi untuk pengerjaan servis?',
    answer: 'Tentu! Kami memberikan garansi servis hingga 14 hari untuk servis rutin dan hingga 30 hari untuk pekerjaan perbaikan berat seperti overhaul mesin atau perbaikan kaki-kaki. Jika keluhan serupa muncul kembali dalam masa garansi, kami perbaiki tanpa tambahan biaya jasa.',
  },
  {
    id: 'faq-6',
    question: 'Metode pembayaran apa saja yang diterima di bengkel?',
    answer: 'Kami menerima pembayaran Tunai (Cash), Transfer Bank (BCA, Mandiri, BRI, BNI), QRIS (GoPay, OVO, Dana, ShopeePay), serta kartu debit dan kredit tanpa biaya tambahan tersembunyi.',
  },
];
