import React from 'react';
import BenefitsSection from './BenefitsSection';
import TestimonialSection from './TestimonialSection';
import ThreeStepProcessSection from './ThreeStepProcessSection';
import FeaturesListSection from './FeaturesListSection';
import CallToAction from './CallToAction';

const SalesSection = ({ highlight = false }) => {
  try {
    console.log("Rendering SalesSection with highlight:", highlight);
    return (
      <div className={`sales-section ${highlight ? 'highlight' : ''}`}>
        <h2>Why Choose Our AI Solutions?</h2>
        <BenefitsSection />
        <TestimonialSection />
        <ThreeStepProcessSection />
        <FeaturesListSection />
        <CallToAction />
      </div>
    );
  } catch (error) {
    console.error("Failed to render SalesSection component:", error.message, error.stack);
    return <div>Error loading sales section.</div>;
  }
};

export default SalesSection;