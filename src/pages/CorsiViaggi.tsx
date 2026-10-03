import { useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import './CorsiViaggi.css';

// Import all required assets
import imgGroup1 from '../assets/WhatsApp-Image-2023-08-30-at-13.02.51-600x387.jpeg';
import imgGoa from '../assets/goa.jpeg';
import imgMadurai from '../assets/madurai-temple-complex-600x387.jpeg';
import imgTourIndia from '../assets/Tour-india-2026-agosto.jpeg';
import imgHeadMassage from '../assets/1300094455_137677269_3-CORSO-RESIDENZIALE-DI-MASSAGGIO-AYURVEDICO-Altri-corsi-600x387.jpg';
import imgBamboo from '../assets/Bamboo-massage-600x387.jpeg';
import imgYoga from '../assets/mariele-carnevale-yoga-600x387.jpeg';
import imgMichelangelo from '../assets/image-27-01-22-18-28-e1645054300407.jpg';
import imgPanchakarma from '../assets/D94AD18B-8C1A-4947-B001-406B9FD9C691-600x387.jpg';
import imgCertificates from '../assets/IMG_1911.jpg';

const eventiData = [
  {
    id: 1,
    title: 'Percorsi Nazionali Ayurveda e Massaggio 2026/27 a moduli',
    category: 'Corsi',
    location: 'Milano, Italia',
    img: imgGroup1,
    date: 'Inizio Autunno 2026',
    desc: 'Formazione completa strutturata a moduli per apprendere le tecniche tradizionali ayurvediche.'
  },
  {
    id: 2,
    title: 'Esperienza Ayurveda a GOA con yoga e trattamenti',
    category: 'Viaggi',
    location: 'Goa, India',
    img: imgGoa,
    date: '29 Dic - 07 Gen 2027',
    desc: 'Un viaggio trasformativo per iniziare il nuovo anno all\'insegna del benessere totale.'
  },
  {
    id: 3,
    title: 'Tour Sud India: Tamil Nadu e Kerala',
    category: 'Viaggi',
    location: 'Sud India',
    img: imgMadurai,
    date: '08 - 19 Gennaio 2027',
    desc: 'Esplora i templi millenari e le terre d\'origine dell\'Ayurveda in un tour guidato esclusivo.'
  },
  {
    id: 4,
    title: 'Ritiro in Ashram: Haridwar, Delhi & Rishikesh',
    category: 'Viaggi',
    location: 'Nord India',
    img: imgTourIndia,
    date: '14 - 27 Agosto 2026',
    desc: 'Un percorso spirituale profondo nei luoghi sacri dell\'India settentrionale.'
  },
  {
    id: 5,
    title: 'Seminario Tecnica Massaggio Ayurvedico (Metodo Surya)',
    category: 'Corsi',
    location: 'Milano, Italia',
    img: imgHeadMassage,
    date: '07-09 Agosto 2026',
    desc: 'Intensivo pratico per operatori: approfondimento delle tecniche avanzate.'
  },
  {
    id: 6,
    title: 'Corso Massaggio con Canne di Bambù (Bamboo Massage)',
    category: 'Corsi',
    location: 'Milano, Italia',
    img: imgBamboo,
    date: '08-09 Agosto 2026',
    desc: 'Apprendi l\'arte del massaggio decontratturante con l\'uso delle canne di bambù.'
  },
  {
    id: 7,
    title: 'Hatha Yoga & Nidra con Mariele Carnevale',
    category: 'Yoga',
    location: 'Centro AIMA',
    img: imgYoga,
    date: 'Ogni Mercoledì',
    desc: 'Pratica settimanale per riequilibrare corpo e mente attraverso posture e rilassamento profondo.'
  },
  {
    id: 8,
    title: 'Corsi di Qi-Gong 2026/2027',
    category: 'Corsi',
    location: 'Centro AIMA',
    img: imgMichelangelo,
    date: 'Stagione 2026/27',
    desc: 'Disciplina e salute in perfetta sintonia. Pratica zen marziale per l\'energia vitale.'
  },
  {
    id: 9,
    title: 'Ritiro Panchakarma 2026: Pulizia e Riequilibrio',
    category: 'Ritiri',
    location: 'Italia / India',
    img: imgPanchakarma,
    date: 'Programmazione 2026',
    desc: 'Percorso intensivo di depurazione fisica e mentale secondo i principi antichi.'
  },
  {
    id: 10,
    title: 'Ayurveda Traditional Medicine & Massage',
    category: 'Corsi',
    location: 'Milano, Italia',
    img: imgCertificates,
    date: 'Iscrizioni Aperte',
    desc: 'Il nostro corso di punta per diventare operatori ayurvedici certificati.'
  }
];

const categories = ['Tutti', 'Corsi', 'Viaggi', 'Ritiri', 'Yoga'];

const CorsiViaggi = () => {
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [filteredEventi, setFilteredEventi] = useState(eventiData);

  useEffect(() => {
    if (activeCategory === 'Tutti') {
      setFilteredEventi(eventiData);
    } else {
      setFilteredEventi(eventiData.filter(e => e.category === activeCategory));
    }
  }, [activeCategory]);

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

    document.querySelectorAll('.cv-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredEventi]);

  return (
    <div className="corsi-viaggi-page">
      {/* Page Header (No big banner, just elegant title area) */}
      <section className="cv-header-section">
        <div className="container cv-header-content">
          <span className="cv-eyebrow cv-reveal">Formazione & Esperienze</span>
          <h1 className="cv-title cv-reveal">Corsi & Viaggi in India 2026/2027</h1>
          <p className="cv-subtitle cv-reveal">
            Scopri i nostri programmi formativi, i ritiri spirituali e i viaggi trasformativi nella terra madre dell'Ayurveda.
          </p>
          <div className="cv-divider cv-reveal" />
        </div>
      </section>

      {/* Filter Section */}
      <section className="cv-filters-section container">
        <div className="cv-filters-wrap cv-reveal">
          {categories.map((cat) => (
            <button 
              key={cat}
              className={`cv-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="cv-grid-section container">
        <div className="cv-grid">
          {filteredEventi.map((evento, index) => (
            <div 
              className="cv-card cv-reveal" 
              key={evento.id}
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="cv-card-img-wrap">
                <img src={evento.img} alt={evento.title} className="cv-card-img" />
                <div className="cv-card-badge">{evento.category}</div>
              </div>
              <div className="cv-card-body">
                <div className="cv-card-meta">
                  <span className="cv-meta-item">
                    <Calendar size={14} />
                    {evento.date}
                  </span>
                  <span className="cv-meta-item">
                    <MapPin size={14} />
                    {evento.location}
                  </span>
                </div>
                <h3 className="cv-card-title">{evento.title}</h3>
                <p className="cv-card-desc">{evento.desc}</p>
                <a href="#dettagli" className="cv-card-link">
                  Scopri di più <ArrowRight size={16} className="cv-arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {filteredEventi.length === 0 && (
          <div className="cv-empty-state">
            Nessun evento trovato in questa categoria.
          </div>
        )}
      </section>
    </div>
  );
};

export default CorsiViaggi;
