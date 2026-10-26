import React, { useState, useEffect } from 'react';

interface StandardLoaderProps {
  onComplete: () => void;
}

export const StandardLoader: React.FC<StandardLoaderProps> = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Standard quick load duration (1.2s), then smooth fade out
    const timer = setTimeout(() => {
      setIsFading(true);
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 450); // match fade transition
      return () => clearTimeout(exitTimer);
    }, 1200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`standard-loader-overlay ${isFading ? 'loader-fade-out' : ''}`}
      role="status"
      aria-label="Loading..."
    >
      <div className="standard-loader-content">
        {/* Brand Mark */}
        <div className="loader-brand-box">
          <span className="loader-brand-en">STEM</span>
          <span className="loader-brand-ml" lang="ml">കേരള</span>
        </div>

        {/* Standard Minimal Spinner */}
        <div className="standard-spinner-ring" aria-hidden="true">
          <div className="spinner-circle"></div>
        </div>
      </div>
    </div>
  );
};
