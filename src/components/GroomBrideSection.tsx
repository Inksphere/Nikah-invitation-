import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';

export const GroomBrideSection: React.FC = () => {
  return (
    <section
      id="couple-section"
      className="py-14 sm:py-20 px-4 text-center select-none"
      aria-label="The Groom and Bride"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* THE GROOM */}
        <div className="mb-2">
          <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.3em] text-[#7C9A8B] font-semibold block">
            THE GROOM
          </span>
          <h3 className="font-script text-6xl sm:text-7xl md:text-8xl text-[#0E3824] font-normal leading-tight mt-1">
            {WEDDING_DATA.couple.groom}
          </h3>
        </div>

        {/* Cursive Ampersand with Adjusted Elegant Distance matching image */}
        <div className="my-5 sm:my-7">
          <span className="font-script text-4xl sm:text-5xl text-[#7C9A8B] font-light block leading-none">
            &amp;
          </span>
        </div>

        {/* THE BRIDE */}
        <div>
          <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.3em] text-[#7C9A8B] font-semibold block">
            THE BRIDE
          </span>
          <h3 className="font-script text-6xl sm:text-7xl md:text-8xl text-[#0E3824] font-normal leading-tight mt-1">
            {WEDDING_DATA.couple.bride}
          </h3>
        </div>
      </div>
    </section>
  );
};
