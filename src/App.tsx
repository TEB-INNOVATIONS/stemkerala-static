import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CoconutPalmLeft } from './components/CoconutPalmLeft';
import { CoconutPalmRight } from './components/CoconutPalmRight';
import { Footer } from './components/Footer';
import { StandardLoader } from './components/StandardLoader';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Smooth pointer parallax for supported devices
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || loading) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const nx = (clientX / innerWidth - 0.5) * 2;
    const ny = (clientY / innerHeight - 0.5) * 2;
    setParallax({ x: nx, y: ny });
  }, [reducedMotion, loading]);

  const handleMouseLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const handleReplayLoader = useCallback(() => {
    setLoading(true);
  }, []);

  return (
    <div 
      className={`site-canvas ${reducedMotion ? 'reduced-motion' : ''} ${loading ? 'is-loading' : 'is-loaded'}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* STANDARD MINIMAL LOADING ANIMATION */}
      {loading && <StandardLoader onComplete={handleLoaderComplete} />}

      {/* Background Ambience */}
      <div className="yellow-canvas-background" aria-hidden="true">
        <div className="organic-radial-glow glow-top"></div>
        <div className="organic-radial-glow glow-bottom"></div>
        <div className="kerala-topography-lines"></div>
      </div>

      {/* TWO PROMINENT KERALA COCONUT PALM TREES WITH AUTO-ANIMATION */}
      <CoconutPalmLeft parallaxOffset={reducedMotion ? { x: 0, y: 0 } : parallax} />
      <CoconutPalmRight parallaxOffset={reducedMotion ? { x: 0, y: 0 } : parallax} />

      {/* STRICT 100VH VIEWPORT CONTAINER */}
      <div className="main-viewport-wrapper">
        <Header onReplayLoader={handleReplayLoader} />

        <main id="main-content" className="hero-main-area">
          <HeroSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
