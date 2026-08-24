import React, { useState } from 'react';

export interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  hoverScale?: boolean;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  aspectRatio = '',
  objectFit = 'cover',
  hoverScale = false,
  priority = false,
  className = '',
  imageClassName = '',
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getObjectFitClass = () => {
    switch (objectFit) {
      case 'contain':
        return 'object-contain';
      case 'fill':
        return 'object-fill';
      default:
        return 'object-cover';
    }
  };

  return (
    <div
      className={`img-frame-aspect relative overflow-hidden bg-bg-surface ${aspectRatio} ${className}`.trim()}
    >
      {/* Subtle skeleton shimmer during asset loading */}
      <div
        className={`absolute inset-0 bg-bg-surface-light transition-opacity duration-700 ${
          isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-hidden="true"
      />

      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full ${getObjectFitClass()} transition-all duration-700 ease-editorial ${
          hoverScale ? 'hover:scale-105' : ''
        } ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'} ${imageClassName}`.trim()}
        {...rest}
      />
    </div>
  );
};

export default EditorialImage;
