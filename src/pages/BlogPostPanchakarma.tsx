import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronLeft, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import './BlogPost.css';

const faqs = [
  {
    q: "1. Che cos'è il Panchakarma in Ayurveda?",
    a: "Il Panchakarma è un approccio terapeutico ayurvedico tradizionale composto da cinque procedure principali: Vamana, Virechana, Basti, Nasya e Raktamokshana."
  },
  {
    q: "2. Quali sono i cinque tipi di Panchakarma?",
    a: "Le cinque procedure principali sono Vamana, Virechana, Basti, Nasya e Raktamokshana. Ognuna ha una descrizione e un ruolo distinti nella pratica ayurvedica classica."
  },
  {
    q: "3. Quanto dura un trattamento di Panchakarma?",
    a: "La durata varia in base alla persona, alle procedure scelte e al piano di trattamento del professionista. Non esiste una durata unica adatta a tutti."
  },
  {
    q: "4. Il Panchakarma è adatto a tutti?",
    a: "No. Le procedure del Panchakarma non sono adatte a tutti. Prima del trattamento è necessario considerare anamnesi, età, condizioni preesistenti, farmaci assunti e altri fattori."
  },
  {
    q: "5. Qual è la differenza tra il Panchakarma e i comuni programmi detox?",
    a: "Il Panchakarma è un approccio ayurvedico tradizionale specializzato che prevede procedure specifiche e la supervisione di un professionista. I programmi detox generici possono riferirsi a un'ampia varietà di pratiche e prodotti tra loro non correlati."
  },
  {
    q: "6. Il Panchakarma può curare le malattie?",
    a: "Il Panchakarma non deve essere considerato una cura garantita per le malattie. Le evidenze sulla sua efficacia variano e non deve sostituire diagnosi o trattamenti medici basati su prove scientifiche."
  }
];

const BlogPostPanchakarma = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Che cos'è il Panchakarma in Ayurveda? Benefici, tipi e processo | Arya Veda";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Scopri cos'è il Panchakarma in Ayurveda, le sue cinque terapie tradizionali, i potenziali benefici, la preparazione e la sua importanza nel benessere ayurvedico.");
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "Panchakarma, Panchakarma Ayurveda, cinque terapie Panchakarma, Vamana, Virechana, Basti, Nasya, Raktamokshana, purificazione ayurvedica");
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
          <span className="post-category-tag">Trattamenti Ayurvedici</span>
          <h1 className="post-main-title">
            Che cos'è il Panchakarma in Ayurveda? Benefici, tipi e la sua importanza
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
              <Clock size={15} /> 10 min di lettura
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
              L'Ayurveda è un sistema tradizionale indiano di salute e benessere che si concentra sulla relazione tra corpo, mente, stile di vita e ambiente. Tra le sue numerose terapie tradizionali, il <strong>Panchakarma</strong> occupa un posto speciale come approccio ayurvedico strutturato alla purificazione e al ringiovanimento.
            </p>
            <p>
              Negli ultimi anni, sempre più persone si sono interessate alle pratiche di benessere tradizionali e agli approcci olistici alla salute. Questo ha accresciuto la curiosità verso il Panchakarma, le sue procedure tradizionali e il suo ruolo nella medicina ayurvedica.
            </p>
            <p className="quote-callout">
              Ma che cos'è esattamente il Panchakarma? Quali sono le sue cinque terapie e perché è considerato così importante in Ayurveda?
            </p>
            <p>
              In questo articolo esploreremo il significato del Panchakarma, i suoi metodi tradizionali, i potenziali benefici e le precauzioni da conoscere prima di prendere in considerazione queste terapie.
            </p>
          </section>

          {/* Cos'è */}
          <section className="post-section">
            <h2>Che cos'è il Panchakarma in Ayurveda?</h2>
            <p>
              Il Panchakarma è un approccio terapeutico ayurvedico tradizionale che comprende cinque procedure principali. Il termine deriva da due parole sanscrite: <strong>Pancha</strong>, che significa cinque, e <strong>Karma</strong>, che significa azioni o procedure.
            </p>
            <p>
              Nella pratica ayurvedica tradizionale, il Panchakarma fa parte di un approccio terapeutico personalizzato volto ad affrontare gli squilibri percepiti e a sostenere i processi naturali dell'organismo.
            </p>
            <p>
              A differenza delle comuni routine di benessere, il Panchakarma prevede procedure specifiche che possono richiedere preparazione, supervisione e cure post-trattamento da parte di professionisti ayurvedici qualificati.
            </p>
            <div className="dosha-highlight-card">
              <h3>Una scelta personalizzata</h3>
              <p>
                La selezione delle procedure dipende dalle valutazioni tradizionali, dalle condizioni di salute individuali e dalle raccomandazioni del professionista.
              </p>
            </div>
          </section>

          {/* Cinque terapie */}
          <section className="post-section">
            <h2>Quali sono le cinque terapie principali del Panchakarma?</h2>
            <p>
              Le cinque procedure principali tradizionalmente associate al Panchakarma sono <strong>Vamana</strong>, <strong>Virechana</strong>, <strong>Basti</strong>, <strong>Nasya</strong> e <strong>Raktamokshana</strong>. Ognuna ha un ruolo distinto nella pratica ayurvedica classica.
            </p>

            <div className="numbered-features-grid">
              <div className="numbered-feature-card">
                <div className="feature-number">1</div>
                <div className="feature-content">
                  <h3>Vamana – Emesi terapeutica</h3>
                  <p>
                    Il Vamana è una procedura ayurvedica tradizionale che prevede il vomito terapeutico sotto supervisione medica. Nell'Ayurveda classica è tradizionalmente associato alla gestione delle condizioni legate a Kapha.
                  </p>
                  <p className="note-text">
                    <em>Attenzione:</em> non si tratta di un metodo detox generico e non deve mai essere eseguito da soli. Richiede un'attenta valutazione e la supervisione di un professionista adeguatamente qualificato, poiché può comportare rischi medici significativi.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">2</div>
                <div className="feature-content">
                  <h3>Virechana – Purgazione terapeutica</h3>
                  <p>
                    Il Virechana è una procedura tradizionale che prevede l'uso supervisionato di preparati purgativi per indurre l'evacuazione intestinale. Nella filosofia ayurvedica è tradizionalmente associato agli squilibri legati a Pitta.
                  </p>
                  <p className="note-text">
                    <em>Attenzione:</em> la procedura richiede una valutazione professionale, poiché la purgazione può causare disidratazione, alterazioni degli elettroliti e altre complicazioni.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">3</div>
                <div className="feature-content">
                  <h3>Basti – Terapia con clistere medicato</h3>
                  <p>
                    Il Basti è una procedura importante nella pratica tradizionale del Panchakarma. Prevede la somministrazione di preparati medicati selezionati per via rettale. I testi ayurvedici tradizionali associano il Basti in particolare alle condizioni legate a Vata.
                  </p>
                  <p>
                    La letteratura ayurvedica descrive diversi tipi di Basti, la cui scelta dipende da considerazioni cliniche tradizionali.
                  </p>
                  <p className="note-text">
                    <em>Attenzione:</em> si tratta di una procedura specialistica da eseguire solo sotto un'adeguata supervisione professionale.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">4</div>
                <div className="feature-content">
                  <h3>Nasya – Terapia di somministrazione nasale</h3>
                  <p>
                    Il Nasya è una procedura ayurvedica tradizionale che prevede la somministrazione di preparati selezionati attraverso le vie nasali. Nell'Ayurveda classica è descritto come una procedura associata alla regione della testa e del collo.
                  </p>
                  <p>
                    Le sostanze e i metodi utilizzati possono variare in base alla valutazione del professionista e all'approccio tradizionale seguito.
                  </p>
                  <p className="note-text">
                    <em>Attenzione:</em> il Nasya non va confuso con la normale igiene nasale o con rimedi autosomministrati. La guida di un professionista è importante.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">5</div>
                <div className="feature-content">
                  <h3>Raktamokshana – Salasso tradizionale</h3>
                  <p>
                    Il Raktamokshana è una procedura ayurvedica tradizionale che prevede la rimozione di una piccola quantità di sangue mediante metodi specifici. Nella letteratura ayurvedica classica è descritto come una procedura terapeutica specialistica.
                  </p>
                  <p className="note-text">
                    <em>Attenzione:</em> poiché comporta la rimozione di sangue, presenta rischi come infezioni, sanguinamento e anemia. Richiede competenze cliniche adeguate, condizioni sterili e un'attenta valutazione.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefici */}
          <section className="post-section">
            <h2>Quali sono i benefici del Panchakarma?</h2>
            <p>
              Il Panchakarma è tradizionalmente descritto come un approccio di purificazione e ringiovanimento all'interno dell'Ayurveda. Alcune persone lo esplorano come parte della medicina ayurvedica tradizionale. Tra gli obiettivi più comunemente citati:
            </p>

            <ul className="benefits-checklist">
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Approccio tradizionale alla purificazione:</strong> secondo la filosofia ayurvedica, il Panchakarma mira a eliminare le scorie accumulate e ad affrontare gli squilibri. Questi concetti tradizionali non vanno confusi con affermazioni di disintossicazione scientificamente dimostrate.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Cura ayurvedica personalizzata:</strong> le procedure vengono tradizionalmente scelte in base alla costituzione individuale, alle problematiche di salute e alla valutazione del professionista.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Attenzione al miglioramento dello stile di vita:</strong> un programma di Panchakarma può includere indicazioni alimentari, riposo e modifiche della routine quotidiana.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Pratiche tradizionali di ringiovanimento:</strong> alcuni programmi includono, dopo le procedure, pratiche di ringiovanimento conosciute in Ayurveda come <em>Rasayana</em>.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Maggiore conoscenza del benessere tradizionale:</strong> conoscere il Panchakarma avvicina alle terapie ayurvediche classiche, alle loro basi storiche e al loro ruolo nella medicina tradizionale.
                </div>
              </li>
            </ul>

            <p className="disclaimer-callout">
              <em>Avvertenza:</em> le evidenze scientifiche sull'efficacia del Panchakarma come trattamento per malattie specifiche restano limitate e variano da procedura a procedura. Non deve essere considerato una cura dimostrata né un sostituto dei trattamenti medici moderni.
            </p>
          </section>

          {/* Tre fasi */}
          <section className="post-section">
            <h2>Quali sono le tre fasi del Panchakarma?</h2>
            <p>
              I programmi tradizionali di Panchakarma descrivono comunemente tre fasi: <strong>Purvakarma</strong>, <strong>Pradhanakarma</strong> e <strong>Paschatkarma</strong>.
            </p>

            <div className="integration-steps">
              <div className="integration-step">
                <h4>1. Purvakarma – Fase di preparazione</h4>
                <p>
                  Il Purvakarma è la fase preparatoria che precede le procedure principali del Panchakarma. La preparazione tradizionale può comprendere:
                </p>
                <ul>
                  <li><strong>Snehana:</strong> procedure tradizionali di oleazione, esterna o interna.</li>
                  <li><strong>Swedana:</strong> procedure tradizionali di sudorazione o basate sul calore.</li>
                  <li>Preparazione alimentare e dello stile di vita.</li>
                </ul>
                <p>La preparazione viene scelta in base alla valutazione individuale e alla procedura prevista.</p>
              </div>

              <div className="integration-step">
                <h4>2. Pradhanakarma – Fase del trattamento principale</h4>
                <p>
                  Il Pradhanakarma comprende le procedure terapeutiche principali del Panchakarma. A seconda del piano di trattamento, il professionista può scegliere una o più delle cinque procedure principali.
                </p>
                <p>Il processo richiede strutture cliniche adeguate, monitoraggio e supervisione professionale.</p>
              </div>

              <div className="integration-step">
                <h4>3. Paschatkarma – Cure post-trattamento</h4>
                <p>
                  Il Paschatkarma riguarda le cure e la routine da seguire dopo le procedure principali. Le raccomandazioni tradizionali possono includere:
                </p>
                <ul>
                  <li>Adattamenti graduali dell'alimentazione.</li>
                  <li>Riposo adeguato.</li>
                  <li>Una routine quotidiana strutturata.</li>
                  <li>Evitare attività faticose durante il periodo di recupero consigliato.</li>
                  <li>Partecipare alle visite di controllo.</li>
                </ul>
                <p>Il piano di recupero deve essere personalizzato e basato sul parere di un professionista.</p>
              </div>
            </div>
          </section>

          {/* Chi dovrebbe */}
          <section className="post-section">
            <h2>Chi dovrebbe prendere in considerazione il Panchakarma?</h2>
            <p>
              Il Panchakarma è un ambito specialistico della pratica ayurvedica tradizionale. Chiunque lo stia valutando dovrebbe prima consultare un professionista sanitario qualificato e un professionista ayurvedico adeguatamente formato.
            </p>
            <p>
              Età, condizioni mediche preesistenti, farmaci assunti, eventuale gravidanza e stato di salute generale possono influire sull'idoneità di una procedura. Alcune procedure possono risultare inadatte o particolarmente rischiose per persone con determinate condizioni di salute.
            </p>
            <div className="integration-steps">
              <div className="integration-step warning-step">
                <h4>Non è un detox fai-da-te</h4>
                <p>
                  Il Panchakarma non deve mai essere intrapreso come programma detox fai-da-te né come sostituto di un trattamento medico necessario.
                </p>
              </div>
            </div>
          </section>

          {/* Formazione */}
          <section className="post-section">
            <h2>Perché il Panchakarma è importante nella formazione ayurvedica?</h2>
            <p>
              Comprendere il Panchakarma è una parte importante dello studio dell'Ayurveda classica. Introduce gli studenti ai concetti terapeutici tradizionali, alle procedure specialistiche, ai metodi di preparazione e alle cure post-trattamento.
            </p>
            <p>
              Studiare il Panchakarma offre inoltre una prospettiva sulla relazione tra la filosofia ayurvedica e la pratica clinica tradizionale. Per chiunque desideri esplorare la conoscenza ayurvedica, conoscere il Panchakarma è un tassello prezioso per comprendere il sistema sanitario ayurvedico nel suo insieme.
            </p>
            <div className="internal-promo-banner">
              <p>
                Visita <Link to="/" className="internal-link">Arya Veda Academy</Link> per scoprire di più sull'Ayurveda, sulla nostra offerta formativa e sul nostro approccio all'insegnamento. Se ti interessa un percorso strutturato, esplora i nostri <Link to="/corsi-viaggi" className="internal-link">Corsi di Ayurveda</Link> e scopri le opportunità formative disponibili.
              </p>
            </div>
            <p>
              Per approfondire, leggi anche: <Link to="/blog/perche-ayurveda-e-importante-nella-nostra-vita" className="internal-link">Perché l'Ayurveda è importante nella nostra vita?</Link> e <Link to="/blog/comprendere-i-tre-dosha-in-ayurveda" className="internal-link">Comprendere i tre dosha in Ayurveda: Vata, Pitta e Kapha</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="post-section faq-section">
            <h2>Domande frequenti sul Panchakarma (FAQ)</h2>
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
            <h2>Conclusione: comprendere l'importanza del Panchakarma in Ayurveda</h2>
            <p>
              Il Panchakarma è una parte importante della conoscenza ayurvedica classica. Le sue cinque procedure tradizionali, i metodi di preparazione e le pratiche post-trattamento rappresentano un ambito specialistico della medicina ayurvedica.
            </p>
            <p>
              Comprendere il Panchakarma aiuta ad apprezzare la profondità dell'Ayurveda tradizionale e il suo approccio al benessere personalizzato. Tuttavia, è fondamentale avvicinarsi a queste procedure in modo responsabile, conoscerne i potenziali rischi e chiedere una guida professionale qualificata prima di prendere in considerazione un trattamento.
            </p>

            <div className="conclusion-cta-card">
              <h3>Vuoi scoprire di più sull'Ayurveda e sui suoi principi tradizionali?</h3>
              <p>
                Visita <Link to="/">Arya Veda Academy</Link> per scoprire altre risorse formative e conoscere il sapere tradizionale dell'Ayurveda, oppure <Link to="/contact">contatta il nostro team</Link> per ricevere informazioni.
              </p>
              <div className="cta-actions">
                <Link to="/corsi-viaggi" className="btn btn-primary">
                  Scopri i Corsi <ArrowRight size={16} />
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

export default BlogPostPanchakarma;
