import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
}) => {
  const sizeMap = {
    sm: { icon: 32, text: 'text-base', subText: 'text-[10px]' },
    md: { icon: 42, text: 'text-lg', subText: 'text-xs' },
    lg: { icon: 54, text: 'text-xl', subText: 'text-xs' },
    xl: { icon: 72, text: 'text-2xl', subText: 'text-sm' },
  };

  const { icon: iconDimension, text: titleClass, subText: subClass } = sizeMap[size];

  // Vector emblem recreating the exact gear, eagle wing and letter Z in blue & orange
  const EmblemSvg = (
    <svg
      width={iconDimension}
      height={iconDimension}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Logo Zahra Sparepart & Service"
    >
      <defs>
        <linearGradient id="gearBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3E62" />
          <stop offset="100%" stopColor="#0B192C" />
        </linearGradient>
        <linearGradient id="gearOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B00" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="wingBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0F2B5C" />
        </linearGradient>
      </defs>

      {/* Outer subtle ring glow */}
      <circle cx="50" cy="50" r="46" stroke="#334155" strokeWidth="1" strokeDasharray="2 4" opacity="0.6" />

      {/* Blue Gear Section (Left & Bottom) */}
      <path
        d="M 50 16 A 34 34 0 0 0 50 84 L 50 72 A 22 22 0 0 1 50 28 Z"
        fill="url(#gearBlue)"
      />
      {/* Gear teeth blue */}
      <path
        d="M 16 50 h -6 v -6 h 6 Z M 22 30 l -5 -4 l -4 4 l 5 4 Z M 22 70 l -5 4 l -4 -4 l 5 -4 Z M 32 82 l -4 5 l -4 -4 l 4 -5 Z M 50 84 v 6 h -6 v -6 Z"
        fill="#0F2B5C"
      />

      {/* Orange Gear Section (Right & Top) */}
      <path
        d="M 50 16 A 34 34 0 0 1 50 84 L 50 72 A 22 22 0 0 0 50 28 Z"
        fill="url(#gearOrange)"
      />
      {/* Gear teeth orange */}
      <path
        d="M 84 50 h 6 v -6 h -6 Z M 78 30 l 5 -4 l 4 4 l -5 4 Z M 78 70 l 5 4 l 4 -4 l -5 -4 Z M 68 18 l 4 -5 l 4 4 l -4 5 Z M 50 16 v -6 h 6 v 6 Z"
        fill="#EA580C"
      />

      {/* Dynamic Eagle Head / Wing stylized into letter Z */}
      {/* Upper Wing & Eagle Beak in vibrant blue */}
      <path
        d="M 28 42 C 34 38, 48 37, 62 41 C 69 43, 76 43, 81 44 C 82 44.5, 78 47, 74 48 C 65 50, 52 50, 42 46 Z"
        fill="url(#wingBlue)"
      />
      <path
        d="M 26 47 C 32 44, 45 44, 56 48 C 60 49, 54 52, 46 52 C 37 52, 30 50, 26 47 Z"
        fill="#1E40AF"
      />
      {/* Eagle Beak accent */}
      <polygon points="80,44 86,45.5 81,47.5" fill="#FF8A00" />
      {/* Eagle Eye dot */}
      <circle cx="75" cy="44.2" r="1.3" fill="#FFFFFF" />

      {/* Bold Orange 'Z' diagonal stem & bottom bar */}
      <path
        d="M 58 45 L 36 67 L 68 67 C 69 67, 72 65, 71 63 L 49 63 L 64 47 Z"
        fill="#FF6500"
      />
      {/* Blue accent base of the Z */}
      <path
        d="M 33 69 L 69 69 L 66 73 L 31 73 Z"
        fill="#0F2B5C"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{EmblemSvg}</div>;
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center group ${className}`}>
        {EmblemSvg}
        <div className="mt-2 flex flex-col items-center">
          <span className="font-extrabold tracking-wider text-slate-100 uppercase text-sm">
            ZAHRA SPAREPART
          </span>
          <span className="text-[10px] tracking-widest text-orange-400 font-semibold uppercase mt-0.5">
            SPAREPARTS & SERVICE
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {EmblemSvg}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight text-white ${titleClass}`}>
            ZAHRA <span className="text-orange-500">SPAREPART</span>
          </span>
        </div>
        <span className={`font-semibold tracking-wider text-slate-400 uppercase mt-1 ${subClass}`}>
          Spareparts & Service
        </span>
      </div>
    </div>
  );
};
