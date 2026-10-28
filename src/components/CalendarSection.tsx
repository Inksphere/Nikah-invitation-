import React, { useState } from 'react';
import { WEDDING_DATA } from '../config/weddingData';
import { FloralArtwork } from './FloralArtwork';
import { Calendar, Check, Download, Heart } from 'lucide-react';

export const CalendarSection: React.FC = () => {
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const [addedMessage, setAddedMessage] = useState(false);

  const { weekday, dayNumber, month, year } = WEDDING_DATA.event;

  const createGoogleCalendarUrl = () => {
    const startTime = '20261030T033000Z';
    const endTime = '20261030T073000Z';
    const title = encodeURIComponent(`Nikah of ${WEDDING_DATA.couple.displayName}`);
    const details = encodeURIComponent(
      `Nikah Ceremony of ${WEDDING_DATA.couple.displayName} at ${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.addressLine1} ${WEDDING_DATA.venue.addressLine2}.`
    );
    const location = encodeURIComponent(
      `${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.addressLine1} ${WEDDING_DATA.venue.addressLine2}`
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  };

  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Siraj & Fidha//Nikah Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:nikah-siraj-fidha-20261030@wedding',
      'DTSTAMP:20261028T000000Z',
      'DTSTART:20261030T033000Z',
      'DTEND:20261030T073000Z',
      `SUMMARY:Nikah Ceremony: ${WEDDING_DATA.couple.displayName}`,
      `DESCRIPTION:Join us for the Nikah ceremony of ${WEDDING_DATA.couple.displayName} at ${WEDDING_DATA.venue.name}.`,
      `LOCATION:${WEDDING_DATA.venue.name}, ${WEDDING_DATA.venue.addressLine1} ${WEDDING_DATA.venue.addressLine2}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Siraj_Fidha_Nikah.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
    setShowCalendarMenu(false);
  };

  return (
    <section
      id="calendar-section"
      className="relative py-20 md:py-28 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
      aria-label="Wedding Date Section"
    >
      {/* Delicate floral artwork positioned in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
        <FloralArtwork variant="lily" opacity={0.4} className="scale-110 md:scale-125 translate-y-6" />
      </div>

      <div className="max-w-3xl w-full mx-auto relative z-10">
        {/* Scalloped "HOLD the DATE" Badge from reference image */}
        <div className="mb-6 inline-block">
          <div className="py-2 px-5 rounded-full bg-[#EBF1ED] border border-[#A2BCAD]/60 text-center shadow-xs">
            <span className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.25em] text-[#0E3824] font-semibold flex items-center gap-2">
              <span>HOLD</span>
              <span className="font-script lowercase text-base font-normal text-[#185A3B]">the</span>
              <span>DATE</span>
            </span>
          </div>
        </div>

        {/* Heading in Parisienne / Great Vibes accurate calligraphy */}
        <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0E3824] font-normal leading-[1.1] mb-10 sm:mb-14">
          Mark Your
          <span className="block">Calendar</span>
        </h2>

        {/* Balanced 3-Part Date Composition */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-14 my-4">
          {/* Left: Weekday & Time */}
          <div className="flex-1 text-right flex flex-col justify-center">
            <span className="font-cinzel text-base sm:text-xl md:text-2xl text-[#0E3824] font-semibold tracking-wider">
              {weekday}
            </span>
            <span className="font-sans text-xs sm:text-base md:text-lg text-[#7C9A8B] font-medium tracking-widest mt-0.5 sm:mt-1">
              9 AM
            </span>
          </div>

          {/* Center: Large Day Number "30" */}
          <div className="shrink-0 px-2 sm:px-4">
            <span className="font-cinzel text-6xl sm:text-8xl md:text-9xl font-bold text-[#0E3824] tracking-tighter leading-none block select-none">
              {dayNumber}
            </span>
          </div>

          {/* Right: Month & Year */}
          <div className="flex-1 text-left flex flex-col justify-center">
            <span className="font-cinzel text-base sm:text-xl md:text-2xl text-[#0E3824] font-semibold tracking-wider">
              {month}
            </span>
            <span className="font-sans text-xs sm:text-base md:text-lg text-[#7C9A8B] font-medium tracking-widest mt-0.5 sm:mt-1">
              {year}
            </span>
          </div>
        </div>

        {/* Add to Calendar Button */}
        <div className="mt-10 sm:mt-12 relative inline-block">
          <button
            onClick={() => setShowCalendarMenu(!showCalendarMenu)}
            className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-widest uppercase text-[#0E3824] hover:text-[#185A3B] py-2 px-5 rounded-full border border-[#0E3824]/25 hover:border-[#0E3824]/60 bg-white transition-all duration-200 shadow-xs cursor-pointer focus:outline-none"
            aria-expanded={showCalendarMenu}
            aria-haspopup="true"
          >
            <Calendar className="w-3.5 h-3.5 text-[#185A3B]" />
            <span className="font-cinzel font-medium">Add to Calendar</span>
          </button>

          {showCalendarMenu && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white border border-[#A2BCAD] rounded-lg shadow-lg py-1.5 z-30 text-left text-xs font-sans">
              <a
                href={createGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowCalendarMenu(false)}
                className="block px-4 py-2 text-[#0E3824] hover:bg-[#EBF1ED] transition-colors"
              >
                Google Calendar
              </a>
              <button
                type="button"
                onClick={downloadIcsFile}
                className="w-full text-left px-4 py-2 text-[#0E3824] hover:bg-[#EBF1ED] transition-colors flex items-center justify-between"
              >
                <span>Apple / Outlook (.ics)</span>
                <Download className="w-3 h-3 text-[#185A3B]" />
              </button>
            </div>
          )}

          {addedMessage && (
            <p className="text-[11px] text-[#185A3B] mt-2 flex items-center justify-center gap-1">
              <Check className="w-3 h-3 text-emerald-600" />
              <span>Event file downloaded!</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
