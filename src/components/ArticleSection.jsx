import React, { useState, useEffect, useRef } from 'react';

const ArticleSection = () => {
  const [atBottom, setAtBottom] = useState(false);
  const articleRef = useRef(null);

  const handleScroll = () => {
    if (!articleRef.current) return;
    const articleBottom = articleRef.current.getBoundingClientRect().bottom;
    const isAtBottom = articleBottom <= window.innerHeight;
    setAtBottom(isAtBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  try {
    console.log('Rendering ArticleSection');
    return (
      <section className="article-section" ref={articleRef}>
        <h2>Empowering Your Workplace with AI</h2>
        <p>Welcome to the future of workplace integration, where Artificial Intelligence (AI) solutions are not just an option but a necessity for staying competitive and innovative. In today’s fast-paced environment, businesses face numerous challenges, from increasing operational efficiency to enhancing customer experience. This is where our AI solutions come into play.</p>
        <p>Our cutting-edge technology is designed to streamline processes, facilitate decision-making, and provide unparalleled insights into your business operations. By integrating AI into your workplace, you unlock a world of possibilities, empowering your team to achieve more in less time.</p>
        <p>As we delve deeper into the benefits of AI for your business, remember that the journey towards digital transformation is a step towards securing a successful, sustainable future for your organization.</p>
        {atBottom && (
          <button onClick={() => window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
          })} aria-label="Go to sales section">
            Discover Our Solutions
          </button>
        )}
      </section>
    );
  } catch (error) {
    console.error('Error rendering ArticleSection:', error.message, error.stack);
    return <p>Error loading article section.</p>;
  }
};

export default ArticleSection;