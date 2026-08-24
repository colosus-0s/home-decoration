import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export interface HeaderProps {
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-editorial ${
        isScrolled
          ? 'bg-bg-primary/85 backdrop-blur-md py-4 border-b border-bg-border/60 shadow-lg'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container-editorial flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          onClick={scrollToTop}
          className="font-serif text-lg md:text-xl tracking-[0.2em] text-text-primary uppercase hover:text-accent-sand transition-colors duration-300"
        >
          {siteConfig.brandName}
        </a>

        {/* Minimal Right Navigation */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8 font-sans text-xs tracking-[0.15em] text-text-secondary uppercase">
            <a href="#portfolio" className="hover:text-accent-sand transition-colors duration-300">
              Work
            </a>
            <a href="#transformation" className="hover:text-accent-sand transition-colors duration-300">
              Spaces
            </a>
            <a href="#moods" className="hover:text-accent-sand transition-colors duration-300">
              Moods
            </a>
            <a href="#cta" className="hover:text-accent-sand transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Menu Trigger Button */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
            className="group flex items-center gap-3 font-sans text-xs tracking-[0.15em] text-text-primary uppercase hover:text-accent-sand transition-colors duration-300 focus-visible:outline-none"
          >
            <span className="hidden sm:inline">Menu</span>
            <span className="p-2 border border-bg-border group-hover:border-accent-sand transition-colors duration-300">
              <Menu className="w-4 h-4 stroke-[1.25]" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
