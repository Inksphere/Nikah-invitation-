import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { FloralArtwork } from './FloralArtwork';

export const ClosingSection: React.FC = () => {
  return (
    <section
      id="closing-section"
      className="relative py-24 md:py-32 px-4 text-center overflow-hidden"
      aria-label="Closing Blessings"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <FloralArtwork variant="branch" opacity={0.35} className="scale-110 md:scale-125" />
      </div>

      <div className="max-w-2xl w-full mx-auto relative z-10 px-4">
        {/* "With Love & Blessings" */}
        <p className="font-cursive text-3xl sm:text-4xl md:text-5xl text-[#185A3B] font-normal mb-3 sm:mb-4">
          With Love &amp; Blessings
        </p>

        {/* Couple's Names in Calligraphy */}
        <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E3824] font-normal leading-tight mb-8 sm:mb-10">
          {WEDDING_DATA.couple.displayName}
        </h2>

        {/* Arabic Calligraphy Names (سِراج & فدة) & Dua */}
        <div className="my-8 space-y-4">
          <p
            className="font-arabic text-3xl sm:text-5xl text-[#0E3824] font-normal select-none"
            dir="rtl"
            lang="ar"
          >
            {WEDDING_DATA.couple.arabicNames}
          </p>

          <p
            className="font-arabic text-xl sm:text-2xl text-[#185A3B] leading-relaxed max-w-lg mx-auto select-none pt-2"
            dir="rtl"
            lang="ar"
          >
            {WEDDING_DATA.islamic.duaArabic}
          </p>
        </div>

        {/* Subtle decorative hairline divider */}
        <div className="w-12 h-px bg-[#7C9A8B]/40 mx-auto my-8" />

        {/* Date & Time */}
        <div className="space-y-1 font-cinzel text-base sm:text-lg md:text-xl text-[#0E3824] font-semibold tracking-wider">
          <p>{WEDDING_DATA.event.dateFormatted}</p>
          <p className="text-[#185A3B] font-normal text-sm sm:text-base tracking-widest">{WEDDING_DATA.event.timeRange}</p>
        </div>
      </div>
    </section>
  );
};
