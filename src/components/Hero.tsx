import React from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/ayurveda-hero-bg.jpg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="static-hero-section">
      {/* Single High Quality Static Ayurvedic Image (No Carousel, No Slider) */}
      <img 
        src={heroBg} 
        alt="Ayurveda Benessere Olistico" 
        className="static-hero-bg" 
      />
      <div className="static-hero-overlay"></div>

      <div className="container static-hero-container">
        <div className="static-hero-content animate-fade-in-up">
          <span className="static-hero-subtitle">Acharyaji</span>
          <h1 className="static-hero-title">Shree Arya Bhushan</h1>
          <p className="static-hero-desc">
            Guidandoti verso il benessere olistico attraverso l'antica saggezza dell'Ayurveda.
          </p>
          <div className="static-hero-buttons">
            <Link to="/chi-siamo" className="btn hero-btn-mentor">
              Nostro Mentore Acharyaji
            </Link>
            <Link to="/consulti-sadbhawna" className="btn hero-btn-consult">
              Prenota Consulto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
