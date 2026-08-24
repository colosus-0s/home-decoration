import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Header, FullscreenMenu, ScrollProgress } from './components/navigation';
import {
  HeroSection,
  SpaceBeginsSection,
  TransformationSection,
  MoodsSection,
  PortfolioSection,
  DetailsSection,
  EmotionalSection,
  CTASection,
  Footer,
} from './components/sections';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Optional Progressive Enhancement: Lenis Smooth Scroll
  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lenis: Lenis | null = null;
    let animationFrameId: number;

    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Architectural smooth ease
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };

      animationFrameId = requestAnimationFrame(raf);
    } catch {
      // Native browser scroll fallback if Lenis init fails
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      lenis?.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-sand selection:text-text-dark font-sans relative">
      {/* Top Fixed Header & Navigation */}
      <Header onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Side Scroll Stage Progress Indicator */}
      <ScrollProgress />

      {/* Storytelling Homepage Narrative Sequence */}
      <main id="main-content">
        <HeroSection />
        <SpaceBeginsSection />
        <TransformationSection />
        <MoodsSection />
        <PortfolioSection />
        <DetailsSection />
        <EmotionalSection />
        <CTASection />
      </main>

      {/* Architectural Footer */}
      <Footer />
    </div>
  );
};

export default App;
