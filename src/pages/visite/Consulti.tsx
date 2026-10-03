import '../locations/Location.css';
import { Calendar, CheckCircle } from 'lucide-react';

const Consulti = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2018/10/013626bbba1bc95188418e6300655ad6f2f08621ae-e1540982037218.jpg")' }}>
        <div className="container">
          <h1 className="h1">Consulti Nadi Pariksha</h1>
          <p>Valutazione Ayurvedica con la Dr.ssa Sadbhawna</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <h2 className="h2 text-primary">Lettura del Polso (Nadi Pariksha)</h2>
              <h4 className="subtitle">Scopri la tua vera Costituzione (Prakriti)</h4>
              
              <div className="text-content mt-4">
                <p>Il <strong>Nadi Pariksha</strong> è l'antica e sofisticata tecnica di diagnosi ayurvedica basata sull'ascolto del polso. Attraverso il tocco delicato di tre dita sull'arteria radiale, il Medico Ayurvedico (Vaidya) è in grado di "ascoltare" il battito e decodificare lo stato dei tre Dosha: Vata, Pitta e Kapha.</p>
                <p>Presso il nostro centro, i consulti sono tenuti dalla <strong>Dr.ssa Sadbhawna Bhardwaj</strong>, medico ayurvedico laureata in India. La consultazione permette di individuare non solo gli squilibri presenti, ma anche le potenziali tendenze a future disarmonie, permettendo un approccio profondamente preventivo.</p>
              </div>

              <div className="course-block mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <h3 className="h3 text-primary mb-3">Cosa comprende il Consulto?</h3>
                <ul className="teacher-list">
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Valutazione della Costituzione Individuale (Prakriti).</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Individuazione degli squilibri energetici (Vikriti).</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Consigli alimentari personalizzati e stile di vita.</li>
                  <li><CheckCircle size={16} className="text-primary mr-2" /> Indicazioni su erbe ayurvediche, trattamenti e routine quotidiana.</li>
                </ul>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm">
                <h4 className="h4 mb-3">Prenota il tuo Consulto</h4>
                <div className="info-card mb-4" style={{ background: '#fff', padding: '15px', borderRadius: '8px' }}>
                  <Calendar className="icon text-primary mb-2" size={24} />
                  <h5 style={{ margin: '5px 0' }}>Consulti su Appuntamento</h5>
                  <p className="text-muted" style={{ fontSize: '0.9rem' }}>Milano, Via Teocrito 50</p>
                </div>
                <form className="contact-form">
                  <div className="form-group mb-3">
                    <input type="text" placeholder="Nome e Cognome" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="tel" placeholder="Telefono" className="form-control" />
                  </div>
                  <button className="btn btn-primary w-full mt-2">Richiedi Appuntamento</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulti;
