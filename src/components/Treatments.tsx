import React from 'react';
import { ArrowRight } from 'lucide-react';

const Treatments: React.FC = () => {
  return (
    <section className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Holistic Healing</span>
          <h2 className="section-title">Ayurvedic Treatments</h2>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-light)', maxWidth: '600px', margin: '1.5rem auto' }}>
            A unique opportunity to dive deep into different themes, approached from an Ayurvedic perspective. Discover the reasoning behind imbalances and how Ayurveda manages them.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-img-wrapper">
              <span className="service-badge">Purification</span>
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" alt="Panchakarma" className="service-img" />
            </div>
            <div className="service-content">
              <h3 className="service-title">Panchakarma</h3>
              <p className="service-desc">The ultimate mind-body healing experience for detoxifying the body, strengthening the immune system, and restoring balance and well-being.</p>
              <a href="#" className="service-link">Learn More <ArrowRight size={16} /></a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-img-wrapper">
              <span className="service-badge">Relaxation</span>
              <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" alt="Shirodhara" className="service-img" />
            </div>
            <div className="service-content">
              <h3 className="service-title">Shirodhara</h3>
              <p className="service-desc">A continuous stream of warm, medicated oil poured gently over the forehead to deeply relax the nervous system and calm the mind.</p>
              <a href="#" className="service-link">Learn More <ArrowRight size={16} /></a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-img-wrapper">
              <span className="service-badge">Rejuvenation</span>
              <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop" alt="Abhyanga" className="service-img" />
            </div>
            <div className="service-content">
              <h3 className="service-title">Abhyanga</h3>
              <p className="service-desc">A warm herbal oil massage customized to your dosha that nourishes the skin, promotes lymphatic drainage, and relieves tension.</p>
              <a href="#" className="service-link">Learn More <ArrowRight size={16} /></a>
            </div>
          </div>
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <button className="btn btn-outline">View All Treatments</button>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
