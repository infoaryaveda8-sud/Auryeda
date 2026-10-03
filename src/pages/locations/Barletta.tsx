
import './Location.css';
import { Calendar, MapPin, Award } from 'lucide-react';

const Barletta = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2026/08/cropped-logo-aryaveda.jpeg")' }}>
        <div className="container">
          <h1 className="h1">Accademia Ayurveda a Barletta</h1>
          <p>Percorso Professionale Completo in Puglia</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="h2 text-primary">Formazione Olistica e Ayurveda nel Sud Italia</h2>
              <h4 className="subtitle">DIPLOMA RICONOSCIUTO NAZIONALMENTE</h4>
              
              <div className="text-content mt-4">
                <p>La nostra Accademia porta la tradizione millenaria dell'Ayurveda anche in Puglia, a Barletta, per offrire una formazione professionale a tutti coloro che risiedono nel Sud Italia e desiderano intraprendere questa nobile professione.</p>
                <p>Il programma segue gli stessi elevati standard della sede centrale di Milano, garantendo una preparazione teorica e pratica eccellente, guidata dagli stessi docenti esperti e Vaidya.</p>
              </div>

              <div className="info-cards mt-4">
                <div className="info-card">
                  <Calendar className="icon text-primary" size={32} />
                  <h3>Durata</h3>
                  <p>Weekend Intensivi</p>
                </div>
                <div className="info-card">
                  <MapPin className="icon text-primary" size={32} />
                  <h3>Sede</h3>
                  <p>Barletta (BT), Puglia</p>
                </div>
                <div className="info-card">
                  <Award className="icon text-primary" size={32} />
                  <h3>Certificazione</h3>
                  <p>Diploma ASI - CONI</p>
                </div>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm">
                <h4 className="h4 mb-3">Richiedi Informazioni</h4>
                <p className="text-muted mb-4">Vuoi conoscere le prossime date a Barletta? Contattaci.</p>
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

export default Barletta;
