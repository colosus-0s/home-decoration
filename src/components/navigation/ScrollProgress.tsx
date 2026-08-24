import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollPercentage(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentStep = () => {
    if (scrollPercentage < 20) return '01';
    if (scrollPercentage < 40) return '02';
    if (scrollPercentage < 60) return '03';
    if (scrollPercentage < 80) return '04';
    if (scrollPercentage < 95) return '05';
    return '06';
  };

  return (
    <div
      className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 pointer-events-none select-none"
      aria-hidden="true"
    >
      <span className="font-sans text-[10px] tracking-[0.2em] text-accent-sand font-medium">
        {getCurrentStep()}
      </span>
      
      <div className="w-[1px] h-24 bg-bg-border relative overflow-hidden">
        <div
          className="w-full bg-accent-sand transition-all duration-300 ease-out"
          style={{ height: `${scrollPercentage}%` }}
        />
      </div>

      <span className="font-sans text-[10px] tracking-[0.2em] text-text-secondary opacity-50">
        06
      </span>
    </div>
  );
};

export default ScrollProgress;
