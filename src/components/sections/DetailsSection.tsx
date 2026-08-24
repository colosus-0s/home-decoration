import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeader, EditorialImage } from '../common';
import { detailItems } from '../../data/detailsData';

export const DetailsSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="details" className="w-full section-spacing bg-bg-primary border-t border-bg-border/60">
      <Container>
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <SectionHeader
            index="06"
            eyebrow="CRAFTSMANSHIP & MATERIALITY"
            title="Luxury lives in the details."
            description="After experiencing the complete space, we zoom in to examine the micro-decisions: tactile linen weaves, mineral stone grain, precision brass joinery, fluted timber, and ambient light."
          />
        </div>

        {/* Restored Asymmetrical Editorial Masonry Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {detailItems.map((item) => {
            const isHovered = hoveredId === item.id;
            const isAnyHovered = hoveredId !== null;

            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 25, scale: 0.98 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setHoveredId(item.id === hoveredId ? null : item.id);
                  }
                }}
                aria-label={`Inspect ${item.material}`}
                className={`group relative overflow-hidden border-architectural bg-bg-surface p-2 transition-all duration-500 cursor-pointer ${
                  item.gridSpan || 'col-span-1'
                } ${
                  isHovered
                    ? 'opacity-100 z-10'
                    : isAnyHovered
                    ? 'opacity-70'
                    : 'opacity-100'
                }`}
              >
                <div className="relative overflow-hidden h-full min-h-[280px]">
                  <EditorialImage
                    src={item.imagePath}
                    alt={item.title}
                    aspectRatio="aspect-[4/3] md:aspect-auto"
                    className="w-full h-full min-h-[280px]"
                    imageClassName={`transition-transform duration-700 ease-editorial ${
                      isHovered ? 'scale-[1.03]' : 'scale-100'
                    }`}
                  />

                  {/* Polished Macro Texture Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/40 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300">
                    <span className="font-eyebrow text-[11px] text-accent-sand mb-1 font-medium tracking-wider">
                      {item.material}
                    </span>

                    <h4 className="font-serif text-xl text-text-primary mb-2 tracking-tight">
                      {item.title}
                    </h4>

                    <p className="font-caption text-xs text-text-secondary leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default DetailsSection;
