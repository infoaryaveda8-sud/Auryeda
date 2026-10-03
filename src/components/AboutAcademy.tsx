import React from 'react';
import aboutImg from '../assets/Unknown.jpeg';

const AboutAcademy: React.FC = () => {
  return (
    <section className="about-section section-padding" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container about-grid">
        <div className="about-image-wrapper">
          <img 
            src={aboutImg} 
            alt="Accademia Aryaveda" 
            className="about-image" 
          />
        </div>
        <div className="about-content">
          <span className="section-subtitle">Benvenuti in Arya</span>
          <h2 className="section-title">Accademia Aryaveda</h2>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Obiettivi di Arya, istituto di formazione in medicina e massaggio ayurveda Milano
          </h3>
          
          <p>
            ARYAVEDA A.C, istituto per la ricerca e lo studio della Medicina Ayurveda, del massaggio tradizionale e dei trattamenti dell'antica tradizione orientale in Milano, si occupa di divulgare l'antica scienza e dottrina medica alternativa dell'Ayurveda.
          </p>
          <p className="text-light">
            E le discipline olistiche orientali, correlate e non, attraverso seminari, conferenze e corsi di formazione che consentono all'essere umano di integrare corpo-mente-spirito in modo armonico, migliorando la qualità della vita.
          </p>
          
          <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Scopri di Più</button>
        </div>
      </div>
    </section>
  );
};

export default AboutAcademy;
