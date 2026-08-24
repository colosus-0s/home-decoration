import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionHeader, EditorialImage } from '../common';
import { transformationStages } from '../../data/transformationData';

export const TransformationSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const activeStage = transformationStages[activeStageIndex];

  return (
    <section id="transformation" className="w-full section-spacing bg-bg-surface border-t border-bg-border/60">
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
                onClick={() => setActiveStageIndex(idx)}
                className={`flex flex-col items-start p-3 transition-all duration-300 text-left border-l-2 ${
                  isActive
                    ? 'border-accent-sand bg-bg-primary/50 text-text-primary'
                    : 'border-bg-border text-text-secondary/60 hover:text-text-primary hover:border-bg-border/80'
                }`}
              >
                <span className={`font-mono text-xs tracking-widest ${isActive ? 'text-accent-sand font-bold' : ''}`}>
                  {stage.number}
                </span>
                <span className="font-sans text-[11px] tracking-wider uppercase font-medium mt-1 truncate w-full">
                  {stage.title.replace('THE ', '')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Transformation Showcase Container (Single Room Evolving) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-bg-primary border-architectural p-6 md:p-10">
          {/* Synchronized Image Display Viewport */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-bg-surface">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-bg-primary/90 backdrop-blur-md border border-bg-border text-xs tracking-widest uppercase font-mono text-accent-sand">
              Layer {activeStage.number} / 06
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
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                    onClick={() => setActiveStageIndex((prev) => (prev > 0 ? prev - 1 : transformationStages.length - 1))}
                    className="px-4 py-2 border border-bg-border text-xs tracking-widest text-text-secondary hover:text-accent-sand hover:border-accent-sand transition-colors uppercase"
                  >
                    ← Previous Layer
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveStageIndex((prev) => (prev < transformationStages.length - 1 ? prev + 1 : 0))}
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
