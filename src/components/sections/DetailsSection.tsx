import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, SectionHeader, EditorialImage } from '../common';
import { detailItems } from '../../data/detailsData';

export const DetailsSection: React.FC = () => {
  const [focusedId, setFocusedId] = useState<string | null>(detailItems[1]?.id || detailItems[0]?.id);

  // Separate dominant material (Dark Gold-Veined Marble or first item) and supporting materials
  const dominantMaterial = detailItems.find((item) => item.id === 'detail-marble') || detailItems[0];
  const supportingMaterials = detailItems.filter((item) => item.id !== dominantMaterial.id);

  return (
    <section id="details" className="w-full section-spacing bg-bg-primary border-t border-bg-border/60">
      <Container>
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <SectionHeader
            index="06"
            eyebrow="CRAFTSMANSHIP & MATERIALITY"
            title="The Material Laboratory."
            description="We have shown the completed home. Now we zoom in to inspect the micro-decisions that create atmosphere: tactile linen weaves, gold-veined stone, brushed brass joinery, fluted timber, and ambient light."
          />
        </div>

        {/* Asymmetrical Material Laboratory Composition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          {/* Dominant Hero Material Frame (7 Cols) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
            }}
            onMouseEnter={() => setFocusedId(dominantMaterial.id)}
            onClick={() => setFocusedId(dominantMaterial.id)}
            role="button"
            tabIndex={0}
            aria-label={`Focus ${dominantMaterial.title}`}
            className={`lg:col-span-7 relative group overflow-hidden border-architectural bg-bg-surface p-3 transition-all duration-500 cursor-pointer ${
              focusedId === dominantMaterial.id ? 'ring-1 ring-accent-sand opacity-100 z-10' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <div className="relative overflow-hidden w-full h-full min-h-[380px] sm:min-h-[460px] flex flex-col justify-end">
              <EditorialImage
                src={dominantMaterial.imagePath}
                alt={dominantMaterial.title}
                className="w-full h-full absolute inset-0"
                imageClassName={`w-full h-full object-cover transition-transform duration-700 ${
                  focusedId === dominantMaterial.id ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-bg-primary/40 to-transparent" />

              {/* Material Laboratory Camera Focus Reticle Overlay */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs tracking-widest font-mono text-accent-sand uppercase pointer-events-none">
                <span className="px-3 py-1 bg-bg-primary/80 backdrop-blur-md border border-bg-border">
                  Dominant Material — 01
                </span>
                <span className="text-[11px] opacity-80">[CAMERA FOCUS]</span>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-6 sm:p-8">
                <span className="font-eyebrow text-accent-sand mb-2 block">
                  {dominantMaterial.material}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl text-text-primary mb-3">
                  {dominantMaterial.title}
                </h3>

                <p className="font-body text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                  {dominantMaterial.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Supporting Material Frames Grid (5 Cols — 2x2 Layout) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportingMaterials.map((item, idx) => {
              const isFocused = focusedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  onMouseEnter={() => setFocusedId(item.id)}
                  onClick={() => setFocusedId(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Focus ${item.title}`}
                  className={`group relative overflow-hidden border-architectural bg-bg-surface p-2 transition-all duration-500 cursor-pointer ${
                    isFocused ? 'ring-1 ring-accent-sand opacity-100 scale-[1.02] z-10' : 'opacity-65 hover:opacity-95'
                  }`}
                >
                  <div className="relative overflow-hidden w-full h-full min-h-[220px] flex flex-col justify-end">
                    <EditorialImage
                      src={item.imagePath}
                      alt={item.title}
                      className="w-full h-full absolute inset-0"
                      imageClassName={`w-full h-full object-cover transition-transform duration-700 ${
                        isFocused ? 'scale-105' : 'scale-100'
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/30 to-transparent" />

                    {/* Content Overlay */}
                    <div className="relative z-10 p-4">
                      <span className="font-eyebrow text-[10px] text-accent-sand mb-1 block">
                        0{idx + 2} — {item.material}
                      </span>

                      <h4 className="font-serif text-lg text-text-primary mb-1">
                        {item.title}
                      </h4>

                      <p className="font-caption text-xs text-text-secondary line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default DetailsSection;
