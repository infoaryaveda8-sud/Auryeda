
import './ReggioEmilia.css';
import { MapPin, Award, Clock, Phone, Mail } from 'lucide-react';
import img1 from '../../assets/IMG_2215-300x225.jpg';
import img2 from '../../assets/WhatsApp-Image-2026-07-27-at-17.19.56-1-225x300.jpeg';

const ReggioEmilia = () => {
  return (
    <div className="reggio-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="reggio-hero">
        <div className="reggio-hero-content">
          <h1 className="reggio-title">Accademia Tradizionale Ayurveda e Massaggio</h1>
          <p className="reggio-subtitle">2026/2028 a REGGIO EMILIA</p>
          <div className="mt-4 text-white" style={{ fontSize: '1.2rem', fontWeight: 300, maxWidth: '800px', margin: '1rem auto 0' }}>
            PERCORSO PROFESSIONALE COMPLETO 2025-2028 PER OPERATORE TECNICO (TERAPISTA) DEL BENESSERE AYURVEDA: MASSAGGIO AYURVEDICO E TRATTAMENTI DELLA TRADIZIONE INDIANA A BASE TRIENNALE
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="reggio-section" style={{ paddingTop: '0' }}>
        <div className="reggio-container">
          <div className="reggio-info-cards">
            <div className="reggio-card">
              <MapPin className="reggio-card-icon" size={48} />
              <h3>Sede del Corso</h3>
              <p>Centro sportivo e formazione olistica<br/><strong>TO BE STUDIOS</strong><br/>Via Gorizia 78, Angolo Via Aleardi<br/>Reggio Emilia</p>
            </div>
            <div className="reggio-card">
              <Award className="reggio-card-icon" size={48} />
              <h3>Certificazione</h3>
              <p>Rilascio di attestazione professionale, Legge 4 del 14 gennaio 2013, Professioni Non Ordinistiche.</p>
            </div>
            <div className="reggio-card">
              <Clock className="reggio-card-icon" size={48} />
              <h3>Durata e Orari</h3>
              <p>600 ore totali in due anni (30 weekend) + 120 ore di tirocinio.<br/>1 weekend al mese (Sab/Dom) dalle 10.00 alle 18.00.</p>
            </div>
          </div>

          <div className="reggio-grid">
            <div className="reggio-text-block">
              <h2>Il Percorso Formativo</h2>
              <p>Un corso per imparare i precetti della medicina ayurvedica indiana e i massaggi (trattamenti) della tradizione ayurvedica, incluse utili conoscenze di questo antico sistema di salute indiano. Imparare un vero e proprio mestiere che è un cammino di vita, di crescita professionale e umana.</p>
              <p>L’antica medicina indiana dell’Ayurveda considera la salute come uno stato di equilibrio tra fattori fisici, psicologici ed ambientali. Un sistema integrato di conoscenze teoriche e pratiche che mette al centro l’uomo nella sua totalità ed unicità. L’operatore ayurvedico si fa strumento di questa Scienza (Ayur-Veda, che significa letteralmente Scienza della Vita) attraverso l’acquisizione e la pratica di specifici tecniche e trattamenti.</p>
              
              <div className="reggio-image-row">
                <img src={img1} alt="Trattamento Ayurvedico" />
                <img src={img2} alt="Formazione Ayurveda" />
              </div>

              <h3>Cosa imparerai</h3>
              <p>Il corso permetterà all’allievo di diventare operatore ayurvedico (terapista) con conoscenze teoriche e pratiche dei trattamenti della tradizione ayurvedica. La formazione offre una visione olistica sugli intenti e sull’etica dei massaggi e dei trattamenti nella Medicina Ayurveda.</p>
              
              <h4>Primo Anno</h4>
              <ul>
                <li>Il test per il riconoscimento della costituzione fisica individuale, attraverso lo studio dei dosha</li>
                <li>Le tecniche del massaggio corpo completo dallo Snehana-Abhyanga, l’antico e tradizionale massaggio dei vaidya</li>
                <li>I massaggi costituzionali a seconda della tipologia costituzionale: vata, pitta e kapha</li>
                <li>La riflessologia plantare indiana</li>
                <li>Atmabhyangam, l’automassaggio</li>
                <li>Le nozioni di prevenzione e mantenimento della salute nella routine quotidiana e stagionale</li>
              </ul>

              <h4>Secondo Anno</h4>
              <ul>
                <li><strong>Shiro dhara</strong>, il flusso d’olio che cade calibrato al centro della fronte</li>
                <li><strong>Pinda sweda</strong>, trattamento di fomentazione benefico fatto di boli erbalizzati a caldo per tamponamento</li>
                <li><strong>Udgharshana</strong>, massaggio a secco con polveri erbali naturali</li>
                <li><strong>Udvartanam & ubtana</strong>, pulizia e peeling naturali di viso e corpo</li>
                <li><strong>Vasti</strong>, trattamento di permanenza d’olio localizzato per infiammazioni muscolo-scheletriche</li>
                <li><strong>Neerabhyangam</strong>, massaggio ayurvedico specifico per il drenaggio della linfa</li>
                <li><strong>Massaggio pranico</strong>, sequenza di massaggio del Kerala, sud India</li>
                <li><strong>Marmabhyangam</strong>, massaggio energetico di chakra e marma (punti vitali)</li>
                <li>Pratiche valutazioni ed osservazioni di naturopatia ayurvedica, che il vaidya compie per meglio valutare e comprendere lo stato psico-fisico della persona</li>
              </ul>

              <h3>A chi è rivolto</h3>
              <p>Il corso è strutturato in modo da fornire delle solide basi propedeutiche e permettere, nel pieno rispetto della visione olistica della salute, l’utilizzo immediato delle tecniche proposte. Pertanto è rivolto a:</p>
              <ul>
                <li>Operatori nel campo della salute (medici, fisioterapisti, infermieri, psicologi, massofisioterapisti, massoterapisti, massaggiatori MCB, parasanitari, ecc.)</li>
                <li>Operatori del settore naturale ed estetico (erboristi, estetiste, operatori di varie discipline e massaggio, naturopati, salonisti, spa manager, ecc.)</li>
                <li>Coloro che vogliono attivare palestre, centri di benessere, spa, centri fitness, benessere in agriturismo, empori del naturale, studi di massaggio, integrazione professionale, centri estetici, ecc.</li>
                <li>Coloro che cercano una formazione per la crescita personale e nel campo della salute in genere.</li>
              </ul>

            </div>

            <div className="reggio-sidebar">
              <div className="reggio-contact-widget">
                <h3>Open Day & Iscrizioni</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>INCONTRO E PRESENTAZIONE UFFICIALE CORSO CON I DOCENTI PRESSO LA NUOVA SEDE DI REGGIO EMILIA</p>
                <div className="event-date">
                  SABATO 26 SETTEMBRE<br/>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>OPEN DAY 14.30 – 18.00</span>
                </div>
                <p style={{ fontWeight: '500' }}>ENTRATA LIBERA<br/>GRADITA LA PRENOTAZIONE</p>
                
                <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="tel:3405865469" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={18} style={{ marginRight: '8px' }} />
                    340 5865469 (Anche WhatsApp)
                  </a>
                  <a href="mailto:infoayurvedaima@gmail.com" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} style={{ marginRight: '8px' }} />
                    infoayurvedaima@gmail.com
                  </a>
                </div>
              </div>

              <div className="reggio-widget" style={{ background: 'white', padding: '2.5rem', borderRadius: '16px', borderLeft: '5px solid var(--secondary)', boxShadow: 'var(--shadow-sm)'}}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.8rem' }}>Borse di Studio</h3>
                <p style={{ marginBottom: '1rem', color: '#4a5568', lineHeight: '1.6' }}>Il percorso triennale di Ayurveda destinerà <strong>nr. 5 borse di studio</strong> per ogni anno accademico a favore di giovani inoccupati ed ex lavoratori/trici che desiderano riqualificarsi professionalmente intraprendendo la professione di Operatore Tecnico del Benessere in Ayurveda (terapista massaggiatore della tradizione indiana).</p>
                <p style={{ marginBottom: '1.5rem', color: '#4a5568' }}><strong>Copertura:</strong> 25% (1/3) della quota d’iscrizione ed il 15% della retta mensile.</p>
                
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '1rem' }}>Requisiti per l'accesso:</h4>
                <ul style={{ paddingLeft: '1.2rem', fontSize: '0.95rem', color: '#4a5568', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li>Maggiore età</li>
                  <li>Essere senza lavoro, avere un lavoro precario o part-time (si richiede documentazione)</li>
                  <li>Donne che desiderano riprendere il loro posto nella società dopo essere state mamme</li>
                  <li>Reddito massimo del nucleo familiare 28.000,00 Euro</li>
                </ul>
                
                <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-light)', fontStyle: 'italic' }}>
                  Le domande di iscrizione e richiesta borse di studio andranno fatte in sede o via mail, tramite appositi moduli da richiedere all'indirizzo infoayurvedaima@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programma Triennale */}
      <section className="reggio-section-alt">
        <div className="reggio-container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="reggio-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--primary)' }}>Calendario Triennale</h2>
            <p className="reggio-subtitle" style={{ fontSize: '1.2rem' }}>NUOVO CALENDARIO TRIENNALE SEZIONE "PITTA" - ISCRIZIONI APERTE 2026/2028</p>
          </div>

          <div className="reggio-table-wrapper">
            <table className="reggio-table">
              <thead>
                <tr>
                  <th>Giorni</th>
                  <th>Mese</th>
                  <th>Anno</th>
                  <th>Materie</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: 'rgba(148, 58, 57, 0.08)' }}>
                  <td colSpan={4} style={{ color: 'var(--primary)', fontSize: '1.1rem' }}><strong>PRIMO ANNO - ACCADEMIA AYURVEDA AIMA</strong></td>
                </tr>
                <tr><td>10-11</td><td>GEN</td><td>2026</td><td>Introduzione teoria Ayurveda. Sanscrito base per operatori. Snehana -1</td></tr>
                <tr><td>14-15</td><td>FEB</td><td>2026</td><td>Dosha e Subdosha Snehana-2</td></tr>
                <tr><td>07-08</td><td>MAR</td><td>2026</td><td>Agni, Ama e fisiologia sistema digerente . Snehana-3</td></tr>
                <tr><td>18-19</td><td>APR</td><td>2026</td><td>Prakriti test Snehana completo</td></tr>
                <tr><td>16-17</td><td>MAG</td><td>2026</td><td>I massaggi costituzionali x vata, pitta e kapha parte 1</td></tr>
                <tr><td>13-14</td><td>GIU</td><td>2026</td><td>I massaggi costituzionali x vata, pitta e kapha parte 2</td></tr>
                <tr><td>04-05</td><td>LUG</td><td>2026</td><td>Din & Ritucharia, autocura con atmabhyangam, Pranayama, mukh yoga esercizi posturali per operatori</td></tr>
                <tr><td>26-27</td><td>SET</td><td>2026</td><td>Punti Marma 1- Studio, localizzazione, meditazione</td></tr>
                <tr><td>24-25</td><td>OTT</td><td>2026</td><td>Riflessologia plantare ayurvedica olistica 1</td></tr>
                <tr><td>28-29</td><td>NOV</td><td>2026</td><td>Muriabhyangam 1, manipolazioni articolare e sistema muscolo -scheletrico e principali malattie.</td></tr>
                
                <tr style={{ backgroundColor: 'rgba(148, 58, 57, 0.08)' }}>
                  <td colSpan={4} style={{ color: 'var(--primary)', fontSize: '1.1rem' }}><strong>SECONDO ANNO - ACCADEMIA AYURVEDA AIMA</strong></td>
                </tr>
                <tr><td>30-31</td><td>GEN</td><td>2027</td><td>Pindasweda e Varianti e massaggio pranico</td></tr>
                <tr><td>27-28</td><td>FEB</td><td>2027</td><td>Kalahari massage con i piedi. sequenze manuali per la circolazione Nala e Nadi Abhyangam riscaldanti e decontratturanti.</td></tr>
                <tr><td>13-14</td><td>MAR</td><td>2027</td><td>Ahara, nutrizione ayurvedica base e Dietistica, Dietologia ayurvedica. Ricette e programmi</td></tr>
                <tr><td>24-25</td><td>APR</td><td>2027</td><td>Anatomia del sistema linfatico. neerabhyangam, linfodrenaggio ayurvedico</td></tr>
                <tr><td>22-23</td><td>MAG</td><td>2027</td><td>Tutti i tipi di vasti e netra .cataplasmi e impacchi</td></tr>
                <tr><td>19-20</td><td>GIU</td><td>2027</td><td>Aromakhushbu Malish rituale con oli essenziali e studio degli oli essenziali teoria e pratica.</td></tr>
                <tr><td>17-18</td><td>LUG</td><td>2027</td><td>Dravyaguna Vigyan: farmacologia ayurveda, studio delle preparazioni e arte dell'alchimia: il rasa shastra</td></tr>
                <tr><td>11-12</td><td>SETT</td><td>2027</td><td>Studio dei punti vitali marma 2, tecnica marmabhyangam</td></tr>
                <tr><td>16-17</td><td>OTT</td><td>2027</td><td>Riflessologia plantare ayurvedica olistica 2</td></tr>
                <tr><td>20-21</td><td>NOV</td><td>2027</td><td>Muriabhyangam 2, manipolazioni articolare e sistema muscolo -scheletrico e principali malattie. Pratica e Test</td></tr>
                
                <tr style={{ backgroundColor: 'rgba(148, 58, 57, 0.08)' }}>
                  <td colSpan={4} style={{ color: 'var(--primary)', fontSize: '1.1rem' }}><strong>MASTER TERZO ANNO - ACCADEMIA AYURVEDA AIMA</strong></td>
                </tr>
                <tr><td>29-30</td><td>GEN</td><td>2028</td><td>Dhara, Shirodhara, Nasya Sarvang abhyangam 7 posizioni</td></tr>
                <tr><td>19-20</td><td>FEB</td><td>2028</td><td>Pratyasth: miofasciale ayurvedico olistico metodo Aima, con bendaggi riducenti</td></tr>
                <tr><td>18-19</td><td>MAR</td><td>2028</td><td>Garbhayangam & Balaabhyangam massaggio neonatale e massaggio della donna in dolce attesa, yoga e alimentazione in gravidanza</td></tr>
                <tr><td>22-23</td><td>APR</td><td>2028</td><td>Manas Abhyangam Anatomia del sistema nervoso. Ayurveda e la mente, psicologia ayurvedica .</td></tr>
                <tr><td>20-21</td><td>MAG</td><td>2028</td><td>Udgharshan, Udvartanam, Ubtan trattamenti con polveri erbali, peeling e maschere naturali curative.</td></tr>
                <tr><td>24-25</td><td>GIU</td><td>2028</td><td>Chakra & Cristalloterapia. Tricologia ayurvedica olistica : Keshyam con studio del capello, prodotti e trattamenti per il cuoio capelluto.</td></tr>
                <tr><td>15-16</td><td>LUG</td><td>2028</td><td>Nidana - auto diagnosi del polso, rogha e rogi pariksha . Valutazione cliente</td></tr>
                <tr><td>30-1</td><td>SET/OTT</td><td>2028</td><td>Lavorare con Punti Marma 3- Rakta Prakshalan</td></tr>
                <tr><td>21-22</td><td>OTT</td><td>2028</td><td>Riflessologia plantare ayurvedica olistica 3</td></tr>
                <tr><td>18-19</td><td>NOV</td><td>2028</td><td>Bans malish: tecnica ayurveda con il kit di bamboo professionale & rituale Rani Facial, trattamento facciale completo per un viso da regina</td></tr>
                
                <tr style={{ backgroundColor: 'rgba(222, 184, 83, 0.15)' }}>
                  <td colSpan={4} style={{ textAlign: 'center', color: '#8c7335', fontSize: '1.2rem', padding: '1.5rem' }}>
                    <strong>DATA ESAME DIPLOMA OPERATORE AYURVEDA: Da definire (GEN 2029)</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Docenti e Dettagli */}
      <section className="reggio-section">
        <div className="reggio-container">
          <div className="reggio-profile">
            <div style={{ flex: 1 }}>
              <h2 className="reggio-title" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem', textTransform: 'none', letterSpacing: 'normal' }}>I Nostri Docenti</h2>
              <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.8' }}>
                Percorso tenuto da Istruttori certificati di esperienza ultra decennale e dalla <strong>Dr.ssa indiana Sadbhawna Bhardwaj</strong>, Vaidya & Responsabile Didattica Formazione AIMA Ayurveda.
              </p>
              
              <h3 style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>Breve CV della Dr.ssa Bhardwaj</h3>
              <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
                Nata a New Delhi nel 1974. Responsabile didattica dei corsi di formazione per AIMA Ayurveda Italia. Ha conseguito laurea all’Università di Delhi, Diplomi di Naturopatia, Yoga e Digitopressione. È iscritta alla Gandhi National Academy of Naturopathy, per la pratica della medicina naturale.
              </p>
              <p style={{ lineHeight: '1.8', color: '#4a5568' }}>
                È specializzata in <strong>ABHYANGAM E SNEHANA</strong>, l’antica arte del massaggio curativo dei Vaidya indiani e <strong>PANCHAKARMA</strong>, la scienza trattamenti di purificazione organica di corpo e mente e riequilibranti della salute; riceve su appuntamento per consulenze di medicina Ayurveda col tradizionale sistema di valutazione <strong>NADI PARIKSHA</strong> (valutazione diagnostica non clinica, mediante auscultazione del polso), LIFESTYLE AND WELLNESS COACH.
                <br/><br/>
                Ha condotto e conduce corsi di formazione in Medicina Ayurveda, Massaggio e Naturopatia per professionisti del settore, in Italia ed in Svizzera dal 2001. Diploma Nazionale Tecnico Ayurveda Tradizionale riconosciuto CSEN/CONI e Docente Nazionale OPES/CONI.
              </p>
            </div>
            
            <div style={{ flex: 1, backgroundColor: 'var(--bg-soft)', padding: '3rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '2rem' }}>Riconoscimenti e Diplomi</h3>
              <p style={{ marginBottom: '2rem', fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-main)', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
                IL PROGRAMMA PREVEDE UNA BREVE SESSIONE DI ESAME AD OGNI LIVELLO INTERMEDIO PER L’ACCESSO AL LIVELLO SUCCESSIVO.
              </p>
              
              <div style={{ marginBottom: '1.5rem', padding: '1.5rem', borderRadius: '12px', borderLeft: '5px solid var(--secondary)', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--secondary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Completamento del Biennio</h4>
                <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: '1.6' }}>È previsto esame scritto, orale e pratico per la consegna del <strong>CERTIFICATO PER OPERATORE TECNICO DEL BENESSERE IN AYURVEDA</strong> DELL’ACCADEMIA.</p>
              </div>
              
              <div style={{ marginBottom: '2rem', padding: '1.5rem', borderRadius: '12px', borderLeft: '5px solid var(--primary)', backgroundColor: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Completamento del Triennio (Master)</h4>
                <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: '1.6' }}>Per il diploma nazionale e internazionale di Operatore Tecnico del Benessere in Ayurveda certificato da <strong>Ente CONI</strong>, è previsto un esame scritto, orale e pratico. Al superamento viene rilasciata immediatamente la certificazione.</p>
              </div>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.7', backgroundColor: 'rgba(255,255,255,0.5)', padding: '1.5rem', borderRadius: '8px' }}>
                Il certificato delle scuole AIMA Ayurveda e SEM Mininni è riconosciuto ai sensi della <strong>Legge 4/2013</strong> in Italia. 
                Si aggiorna in diploma nazionale <strong>ASI Arti Olistiche</strong> con la frequenza del terzo anno ed è riconoscibile da tutte le enti nazionali a delega CONI, rilasciando il tesserino tecnico che permette l’iscrizione all’albo nazionale.<br/><br/>
                I nostri Operatori certificati possono lavorare anche all’estero grazie alla certificazione internazionale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReggioEmilia;
