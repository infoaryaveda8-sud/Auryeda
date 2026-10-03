
import '../locations/Location.css';
import { Calendar, Award, CheckCircle } from 'lucide-react';

const Rituali = () => {
  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2022/11/Bamboo-massage.jpeg")' }}>
        <div className="container">
          <h1 className="h1">Formazione Certificata: Rituali Benessere</h1>
          <p>Bans Malish, Rakta Prakshalan e Ratna Abhyangam</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              
              <div className="course-block mb-5 pb-5" style={{ borderBottom: '1px solid var(--border)' }}>
                <h2 className="h2 text-primary">Bans Malish © / Bamboo Massage</h2>
                <h4 className="subtitle">Metodo Ayurvedico certificato ARYA VEDA</h4>
                
                <div className="info-cards mt-4 mb-4">
                  <div className="info-card">
                    <Calendar className="icon text-primary" size={32} />
                    <h3>Prossima Data</h3>
                    <p>8-9 Agosto 2026 (Milano)</p>
                  </div>
                  <div className="info-card">
                    <Award className="icon text-primary" size={32} />
                    <h3>Certificazione</h3>
                    <p>Utilizzabile Subito</p>
                  </div>
                </div>

                <div className="text-content">
                  <p>Il <strong>BANS - MALISH</strong> è una tecnica che impiega canne di bambù di varie dimensioni per stimolare i tessuti superficiali e profondi del corpo. Il Bamboo Massage è un massaggio davvero intenso che rilassa, tonifica e scolpisce tutti i muscoli del nostro corpo combinando le proprietà benefiche del bamboo a quelle degli oli essenziali e alla stimolazione del massaggio.</p>
                  <ul className="teacher-list mt-3">
                    <li><CheckCircle size={16} className="text-primary mr-2" /> Rilascio dispensa e certificazione idonea a svolgere il trattamento</li>
                    <li><CheckCircle size={16} className="text-primary mr-2" /> Kit bamboo sticks professionale su richiesta</li>
                  </ul>
                </div>
              </div>

              <div className="course-block mb-5 pb-5" style={{ borderBottom: '1px solid var(--border)' }}>
                <h2 className="h2 text-primary">Rakta Prakshalan © / Cupping Massage</h2>
                <h4 className="subtitle">Metodo Ayurvedico certificato ARYA VEDA</h4>
                
                <div className="info-cards mt-4 mb-4">
                  <div className="info-card">
                    <Calendar className="icon text-primary" size={32} />
                    <h3>Prossima Data</h3>
                    <p>5-6 Settembre 2026 (Milano)</p>
                  </div>
                </div>

                <div className="text-content">
                  <p><strong>RAKTA PRAKSHALAN</strong> è una pratica che prevede l’utilizzo di coppette per trattare vari tipi di dolori nel corpo: dolori al collo e alle spalle, mal di schiena, mal di testa, contratture, e ristagni di linfa. La cupping therapy o coppettazione si basa su un’antica tecnica della medicina orientale e mira a risolvere disturbi estetici o posturali.</p>
                  <ul className="teacher-list mt-3">
                    <li><CheckCircle size={16} className="text-primary mr-2" /> Rilascio dispensa e certificazione esclusiva Rakta Prakshalan</li>
                  </ul>
                </div>
              </div>

              <div className="course-block">
                <h2 className="h2 text-primary">Ratna Abhyangam © / Hot & Cold Stone Massage</h2>
                <h4 className="subtitle">L'energia delle pietre calde e fredde</h4>
                
                <div className="info-cards mt-4 mb-4">
                  <div className="info-card">
                    <Calendar className="icon text-primary" size={32} />
                    <h3>Prossima Data</h3>
                    <p>3-4 Ottobre 2026 (Milano)</p>
                  </div>
                </div>

                <div className="text-content">
                  <p><strong>RATNA ABHYANGAM</strong>: Il massaggio con le pietre laviche calde e le pietre fredde (marmo) è una tecnica straordinaria per sciogliere le tensioni muscolari profonde e riequilibrare l'energia del corpo attraverso la stimolazione dei chakra.</p>
                </div>
              </div>

            </div>
            
            <div className="sidebar">
              <div className="sidebar-widget bg-light p-4 rounded shadow-sm sticky" style={{ top: '100px' }}>
                <h4 className="h4 mb-3">Richiedi Informazioni o Iscriviti</h4>
                <p className="text-muted mb-4">Seleziona il corso di tuo interesse e richiedi i dettagli su costi e iscrizione.</p>
                <form className="contact-form">
                  <div className="form-group mb-3">
                    <input type="text" placeholder="Nome e Cognome" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <input type="email" placeholder="Email" className="form-control" />
                  </div>
                  <div className="form-group mb-3">
                    <select className="form-control">
                      <option>Bamboo Massage (Agosto)</option>
                      <option>Cupping Massage (Settembre)</option>
                      <option>Hot Stone Massage (Ottobre)</option>
                      <option>Tutti i corsi</option>
                    </select>
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

export default Rituali;
