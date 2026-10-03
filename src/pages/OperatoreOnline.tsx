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
              Al momento questa pagina è in fase di aggiornamento. Ci dispiace per il disagio. 
              Tuttavia, potete scaricare tutte le informazioni relative al corso tramite il pulsante qui sotto.
            </p>
            
            <div className="wip-actions">
              <a 
                href="https://corsimassaggiomilano.it/wp-content/uploads/2026/07/Formazione-online-2026-1.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary wip-btn"
              >
                <FileText size={20} className="btn-icon" />
                Scarica Formazione Online 2026 (PDF)
              </a>

              <Link to="/contact" className="btn btn-outline wip-btn mt-3">
                <Mail size={20} className="btn-icon" />
                Contattaci per maggiori info
              </Link>
            </div>

            <p className="namaste-text">Namastè 🙏</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OperatoreOnline;
