
export interface ImageOptimizationProps {
    src: string;
    width?: number;
    height?: number;
    quality?: number; // 1-100
    format?: 'avif' | 'jpg' | 'png' | 'webp';
    fit?: 'contain' | 'cover' | 'fill';
}

/**
 * Transforms an image URL to use Netlify's Image CDN
 * @param props Image optimization properties
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = ({
    src,
    width,
    height,
    quality,
    format,
    fit,
}: ImageOptimizationProps): string => {
    // Return original source if not in production or if src is empty
    if (import.meta.env.DEV || !src) {
        return src;
    }

    // specific check to avoid double-processing if the url is already processed or invalid
    if (src.includes('/.netlify/images')) {
        return src;
    }

    const params = new URLSearchParams();
    params.set('url', src);

    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    if (quality) params.set('q', quality.toString());
    if (format) params.set('fm', format);
    if (fit) params.set('fit', fit);

    return `/.netlify/images?${params.toString()}`;
};
