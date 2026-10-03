import '../locations/Location.css';
import { Calendar } from 'lucide-react';

const Trattamenti = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2018/10/IMGP8348.jpg")' }}>
        <div className="container">
          <h1 className="h1">Trattamenti Ayurveda Benessere</h1>
          <p>Ayurveda L.A.B. - Laboratorio Ayurvedico di Benessere</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="h2 text-primary">I Benefici del Massaggio Ayurveda</h2>
              <h4 className="subtitle">Equilibrio di Corpo, Mente e Spirito</h4>
              
              <div className="text-content mt-4 mb-5">
                <p>L’ayurveda è insieme una filosofia, una disciplina di vita e una medicina. Si occupa di tutti gli aspetti del benessere, quello fisico, quello psicologico e quello emotivo. Il concetto di equilibrio espresso dall’ayurveda comporta il perfetto funzionamento dei vari sistemi ed organi, della psiche e dello spirito.</p>
                <p>Il Centro ARYA VEDA asd, dalla lunga esperienza di formazione, ha creato <strong>L.A.B.: Laboratorio Ayurvedico di Benessere</strong>. I nostri migliori Operatori Accreditati & Certificati propongono trattamenti e massaggi personalizzati nello stile dell’approccio olistico dell'Antica Medicina Indiana.</p>
              </div>

              <div className="course-block mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <h3 className="h3 text-primary mb-4">I Nostri Trattamenti</h3>
                
                <div className="treatment-item mb-4">
                  <h4 className="h4" style={{ color: 'var(--secondary)' }}>Abhyanga (Massaggio completo)</h4>
                  <p>È il tradizionale massaggio ayurvedico su tutto il corpo con oli caldi erborizzati (Tailam). Migliora la circolazione, rilassa profondamente il sistema nervoso, nutre i tessuti e promuove il ringiovanimento. Viene eseguito in base alla costituzione e agli squilibri (Vata, Pitta, Kapha).</p>
                </div>

                <div className="treatment-item mb-4">
                  <h4 className="h4" style={{ color: 'var(--secondary)' }}>Shirodhara</h4>
                  <p>Una delle terapie più profonde e rilassanti. Consiste nel versare un flusso continuo e sottile di olio caldo sulla fronte (terzo occhio). È eccellente per calmare la mente, combattere stress, insonnia, ansia e stanchezza mentale profonda.</p>
                </div>

                <div className="treatment-item mb-4">
                  <h4 className="h4" style={{ color: 'var(--secondary)' }}>Udwarthana</h4>
                  <p>Un vigoroso massaggio con polveri di erbe e spezie. È fortemente attivante, riduce la ritenzione idrica, stimola il metabolismo e aiuta a ridurre il tessuto adiposo (eccellente per il dosha Kapha). Lascia la pelle liscia e luminosa.</p>
                </div>

                <div className="treatment-item mb-4">
                  <h4 className="h4" style={{ color: 'var(--secondary)' }}>Pindasweda</h4>
                  <p>Trattamento eseguito tamponando il corpo con fagottini di erbe caldi. Molto efficace per dolori articolari, tensioni muscolari, artrite e contratture. Favorisce una forte sudorazione che aiuta a eliminare le tossine.</p>
                </div>

              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm sticky" style={{ top: '100px' }}>
                <h4 className="h4 mb-3">Prenota il tuo Trattamento</h4>
                <div className="info-card mb-4" style={{ background: '#fff', padding: '15px', borderRadius: '8px' }}>
                  <Calendar className="icon text-primary mb-2" size={24} />
                  <h5 style={{ margin: '5px 0' }}>Ayurveda L.A.B. Milano</h5>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Siamo in Via Teocrito 50, Milano.</p>
                </div>
                <form className="contact-form">
                  <div className="form-group mb-3">
                    <input type="text" placeholder="Nome e Cognome" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="tel" placeholder="Telefono" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <select className="form-control">
                      <option>Abhyanga</option>
                      <option>Shirodhara</option>
                      <option>Udwarthana</option>
                      <option>Pindasweda</option>
                      <option>Non lo so, consigliami tu</option>
                    </select>
                  </div>
                  <button className="btn btn-primary w-full mt-2">Richiedi Prenotazione</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trattamenti;
