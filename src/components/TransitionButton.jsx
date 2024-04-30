import React from 'react';

const TransitionButton = ({ scrollToSalesSection }) => {
  const handleClick = () => {
    try {
      scrollToSalesSection();
      console.log('Transition button clicked, scrolling to sales section.');
    } catch (error) {
      console.error('Error scrolling to sales section:', error.message, error.stack);
    }
  };

  return (
    <button className="transition-button transition-button-visible" onClick={handleClick}>
      Learn More
    </button>
  );
};

export default TransitionButton;