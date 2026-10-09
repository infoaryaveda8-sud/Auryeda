import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Mettiti in contatto</span>
          <h2 className="section-title notranslate" translate="no">Richiedi Informazioni</h2>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <input type="text" placeholder="Nome *" required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              <input type="email" placeholder="Email *" required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              <input type="tel" placeholder="Telefono *" required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              <input type="text" placeholder="Oggetto *" required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
            </div>
            
            <textarea placeholder="Messaggio" rows={6} style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}></textarea>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', marginTop: '1rem', color: 'var(--text-light)' }}>
              <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <input type="checkbox" required style={{ marginTop: '3px' }} />
                Dichiaro di aver letto l'informativa sulla privacy e acconsento al trattamento dei dati
              </label>
              <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <input type="checkbox" required style={{ marginTop: '3px' }} />
                Acconsento al trattamento dei dati personali per l'invio di materiale promozionale, newsletter e iscrizione ad eventi.
              </label>
            </div>
            
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem 3rem' }}>Invia Richiesta</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
