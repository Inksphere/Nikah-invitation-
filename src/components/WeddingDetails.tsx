import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { FloralArtwork } from './FloralArtwork';
import { VenueMap } from './VenueMap';

export const WeddingDetails: React.FC = () => {
  return (
    <section
      id="wedding-details"
      className="relative py-20 md:py-28 px-4 text-center overflow-hidden"
      aria-label="Event Date & Venue Details"
    >
      {/* Subtle pale floral illustration behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <FloralArtwork variant="lily" opacity={0.35} className="scale-105" />
      </div>

      <div className="max-w-3xl w-full mx-auto relative z-10">
        {/* Date Display */}
        <div className="mb-4">
          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-[#0E3824]">
            {WEDDING_DATA.event.shortDate}
          </h2>
        </div>

        {/* Nikah Time with Letter Spacing */}
        <div className="mb-14 sm:mb-16">
          <p className="font-cinzel text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] text-[#185A3B] font-semibold">
            NIKAH AT 9:00 AM
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#7C9A8B] tracking-widest mt-1">
            (9:00 to 12:00)
          </p>
        </div>

        {/* Venue Heading in Script */}
        <div className="mb-3">
          <h3 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-[#0E3824] font-normal">
            Venue
          </h3>
        </div>

        {/* Venue Name */}
        <div className="mb-3">
          <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-[#0E3824]">
            {WEDDING_DATA.venue.name}
          </p>
        </div>

        {/* Venue Address */}
        <div className="space-y-1 font-cormorant text-lg sm:text-xl md:text-2xl text-[#0E3824]/90 font-medium leading-relaxed mb-6">
          <p>{WEDDING_DATA.venue.addressLine1}</p>
          <p>{WEDDING_DATA.venue.addressLine2}</p>
        </div>

        {/* Embedded Map & Directions */}
        <VenueMap />
      </div>
    </section>
  );
};
