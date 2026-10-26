import React, { useState } from 'react';
import { ExternalLink, Mail } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className={`site-footer ${className}`} role="contentinfo">
      <div className="footer-content">
        {/* Left: Parent company attribution with official logo */}
        <div className="footer-parent-col">
          <span className="footer-parent-tag">An initiative by</span>
          <a
            href="https://tebinnovations.in"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-teb-link"
            id="footer-teb-link"
            aria-label="Visit TEB Innovations website (opens in new tab)"
          >
            {!logoError && (
              <span className="footer-teb-logo-wrap">
                <img
                  src="/teb-innovations-logo.png"
                  alt="TEB Innovations mark"
                  className="footer-teb-logo-img"
                  onError={() => setLogoError(true)}
                />
              </span>
            )}
            <span className="footer-teb-text">
              TEB <span className="teb-sub">INNOVATIONS</span>
            </span>
            <ExternalLink className="footer-ext-icon" size={12} aria-hidden="true" />
          </a>
        </div>

        {/* Center: Direct email contact */}
        <div className="footer-center-col">
          <a
            href="mailto:hello@tebinnovations.in"
            className="footer-email-link"
            id="footer-email"
            aria-label="Email hello@tebinnovations.in"
          >
            <Mail className="footer-mail-icon" size={13} aria-hidden="true" />
            <span>hello@tebinnovations.in</span>
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="footer-right-col">
          <span className="footer-copyright">
            © 2026 STEM Kerala. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
