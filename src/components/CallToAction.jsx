import React from 'react';

function CallToAction() {
  // Simplified button click event handler
  const handleClick = () => {
    console.log('Call to Action button clicked');
    // Implement the simple click event logic here, such as form submission or navigation
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

export default CallToAction;
