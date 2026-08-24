import React from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeader, EditorialImage } from '../common';
import { TRANSFORMATION_IMAGES } from '../../utils/assets';

export const SpaceBeginsSection: React.FC = () => {
  return (
    <section id="space-begins" className="w-full section-spacing bg-[#18171A] text-text-primary border-t border-bg-border/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <SectionHeader
              index="02"
              eyebrow="THE SPACE BEGINS"
              title="Every room starts with a blank canvas."
              description="Potential is everywhere. Long before curtains are hung or furniture is placed, design begins by listening to the raw proportions, sunlight, and volume of an unformed architectural space."
              className="mb-8"
            />

            <div className="pt-6 border-t border-bg-border/80 flex items-center gap-8 text-xs tracking-widest text-text-secondary uppercase">
              <div>
                <span className="block text-accent-sand font-medium text-sm mb-1">01</span>
                <span>Spatial Proportion</span>
              </div>
              <div className="w-[1px] h-8 bg-bg-border" />
              <div>
                <span className="block text-accent-sand font-medium text-sm mb-1">02</span>
                <span>Natural Light</span>
              </div>
              <div className="w-[1px] h-8 bg-bg-border" />
              <div>
                <span className="block text-accent-sand font-medium text-sm mb-1">03</span>
                <span>Material Potential</span>
              </div>
            </div>
          </motion.div>

          {/* Right Architectural Space Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative border-architectural p-3 bg-bg-surface">
              <EditorialImage
                src={TRANSFORMATION_IMAGES.stage01}
                alt="Sunlit architectural space before interior transformation"
                aspectRatio="aspect-[4/3] sm:aspect-[16/10]"
                hoverScale
              />
              
              {/* Architectural Label overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-bg-primary/90 backdrop-blur-md border border-bg-border/80 flex items-center justify-between text-xs tracking-widest uppercase">
                <span className="text-text-primary">Raw Canvas — State 0.0</span>
                <span className="text-accent-sand font-mono">100% Potential</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SpaceBeginsSection;
