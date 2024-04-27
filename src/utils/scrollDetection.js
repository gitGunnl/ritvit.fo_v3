const detectScrollToArticleEnd = (articleEndCallback) => {
  const articleSection = document.querySelector('.article-section');

  const onScroll = () => {
    if (!articleSection) {
      console.error('Article section not found.');
      return;
    }

    const { bottom } = articleSection.getBoundingClientRect();
    const isAtEnd = bottom <= window.innerHeight;

    if (isAtEnd) {
      articleEndCallback();
    }
  };

  window.addEventListener('scroll', onScroll);

  return () => window.removeEventListener('scroll', onScroll);
};

export default detectScrollToArticleEnd;