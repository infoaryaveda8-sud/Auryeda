import { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Award, CheckCircle2, ChevronDown, BookOpen, HeartHandshake } from 'lucide-react';
import './Milano.css';
import schemaImg from '../assets/SCHEMA-TRIENNALE-AYURVEDA.jpg';

const calendarioData = [
  {
    title: "1° ANNO (2026)",
    items: [
      { date: "17-18 GEN 2026", desc: "Introduzione teoria Ayurveda. Sanscrito base per operatori. Snehana -1" },
      { date: "21-22 FEB 2026", desc: "Dosha e SubDosha Snehana-2" },
      { date: "14-15 MAR 2026", desc: "Agni, Ama e fisiologia sistema digerente, Snehana -3" },
      { date: "11-12 APR 2026", desc: "Prakriti test snehana Completo" },
      { date: "16-17 MAG 2026", desc: "I massaggi costituzionali x vata, pitta e kapha parte 1" },
      { date: "06-07 GIU 2026", desc: "I massaggi costituzionali x vata, pitta e kapha parte 2" },
      { date: "04-05 LUG 2026", desc: "Din & Ritucharia, auto cura con atmabhyangam, Pranayama, Mukh Yoga, esercizi posturali." },
      { date: "26-27 SET 2026", desc: "Punti Marma-1 Studio, localizzazione, meditazione" },
      { date: "24-25 OTT 2026", desc: "RIFLESSOLOGIA 1 plantare ayurvedica olistica." },
      { date: "28-29 NOV 2026", desc: "MURI 1, manipolazioni articolare e sistema muscolo -scheletrico e principali malattie." }
    ]
  },
  {
    title: "2° ANNO (2027)",
    items: [
      { date: "16-17 GEN 2027", desc: "PINDASWEDA & varianti + massaggio Pranico" },
      { date: "13-14 FEB 2027", desc: "KALAHARI massage con i piedi. + sequenze manuali Nala e Nadi riscaldante post e decontratturante." },
      { date: "13-14 MAR 2027", desc: "Ahara - Nutrizione ayurvedica base e dietetica. Ricette e programmi." },
      { date: "17-18 APR 2027", desc: "Anatomia del sistema linfatico Neerabhyangam, linfodrenaggio ayurvedico." },
      { date: "15-16 MAG 2027", desc: "Tutti tipi di Vasti e entra, cataplasmi e impacchi." },
      { date: "05-06 GIU 2027", desc: "AromaKhusbu Malish rituale con oli essenziali e studio degli oli essenziali." },
      { date: "03-04 LUG 2027", desc: "Dravyaguna Vigyana: farmacologia Ayurveda, studio delle preparazioni e rasa shastra." },
      { date: "18-19 SET 2027", desc: "Studio dei punti vitali marma 2, tecnica marmabhyangam" },
      { date: "16-17 OTT 2027", desc: "Riflessologia plantare ayurvedica olistica 2" },
      { date: "20-21 NOV 2027", desc: "Muri Abhyangam -2, manipolazioni articolare e sistema muscolo-scheletrico." }
    ]
  },
  {
    title: "3° ANNO (2028)",
    items: [
      { date: "15-16 GEN 2028", desc: "Dhara, shirodhara, nasya e tutte le varianti. Sarvang abhyangam delle 7 posizioni" },
      { date: "05-06 FEB 2028", desc: "Pratyasth-miofasciale Ayurvedic olistico metodo AIMA, con bendaggi riducenti." },
      { date: "04-05 MAR 2028", desc: "Garbhyangam & Balaabhyangam massaggio neonata e massaggio donna in dolce attesa." },
      { date: "01-02 APR 2028", desc: "Manas Abhyangam Anatomia del sistema nervoso. Ayurveda e mente psicologia ayurvedica." },
      { date: "06-07 MAG 2028", desc: "Udgharshana, Udvartanam, Ubtan trattamenti con polveri erbali, peeling." },
      { date: "10-11 GIU 2028", desc: "Chakra, Aura e Cristallo terapia, Tricologia ayurvedica olistica (Keshyam)." },
      { date: "01-02 LUG 2028", desc: "Nidana auto diagnosi del polso, rogha e rogi pariksha." },
      { date: "16-17 SET 2028", desc: "Lavorare con Punti Marma-3 Rakta Prakshalan." },
      { date: "07-08 OTT 2028", desc: "Riflessologia plantare Ayurvedico olistica-3" },
      { date: "04-05 NOV 2028", desc: "Bans malish: tecnica ayurveda con kit di bamboo & rituale Rani Facial." },
      { date: "ESAME 2028", desc: "DA DEFINIRE" }
    ]
  }
];

const calendarioTejas = [
  {
    title: "CALENDARIO SEZIONE 'TEJAS' (IL FUOCO) - PERCORSO PARTITO",
    items: [
      { date: "1° ANNO", desc: "15-16 MAR 2025: teoria base e massaggio Snehana gambe e piedi" },
      { date: "", desc: "12-13 APR 2025: Teoria di base 2 e massaggio Snehana supino completo" },
      { date: "", desc: "10-11 MAG 2025: Agni, fisiologia sistema digerente, deontologia, massaggio Snehana prono" },
      { date: "", desc: "21-22 GIU 2025: mandala curativo,la prakriti, test costituzione, tecniche viso e testa" },
      { date: "", desc: "27-28 SETT 2025: i massaggi costituzionali x vata, pitta e kapha parte 1" },
      { date: "", desc: "25-26 OTT 2025: i massaggi costituzionali x vata, pitta e kapha parte 2" },
      { date: "", desc: "22-23 NOV 2025: Din & Ritucharia, auto cura: atmabhyangam, Pranayama, Mukh Yoga" },
      { date: "", desc: "13-14 DIC 2025: MURI 1, manipolazioni articolare e sistema muscolo -scheletrico. Punti Marma-1" },
      { date: "", desc: "10-11 GEN 2026: RIFLESSOLOGIA 1 plantare ayurvedica olistica." },
      { date: "", desc: "07-08 FEB 2026: Punti Marma-1 Studio, localizzazione & meditazione" },
      { date: "2° ANNO", desc: "07-08 MAR 2026: PINDASWEDA & varianti + massaggio Pranico" },
      { date: "", desc: "11-12 APR 2026: KALAHARI massage con i piedi. + sequenze manuali Nala e Nadi" },
      { date: "", desc: "09-10 MAG 2026: Ahara - Nutrizione ayurvedica base e dietetica. Ricette e programmi." },
      { date: "", desc: "13-14 GIU 2026: Anatomia del sistema linfatico Neerabhyangam, linfodrenaggio ayurvedico." },
      { date: "", desc: "19-20 SETT 2026: Tutti tipi di Vasti e entra, cataplasmi e impacchi." },
      { date: "", desc: "17-18 OTT 2026: AromaKhusbu Malish rituale con oli essenziali" },
      { date: "", desc: "14-15 NOV 2026: Dravyaguna Vigyana: farmacologia Ayurveda, rasa shastra." },
      { date: "", desc: "12-13 DIC 2026: studio dei punti vitali marma 2, tecnica marmabhyangam" },
      { date: "", desc: "16-17 GEN 2027: riflessologia plantare ayurvedica olistica 2" },
      { date: "", desc: "13-14 FEB 2027: Muri Abhyangam -2, manipolazioni articolare" },
      { date: "3° ANNO", desc: "6-7 MAR 2027: Dhara, shirodhara, nasya e tutte le varianti. Sarvang abhyangam" },
      { date: "", desc: "3-4 APR 2027: Pratyasth-miofasciale Ayurvedic olistico metodo AIMA" },
      { date: "", desc: "8-9 MAG 2027: Garbhyangam & Balaabhyangam massaggio neonata e donna in dolce attesa" },
      { date: "", desc: "5-6 GIU 2027: Manas Abhyangam Anatomia del sistema nervoso." },
      { date: "", desc: "3-4 LUG 2027: Udgharshana, Udvartanam, Ubtan trattamenti con polveri erbali" },
      { date: "", desc: "18-19 SETT 2027: Chakra, Aura e Cristallo terapia, Tricologia ayurvedica olistica" },
      { date: "", desc: "2-3 OTT 2027: Nidana auto diagnosi del polso" },
      { date: "", desc: "6-7 NOV 2027: Lavorare con Punti Marma-3 Rakta Prakshalan" },
      { date: "", desc: "11-12 DIC 2027: Riflessologia plantare Ayurvedico olistica-3" },
      { date: "", desc: "15-16 GEN 2028: Bans malish & rituale Rani Facial" },
      { date: "DATA ESAME", desc: "MAR 2028" }
    ]
  }
];

const programData = [
  {
    title: 'Primo Livello (Da 1. A 4.)',
    content: [
      'Introduzione all’Ayurveda. Significato di Ayurveda e a chi può essere utile.',
      'Origine, Filosofia, Definizione e Storia. Ayurveda come scienza della vita e sua collocazione.',
      'I testi sacri: Veda, Upanishad e principali Samhita.',
      'Manifestazione della Vita secondo la Filosofia Samkhya. Karma e Samskara.',
      'I 4 importanti scopi dell’Esistenza: Dharma, Artha, Kama, Moksha.',
      'I 5 grandi elementi: PANCH-MAHA-BHUTA.',
      'Anatomia e fisiologia dei dosha. I 3 DOSHA, i 7 tessuti (DHATU), scarti metabolici (MALA).',
      'Introduzione alle manualità: SNEHAN-ABHYANGAM teoria e pratica del sacro massaggio dei vaidya. Arti inferiori.',
      'Teoria dei 3 DOSHA (Vata, Pitta, Kapha) e upa-dosha.',
      'Triguna: Satva, Rajas e Tamas. Energie sottili: Prana, Tejas e Ojas.',
      'Introduzione al Panchkarma. Agni e digestione.',
      'Deontologia, Etica, Regole e contro-indicazioni.',
      'Ama: concetto e ruolo delle tossine.',
      'Prakriti/Vikruti test per riconoscere il proprio Dosha.',
      'Aromaterapia e Ayurveda. Shirobhyangam (massaggio testa e viso).'
    ]
  },
  {
    title: 'Secondo Livello (Da 5. A 8.)',
    content: [
      'DOSHABHYANGAM 1: 3 Tecniche e pratiche dei massaggi corpo adatti alle varie costituzioni.',
      'VAT-ABHYANGAM: Massaggio specifico Vata, lento e profondo.',
      'KAPH-ABHYANGAM: Massaggio specifico Kapha, stimolante per circolazione e forma fisica.',
      'PITT-ABHYANGAM: Massaggio specifico Pitta, rilassante e decontratturante.',
      'Approfondimento per il riconoscimento dei Dosha e oli medicati.',
      'DOSHABHYANGAM 2 (Ripasso e pratica intensiva).',
      'SROTAS: teoria dei canali corporei. Anatomia del sistema linfatico.',
      'NIR-ABHYANGAM: massaggio di drenaggio della linfa.',
      'Introduzione ai trattamenti di PANCHKARMA KERALYANO.',
      'Erbe Ayurvediche, decotti e tisane.',
      'Pratica del trattamento di VASTI localizzati e varianti (Shirovasti, Pichu, Shirolepanam).'
    ]
  },
  {
    title: 'Terzo Livello (Da 9. A 12.)',
    content: [
      'UDGHARSHANA: trattamento con polveri erbali a secco, riduzione del peso corporeo.',
      'UDVARTANA: trattamento di peeling naturale e pulizia corpo.',
      'UBTANA: trattamenti di maschere naturali per viso (segreti cliniche indiane).',
      'MASSAGGIO PRANICO: sequenza tipica del massaggio keralyano.',
      'PINDA SWEDA: tamponamento a caldo secco e oleoso (Patra Potali, Othadam, Navarakizhi).',
      'PRATYASTH: miofasciale olistico metodo aima ayurveda con bendaggi.',
      'AROMATERAPIA & AYURVEDA: IL KHUSHBU MALISH, oli essenziali e massaggio sensoriale.'
    ]
  },
  {
    title: 'Quarto Livello (Da 13. A 16.)',
    content: [
      'MURI 1: Anatomia apparato locomotore, MURI ABHYANGAM (Massaggio Articolare). Malattie osteo-articolari.',
      'SHIRODHARA: flusso d’olio tiepido sulla fronte. Varianti: TAKRA-DHARA, DUGHDA DHARA, KWATHA DHARA.',
      'NASYA: purificazione sistema respiratorio e nervoso.',
      'SARVANG-ABHYANGAM: massaggio totale preparatorio a 2 e 4 mani.',
      'MURI 2: Approfondimento MURI ABHYANGAM. Problemi muscolari classici (contrattura, strappo).',
      'GARBH-ABHYANGAM: massaggio per la donna in dolce attesa.',
      'BAL-ABHYANGAM: tradizionale massaggio infantile ayurvedico.',
      'RANI FACIAL MASSAGE: trattamento completo viso "Regina per un giorno".',
      'BANS MALISH: versione ayurvedica massaggio con bamboo.'
    ]
  },
  {
    title: 'Quinto e Ultimo Livello (Da 17. A 20.)',
    content: [
      'MANAS ABHYANGAM: Ayurveda e la Mente. GUNA: SATTVA, RAJAS, TAMAS. Relazione PRANA, OJAS, TEJAS.',
      'Ayurveda e stress, yoga e meditazione. Trattamento manuale antistress.',
      'MARMA 1: Anatomia sistema nervoso. I punti vitali. Manipolazione, Beej Mantra e MARMA ABHYANGAM.',
      'SHIRODHARA e DHARA-KARMA ripasso e pratica avanzata.',
      'TRICOLOGIA AYURVEDICA OLISTICA: KESHYAM. Cura del capello, alopecia, dermatiti.',
      'SHIROBHYANGAM, SHIROLEPANAM, SHIRODHARA applicati ai capelli.'
    ]
  },
  {
    title: 'Materie del Master del Terzo Anno',
    content: [
      'DINCHARYA E RITUCHARYA: routine quotidiane e stagionali. AHARA (alimentazione).',
      'CHAKRA E CRISTALLOTERAPIA: funzioni psico-fisiche, test deltoideo, radiestesia, cromoterapia.',
      'PRANABHYANGAM: massaggio bioenergetico rivelatore dei blocchi emozionali.',
      'RIFLESSOLOGIA PLANTARE AYURVEDICA 1, 2, 3.',
      'MARMA 2 e MARMA 3: coppettazione ad uso ayurvedico estetico.',
      'MIDHI-ABHYANGAM: KALAHARI MASSAGE (massaggio con i piedi).',
      'NAL-ABHYANGAM e NADI ABHYANGAM: sequenze pre e post sforzo sportivo.',
      'DRAVYAGUNA VIGYAN: erboristeria.',
      'ROGHA, NIDANA E ROGHI PARIKSHA: ricerca causa, comparazione medicina moderna, analisi polso (Nadi Pariksha).'
    ]
  }
];

const Milano = () => {
  const [openYear, setOpenYear] = useState<number | null>(0);

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
    document.querySelectorAll('.mi-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleYear = (index: number) => {
    setOpenYear(openYear === index ? null : index);
  };

  return (
    <div className="milano-page">
      {/* ─── HERO ─── */}
      <section className="mi-hero">
        <div className="mi-hero-overlay"></div>
        <div className="container mi-hero-content">
          <span className="mi-eyebrow mi-reveal">Sede Storica</span>
          <h1 className="mi-title mi-reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Corso Triennale Ayurveda Milano</h1>
          <p className="mi-subtitle mi-reveal" style={{ maxWidth: '800px' }}>
            Percorso Biennale Professionale per Operatore Tecnico del Benessere in Ayurveda + Master del Terzo anno per il diploma nazionale. 600 ore totali in tre anni.
          </p>
          <div className="mi-hero-badges mi-reveal">
            <div className="mi-badge"><MapPin size={18} /> Milano Centro (Via Teocrito 50)</div>
            <div className="mi-badge"><Clock size={18} /> 600 Ore / 30 Weekend</div>
            <div className="mi-badge"><Award size={18} /> Diploma ASI / CONI</div>
          </div>
        </div>
      </section>

      {/* ─── INTRO & SCHEMA ─── */}
      <section className="mi-section container">
        <div className="mi-grid-2">
          <div className="mi-text-block mi-reveal">
            <h2 className="mi-section-title">La Scienza della Vita</h2>
            <div className="mi-divider"></div>
            <p className="mi-paragraph">
              Rilascio di attestazione professionale secondo la legge 4/2013. Percorso Biennale Professionale + Master del Terzo anno per il diploma nazionale da Ente CONI, riconosciuto a livello nazionale ed internazionale, con docenti medici indiani ed italiani.
            </p>
            <p className="mi-paragraph">
              <strong>600 ore totali in tre anni:</strong> 30 weekend totali di formazione didattica teorico-pratica, comprensivi di tirocinio, studio, questionari e supervisione tecnica.
            </p>
            <p className="mi-paragraph">
              <strong>ATTENZIONE!!!</strong> Questo è un percorso di vita e può trasformarsi nella professione che arricchisce la Tua Vita! Un corso per imparare i precetti della medicina ayurvedica indiana e i massaggi della tradizione.
            </p>
            <ul className="mi-checklist">
              <li><CheckCircle2 size={20} className="text-gold" /> Insegnanti medici indiani e italiani</li>
              <li><CheckCircle2 size={20} className="text-gold" /> Test Prakriti, Snehana-Abhyanga, Marma, Panchkarma</li>
              <li><CheckCircle2 size={20} className="text-gold" /> Tirocinio, supervisione tecnica e questionari</li>
            </ul>
          </div>
          <div className="mi-image-block mi-reveal">
            <div className="mi-schema-wrapper">
              <img src={schemaImg} alt="Schema Triennale Ayurveda" className="mi-schema-img" />
              <div className="mi-schema-caption">Quadro riassuntivo del percorso formativo (I, II, III anno)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALENDARI ─── */}
      <section className="mi-section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container mi-reveal">
          <h2 className="mi-section-title text-center">Calendario Date e Appuntamenti</h2>
          <div className="mi-divider center"></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', marginTop: '3rem' }}>
            {calendarioData.map((anno, idx) => (
              <div key={idx} style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>{anno.title}</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {anno.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
                      <strong style={{ color: 'var(--secondary)', minWidth: '130px' }}>{item.date}</strong>
                      <span style={{ color: 'var(--text-color)' }}>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>{calendarioTejas[0].title}</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {calendarioTejas[0].items.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid #f0f0f0', paddingBottom: '1rem' }}>
                  <strong style={{ color: 'var(--secondary)', minWidth: '100px' }}>{item.date}</strong>
                  <span style={{ color: 'var(--text-color)' }}>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── A CHI E RIVOLTO ─── */}
      <section className="mi-section">
        <div className="container mi-reveal text-center">
          <h2 className="mi-section-title">A chi è rivolto?</h2>
          <div className="mi-divider center"></div>
          <p className="mi-paragraph" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            Il corso è strutturato in modo da fornire solide basi propedeutiche e permettere l'utilizzo immediato delle tecniche proposte.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left', marginTop: '3rem' }}>
            <div className="mi-info-card" style={{ padding: '2rem' }}>
              <HeartHandshake size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Sanità e Riabilitazione</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Medici, fisioterapisti, infermieri, psicologi, massoterapisti (MCB) e parasanitari.</p>
            </div>
            <div className="mi-info-card" style={{ padding: '2rem' }}>
              <BookOpen size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Estetica e Naturale</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Erboristi, estetiste, naturopati, spa manager, operatori olistici.</p>
            </div>
            <div className="mi-info-card" style={{ padding: '2rem' }}>
              <Award size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Imprenditori del Benessere</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Chi vuole attivare palestre, spa, centri benessere, agriturismi o studi privati.</p>
            </div>
            <div className="mi-info-card" style={{ padding: '2rem' }}>
              <MapPin size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Crescita Personale</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Coloro che cercano una formazione per la propria crescita nel campo della salute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMMA (ACCORDION) ─── */}
      <section className="mi-program-section">
        <div className="container">
          <h2 className="mi-section-title text-center mi-reveal">Il Programma Dettagliato delle Materie</h2>
          <div className="mi-divider center mi-reveal"></div>
          <p className="mi-text-center mi-reveal" style={{ maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-light)' }}>
            Programma Biennale in weekend da 1 a 20 + Master del 3° anno.
          </p>

          <div className="mi-accordion-list mi-reveal">
            {programData.map((prog, index) => (
              <div className={`mi-accordion-item ${openYear === index ? 'active' : ''}`} key={index}>
                <button className="mi-accordion-header" onClick={() => toggleYear(index)}>
                  <h3>{prog.title}</h3>
                  <ChevronDown size={24} className={`mi-accordion-icon ${openYear === index ? 'rotate' : ''}`} />
                </button>
                <div className="mi-accordion-content" style={{ maxHeight: openYear === index ? '1500px' : '0' }}>
                  <div className="mi-accordion-inner">
                    <ul>
                      {prog.content.map((item, mIndex) => (
                        <li key={mIndex}>
                          <span className="mi-bullet"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ESAMI E RICONOSCIMENTI ─── */}
      <section className="mi-section container mi-reveal">
        <div style={{ background: '#fff', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem', boxShadow: 'var(--shadow-md)' }}>
          <h2 className="mi-section-title text-center">Esami, Certificazioni e Borse di Studio</h2>
          <div className="mi-divider center"></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Sessione Finale ed Esami (Legge 4/2013)</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Il programma prevede una breve sessione di esame ad ogni livello intermedio per l'accesso al livello successivo.<br/><br/>
                Al completamento del <strong>Biennio</strong>: esame scritto, orale e pratico per la consegna del certificato per Operatore Tecnico del Benessere in Ayurveda dell'Accademia (Legge 4/2013).<br/><br/>
                Al completamento del <strong>Triennio (Master)</strong>: Esame finale per il Diploma Nazionale e Internazionale certificato da ente CONI. Viene rilasciato il tesserino tecnico di qualifica nazionale ASI CONI, con iscrizione all'albo.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Borse di Studio</h3>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, fontSize: '0.95rem' }}>
                Il percorso biennale destinerà <strong>5 borse di studio</strong> per ogni anno accademico a giovani inoccupati ed ex lavoratori in cerca di riqualificazione (copertura 25% iscrizione, 15% retta mensile).<br/><br/>
                <strong>Requisiti:</strong> Maggiore età, disoccupati, precari o part-time; donne in rientro lavorativo post-maternità. Reddito massimo nucleo familiare 28.000,00 Euro. Richiedi i moduli a <em>infoaryaveda8@gmail.com</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFO PRATICHE ─── */}
      <section className="mi-info-section container mi-reveal" style={{ paddingTop: '0' }}>
        <div className="mi-info-grid">
          <div className="mi-info-card">
            <div className="mi-info-icon"><Calendar size={32} /></div>
            <h3>Frequenza</h3>
            <p>1 weekend al mese (Sab e Dom).<br/>Orari: 10:00 - 18:00 (pausa pranzo).<br/><strong>Corsi a Numero Chiuso</strong> - Possibili recuperi privati.</p>
          </div>
          <div className="mi-info-card">
            <div className="mi-info-icon"><MapPin size={32} /></div>
            <h3>Sede</h3>
            <p>Centro A.I.M.A. AYURVEDA<br/>Via Teocrito 50, Milano.<br/>Entrata libera per colloquio preliminare.</p>
          </div>
          <div className="mi-info-card">
            <div className="mi-info-icon"><Award size={32} /></div>
            <h3>Iscrizione</h3>
            <p>Ricevuta pagamento, 1 foto tessera, copia documento d'identità. Pagamenti con bonifico bancario o in sede.</p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mi-cta-section mi-reveal">
        <div className="container mi-cta-content">
          <h2>Inizia il tuo viaggio professionale</h2>
          <p>Presentazione ufficiale corsi: 13 Settembre 2026 (15:30 - 18:30). Gradita la prenotazione.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <button className="btn btn-primary">Richiedi Informazioni</button>
            <button className="btn" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff' }}>WhatsApp: 3405865469</button>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: '#fff' }}>Ogni Lunedì e Martedì - per info- 3928191230 or 3405865469</p>
        </div>
      </section>
    </div>
  );
};

export default Milano;
