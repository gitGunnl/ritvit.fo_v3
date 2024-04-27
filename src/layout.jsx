import React from 'react';
import './layout.css';
import ArticleSection from './components/ArticleSection'; // Import the ArticleSection component

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="header">
        <h1>ritvit.fo_v3</h1>
      </header>
      <main className="main-content">
        <ArticleSection /> {/* Include the ArticleSection component */}
        {children}
      </main>
      <footer className="footer">
        <p>&copy; 2023 ritvit.fo_v3. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;