import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, ...props }) => {
  try {
    return (
      <LazyLoadImage
        src={src}
        alt={alt}
        effect="blur"
        {...props}
      />
    );
  } catch (error) {
    console.error("Failed to load image with src: " + src + ". Error: ", error);
    return <p>Error loading image.</p>;
  }
};

export default LazyImage;