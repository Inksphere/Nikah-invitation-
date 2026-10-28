import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { FloralArtwork } from './FloralArtwork';

export const IslamicIntroduction: React.FC = () => {
  return (
    <section
      id="islamic-introduction"
      className="relative py-20 md:py-28 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
      aria-label="Islamic Invocation and Invitation"
    >
      {/* Delicate floral artwork in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <FloralArtwork variant="branch" opacity={0.35} className="scale-125" />
      </div>

      <div className="max-w-2xl w-full mx-auto relative z-10 px-4">
        {/* Arabic Calligraphy: Bismillah */}
        <div className="mb-6">
          <p
            className="font-arabic text-3xl sm:text-4xl md:text-5xl text-[#0E3824] font-normal leading-relaxed select-none"
            dir="rtl"
            lang="ar"
          >
            {WEDDING_DATA.islamic.bismillahArabic}
          </p>
        </div>

        {/* English Translation in Fine Script */}
        <div className="mb-10">
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#185A3B] leading-relaxed">
            In the Name of Allah
          </p>
          <p className="font-script text-xl sm:text-2xl md:text-3xl text-[#185A3B] leading-relaxed mt-1">
            The Most Gracious and The Most Merciful
          </p>
        </div>

        {/* Hairline Divider */}
        <div className="w-16 h-px bg-[#7C9A8B]/40 mx-auto mb-10" />

        {/* Warm Invitation Text */}
        <div className="space-y-2.5 font-cormorant text-lg sm:text-xl md:text-2xl text-[#0E3824] font-normal leading-relaxed">
          <p className="tracking-wide">With the blessings of Allah,</p>
          <p className="tracking-wide">We warmly invite you to join us</p>
          <p className="tracking-wide">for the Nikah ceremony of</p>

          <div className="pt-4">
            <h3 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#0E3824] font-normal tracking-wide">
              {WEDDING_DATA.couple.displayName}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
