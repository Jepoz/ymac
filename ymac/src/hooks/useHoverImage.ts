// hooks/useHoverImage.ts
import { useState } from 'react';

type AnimationDirection = 'down' | 'up';

export const useHoverImage = (defaultImage: string, hoverImage: string) => {
  const [imageSrc, setImageSrc] = useState(defaultImage);
  const [animationDirection, setAnimationDirection] = useState<AnimationDirection>('down');

  const handleMouseEnter = () => {
    setImageSrc(hoverImage);
    setAnimationDirection('down');
  };

  const handleMouseLeave = () => {
    setImageSrc(defaultImage);
    setAnimationDirection('up');
  };

  return {
    imageSrc,
    animationDirection,
    handleMouseEnter,
    handleMouseLeave,
  };
};
