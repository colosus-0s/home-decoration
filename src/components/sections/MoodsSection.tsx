import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, SectionHeader, EditorialImage } from '../common';
import { moodCategories } from '../../data/moodsData';

export const MoodsSection: React.FC = () => {
  const [activeMoodId, setActiveMoodId] = useState<string>('calm');

  return (
    <section id="moods" className="w-full section-spacing bg-bg-primary border-t border-bg-border/60">
      <Container>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <SectionHeader
            index="04"
            eyebrow="MOODS & ATMOSPHERE"
            title="How do you want your space to feel?"
            description="We sell feelings before products. Before choosing drapery fabrics or lighting fixtures, discover the emotional frequency that reflects your daily living."
          />
        </div>

        {/* 4 Interactive Mood Panels Container (Staggered Cinematic Entry) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4 h-auto lg:h-[620px] transition-all duration-700 ease-editorial"
        >
          {moodCategories.map((mood, idx) => {
            const isActive = mood.id === activeMoodId;

            return (
              <motion.div
                key={mood.id}
                variants={{
                  hidden: { opacity: 0, y: 25, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                onClick={() => setActiveMoodId(mood.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveMoodId(mood.id);
                  }
                }}
                aria-label={`Select ${mood.title} mood`}
                aria-expanded={isActive}
                className={`relative overflow-hidden cursor-pointer border-architectural bg-bg-surface transition-all duration-700 ease-editorial ${
                  isActive ? 'lg:flex-[3.2]' : 'lg:flex-[1]'
                } min-h-[360px] lg:min-h-full flex flex-col justify-end p-6 md:p-8 group focus:outline-none focus:ring-1 focus:ring-accent-sand`}
              >
                {/* Background Image with Smooth Crossfade & Scale Settle */}
                <div className="absolute inset-0 z-0">
                  <EditorialImage
                    src={mood.imagePath}
                    alt={mood.altText}
                    className="w-full h-full"
                    imageClassName={`transition-all duration-700 ease-editorial ${
                      isActive
                        ? 'scale-105 opacity-100'
                        : 'scale-100 opacity-55 group-hover:opacity-75 group-hover:scale-[1.02]'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent transition-opacity duration-500 ${
                      isActive ? 'opacity-85' : 'opacity-95'
                    }`}
                  />
                </div>

                {/* Coordinated Text Group Transition (Fixes Hard Text Change) */}
                <div className="relative z-10 flex flex-col items-start w-full">
                  <span className="font-eyebrow text-accent-sand mb-2 opacity-90 flex items-center gap-2">
                    <span className="font-mono text-xs opacity-75">0{idx + 1}</span>
                    <span>MOOD DIRECTION</span>
                  </span>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mood.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full"
                    >
                      <h3 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2 tracking-tight">
                        {mood.title}
                      </h3>

                      <p className="font-subheading text-text-secondary text-sm md:text-base mb-4 leading-relaxed max-w-lg">
                        {mood.tagline}
                      </p>

                      {/* Expanded Mood Descriptors Tag Pills */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.35, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                          className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-bg-border/60"
                        >
                          {mood.descriptors.map((desc) => (
                            <span
                              key={desc}
                              className="px-3 py-1 bg-bg-surface-light/90 backdrop-blur-md border border-bg-border text-[11px] font-sans tracking-wider text-text-primary uppercase"
                            >
                              {desc}
                            </span>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Active Indicator Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-accent-sand transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default MoodsSection;
