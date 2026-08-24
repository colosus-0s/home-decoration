import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navItems = [
    { number: '01', label: 'Work', href: '#portfolio' },
    { number: '02', label: 'Spaces', href: '#transformation' },
    { number: '03', label: 'Moods', href: '#moods' },
    { number: '04', label: 'Details', href: '#details' },
    { number: '05', label: 'Contact', href: '#cta' },
  ];

  const handleNavClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-bg-primary/98 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 transition-all duration-500 ease-editorial"
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
    >
      {/* Header bar inside menu */}
      <div className="flex items-center justify-between">
        <span className="font-serif text-lg tracking-[0.2em] text-text-primary uppercase">
          {siteConfig.brandName}
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="p-3 border border-bg-border text-text-primary hover:border-accent-sand hover:text-accent-sand transition-colors duration-300 focus-visible:outline-none"
        >
          <X className="w-5 h-5 stroke-[1.25]" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className="container-editorial my-auto py-8">
        <nav className="flex flex-col gap-6 md:gap-8 max-w-3xl">
          {navItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="group flex items-baseline gap-6 text-text-primary hover:text-accent-sand transition-colors duration-300"
            >
              <span className="font-sans text-xs md:text-sm tracking-[0.2em] text-accent-sand font-medium">
                {item.number}
              </span>
              <span className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-tight leading-none group-hover:translate-x-3 transition-transform duration-500 ease-editorial">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Footer info inside menu */}
      <div className="container-editorial pt-6 border-t border-bg-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans text-xs text-text-secondary tracking-widest uppercase">
        <p>Spatial Transformation & Interior Architecture</p>
        <p>Private Practice & Consultations</p>
      </div>
    </div>
  );
};

export default FullscreenMenu;
