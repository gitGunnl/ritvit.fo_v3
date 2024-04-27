import React from 'react';
import './testimonialSection.css';

function TestimonialSection() {
  try {
    console.log('Rendering TestimonialSection');
    return (
      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p><strong>Amazing service!</strong> Integrating AI into our workflow has been a game-changer. - Company X</p>
        </div>
        {/* Include more testimonials as needed */}
      </section>
    );
  } catch (error) {
    console.error('Error rendering TestimonialSection:', error.message, error.stack);
    return <p>Error loading testimonials. Please try again later.</p>;
  }
}

export default TestimonialSection;