import React from 'react';

const PrakritiTest: React.FC = () => {
  return (
    <section className="section-padding" style={{ 
      position: 'relative',
      backgroundImage: 'url("https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#fff', 
      textAlign: 'center',
      padding: '8rem 0'
    }}>
      {/* Premium dark red/golden gradient overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(148, 58, 57, 0.9) 0%, rgba(96, 108, 56, 0.8) 100%)', zIndex: 1 }}></div>
      
      <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>Prakriti Test</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.95, lineHeight: 1.6 }}>
          Calcola gratuitamente la tua costituzione ayurvedica e scopri di più sul tuo benessere personale.
        </p>
        <button className="btn" style={{ 
          backgroundColor: '#fff', 
          color: 'var(--primary)', 
          padding: '1rem 3rem', 
          fontSize: '1.1rem',
          fontWeight: 700,
          borderRadius: '30px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          border: 'none',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 25px rgba(0,0,0,0.2)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)'; }}
        >
          Inizia il Test Ora
        </button>
      </div>
    </section>
  );
};

export default PrakritiTest;
