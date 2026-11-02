import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronLeft, 
  CheckCircle2, 
  MapPin, 
  Ticket, 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from 'lucide-react';
import heroBannerOpenDay from '../assets/Open Day website.jpg.jpeg';
import './BlogPost.css';

const BlogPostOpenDay: React.FC = () => {
  useEffect(() => {
    document.title = "Open Day Ayurveda Milano 2026 | ARYAVEDA Academy";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Partecipa all’Open Day Ayurveda a Milano il 22 novembre 2026. Scopri i corsi, i trattamenti e la filosofia ayurvedica di ARYAVEDA Academy. Prenota il tuo posto gratuito!");
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', "Partecipa all’Open Day Ayurveda a Milano il 22 novembre 2026. Scopri i corsi, i trattamenti e la filosofia ayurvedica di ARYAVEDA Academy. Prenota il tuo posto gratuito!");
      document.head.appendChild(metaDesc);
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "Open Day Ayurveda Milano, corsi ayurveda milano, trattamenti ayurveda, aryaveda academy");
    } else {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', "Open Day Ayurveda Milano, corsi ayurveda milano, trattamenti ayurveda, aryaveda academy");
      document.head.appendChild(metaKeywords);
    }
  }, []);

  return (
    <article className="blog-post-page animate-fade-in-up">
      {/* Breadcrumbs & Navigation */}
      <div className="post-breadcrumbs-bar">
        <div className="container">
          <Link to="/blog" className="back-to-blog-link">
            <ChevronLeft size={16} /> Torna agli articoli del Blog
          </Link>
        </div>
      </div>

      {/* Post Header */}
      <header className="post-header">
        <div className="container post-header-container">
          <span className="post-category-tag">Eventi & Formazione</span>
          <h1 className="post-main-title">
            Open Day Ayurveda a Milano: scopri il mondo dell’Ayurveda il 22 novembre 2026
          </h1>

          <div className="post-meta-details">
            <span className="meta-item">
              <User size={15} /> Redazione ARYAVEDA Academy
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Calendar size={15} /> 22 Novembre 2026
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Clock size={15} /> 5 min di lettura
            </span>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="post-featured-image-wrapper">
        <img 
          src={heroBannerOpenDay} 
          alt="Open Day Ayurveda a Milano 2026 - ARYAVEDA Academy" 
          className="post-featured-image" 
        />
      </div>

      {/* Post Content */}
      <div className="container post-content-container">
        <div className="post-body">
          {/* Intro Section */}
          <section className="post-intro-box">
            <h2>Open Day Ayurveda a Milano: una giornata per scoprire la tradizione ayurvedica</h2>
            <p className="lead-paragraph">
              Sei interessato all’Ayurveda e desideri approfondire il mondo del benessere olistico? <strong>ARYAVEDA Academy</strong> ti invita a partecipare all’Open Day Ayurveda a Milano, <strong>domenica 22 novembre 2026</strong>, a partire dalle ore 9:00.
            </p>
            <p>
              Sarà un’occasione speciale per conoscere da vicino la filosofia ayurvedica, incontrare gli insegnanti, visitare l’accademia e scoprire i percorsi formativi dedicati a questa antica tradizione indiana.
            </p>
            <p className="quote-callout">
              L’Ayurveda non è soltanto una disciplina legata al benessere: è una filosofia che considera la persona nella sua totalità, valorizzando l’equilibrio tra corpo, mente e stile di vita.
            </p>
          </section>

          {/* Section: Che cos'è l'Ayurveda */}
          <section className="post-section">
            <h2>Che cos’è l’Ayurveda e perché è importante conoscerlo?</h2>
            <p>
              L’Ayurveda è un sistema tradizionale di conoscenze originario dell’India, fondato su una visione olistica della persona. Il suo approccio prende in considerazione le caratteristiche individuali, le abitudini quotidiane, l’alimentazione e il rapporto con l’ambiente.
            </p>

            <div className="dosha-highlight-card">
              <h3>I Tre Dosha: Vata, Pitta e Kapha</h3>
              <p>
                Uno dei concetti fondamentali dell’Ayurveda è quello dei tre Dosha: <strong>Vata</strong>, <strong>Pitta</strong> e <strong>Kapha</strong>. Secondo la tradizione ayurvedica, questi principi sono associati a differenti caratteristiche e funzioni dell’organismo.
              </p>
            </div>

            <p>
              Conoscere i principi dell’Ayurveda permette di approfondire un approccio al benessere che pone attenzione alla persona e alle sue caratteristiche individuali.
            </p>
          </section>

          {/* Section: Corsi */}
          <section className="post-section">
            <h2>Scopri i corsi di Ayurveda presso ARYAVEDA Academy</h2>
            <p>
              Durante l’Open Day potrai conoscere i percorsi di studio e ricevere informazioni sulle opportunità di formazione offerte dall’accademia.
            </p>
            <p>
              I corsi di Ayurveda sono un’opportunità per avvicinarsi alla filosofia ayurvedica, approfondirne i principi e sviluppare conoscenze teoriche e pratiche. Potrai incontrare direttamente gli insegnanti, conoscere i programmi formativi e capire quale percorso sia più adatto ai tuoi interessi e ai tuoi obiettivi di crescita.
            </p>

            <div className="internal-promo-banner">
              <p>
                Scopri anche i nostri <Link to="/accademia" className="internal-link">corsi di Ayurveda</Link> e le opportunità di <Link to="/formazione-swastya" className="internal-link">formazione ayurvedica professionale</Link>.
              </p>
            </div>
          </section>

          {/* Section: Massaggio e Trattamenti */}
          <section className="post-section">
            <h2>Massaggio ayurvedico e trattamenti tradizionali</h2>
            <p>
              Tra gli aspetti più conosciuti della tradizione ayurvedica troviamo le pratiche di trattamento corporeo e il massaggio ayurvedico.
            </p>
            <p>
              Durante la giornata potrai approfondire il mondo dei trattamenti, conoscere alcune tecniche tradizionali e scoprire il loro ruolo all’interno dell’approccio ayurvedico al benessere.
            </p>
            <p>
              Il massaggio ayurvedico, insieme ad altre pratiche tradizionali, fa parte di un percorso che considera le esigenze e le caratteristiche individuali della persona per favorire distensione profonda e riequilibrio delle energie vitali.
            </p>

            <div className="internal-promo-banner">
              <p>
                Approfondisci i nostri contenuti dedicati al <Link to="/trattamenti-ayurveda" className="internal-link">massaggio ayurvedico e ai trattamenti tradizionali</Link>.
              </p>
            </div>
          </section>

          {/* Section: Perché partecipare */}
          <section className="post-section">
            <h2>Perché partecipare all’Open Day ARYAVEDA?</h2>
            <p>
              L’Open Day è pensato per chi desidera conoscere meglio l’Ayurveda, sia a livello personale sia come possibile percorso di formazione professionale.
            </p>

            <p>Durante l’incontro avrai l’opportunità di:</p>

            <ul className="benefits-checklist">
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <span><strong>Visitare gli spazi</strong> accoglienti di ARYAVEDA Academy a Milano.</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <span><strong>Incontrare gli insegnanti</strong> e conoscere da vicino il loro approccio pedagogico ed etico.</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <span><strong>Ricevere informazioni dettagliate</strong> sui programmi e su tutti i corsi disponibili.</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <span><strong>Approfondire la filosofia</strong> e i principi fondamentali dell’Ayurveda tradizionale indiana.</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <span><strong>Scoprire il mondo del massaggio</strong> e dei trattamenti ayurvedici tradizionali.</span>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <span><strong>Fare domande e chiarire i tuoi dubbi</strong> parlando direttamente a tu per tu con il nostro team.</span>
              </li>
            </ul>

            <div className="disclaimer-callout">
              <Sparkles size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
              <strong>Aperto a tutti:</strong> Non è necessaria una conoscenza precedente dell’Ayurveda. La giornata è aperta a tutti gli interessati, dai semplici curiosi a chi desidera una qualifica professionale.
            </div>
          </section>

          {/* Event Details Box */}
          <section className="post-section">
            <h2>Open Day Ayurveda Milano 2026: informazioni e prenotazioni</h2>
            <p>Ecco tutti i dettagli essenziali per organizzare la tua partecipazione:</p>

            <div className="event-info-box">
              <div className="event-details-grid">
                <div className="event-detail-item">
                  <div className="event-detail-icon"><Calendar size={20} /></div>
                  <div>
                    <strong>Data:</strong>
                    <p>Domenica 22 novembre 2026</p>
                  </div>
                </div>

                <div className="event-detail-item">
                  <div className="event-detail-icon"><Clock size={20} /></div>
                  <div>
                    <strong>Orario:</strong>
                    <p>Dalle ore 9:00</p>
                  </div>
                </div>

                <div className="event-detail-item">
                  <div className="event-detail-icon"><MapPin size={20} /></div>
                  <div>
                    <strong>Luogo:</strong>
                    <p>Via Teocrito 50, Milano (MM1)</p>
                  </div>
                </div>

                <div className="event-detail-item">
                  <div className="event-detail-icon"><Ticket size={20} /></div>
                  <div>
                    <strong>Ingresso:</strong>
                    <p><span className="badge-free">Gratuito</span> (Posti limitati – prenotazione consigliata)</p>
                  </div>
                </div>
              </div>

              <div className="event-contact-block">
                <h4>Per informazioni e prenotazioni:</h4>
                <div className="event-contact-links">
                  <a href="https://wa.me/393405865469?text=Buongiorno,%20vorrei%20prenotare%20un%20posto%20per%20l'Open%20Day%20Ayurveda%20a%20Milano%20del%2022%20novembre%202026" target="_blank" rel="noopener noreferrer" className="event-contact-pill whatsapp-pill">
                    <MessageCircle size={16} /> WhatsApp: +39 340 586 5469
                  </a>
                  <a href="tel:+393405865469" className="event-contact-pill">
                    <Phone size={16} /> Tel: +39 340 586 5469
                  </a>
                  <a href="mailto:infoaryaveda8@gmail.com" className="event-contact-pill">
                    <Mail size={16} /> infoaryaveda8@gmail.com
                  </a>
                  <a href="https://www.aryavedaacademy.com/" target="_blank" rel="noopener noreferrer" className="event-contact-pill">
                    <Globe size={16} /> aryavedaacademy.com
                  </a>
                </div>
              </div>
            </div>

            <p style={{ marginTop: '1.25rem' }}>
              Per ulteriori informazioni o richieste personalizzate, puoi anche <Link to="/contact" className="internal-link">contattare ARYAVEDA Academy</Link>.
            </p>
          </section>

          {/* Conclusion */}
          <section className="post-section conclusion-section">
            <h2>Trasforma la tua passione per il benessere in un nuovo percorso</h2>
            <p>
              A volte, un semplice incontro può diventare il primo passo verso una nuova passione o un progetto professionale gratificante.
            </p>
            <p>
              L’Open Day di ARYAVEDA Academy è un’occasione speciale per avvicinarti alla tradizione ayurvedica, conoscere nuove possibilità di apprendimento e scoprire un approccio al benessere che mette al centro la persona.
            </p>
            <p className="lead-paragraph" style={{ textAlign: 'center', margin: '2rem 0 1rem' }}>
              Ti aspettiamo domenica 22 novembre 2026 a Milano!
            </p>

            <div className="conclusion-cta-card">
              <h3>Prenota il tuo posto gratuito</h3>
              <p>
                Vieni a scoprire il mondo di ARYAVEDA Academy. I posti per la giornata sono limitati per garantire la migliore esperienza a ciascun partecipante.
              </p>
              <div className="cta-actions">
                <a 
                  href="https://wa.me/393405865469?text=Buongiorno,%20vorrei%20prenotare%20un%20posto%20per%20l'Open%20Day%20Ayurveda%20a%20Milano%20del%2022%20novembre%202026"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <MessageCircle size={16} style={{ marginRight: '6px' }} /> Prenota Posto su WhatsApp
                </a>
                <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>
                  Modulo Prenotazione <ArrowRight size={16} />
                </Link>
              </div>
              <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#8c5b16', fontWeight: 600 }}>
                ARYAVEDA Academy – Scopri, impara e vivi l’Ayurveda.
              </p>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default BlogPostOpenDay;
