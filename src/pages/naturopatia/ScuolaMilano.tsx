
import '../locations/Location.css';
import { Calendar, MapPin, Award } from 'lucide-react';

const ScuolaMilano = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2026/08/cropped-logo-aryaveda.jpeg")' }}>
        <div className="container">
          <h1 className="h1">Scuola di Naturopatia a Milano</h1>
          <p>Percorso Formativo in Naturopatia Orientale e Ayurvedica</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="h2 text-primary">Diventa Naturopata Olistico</h2>
              <h4 className="subtitle">FORMAZIONE PROFESSIONALE CERTIFICATA</h4>
              
              <div className="text-content mt-4">
                <p>La <strong>Naturopatia Ayurvedica</strong> integra i principi dell'antica scienza indiana con le moderne conoscenze olistiche, offrendo un percorso formativo unico nel suo genere. La nostra Scuola di Milano prepara professionisti in grado di valutare gli squilibri energetici e costituzionali, proponendo rimedi naturali, stili di vita appropriati e trattamenti specifici.</p>
                <p>Il percorso di studi approfondisce discipline quali Fitoterapia Ayurvedica, Alimentazione Energetica, tecniche di purificazione e valutazione olistica del cliente.</p>
              </div>

              <div className="info-cards mt-4">
                <div className="info-card">
                  <Calendar className="icon text-primary" size={32} />
                  <h3>Frequenza</h3>
                  <p>Weekend Intensivi</p>
                </div>
                <div className="info-card">
                  <MapPin className="icon text-primary" size={32} />
                  <h3>Sede</h3>
                  <p>Milano Centrale</p>
                </div>
                <div className="info-card">
                  <Award className="icon text-primary" size={32} />
                  <h3>Titolo</h3>
                  <p>Naturopata Olistico</p>
                </div>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm">
                <h4 className="h4 mb-3">Richiedi il Piano di Studi</h4>
                <p className="text-muted mb-4">Compila il form per ricevere la brochure informativa con il programma dettagliato della Scuola di Naturopatia.</p>
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
                  <button className="btn btn-primary w-full mt-2">Scarica Programma</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScuolaMilano;
