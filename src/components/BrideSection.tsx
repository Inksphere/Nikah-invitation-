import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';

export const BrideSection: React.FC = () => {
  return (
    <section
      id="bride-section"
      className="py-14 sm:py-20 px-4 text-center select-none"
      aria-label="The Bride"
    >
      <div className="max-w-xl mx-auto">
        <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#7A2525] font-medium block mb-3 sm:mb-4">
          THE BRIDE
        </span>
        <h3 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#5C0B0B] font-normal leading-tight">
          {WEDDING_DATA.couple.bride}
        </h3>
      </div>
    </section>
  );
};
