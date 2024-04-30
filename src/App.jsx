import React, { useState, useEffect } from 'react';
import Layout from './layout';
import './App.css';
import TransitionButton from './components/TransitionButton'; // Import the TransitionButton component

function App() {
  const [showTransitionButton, setShowTransitionButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const articleSection = document.querySelector('.article-section');
      const salesSection = document.querySelector('.sales-section');
      const { bottom } = articleSection.getBoundingClientRect();
      const salesBottom = salesSection.getBoundingClientRect().bottom;
      const isEnd = bottom <= window.innerHeight;
      const isSalesEndVisible = salesBottom <= window.innerHeight;
      if (isEnd && !isSalesEndVisible) {
        setShowTransitionButton(true);
        console.log('Article end reached, showing transition button.');
      } else {
        setShowTransitionButton(false);
        console.log('Article end not reached or sales section visible, hiding transition button.');
      }
    };

    window.addEventListener('scroll', handleScroll);
    console.log('Scroll event listener added.');
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('Scroll event listener removed.');
    };
  }, []);

  const scrollToSalesSection = () => {
    const salesSection = document.querySelector('.sales-section');
    if (salesSection) {
      salesSection.scrollIntoView({ behavior: 'smooth' });
      console.log('Scrolling to sales section.');
    } else {
      console.error('Sales section not found'); // Error handling for missing sales section
    }
  };

  return (
    <Layout>
      <section className="article-section">
        {/* Placeholder for Article Section content */}
        <p>This is where the article content will go.</p>
        {showTransitionButton && <TransitionButton onClick={scrollToSalesSection} />}
      </section>
      <section className="sales-section">
        {/* Placeholder for Sales Section content */}
        <p>This is where the sales content will go.</p>
      </section>
    </Layout>
  );
}

export default App;