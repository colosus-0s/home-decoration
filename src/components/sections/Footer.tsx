import React from 'react';
import { Container } from '../common';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#09090A] text-text-primary border-t border-bg-border pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pb-12 border-b border-bg-border/60">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] text-text-primary uppercase block mb-4">
                {siteConfig.brandName}
              </span>
              <p className="font-body text-text-secondary text-sm max-w-sm leading-relaxed">
                Transforming unformed spaces into places that feel complete, personal, and worth living in.
              </p>
            </div>

            <div className="mt-8 font-sans text-xs tracking-widest text-accent-sand uppercase">
              Private Architectural Practice
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <span className="font-eyebrow text-accent-sand block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-3 font-sans text-xs tracking-widest text-text-secondary uppercase">
              <li>
                <a href="#portfolio" className="hover:text-text-primary transition-colors">
                  Work & Portfolio
                </a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-text-primary transition-colors">
                  The Transformation
                </a>
              </li>
              <li>
                <a href="#moods" className="hover:text-text-primary transition-colors">
                  Moods & Feelings
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-text-primary transition-colors">
                  Material Details
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-text-primary transition-colors">
                  Consultations
                </a>
              </li>
            </ul>
          </div>

          {/* Neutral Contact Placeholders Column */}
          <div className="md:col-span-4">
            <span className="font-eyebrow text-accent-sand block mb-4">
              INQUIRIES & STUDIO
            </span>
            <div className="space-y-3 font-sans text-xs tracking-wider text-text-secondary uppercase">
              <p className="text-text-primary">[LOCATION]</p>
              <p>[PHONE]</p>
              <p className="pt-2 text-accent-sand underline underline-offset-4 font-mono">
                [EMAIL ADDRESS]
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-text-secondary tracking-widest uppercase">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <p className="text-[11px] opacity-70">A Space Should Feel Like You.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
