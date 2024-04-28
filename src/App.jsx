import React from 'react';
import Layout from './layout';
import './App.css';
import './picocssIntegration.css'; // Importing PicoCSS integration styles
import BenefitsSection from './components/BenefitsSection';
import ClientTestimonials from './components/ClientTestimonials';
import SalesSection from './components/SalesSection'; // Importing the SalesSection component

function App() {
  return (
    <Layout>
      <div className="container"> {/* Applying PicoCSS container class */}
        <section className="article-section">
          {/* Placeholder for Article Section content */}
          <p>This is where the article content will go.</p>
        </section>
        <BenefitsSection />
        <ClientTestimonials />
        <SalesSection /> {/* Including the SalesSection component */}
      </div>
    </Layout>
  );
}

export default App;