import React from 'react';
import { motion } from 'framer-motion';
import { Container, Button } from '../common';
import { siteConfig } from '../../data/siteConfig';
import { HERO_POSTER_IMAGE, HERO_MOBILE_IMAGE } from '../../utils/assets';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-24 pb-12">
      {/* Background Media Architecture (Full-screen interior visual with dedicated mobile crop) */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 639px)" srcSet={HERO_MOBILE_IMAGE} />
          <img
            src={HERO_POSTER_IMAGE}
            alt="Cinematic interior transformation environment with warm architectural lighting"
            className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000 ease-editorial"
          />
        </picture>
        {/* Editorial Vignette and Shadow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-bg-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/80 via-transparent to-bg-primary/40" />
      </div>

      {/* Hero Content Overlay */}
      <Container className="relative z-10 my-auto">
        <div className="max-w-4xl flex flex-col items-start text-left">
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[1px] bg-accent-sand" />
            <span className="font-eyebrow text-accent-sand">
              Spatial Transformation & Interior Architecture
            </span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-xl text-text-primary mb-8 max-w-3xl leading-[1.05]"
          >
            A SPACE SHOULD <br />
            <span className="italic font-normal text-accent-sand">FEEL LIKE YOU.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-subheading text-text-secondary max-w-xl mb-10"
          >
            {siteConfig.heroSubtext}
          </motion.p>

          {/* Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Button variant="primary" href="#transformation">
              {siteConfig.primaryCTA}
            </Button>
            <Button variant="secondary" href="#portfolio">
              VIEW WORK
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Scroll Progress Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 pointer-events-none">
        <Container className="flex items-center justify-between font-sans text-xs tracking-[0.2em] text-text-secondary uppercase">
          <div className="flex items-center gap-3">
            <span className="text-accent-sand font-medium">01</span>
            <span className="w-12 h-[1px] bg-bg-border" />
            <span className="opacity-50">06</span>
          </div>

          <div className="flex items-center gap-2 text-text-secondary/70">
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1.5 h-3 border border-text-secondary/50 rounded-full flex justify-center pt-0.5"
            >
              <div className="w-0.5 h-1 bg-accent-sand rounded-full" />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
