import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  placeholderSrc = '/placeholder.svg',
  width,
  height,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(placeholderSrc);

  // Spróbuj użyć WebP jeśli jest obsługiwany
  const useWebP = () => {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Jeśli oryginalny plik już jest webp, po prostu go zwróć
    if (src.endsWith('.webp')) return src;
    
    // Sprawdź, czy przeglądarka obsługuje WebP
    const canvas = document.createElement('canvas');
    if (canvas.getContext && canvas.getContext('2d')) {
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0 ? webpSrc : src;
    }
    
    return src;
  };

  useEffect(() => {
    // Użyj WebP, jeśli jest obsługiwany
    const optimizedSrc = useWebP();
    
    // Wstępne załadowanie obrazu
    const img = new Image();
    img.src = optimizedSrc;
    
    img.onload = () => {
      setImgSrc(optimizedSrc);
      setIsLoaded(true);
    };
    
    img.onerror = () => {
      // W przypadku błędu, użyj oryginalnego źródła
      if (optimizedSrc !== src) {
        const fallbackImg = new Image();
        fallbackImg.src = src;
        
        fallbackImg.onload = () => {
          setImgSrc(src);
          setIsLoaded(true);
        };
        
        fallbackImg.onerror = () => {
          console.error(`Nie udało się załadować obrazu: ${src}`);
        };
      } else {
        console.error(`Nie udało się załadować obrazu: ${src}`);
      }
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={cn(
        'transition-opacity duration-300',
        isLoaded ? 'opacity-100' : 'opacity-30',
        className
      )}
      loading="lazy"
      width={width}
      height={height}
      {...props}
    />
  );
};

export default OptimizedImage;