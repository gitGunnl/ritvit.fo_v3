import React from 'react';

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2>What Our Clients Say</h2>
      {/* Placeholder for video testimonials - Example video path used */}
      <div className="video-testimonials">
        <video controls>
          <source src="https://www.youtube.com/watch?v=1WpqQfmzBGY" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Placeholder for text testimonials */}
      <div className="text-testimonials">
        <blockquote>
          "This service has transformed our workflow efficiency and productivity, enabling us to focus on innovation rather than mundane tasks."
          <footer>- Jane Doe, CEO of Innovatech</footer>
        </blockquote>
        <blockquote>
          "Thanks to these AI solutions, we've seen a significant reduction in operational costs and an improvement in data accuracy."
          <footer>- John Smith, Operations Manager</footer>
        </blockquote>
      </div>
    </section>
  );
}

export default TestimonialSection;