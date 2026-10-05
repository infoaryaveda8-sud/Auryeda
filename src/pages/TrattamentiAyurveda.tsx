import { MapPin, Phone, Gift, CreditCard, Clock, Euro } from 'lucide-react';
import './TrattamentiAyurveda.css';
import img1 from '../assets/013626bbba1bc95188418e6300655ad6f2f08621ae-e1540982037218.jpg';
import img2 from '../assets/IMGP8348.jpg';
import img3 from '../assets/IMGP8366.jpg';
import img4 from '../assets/1300094455_137677269_3-CORSO-RESIDENZIALE-DI-MASSAGGIO-AYURVEDICO-Altri-corsi.jpg';
import img5 from '../assets/WhatsApp-Image-2026-07-27-at-17.19.55-10.jpeg';
import img6 from '../assets/IMG_20250111_120457903-scaled.jpg';

const TrattamentiAyurveda = () => {
  return (
    <div className="trattamenti-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="trattamenti-hero">
        <div className="trattamenti-hero-content">
          <h1 className="trattamenti-title">TRATTAMENTI AYURVEDA</h1>
          <p className="trattamenti-subtitle">Laboratorio Ayurvedico di Benessere - L.A.B.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="trattamenti-section">
        <div className="trattamenti-container">
          
          {/* Intro Section */}
          <div className="content-grid align-center">
            <div className="content-text">
              <h2 className="section-heading">L.A.B. - Aperto a tutti</h2>
              <p>
                Il Centro AIMA asd, dalla lunga esperienza di formazione nell’ambito dell’operatore tecnico del benessere in Ayurveda, ha creato <strong>L.A.B.: Laboratorio Ayurvedico di Benessere</strong>, aperto a tutti.
              </p>
              <p>
                I Nostri migliori Operatori Accreditati & Certificati presso la sede del centro AIMA di Milano sita in via Teocrito 50, propongono trattamenti e massaggi personalizzati tutti intorno a Te, nello stile dell’approccio olistico suggerito dalla Antica Medicina Ayurvedica indiana.
              </p>
              <p>
                Il progetto L.A.B. nasce con la stessa passione e tradizione con cui abbiamo sempre formato i Ns operatori. Non siamo un centro massaggi o una SPA, ci poniamo come associazione nel panorama olistico che diffonde ed opera nel campo dei trattamenti orientali legati alla tradizione indiana dell’Ayurveda.
              </p>
            </div>
            <div className="content-image-wrapper">
              <img src={img6} alt="Laboratorio Ayurvedico di Benessere" className="content-image" />
              <div className="image-decoration"></div>
            </div>
          </div>

          {/* Benefici Section */}
          <div className="content-grid reverse-grid mt-6">
            <div className="content-text">
              <h2 className="section-heading">I Benefici del Massaggio Ayurveda</h2>
              <p>
                L’ayurveda è insieme una filosofia, una disciplina di vita e una medicina, ed è Praticata in india da più di 5.000 anni. Si occupa di tutti gli aspetti del benessere, quello fisico, quello psicologico e quello emotivo, di ciò che è normale tanto quanto di ciò che è anormale o patologico.
              </p>
              <p>
                Secondo l’ayurveda la salute non è solo assenza di malattia ma è uno stato di continuo appagamento e di benessere, uno stato di felicità fisica e di gioia nel cuore. Il principio guida dell’ayurveda è quello di armonizzare i ritmi corporei con quelli della natura in modo da assicurare una condizione di buona salute e prevenire l’insorgere di “squilibri”.
              </p>
              <p>
                Questo concetto, unito armoniosamente a trattamenti sul corpo “personalizzati” che si basano sulla costituzione individuale (dosha), porta l’individuo a ritrovare uno stato di benessere totale. Un corpo rigido, bloccato, ed una mente stressata impediscono di raggiungere il benessere psicofisico, da qui nasce la necessità di praticare specifiche manipolazioni sul corpo.
              </p>
              <p>
                Durante il massaggio ayurvedico utilizzo oli pregiati, oli medicati ed oli essenziali di origine naturale al 100% che promuovono l’assimilazione delle sostanze nutritive. Prodotti di alta qualità e manualità specifiche permettono ai tessuti del corpo di rilasciare le tensioni e le tossine accumulate, e cominciare uno spontaneo processo di rigenerazione.
              </p>
            </div>
            <div className="content-image-wrapper">
              <img src={img4} alt="Benefici Massaggio Ayurveda" className="content-image" />
              <div className="image-decoration-alt"></div>
            </div>
          </div>

          {/* Promo & Info Banner */}
          <div className="promo-banner mt-6">
            <div className="promo-info">
              <div className="info-item">
                <MapPin size={24} className="info-icon" />
                <div>
                  <strong>STUDIO IN VIA TEOCRITO 50, MILANO</strong>
                  <p>MM1 GORLA</p>
                </div>
              </div>
              <div className="info-item">
                <Phone size={24} className="info-icon" />
                <div>
                  <strong>3405865469</strong>
                  <p>ANCHE WHATSAPP</p>
                </div>
              </div>
              <div className="info-item">
                <CreditCard size={24} className="info-icon" />
                <div>
                  <strong>PAGAMENTO CON:</strong>
                  <p>Bonifico Istantaneo, Contanti, Revolut, Paypal</p>
                </div>
              </div>
            </div>
            
            <div className="discount-box">
              <Gift size={40} className="discount-icon" />
              <h3>LISTINO SCONTATO AL 10%</h3>
              <p>Fino a fine anno 2026</p>
              <div className="promo-code">
                Dichiara <strong>"PROMO 10"</strong> al massaggiatore
              </div>
            </div>
          </div>

          {/* Listino Prezzi */}
          <h2 className="section-heading text-center mt-8 mb-4">Listino Trattamenti</h2>
          <p className="text-center subtitle-text mb-6">Massaggiatore, Massofisioterapista, Operatore Olistico e Ayurvedico</p>
          
          <div className="price-grid">
            {/* Massaggi Parziali */}
            <div className="price-card">
              <div className="price-card-header">
                <h3>Massaggi Parziali</h3>
              </div>
              <div className="price-list">
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Pada-Abhyangam</h4>
                    <p>Gambe</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 30 min | <Euro size={14}/> 45</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Vaksh-Malish</h4>
                    <p>Addome, petto e braccia</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 30 min | <Euro size={14}/> 45</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Thand-Abhyangam</h4>
                    <p>Schiena</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 30 min | <Euro size={14}/> 45</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Testa Shiro-Abhyangam</h4>
                    <p>Viso e testa</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 20 min | <Euro size={14}/> 40</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Ang-Abhyangam</h4>
                    <p>Parziale con piedi, gambe, cosce, schiena, spalle e collo</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 40 min | <Euro size={14}/> 55</div>
                </div>
              </div>
            </div>

            {/* Massaggi Ayurveda Full Body */}
            <div className="price-card highlight-card">
              <div className="price-card-header">
                <h3>Massaggi Ayurveda Full Body</h3>
              </div>
              <div className="price-list">
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Snehana Sarvang Abhyangam</h4>
                    <p>Total signature treatment (completo testa e viso inclusa)</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h 30m | <Euro size={14}/> 120</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Vat-Abhyangam</h4>
                    <p>Antistress, lento e presente, decontratturante</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Pitt-Abhyangam</h4>
                    <p>Calmante, leggero, rilassante</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Kaph-Abhyangam</h4>
                    <p>Sportivo, rinvigorente e riducente</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Rituale Ayurvedico Muri-Abhyangam</h4>
                    <p>Articolare, osteomassaggio</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h 15m | <Euro size={14}/> 100</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Rituale Pindasweda</h4>
                    <p>Boli erbali caldi, tipo hot stone, contro dolori e acciacchi da età, freddo & A/C (45m o Total Body 1h 15m)</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 45m-75m | <Euro size={14}/> 60-100</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Trattamento Shirodhara</h4>
                    <p>Del filo d'olio a caduta libera su cuoio capelluto</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h 30m | <Euro size={14}/> 120</div>
                </div>
              </div>
            </div>
          </div>

          <div className="price-grid mt-4">
            {/* Massaggi Terapeutici-Estetici */}
            <div className="price-card">
              <div className="price-card-header">
                <h3>Massaggi Terapeutici-Estetici</h3>
              </div>
              <div className="price-list">
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Trattamento Neer-Abhyangam</h4>
                    <p>Linfodrenaggio vero e molto rilassante</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Kaph-Abhyangam</h4>
                    <p>Sportivo, rinvigorente e riducente</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Marma-Abhyangam</h4>
                    <p>Energetico dei punti vitali</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h 30m | <Euro size={14}/> 120</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio in Gravidanza</h4>
                    <p>Garbh-Abhyangam</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 50 min | <Euro size={14}/> 70</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Infantile 0-12 Mesi</h4>
                    <p>Bala-Abhyangam</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 30 min | <Euro size={14}/> 45</div>
                </div>
              </div>
            </div>

            {/* Rituali Ayurvedici */}
            <div className="price-card">
              <div className="price-card-header">
                <h3>Rituali Ayurvedici</h3>
              </div>
              <div className="price-list">
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Trattamento Udgharshana</h4>
                    <p>Scrub corpo di rimozione e apertura dei pori con bagno di vapore e doccia</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Trattamento Udvartana</h4>
                    <p>Peeling corpo delicato: stimola pelle e ringiovanisce + bagno di vapore e doccia</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Riequilibrio Energetico</h4>
                    <p>Dell'aura e dei Chakra con Cristalloterapia</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Valutazione Energetica Vibrazionale</h4>
                    <p>Con rimozione manuale delle emozioni irrisolte + Meditazione</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 45 min | <Euro size={14}/> 60</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Massaggio Con Bamboo</h4>
                    <p>Bans-Malish</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h | <Euro size={14}/> 90</div>
                </div>
                <div className="price-item">
                  <div className="price-item-info">
                    <h4>Rakta Prakshalan</h4>
                    <p>Coppettazione indiana e cinese</p>
                  </div>
                  <div className="price-item-value"><Clock size={14}/> 1h 10m | <Euro size={14}/> 95</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-8 text-center text-sm info-note">
            <p>La grande peculiarità dei Massaggi Tradizionali Ayurveda è che la durata in termini di tempo, ed i prodotti usati durante i trattamenti possono variare a seconda delle esigenze personali e della costituzione fisica.</p>
          </div>

          {/* Deep Dive Sections */}
          <div className="detailed-treatments mt-8">
            <div className="treatment-detail">
              <div className="treatment-image">
                <img src={img1} alt="Snehana" />
              </div>
              <div className="treatment-content">
                <h3>SNEHANA <span className="subtitle">(SARVANGA ABHYANGAM)</span></h3>
                <p className="duration">Tutta la tradizione Ayurveda della Nostra Scuola racchiusa in un trattamento di massaggio (minimo 60 minuti).</p>
                <p>
                  Massaggio base totale con olio caldo: corpo, viso e testa ricavato dall’esperienza dei medici ayurveda indiani. Snehana è la più antica pratica ayurvedica di massaggio del corpo. Letteralmente significa ungere, accarezzare e comunicare con un altro essere.
                </p>
                <p>
                  Questo massaggio permette di espellere le tossine e gli elementi negativi che ostruiscono Il corretto funzionamento del corpo e della mente; lubrifica tutti i tessuti e pulisce tutti I canali del corpo attraverso cui fluiscono l’energia e gli elementi nutritivi. Il flusso di vitalità che si sprigiona grazie a curate manualità e digitopressioni, unito al flusso di sostanze oleose e nutritive, aiuta il corpo, la mente e lo spirito a ritrovare lo stato di equilibrio e di benessere.
                </p>
              </div>
            </div>

            <div className="treatment-detail reverse">
              <div className="treatment-image">
                <img src={img2} alt="Dosha Abhyangam" />
              </div>
              <div className="treatment-content">
                <h3>DOSHA ABHYANGAM</h3>
                <p className="duration">Scelta dettata da costituzione fisica individuale, massaggio personalizzato (circa 60 minuti).</p>
                <p>
                  Un aspetto fondamentale del trattamento ayurveda è che ogni individuo è un’unità irripetibile ed unica in natura e differente dagli altri dotato di una “SPECIFICA” costituzione individuale. Le molteplici funzioni del corpo sono governate da tre principi fondamentali chiamati DOSHA: Vata, Pitta e Kapha.
                </p>
                <ul className="dosha-list">
                  <li><strong>Vata (Aria-Etere):</strong> Massaggio rilassante con oli caldi e medicati, lento, profondo ed avvolgente per sciogliere tensioni.</li>
                  <li><strong>Pitta (Fuoco):</strong> Massaggio rinfrescante e detossinante, delicato e fresco per equilibrare disturbi digestivi e calmare la mente.</li>
                  <li><strong>Kapha (Terra-Acqua):</strong> Massaggio riducente/stimolante, deciso e ritmato con tecniche di linfodrenaggio e battiture per rimuovere stasi di liquidi.</li>
                </ul>
              </div>
            </div>

            <div className="treatment-detail">
              <div className="treatment-image">
                <img src={img3} alt="Neer Abhyangam" />
              </div>
              <div className="treatment-content">
                <h3>NEER – ABHYANGAM <span className="subtitle">(LINFODRENAGGIO)</span></h3>
                <p className="duration">Durata circa 60 minuti.</p>
                <p>
                  Massaggio Linfodrenante manuale solo corpo (non si manipolano il viso, il collo e testa), stimola e favorisce un buon flusso linfatico. Neer significa “fluido”. Neerabyangam è un trattamento delicato, che stimola il sistema linfatico ed elimina l’eccesso di fluido tossico.
                </p>
                <p>
                  Il trattamento è indicato a tutte le persone che tendono a trattenere le sostanze di scarto, in sovrappeso, ma anche dopo una malattia, per chi fa un lavoro sedentario, alle donne in gravidanza e dopo il parto. Alternandolo ai trattamenti tonificante (Kaphabyangam) e il massaggio a secco (Udgharshana), si crea un percorso eccellente e molto efficace per ridurre gli inestetismi della cellulite.
                </p>
              </div>
            </div>
            
            <div className="treatment-detail reverse">
              <div className="treatment-image">
                <img src={img5} alt="Ayurveda details" />
              </div>
              <div className="treatment-content">
                <h3>PERCORSI PERSONALIZZATI</h3>
                <p>
                  Siamo a tua disposizione per consigliarti il trattamento più adatto alle tue esigenze e alla tua costituzione. I nostri operatori ti guideranno nella scelta del massaggio o del rituale ayurvedico perfetto per te, per un'esperienza di benessere profondo e duraturo.
                </p>
                <a href="tel:+393405865469" className="btn btn-primary mt-4" style={{display: 'inline-flex', alignItems: 'center', gap: '10px'}}>
                  <Phone size={18} /> Prenota il tuo massaggio (3405865469)
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TrattamentiAyurveda;
