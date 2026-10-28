import React from 'react';

interface FloralProps {
  className?: string;
  variant?: 'lily' | 'rose' | 'branch' | 'wreath' | 'arch';
  opacity?: number;
}

/**
 * High-fidelity emerald green and white floral illustrations inspired by
 * the user's reference images (white roses, emerald eucalyptus, and baby's breath).
 */
export const FloralArtwork: React.FC<FloralProps> = ({
  className = '',
  variant = 'lily',
  opacity = 0.5,
}) => {
  if (variant === 'arch') {
    return (
      <div
        className={`pointer-events-none select-none transition-opacity duration-1000 ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-w-[500px] mx-auto filter drop-shadow-sm"
        >
          {/* Arched eucalyptus garland with white baby's breath */}
          <path
            d="M 50 160 C 150 40, 350 40, 450 160"
            stroke="#1B4D36"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Leaves along garland */}
          {[80, 140, 200, 250, 300, 360, 420].map((x, i) => {
            const y = 160 - 120 * Math.sin(((x - 50) / 400) * Math.PI);
            return (
              <g key={i} transform={`translate(${x}, ${y})`}>
                <ellipse
                  cx="0"
                  cy="0"
                  rx="14"
                  ry="7"
                  transform={`rotate(${i % 2 === 0 ? -30 : 35})`}
                  fill="#1E5A3F"
                  fillOpacity="0.85"
                  stroke="#0E3824"
                  strokeWidth="0.8"
                />
                <ellipse
                  cx={i % 2 === 0 ? -12 : 12}
                  cy="6"
                  rx="11"
                  ry="5"
                  transform={`rotate(${i % 2 === 0 ? 25 : -25})`}
                  fill="#7C9A8B"
                  fillOpacity="0.75"
                />
                {/* White blossom */}
                <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" stroke="#ADC0B6" strokeWidth="0.6" />
                <circle cx="0" cy="0" r="1.5" fill="#E8D5A0" />
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  if (variant === 'branch') {
    return (
      <div
        className={`pointer-events-none select-none transition-opacity duration-1000 ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full max-w-[480px] mx-auto filter drop-shadow-sm"
        >
          <path
            d="M20 60 C 140 30, 250 85, 480 55"
            stroke="#1B4D36"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {[60, 130, 200, 270, 340, 410].map((x, idx) => (
            <g key={idx} transform={`translate(${x}, ${55 + (idx % 2 === 0 ? -12 : 10)})`}>
              <ellipse
                cx="0"
                cy="0"
                rx="15"
                ry="7"
                transform={`rotate(${idx % 2 === 0 ? -25 : 30})`}
                fill="#164E37"
                fillOpacity="0.8"
                stroke="#0E3824"
                strokeWidth="0.6"
              />
              <circle
                cx={idx % 2 === 0 ? 8 : -8}
                cy="0"
                r="3.5"
                fill="#FFFFFF"
                stroke="#A8BDB1"
                strokeWidth="0.5"
              />
              <circle cx={idx % 2 === 0 ? 8 : -8} cy="0" r="1" fill="#C29B38" />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // variant 'lily' or 'rose'
  return (
    <div
      className={`pointer-events-none select-none transition-opacity duration-1000 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 400 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[360px] md:max-w-[420px] mx-auto filter drop-shadow-sm"
      >
        <defs>
          <linearGradient id="emeraldRosePetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="60%" stopColor="#F5F8F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#Dce7e0" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="emeraldStemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1C533A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0E3824" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Deep emerald stems */}
        <path
          d="M200 470 C 198 380, 190 280, 185 190"
          stroke="url(#emeraldStemGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M195 320 C 230 290, 270 270, 305 240"
          stroke="url(#emeraldStemGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M190 380 C 150 350, 110 320, 85 280"
          stroke="url(#emeraldStemGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Deep emerald and eucalyptus leaves */}
        <path
          d="M195 315 C 230 300, 260 270, 290 260 C 260 285, 230 320, 195 322 Z"
          fill="#1E583D"
          fillOpacity="0.75"
          stroke="#0E3824"
          strokeWidth="0.8"
        />
        <path
          d="M190 375 C 145 360, 110 330, 80 300 C 115 325, 150 365, 190 382 Z"
          fill="#7C9A8B"
          fillOpacity="0.7"
          stroke="#1B4D36"
          strokeWidth="0.8"
        />

        {/* Main White Flower / Rose Petals */}
        <g transform="translate(185, 170)">
          {/* Outer back petals */}
          <path
            d="M0 0 C -40 -60, -70 -120, -50 -150 C -25 -130, -5 -60, 0 0 Z"
            fill="url(#emeraldRosePetal)"
            stroke="#9EB5A8"
            strokeWidth="0.75"
          />
          <path
            d="M0 0 C 40 -60, 70 -120, 50 -150 C 25 -130, 5 -60, 0 0 Z"
            fill="url(#emeraldRosePetal)"
            stroke="#9EB5A8"
            strokeWidth="0.75"
          />
          <path
            d="M0 0 C -15 -80, -20 -150, 0 -170 C 20 -150, 15 -80, 0 0 Z"
            fill="url(#emeraldRosePetal)"
            stroke="#8EAA99"
            strokeWidth="0.75"
          />

          {/* Side spread petals */}
          <path
            d="M0 0 C -60 -25, -130 -40, -145 -10 C -120 15, -60 10, 0 0 Z"
            fill="url(#emeraldRosePetal)"
            stroke="#9EB5A8"
            strokeWidth="0.75"
          />
          <path
            d="M0 0 C 60 -25, 130 -40, 145 -10 C 120 15, 60 10, 0 0 Z"
            fill="url(#emeraldRosePetal)"
            stroke="#9EB5A8"
            strokeWidth="0.75"
          />

          {/* Lower front petals */}
          <path
            d="M0 0 C -35 30, -70 80, -45 105 C -15 85, -5 40, 0 0 Z"
            fill="url(#emeraldRosePetal)"
            stroke="#9EB5A8"
            strokeWidth="0.75"
          />
          <path
            d="M0 0 C 35 30, 70 80, 45 105 C 15 85, 5 40, 0 0 Z"
            fill="url(#emeraldRosePetal)"
            stroke="#9EB5A8"
            strokeWidth="0.75"
          />

          {/* Delicate pistils and baby's breath */}
          <g stroke="#C29B38" strokeWidth="1.2" strokeLinecap="round">
            <path d="M0 0 C -8 -20, -15 -50, -22 -65" />
            <path d="M0 0 C -4 -25, -8 -55, -8 -72" />
            <path d="M0 0 C 3 -25, 6 -55, 6 -74" />
            <path d="M0 0 C 8 -20, 16 -50, 24 -66" />
          </g>
          <ellipse cx="-23" cy="-66" rx="3.5" ry="2" fill="#D4AF37" />
          <ellipse cx="-8" cy="-73" rx="3.5" ry="2" fill="#D4AF37" />
          <ellipse cx="6" cy="-75" rx="3.5" ry="2" fill="#D4AF37" />
          <ellipse cx="25" cy="-67" rx="3.5" ry="2" fill="#D4AF37" />
        </g>
      </svg>
    </div>
  );
};
