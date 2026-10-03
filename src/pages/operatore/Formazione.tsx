import '../locations/Location.css';
import { Calendar, Award, CheckCircle } from 'lucide-react';

const Formazione = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2018/10/IMGP8366.jpg")' }}>
        <div className="container">
          <h1 className="h1">Formazione Swastya & Saundarya</h1>
          <p>Corsi e Rituali di Estetica Ayurvedica</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="h2 text-primary">La Bellezza che Nasce dall'Equilibrio</h2>
              <h4 className="subtitle">Swastya (Salute) e Saundarya (Bellezza)</h4>
              
              <div className="text-content mt-4">
                <p>Il concetto di bellezza in Ayurveda non si ferma alla superficie della pelle. La vera bellezza è il riflesso di una salute perfetta, di un metabolismo efficiente e di una mente serena. I nostri corsi di <strong>Estetica Ayurvedica</strong> ti insegnano a trattare gli inestetismi lavorando alla radice dello squilibrio.</p>
                <p>Apprenderai l'uso di polveri di erbe (Udwarthana), impacchi (Lepa), peeling naturali e massaggi linfodrenanti specifici dell'antica tradizione.</p>
              </div>

              <div className="info-cards mt-4">
                <div className="info-card">
                  <Calendar className="icon text-primary" size={32} />
                  <h3>Frequenza</h3>
                  <p>Moduli Intensivi (Online / In Presenza)</p>
                </div>
                <div className="info-card">
                  <Award className="icon text-primary" size={32} />
                  <h3>Certificazione</h3>
                  <p>Attestato ARYA VEDA</p>
                </div>
              </div>

              <div className="course-block mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <h3 className="h3 text-primary mb-3">Cosa Imparerai</h3>
                <ul className="teacher-list">
                  <li><CheckCircle size={16} className="text-primary mr-2" /> <strong>Mukha Abhyanga:</strong> Il massaggio facciale ayurvedico anti-age e lifting.</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> <strong>Udwarthana:</strong> Trattamenti con polveri d'erbe per cellulite e adipe.</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> <strong>Shiro Abhyanga:</strong> Massaggio alla testa, collo e spalle per tensioni e salute del cuoio capelluto.</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> <strong>Padabhyanga:</strong> Trattamento dei piedi e stimolazione dei punti Marma.</li>
                </ul>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm">
                <h4 className="h4 mb-3">Iscrizione al Corso</h4>
                <p className="text-muted mb-4">Ricevi il programma dettagliato, il calendario delle prossime date e i costi di partecipazione.</p>
                <form className="contact-form">
                  <div className="form-group mb-3">
                    <input type="text" placeholder="Nome e Cognome" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" placeholder="Email" className="form-control" />
                  </div>
                  <button className="btn btn-primary w-full mt-2">Ricevi Info</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formazione;
