/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { EnvelopeLanding } from './components/EnvelopeLanding';
import { CalendarSection } from './components/CalendarSection';
import { IslamicIntroduction } from './components/IslamicIntroduction';
import { GroomBrideSection } from './components/GroomBrideSection';
import { WeddingDetails } from './components/WeddingDetails';
import { WeddingCountdown } from './components/WeddingCountdown';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';
import { AudioPlayer, AudioPlayerHandle } from './components/AudioPlayer';
import { QuickActions } from './components/QuickActions';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const audioPlayerRef = useRef<AudioPlayerHandle | null>(null);

  // Prevent any scrolling until the user clicks the envelope button
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [isOpened]);

  const handleOpenEnvelope = () => {
    setIsOpened(true);

    // Auto-play the YouTube short wedding music upon user click
    if (audioPlayerRef.current) {
      audioPlayerRef.current.play();
    }

    // Smoothly scroll down to the rest of the invitation after the envelope card emerges
    setTimeout(() => {
      const calendarEl = document.getElementById('calendar-section');
      if (calendarEl) {
        calendarEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1100);
  };

  return (
    <div
      className={`min-h-screen bg-[#F9FAF8] text-[#0E3824] selection:bg-[#0E3824] selection:text-white relative ${
        !isOpened ? 'h-screen overflow-hidden' : ''
      }`}
    >
      {/* SECTION 1: Interactive Envelope Landing (Locked until clicked) */}
      <EnvelopeLanding
        isOpened={isOpened}
        onOpen={handleOpenEnvelope}
      />

      {/* Main Wedding Invitation Body Container (Unlocked only after opening) */}
      {isOpened && (
        <main className="w-full max-w-[900px] mx-auto px-4 animate-fade-in transition-all duration-1000">
          {/* Subtle Decorative Floral Hairline Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="w-24 h-px bg-[#7C9A8B]/30" />
            <span className="font-script text-2xl text-[#0E3824] px-4 select-none">SF</span>
            <div className="w-24 h-px bg-[#7C9A8B]/30" />
          </div>

          {/* SECTION 2: Mark Your Calendar */}
          <CalendarSection />

          {/* SECTION 3: Islamic Introduction */}
          <IslamicIntroduction />

          {/* SECTION 4 & 5: The Groom & The Bride (Adjusted distance & accurate font) */}
          <GroomBrideSection />

          {/* SECTION 6: Wedding Details & Venue Map */}
          <WeddingDetails />

          {/* SECTION 7: Live Countdown */}
          <WeddingCountdown />

          {/* SECTION 8: Closing Message */}
          <ClosingSection />
        </main>
      )}

      {/* FOOTER: Created by Hashim (Instagram link, no black footer) */}
      {isOpened && <Footer />}

      {/* Auto-playing Music Player streaming exact audio from YouTube short _HUKYAUzVEM */}
      <AudioPlayer ref={audioPlayerRef} />

      {/* Quick Actions (Share invitation via WhatsApp - scroll top removed) */}
      {isOpened && <QuickActions />}
    </div>
  );
}
