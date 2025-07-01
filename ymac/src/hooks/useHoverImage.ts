// hooks/useHoverImage.ts
import { useState } from 'react';

export const useHoverImage = (defaultImage: string, hoverImage: string) => {
  const [imageSrc, setImageSrc] = useState(defaultImage);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setImageSrc(hoverImage);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setImageSrc(defaultImage);
  };

  return {
    imageSrc,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
};