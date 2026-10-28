import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { FloralArtwork } from './FloralArtwork';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
}

export const WeddingCountdown: React.FC = () => {
  const targetDate = new Date(WEDDING_DATA.event.targetTimestampIso).getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isCompleted: true,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isCompleted: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const padZero = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section
      id="countdown-section"
      className="relative py-20 md:py-28 px-4 text-center overflow-hidden"
      aria-label="Live Wedding Countdown"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <FloralArtwork variant="lily" opacity={0.3} className="scale-115" />
      </div>

      <div className="max-w-2xl w-full mx-auto relative z-10">
        <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#0E3824] font-normal mb-8 sm:mb-12">
          Counting Down to Our Special Day
        </h3>

        {timeLeft.isCompleted ? (
          <div className="py-8 px-6 bg-white rounded-xl border border-[#A2BCAD] shadow-sm max-w-md mx-auto">
            <p className="font-script text-4xl sm:text-5xl text-[#0E3824] mb-2">
              The Celebration Begins
            </p>
            <p className="font-cinzel text-xs tracking-widest uppercase text-[#185A3B]">
              Nikah of {WEDDING_DATA.couple.displayName}
            </p>
          </div>
        ) : (
          <div className="my-6">
            <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-4 font-cinzel font-bold tabular-nums text-4xl sm:text-6xl md:text-7xl lg:text-8xl select-none">
              {/* Days */}
              <div className="flex flex-col items-center">
                <span className="text-[#0E3824] tracking-tight min-w-[1.2ch]">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-sans font-medium uppercase tracking-[0.25em] text-[#7C9A8B] mt-2">
                  DAYS
                </span>
              </div>

              <span className="text-[#0E3824]/40 pb-5 sm:pb-6 text-3xl sm:text-5xl md:text-6xl font-light">
                :
              </span>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <span className="text-[#0E3824] tracking-tight min-w-[2ch]">
                  {padZero(timeLeft.hours)}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-sans font-medium uppercase tracking-[0.25em] text-[#7C9A8B] mt-2">
                  HOURS
                </span>
              </div>

              <span className="text-[#0E3824]/40 pb-5 sm:pb-6 text-3xl sm:text-5xl md:text-6xl font-light">
                :
              </span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <span className="text-[#0E3824] tracking-tight min-w-[2ch]">
                  {padZero(timeLeft.minutes)}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-sans font-medium uppercase tracking-[0.25em] text-[#7C9A8B] mt-2">
                  MINUTES
                </span>
              </div>

              <span className="text-[#185A3B]/40 pb-5 sm:pb-6 text-3xl sm:text-5xl md:text-6xl font-light">
                :
              </span>

              {/* Seconds in Vibrant Forest Green */}
              <div className="flex flex-col items-center">
                <span className="text-[#185A3B] tracking-tight min-w-[2ch]">
                  {padZero(timeLeft.seconds)}
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-sans font-medium uppercase tracking-[0.25em] text-[#185A3B] mt-2">
                  SECONDS
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
