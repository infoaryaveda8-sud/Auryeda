import { FileText, Mail, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './OperatoreOnline.css';

const OperatoreOnline = () => {
  return (
    <div className="online-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="online-hero">
        <div className="online-hero-content">
          <h1 className="online-title">Operatore Ayurveda Intensivo Online</h1>
          <p className="online-subtitle">Formazione a distanza (WIP)</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="online-section">
        <div className="online-container">
          <div className="wip-card">
            <AlertCircle size={60} className="wip-icon" />
            <h2>Pagina in Allestimento</h2>
            <p className="wip-message">
              Al momento questa Pagina è incompleta ci dispiace ma per le informazioni a riguardo la danza del ventre clicate il link di seguito. per maggiori informazioni contantateci via la nostra pagina Contatti.
            </p>
            
            <div className="wip-actions">
              <p className="namaste-text">Namastè</p>
              <h3 className="click-below-text">CLICCA QUI SOTTO!</h3>
              
              <a 
                href="https://corsimassaggiomilano.it/wp-content/uploads/2026/07/Formazione-online-2026-1.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary wip-btn"
              >
                <FileText size={20} className="btn-icon" />
                Formazione online 2026
              </a>

              <Link to="/contact" className="btn btn-outline wip-btn mt-3">
                <Mail size={20} className="btn-icon" />
                Pagina Contatti
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OperatoreOnline;
