import React, { useState } from 'react';
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

  return (
    <section id="portfolio" className="w-full section-spacing bg-bg-surface border-t border-bg-border/60">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16">
          <SectionHeader
            index="05"
            eyebrow="FEATURED PORTFOLIO"
            title="Selected Residences."
            description="Our architecture and interior practice is illustrated through completed private spaces."
          />

          {/* Project Pagination Controls */}
          <div className="flex items-center gap-4">
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

        {/* Editorial Project Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-bg-primary border-architectural p-6 md:p-10">
          {/* Main Hero Project Viewport */}
          <div className="lg:col-span-8 relative group">
            <div className="relative overflow-hidden bg-bg-surface">
              <EditorialImage
                src={activeImage}
                alt={`${activeProject.title} interior showcase`}
                aspectRatio="aspect-[16/10]"
                priority
              />

              {/* Lightbox Expand Button Overlay */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-label="Expand image fullscreen"
                className="absolute top-4 right-4 p-3 bg-bg-primary/80 backdrop-blur-md border border-bg-border text-text-primary hover:text-accent-sand opacity-90 group-hover:opacity-100 transition-all duration-300"
              >
                <Maximize2 className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>

            {/* Thumbnail Gallery Filmstrip */}
            <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-2 scrollbar-none">
              {activeProject.galleryImages.map((imgUrl, idx) => (
                <button
                  key={imgUrl + idx}
                  type="button"
                  onClick={() => setActiveGalleryImageIndex(idx)}
                  className={`relative w-24 h-16 flex-shrink-0 border-2 overflow-hidden transition-all duration-300 ${
                    idx === activeGalleryImageIndex ? 'border-accent-sand opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Thumbnail view" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Project Details Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
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
                  <span className="text-text-primary">{activeProject.scope}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="text-text-primary">{activeProject.location}</span>
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
                VIEW FULL GALLERY
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Accessible Fullscreen Lightbox Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${activeProject.title} — ${activeProject.scope}`}
      >
        <div className="flex flex-col items-center">
          <div className="w-full max-h-[70vh] flex items-center justify-center mb-6 overflow-hidden">
            <img
              src={activeImage}
              alt={`${activeProject.title} expanded view`}
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto w-full justify-center pb-2">
            {activeProject.galleryImages.map((imgUrl, idx) => (
              <button
                key={'modal-thumb-' + idx}
                type="button"
                onClick={() => setActiveGalleryImageIndex(idx)}
                className={`w-20 h-14 border-2 transition-all ${
                  idx === activeGalleryImageIndex ? 'border-accent-sand opacity-100' : 'border-transparent opacity-50'
                }`}
              >
                <img src={imgUrl} alt="Gallery thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default PortfolioSection;
