import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Dropdown states
  const [ayurvedaOpen, setAyurvedaOpen] = useState(false);
  const [naturopatiaOpen, setNaturopatiaOpen] = useState(false);
  const [operatoreOpen, setOperatoreOpen] = useState(false);
  const [visiteOpen, setVisiteOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Aryaveda A.C.</span>
        </Link>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" translate="no" className="nav-link notranslate" onClick={() => setIsOpen(false)}><span translate="no" className="notranslate">Home</span></Link>
          <Link to="/chi-siamo" className="nav-link" onClick={() => setIsOpen(false)}>Chi siamo</Link>
          <Link to="/corsi" className="nav-link" onClick={() => setIsOpen(false)}>Corsi & Viaggi</Link>
          
          <div className="nav-dropdown" onMouseEnter={() => setAyurvedaOpen(true)} onMouseLeave={() => setAyurvedaOpen(false)}>
            <span className="nav-link dropdown-toggle">
              Accademia Ayurveda <ChevronDown size={16} />
            </span>
            {ayurvedaOpen && (
              <div className="dropdown-menu">
                <Link to="/accademia-ayurveda/milano" className="dropdown-link" onClick={() => setIsOpen(false)}>Milano</Link>
                <Link to="/accademia-ayurveda/reggio-emilia" className="dropdown-link" onClick={() => setIsOpen(false)}>Reggio Emilia</Link>
                <Link to="/accademia-ayurveda/barletta" className="dropdown-link" onClick={() => setIsOpen(false)}>Barletta</Link>
                <Link to="/accademia-ayurveda/roma" className="dropdown-link" onClick={() => setIsOpen(false)}>Roma</Link>
              </div>
            )}
          </div>
          
          <div className="nav-dropdown" onMouseEnter={() => setNaturopatiaOpen(true)} onMouseLeave={() => setNaturopatiaOpen(false)}>
            <span className="nav-link dropdown-toggle">
              Accademia Naturopatia <ChevronDown size={16} />
            </span>
            {naturopatiaOpen && (
              <div className="dropdown-menu">
                <Link to="/accademia-naturopatia/rituali" className="dropdown-link" onClick={() => setIsOpen(false)}>Rituali Benessere</Link>
                <Link to="/accademia-naturopatia/milano" className="dropdown-link" onClick={() => setIsOpen(false)}>Scuola a Milano</Link>
              </div>
            )}
          </div>
          
          <div className="nav-dropdown" onMouseEnter={() => setOperatoreOpen(true)} onMouseLeave={() => setOperatoreOpen(false)}>
            <span className="nav-link dropdown-toggle">
              Operatore Ayurveda <ChevronDown size={16} />
            </span>
            {operatoreOpen && (
              <div className="dropdown-menu">
                <Link to="/operatore/consulenze" className="dropdown-link" onClick={() => setIsOpen(false)}>Consulenze Centri Estetici</Link>
                <Link to="/operatore/formazione" className="dropdown-link" onClick={() => setIsOpen(false)}>Formazione Swastya</Link>
              </div>
            )}
          </div>
          
          <div className="nav-dropdown" onMouseEnter={() => setVisiteOpen(true)} onMouseLeave={() => setVisiteOpen(false)}>
            <span className="nav-link dropdown-toggle">
              Visite e Terapie <ChevronDown size={16} />
            </span>
            {visiteOpen && (
              <div className="dropdown-menu">
                <Link to="/visite/consulti" className="dropdown-link" onClick={() => setIsOpen(false)}>Consulti Nadi Pariksha</Link>
                <Link to="/visite/trattamenti" className="dropdown-link" onClick={() => setIsOpen(false)}>Trattamenti Ayurveda</Link>
              </div>
            )}
          </div>
          
          <Link to="/prakriti-test" className="nav-link" onClick={() => setIsOpen(false)}>Prakriti Test</Link>
          <Link to="/contatti" className="nav-link" onClick={() => setIsOpen(false)}>Contatti</Link>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
