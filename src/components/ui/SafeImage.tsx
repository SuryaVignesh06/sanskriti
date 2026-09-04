import { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1000&auto=format&fit=crop';

export function SafeImage({ src, alt, className, fallbackSrc = DEFAULT_FALLBACK, ...props }: SafeImageProps) {
  let initialSrc = src;
  if (initialSrc && initialSrc.startsWith('/') && !initialSrc.startsWith('http')) {
    const base = import.meta.env.BASE_URL;
    initialSrc = base + (initialSrc.startsWith('/') ? initialSrc.slice(1) : initialSrc);
  }
  
  const [imgSrc, setImgSrc] = useState(initialSrc || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || 'SANSKRITI Living Culture'}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
}
