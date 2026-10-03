import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoImg from '../assets/logo-arya-bianco.jpg.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Janani-style Golden Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-links" style={{ fontSize: '0.8rem', fontWeight: 500, opacity: 0.9 }}>
            <span style={{ cursor: 'pointer' }}>Iscriviti alla Newsletter</span>
            <span style={{ cursor: 'pointer' }}>Multimedia</span>
            <span style={{ cursor: 'pointer' }}>Blog</span>
            <Link to="/contact" style={{ cursor: 'pointer', color: 'inherit', textDecoration: 'none' }}>Contatti</Link>
          </div>
          <div className="top-bar-socials">
            <span style={{ cursor: 'pointer', fontSize: '1rem' }}><FaFacebookF /></span>
            <span style={{ cursor: 'pointer', fontSize: '1.1rem' }}><FaLinkedinIn /></span>
            <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}><FaYoutube /></span>
            <span style={{ cursor: 'pointer', fontSize: '1.1rem' }}><FaInstagram /></span>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>|</span>
            <Phone size={14} style={{ cursor: 'pointer' }} />
            <Mail size={14} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      {/* Janani-style Main Header (Logo Left, Links Right) */}
      <header className="main-header" style={{ padding: isScrolled ? '0' : '5px 0', boxShadow: isScrolled ? 'var(--shadow-md)' : 'none', borderBottom: '1px solid #eee' }}>
        <div className="container header-content">
          {/* Logo on the left */}
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoImg} alt="Arya Veda Logo" style={{ height: '70px', width: 'auto', borderRadius: '4px' }} />
          </div>
          
          {/* Nav links on the right - split into 4 top, 4 bottom */}
          <nav className="main-nav" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'flex-end', marginLeft: 'auto' }}>
            {/* Top Row: 4 links */}
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              <Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`} style={{ fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>HOME</Link>
              <Link to="/chi-siamo" className={`nav-link${location.pathname === '/chi-siamo' ? ' active' : ''}`} style={{ fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>CHI SIAMO</Link>
              <Link to="/corsi-viaggi" className={`nav-link${location.pathname === '/corsi-viaggi' ? ' active' : ''}`} style={{ fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>CORSI & VIAGGI IN INDIA 2026/27</Link>
              <div className="nav-dropdown-container" style={{ position: 'relative' }}>
                <Link to="/accademia" className={`nav-link${location.pathname === '/accademia' ? ' active' : ''}`} style={{ fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>ACCADEMIA AYURVEDA</Link>
                <div className="nav-dropdown">
                  <Link to="/milano">MILANO</Link>
                  <Link to="/reggio-emilia">REGGIO EMILIA</Link>
                </div>
              </div>
            </div>
            {/* Bottom Row: 4 links */}
            <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
              <div className="nav-dropdown-container" style={{ position: 'relative' }}>
                <Link to="/operatore-online" className={`nav-link${location.pathname === '/operatore-online' ? ' active' : ''}`} style={{ fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>OPERATORE AYURVEDA INTENSIVO ONLINE (WIP)</Link>
                <div className="nav-dropdown">
                  <Link to="/formazione-swastya">FORMAZIONE SWASTYA & SAUNDARYA (WIP)</Link>
                </div>
              </div>
              <div className="nav-dropdown-container" style={{ position: 'relative' }}>
                <a href="#" className="nav-link" style={{ fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>VISITE AYURVEDA E TERAPIE</a>
                <div className="nav-dropdown">
                  <a href="#">CONSULTI DELLA DR.SSA SADBHAWNA CON LA TECNICA AYURVEDA DEL NADI PARIKSHA</a>
                  <a href="#">TRATTAMENTI AYURVEDA</a>
                </div>
              </div>
              <Link to="/contact" className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`} style={{ fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>CONTATTI</Link>
              <a href="#" className="nav-link" style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', whiteSpace: 'nowrap' }}>PRAKRITI TEST</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
