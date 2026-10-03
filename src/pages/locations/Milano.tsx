
import './Location.css';
import { Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

const Milano = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2026/08/cropped-logo-aryaveda.jpeg")' }}>
        <div className="container">
          <h1 className="h1">Accademia Ayurveda a Milano</h1>
          <p>Percorso Professionale Completo e Riconosciuto per Operatore Ayurveda</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="h2 text-primary">Accademia Triennale Ayurveda, Massaggi Tradizionali e Rituali Olistici</h2>
              <h4 className="subtitle">PERCORSO PROFESSIONALE COMPLETO E RICONOSCIUTO, DIPLOMA ASI NAZIONALE-ENTE CONI</h4>
              
              <div className="text-content mt-4">
                <p><strong>L’Ayurveda</strong> è probabilmente la dottrina medica più antica al mondo e medicina ufficiale nel sub-continente indiano. L’Ayurveda è medicina di grande esperienza, con le sue preparazioni naturali che spaziano nella ricerca terapeutica di tutto ciò che sta nel Creato, i suoi famosissimi trattamenti corpo quali massaggi, trattamenti di fomentazione e colate di oli cosiddetti medicati apprezzati in tutto il mondo.</p>
                <p>La branca che si occupa dei trattamenti è la stessa che assicura, si dice, longevità e serenità, parliamo del <strong>Rasayana</strong>, che raccoglie tutte le pratiche corpo conosciute ed utilizzate a scopo estetico, terapeutico, purificante e rilassante.</p>
                <p><strong>ARYA VEDA</strong>, scuola massaggio ayurveda milano, si occupa di divulgare l’antica scienza e dottrina medica dell’Ayurveda e le discipline olistiche orientali, correlate e non, attraverso seminari, conferenze e corsi di formazione che consentono all’essere umano di integrare in modo armonico mente-corpo-spirito, migliorando la qualità della vita.</p>
              </div>

              <div className="info-cards mt-4">
                <div className="info-card">
                  <Calendar className="icon text-primary" size={32} />
                  <h3>Durata</h3>
                  <p>Triennale (1 weekend al mese)</p>
                </div>
                <div className="info-card">
                  <MapPin className="icon text-primary" size={32} />
                  <h3>Sede</h3>
                  <p>Milano (Vedi Contatti)</p>
                </div>
                <div className="info-card">
                  <Award className="icon text-primary" size={32} />
                  <h3>Certificazione</h3>
                  <p>Diploma ASI Nazionale - CONI</p>
                </div>
              </div>

              <h3 className="h3 mt-5">Programma del Corso (Sezione "PITTA" Fuoco)</h3>
              <p className="highlight-text mb-4">ISCRIZIONI AL PERCORSO APERTA 2026/2028</p>
              
              <div className="curriculum-table-wrapper">
                <table className="curriculum-table">
                  <thead>
                    <tr>
                      <th>Anno</th>
                      <th>Mese/Giorni</th>
                      <th>Materie & Programma</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan={11} className="year-cell">I° ANNO</td>
                      <td>17-18 GEN 2026</td>
                      <td>Introduzione teoria Ayurveda. Sanscrito base per operatori. Snehana -1</td>
                    </tr>
                    <tr>
                      <td>21-22 FEB 2026</td>
                      <td>Dosha e SubDosha Snehana-2</td>
                    </tr>
                    <tr>
                      <td>14-15 MAR 2026</td>
                      <td>Agni, Ama e fisiologia sistema digerente, Snehana -3</td>
                    </tr>
                    <tr>
                      <td>11-12 APR 2026</td>
                      <td>Prakriti test snehana Completo</td>
                    </tr>
                    <tr>
                      <td>16-17 MAG 2026</td>
                      <td>I massaggi costituzionali x vata, pitta e kapha parte 1</td>
                    </tr>
                    <tr>
                      <td>06-07 GIU 2026</td>
                      <td>I massaggi costituzionali x vata, pitta e kapha parte 2</td>
                    </tr>
                    <tr>
                      <td>04-05 LUG 2026</td>
                      <td>Din & Ritucharia, auto cura con atmabhyangam, Pranayama, Mukh Yoga.</td>
                    </tr>
                    <tr>
                      <td>26-27 SET 2026</td>
                      <td>Punti Marma-1 Studio, localizzazione, meditazione</td>
                    </tr>
                    <tr>
                      <td>24-25 OTT 2026</td>
                      <td>RIFLESSOLOGIA 1 plantare ayurvedica olistica.</td>
                    </tr>
                    <tr>
                      <td>28-29 NOV 2026</td>
                      <td>MURI 1, manipolazioni articolare e sistema muscolo-scheletrico.</td>
                    </tr>
                  </tbody>
                  <tbody>
                     <tr>
                      <td rowSpan={8} className="year-cell">II° ANNO</td>
                      <td>16-17 GEN 2027</td>
                      <td>PINDASWEDA & varianti + massaggio Pranico</td>
                    </tr>
                    <tr>
                      <td>13-14 FEB 2027</td>
                      <td>KALAHARI massage con i piedi. + sequenze manuali Nala.</td>
                    </tr>
                    <tr>
                      <td>13-14 MAR 2027</td>
                      <td>Ahara - Nutrizione ayurvedica base e dietetica, dietologia.</td>
                    </tr>
                    <tr>
                      <td>17-18 APR 2027</td>
                      <td>Anatomia del sistema linfatico Neerabhyangam , linfodrenaggio.</td>
                    </tr>
                    <tr>
                      <td>15-16 MAG 2027</td>
                      <td>Tutti tipi di Vasti e entra, cataplasmi e impacchi.</td>
                    </tr>
                    <tr>
                      <td>05-06 GIU 2027</td>
                      <td>AromaKhusbu Malish rituale con oli essenziali e studio teoria.</td>
                    </tr>
                    <tr>
                      <td>03-04 LUG 2027</td>
                      <td>Dravyaguna Vigyana: farmacologia Ayurveda, arte dell' alchimia.</td>
                    </tr>
                    <tr>
                      <td>18-19 SET 2027</td>
                      <td>studio dei punti vitali marma 2, tecnica marmabhyangam.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm">
                <h4 className="h4 mb-3">Richiedi Informazioni</h4>
                <p className="text-muted mb-4">Compila il modulo per ricevere la brochure completa del corso di Milano e i costi.</p>
                <form className="contact-form">
                  <div className="form-group mb-3">
                    <input type="text" placeholder="Nome e Cognome" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" placeholder="Email" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="tel" placeholder="Telefono" className="form-control" />
                  </div>
                  <button className="btn btn-primary w-full mt-2">Invia Richiesta</button>
                </form>
              </div>

              <div className="sidebar-widget mt-4">
                <h4 className="h4 mb-3">I Nostri Docenti</h4>
                <ul className="teacher-list">
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Istruttore Michelangelo Vicenti</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Dott. Sadbhawna Bhardwaj</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Kapil Bhardwaj</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Milano;
