import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX, Music, Disc } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

export interface AudioPlayerHandle {
  play: () => void;
  pause: () => void;
}

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>(
  ({ autoPlayTrigger }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    const videoId = WEDDING_DATA.media.youtubeAudioId;

    const sendCommand = (func: string, args: any = '') => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({
            event: 'command',
            func: func,
            args: args,
          }),
          '*'
        );
      }
    };

    const handlePlay = () => {
      sendCommand('playVideo');
      setIsPlaying(true);
    };

    const handlePause = () => {
      sendCommand('pauseVideo');
      setIsPlaying(false);
    };

    const togglePlayback = () => {
      if (isPlaying) {
        handlePause();
      } else {
        handlePlay();
      }
    };

    useImperativeHandle(ref, () => ({
      play: handlePlay,
      pause: handlePause,
    }));

    useEffect(() => {
      if (autoPlayTrigger) {
        handlePlay();
      }
    }, [autoPlayTrigger]);

    return (
      <>
        {/* Hidden YouTube Iframe that streams the exact audio from _HUKYAUzVEM */}
        <div className="fixed -top-[9999px] -left-[9999px] w-1 h-1 opacity-0 pointer-events-none overflow-hidden">
          <iframe
            ref={iframeRef}
            id="youtube-audio-frame"
            title="Nikah Invitation Music"
            width="200"
            height="200"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&playsinline=1&loop=1&playlist=${videoId}&controls=0&rel=0`}
            allow="autoplay; encrypted-media"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Emerald Green Music Control Pill */}
        <div className="fixed bottom-5 right-5 z-40 select-none">
          <button
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause background wedding nasheed' : 'Play wedding music'}
            className={`group flex items-center gap-2.5 py-2 px-3.5 sm:px-4 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 text-xs font-sans font-medium cursor-pointer ${
              isPlaying
                ? 'bg-[#0E3824] text-white border-[#0E3824] shadow-[#0E3824]/30'
                : 'bg-white/95 text-[#0E3824] border-[#A2BCAD] hover:bg-[#F9FAF8] hover:border-[#0E3824]'
            }`}
          >
            {isPlaying ? (
              <>
                <Disc className="w-4 h-4 text-emerald-300 animate-spin" />
                <span className="tracking-wide">Playing Music</span>
                <Volume2 className="w-3.5 h-3.5 text-emerald-200" />
              </>
            ) : (
              <>
                <Music className="w-4 h-4 text-[#185A3B]" />
                <span className="tracking-wide">Play Music</span>
                <VolumeX className="w-3.5 h-3.5 text-[#7C9A8B]" />
              </>
            )}
          </button>
        </div>
      </>
    );
  }
);

AudioPlayer.displayName = 'AudioPlayer';
