import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

        {/* 4 Interactive Mood Panels Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row gap-4 h-auto lg:h-[600px] transition-all duration-700 ease-editorial">
          {moodCategories.map((mood) => {
            const isActive = mood.id === activeMoodId;

            return (
              <motion.div
                key={mood.id}
                onClick={() => setActiveMoodId(mood.id)}
                className={`relative overflow-hidden cursor-pointer border-architectural bg-bg-surface transition-all duration-700 ease-editorial ${
                  isActive ? 'lg:flex-[3]' : 'lg:flex-[1]'
                } min-h-[350px] lg:min-h-full flex flex-col justify-end p-6 md:p-8 group`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <EditorialImage
                    src={mood.imagePath}
                    alt={mood.altText}
                    className="w-full h-full"
                    imageClassName={`transition-transform duration-700 ${isActive ? 'scale-105' : 'scale-100 opacity-60 group-hover:opacity-80'}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-85' : 'opacity-90'}`} />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-start">
                  <span className="font-eyebrow text-accent-sand mb-2 opacity-80">
                    MOOD DIRECTION
                  </span>

                  <h3 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2 tracking-tight">
                    {mood.title}
                  </h3>

                  <p className="font-subheading text-text-secondary text-sm md:text-base mb-4">
                    {mood.tagline}
                  </p>

                  {/* Expanded Mood Descriptors Tag Pills */}
                  <div className={`flex flex-wrap gap-2 transition-all duration-500 ${isActive ? 'opacity-100 max-h-24 mt-2' : 'opacity-0 max-h-0 overflow-hidden lg:opacity-0'}`}>
                    {mood.descriptors.map((desc) => (
                      <span
                        key={desc}
                        className="px-3 py-1 bg-bg-surface-light/80 backdrop-blur-md border border-bg-border text-[11px] font-sans tracking-wider text-text-primary uppercase"
                      >
                        {desc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Active Indicator Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-accent-sand transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MoodsSection;
