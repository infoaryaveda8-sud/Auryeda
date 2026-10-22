import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, MapPin, Mail, Phone } from 'lucide-react';
import { FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{ 
        backgroundColor: '#1C1917', 
        color: '#D6D3D1', 
        padding: '3rem 0 2rem 0', 
        borderTop: '3px solid var(--primary)',
        fontSize: '0.88rem',
        lineHeight: 1.6
      }}
    >
      <div className="container">
        {/* Top Info Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Col 1: About Arya Veda */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.8rem', letterSpacing: '0.5px' }}>
              Arya Veda A.C.
            </h4>
            <p style={{ color: '#A8A29E', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
              Istituto per la ricerca e lo studio della Medicina Ayurveda, del massaggio tradizionale e dei trattamenti olistici orientali a Milano e Reggio Emilia.
            </p>
            <p style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.82rem' }}>
              C.F. 94094800037
            </p>
          </div>

          {/* Col 2: Contatti Rapidi */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
              Sede & Contatti
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#A8A29E', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Via Teocrito 50 – 20128 Milano (MM1 Gorla)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <span>+39 340 586 5469</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <a href="mailto:infoaryaveda8@gmail.com" style={{ color: '#E7E5E4', textDecoration: 'none' }}>
                  infoaryaveda8@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.6rem', alignItems: 'center' }}>
                <a 
                  href="https://www.facebook.com/profile.php?id=61593292162520" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#E7E5E4', fontSize: '1.15rem', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#1877F2'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#E7E5E4'}
                  title="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="https://www.linkedin.com/in/dr-meenu-sadbhawna-bhardwaj-47703447" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#E7E5E4', fontSize: '1.15rem', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#0A66C2'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#E7E5E4'}
                  title="LinkedIn - Dr. Meenu Sadbhawna Bhardwaj"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="https://www.youtube.com/@SadbhawnaBhardwaj-n3o" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#E7E5E4', fontSize: '1.25rem', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#EF4444'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#E7E5E4'}
                  title="YouTube - Sadbhawna Bhardwaj"
                >
                  <FaYoutube />
                </a>
                <a 
                  href="https://www.instagram.com/sadbhawna_bhardwaj?dlrf=Z2YybWhrZHRkNTdj" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#E7E5E4', fontSize: '1.15rem', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#E1306C'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#E7E5E4'}
                  title="Instagram - sadbhawna_bhardwaj"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Link Istituzionali & Legali */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.8rem' }}>
              Informazioni Legali
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <Link 
                  to="/privacy-policy" 
                  style={{ color: '#E7E5E4', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#E7E5E4'}
                >
                  <ShieldCheck size={16} color="var(--secondary)" /> Privacy Policy (GDPR)
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy#cookie-policy" 
                  style={{ color: '#E7E5E4', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#E7E5E4'}
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  style={{ color: '#E7E5E4', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#E7E5E4'}
                >
                  Contatti & Dove Siamo
                </Link>
              </li>
              <li>
                <Link 
                  to="/chi-siamo" 
                  style={{ color: '#E7E5E4', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--secondary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#E7E5E4'}
                >
                  Chi Siamo & Mentore
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            paddingTop: '1.5rem',
            fontSize: '0.82rem',
            color: '#78716C'
          }}
        >
          <p>
            © {currentYear} Arya Veda A.C. — Tutti i diritti riservati.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link 
              to="/privacy-policy" 
              style={{ color: '#A8A29E', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseOut={(e) => e.currentTarget.style.color = '#A8A29E'}
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link 
              to="/privacy-policy#cookie-policy" 
              style={{ color: '#A8A29E', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'}
              onMouseOut={(e) => e.currentTarget.style.color = '#A8A29E'}
            >
              Cookie Policy
            </Link>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              Made with <Heart size={13} color="var(--primary)" fill="var(--primary)" /> for Arya Veda
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
