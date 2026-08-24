import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Container, SectionHeader, EditorialImage } from '../common';
import { transformationStages } from '../../data/transformationData';

export const TransformationSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.35, once: false });
  const userInteractionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeStage = transformationStages[activeStageIndex];

  // Helper to trigger manual interaction pause
  const handleUserSelect = useCallback((index: number) => {
    setActiveStageIndex(index);
    setIsPaused(true);

    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }

    // Resume autoplay after 8 seconds of inactivity
    userInteractionTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  }, []);

  const handleNext = useCallback(() => {
    handleUserSelect((activeStageIndex + 1) % transformationStages.length);
  }, [activeStageIndex, handleUserSelect]);

  const handlePrev = useCallback(() => {
    handleUserSelect((activeStageIndex - 1 + transformationStages.length) % transformationStages.length);
  }, [activeStageIndex, handleUserSelect]);

  // Cinematic Autoplay Loop
  useEffect(() => {
    // Check prefers-reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isInView || isPaused) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % transformationStages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transformation"
      className="w-full section-spacing bg-bg-surface border-t border-bg-border/60"
    >
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <SectionHeader
            index="03"
            eyebrow="THE TRANSFORMATION"
            title="How a space comes together."
            description="We don't decorate rooms by scattering objects. A true home emerges layer by layer—from structural surface to ambient illumination, soft drapery, form, and personal detail."
          />
        </div>

        {/* 6-Stage Progress Indicator Bar */}
        <div className="grid grid-cols-6 gap-2 mb-10 border-b border-bg-border/60 pb-6 overflow-x-auto scrollbar-none">
          {transformationStages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => handleUserSelect(idx)}
                aria-label={`Select Layer ${stage.number}: ${stage.title}`}
                className={`flex flex-col items-start p-3 transition-all duration-300 text-left border-l-2 relative ${
                  isActive
                    ? 'border-accent-sand bg-bg-primary/50 text-text-primary'
                    : 'border-bg-border text-text-secondary/60 hover:text-text-primary hover:border-bg-border/80'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs tracking-widest ${isActive ? 'text-accent-sand font-bold' : ''}`}>
                    {stage.number}
                  </span>
                  {isActive && !isPaused && isInView && (
                    <motion.span
                      layoutId="activeGlow"
                      className="w-1.5 h-1.5 rounded-full bg-accent-sand"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>
                <span className="font-sans text-[11px] tracking-wider uppercase font-medium mt-1 truncate w-full">
                  {stage.title.replace('THE ', '')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Transformation Showcase Container (Single Room Evolving) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-bg-primary border-architectural p-6 md:p-10 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!userInteractionTimeoutRef.current) {
              setIsPaused(false);
            }
          }}
        >
          {/* Synchronized Image Display Viewport */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-bg-surface">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                <EditorialImage
                  src={activeStage.imagePath}
                  alt={activeStage.altText}
                  aspectRatio="aspect-[16/10]"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Active Stage Overlay Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-bg-primary/90 backdrop-blur-md border border-bg-border text-xs tracking-widest uppercase font-mono text-accent-sand flex items-center gap-2">
              <span>Layer {activeStage.number} / 06</span>
              {!isPaused && isInView && (
                <span className="text-[10px] text-text-secondary opacity-70 lowercase font-sans">(auto)</span>
              )}
            </div>
          </div>

          {/* Synchronized Text Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start"
              >
                <span className="font-eyebrow text-accent-sand mb-2">
                  {activeStage.number} — {activeStage.title}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl text-text-primary mb-4">
                  {activeStage.subtitle}
                </h3>

                <p className="font-body text-text-secondary leading-relaxed mb-8">
                  {activeStage.description}
                </p>

                {/* Stage Progression Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-bg-border/60 w-full">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-4 py-2 border border-bg-border text-xs tracking-widest text-text-secondary hover:text-accent-sand hover:border-accent-sand transition-colors uppercase"
                  >
                    ← Previous Layer
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-4 py-2 bg-accent-sand text-text-dark text-xs tracking-widest font-medium hover:bg-accent-sand-hover transition-colors uppercase"
                  >
                    Next Layer →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TransformationSection;
