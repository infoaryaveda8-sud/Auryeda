import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronLeft, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import './BlogPost.css';

const faqs = [
  {
    q: "1. Quali sono i tre dosha in Ayurveda?",
    a: "I tre dosha in Ayurveda sono Vata, Pitta e Kapha. Si tratta di concetti ayurvedici tradizionali associati a diverse combinazioni dei cinque elementi e a differenti modelli di funzionamento fisico e mentale."
  },
  {
    q: "2. A cosa sono associati Vata, Pitta e Kapha?",
    a: "Nella filosofia ayurvedica tradizionale, Vata è associato al movimento, Pitta alla trasformazione e Kapha alla stabilità."
  },
  {
    q: "3. Una persona può avere tutti e tre i dosha?",
    a: "Sì. Secondo l'Ayurveda, ogni individuo possiede tutti e tre i dosha, anche se tradizionalmente si ritiene che le loro proporzioni varino da persona a persona."
  },
  {
    q: "4. Come posso conoscere il mio dosha?",
    a: "Un professionista ayurvedico può valutare le caratteristiche costituzionali tradizionali e le informazioni sullo stile di vita per discutere la Prakriti di una persona. I quiz online non sono strumenti di diagnosi medica."
  },
  {
    q: "5. Quale dosha è considerato il migliore?",
    a: "Nella filosofia ayurvedica nessun dosha è considerato universalmente migliore di un altro. Vata, Pitta e Kapha hanno ciascuno le proprie funzioni e caratteristiche tradizionali."
  },
  {
    q: "6. Perché i principianti dovrebbero conoscere i tre dosha?",
    a: "Conoscere i tre dosha aiuta i principianti a comprendere un concetto fondamentale dell'Ayurveda e offre un'introduzione all'approccio ayurvedico tradizionale alla costituzione individuale e allo stile di vita."
  }
];

const BlogPostDosha = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Comprendere i tre dosha in Ayurveda: Vata, Pitta e Kapha | Arya Veda";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Scopri i tre dosha in Ayurveda: Vata, Pitta e Kapha. Comprendi i loro significati tradizionali, le caratteristiche e l'importanza nel benessere ayurvedico.");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "tre dosha in Ayurveda, Vata Pitta Kapha, costituzione ayurvedica, tipi di dosha, caratteristiche dosha Vata, caratteristiche dosha Pitta, caratteristiche dosha Kapha, principi ayurvedici");
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

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
          <span className="post-category-tag">Principi Ayurvedici</span>
          <h1 className="post-main-title">
            Comprendere i tre dosha in Ayurveda: Vata, Pitta e Kapha spiegati
          </h1>

          <div className="post-meta-details">
            <span className="meta-item">
              <User size={15} /> Redazione Arya Veda
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Calendar size={15} /> 24 Novembre 2026
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Clock size={15} /> 9 min di lettura
            </span>
          </div>
        </div>
      </header>

      {/* Post Content */}
      <div className="container post-content-container">
        <div className="post-body">
          {/* Intro */}
          <section className="post-intro-box">
            <p className="lead-paragraph">
              L'Ayurveda è uno dei più antichi sistemi tradizionali indiani di salute e benessere. Offre una prospettiva unica per comprendere il corpo umano, la mente e lo stile di vita. Uno dei concetti più importanti della filosofia ayurvedica è quello dei tre dosha: <strong>Vata</strong>, <strong>Pitta</strong> e <strong>Kapha</strong>.
            </p>
            <p>
              Secondo gli insegnamenti ayurvedici tradizionali, questi tre dosha rappresentano diverse combinazioni dei cinque elementi: spazio, aria, fuoco, acqua e terra. Vengono utilizzati per descrivere le costituzioni individuali, le funzioni corporee e i modelli di equilibrio.
            </p>
            <p>
              Comprendere i tre dosha in Ayurveda può aiutare a conoscere meglio i principi ayurvedici tradizionali e l'importanza di mantenere uno stile di vita equilibrato.
            </p>
            <p className="quote-callout">
              Ma cosa sono Vata, Pitta e Kapha? In cosa si differenziano e perché sono importanti in Ayurveda? Scopriamo ogni dosha nel dettaglio.
            </p>
          </section>

          {/* Cosa sono i tre dosha */}
          <section className="post-section">
            <h2>Cosa sono i tre dosha in Ayurveda?</h2>
            <p>
              In Ayurveda, i dosha sono concetti fondamentali utilizzati per descrivere diversi modelli di funzionamento fisico e mentale. I tre dosha sono Vata, Pitta e Kapha.
            </p>
            <p>
              La filosofia ayurvedica tradizionale suggerisce che ogni individuo possiede tutti e tre i dosha, ma in proporzioni diverse. Questa combinazione è tradizionalmente chiamata <strong>Prakriti</strong>, ovvero la costituzione individuale.
            </p>
            <p>I tre dosha sono associati a elementi e caratteristiche differenti:</p>

            <ul className="benefits-checklist">
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div><strong>Vata Dosha:</strong> associato ad aria e spazio.</div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div><strong>Pitta Dosha:</strong> associato a fuoco e acqua.</div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div><strong>Kapha Dosha:</strong> associato a terra e acqua.</div>
              </li>
            </ul>

            <p>
              Secondo l'Ayurveda, comprendere questi dosha offre un quadro tradizionale per parlare delle differenze individuali, delle abitudini di vita e delle pratiche di benessere.
            </p>
          </section>

          {/* Vata / Pitta / Kapha */}
          <section className="post-section">
            <div className="numbered-features-grid">
              <div className="numbered-feature-card">
                <div className="feature-number">1</div>
                <div className="feature-content">
                  <h3>Vata Dosha: l'energia del movimento</h3>
                  <p>
                    Vata è associato agli elementi aria e spazio. Nella filosofia ayurvedica rappresenta il movimento ed è tradizionalmente collegato a processi come la respirazione, la circolazione, il movimento e la comunicazione.
                  </p>
                  <h4>Caratteristiche del dosha Vata</h4>
                  <p>Le descrizioni tradizionali delle caratteristiche Vata includono:</p>
                  <ul>
                    <li>Creatività e immaginazione.</li>
                    <li>Pensiero e comunicazione rapidi.</li>
                    <li>Entusiasmo e adattabilità.</li>
                    <li>Preferenza per la varietà e l'attività.</li>
                    <li>Sensibilità ai cambiamenti di routine.</li>
                  </ul>
                  <p>
                    Parlando di squilibrio di Vata, le tradizioni ayurvediche fanno comunemente riferimento a esperienze come irrequietezza, secchezza, routine irregolari e difficoltà a rilassarsi.
                  </p>
                  <h4>Come mantenere l'equilibrio di Vata</h4>
                  <p>
                    Le raccomandazioni ayurvediche tradizionali per Vata pongono spesso l'accento su calore, regolarità e rilassamento. Alcune pratiche comunemente citate:
                  </p>
                  <ul>
                    <li>Seguire una routine quotidiana costante.</li>
                    <li>Consumare pasti regolari ed equilibrati.</li>
                    <li>Dormire a sufficienza.</li>
                    <li>Praticare yoga dolce e meditazione.</li>
                    <li>Ritagliarsi del tempo per il relax.</li>
                    <li>Mantenersi piacevolmente al caldo.</li>
                  </ul>
                  <p className="note-text">
                    <em>Nota:</em> si tratta di suggerimenti tradizionali di benessere, non di trattamenti garantiti per condizioni di salute.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">2</div>
                <div className="feature-content">
                  <h3>Pitta Dosha: l'energia della trasformazione</h3>
                  <p>
                    Pitta è associato agli elementi fuoco e acqua. Nella filosofia ayurvedica rappresenta la trasformazione ed è tradizionalmente collegato alla digestione, al metabolismo e all'elaborazione delle esperienze.
                  </p>
                  <h4>Caratteristiche del dosha Pitta</h4>
                  <p>Le descrizioni tradizionali delle caratteristiche Pitta includono:</p>
                  <ul>
                    <li>Forte concentrazione e determinazione.</li>
                    <li>Pensiero organizzato.</li>
                    <li>Qualità di leadership.</li>
                    <li>Sicurezza e ambizione.</li>
                    <li>Interesse per la pianificazione e il raggiungimento degli obiettivi.</li>
                  </ul>
                  <p>
                    Le tradizioni ayurvediche associano lo squilibrio di Pitta a caratteristiche come irritabilità, calore eccessivo e impazienza.
                  </p>
                  <h4>Come mantenere l'equilibrio di Pitta</h4>
                  <p>
                    Gli approcci ayurvedici tradizionali a Pitta mettono spesso in risalto moderazione, rilassamento ed evitare il calore eccessivo. Pratiche comunemente citate:
                  </p>
                  <ul>
                    <li>Mantenere una routine quotidiana equilibrata.</li>
                    <li>Fare pause dalle attività impegnative.</li>
                    <li>Praticare meditazione o tecniche di rilassamento.</li>
                    <li>Evitare un'esposizione eccessiva al calore.</li>
                    <li>Seguire una dieta varia e nutriente.</li>
                    <li>Mantenere abitudini di sonno regolari.</li>
                  </ul>
                  <p className="note-text">
                    <em>Nota:</em> le raccomandazioni alimentari e di benessere individuali dovrebbero basarsi sulle esigenze personali e su una guida professionale.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">3</div>
                <div className="feature-content">
                  <h3>Kapha Dosha: l'energia della stabilità</h3>
                  <p>
                    Kapha è associato agli elementi terra e acqua. Nella filosofia ayurvedica rappresenta stabilità, struttura e nutrimento. È tradizionalmente collegato a forza, resistenza e funzioni strutturali del corpo.
                  </p>
                  <h4>Caratteristiche del dosha Kapha</h4>
                  <p>Le descrizioni tradizionali delle caratteristiche Kapha includono:</p>
                  <ul>
                    <li>Pazienza e calma.</li>
                    <li>Stabilità e costanza.</li>
                    <li>Lealtà e compassione.</li>
                    <li>Energia costante.</li>
                    <li>Preferenza per la routine e ciò che è familiare.</li>
                  </ul>
                  <p>
                    Le tradizioni ayurvediche associano lo squilibrio di Kapha a caratteristiche come lentezza, pesantezza ed eccessivo attaccamento alla routine.
                  </p>
                  <h4>Come mantenere l'equilibrio di Kapha</h4>
                  <p>
                    Gli approcci ayurvedici tradizionali a Kapha valorizzano spesso il movimento regolare, la varietà e uno stile di vita attivo. Alcune pratiche comunemente citate:
                  </p>
                  <ul>
                    <li>Svolgere attività fisica regolare.</li>
                    <li>Mantenere una routine quotidiana attiva.</li>
                    <li>Seguire una dieta equilibrata e varia.</li>
                    <li>Evitare l'inattività prolungata.</li>
                    <li>Esplorare nuove attività ed esperienze.</li>
                    <li>Mantenere abitudini di sonno costanti.</li>
                  </ul>
                  <p className="note-text">
                    <em>Nota:</em> queste pratiche possono essere adattate al proprio livello di forma fisica e alle proprie esigenze di salute.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Differenze */}
          <section className="post-section">
            <h2>Differenza tra Vata, Pitta e Kapha</h2>
            <p>
              Sebbene tutti e tre i dosha siano importanti nella filosofia ayurvedica, ognuno ha caratteristiche e associazioni tradizionali proprie.
            </p>
            <div className="dosha-table-wrapper">
              <table className="dosha-table">
                <thead>
                  <tr>
                    <th>Dosha</th>
                    <th>Elementi</th>
                    <th>Associazione tradizionale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Vata</strong></td><td>Aria e Spazio</td><td>Movimento</td></tr>
                  <tr><td><strong>Pitta</strong></td><td>Fuoco e Acqua</td><td>Trasformazione</td></tr>
                  <tr><td><strong>Kapha</strong></td><td>Terra e Acqua</td><td>Stabilità</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Comprendere queste differenze aiuta a spiegare perché l'Ayurveda considera tradizionalmente la costituzione individuale quando si parla di stile di vita e benessere.
            </p>
          </section>

          {/* Prakriti */}
          <section className="post-section">
            <h2>Che cos'è la Prakriti in Ayurveda?</h2>
            <p>
              La Prakriti è un concetto importante della filosofia ayurvedica. Si riferisce alla costituzione naturale di un individuo, tradizionalmente compresa attraverso la combinazione unica di Vata, Pitta e Kapha.
            </p>
            <p>Secondo l'Ayurveda, le persone possono avere:</p>
            <ul className="benefits-checklist">
              <li><CheckCircle2 size={20} className="check-icon" /><div>Una costituzione a predominanza Vata.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Una costituzione a predominanza Pitta.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Una costituzione a predominanza Kapha.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Combinazioni di due dosha dominanti.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Una combinazione relativamente equilibrata di tutti e tre i dosha.</div></li>
            </ul>
            <p>
              Questo concetto mette in evidenza la convinzione ayurvedica tradizionale secondo cui ogni individuo ha caratteristiche fisiche e comportamentali differenti.
            </p>
            <p className="disclaimer-callout">
              <em>Importante:</em> le valutazioni della Prakriti sono tradizionalmente eseguite da professionisti ayurvedici. Quiz online o descrizioni della personalità non devono essere considerati valutazioni mediche né diagnosi definitive.
            </p>
          </section>

          {/* Perché è importante */}
          <section className="post-section">
            <h2>Perché è importante comprendere i tre dosha?</h2>
            <p>
              Conoscere Vata, Pitta e Kapha offre un'introduzione a uno dei concetti centrali dell'Ayurveda. Ecco alcuni motivi per cui è utile:
            </p>
            <div className="integration-steps">
              <div className="integration-step">
                <h4>1. Comprendere le differenze individuali</h4>
                <p>
                  L'Ayurveda riconosce che ogni persona ha una costituzione e delle esigenze di vita diverse. Il concetto di dosha offre un quadro tradizionale per parlare di queste differenze.
                </p>
              </div>
              <div className="integration-step">
                <h4>2. Apprendere i principi tradizionali del benessere</h4>
                <p>
                  Comprendere i dosha introduce al rapporto tradizionale tra i cinque elementi, il corpo umano e le pratiche di vita ayurvediche.
                </p>
              </div>
              <div className="integration-step">
                <h4>3. Sviluppare consapevolezza sullo stile di vita</h4>
                <p>
                  Conoscere le routine ayurvediche può incoraggiare a riflettere su abitudini alimentari, attività fisica, sonno e rilassamento.
                </p>
              </div>
              <div className="integration-step">
                <h4>4. Esplorare una conoscenza olistica della salute</h4>
                <p>
                  I tre dosha sono parte integrante dell'approccio più ampio dell'Ayurveda alla relazione tra corpo, mente e ambiente.
                </p>
              </div>
            </div>
          </section>

          {/* Principianti */}
          <section className="post-section">
            <h2>Come possono i principianti studiare i tre dosha?</h2>
            <p>
              Se ti avvicini per la prima volta all'Ayurveda, comprendere i tre dosha è un ottimo punto di partenza. Puoi iniziare:
            </p>
            <ul className="benefits-checklist">
              <li><CheckCircle2 size={20} className="check-icon" /><div>Imparando il significato di base di Vata, Pitta e Kapha.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Comprendendo i cinque elementi nella filosofia ayurvedica.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Esplorando il concetto di Prakriti.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Leggendo delle routine quotidiane ayurvediche tradizionali.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Scoprendo come l'Ayurveda affronta alimentazione e stile di vita.</div></li>
              <li><CheckCircle2 size={20} className="check-icon" /><div>Studiando le basi storiche della conoscenza ayurvedica.</div></li>
            </ul>
            <p>
              Per un apprendimento strutturato, scegli risorse formative che spieghino chiaramente i concetti tradizionali e forniscano informazioni sulle qualifiche dei docenti e sui contenuti dei corsi.
            </p>
            <div className="internal-promo-banner">
              <p>
                Su <Link to="/accademia" className="internal-link">Arya Veda Academy</Link> puoi scoprire di più sulla nostra offerta formativa e sulle opportunità di studio dell'Ayurveda. Puoi anche esplorare i nostri <Link to="/corsi-viaggi" className="internal-link">Corsi di Ayurveda</Link> per approfondire i principi ayurvedici tradizionali.
              </p>
            </div>
          </section>

          {/* Medicina moderna */}
          <section className="post-section">
            <h2>Ayurveda e medicina moderna</h2>
            <p>
              L'Ayurveda offre un quadro tradizionale per comprendere il benessere, lo stile di vita e la costituzione individuale. Tuttavia, i dosha sono concetti della filosofia ayurvedica e non categorie mediche scientificamente riconosciute né test diagnostici.
            </p>
            <p>
              Pratiche come un'alimentazione equilibrata, attività fisica regolare, sonno adeguato e rilassamento possono sostenere il benessere generale. Tuttavia, i singoli trattamenti e prodotti ayurvedici vanno valutati individualmente in termini di efficacia e sicurezza.
            </p>
            <p className="disclaimer-callout">
              <em>Avvertenza:</em> rivolgiti sempre a un professionista sanitario qualificato per problemi medici, diagnosi o decisioni terapeutiche. Non interrompere farmaci prescritti e non sostituire un trattamento medico con un rimedio ayurvedico senza il parere di un professionista.
            </p>
          </section>

          {/* FAQ */}
          <section className="post-section faq-section">
            <h2>Domande frequenti (FAQ)</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-content">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Conclusione */}
          <section className="post-section conclusion-section">
            <h2>Conclusione</h2>
            <p>
              I tre dosha, Vata, Pitta e Kapha, sono tra i concetti più importanti della filosofia ayurvedica. Ognuno rappresenta una diversa combinazione di elementi e caratteristiche tradizionali associate a movimento, trasformazione e stabilità.
            </p>
            <p>
              Comprendere questi concetti offre una base per esplorare l'Ayurveda e il suo approccio tradizionale alla costituzione individuale, alle abitudini di vita e al benessere olistico.
            </p>
            <p>
              Che tu sia interessato alla storia dell'Ayurveda, alle pratiche di benessere tradizionali o a una formazione professionale, esplorare i tre dosha è un ottimo modo per iniziare il tuo percorso nell'Ayurveda.
            </p>

            <div className="conclusion-cta-card">
              <h3>Vuoi saperne di più sulla conoscenza ayurvedica tradizionale?</h3>
              <p>
                Visita <Link to="/accademia">Arya Veda Academy</Link> ed esplora le opportunità formative per approfondire la tua comprensione dell'Ayurveda, oppure <Link to="/contact">contatta il nostro team</Link> per ricevere informazioni.
              </p>
              <div className="cta-actions">
                <Link to="/accademia" className="btn btn-primary">
                  Scopri l'Accademia <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>
                  Contattaci
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDosha;
