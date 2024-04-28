import React from 'react';

function CallToAction() {
  // Error handling for the button click event
  const handleClick = () => {
    try {
      console.log('Call to Action button clicked');
      // Implement the click event logic here, such as form submission or navigation
    } catch (error) {
      console.error('Error occurred in CallToAction handleClick:', error.message, error.stack);
    }
  };

  return (
    <section className="cta-section" aria-label="Call to Action">
      <h2>Ready to Transform Your Business?</h2>
      <button
        className="cta-button"
        onClick={handleClick}
        tabIndex="0" // Ensures the button is focusable for keyboard users
        aria-label="Sign up now to start transforming your business" // Provides a descriptive label for screen readers
      >
        Sign Up Now
      </button>
    </section>
  );
}