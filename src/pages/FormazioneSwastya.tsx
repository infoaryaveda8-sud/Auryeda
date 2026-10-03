import { Sparkles, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FormazioneSwastya.css';
import logoAima from '../assets/logo-aima-finale-scaled.jpg';
import logoAsi from '../assets/logo_ASI_settore-300x300.png.webp';

const FormazioneSwastya = () => {
  return (
    <div className="swastya-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="swastya-hero">
        <div className="swastya-hero-content">
          <h1 className="swastya-title">Formazione Swastya & Saundarya</h1>
          <p className="swastya-subtitle">L'arte della Salute e della Bellezza Ayurvedica (WIP)</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="swastya-section">
        <div className="swastya-container">
          
          <div className="swastya-intro">
            <h2>Cos'è Swastya & Saundarya?</h2>
            <p>
              In Ayurveda, <strong>Swastya</strong> significa essere stabiliti nel proprio sé, rappresentando uno stato di salute e benessere perfetto. <strong>Saundarya</strong> è l'espressione esteriore di questa armonia interiore, ovvero la vera Bellezza.
            </p>
            <p>
              Questo percorso di formazione, <em>attualmente in fase di allestimento</em>, è dedicato all'estetica olistica e al benessere profondo. Imparerete antichi rituali di bellezza, l'uso di erbe specifiche, oli essenziali e trattamenti mirati per risvegliare la naturale luminosità del corpo e della mente.
            </p>
          </div>

          <div className="swastya-features">
            <div className="swastya-feature-card">
              <Heart className="feature-icon" size={40} />
              <h3>Benessere Interiore</h3>
              <p>Pratiche per riequilibrare i Dosha e promuovere una salute duratura (Swastya).</p>
            </div>
            <div className="swastya-feature-card">
              <Sparkles className="feature-icon" size={40} />
              <h3>Estetica Olistica</h3>
              <p>Trattamenti naturali di bellezza (Saundarya) per viso e corpo.</p>
            </div>
            <div className="swastya-feature-card">
              <Leaf className="feature-icon" size={40} />
              <h3>Rimedi Naturali</h3>
              <p>Utilizzo di erbe, polveri e oli medicati secondo la tradizione indiana.</p>
            </div>
          </div>

          <div className="swastya-logos-section">
            <h3>I Nostri Riconoscimenti e Certificazioni</h3>
            <p>Il nostro percorso di formazione è supportato e riconosciuto dai migliori enti del settore olistico.</p>
            <div className="swastya-logos-grid">
              <img src={logoAima} alt="Logo AIMA" className="swastya-logo-img" />
              <img src={logoAsi} alt="Logo ASI Settore" className="swastya-logo-img" />
            </div>
          </div>

          <div className="swastya-cta">
            <p>La pagina completa con il programma dettagliato sarà disponibile a breve.</p>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Richiedi Informazioni in Anteprima
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default FormazioneSwastya;
