import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    formData.append("access_key", "f4fb1de0-5612-4743-8b27-1e929c525eec");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        formElement.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Mettiti in contatto</span>
          <h2 className="section-title notranslate" translate="no">Richiedi Informazioni</h2>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <input type="text" name="name" placeholder="Nome *" required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              <input type="email" name="email" placeholder="Email *" required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              <input type="tel" name="phone" placeholder="Telefono *" required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
              <input type="text" name="subject" placeholder="Oggetto *" required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
            </div>
            
            <textarea name="message" placeholder="Messaggio *" rows={6} required style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}></textarea>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', marginTop: '1rem', color: 'var(--text-light)' }}>
              <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <input type="checkbox" name="privacy_accepted" required style={{ marginTop: '3px' }} />
                <span>
                  Dichiaro di aver letto l'<Link to="/privacy-policy" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>informativa sulla privacy</Link> e acconsento al trattamento dei dati personali (GDPR UE 2016/679)*
                </span>
              </label>
              <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <input type="checkbox" name="marketing_accepted" style={{ marginTop: '3px' }} />
                Acconsento al trattamento dei dati personali per l'invio di materiale promozionale, newsletter e iscrizione ad eventi.
              </label>
            </div>

            {submitStatus === 'success' && (
              <div style={{ backgroundColor: '#10B981', color: 'white', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={20} /> Il tuo messaggio è stato inviato con successo! Ti risponderemo al più presto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{ backgroundColor: '#EF4444', color: 'white', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={20} /> Si è verificato un errore nell'invio. Riprova più tardi o contattaci direttamente su WhatsApp.
              </div>
            )}
            
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={isSubmitting}
                style={{ padding: '0.9rem 3rem', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', opacity: isSubmitting ? 0.7 : 1 }}
              >
                <Send size={18} /> {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
