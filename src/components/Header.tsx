import React from 'react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  className?: string;
  onReplayLoader?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ className = '', onReplayLoader }) => {
  return (
    <header className={`site-header ${className}`} role="banner">
      <div
        className="unified-brand-pill"
        onClick={onReplayLoader}
        title="STEM Kerala — Coming Soon (Click to replay intro)"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onReplayLoader?.();
          }
        }}
        aria-label="STEM Kerala — Coming Soon. Click to replay animation."
      >
        <div className="pill-brand-section">
          <BrandLogo size="compact" />
        </div>

        <span className="pill-divider" aria-hidden="true" />

        <div className="pill-status-section">
          <span className="status-pulse-dot" aria-hidden="true">
            <span className="pulse-ring"></span>
            <span className="pulse-core"></span>
          </span>
          <span className="status-badge-text">COMING SOON</span>
        </div>
      </div>
    </header>
  );
};

