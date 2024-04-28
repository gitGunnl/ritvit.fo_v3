import React from 'react';

function TestimonialSection() {
  return (
    <section className="testimonial-section" aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading">What Our Clients Say</h2>
      {/* Placeholder for video testimonials - Use iframe for YouTube video embedding */}
      <div className="video-testimonials">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/1WpqQfmzBGY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          aria-label="Client testimonial video"></iframe>
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