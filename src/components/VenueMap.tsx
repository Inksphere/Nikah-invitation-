import React, { useState } from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const VenueMap: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    WEDDING_DATA.venue.name + ', ' + WEDDING_DATA.venue.addressLine1 + ' ' + WEDDING_DATA.venue.addressLine2
  )}&t=m&z=15&output=embed&iwloc=near`;

  return (
    <div className="w-full max-w-[540px] mx-auto px-4 mt-8 mb-4">
      <div className="relative rounded-xl overflow-hidden border border-[#A2BCAD] shadow-md bg-white group">
        {/* Floating Google Maps Card Overlay */}
        <div className="absolute top-3 left-3 right-3 z-10 bg-white/95 backdrop-blur-xs p-3 rounded-lg shadow-sm border border-slate-200/80 flex items-start justify-between gap-3 text-left">
          <div className="min-w-0 flex-1">
            <h4 className="font-cinzel font-semibold text-xs sm:text-sm text-[#0E3824] truncate">
              {WEDDING_DATA.venue.name}
            </h4>
            <p className="font-sans text-[11px] text-slate-500 line-clamp-2 mt-0.5">
              {WEDDING_DATA.venue.addressLine1} {WEDDING_DATA.venue.addressLine2}
            </p>
          </div>
          <a
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 rounded-full bg-[#0E3824] text-white hover:bg-[#185A3B] transition-colors shadow-xs"
            title="Open in Google Maps"
            aria-label="Open in Google Maps"
          >
            <Navigation className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Embedded Map */}
        <div className="relative w-full h-[260px] sm:h-[300px] bg-[#E8EFEA]">
          {!mapLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#EBF1ED] text-slate-500 z-0">
              <MapPin className="w-8 h-8 text-[#0E3824] animate-pulse mb-2" />
              <span className="text-xs font-sans tracking-wide text-[#0E3824]">Loading Venue Map...</span>
            </div>
          )}
          <iframe
            title="Venue Location Map"
            src={embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setMapLoaded(true)}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Action Bar */}
        <div className="p-3 bg-[#F9FAF8] border-t border-[#EBF1ED] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#0E3824]">
            <MapPin className="w-3.5 h-3.5 text-[#185A3B]" />
            <span className="font-sans font-medium">Padapparamba, Malappuram</span>
          </div>

          <a
            href={WEDDING_DATA.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-cinzel font-semibold text-[#0E3824] hover:text-[#185A3B] transition-colors py-1.5 px-3 rounded-md hover:bg-[#EBF1ED]"
          >
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
