// components/HoverImage/HoverImage.tsx
import { useHoverImage } from '../../hooks/useHoverImage';
import styles from './hover-image.module.scss';

interface HoverImageProps {
  defaultImage: string;
  hoverImage: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export const HoverImage = ({
  defaultImage,
  hoverImage,
  alt,
  width = '100%',
  height = 'auto',
  className = '',
}: HoverImageProps) => {
  const { imageSrc, isHovered, handleMouseEnter, handleMouseLeave } = 
    useHoverImage(defaultImage, hoverImage);

  return (
    <div 
      className={`${styles.imageContainer} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width, height }}
    >
      <img
        src={imageSrc}
        alt={alt}
        className={`${styles.image} ${isHovered ? styles.fadeInDown : ''}`}
      />
    </div>
  );
};