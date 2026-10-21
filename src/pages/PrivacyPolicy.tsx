import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page" style={{ backgroundColor: 'var(--bg-soft)', minHeight: '100vh', padding: '3rem 0 5rem 0' }}>
      <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Back Link */}
        <Link 
          to="/" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '2rem', 
            color: 'var(--primary)', 
            fontWeight: 600,
            textDecoration: 'none' 
          }}
        >
          <ArrowLeft size={18} /> Torna alla Home
        </Link>

        {/* Header Card */}
        <div 
          style={{ 
            backgroundColor: '#FFFFFF', 
            padding: '3rem 2.5rem', 
            borderRadius: '16px', 
            boxShadow: 'var(--shadow-sm)', 
            marginBottom: '2rem',
            borderLeft: '5px solid var(--primary)'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
            <ShieldCheck size={20} />
            Informativa Legale & GDPR
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '1rem' }}>
            Informativa sulla Privacy & Cookie Policy
          </h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.7' }}>
            Ai sensi del Regolamento UE 2016/679 (General Data Protection Regulation - GDPR) e della normativa italiana vigente in materia di protezione dei dati personali.
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
            Ultimo aggiornamento: Ottobre 2026
          </p>
        </div>

        {/* Content Card */}
        <div 
          style={{ 
            backgroundColor: '#FFFFFF', 
            padding: '3rem 2.5rem', 
            borderRadius: '16px', 
            boxShadow: 'var(--shadow-sm)',
            color: 'var(--text-main)',
            lineHeight: '1.8',
            fontSize: '1rem'
          }}
        >

          {/* Section 1 */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Lock size={22} /> 1. Titolare del Trattamento dei Dati
            </h2>
            <p>
              Il Titolare del trattamento dei dati personali raccolti attraverso questo sito web è:
            </p>
            <div style={{ backgroundColor: 'var(--bg-soft)', padding: '1.25rem 1.5rem', borderRadius: '8px', margin: '1rem 0' }}>
              <p><strong>Associazione Culturale Arya Veda (ARYAVEDA A.C.)</strong></p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                <MapPin size={16} color="var(--primary)" /> Sede Legale & Operativa: Via Teocrito 50 – 20128 Milano (MI), Italia
              </p>
              <p style={{ marginTop: '0.4rem' }}><strong>Codice Fiscale:</strong> 94094800037</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                <Mail size={16} color="var(--primary)" /> Email di contatto: <a href="mailto:infoaryaveda8@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>infoaryaveda8@gmail.com</a>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                <Phone size={16} color="var(--primary)" /> Telefono responsabile: +39 340 586 5469
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Eye size={22} /> 2. Tipologie di Dati Raccolti
            </h2>
            <p>Durante la consultazione del sito e l'interazione con i servizi offerti possono essere raccolte le seguenti tipologie di dati personali:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.8rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Dati forniti volontariamente dall'utente:</strong> Nome, cognome, indirizzo email, recapito telefonico e ogni altra informazione inserita nei moduli di contatto (es. richiesta informazioni corsi, prenotazione consulti con Vaidya, trattamenti corporei).
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Dati del Test della Costituzione (Prakriti):</strong> Risposte alle domande relative a caratteristiche psico-fisiche e abitudini fornite volontariamente al solo scopo di calcolare i Dosha prevalenti. Tali dati non costituiscono diagnosi medica ufficiale e non vengono ceduti a terzi.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Dati di navigazione tecnici:</strong> Indirizzi IP, tipo di browser utilizzato, data e orario di accesso. Tali dati vengono raccolti in forma anonimizzata ed aggregata al solo fine di garantire la corretta erogazione e sicurezza del sito.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FileText size={22} /> 3. Finalità e Base Giuridica del Trattamento
            </h2>
            <p>I dati personali forniti sono trattati lecitamente e secondo correttezza per le seguenti finalità:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.8rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Riscontro a richieste di contatto:</strong> Per rispondere a domande relative ai corsi dell'Accademia, ai viaggi studio in India e ai consulti di medicina ayurvedica (Base giuridica: esecuzione di misure precontrattuali o contrattuali).
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Iscrizione a corsi, seminari e trattamenti:</strong> Per la gestione amministrativa, organizzativa ed associativa delle attività istituzionali dell'Associazione (Base giuridica: adempimento contrattuale e obblighi di legge).
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <strong>Comunicazioni informative e promozionali:</strong> Solo previo esplicito e facoltativo consenso dell'utente, per l'invio di aggiornamenti sui nuovi corsi, seminari e iniziative di Arya Veda (Base giuridica: consenso dell'interessato revocabile in ogni momento).
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              4. Modalità di Trattamento e Misure di Sicurezza
            </h2>
            <p>
              I dati personali sono trattati sia con strumenti informatici e telematici, sia in formato cartaceo, nel pieno rispetto delle misure di sicurezza previste dal GDPR per prevenire la perdita dei dati, usi illeciti, accessi non autorizzati o divulgazioni indebite. I dati non sono soggetti a processi decisionali interamente automatizzati né a profilazione commerciale invasiva.
            </p>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              5. Periodo di Conservazione dei Dati
            </h2>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.8rem' }}>
              <li>I dati forniti per richieste di contatto vengono conservati per il tempo necessario a fornire riscontro completo e per gli adempimenti successivi.</li>
              <li>I dati relativi a soci, allievi dei corsi e consulti vengono conservati per la durata del rapporto associativo/formativo e successivamente per il periodo prescritto dalle normative fiscali e civilistiche.</li>
            </ul>
          </section>

          {/* Section 6 - Cookie Policy */}
          <section id="cookie-policy" style={{ marginBottom: '2.5rem', paddingTop: '1rem', borderTop: '1px solid #EEE' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              6. Cookie Policy
            </h2>
            <p>
              Questo sito web utilizza esclusivamente cookie tecnici essenziali per consentire una corretta navigazione, gestire le preferenze di lingua (es. selettore multilingua) e garantire la sicurezza delle sessioni.
            </p>
            <p style={{ marginTop: '0.8rem' }}>
              <strong>Nessun cookie di profilazione o tracciamento commerciale invasivo</strong> viene installato senza il preventivo consenso dell'utente. I cookie tecnici possono essere disabilitati in qualunque momento tramite le impostazioni del proprio browser internet, sebbene ciò possa compromettere la fruizione di alcune funzionalità del sito.
            </p>
          </section>

          {/* Section 7 - Diritti dell'Interessato */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              7. Diritti dell'Interessato (Artt. 15-22 GDPR)
            </h2>
            <p>In ogni momento, l'utente ha il diritto di esercitare i propri diritti ai sensi degli artt. 15 e seguenti del GDPR, tra cui:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.8rem' }}>
              <li>Ottenere la conferma dell'esistenza o meno di dati personali che lo riguardano;</li>
              <li>Chiedere l'accesso ai propri dati, l'aggiornamento, la rettifica o l'integrazione;</li>
              <li>Richiedere la cancellazione dei dati (diritto all'oblio) o la limitazione del trattamento;</li>
              <li>Opporsi al trattamento per motivi legittimi;</li>
              <li>Richiedere la portabilità dei dati in formato strutturato e leggibile da dispositivo automatico;</li>
              <li>Revocare il consenso in qualsiasi momento senza pregiudicare la liceità del trattamento basato sul consenso prima della revoca;</li>
              <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).</li>
            </ul>
          </section>

          {/* Section 8 - Contatti */}
          <section>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '1rem' }}>
              8. Come Esercitare i Propri Diritti
            </h2>
            <p>
              Per esercitare uno qualsiasi dei diritti sopra indicati o per qualsiasi chiarimento relativo alla presente informativa, è possibile contattare in qualsiasi momento il Titolare del trattamento inviando una comunicazione a:
            </p>
            <p style={{ marginTop: '0.8rem' }}>
              <strong>Email:</strong> <a href="mailto:infoaryaveda8@gmail.com" style={{ color: 'var(--primary)', fontWeight: 600 }}>infoaryaveda8@gmail.com</a><br/>
              <strong>Indirizzo:</strong> Arya Veda A.C., Via Teocrito 50 – 20128 Milano (MI)
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
