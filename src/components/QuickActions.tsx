import React, { useState } from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { Share2, Check } from 'lucide-react';

export const QuickActions: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareText = `With the blessings of Allah, you are warmly invited to the Nikah ceremony of ${WEDDING_DATA.couple.displayName} on ${WEDDING_DATA.event.dateFormatted} at ${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.addressLine1} ${WEDDING_DATA.venue.addressLine2}. Location: ${WEDDING_DATA.venue.googleMapsUrl}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Nikah of ${WEDDING_DATA.couple.displayName}`,
          text: shareText,
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback
      }
    }

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      shareText + '\n\n' + window.location.href
    )}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      });
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2 select-none">
      {/* Share Invitation via WhatsApp Button Only (Scroll top button removed as requested) */}
      <button
        onClick={handleShare}
        aria-label="Share Wedding Invitation"
        className="flex items-center gap-1.5 py-2 px-3.5 rounded-full bg-white/95 text-[#0E3824] border border-[#A2BCAD] hover:bg-[#F9FAF8] hover:border-[#0E3824] shadow-md backdrop-blur-md transition-all duration-300 text-xs font-sans font-medium cursor-pointer"
        title="Share invitation"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline text-emerald-800">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5 text-[#185A3B]" />
            <span className="hidden sm:inline">Share</span>
          </>
        )}
      </button>
    </div>
  );
};
