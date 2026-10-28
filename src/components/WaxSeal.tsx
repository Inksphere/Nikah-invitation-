import React from 'react';

interface WaxSealProps {
  initials?: string;
  isOpened?: boolean;
  onClick?: () => void;
  className?: string;
}

export const WaxSeal: React.FC<WaxSealProps> = ({
  initials = 'SF',
  isOpened = false,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Emerald wax seal to open invitation"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`relative cursor-pointer group select-none transition-all duration-700 ease-out ${
        isOpened
          ? 'scale-90 opacity-0 pointer-events-none translate-y-4'
          : 'scale-100 opacity-100 hover:scale-105 active:scale-95'
      } ${className}`}
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center filter drop-shadow-[0_8px_16px_rgba(10,46,28,0.5)]">
        {/* Organic irregular wax edge */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-[#0E3824] group-hover:fill-[#134630] transition-colors duration-300"
        >
          <defs>
            <radialGradient id="waxGreenHighlight" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#256B48" />
              <stop offset="40%" stopColor="#0E3824" />
              <stop offset="85%" stopColor="#072417" />
              <stop offset="100%" stopColor="#03140C" />
            </radialGradient>
            <radialGradient id="innerDepressionGreen" cx="45%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#051C12" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#0E3824" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#03120A" stopOpacity="0.6" />
            </radialGradient>
          </defs>

          {/* Organic undulating seal boundary */}
          <path
            d="M 50,5
               C 62,4 72,10 82,18
               C 91,26 96,36 95,49
               C 94,62 89,73 80,82
               C 70,91 58,95 47,94
               C 34,93 23,88 15,79
               C 7,69 4,57 6,45
               C 8,32 15,21 25,13
               C 34,6 42,6 50,5 Z"
            fill="url(#waxGreenHighlight)"
          />

          {/* Gold / White rim ridge for stamped depth */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="#051A10"
            strokeWidth="2.5"
            strokeOpacity="0.6"
          />
          <circle
            cx="49"
            cy="49"
            r="37"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />

          {/* Recessed medallion bed */}
          <circle cx="50" cy="50" r="32" fill="url(#innerDepressionGreen)" />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.8"
            strokeDasharray="2,2"
            strokeOpacity="0.6"
          />
        </svg>

        {/* Embossed Monogram Initials "SF" in Gold/Ivory */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            className="font-script text-[#EBF1ED] font-bold tracking-tight text-xl md:text-2xl drop-shadow-[0_-1px_1px_rgba(3,20,12,0.9)] select-none pl-0.5 pt-0.5"
            style={{
              textShadow: '0 1px 1px rgba(212,175,55,0.4), 0 -1px 1px rgba(3,20,12,0.9)',
            }}
          >
            {initials}
          </span>
        </div>

        {/* Gloss highlight arc */}
        <div className="absolute top-2 left-3 w-4 h-2 rounded-full bg-white/20 transform -rotate-45 pointer-events-none filter blur-[0.5px]" />
      </div>
    </div>
  );
};
