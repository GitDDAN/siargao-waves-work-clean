import React from 'react';

type WaveVariant = 'gentle' | 'layered' | 'reef';

interface SectionWaveProps {
  variant?: WaveVariant;
  className?: string;
  flip?: boolean;
}

const SectionWave: React.FC<SectionWaveProps> = ({
  variant = 'gentle',
  className = '',
  flip = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] pointer-events-none select-none ${className}`}
      aria-hidden="true"
      style={{ marginBottom: '-2px', ...(flip ? { transform: 'scaleY(-1)' } : {}) }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[50px] sm:h-[70px] md:h-[90px] block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === 'gentle' && (
          <path
            fill="currentColor"
            d="M0,40 C240,95 480,5 720,50 C960,95 1200,15 1440,55 L1440,120 L0,120 Z"
          />
        )}
        {variant === 'layered' && (
          <>
            <path
              fill="currentColor"
              opacity="0.2"
              d="M0,20 C240,70 480,0 720,40 C960,80 1200,10 1440,35 L1440,120 L0,120 Z"
            />
            <path
              fill="currentColor"
              opacity="0.45"
              d="M0,55 C300,20 600,75 900,35 C1100,10 1300,55 1440,45 L1440,120 L0,120 Z"
            />
            <path
              fill="currentColor"
              d="M0,80 C300,58 600,92 900,68 C1100,50 1300,82 1440,64 L1440,120 L0,120 Z"
            />
          </>
        )}
        {variant === 'reef' && (
          <path
            fill="currentColor"
            d="M0,60 Q360,110 720,55 Q1080,0 1440,55 L1440,120 L0,120 Z"
          />
        )}
      </svg>
    </div>
  );
};

export default SectionWave;
