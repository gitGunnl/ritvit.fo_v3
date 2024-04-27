import React from 'react';
import Layout from './layout';
import './App.css';
import BenefitsSection from './components/BenefitsSection'; // Importing the BenefitsSection component

function App() {
  return (
    <Layout>
      <section className="article-section">
        {/* Placeholder for Article Section content */}
        <p>This is where the article content will go.</p>
      </section>
      <BenefitsSection /> {/* Including the BenefitsSection component */}
      <section className="sales-section">
        {/* Placeholder for Sales Section content */}
        <p>This is where the sales content will go.</p>
      </section>
    </Layout>
  );
}

export default App;