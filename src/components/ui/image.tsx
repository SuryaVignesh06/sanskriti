import { forwardRef, type ImgHTMLAttributes, useEffect, useState } from 'react'

const FALLBACK_IMAGE_URL = "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, ...props }, ref) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src)

  useEffect(() => {
    setImgSrc((prev) => (prev !== src ? src : prev))
  }, [src])

  if (!src) {
    return <div data-empty-image ref={ref} {...props} />
  }

  const imageProps = {
    ...props, 
    onError: () => setImgSrc(FALLBACK_IMAGE_URL)
  }

  return <img ref={ref} src={imgSrc} {...imageProps} />
})
Image.displayName = 'Image'
