import { useEffect } from 'react';
import { Award, Users, BookOpen, Heart, Star, Globe } from 'lucide-react';
import './ChiSiamo.css';

import imgConsultation from '../assets/1231550_10203115161940720_8855698299589123897_n-300x225.jpg';
import imgMichelangelo from '../assets/image-27-01-22-18-28-e1645054300407.jpg';
import imgAcademy1 from '../assets/IMG_1113-300x225.jpg';
import imgAcademy2 from '../assets/IMG_1114-300x225.jpg';
import imgKapilSadbhawna from '../assets/IMG_2365.jpg';
import imgEvent from '../assets/IMG_8363.jpg';
import imgSadbhawna from '../assets/minu.png';
import imgKapil from '../assets/WhatsApp-Image-2026-07-12-at-17.54.31.jpeg';
import imgHaridwar from '../assets/WhatsApp-Image-2026-07-12-at-21.16.06.jpeg';
import imgMeeting from '../assets/WhatsApp-Image-2026-07-27-at-20.35.28-1.jpeg';

const values = [
  { icon: <Award size={28} />, title: 'Eccellenza Formativa', desc: 'Diplomi riconosciuti a livello nazionale, con percorsi certificati da istituzioni ayurvediche indiane.' },
  { icon: <Users size={28} />, title: 'Insegnanti Qualificati', desc: "Medici esperti e maestri autentici provenienti direttamente dall'India tradizionale." },
  { icon: <BookOpen size={28} />, title: 'Sapere Millenario', desc: 'Trasmissione fedele della scienza vedica, nel rispetto dei testi originali e delle tradizioni antiche.' },
  { icon: <Heart size={28} />, title: 'Approccio Olistico', desc: "Mente, corpo e spirito come un unico sistema: la via dell'Ayurveda verso il benessere completo." },
  { icon: <Star size={28} />, title: 'Esperienza Autentica', desc: 'Viaggi in India, visite ai luoghi sacri, e immersione diretta nella cultura vedica.' },
  { icon: <Globe size={28} />, title: 'Comunita Internazionale', desc: "Una rete di studenti e praticanti in tutta Italia e oltre, uniti dalla passione per l'Ayurveda." },
];

const teachers = [
  {
    img: imgMichelangelo,
    name: 'Michelangelo Vicenti',
    role: 'Istruttore Fondatore',
    bio: "Operatore Ayurveda con formazione diretta in India. Da oltre 15 anni diffonde la conoscenza autentica del massaggio Ayurveda e delle pratiche vediche in Italia.",
    tag: 'Fondatore & Istruttore',
  },
  {
    img: imgSadbhawna,
    name: 'Dott.ssa Sadbhawna Bhardwaj',
    role: 'Medico Ayurveda - BAMS',
    bio: 'Laureata in Ayurvedic Medicine and Surgery (BAMS), specializzata nella diagnostica del Nadi Pariksha e nei trattamenti ayurvedici tradizionali. Responsabile delle visite mediche e dei programmi terapeutici.',
    tag: 'Medico Ayurveda',
  },
  {
    img: imgKapil,
    name: 'Kapil Bhardwaj',
    role: 'Osteopata & Istruttore Ayurveda',
    bio: "Osteopata diplomato e profondo conoscitore della medicina tradizionale indiana. Conduce workshops e seminari integrando l'osteopatia con le pratiche ayurvediche.",
    tag: 'Osteopata & Istruttore',
  },
];

const historyGallery = [
  { img: imgKapilSadbhawna, caption: 'Dott.ssa Sadbhawna e Kapil Bhardwaj' },
  { img: imgAcademy1, caption: 'Nella nostra tradizione' },
  { img: imgAcademy2, caption: 'Dr. Arun Bhardwaj e Famiglia' },
  { img: imgMeeting, caption: 'Incontri con i Maestri' },
  { img: imgConsultation, caption: 'Consulenza Nadi Pariksha' },
  { img: imgEvent, caption: 'Eventi Culturali Ayurveda' },
  { img: imgHaridwar, caption: 'Pellegrinaggio ad Haridwar' },
];

const ChiSiamo = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="chi-siamo-page">

      <section className="cs-hero">
        <div className="cs-hero-overlay" />
        <div className="cs-hero-content">
          <span className="cs-hero-eyebrow">La nostra identita</span>
          <h1 className="cs-hero-title">Chi Siamo</h1>
          <p className="cs-hero-sub">Tradizione autentica, formazione eccellente,<br />benessere profondo.</p>
          <div className="cs-hero-ornament"><span>*</span><span>*</span><span>*</span></div>
        </div>
        <div className="cs-hero-scroll-indicator">
          <div className="cs-scroll-mouse"><div className="cs-scroll-dot" /></div>
        </div>
      </section>

      <section className="cs-mission">
        <div className="container">
          <div className="cs-mission-grid">
            <div className="cs-mission-text reveal">
              <span className="cs-label">La nostra Missione</span>
              <h2 className="cs-h2">Obiettivi e Scopi di <span className="cs-gold">AIMA</span>,<br /><em>scuola massaggio ayurveda milano</em></h2>
              <div className="cs-divider" />
              <p>Fondata con la missione di diffondere la millenaria saggezza dell Ayurveda in Italia, l Associazione Culturale <strong>Aryaveda A.C.</strong> e oggi un punto di riferimento per chi cerca una formazione autentica e di alta qualita nel campo delle discipline olistiche.</p>
              <p>Il nostro approccio unisce l antica conoscenza vedica con le esigenze della vita moderna, offrendo percorsi che non sono solo professionalizzanti, ma anche veri e propri viaggi di trasformazione personale.</p>
              <p><strong>AIMA</strong>, scuola di massaggio ayurvedico con sede a Milano, si distingue per la qualita degli insegnanti e per la profondita dei programmi didattici che coprono dall Abhyanga classico alle tecniche diagnostiche del Nadi Pariksha.</p>
              <a href="/corsi" className="cs-cta-link">Scopri i nostri corsi <span className="cs-arrow">to</span></a>
            </div>
            <div className="cs-mission-visual reveal reveal-right">
              <div className="cs-img-stack">
                <img src={imgKapilSadbhawna} alt="I fondatori" className="cs-img-main" />
                <div className="cs-img-badge">
                  <div className="cs-badge-icon">Om</div>
                  <div className="cs-badge-text"><strong>Dal 2008</strong><span>Milano, Italia</span></div>
                </div>
                <img src={imgConsultation} alt="Consulenza" className="cs-img-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-values">
        <div className="container">
          <div className="cs-section-hdr reveal">
            <span className="cs-label light">I nostri pilastri</span>
            <h2 className="cs-h2 white">I Nostri Valori</h2>
            <div className="cs-divider center gold" />
          </div>
          <div className="cs-values-grid">
            {values.map((v, i) => (
              <div className="cs-value-card reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="cs-value-icon-wrap">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-teachers">
        <div className="container">
          <div className="cs-section-hdr reveal">
            <span className="cs-label">Il nostro team</span>
            <h2 className="cs-h2">I Nostri Insegnanti</h2>
            <div className="cs-divider center" />
            <p className="cs-hdr-sub">Esperti autentici, formati in India, con anni di esperienza sul campo.</p>
          </div>
          <div className="cs-teachers-grid">
            {teachers.map((t, i) => (
              <div className="cs-teacher-card reveal" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="cs-teacher-img-wrap">
                  <img src={t.img} alt={t.name} className="cs-teacher-img" />
                  <div className="cs-teacher-hover-overlay">
                    <span className="cs-teacher-tag-badge">{t.tag}</span>
                  </div>
                </div>
                <div className="cs-teacher-body">
                  <h3 className="cs-teacher-name">{t.name}</h3>
                  <span className="cs-teacher-role">{t.role}</span>
                  <div className="cs-teacher-divider" />
                  <p className="cs-teacher-bio">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-storia">
        <div className="container">
          <div className="cs-section-hdr reveal">
            <span className="cs-label">Le nostre origini</span>
            <h2 className="cs-h2">Nella Nostra Storia</h2>
            <div className="cs-divider center" />
            <p className="cs-hdr-sub">Un percorso di passione, dedizione e autenticita attraverso gli anni.</p>
          </div>
          <div className="cs-gallery reveal">
            {historyGallery.map((item, i) => (
              <div className="cs-gallery-item" key={i}>
                <img src={item.img} alt={item.caption} />
                <div className="cs-gallery-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-banner">
        <div className="cs-banner-inner container reveal">
          <span className="cs-label light">Inizia il tuo viaggio</span>
          <h2>Unisciti alla Famiglia Aryaveda</h2>
          <p>Scopri i nostri corsi, prenota una consulenza Ayurveda o partecipa ai nostri eventi. Il benessere autentico inizia qui.</p>
          <div className="cs-banner-btns">
            <a href="/corsi" className="btn btn-primary">Scopri i Corsi</a>
            <a href="/contatti" className="cs-btn-ghost">Contattaci</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSiamo;
