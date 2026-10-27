import React from 'react';
import vaidyaImg from '../assets/images-14.jpeg';

const ServicesCards: React.FC = () => {
  return (
    <section className="section-padding about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">I Nostri Corsi</span>
          <h2 className="section-title">Formazione e Consulti</h2>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-light)', maxWidth: '600px', margin: '1.5rem auto' }}>
            Un'opportunità unica per approfondire diverse tematiche, affrontate dal punto di vista ayurvedico.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-img-wrapper">
              <span className="service-badge">Massaggio</span>
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" 
                alt="Massaggio Ayurvedico" 
                className="service-img" 
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">Corso Intensivo di Massaggio</h3>
              <p className="service-desc">
                Un corso dinamico e altamente pratico, studiato per padroneggiare le tecniche fondamentali dell'Ayurveda in breve tempo senza rinunciare alla qualità.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-img-wrapper">
              <span className="service-badge">Accademia</span>
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
                alt="Accademia Ayurveda" 
                className="service-img" 
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">Accademia Ayurveda</h3>
              <p className="service-desc">
                Percorso completo di Ayurveda, teoria, filosofia e medicina, basato su due anni con rilascio di attestazione professionale. Presso sedi Arya Veda.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-img-wrapper">
              <span className="service-badge">Salute & Benessere</span>
              <img 
                src={vaidyaImg} 
                alt="Consulti Vaidya ed Erboristeria Ayurvedica" 
                className="service-img" 
                style={{ objectPosition: 'center 40%' }}
              />
            </div>
            <div className="service-content">
              <h3 className="service-title">Consulti con Vaidya</h3>
              <p className="service-desc">
                Trattamenti benessere con operatori certificati e consulti personalizzati dal Dr. Bhardwaj, Vaidya della tradizione Ayurveda indiana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
