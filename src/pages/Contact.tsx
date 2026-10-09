import React, { useState } from 'react';
import { Phone, Mail, MapPin, Plane, Train, Car, Bed, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    const formData = new FormData(event.currentTarget);

    // Ye access key hai, aapko ise web3forms.com se li hui key se replace karna hoga
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object: Record<string, any> = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        (event.target as HTMLFormElement).reset(); // form clear karne ke liye
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
    <div className="contact-page animate-fade-in-up">
      
      {/* Premium Hero Banner */}
      <section className="premium-contact-hero">
        <div className="hero-content-wrapper">
          <h1>Contatti</h1>
          <p>Siamo qui per guidarti nel tuo percorso Ayurvedico</p>
        </div>
      </section>

      {/* Floating Info Cards */}
      <section className="contact-info-wrapper">
        <div className="premium-info-card">
          <div className="icon-circle">
            <Phone size={35} />
          </div>
          <h3>TELEFONO</h3>
          <p>Cell. +39 340 586 5469</p>
        </div>
        
        <div className="premium-info-card">
          <div className="icon-circle">
            <Mail size={35} />
          </div>
          <h3>EMAIL</h3>
          <p><a href="mailto:infoaryaveda8@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>infoaryaveda8@gmail.com</a></p>
        </div>
        
        <div className="premium-info-card">
          <div className="icon-circle">
            <MapPin size={35} />
          </div>
          <h3>LOCATION</h3>
          <p>Via Teocrito 50 – 20128 Milano<br/>400mt MM1 Gorla – Zona Viale Monza</p>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="contact-split-section">
        
        {/* Left Side: Premium Form */}
        <div className="form-container">
          <h2 className="section-title notranslate" translate="no">Richiedi Informazioni</h2>
          
          <form className="premium-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Nome e cognome*" required />
            </div>
            
            <div className="input-group">
              <input type="email" name="email" placeholder="Email*" required />
            </div>
            
            <div className="input-group">
              <input type="tel" name="phone" placeholder="Telefono*" required />
            </div>
            
            <div className="input-group">
              <input type="text" name="subject" placeholder="Oggetto*" required />
            </div>
            
            <div className="input-group">
              <textarea name="message" placeholder="Scrivi qui il tuo messaggio...*" required></textarea>
            </div>

            <div className="checkbox-wrapper">
              <input type="checkbox" name="privacy_accepted" id="privacy-policy" required />
              <label htmlFor="privacy-policy">
                Ho letto e accetto l'<a href="#">Informativa</a> relativa al Trattamento dei Dati Personali ai sensi del Regolamento UE 2016/679 artt. 13 e 14*
              </label>
            </div>

            <div className="checkbox-wrapper">
              <input type="checkbox" name="marketing_accepted" id="marketing" />
              <label htmlFor="marketing">
                Vi autorizzo a contattarmi e inviarmi via email contenenti informazioni sui vostri servizi/prodotti/eventi e promozioni che potrebbero interessarmi.
              </label>
            </div>

            
            {submitStatus === 'success' && (
              <div style={{ backgroundColor: '#10B981', color: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={20} /> Il tuo messaggio è stato inviato con successo!
              </div>
            )}

            {submitStatus === 'error' && (
              <div style={{ backgroundColor: '#EF4444', color: 'white', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertCircle size={20} /> Si è verificato un errore. Riprova più tardi.
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.7 : 1 }}>
              <Send size={20} /> {isSubmitting ? 'INVIO IN CORSO...' : 'INVIA MESSAGGIO'}
            </button>
          </form>
        </div>

        {/* Right Side: Come Arrivare & Ospitalità */}
        <div className="travel-info-container">
          <h2 className="section-title">Come Arrivare</h2>
          <p style={{color: '#64748B', marginBottom: '2rem', fontSize: '1.1rem'}}>
            La scuola Arya Veda è al centro di Milano vicino Corso Buenos Aires.
          </p>
          
          <div className="travel-grid">
            <div className="travel-card">
              <div className="travel-card-header">
                <Plane className="travel-icon" size={24} />
                <h4>Da Linate</h4>
              </div>
              <p>Autobus fino a San Babila, poi Metro Linea Rossa verso Sesto F.S. Fermata: GORLA (a 400m dalla sede).</p>
            </div>

            <div className="travel-card">
              <div className="travel-card-header">
                <Plane className="travel-icon" size={24} />
                <h4>Da Malpensa</h4>
              </div>
              <p>Malpensa Express fino a Cadorna, poi Metro Linea Rossa verso Sesto F.S. Fermata: GORLA (a 400m dalla sede).</p>
            </div>

            <div className="travel-card" style={{ gridColumn: '1 / -1' }}>
              <div className="travel-card-header">
                <Plane className="travel-icon" size={24} />
                <h4>Da Orio al Serio</h4>
              </div>
              <p>Taxi o autobus per Stazione Centrale. Poi Metro Verde fino a Loreto, cambio con Metro Rossa verso Sesto F.S. Fermata: GORLA.</p>
            </div>

            <div className="travel-card">
              <div className="travel-card-header">
                <Train className="travel-icon" size={24} />
                <h4>Dalla Stazione Centrale</h4>
              </div>
              <p>Metro Linea Verde fino a Piazzale Loreto, cambio con Metro Linea Rossa verso Sesto F.S. Fermata: GORLA.</p>
            </div>

            <div className="travel-card">
              <div className="travel-card-header">
                <Car className="travel-icon" size={24} />
                <h4>Dall'Autostrada</h4>
              </div>
              <p>Uscita Palmanova (Tangenziale Est), prosegui verso Loreto, imbocca Viale Monza fino all'incrocio con Via Teocrito.</p>
            </div>
          </div>

          <div className="hospitality-banner">
            <Bed size={40} style={{marginBottom: '1rem', color: 'var(--secondary)'}} />
            <h3>OSPITALITÀ</h3>
            <p><strong>Arya Veda ha pensato a chi viene da lontano.</strong></p>
            <p>Offriamo ospitalità semplice e gratuita presso la nostra struttura (portando un sacco a pelo), oppure convenzioni con B&B, hotel e ostelli della zona.</p>
            <p style={{marginTop: '1.5rem', fontWeight: 600}}>
              Richiedi la lista delle strutture convenzionate a:<br/>
              <a href="mailto:infoaryaveda8@gmail.com" style={{color: 'var(--secondary)', textDecoration: 'none'}}>infoaryaveda8@gmail.com</a>
            </p>
          </div>
        </div>

      </section>

      {/* Full-width Map */}
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.10852026848!2d9.222340315558197!3d45.50346397910168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c7104b4c2b95%3A0x6b4dc6bd2c8d234a!2sVia%20Teocrito%2C%2050%2C%2020128%20Milano%20MI%2C%20Italy!5e0!3m2!1sen!2sus!4v1622030000000!5m2!1sen!2sus" 
          className="contact-map-premium" 
          allowFullScreen={false} 
          loading="lazy" 
          title="Mappa Sede Arya Veda">
        </iframe>
      </div>

    </div>
  );
};

export default Contact;
