import React from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeader, EditorialImage } from '../common';
import { detailItems } from '../../data/detailsData';

export const DetailsSection: React.FC = () => {
  return (
    <section id="details" className="w-full section-spacing bg-bg-primary border-t border-bg-border/60">
      <Container>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <SectionHeader
            index="06"
            eyebrow="CRAFTSMANSHIP & MATERIALITY"
            title="Luxury lives in the details."
            description="After experiencing the complete space, we zoom in to examine the micro-decisions: tactile linen weaves, mineral stone grain, precision brass joinery, and shadow play."
          />
        </div>

        {/* Asymmetrical Architectural Masonry Texture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {detailItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden border-architectural bg-bg-surface p-2 ${
                item.gridSpan || 'col-span-1'
              }`}
            >
              <div className="relative overflow-hidden h-full min-h-[260px]">
                <EditorialImage
                  src={item.imagePath}
                  alt={item.title}
                  aspectRatio="aspect-[4/3] md:aspect-auto"
                  className="w-full h-full min-h-[260px]"
                  hoverScale
                />

                {/* Macro Texture Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent p-5 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-eyebrow text-[10px] text-accent-sand mb-1">
                    {item.material}
                  </span>
                  <h4 className="font-serif text-lg text-text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="font-caption text-xs text-text-secondary line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DetailsSection;
