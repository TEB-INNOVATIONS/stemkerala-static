import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'normal' | 'large' | 'compact';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', size = 'normal' }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`brand-logo-container ${size} ${className}`} aria-label="STEM Kerala Logo">
      {!imageError ? (
        <img
          src="/stem-kerala-logo-cropped.png"
          alt="STEM Kerala - ശാസ്ത്രം സാങ്കേതികവിദ്യ എഞ്ചിനീയറിംഗ് ഗണിതം"
          className="brand-logo-img"
          onError={() => setImageError(true)}
        />
      ) : (
        /* High-fidelity vector brandmark adhering strictly to:
           "English text 'STEM' above distinctive Malayalam lettering 'കേരള', in dark green on a bright yellow background" */
        <div className="brand-logo-vector">
          <div className="logo-badge">
            <span className="logo-en">STEM</span>
            <span className="logo-ml" lang="ml">കേരള</span>
          </div>
        </div>
      )}
    </div>
  );
};

