import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../common';

export const CTASection: React.FC = () => {
  return (
    <section id="cta" className="w-full section-spacing bg-[#0D0D0E] text-text-primary border-t border-bg-border/60 relative overflow-hidden">
      {/* Subtle Warm Sand Architectural Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent-sand/5 blur-[140px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center border-architectural p-8 sm:p-14 md:p-20 bg-bg-surface">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-eyebrow text-accent-sand mb-4 block"
          >
            BEGIN YOUR TRANSFORMATION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display-lg text-text-primary mb-6"
          >
            Let's create your space.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-subheading text-text-secondary max-w-lg mb-10 text-base"
          >
            From raw architectural concept to final detail curation, we guide every step of your spatial journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="primary" href="mailto:[EMAIL ADDRESS]">
              START YOUR SPACE
            </Button>
            <Button variant="secondary" href="#portfolio">
              EXPLORE RESIDENCES
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
