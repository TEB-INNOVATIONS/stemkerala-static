import React, { useState, useEffect } from 'react';

interface CreativeLoaderProps {
  onComplete: () => void;
}

export const CreativeLoader: React.FC<CreativeLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const phrases = [
    "Planting the seeds of curiosity...",
    "Science • Technology • Engineering • Mathematics",
    "Rooted in Kerala. Growing beyond boundaries."
  ];

  useEffect(() => {
    // Progress counter animation from 0 to 100%
    const duration = 2200; // 2.2 seconds total
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (rawProgress < 35) {
        setPhraseIndex(0);
      } else if (rawProgress < 75) {
        setPhraseIndex(1);
      } else {
        setPhraseIndex(2);
      }

      if (elapsed < duration) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        // Start exit transition
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 700); // match exit transition duration
        }, 300);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  return (
    <div 
      className={`creative-loader-overlay ${isExiting ? 'loader-exit' : ''}`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading STEM Kerala"
    >
      <div className="loader-ambient-glow" aria-hidden="true"></div>

      <div className="loader-center-content">
        {/* Central Geometric STEM & Kerala Botanical Sprout */}
        <div className="loader-graphic-container">
          <svg
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="loader-svg"
          >
            {/* Outer STEM Orbital Ring */}
            <circle
              cx="80"
              cy="80"
              r="68"
              stroke="#08752D"
              strokeWidth="2"
              strokeOpacity="0.25"
              strokeDasharray="4 4"
              className="loader-ring-dashed"
            />

            {/* Rotating Orbit Path */}
            <circle
              cx="80"
              cy="80"
              r="58"
              stroke="url(#loaderRingGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="360"
              strokeDashoffset={360 - (progress * 3.6)}
              className="loader-progress-ring"
            />

            {/* Orbital Nodes (Science, Tech, Eng, Math) */}
            <circle cx="80" cy="22" r={progress > 15 ? 4 : 2} fill="#075525" className="loader-node-dot" />
            <circle cx="138" cy="80" r={progress > 40 ? 4 : 2} fill="#075525" className="loader-node-dot" />
            <circle cx="80" cy="138" r={progress > 65 ? 4 : 2} fill="#075525" className="loader-node-dot" />
            <circle cx="22" cy="80" r={progress > 85 ? 4 : 2} fill="#075525" className="loader-node-dot" />

            {/* Center Botanical Coconut Palm Sprout Unfurling */}
            <g className="loader-sprout-group">
              {/* Central Sprout Stem */}
              <path
                d="M 80 110 C 80 92, 78 78, 80 60"
                stroke="#043316"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Left Arching Leaf */}
              <path
                d="M 80 84 C 70 76, 54 75, 46 82 C 54 88, 68 88, 80 86"
                fill="#08752D"
                className="loader-leaf-left"
              />
              {/* Right Arching Leaf */}
              <path
                d="M 80 74 C 90 64, 106 63, 114 70 C 106 76, 92 77, 80 76"
                fill="#075525"
                className="loader-leaf-right"
              />
              {/* Top Young Leaflet */}
              <path
                d="M 80 64 C 76 52, 80 40, 80 34 C 84 42, 86 52, 80 64"
                fill="#0a8e38"
                className="loader-leaf-center"
              />
              {/* Coconut Seed Pod Base */}
              <ellipse cx="80" cy="112" rx="14" ry="10" fill="#075525" />
              <ellipse cx="80" cy="112" rx="11" ry="8" fill="#043316" />
            </g>

            <defs>
              <linearGradient id="loaderRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#08752D" />
                <stop offset="100%" stopColor="#075525" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Brand Reveal Typography */}
        <div className="loader-brand-reveal">
          <span className="loader-brand-stem">STEM</span>
          <span className="loader-brand-ml" lang="ml">കേരള</span>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="loader-progress-track">
          <div 
            className="loader-progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="loader-meta-row">
          <span className="loader-percent">{progress}%</span>
          <span className="loader-phrase">{phrases[phraseIndex]}</span>
        </div>
      </div>
    </div>
  );
};
