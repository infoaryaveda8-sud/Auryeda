import { useEffect } from 'react';
import { MapPin, ArrowRight, Award } from 'lucide-react';
import './AccademiaAyurveda.css';

// Import images
import imgMilano from '../assets/europe-2436458_640-600x387.jpg';
import imgReggioEmilia from '../assets/Depositphotos_177341686_ds-600x387.jpg';
import imgRoma from '../assets/arco-della-pace-g56bfaaa6d_1920-600x387.jpg';
import imgRimini from '../assets/rimini-3402314_640-600x387.jpg';
import imgLogoArya from '../assets/logo-arya-bianco.jpg.jpeg';

const sedi = [
  { id: 'milano', name: 'Milano', img: imgMilano, desc: 'La sede principale nel cuore della Lombardia.' },
  { id: 'reggio', name: 'Reggio Emilia', img: imgReggioEmilia, desc: 'Il nostro polo formativo in Emilia-Romagna.' },
  { id: 'roma', name: 'Roma', img: imgRoma, desc: 'L\'Ayurveda nella città eterna, capitale d\'Italia.' },
  { id: 'rimini', name: 'Rimini', img: imgRimini, desc: 'Benessere e formazione sulla costa adriatica.' }
];

const AccademiaAyurveda = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.acc-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="accademia-page">
      {/* ─── HEADER ─── */}
      <section className="acc-header">
        <div className="acc-header-overlay"></div>
        <div className="container acc-header-content">
          <span className="acc-eyebrow acc-reveal">Il tuo percorso formativo</span>
          <h1 className="acc-title acc-reveal">Accademia Ayurveda</h1>
          <p className="acc-subtitle acc-reveal">
            Scopri le nostre sedi in Italia e i percorsi di formazione privata esclusivi. L'autentica saggezza vedica vicino a te.
          </p>
        </div>
      </section>

      {/* ─── SEDI GRID ─── */}
      <section className="acc-sedi-section container">
        <div className="acc-section-title acc-reveal">
          <h2>Le Nostre Sedi</h2>
          <div className="acc-divider"></div>
        </div>

        <div className="acc-grid">
          {sedi.map((sede, i) => (
            <div 
              className="acc-card acc-reveal" 
              key={sede.id}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="acc-card-bg" style={{ backgroundImage: `url(${sede.img})` }}></div>
              <div className="acc-card-overlay"></div>
              <div className="acc-card-content">
                <div className="acc-card-icon">
                  <MapPin size={24} />
                </div>
                <h3>{sede.name}</h3>
                <p>{sede.desc}</p>
                <button className="acc-card-btn">
                  Scopri di più <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CORSI PRO ─── */}
      <section className="acc-pro-section container acc-reveal">
        <div className="acc-pro-card">
          <div className="acc-pro-img">
            <img src={imgLogoArya} alt="Aryaveda Logo" />
          </div>
          <div className="acc-pro-content">
            <div className="acc-pro-badge">
              <Award size={16} /> Alta Formazione
            </div>
            <h2>CORSI - PRO</h2>
            <h3>Formazione Privata Esclusiva</h3>
            <p>
              Un percorso su misura per professionisti e appassionati che desiderano un approfondimento personalizzato (one-to-one) o in piccoli gruppi. I nostri Maestri ti seguiranno passo dopo passo nel tuo viaggio verso l'eccellenza ayurvedica.
            </p>
            <button className="btn btn-primary acc-pro-btn">Richiedi Informazioni</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccademiaAyurveda;
