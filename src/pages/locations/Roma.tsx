
import './Location.css';
import { Calendar, MapPin, Award } from 'lucide-react';

const Roma = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2026/08/cropped-logo-aryaveda.jpeg")' }}>
        <div className="container">
          <h1 className="h1">Accademia Ayurveda a Roma</h1>
          <p>Percorso Internazionale Triennale nella Capitale</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="h2 text-primary">Percorso Internazionale Triennale</h2>
              <h4 className="subtitle">LA SCIENZA DELLA VITA AL CENTRO DI ROMA</h4>
              
              <div className="text-content mt-4">
                <p>L'Accademia Ayurveda Aryaveda è orgogliosa di annunciare il percorso internazionale triennale nella prestigiosa sede di Roma. Un programma di studi intensivo che unisce l'antica sapienza indiana con i più moderni approcci didattici olistici.</p>
                <p>Gli studenti avranno l'opportunità unica di studiare con maestri internazionali e medici ayurvedici (Vaidya) direttamente dal Kerala, oltre al nostro stimato corpo docenti italiano.</p>
              </div>

              <div className="info-cards mt-4">
                <div className="info-card">
                  <Calendar className="icon text-primary" size={32} />
                  <h3>Durata</h3>
                  <p>Triennale Intensivo</p>
                </div>
                <div className="info-card">
                  <MapPin className="icon text-primary" size={32} />
                  <h3>Sede</h3>
                  <p>Roma Capitale</p>
                </div>
                <div className="info-card">
                  <Award className="icon text-primary" size={32} />
                  <h3>Certificazione</h3>
                  <p>Riconoscimento Internazionale</p>
                </div>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm">
                <h4 className="h4 mb-3">Richiedi Informazioni</h4>
                <p className="text-muted mb-4">Iscriviti ora al percorso triennale di Roma.</p>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Roma;
