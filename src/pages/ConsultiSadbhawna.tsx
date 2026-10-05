import { Heart, MapPin, Phone, Mail, CheckCircle, Activity, Coffee } from 'lucide-react';
import './ConsultiSadbhawna.css';
import img1 from '../assets/IMG_0841-600x387.jpg';
import img2 from '../assets/IMG_0843-300x225.jpg';

const ConsultiSadbhawna = () => {
  return (
    <div className="visite-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="visite-hero consulti-hero">
        <div className="visite-hero-content">
          <h1 className="visite-title">CONSULTI DELLA DR.SSA SADBHAWNA</h1>
          <p className="visite-subtitle">CON LA TECNICA AYURVEDA DEL NADI PARIKSHA</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="visite-section">
        <div className="visite-container">
          
          <div className="visite-intro">
            <h2 className="section-heading">Il tuo percorso di Benessere</h2>
            <p className="intro-text">
              Lo sapevi che è possibile agire sulle cause di ogni tuo disturbo e non solo dell’intestino, con una valutazione tecnica e di esperienza, auscultando il tuo polso ?
            </p>
          </div>

          <div className="content-grid">
            <div className="content-image-wrapper">
              <img src={img1} alt="Consulto Ayurveda" className="content-image" />
              <div className="image-decoration"></div>
            </div>
            
            <div className="content-text">
              <h3>La Tecnica Millenaria del Nadi Pariksha</h3>
              <p>
                <strong>Namastè sono La Dr.ssa Sadbhawna Bhardwaj</strong>, esperta di Nadi Pariksha, ovvero l’esame del polso nella Medicina Tradizionale Ayurveda.
              </p>
              <p>
                Si tratta di una tecnica millenaria indiana che, a partire dalle pulsazioni presenti nel polso, e con la mia esperienza, riesce ad individuare le cause di squilibri e disturbi nel corpo e analizzare lo stato di benessere.
              </p>
              <p>
                Questa tecnica, non solo riconosce blocchi già presenti, ma è in grado di indicare potenziali rischi per la salute futura e la cosa più interessante è che il Nadi Pariksha evita procedure lunghe e complicate: tutto ciò di cui abbiamo bisogno è il nostro polso.
              </p>
            </div>
          </div>

          <div className="content-grid reverse-grid mt-5">
            <div className="content-text">
              <h3>COME SI SVOLGE E COSA CONSIGLIA:</h3>
              <ul className="benefits-list">
                <li><CheckCircle className="check-icon" /> Il tipo di costituzione fisica individuale e lo stato di salute attuale</li>
                <li><Heart className="check-icon" /> Un piano di riequilibrio psico-fisico con consigli naturali 100% Ayurvedici</li>
                <li><Activity className="check-icon" /> Consigli ed insegnamenti e/o pratiche di eventuali terapie fisiche</li>
                <li><Coffee className="check-icon" /> Consigli alimentari (dieta personale a scopo terapico)</li>
              </ul>
              <p className="mt-4">
                Tutto questo per riarmonizzare i valori dello stato di salute naturalmente, nel più puro stile “Olistico” della scienza di vita dell’Ayurveda.
              </p>
              <div className="appointment-info mt-4">
                <h4>Come presentarsi all’appuntamento:</h4>
                <p>La durata di ogni consulenza individuale è di minimo <strong>50 minuti</strong>.</p>
                <p><strong>Importante:</strong> i riceventi consulenza dovranno essere a stomaco vuoto o lontano dai pasti, comunque, condizione necessaria per la miglior valutazione sul piano fisico.</p>
                <p>Possibili referti medici, raggi X, analisi e terapie già svolte, saranno graditi ed utili al fine di un’analisi approfondita.</p>
              </div>
            </div>
            
            <div className="content-image-wrapper">
              <img src={img2} alt="Trattamenti Ayurveda" className="content-image" />
              <div className="image-decoration-alt"></div>
            </div>
          </div>

          <div className="full-width-section" id="a-chi-serve">
             <div className="card-box">
                <h3 className="text-center text-primary mb-4">A CHI PUO’ SERVIRE</h3>
                <p className="text-center description-box">
                  CON L’ANTICA VALUTAZIONE EZIOLOGICA DEL POLSO, TERAPIA ALIMENTARE AYURVEDICA E PRATICHE DI MASSAGGIO, TRATTAMENTI E PANCHKARMA PER LA PROPRIA COSTITUZIONE.<br/><br/>
                  LA CONSULENZA AYURVEDICA (non clinica) SI BASA SU TECNICHE DEL PANCHAKARMA, IL METODO CLASSICO DI PURIFICAZIONE CORPOREA INTERNA ED ESTERNA, ISPIRATE DALLA DOTTRINA MEDICA INDIANA TRADIZIONALE DELL’AYURVEDA.<br/><br/>
                  VENGONO DATE INDICAZIONI SU COME IMPOSTARE O CORREGGERE LA PROPRIA ROUTINE GIORNALIERA, PER COMPENSARE GLI SQUILIBRI ESISTENTI E PER AIUTARE IL CORPO E LA MENTE A RITROVARE IL PROPRIO EQUILIBRIO.
                  OLTRE A CONSIGLI SPECIFICI PER LA DIETA, INCLUSE RICETTE SPECIFICHE E COMBINAZIONI IDEALI PERSONALIZZATE, VENGONO PROPOSTI RIMEDI SEMPLICI COME DECOTTI, TISANE, PIATTI CURATIVI, TRATTAMENTI ESTERNI COME: BAGNI, IMPACCHI, MASSAGGI, ECC.
                  INTEGRATORI, RIMEDI ERBORISTICI E AYURVEDICI FACILMENTE RINTRACCIABILI.
                </p>

                <h4 className="text-center section-sub mt-5 mb-3">QUESTA CONSULENZA PUO’ ESSERE DI AIUTO & SOSTEGNO IN PARTICOLARE PER:</h4>
                <div className="grid-list columns-1">
                  <div className="list-item">Sciogliere gli accumuli, sovrappeso e cellulite, cisti, fibromi, lipomi</div>
                  <div className="list-item">Intasamenti nei vari organi che provocano disturbi a intestino e al fegato</div>
                  <div className="list-item">Appetito eccessivo, voglia di dolci, tosse cronica</div>
                </div>

                <h4 className="text-center section-sub mt-5 mb-3">RAFFORZARE IL SISTEMA E GLI ORGANI DA DEBOLEZZE DI:</h4>
                <div className="grid-list columns-2">
                  <div className="list-item">Reni, vescica e prostata</div>
                  <div className="list-item">Problemi di infertilità e libido</div>
                  <div className="list-item">Problemi sessuali</div>
                  <div className="list-item">Stitichezza</div>
                  <div className="list-item">Disbiosi intestinale</div>
                  <div className="list-item">Problemi digestivi</div>
                  <div className="list-item">Reflusso gastro-esofageo</div>
                  <div className="list-item">Problemi di cuore e circolazione</div>
                  <div className="list-item">Depressione</div>
                  <div className="list-item">Allergie/Intolleranze</div>
                  <div className="list-item">Asma</div>
                  <div className="list-item">Psoriasi e eruzioni cutanee</div>
                  <div className="list-item">Problemi auto-immuni</div>
                </div>
                
                <h4 className="text-center section-sub mt-5 mb-3">PROBLEMI CRONICI RICORRENTI:</h4>
                <div className="grid-list columns-4 text-center">
                  <div className="list-item">Mal di testa</div>
                  <div className="list-item">Ansia</div>
                  <div className="list-item">Insonnia</div>
                  <div className="list-item">Letargia</div>
                </div>

                <p className="text-center mt-5 warning-text">
                  I RIMEDI AYURVEDICI ED IL TIPO DI CONSULENZA AYURVEDICA, POSSONO ESSERE EFFICACI ANCHE PER DISTURBI DEGENERATIVI TIPO IL DIABETE O ALTRI. IN OGNI CIRCOSTANZA SI LAVORA INSIEME, IN MODO COMPLEMENTARE, ALLE CURE MEDICHE ALLOPATICHE.
                </p>
             </div>
          </div>

          <div className="visite-action-card mt-5">
            <h2>DOVE TROVARE LE CONSULENZE AYURVEDA</h2>
            <p className="mb-4 text-subtitle">col metodo di Nadi Pariksha</p>
            
            <div className="locations-grid">
              <div className="location-card">
                <MapPin className="location-icon" size={40} />
                <h4>A Milano presso: Scuola Arya Veda</h4>
                <p>Via Teocrito 50 (Ang. Via Cirenei)</p>
                <p className="text-sm">400 mt da MM1 GORLA, 500 mt da MM1 PRECOTTO</p>
                <div className="contact-links mt-3">
                  <a href="tel:+393405865469" className="contact-link"><Phone size={16}/> 3405865469 (Dr.Sadbhawna)</a>
                </div>
              </div>
              
              <div className="location-card">
                <MapPin className="location-icon" size={40} />
                <h4>A Ghemme (NO) presso: Studio Gayatri</h4>
                <p>Via Novara 85/a</p>
                <div className="contact-links mt-3">
                  <a href="tel:+393471540526" className="contact-link"><Phone size={16}/> 3471540526 (Riccardo)</a>
                </div>
              </div>
            </div>

            <div className="action-buttons mt-5">
              <a href="mailto:sadbhawnabhardwaj@gmail.com" className="btn btn-primary action-btn">
                <Mail size={20} className="btn-icon" />
                Scrivici un'email
              </a>
              <a href="tel:+393405865469" className="btn btn-outline action-btn">
                <Phone size={20} className="btn-icon" />
                Chiama ora (anche WhatsApp)
              </a>
            </div>
            
            <p className="namaste-text mt-4">Namastè 🙏</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ConsultiSadbhawna;
