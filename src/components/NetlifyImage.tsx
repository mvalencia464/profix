
import React from 'react';
import { getOptimizedImageUrl, ImageOptimizationProps } from '../utils/imageOptimizer';

interface NetlifyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    cdnOptions?: Omit<ImageOptimizationProps, 'src'>;
}

export const NetlifyImage: React.FC<NetlifyImageProps> = ({
    src,
    cdnOptions = {},
    className,
    alt,
    ...props
}) => {
    const optimizedSrc = src ? getOptimizedImageUrl({ src, ...cdnOptions }) : '';

    return (
        <img
            src={optimizedSrc}
            alt={alt}
            className={className}
            {...props}
        />
    );
};

export default NetlifyImage;
