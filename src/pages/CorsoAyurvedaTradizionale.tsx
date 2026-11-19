import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Calendar, Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import imgGroup from '../assets/WhatsApp-Image-2023-08-30-at-13.02.51-600x387.jpeg';
import './BlogPost.css';
import './CorsoAyurvedaTradizionale.css';

const sedi = [
  {
    city: 'MILANO',
    text: 'COLLOQUIO PRIVATO SU APPUNTAMENTO, presso sede ARYA VEDA aps, via teocrito 50, zona Gorla /viale monza, Milano – entrata libera, gradita la prenotazione, colloquio su appuntamento al 3405865469 anche whatsapp.'
  },
  {
    city: 'REGGIO EMILIA',
    text: 'COLLOQUIO PRIVATO SU APPUNTAMENTO, presso TO BE STUDIOS, VIA GORIZIA 78, ANG. VIA ALEARDI – REGGIO EMILIA, entrata libera, gradita la prenotazione, colloquio su appuntamento al 3405865469 anche whatsapp.'
  },
  {
    city: 'BARLETTA',
    text: 'presso Scuola estetica SEM Mininni'
  }
];

const punti = [
  'Studio e pratica dell’ Ayurveda tradizionale con massaggi e trattamenti ayurvedici tratti dagli antichi testi Vedici',
  'corsi singoli e percorsi brevi di formazione base ed avanzati',
  'Triennale Accademico, 2 certificati di frequenza annuale + diploma nazionale da Ente CONI finale dopo l’esame del terzo anno: diploma riconosciuto per operatore tecnico del benessere in Ayurveda.',
  '30 moduli o weekend di frequenza mensile, di cui i primi 4 (weekend) costituisce il primo livello obbligatorio per poter accedere separatamente agli altri moduli, oppure continuare il percorso accademico fino al diploma',
  'Organizzazione Viaggio – Studio in India ogni anno presso Ns clinica ayurvedica di fiducia'
];

const calendari = [
  {
    title: '1° livello 2027 MILANO-LOMBARDIA',
    dates: ['16 – 17 GENNAIO 2027', '13 – 14 FEBBRAIO 2027', '13 – 14 MARZO 2027', '10 – 11 APRILE 2027']
  },
  {
    title: '1° livello 2027 REGGIO EMILIA-EMILIA ROMAGNA',
    dates: ['23 – 24 GENNAIO 2027', '20 – 21 FEBBRAIO 2027', '20 – 21 MARZO 2027', '17 – 18 APRILE 2027']
  },
  {
    title: '1° livello 2025/2026 BARLETTA-PUGLIA',
    dates: ['13 OTTOBRE 2026', '14 OTTOBRE 2026', '15 OTTOBRE 2026', '16 OTTOBRE 2026']
  }
];

const weekend = [
  {
    title: 'PRIMO WEEKEND',
    text: 'Introduzione all’Ayurveda. Significato di Ayurveda e a chi può essere utile. Origine, Filosofia, Definizione e Storia. Ayurveda come scienza della vita e sua collocazione nel panorama indiano e nella Mitologia Hindu. Filosofia e Scienza. I testi sacri: Veda, Upanishad e principali Samhita. Manifestazione della Vita secondo la Filosofia Sankhya. Karma e Samskara gli aspetti della Verità sul ciclo della vita: destino o risultato delle azioni compiute in vita. I 4 scopi dell’Esistenza, secondo l’Ayurveda: Dharma, Artha, Kama, Moksha. I 5 grandi elementi: PANCH-MAHA-BHUTA. Introduzione e studio approfondito alla psico-fisiologia attraverso i 3 DOSHA: ciò che squilibra, i 7 tessuti corporei: DHATU, scarti metabolici: MALA. Introduzione alle manualità e alle tecniche dei migliori trattamenti ayurvedici di lubrificazione per eccellenza: SNEHAN-ABHYANGAM teoria e pratica del sacro massaggio dei vaidya (medico della tradizione ayurveda indiana), PARTE 1: PAD – ABHYANGAM, studio delle tecniche su piedi, gambe, cosce'
  },
  {
    title: 'SECONDO WEEKEND',
    text: 'Teoria dei 3 DOSHA: Vata, Pitta e Kapha, approfondimento dei loro rispettivi sub-dosha. Triguna le qualità della mente: Satva, Rajas e Tamas. Studio delle energie sottile: Prana, Tejas e Ojas. Le cause e le variabili degli squilibri di Tridosha e Triguna. Le cause di tutte le sofferenze e malattie: Mithyahara Vihara, Pragyanapradh, e Kala. Introduzione al Panchkarma: il sistema di purificazione e guarigione, perno cardine della medicina Ayurveda. Manualità e tecniche del trattamento ayurveda SNEHAN-ABHYANGAM, teoria e pratica PARTE 2: VAKSH – ABHYANGAM E HAST – ABHYAGAM, tecniche di massaggio su addome, petto, braccia e mani.'
  },
  {
    title: 'TERZO WEEKEND',
    text: 'Agni e Funzione di Agni: il concetto di metabolismo e la digestione secondo Ayurveda. Anatomia ayurvedica del sistema metabolico. Deontologia, Etica, Regole e contro-indicazioni ai trattamenti per l’Operatore Ayurveda. Manualità e tecniche di trattamento ayurveda SNEHAN-ABHYANGAM, teoria e pratica PARTE 3: THAND – ABHYANGAM, tecniche di massaggio alla parte posteriore con schiena, collo, spalle, zone dorsali, lombari, glutei e gambe.'
  },
  {
    title: 'QUARTO WEEKEND',
    text: 'Ama: concetto e ruolo delle tossine scaturite da una cattiva digestione. Le origini dello squilibro corporeo iniziano da Ama: Come si forma nel nostro organismo e cosa possiamo fare per eliminarlo. Analisi delle pelli e messa a punto del Prakriti/Vikruti test per riconoscere il proprio Dosha dominante. Importanza dell’uso degli oli in Ayurveda. Aromaterapia e Ayurveda: Consigli su oli medicati usati nei trattamenti ayurvedici. Manualità e tecniche di trattamento ayurveda SNEHAN-ABHYANGAM, finalizzazione e dettagli del trattamento completo: mukh – abhyangam e shiro – abhyangam, le tecniche su viso e tradizionale massaggio alla testa.'
  }
];

const CorsoAyurvedaTradizionale = () => {
  useEffect(() => {
    document.title = 'Corsi Ayurveda Tradizionali con Attestati e Diploma 2027/2028 | ARYA VEDA';
  }, []);

  return (
    <article className="blog-post-page animate-fade-in-up">
      <div className="post-breadcrumbs-bar">
        <div className="container">
          <Link to="/corsi-viaggi" className="back-to-blog-link">
            <ChevronLeft size={16} /> Torna a Corsi & Viaggi
          </Link>
        </div>
      </div>

      <header className="post-header">
        <div className="container post-header-container">
          <span className="post-category-tag">Corsi</span>
          <h1 className="post-main-title">Corsi Ayurveda Tradizionali con Attestati e Diploma 2027/2028</h1>
          <p className="cat-subtitle">
            ARYA VEDA organizza corso ayurveda tradizionale a livelli progressivi di formazione
          </p>
        </div>
      </header>

      <div className="container post-content-container">
        <div className="post-body">
          <section className="post-section">
            <h2>Presentazione corsi</h2>
            <div className="cat-sedi">
              {sedi.map((s) => (
                <div className="cat-sede-card" key={s.city}>
                  <h3><MapPin size={18} /> {s.city}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>

            <ul className="benefits-checklist">
              {punti.map((p) => (
                <li key={p}>
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="quote-callout">
              Il corso ayurveda tradizionale è ideale per neofiti, ma anche per chi è già professionista e vuole imparare con un metodo facile, veloce e sicuro, per poter lavorare con l’Ayurveda ad un buon livello di formazione
            </p>
          </section>

          <section className="post-section">
            <h2>Calendario</h2>
            <div className="cat-calendari">
              {calendari.map((c) => (
                <div className="cat-cal-card" key={c.title}>
                  <h3>{c.title}</h3>
                  <span className="cat-badge">iscrizioni aperte</span>
                  <ol>
                    {c.dates.map((d) => (
                      <li key={d}><Calendar size={14} /> {d}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <div className="dosha-highlight-card">
              <h3>CLASSI A NUMERO CHIUSO</h3>
              <p><strong>ATTESTATO:</strong> “Corso Ayurveda Tradizionale: Massaggio Base”</p>
            </div>
          </section>

          <section className="post-section">
            <h2>Programmi completi</h2>
            <p>
              <strong>PRIMO LIVELLO di corso ayurveda tradizionale 2026/27: sedi nazionali</strong>
            </p>
            <ul className="cat-plain-list">
              <li>a <strong>MILANO</strong> per il Nord Italia, Via Teocrito 50</li>
              <li>a <strong>REGGIO EMILIA</strong> per il Centro Italia, TO BE STUDIOS, VIA GORIZIA 78, ANG. VIA ALEARDI</li>
              <li>a <strong>BARLETTA</strong> per il Sud Italia, Scuola di Estetica e Make up SEM Mininni</li>
            </ul>
            <p><strong>ATTESTATO DI:</strong> CORSO AYURVEDA TRADIZIONALE: MASSAGGIO BASE</p>
            <p><strong>QUOTA D’ISCRIZIONE E CORSO A RATE, TUTTO INCLUSO,</strong> info presso sede.</p>

            <img src={imgGroup} alt="Corso Ayurveda Tradizionale ARYA VEDA" className="post-featured-image cat-inline-img" />

            <p>
              Il primo livello è composto da 4 weekend, uno o due al mese circa. Passato il primo livello, si ha diritto a ricevere l’attestato di: “corso massaggio ayurvedico base” e di frequentare gli altri moduli, anche separatamente ed indipendentemente.
            </p>
            <p>
              Il passaggio dal primo livello agli altri moduli non è obbligatorio, ma serve per continuare il percorso accademico verso il Diploma finale, oppure acquisire competenze individuali di spessore per lavorare subito e tecnicamente con L’Ayurveda.
            </p>
          </section>

          <section className="post-section">
            <h2>Programma del primo livello</h2>
            <div className="numbered-features-grid">
              {weekend.map((w, i) => (
                <div className="numbered-feature-card" key={w.title}>
                  <div className="feature-number">{i + 1}</div>
                  <div className="feature-content">
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="post-section">
            <div className="event-info-box">
              <div className="event-contact-block" style={{ marginTop: 0 }}>
                <h4>MODALITA’: per prenotazioni ed iscrizioni contattate ARYA VEDA Ass. Cult.</h4>
                <div className="event-contact-links">
                  <a href="tel:+393405865469" className="event-contact-pill">
                    <Phone size={16} /> 3405865469 (Bharat)
                  </a>
                  <a href="https://wa.me/393405865469" target="_blank" rel="noopener noreferrer" className="event-contact-pill whatsapp-pill">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                  <a href="mailto:infoaryaveda8@gmail.com" className="event-contact-pill">
                    <Mail size={16} /> infoaryaveda8@gmail.com
                  </a>
                </div>
              </div>
              <p className="note-text" style={{ marginTop: '1.5rem' }}>
                E’ richiesta caparra per il primo weekend di corso, non restituibile in caso di rinuncia da parte del partecipante, il resto è possibile saldarlo in tre rate inerenti alle date del corso stesso, al momento in sede tramite rimessa diretta e/o bonifico.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default CorsoAyurvedaTradizionale;
