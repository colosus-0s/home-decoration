import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../common';
import { EMOTIONAL_DUSK_IMAGE } from '../../utils/assets';

export const EmotionalSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden bg-bg-primary border-t border-bg-border/60">
      {/* Warm Evening / Dusk Atmosphere Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={EMOTIONAL_DUSK_IMAGE}
          alt="Warm evening lounge atmosphere overlooking quiet garden"
          className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/80" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-eyebrow text-accent-sand mb-6 block"
          >
            THE HUMAN LAYER
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display-lg text-text-primary mb-8 leading-[1.15]"
          >
            Because home isn't about how a room looks. <br />
            <span className="italic text-accent-sand font-normal">
              It's about how it makes you feel.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-subheading text-text-secondary max-w-xl text-base sm:text-lg leading-relaxed"
          >
            Spaces for memories. Spaces for quiet rituals. Spaces built around the way you actually live, unwind, and gather with those you love.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default EmotionalSection;
