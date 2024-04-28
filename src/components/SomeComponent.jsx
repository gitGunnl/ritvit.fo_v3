import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SomeComponent = () => {
  return (
    <div>
      {/* Example usage with a specific image and alt text */}
      <LazyLoadImage
        src="./assets/ai-workplace-integration.webp"
        alt="AI solutions for workplace integration"
        effect="blur"
      />
    </div>
  );
};

export default SomeComponent;