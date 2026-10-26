import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Globe, Menu, X, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import logoImg from '../assets/logo-arya-bianco.jpg.jpeg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<'it' | 'en'>('it');
  const location = useLocation();

  const getLanguage = (): 'it' | 'en' => {
    const match = document.cookie.match(/(^|;)\s*googtrans=([^;]+)/);
    if (match) {
      const val = decodeURIComponent(match[2]);
      if (val.endsWith('/en')) return 'en';
    }
    return 'it';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setCurrentLang(getLanguage());
  }, []);

  const toggleLanguage = () => {
    const isEn = getLanguage() === 'en';
    const targetLang = isEn ? 'it' : 'en';

    const setTransCookie = (val: string) => {
      document.cookie = `googtrans=${val}; path=/`;
      const hostname = window.location.hostname;
      if (hostname && hostname.includes('.') && !/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
        const rootDomain = hostname.replace(/^www\./, '');
        document.cookie = `googtrans=${val}; path=/; domain=.${rootDomain}`;
        document.cookie = `googtrans=${val}; path=/; domain=${hostname}`;
      }
    };

    const deleteTransCookie = () => {
      const expire = 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; ${expire}`;
      const hostname = window.location.hostname;
      if (hostname && hostname.includes('.') && !/^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
        const rootDomain = hostname.replace(/^www\./, '');
        document.cookie = `googtrans=; ${expire} domain=.${rootDomain};`;
        document.cookie = `googtrans=; ${expire} domain=${hostname};`;
      }
    };

    if (targetLang === 'it') {
      deleteTransCookie();
      setTransCookie('/it/it');
    } else {
      setTransCookie('/it/en');
    }

    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = targetLang;
      select.dispatchEvent(new Event('change'));
    }

    window.location.reload();
  };

  const toggleMobileSubmenu = (menuName: string) => {
    setMobileSubmenu(prev => (prev === menuName ? null : menuName));
  };

  return (
    <>
      {/* Janani-style Golden Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-links">
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contatti</Link>
          </div>
          <div className="top-bar-socials">
            <a 
              href="https://www.facebook.com/profile.php?id=61593292162520" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link-item"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://www.linkedin.com/in/dr-meenu-sadbhawna-bhardwaj-47703447" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link-item"
              title="LinkedIn - Dr. Meenu Sadbhawna Bhardwaj"
            >
              <FaLinkedinIn />
            </a>
            <a 
              href="https://www.youtube.com/@SadbhawnaBhardwaj-n3o" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link-item"
              title="YouTube"
            >
              <FaYoutube />
            </a>
            <a 
              href="https://www.instagram.com/sadbhawna_bhardwaj?dlrf=Z2YybWhrZHRkNTdj" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link-item"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <span className="top-bar-sep">|</span>
            <a href="tel:+393405865469" className="social-link-item" title="+39 340 586 5469">
              <Phone size={14} />
            </a>
            <a href="mailto:infoaryaveda8@gmail.com" className="social-link-item" title="infoaryaveda8@gmail.com">
              <Mail size={14} />
            </a>
            <span className="top-bar-sep">|</span>
            <button 
              type="button" 
              onClick={toggleLanguage} 
              className="top-bar-lang-btn notranslate"
              translate="no"
              aria-label={currentLang === 'it' ? 'Traduci in Inglese' : 'Passa alla lingua Italiana'}
              title={currentLang === 'it' ? 'Passa all\'Inglese' : 'Passa all\'Italiano'}
            >
              <Globe size={14} />
              <span className={`lang-tag ${currentLang === 'en' ? 'lang-active' : ''}`}>EN</span>
              <span className="lang-sep">/</span>
              <span className={`lang-tag ${currentLang === 'it' ? 'lang-active' : ''}`}>IT</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-content">
          {/* Logo on the left */}
          <Link to="/" className="header-logo-link" aria-label="Arya Veda Home">
            <img src={logoImg} alt="Arya Veda Logo" className="header-logo-img" />
          </Link>

          {/* Desktop Nav links on the right */}
          <nav className="desktop-nav" aria-label="Navigazione principale">
            {/* Top Row: 4 links */}
            <div className="nav-row nav-row-top">
              <Link 
                to="/" 
                className={`nav-link${location.pathname === '/' ? ' active' : ''}`}
              >
                <span>HOME</span>
              </Link>
              <Link 
                to="/chi-siamo" 
                className={`nav-link${location.pathname === '/chi-siamo' ? ' active' : ''}`}
              >
                CHI SIAMO
              </Link>
              <Link 
                to="/corsi-viaggi" 
                className={`nav-link${location.pathname === '/corsi-viaggi' ? ' active' : ''}`}
              >
                CORSI & VIAGGI IN INDIA 2026/27
              </Link>
              <div className="nav-dropdown-container">
                <Link 
                  to="/accademia" 
                  className={`nav-link${location.pathname === '/accademia' ? ' active' : ''}`}
                >
                  ACCADEMIA AYURVEDA <ChevronDown size={13} style={{ display: 'inline', marginLeft: '3px' }} />
                </Link>
                <div className="nav-dropdown nav-dropdown-right">
                  <Link to="/milano">MILANO</Link>
                  <Link to="/reggio-emilia">REGGIO EMILIA</Link>
                </div>
              </div>
            </div>

            {/* Bottom Row: 5 links */}
            <div className="nav-row nav-row-bottom">
              <div className="nav-dropdown-container">
                <Link 
                  to="/operatore-online" 
                  className={`nav-link${location.pathname === '/operatore-online' ? ' active' : ''}`}
                >
                  OPERATORE ONLINE (WIP) <ChevronDown size={13} style={{ display: 'inline', marginLeft: '3px' }} />
                </Link>
                <div className="nav-dropdown">
                  <Link to="/formazione-swastya">FORMAZIONE SWASTYA & SAUNDARYA (WIP)</Link>
                </div>
              </div>

              <div className="nav-dropdown-container">
                <Link 
                  to="/visite-terapie" 
                  className={`nav-link${location.pathname === '/visite-terapie' ? ' active' : ''}`}
                >
                  VISITE & TERAPIE <ChevronDown size={13} style={{ display: 'inline', marginLeft: '3px' }} />
                </Link>
                <div className="nav-dropdown">
                  <Link to="/consulti-sadbhawna">CONSULTI NADI PARIKSHA</Link>
                  <Link to="/trattamenti-ayurveda">TRATTAMENTI AYURVEDA</Link>
                </div>
              </div>

              <Link 
                to="/blog" 
                className={`nav-link${location.pathname === '/blog' ? ' active' : ''}`}
              >
                BLOG
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link${location.pathname === '/contact' ? ' active' : ''}`}
              >
                CONTATTI
              </Link>
              <Link 
                to="/prakriti-test" 
                className={`nav-link nav-link-highlight${location.pathname === '/prakriti-test' ? ' active' : ''}`}
              >
                PRAKRITI TEST
              </Link>
            </div>
          </nav>

          {/* Mobile Right Controls: Language Switcher & Hamburger Toggle Button */}
          <div className="mobile-header-controls">
            <button 
              type="button" 
              onClick={toggleLanguage} 
              className="mobile-lang-btn notranslate"
              translate="no"
              title={currentLang === 'it' ? 'Passa alla lingua Inglese' : 'Passa alla lingua Italiana'}
              aria-label="Cambia Lingua"
            >
              <Globe size={16} />
              <span>
                <span className={`lang-tag ${currentLang === 'en' ? 'lang-active' : ''}`}>EN</span>
                <span className="lang-sep">/</span>
                <span className={`lang-tag ${currentLang === 'it' ? 'lang-active' : ''}`}>IT</span>
              </span>
            </button>
            <button 
              type="button" 
              className="mobile-hamburger-btn" 
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <aside 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Menu Mobile"
      >
        <div className="mobile-drawer-header">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={logoImg} alt="Arya Veda Logo" className="mobile-drawer-logo" />
          </Link>
          <button 
            type="button" 
            className="mobile-drawer-close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Chiudi menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <Link 
            to="/" 
            className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link 
            to="/chi-siamo" 
            className={`mobile-nav-link ${location.pathname === '/chi-siamo' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Chi Siamo
          </Link>

          <Link 
            to="/corsi-viaggi" 
            className={`mobile-nav-link ${location.pathname === '/corsi-viaggi' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Corsi & Viaggi in India 2026/27
          </Link>

          {/* Submenu 1: Accademia Ayurveda */}
          <div className="mobile-submenu-group">
            <div className="mobile-submenu-header">
              <Link 
                to="/accademia" 
                className={`mobile-nav-link ${location.pathname === '/accademia' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Accademia Ayurveda
              </Link>
              <button 
                type="button" 
                className="mobile-submenu-toggle" 
                onClick={() => toggleMobileSubmenu('accademia')}
                aria-label="Apri sottomenu Accademia Ayurveda"
              >
                <ChevronDown size={18} className={mobileSubmenu === 'accademia' ? 'rotated' : ''} />
              </button>
            </div>
            <div className={`mobile-submenu-items ${mobileSubmenu === 'accademia' ? 'open' : ''}`}>
              <Link to="/milano" onClick={() => setMobileMenuOpen(false)}>• Sede Milano</Link>
              <Link to="/reggio-emilia" onClick={() => setMobileMenuOpen(false)}>• Sede Reggio Emilia</Link>
            </div>
          </div>

          {/* Submenu 2: Operatore Online */}
          <div className="mobile-submenu-group">
            <div className="mobile-submenu-header">
              <Link 
                to="/operatore-online" 
                className={`mobile-nav-link ${location.pathname === '/operatore-online' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Operatore Ayurveda Online (WIP)
              </Link>
              <button 
                type="button" 
                className="mobile-submenu-toggle" 
                onClick={() => toggleMobileSubmenu('operatore')}
                aria-label="Apri sottomenu Operatore Online"
              >
                <ChevronDown size={18} className={mobileSubmenu === 'operatore' ? 'rotated' : ''} />
              </button>
            </div>
            <div className={`mobile-submenu-items ${mobileSubmenu === 'operatore' ? 'open' : ''}`}>
              <Link to="/formazione-swastya" onClick={() => setMobileMenuOpen(false)}>• Formazione Swastya & Saundarya</Link>
            </div>
          </div>

          {/* Submenu 3: Visite e Terapie */}
          <div className="mobile-submenu-group">
            <div className="mobile-submenu-header">
              <Link 
                to="/visite-terapie" 
                className={`mobile-nav-link ${location.pathname === '/visite-terapie' ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Visite Ayurveda e Terapie
              </Link>
              <button 
                type="button" 
                className="mobile-submenu-toggle" 
                onClick={() => toggleMobileSubmenu('visite')}
                aria-label="Apri sottomenu Visite e Terapie"
              >
                <ChevronDown size={18} className={mobileSubmenu === 'visite' ? 'rotated' : ''} />
              </button>
            </div>
            <div className={`mobile-submenu-items ${mobileSubmenu === 'visite' ? 'open' : ''}`}>
              <Link to="/consulti-sadbhawna" onClick={() => setMobileMenuOpen(false)}>• Consulti Nadi Pariksha Dr.ssa Sadbhawna</Link>
              <Link to="/trattamenti-ayurveda" onClick={() => setMobileMenuOpen(false)}>• Trattamenti Ayurveda</Link>
            </div>
          </div>

          <Link 
            to="/blog" 
            className={`mobile-nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>

          <Link 
            to="/contact" 
            className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contatti
          </Link>

          <Link 
            to="/prakriti-test" 
            className="mobile-cta-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fai il Prakriti Test
          </Link>
        </nav>

        {/* Mobile Drawer Footer Contacts */}
        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-contacts">
            <a href="tel:+393405865469" className="mobile-contact-pill">
              <Phone size={14} /> +39 340 586 5469
            </a>
            <a href="mailto:infoaryaveda8@gmail.com" className="mobile-contact-pill">
              <Mail size={14} /> infoaryaveda8@gmail.com
            </a>
          </div>

          <div className="mobile-drawer-socials">
            <a href="https://www.facebook.com/profile.php?id=61593292162520" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/dr-meenu-sadbhawna-bhardwaj-47703447" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/@SadbhawnaBhardwaj-n3o" target="_blank" rel="noopener noreferrer" title="YouTube">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/sadbhawna_bhardwaj?dlrf=Z2YybWhrZHRkNTdj" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
