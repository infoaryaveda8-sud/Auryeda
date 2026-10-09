import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/Unknown.jpeg';

const AboutAcademy: React.FC = () => {
  return (
    <section className="about-section section-padding" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container about-grid">
        <div className="about-image-wrapper">
          <img 
            src={aboutImg} 
            alt="Accademia Arya Veda" 
            className="about-image" 
          />
        </div>
        <div className="about-content">
          <span className="section-subtitle notranslate" translate="no">Benvenuti in Arya Veda</span>
          <h2 className="section-title notranslate" translate="no">Accademia Arya Veda</h2>
          <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 500 }}>
            Obiettivi di <span translate="no" className="notranslate">Arya Veda</span>, istituto di formazione in medicina e massaggio ayurveda Milano
          </h3>
          
          <p>
            ARYAVEDA A.C, istituto per la ricerca e lo studio della Medicina Ayurveda, del massaggio tradizionale e dei trattamenti dell'antica tradizione orientale in Milano, si occupa di divulgare l'antica scienza e dottrina medica alternativa dell'Ayurveda.
          </p>
          <p className="text-light">
            E le discipline olistiche orientali, correlate e non, attraverso seminari, conferenze e corsi di formazione che consentono all'essere umano di integrare corpo-mente-spirito in modo armonico, migliorando la qualità della vita.
          </p>
          
          <Link to="/accademia" className="btn btn-primary notranslate" translate="no" style={{ marginTop: '1rem', textDecoration: 'none', display: 'inline-block' }}>Scopri di più</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutAcademy;
