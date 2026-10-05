import { FileText, Calendar, Heart, Stethoscope, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './VisiteTerapie.css';
import img1 from '../assets/IMG_0841-600x387.jpg';
import img2 from '../assets/013626bbba1bc95188418e6300655ad6f2f08621ae-e1540982037218-600x387.jpg';

const VisiteTerapie = () => {
  return (
    <div className="visite-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="visite-hero">
        <div className="visite-hero-content">
          <h1 className="visite-title">Visite Ayurveda e Terapie</h1>
          <p className="visite-subtitle">Ritrova il tuo equilibrio naturale attraverso l'antica saggezza dell'Ayurveda.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="visite-section">
        <div className="visite-container">
          
          <div className="visite-intro">
            <h2 className="section-heading">Il tuo percorso di Benessere</h2>
            <p className="intro-text">
              Presso il nostro centro, offriamo <strong>Visite Ayurveda e Terapie personalizzate</strong> per aiutarti a 
              comprendere la tua costituzione unica (Prakriti) e ripristinare l'armonia tra corpo, mente e spirito.
            </p>
          </div>

          <div className="content-grid" id="consulti">
            <div className="content-image-wrapper">
              <Link to="/consulti-sadbhawna">
                <img src={img1} alt="Consulto Ayurveda" className="content-image" style={{ cursor: 'pointer' }} />
              </Link>
              <div className="image-decoration"></div>
            </div>
            
            <div className="content-text">
              <h3>Consulti con la Dr.ssa Sadbhawna</h3>
              <p>
                Scopri lo stato della tua salute attraverso la tradizionale tecnica del <strong>Nadi Pariksha</strong> (diagnosi del polso). 
                La Dr.ssa Sadbhawna ti guiderà in un'attenta analisi della tua costituzione e degli eventuali squilibri (Vikriti).
              </p>
              <ul className="benefits-list">
                <li><Stethoscope className="check-icon" /> Valutazione completa dei Dosha</li>
                <li><Heart className="check-icon" /> Consigli dietetici personalizzati</li>
                <li><Sparkles className="check-icon" /> Suggerimenti sullo stile di vita (Dinacharya)</li>
                <li><FileText className="check-icon" /> Prescrizione di rimedi erboristici naturali</li>
              </ul>
            </div>
          </div>

          <div className="content-grid reverse-grid" id="trattamenti">
            <div className="content-text">
              <h3>Trattamenti Ayurveda</h3>
              <p>
                I nostri trattamenti sono disegnati su misura per le tue esigenze specifiche. Utilizziamo solo oli erborizzati 
                di altissima qualità (Tailam) preparati secondo antiche ricette, per purificare e nutrire i tessuti in profondità.
              </p>
              
              <div className="visite-features">
                <div className="feature-item">
                  <Heart className="feature-icon" />
                  <span>Abhyanga (Massaggio completo)</span>
                </div>
                <div className="feature-item">
                  <Sparkles className="feature-icon" />
                  <span>Shirodhara e Shirovasti</span>
                </div>
                <div className="feature-item">
                  <Calendar className="feature-icon" />
                  <span>Programmi detox personalizzati</span>
                </div>
              </div>
            </div>
            
            <div className="content-image-wrapper">
              <Link to="/trattamenti-ayurveda">
                <img src={img2} alt="Trattamenti Ayurveda" className="content-image" style={{ cursor: 'pointer' }} />
              </Link>
              <div className="image-decoration-alt"></div>
            </div>
          </div>

          <div className="visite-action-card">
            <h2>Prenota la tua Visita</h2>
            <p>
              Inizia il tuo viaggio verso il benessere ottimale. Contattaci per prenotare un consulto o 
              per richiedere maggiori informazioni sui nostri trattamenti.
            </p>
            
            <div className="action-buttons">
              <Link to="/contact" className="btn btn-primary action-btn">
                <Calendar size={20} className="btn-icon" />
                Prenota Ora
              </Link>
            </div>
            
            <p className="namaste-text">Namastè 🙏</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default VisiteTerapie;
