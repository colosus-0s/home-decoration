import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container, SectionHeader, EditorialImage, Modal, Button } from '../common';
import { portfolioProjects } from '../../data/portfolioData';

export const PortfolioSection: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeGalleryImageIndex, setActiveGalleryImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeProject = portfolioProjects[activeProjectIndex];
  const activeImage = activeProject.galleryImages[activeGalleryImageIndex] || activeProject.heroImage;

  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev < portfolioProjects.length - 1 ? prev + 1 : 0));
    setActiveGalleryImageIndex(0);
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : portfolioProjects.length - 1));
    setActiveGalleryImageIndex(0);
  };

  const handleSelectProject = (index: number) => {
    setActiveProjectIndex(index);
    setActiveGalleryImageIndex(0);
  };

  return (
    <section id="portfolio" className="w-full section-spacing bg-bg-surface border-t border-bg-border/60">
      <Container>
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            index="05"
            eyebrow="FEATURED PORTFOLIO"
            title="Selected Residences."
            description="Our architecture and interior practice is illustrated through completed private spaces."
          />

          {/* Project Pagination Controls */}
          <div className="flex items-center gap-6">
            {/* Quick Project Index Selector Dots */}
            <div className="flex items-center gap-2">
              {portfolioProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleSelectProject(idx)}
                  aria-label={`Select ${proj.title}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    idx === activeProjectIndex ? 'w-8 bg-accent-sand' : 'w-2 bg-bg-border hover:bg-text-secondary'
                  }`}
                />
              ))}
            </div>

            <span className="font-mono text-xs tracking-widest text-text-secondary">
              {activeProject.projectNumber}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrevProject}
                aria-label="Previous project"
                className="p-3 border border-bg-border text-text-primary hover:border-accent-sand hover:text-accent-sand transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNextProject}
                aria-label="Next project"
                className="p-3 border border-bg-border text-text-primary hover:border-accent-sand hover:text-accent-sand transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Editorial Project Showcase Card (Synchronized Single Source of Truth) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-bg-primary border-architectural p-6 md:p-10">
          {/* Main Hero Project Viewport */}
          <div className="lg:col-span-8 relative group flex flex-col justify-between">
            <div className="relative overflow-hidden bg-bg-surface">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeProject.id}-${activeGalleryImageIndex}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <EditorialImage
                    src={activeImage}
                    alt={`${activeProject.title} interior showcase`}
                    aspectRatio="aspect-[16/10]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Lightbox Expand Button Overlay */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-label="Expand image fullscreen"
                className="absolute top-4 right-4 p-3 bg-bg-primary/85 backdrop-blur-md border border-bg-border text-text-primary hover:text-accent-sand opacity-90 group-hover:opacity-100 transition-all duration-300 z-10"
              >
                <Maximize2 className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>

            {/* Thumbnail Gallery Filmstrip (Synchronized to Active Project) */}
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
              {activeProject.galleryImages.map((imgUrl, idx) => (
                <button
                  key={`${activeProject.id}-thumb-${idx}`}
                  type="button"
                  onClick={() => setActiveGalleryImageIndex(idx)}
                  aria-label={`View image ${idx + 1} of ${activeProject.title}`}
                  className={`relative w-24 h-16 flex-shrink-0 border-2 overflow-hidden transition-all duration-300 ${
                    idx === activeGalleryImageIndex
                      ? 'border-accent-sand opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details Sidebar (Synchronized Single Source of Truth) */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  <span className="font-eyebrow text-accent-sand mb-2 block">
                    {activeProject.category}
                  </span>

                  <h3 className="font-serif text-3xl md:text-4xl text-text-primary mb-4">
                    {activeProject.title}
                  </h3>

                  <div className="space-y-3 mb-6 pt-4 border-t border-bg-border/80 text-xs tracking-wider uppercase font-sans text-text-secondary">
                    <div className="flex justify-between">
                      <span>Scope</span>
                      <span className="text-text-primary font-medium">{activeProject.scope}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Location</span>
                      <span className="text-text-primary font-medium">{activeProject.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Index</span>
                      <span className="text-accent-sand font-mono">{activeProject.projectNumber}</span>
                    </div>
                  </div>

                  <p className="font-body text-text-secondary text-sm leading-relaxed mb-8">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <Button
                    variant="secondary"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full"
                  >
                    VIEW FULL GALLERY ({activeProject.galleryImages.length})
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>

      {/* Accessible Fullscreen Lightbox Modal (Bound strictly to Active Residence) */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${activeProject.title} — ${activeProject.scope}`}
      >
        <div className="flex flex-col items-center">
          <div className="w-full max-h-[70vh] flex items-center justify-center mb-6 overflow-hidden relative">
            <img
              src={activeImage}
              alt={`${activeProject.title} expanded view ${activeGalleryImageIndex + 1}`}
              className="max-h-[70vh] w-auto object-contain"
            />

            {/* Modal Image Navigation Controls */}
            {activeProject.galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveGalleryImageIndex((prev) =>
                      prev > 0 ? prev - 1 : activeProject.galleryImages.length - 1
                    )
                  }
                  className="absolute left-2 p-3 bg-bg-primary/80 border border-bg-border text-text-primary hover:text-accent-sand transition-colors"
                  aria-label="Previous gallery image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setActiveGalleryImageIndex((prev) =>
                      prev < activeProject.galleryImages.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute right-2 p-3 bg-bg-primary/80 border border-bg-border text-text-primary hover:text-accent-sand transition-colors"
                  aria-label="Next gallery image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Modal Thumbnails */}
          <div className="flex items-center gap-3 overflow-x-auto w-full justify-center pb-2">
            {activeProject.galleryImages.map((imgUrl, idx) => (
              <button
                key={`modal-${activeProject.id}-thumb-${idx}`}
                type="button"
                onClick={() => setActiveGalleryImageIndex(idx)}
                className={`w-20 h-14 border-2 transition-all flex-shrink-0 ${
                  idx === activeGalleryImageIndex ? 'border-accent-sand opacity-100' : 'border-transparent opacity-50 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Gallery thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default PortfolioSection;
