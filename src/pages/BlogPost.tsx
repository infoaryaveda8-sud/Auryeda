import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ChevronLeft, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import './BlogPost.css';

const faqs = [
  {
    q: "1. Perché l'Ayurveda è importante nella nostra vita?",
    a: "L'Ayurveda è prezioso per molti poiché valorizza l'armonia quotidiana, l'alimentazione attenta, le routine regolari, il sonno e la visione olistica del benessere. I suoi insegnamenti si integrano con le raccomandazioni fondate su prove scientifiche per la salvaguardia della salute."
  },
  {
    q: "2. Quali sono i principi fondamentali dell'Ayurveda?",
    a: "Il pensiero ayurvedico poggia su nozioni come i cinque elementi, i tre dosha, la costituzione individuale, l'equilibrio energetico e la regolarità giornaliera. Le varie correnti e i testi classici ne declinano i principi con diverse sfumature."
  },
  {
    q: "3. L'Ayurveda può aiutare a migliorare lo stile di vita?",
    a: "Varie pratiche legate all'Ayurveda – ad esempio yoga, meditazione, sana alimentazione e regolarità nei ritmi – possono sostenere uno stile di vita armonioso. L'efficacia e la sicurezza dei singoli trattamenti variano ampiamente, per cui ogni rimedio va valutato con prudenza."
  },
  {
    q: "4. L'Ayurveda è adatto a tutti?",
    a: "Non tutte le pratiche o i prodotti ayurvedici sono indicati per chiunque. Fattori come età, quadri clinici, gravidanza, allergie e assunzione di farmaci incidono sulla sicurezza d'uso. Consulta un medico prima di intraprendere trattamenti ayurvedici a fini terapeutici."
  },
  {
    q: "5. Da dove può iniziare un principiante per studiare l'Ayurveda?",
    a: "Chi comincia può dedicarsi alla storia ayurvedica, ai principi basilari, alla cura delle abitudini e all'approccio tradizionale all'alimentazione. È bene orientarsi verso fonti formative autorevoli e chiedere consulto a professionisti qualificati per questioni di salute individuali."
  }
];

const BlogPost = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Perché l'Ayurveda è importante nella nostra vita? Benefici dell'Ayurveda | Arya Veda";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Scopri perché l'Ayurveda è importante nella vita quotidiana. Esplora i principi ayurvedici, le abitudini sane, il benessere naturale e la vita olistica.");
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
          <span className="post-category-tag">Benessere & Stile di Vita</span>
          <h1 className="post-main-title">
            Perché l'Ayurveda è importante nella nostra vita? I benefici dell'Ayurveda per uno stile di vita sano
          </h1>

          <div className="post-meta-details">
            <span className="meta-item">
              <User size={15} /> Redazione Arya Veda
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Calendar size={15} /> 26 Ottobre 2026
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <Clock size={15} /> 8 min di lettura
            </span>
          </div>
        </div>
      </header>


      {/* Post Content */}
      <div className="container post-content-container">
        <div className="post-body">
          {/* Intro Section */}
          <section className="post-intro-box">
            <p className="lead-paragraph">
              Nel mondo frenetico di oggi, mantenere uno stile di vita sano è diventato più importante che mai. Orari fitti di impegni, abitudini alimentari irregolari, stress, sonno insufficiente e attività fisica limitata possono compromettere il nostro benessere generale. Poiché le persone cercano sempre più modi per sviluppare abitudini più sane, l'Ayurveda offre un approccio tradizionale per comprendere la salute, l'equilibrio e la vita quotidiana.
            </p>
            <p>
              L'Ayurveda è importante nella nostra vita perché incoraggia uno stile di vita equilibrato attraverso un'alimentazione consapevole, routine quotidiane adeguate, attività fisica, riposo sufficiente e una comprensione delle esigenze individuali. Nato in India migliaia di anni fa, l'Ayurveda è un sistema tradizionale di conoscenza della salute incentrato sulla relazione tra corpo, mente, stile di vita e ambiente.
            </p>
            <p className="quote-callout">
              Ma cosa rende l'Ayurveda rilevante nella vita moderna? Quali sono i benefici dell'Ayurveda e come possiamo integrare i suoi principi nella nostra routine quotidiana? Scopriamolo insieme.
            </p>
          </section>

          {/* Section: Che cos'è l'Ayurveda? */}
          <section className="post-section">
            <h2>Che cos'è l'Ayurveda?</h2>
            <p>
              L'Ayurveda è un sistema tradizionale indiano di salute e benessere. La parola deriva da due termini sanscriti: <strong>Ayur</strong>, che significa vita, e <strong>Veda</strong>, che significa conoscenza. Insieme, l'Ayurveda è comunemente inteso come la <em>"conoscenza della vita"</em>.
            </p>
            <p>
              L'approccio ayurvedico pone l'accento sul mantenimento dell'equilibrio attraverso abitudini di vita, scelte alimentari, riposo, movimento e pratiche di benessere tradizionali. Invece di concentrarsi unicamente sui singoli sintomi, considera lo stile di vita più ampio e il benessere generale di una persona.
            </p>
            
            <div className="dosha-highlight-card">
              <h3>I Tre Dosha: Vata, Pitta e Kapha</h3>
              <p>
                Uno dei concetti chiave dell'Ayurveda sono i tre dosha: <strong>Vata</strong>, <strong>Pitta</strong> e <strong>Kapha</strong>. Si tratta di principi tradizionali utilizzati per descrivere diversi modelli di funzionamento fisico e mentale. I professionisti ayurvedici tengono conto di questi concetti quando valutano la costituzione e lo stile di vita di un individuo.
              </p>
            </div>

            <p>
              L'Ayurveda occupa un posto fondamentale nel patrimonio tradizionale indiano e continua ad attrarre chi desidera comprendere il benessere olistico e adottare abitudini quotidiane più sane.
            </p>
            
            <div className="internal-promo-banner">
              <p>
                Per iniziare a esplorare la conoscenza ayurvedica tradizionale, visita la nostra <Link to="/accademia" className="internal-link">Arya Veda Academy</Link> per saperne di più sull'accademia e sui percorsi di studio.
              </p>
            </div>
          </section>

          {/* Section: Perché l'Ayurveda è importante */}
          <section className="post-section">
            <h2>Perché l'Ayurveda è importante nella nostra vita quotidiana?</h2>
            <p>
              L'importanza dell'Ayurveda nella vita quotidiana risiede nell'attenzione rivolta a prevenzione, routine, moderazione e consapevolezza delle proprie necessità personali. Molti dei suoi principi sullo stile di vita possono integrarsi perfettamente con gli approcci moderni al mantenimento della salute.
            </p>

            <div className="numbered-features-grid">
              <div className="numbered-feature-card">
                <div className="feature-number">1</div>
                <div className="feature-content">
                  <h3>L'Ayurveda incoraggia uno stile di vita equilibrato</h3>
                  <p>
                    Uno stile di vita equilibrato richiede molto più del semplice consumo di cibo nutriente: include anche dormire a sufficienza, rimanere fisicamente attivi, gestire lo stress e ritagliarsi del tempo per il relax.
                  </p>
                  <p>
                    L'Ayurveda incoraggia le persone a prestare attenzione alla propria routine quotidiana e al modo in cui essa influenza il benessere complessivo. Mantenere orari regolari per i pasti, definire un programma di sonno costante e trovare il tempo per muoversi sono abitudini pratiche in piena sintonia con questa visione. Piccoli e costanti cambiamenti possono aiutare a costruire un approccio più sostenibile a una vita sana.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">2</div>
                <div className="feature-content">
                  <h3>L'Ayurveda promuove un'alimentazione sana e consapevole</h3>
                  <p>
                    Il cibo ricopre un ruolo di primo piano nella filosofia ayurvedica. Le pratiche alimentari tradizionali dell'Ayurveda consigliano di mangiare con consapevolezza, prestando attenzione ad aspetti quali appetito, digestione, preparazione dei cibi ed esigenze individuali.
                  </p>
                  <p>
                    Nella vita di tutti i giorni, ciò significa consumare i pasti a orari ragionevolmente regolari, seguire una dieta varia ed equilibrata, mangiare lentamente e ascoltare i segnali di fame e sazietà. Verdure fresche, frutta, cereali integrali, legumi, frutta a guscio e altri alimenti nutrienti possono comporre un regime alimentare bilanciato.
                  </p>
                  <p className="note-text">
                    <em>Nota:</em> È importante ricordare che le indicazioni alimentari ayurvediche non devono sostituire i consigli nutrizionali basati su evidenze scientifiche, in particolare per individui con condizioni mediche preesistenti.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">3</div>
                <div className="feature-content">
                  <h3>L'Ayurveda supporta la gestione dello stress e il benessere mentale</h3>
                  <p>
                    La vita contemporanea richiede un notevole dispendio di tempo ed energie. Il lavoro, lo studio, le responsabilità familiari e le distrazioni digitali possono rendere difficile concedersi autentici momenti di riposo.
                  </p>
                  <p>
                    Le tradizioni ayurvediche comprendono pratiche come la meditazione, gli esercizi di respirazione (pranayama), lo yoga e la definizione di una routine rilassante. Tali pratiche possono favorire una maggiore consapevolezza, distensione e capacità di gestione dello stress.
                  </p>
                  <p className="note-text">
                    L'Ayurveda può rientrare in un percorso più ampio di cura del sé, fermo restando che stati persistenti di ansia, depressione o altre difficoltà psicologiche vanno affrontati con un professionista sanitario qualificato.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">4</div>
                <div className="feature-content">
                  <h3>L'Ayurveda valorizza il sonno e la routine quotidiana</h3>
                  <p>
                    Il sonno è fondamentale per la salute fisica, la concentrazione, l'umore e il rendimento giornaliero. L'Ayurveda attribuisce grande importanza alla costanza dei ritmi quotidiani, spesso riassunti nel concetto tradizionale di <strong>Dinacharya</strong>.
                  </p>
                  <p>
                    Tra le abitudini pratiche ispirate a questo principio rientrano lo svegliarsi e l'andare a dormire a orari stabili, la cura dell'igiene personale, la regolarità dei pasti e una routine serale distensiva prima di coricarsi.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">5</div>
                <div className="feature-content">
                  <h3>L'Ayurveda incoraggia un benessere personalizzato</h3>
                  <p>
                    Un tratto distintivo dell'Ayurveda è l'attenzione alle peculiarità individuali. I terapeuti ayurvedici tradizionali valutano la costituzione della persona, il suo stile di vita, l'ambiente circostante e i disturbi riferiti per delineare le routine più adatte.
                  </p>
                  <p>
                    Questo approccio spinge a sviluppare una consapevolezza autentica delle proprie esigenze, anziché seguire in modo acritico ogni tendenza passeggera del web.
                  </p>
                </div>
              </div>

              <div className="numbered-feature-card">
                <div className="feature-number">6</div>
                <div className="feature-content">
                  <h3>L'Ayurveda unisce la salute alle abitudini quotidiane</h3>
                  <p>
                    L'Ayurveda invita a riflettere su come le scelte di ogni giorno incidano sul benessere globale. Regime alimentare, attività fisica, riposo, gestione dello stress e cura di sé compongono un unico quadro integrato.
                  </p>
                  <p>
                    Consolidare buone abitudini con regolarità è molto più efficace e sostenibile rispetto al ricorso sporadico a rimedi di benessere. Gesti semplici, come camminare ogni giorno, nutrirsi in modo bilanciato, idratarsi a dovere e riposare a sufficienza, promuovono la vitalità generale.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Benefici dell'Ayurveda */}
          <section className="post-section">
            <h2>Quali sono i principali benefici dell'Ayurveda?</h2>
            <p>
              Ci si avvicina all'Ayurveda per molteplici motivi, a partire dal suo sguardo tradizionale su abitudini, autoconsapevolezza e vitalità. Tra gli ambiti di maggiore interesse figurano:
            </p>

            <ul className="benefits-checklist">
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Benessere olistico:</strong> considerare in sinergia stile di vita, equilibrio mentale, forma fisica e ambiente circostante.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Alimentazione consapevole:</strong> prestare cura alle scelte gastronomiche, alla modalità dei pasti e alle necessità dietetiche individuali.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Pratiche distensive:</strong> sperimentare meditazione, yoga ed esercizi respiratori per alleviare le tensioni quotidiane.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Routine salutari:</strong> introdurre regolarità nel riposo notturno, nei pasti, nel movimento fisico e nella cura personale.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Sapere tradizionale sul benessere:</strong> conoscere il patrimonio millenario dell'India dedicato alla salute e all'armonia quotidiana.
                </div>
              </li>
              <li>
                <CheckCircle2 size={20} className="check-icon" />
                <div>
                  <strong>Consapevolezza di sé:</strong> ascoltare l'impatto delle consuetudini giornaliere su energia, vitalità, umore e benessere generale.
                </div>
              </li>
            </ul>

            <p className="disclaimer-callout">
              <em>Avvertenza:</em> I risultati dei singoli trattamenti ayurvedici possono variare considerevolmente e le evidenze scientifiche divergono in base alla pratica o al prodotto utilizzato. L'Ayurveda non deve essere considerato una cura certa contro le malattie né il sostituto dei trattamenti medici convenzionali.
            </p>
          </section>

          {/* Section: Come integrare l'Ayurveda */}
          <section className="post-section">
            <h2>Come integrare l'Ayurveda nella propria routine quotidiana?</h2>
            <p>
              Non serve stravolgere la propria vita dall'oggi al domani per avvicinarsi ai principi ayurvedici: è preferibile partire da piccoli passi concreti e compatibili con le proprie giornate.
            </p>

            <div className="integration-steps">
              <div className="integration-step">
                <h4>Inizia la mattina con consapevolezza</h4>
                <p>
                  Apri la giornata curando l'igiene personale, bevendo un bicchiere d'acqua tiepida (se gradito) e dedicando qualche minuto a movimenti dolci o alla riflessione silenziosa. Imposta una routine mattutina piacevole e facile da mantenere nel tempo.
                </p>
              </div>

              <div className="integration-step">
                <h4>Consuma pasti bilanciati</h4>
                <p>
                  Dai priorità a una gamma variegata di cibi nutrienti, tra cui ortaggi, frutta, cereali integrali e buone fonti proteiche. Mangia con calma e considera il tuo fabbisogno nutritivo individuale senza sottoporti a diete restrittive prive di supervisione professionale.
                </p>
              </div>

              <div className="integration-step">
                <h4>Trova il tempo per muoverti</h4>
                <p>
                  Camminate, yoga, stretching e altre attività motorie possono essere inserite gradualmente in base alle tue capacità fisiche e al tuo stato di salute. Il movimento costante è un pilastro irrinunciabile del vivere sano.
                </p>
              </div>

              <div className="integration-step">
                <h4>Pratica il rilassamento</h4>
                <p>
                  Riserva qualche momento alla meditazione, alla respirazione calma o a un passatempo distensivo. In presenza di patologie respiratorie o di altra natura clinica, chiedi il parere del medico prima di dedicarti a tecniche di respirazione avanzate.
                </p>
              </div>

              <div className="integration-step">
                <h4>Mantieni orari regolari per il sonno</h4>
                <p>
                  Cerca di andare a letto e svegliarti a orari costanti. Creare una stanza da letto confortevole e dedicarsi ad attività rilassanti prima di dormire aiuta a migliorare la qualità del riposo.
                </p>
              </div>

              <div className="integration-step warning-step">
                <h4>Informati prima di assumere prodotti ayurvedici</h4>
                <p>
                  Erbe, integratori, oli e preparati ayurvedici possono comportare controindicazioni o interagire con terapie farmacologiche in corso. Alcuni formulati di scarsa provenienza possono inoltre contenere metalli pesanti o sostanze contaminanti. Chiedi sempre il parere di un medico qualificato prima di assumere preparati officinali, in particolare durante la gravidanza o l'allattamento.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Ayurveda e medicina moderna */}
          <section className="post-section">
            <h2>Ayurveda e medicina moderna: trovare il giusto equilibrio</h2>
            <p>
              L'Ayurveda vanta un innegabile valore culturale, storico e applicativo per chi apprezza il benessere naturale. Al contempo, occorre distinguere con lucidità le credenze tradizionali dalle terapie supportate da rigorose evidenze scientifiche.
            </p>
            <p>
              Mangiare sano, fare esercizio, dormire bene e contenere lo stress sono capisaldi universali della salute. Tuttavia, le proprietà attribuite a determinate erbe, i protocolli depurativi o i singoli rimedi vanno verificati con rigore, senza dare per scontata la loro efficacia solo perché definiti naturali o millenari.
            </p>
            <p>
              La condotta più saggia consiste nell'unire abitudini virtuose a un'assistenza medica appropriata. Rivolgiti a un medico per ogni percorso diagnostico, terapeutico, per disturbi persistenti o per qualsiasi dubbio sull'uso di formulati ayurvedici.
            </p>
          </section>

          {/* Section: Perché studiare l'Ayurveda? */}
          <section className="post-section">
            <h2>Perché studiare l'Ayurveda?</h2>
            <p>
              Approfondire l'Ayurveda consente di entrare in contatto con il patrimonio di conoscenze indiano su salute, abitudini e benessere. Comprenderne i concetti cardine offre inoltre una prospettiva affascinante sul modo in cui i sistemi olistici tradizionali interpretano le necessità umane e i ritmi giornalieri.
            </p>
            <p>
              Chi desidera studiare l'Ayurveda a fondo farebbe bene a selezionare percorsi formativi trasparenti in merito a programmi, competenze dei docenti, finalità dell'insegnamento e netta distinzione tra tradizioni culturali e medicina basata sull'evidenza clinica.
            </p>
            <p>
              Presso Arya Veda Academy è possibile esplorare la proposta formativa dell'accademia. Se intendi seguire un percorso strutturato, valuta i nostri <Link to="/corsi-viaggi" className="internal-link">Corsi di Ayurveda</Link> verificando che rispondano ai tuoi obiettivi conoscitivi e professionali.
            </p>
          </section>

          {/* Section: FAQ */}
          <section className="post-section faq-section">
            <h2>Domande frequenti sull'Ayurveda (FAQ)</h2>
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
            <h2>Conclusione: Integrare l'Ayurveda in un percorso di benessere consapevole</h2>
            <p>
              L'Ayurveda rappresenta un tassello significativo dell'eredità medica tradizionale indiana, offrendo uno sguardo stimolante su stile di vita, armonia interiore e salute integrata. Il risalto accordato ad abitudini consapevoli, ritmi stabili, rilassamento e ascolto dei bisogni soggettivi stimola ad approcciarsi all'esistenza con maggiore cura.
            </p>
            <p>
              Il segreto sta nell'accostarsi all'Ayurveda con curiosità, senso critico e piena consapevolezza dei suoi limiti: consolidare abitudini virtuose passo dopo passo, vagliare con attenzione ogni affermazione sulla salute e affidarsi sempre alla medicina convenzionale ogniqualvolta risulti necessario.
            </p>

            <div className="conclusion-cta-card">
              <h3>Desideri approfondire l'Ayurveda e i suoi principi tradizionali?</h3>
              <p>
                Visita <Link to="/accademia">Arya Veda Academy</Link> per esplorare il nostro istituto e conoscere più da vicino i corsi e le pratiche tradizionali, oppure <Link to="/contact">contatta il nostro team</Link> per ricevere informazioni dettagliate.
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

export default BlogPost;
