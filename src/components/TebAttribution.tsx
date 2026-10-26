import React, { useState } from 'react';
import { ExternalLink, Mail } from 'lucide-react';

interface TebAttributionProps {
  className?: string;
}

export const TebAttribution: React.FC<TebAttributionProps> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <aside className={`teb-attribution ${className}`} aria-label="Parent company attribution">
      <span className="teb-tagline">An initiative by</span>

      <div className="teb-brand-row">
        <a
          href="https://tebinnovations.in"
          target="_blank"
          rel="noopener noreferrer"
          className="teb-link"
          id="teb-website-link"
          aria-label="Visit TEB Innovations website (opens in new tab)"
        >
          {!imgError && (
            <span className="teb-logo-wrapper">
              <img
                src="/teb-innovations-logo.png"
                alt="TEB Innovations mark"
                className="teb-logo-img"
                onError={() => setImgError(true)}
              />
            </span>
          )}
          <span className="teb-wordmark">
            TEB <span className="teb-sub">INNOVATIONS</span>
          </span>
          <ExternalLink className="teb-external-icon" size={13} aria-hidden="true" />
        </a>

        <span className="teb-separator" aria-hidden="true">•</span>

        <a
          href="mailto:hello@tebinnovations.in"
          className="teb-email-link"
          id="teb-email-link"
          aria-label="Contact TEB Innovations at hello@tebinnovations.in"
        >
          <Mail className="teb-mail-icon" size={13} aria-hidden="true" />
          <span>hello@tebinnovations.in</span>
        </a>
      </div>
    </aside>
  );
};
