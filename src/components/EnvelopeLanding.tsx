import React, { useState } from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { WaxSeal } from './WaxSeal';
import { ChevronDown, Heart } from 'lucide-react';

interface EnvelopeLandingProps {
  isOpened: boolean;
  onOpen: () => void;
  onReset?: () => void;
}

export const EnvelopeLanding: React.FC<EnvelopeLandingProps> = ({
  isOpened,
  onOpen,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleEnvelopeClick = () => {
    if (!isOpened) {
      onOpen();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && !isOpened) {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <section
      id="envelope-section"
      className="relative min-h-screen w-full flex flex-col items-center justify-between py-10 md:py-16 px-4 select-none overflow-hidden bg-[#F9FAF8]"
      aria-label="Nikah Envelope Invitation"
    >
      {/* Background soft botanical foliage vignettes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-radial from-[#EBF1ED]/70 to-transparent pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-radial from-[#EBF1ED]/80 to-transparent pointer-events-none -z-10" />

      {/* Top Header Typography */}
      <div className="text-center pt-2 md:pt-4 z-10">
        <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[#7C9A8B] tracking-wide mb-1 sm:mb-2">
          The Beginning of Forever
        </p>
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E3824] font-normal leading-tight">
          {WEDDING_DATA.couple.displayName}
        </h1>
      </div>

      {/* Envelope Interactive Centerpiece */}
      <div className="relative my-auto py-8 sm:py-12 flex items-center justify-center w-full max-w-[560px] perspective-1000 z-10">
        <div
          role="button"
          tabIndex={0}
          aria-expanded={isOpened}
          aria-label="Click envelope to open the wedding invitation"
          onClick={handleEnvelopeClick}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-[310px] sm:w-[420px] md:w-[480px] h-[200px] sm:h-[270px] md:h-[310px] cursor-pointer transition-transform duration-500 ease-out focus:outline-none focus-visible:ring-4 focus-visible:ring-[#0E3824]/30 rounded-md ${
            isOpened
              ? 'translate-y-20 sm:translate-y-28 scale-95'
              : isHovered
              ? 'scale-[1.02]'
              : 'scale-100'
          }`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Envelope Shadow */}
          <div
            className={`absolute inset-0 rounded-lg transition-all duration-700 pointer-events-none ${
              isOpened
                ? 'shadow-[0_20px_45px_rgba(14,56,36,0.22)]'
                : 'shadow-[0_25px_50px_rgba(14,56,36,0.28),0_10px_20px_rgba(0,0,0,0.06)]'
            }`}
          />

          {/* Envelope Pocket Back Inside (visible when flap opens) */}
          <div className="absolute inset-0 bg-[#0B2E1D] rounded-lg overflow-hidden border border-[#082417]">
            {/* Subtle paper grain & gold speckling inside */}
            <div className="w-full h-full opacity-30 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:14px_14px]" />
          </div>

          {/* Arched Emerald Invitation Card Inside that slides upward when opened */}
          <div
            className={`absolute left-4 right-4 sm:left-6 sm:right-6 h-[230px] sm:h-[310px] md:h-[360px] rounded-t-[100px] sm:rounded-t-[130px] bg-[#0E3824] border-2 border-[#1B5237] shadow-2xl p-4 sm:p-6 flex flex-col items-center justify-between transition-all duration-1000 ease-out z-20 text-white ${
              isOpened
                ? '-translate-y-44 sm:-translate-y-64 md:-translate-y-76 scale-105 opacity-100'
                : 'translate-y-0 opacity-0 pointer-events-none'
            }`}
            style={{
              background: 'linear-gradient(175deg, #12472E 0%, #0E3824 55%, #082618 100%)',
            }}
          >
            {/* Card Header matching reference image */}
            <div className="text-center pt-2 sm:pt-4">
              <p className="font-cinzel text-[8px] sm:text-[10px] tracking-[0.25em] text-[#A2BCAD] uppercase">
                TOGETHER WITH OUR FAMILIES
              </p>
              <h2 className="font-script text-2xl sm:text-4xl md:text-5xl text-white font-normal leading-tight mt-1">
                {WEDDING_DATA.couple.groomFull} &amp; {WEDDING_DATA.couple.bride}
              </h2>
            </div>

            {/* Middle Invocation */}
            <div className="text-center my-auto py-1">
              <p className="font-cinzel text-[8px] sm:text-[10px] tracking-[0.2em] text-[#C2D6CA] uppercase">
                INVITE YOU TO CELEBRATE OUR
              </p>
              <p className="font-cinzel font-semibold text-xs sm:text-base md:text-lg tracking-[0.25em] text-white mt-0.5">
                {WEDDING_DATA.event.occasion}
              </p>
              <div className="flex items-center justify-center gap-2 my-1 text-[#A2BCAD]">
                <div className="w-8 h-px bg-[#A2BCAD]/50" />
                <Heart className="w-2.5 h-2.5 fill-[#A2BCAD] text-[#A2BCAD]" />
                <div className="w-8 h-px bg-[#A2BCAD]/50" />
              </div>
            </div>

            {/* Bottom Details matching reference image */}
            <div className="w-full text-center border-t border-white/15 pt-2 text-[9px] sm:text-xs text-emerald-100 font-cinzel space-y-0.5 tracking-wider">
              <p className="font-semibold text-white tracking-widest">{WEDDING_DATA.event.shortDate}</p>
              <p className="text-[9px] sm:text-[11px] text-[#A2BCAD] uppercase">{WEDDING_DATA.event.weekday} · {WEDDING_DATA.event.timeRange}</p>
              <p className="text-[8px] sm:text-[10px] text-emerald-200 tracking-widest">{WEDDING_DATA.venue.name} PADAPPARAMBA</p>
            </div>
          </div>

          {/* Envelope Front Left & Right Fold Triangles (Emerald & Eucalyptus) */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            {/* Left triangle flap */}
            <div
              className="absolute left-0 bottom-0 top-0 w-1/2 rounded-bl-lg"
              style={{
                clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
                background: 'linear-gradient(135deg, #185A3B 0%, #0E3824 60%, #082819 100%)',
                borderLeft: '1px solid #1C6341',
                borderBottom: '1px solid #082819',
              }}
            />
            {/* Right triangle flap */}
            <div
              className="absolute right-0 bottom-0 top-0 w-1/2 rounded-br-lg"
              style={{
                clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)',
                background: 'linear-gradient(-135deg, #185A3B 0%, #0E3824 60%, #082819 100%)',
                borderRight: '1px solid #1C6341',
                borderBottom: '1px solid #082819',
              }}
            />
            {/* Bottom triangle fold */}
            <div
              className="absolute left-0 right-0 bottom-0 h-[58%] rounded-b-lg"
              style={{
                clipPath: 'polygon(0% 100%, 50% 10%, 100% 100%)',
                background: 'linear-gradient(to top, #0A2B1C 0%, #11422B 80%, #164F34 100%)',
                boxShadow: '0 -2px 10px rgba(0,0,0,0.25)',
              }}
            />
          </div>

          {/* Folded Top Flap (Triangular) - Flips 180deg upward when opened */}
          <div
            className={`absolute top-0 left-0 right-0 h-[62%] transition-transform duration-700 ease-in-out z-40 rounded-t-lg ${
              isOpened ? 'pointer-events-none' : ''
            }`}
            style={{
              transformOrigin: 'top center',
              transform: isOpened ? 'rotateX(180deg)' : 'rotateX(0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front face of top flap */}
            <div
              className="w-full h-full relative backface-hidden rounded-t-lg"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                background: 'linear-gradient(180deg, #1C5F3F 0%, #0E3824 75%, #072517 100%)',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.28))',
              }}
            >
              {/* Initials "SF" in calligraphy on the flap */}
              <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#EBF1ED] font-semibold italic select-none tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                  {WEDDING_DATA.couple.initials}
                </span>
              </div>
            </div>

            {/* Back face of top flap */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden rounded-t-lg"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                background: 'linear-gradient(180deg, #092618 0%, #0E3824 100%)',
                transform: 'rotateX(180deg)',
              }}
            />
          </div>

          {/* Circular Wax Seal near the lower center apex */}
          <div
            className={`absolute top-[48%] sm:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
              isOpened ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'
            }`}
          >
            <WaxSeal initials={WEDDING_DATA.couple.initials} isOpened={isOpened} onClick={onOpen} />
          </div>
        </div>
      </div>

      {/* Bottom Text & Actions */}
      <div className="text-center pb-4 z-10">
        {!isOpened ? (
          <button
            onClick={onOpen}
            className="group font-script text-2xl sm:text-3xl text-[#0E3824] hover:text-[#185A3B] transition-all duration-300 flex items-center justify-center gap-2 mx-auto cursor-pointer focus:outline-none"
          >
            <span className="group-hover:translate-y-[-2px] transition-transform">
              Click Envelope to Open
            </span>
          </button>
        ) : (
          <div className="flex flex-col items-center gap-2 animate-fade-in">
            <a
              href="#calendar-section"
              className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest text-[#0E3824] font-medium hover:text-[#185A3B] transition-colors py-2 px-5 border border-[#0E3824]/20 rounded-full hover:border-[#0E3824]/50 bg-white shadow-xs"
            >
              <span>Scroll to View Invitation</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#0E3824]" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
