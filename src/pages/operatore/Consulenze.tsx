import '../locations/Location.css';
import { Award, CheckCircle, MapPin } from 'lucide-react';

const Consulenze = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2018/10/IMGP8348.jpg")' }}>
        <div className="container">
          <h1 className="h1">Consulenze Ayurveda per Centri Estetici</h1>
          <p>Innovazione Olistica per SPA e Centri Benessere</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="h2 text-primary">Estetica Ayurvedica Professionale</h2>
              <h4 className="subtitle">L'Ayurveda entra nei migliori Centri Estetici</h4>
              
              <div className="text-content mt-4">
                <p>Proponiamo consulenze per l'integrazione di rituali ayurvedici esclusivi all'interno di Centri Estetici e SPA. La nostra formazione porta la saggezza millenaria dell'Ayurveda al servizio della bellezza contemporanea, creando protocolli di lavoro innovativi per gli operatori del settore.</p>
                <p>I nostri esperti vi guideranno nell'apprendimento di tecniche di massaggio, utilizzo di oli erborizzati specifici (Tailam) e diagnosi degli inestetismi secondo i biotipi (Dosha) Vata, Pitta e Kapha.</p>
              </div>

              <div className="info-cards mt-4">
                <div className="info-card">
                  <MapPin className="icon text-primary" size={32} />
                  <h3>Consulenza</h3>
                  <p>Presso il tuo Centro</p>
                </div>
                <div className="info-card">
                  <Award className="icon text-primary" size={32} />
                  <h3>Protocolli</h3>
                  <p>Esclusivi e Certificati</p>
                </div>
              </div>

              <div className="course-block mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <h3 className="h3 text-primary mb-3">Vantaggi per il tuo Centro</h3>
                <ul className="teacher-list">
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Differenziazione dei servizi offerti rispetto alla concorrenza.</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Formazione tecnica di alto livello per il tuo staff.</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Fornitura di prodotti ayurvedici originali di alta qualità.</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Protocolli mirati per cellulite, ritenzione idrica e anti-age.</li>
                </ul>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm">
                <h4 className="h4 mb-3">Richiedi un Preventivo</h4>
                <p className="text-muted mb-4">Compila il form per essere contattato da un nostro esperto e valutare l'inserimento dell'Ayurveda nel tuo Centro.</p>
                <form className="contact-form">
                  <div className="form-group mb-3">
                    <input type="text" placeholder="Nome del Centro / Referente" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" placeholder="Email aziendale" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="tel" placeholder="Telefono" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <textarea placeholder="Di quali servizi necessiti?" className="form-control" rows={4}></textarea>
                  </div>
                  <button className="btn btn-primary w-full mt-2">Invia Richiesta</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulenze;
