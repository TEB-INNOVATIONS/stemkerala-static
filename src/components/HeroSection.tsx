import React from 'react';
import { ContactCTA } from './ContactCTA';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`hero-section ${className}`} aria-labelledby="hero-headline">
      <div className="hero-content-wrapper">
        {/* Main Headline — Bold & Large */}
        <div className="hero-headline-container animate-fade-in-up delay-1">
          <h1 id="hero-headline" className="hero-headline">
            Kerala's Next Wave <br className="hero-break" />
            <span className="headline-accent">of Innovation.</span>
          </h1>
        </div>

        {/* Supporting Line */}
        <div className="hero-subheading-container animate-fade-in-up delay-2">
          <p className="hero-subheading">
            Rooted in Kerala. Growing Beyond Boundaries.
          </p>
        </div>

        {/* Description */}
        <div className="hero-description-container animate-fade-in-up delay-3">
          <p className="hero-description">
            Science, technology, engineering and mathematics — bringing curious minds together to imagine, create and build the future.
          </p>
        </div>

        {/* Call to Action & Launch Notice */}
        <div className="hero-actions-container animate-fade-in-up delay-4">
          <ContactCTA variant="primary" />

          <div className="hero-launch-notice">
            <span className="launch-dot" aria-hidden="true"></span>
            <span className="launch-text">Launching Soon on <strong>stemkerala.com</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
