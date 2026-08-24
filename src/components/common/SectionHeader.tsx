import React from 'react';

export interface SectionHeaderProps {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  titleAs?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  titleAs: TitleTag = 'h2',
  className = '',
}) => {
  const getAlignmentClass = () => {
    switch (align) {
      case 'center':
        return 'text-center mx-auto items-center';
      case 'right':
        return 'text-right ml-auto items-end';
      default:
        return 'text-left items-start';
    }
  };

  const formattedEyebrow = React.useMemo(() => {
    if (index && eyebrow) {
      return `${index} — ${eyebrow}`;
    }
    return index || eyebrow || null;
  }, [index, eyebrow]);

  return (
    <header className={`flex flex-col max-w-3xl ${getAlignmentClass()} ${className}`.trim()}>
      {formattedEyebrow && (
        <span className="font-eyebrow mb-3 block">
          {formattedEyebrow}
        </span>
      )}
      
      <TitleTag className="font-heading text-text-primary leading-tight mb-4">
        {title}
      </TitleTag>

      {description && (
        <p className="font-subheading text-text-secondary max-w-xl">
          {description}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
