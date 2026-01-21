import React from 'react';

interface RasterImageProps {
  id: string;
  className?: string;
  alt?: string; // Valid for accessibility if using role="img"
}

export const RasterImage: React.FC<RasterImageProps> = ({
  id,
  className = '',
  alt,
}) => {
  return (
    <svg
      className={className}
      role='img'
      aria-label={alt}
      preserveAspectRatio='none'
    >
      <use href={`#${id}`} width='100%' height='100%' />
    </svg>
  );
};
