import React from 'react';

const WelcomeNotice: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container about-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="about-content">
          <span className="section-subtitle">Annuncio Importante</span>
          <h2>Cari Amici ed allievi dei corsi di formazione</h2>
          <p>Arya Veda informa che tutte le attività di consulenza ayurvedica, i trattamenti di benessere corporeo e i corsi di formazione intensivi sono aperti e si svolgono regolarmente.</p>
          <br/>
          <p className="text-light">Prenotazioni e informazioni, contattare il numero del responsabile:<br/><strong>Bharat - +39 340 5865469</strong></p>
          <p className="text-light">oppure tramite mail a:<br/><strong>infoaryaveda8@gmail.com</strong></p>
          <br/>
          <h3 style={{fontFamily: 'var(--font-heading)', color: 'var(--primary)'}}>Namaste.</h3>
        </div>
        <div className="about-image-wrapper" style={{ order: 1 }}>
          <img 
            src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2074&auto=format&fit=crop" 
            alt="Namaste Yoga" 
            className="about-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeNotice;
