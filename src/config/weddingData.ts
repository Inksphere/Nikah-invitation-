/**
 * Centralized Wedding Configuration for Siraj & Fidha's Nikah
 * Emerald Green & White Luxury Botanical Theme
 */

export interface WeddingConfig {
  couple: {
    groom: string;
    bride: string;
    groomFull: string;
    displayName: string;
    initials: string;
    arabicGroom: string;
    arabicBride: string;
    arabicNames: string;
  };
  event: {
    occasion: string;
    dateFormatted: string;
    timeFormatted: string;
    timeRange: string;
    weekday: string;
    dayNumber: string;
    month: string;
    year: string;
    shortDate: string; // "30-OCTOBER-2026"
    targetTimestampIso: string;
    timezone: string;
  };
  venue: {
    name: string;
    addressLine1: string;
    addressLine2: string;
    googleMapsUrl: string;
    embedQuery: string;
    latitude: number;
    longitude: number;
  };
  islamic: {
    bismillahArabic: string;
    bismillahEnglish: string;
    invitationGreeting: string;
    duaArabic: string;
    duaEnglish: string;
  };
  creator: {
    name: string;
    instagramUrl: string;
  };
  media: {
    youtubeAudioId: string;
    youtubeShortUrl: string;
  };
}

export const WEDDING_DATA: WeddingConfig = {
  couple: {
    groom: "Siraj",
    groomFull: "Sirajudheen",
    bride: "Fidha",
    displayName: "Siraj & Fidha",
    initials: "SF",
    arabicGroom: "سِراج",
    // User explicitly requested: فدة
    arabicBride: "فدة",
    arabicNames: "سِراج & فدة",
  },
  event: {
    occasion: "NIKAH CEREMONY",
    dateFormatted: "Friday, 30 October 2026",
    timeFormatted: "9:00 AM IST",
    timeRange: "9:00 to 12:00",
    weekday: "Friday",
    dayNumber: "30",
    month: "October",
    year: "2026",
    shortDate: "30-OCTOBER-2026",
    targetTimestampIso: "2026-10-30T09:00:00+05:30",
    timezone: "Asia/Kolkata",
  },
  venue: {
    name: "HAJIS PARK",
    addressLine1: "Padapparamba, Malappuram,",
    addressLine2: "Kerala, India",
    googleMapsUrl: "https://maps.app.goo.gl/j2bXE94UvFG8txH96",
    embedQuery: "HAJISFOODPARK, Padapparamba, Malappuram, Kerala, India",
    latitude: 11.0267,
    longitude: 76.0123,
  },
  islamic: {
    bismillahArabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    bismillahEnglish: "In the Name of Allah\nThe Most Gracious and The Most Merciful",
    invitationGreeting: "With the blessings of Allah,\nWe warmly invite you to celebrate the\nNikah ceremony of\nSiraj & Fidha",
    duaArabic: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    duaEnglish: "May Allah bless you both, shower His blessings upon you, and unite you in goodness.",
  },
  creator: {
    name: "Hashim",
    instagramUrl: "https://www.instagram.com/__hashim_mhd_/",
  },
  media: {
    youtubeAudioId: "_HUKYAUzVEM",
    youtubeShortUrl: "https://youtube.com/shorts/_HUKYAUzVEM?si=bJfVhMIXUfBNQwKp",
  },
};
