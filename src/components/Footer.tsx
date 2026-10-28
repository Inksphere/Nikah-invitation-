import React from 'react';
import { WEDDING_DATA } from '../config/weddingData';

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-8 sm:py-10 text-center bg-transparent border-t border-[#A2BCAD]/30 relative z-10"
      aria-label="Site Footer"
    >
      <div className="max-w-md mx-auto px-4 flex flex-col items-center justify-center gap-1.5">
        <p className="font-sans text-xs sm:text-sm text-[#7C9A8B] tracking-wider">
          Created by{' '}
          <a
            href={WEDDING_DATA.creator.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#0E3824] hover:text-[#185A3B] underline decoration-[#7C9A8B]/50 hover:decoration-[#0E3824] underline-offset-4 transition-colors"
          >
            {WEDDING_DATA.creator.name}
          </a>
        </p>
      </div>
    </footer>
  );
};
