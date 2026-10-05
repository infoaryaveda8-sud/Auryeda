import { useState, useEffect } from 'react';
import './PrakritiTest.css';
import { Download } from 'lucide-react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const questions = [
  {
    id: 1,
    text: "Cos'è l'Ayurveda?",
    options: [
      { text: "Una tecnica di massaggio thailandese", isCorrect: false },
      { text: "Il sistema di medicina tradizionale indiana", isCorrect: true },
      { text: "Una scuola di meditazione moderna", isCorrect: false }
    ]
  },
  {
    id: 2,
    text: "Quali sono i tre Dosha principali in Ayurveda?",
    options: [
      { text: "Yin, Yang, Qi", isCorrect: false },
      { text: "Sole, Luna, Stelle", isCorrect: false },
      { text: "Vata, Pitta, Kapha", isCorrect: true }
    ]
  },
  {
    id: 3,
    text: "Quali elementi compongono il Dosha Vata?",
    options: [
      { text: "Terra e Acqua", isCorrect: false },
      { text: "Aria ed Etere", isCorrect: true },
      { text: "Fuoco e Acqua", isCorrect: false }
    ]
  },
  {
    id: 4,
    text: "Il Dosha Pitta è principalmente associato a:",
    options: [
      { text: "Movimento e respiro", isCorrect: false },
      { text: "Struttura e stabilità", isCorrect: false },
      { text: "Metabolismo e digestione", isCorrect: true }
    ]
  },
  {
    id: 5,
    text: "Quale sapore (Rasa) aiuta a bilanciare il Kapha?",
    options: [
      { text: "Dolce, Acido, Salato", isCorrect: false },
      { text: "Piccante, Amaro, Astringente", isCorrect: true },
      { text: "Solo il sapore Dolce", isCorrect: false }
    ]
  },
  {
    id: 6,
    text: "Secondo l'Ayurveda, cos'è 'Agni'?",
    options: [
      { text: "Una posizione yoga", isCorrect: false },
      { text: "Un tipo di erba curativa", isCorrect: false },
      { text: "Il fuoco digestivo", isCorrect: true }
    ]
  },
  {
    id: 7,
    text: "Il testo classico principale dell'Ayurveda si chiama:",
    options: [
      { text: "Bhagavad Gita", isCorrect: false },
      { text: "Charaka Samhita", isCorrect: true },
      { text: "Upanishad", isCorrect: false }
    ]
  },
  {
    id: 8,
    text: "In quale stagione il Dosha Pitta tende ad aggravarsi?",
    options: [
      { text: "Inverno", isCorrect: false },
      { text: "Primavera", isCorrect: false },
      { text: "Estate", isCorrect: true }
    ]
  },
  {
    id: 9,
    text: "Qual è il significato letterale della parola 'Ayurveda'?",
    options: [
      { text: "Arte di guarire", isCorrect: false },
      { text: "Scienza della Vita", isCorrect: true },
      { text: "Studio delle erbe mediche", isCorrect: false }
    ]
  },
  {
    id: 10,
    text: "Quale tra queste è una tipica tecnica di massaggio ayurvedico?",
    options: [
      { text: "Shiatsu", isCorrect: false },
      { text: "Reiki", isCorrect: false },
      { text: "Abhyanga", isCorrect: true }
    ]
  }
];

const resultsData = {
  vata: {
    title: "Il tipo Vata (aria)",
    description: "Indice e sinonimo di dinamismo, irrequietezza, incostanza e loquacità. A livello fisico si manifesta con magrezza e sottigliezza dei tessuti corporei, freddezza delle estremità, secchezza diffusa. A livello psico-attitudinale tende a dare importanza all' elemento uditivo ed utilizza la propria loquela a sua volta nel lavoro come nella vita per credere ed essere credibile, dotato di scarsa memoria, tende a tenersi continuamente aggiornato. Detesta i climi freddi – secchi, che contribuiscono ad accrescere la sua insicurezza ed il suo nervosismo. Il tipo Vata ha maggiori possibilità di disturbi in Inverno e in avanzata età per intrinseci motivi relativi al dosha predominante."
  },
  pitta: {
    title: "Il tipo Pitta (fuoco)",
    description: "È la rappresentazione del fuoco fatto a persona e, quindi, di tutte le emozioni che ciò ispira, dalla sfera passionale a quella competitiva, dotato di particolari doti di coraggio e generosità. A livello fisico si manifesta con tutto ciò che intendiamo come \"nella media\": media corporatura, altezza, ecc. Possiede una buona digestione e ne deriva un buon controllo della temperatura corporea. A livello psico-attitudinale tanto ama, quanto sa odiare, tende ad avere disturbi del metabolismo, in particolare bruciori ed infiammazioni che lo rendono facilmente irritabile di carattere. Detesta i climi eccessivamente caldi che diminuiscono il suo self-control e la sua capacità di giudizio. Il tipo Pitta ha maggiori possibilità di disturbi con l'avvento della stagione calda"
  },
  kapha: {
    title: "Il tipo Kapha (acqua)",
    description: "Questo tipo, impersona solidità, abbondanza e resistenza. E' dotato di qualità come lungimiranza, pazienza, tolleranza, buona memoria e lunga vita. A livello fisico tende alla grossezza e alla ritenzione, al maggiore spessore dei tessuti corporei. A livello psico-attitudinale può propendere a stati di depressione e di pigrezza estremi e non è necessariamente organizzato o preciso nelle sue scelte e necessità, ma è comunque propenso a lavori con doti di insegnamento e ad avere una prole anche numerosa. Detesta i climi e le stagioni fredde – umide durante le quali accumula spesso peso, possiede comunque buone difese immunitarie e si ammala raramente. Il tipo Kapha ha maggiori possibilità di subire disturbi a carico dell'apparato respiratorio e polmonare."
  }
};

const PrakritiTest = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [resultType, setResultType] = useState<keyof typeof resultsData>('vata');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const handleOptionSelect = (questionId: number, answerText: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerText }));
  };

  const calculateResult = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Per favore, rispondi a tutte le domande prima di procedere.");
      return;
    }
    
    // Calcola il punteggio
    let correctAnswers = 0;
    questions.forEach(q => {
      const selected = answers[q.id];
      const isRight = q.options.find(opt => opt.text === selected)?.isCorrect;
      if (isRight) {
        correctAnswers++;
      }
    });

    setScore(correctAnswers);

    // Assegna il testo in base al punteggio
    let finalType: keyof typeof resultsData = 'kapha';
    if (correctAnswers >= 8) finalType = 'vata';
    else if (correctAnswers >= 4) finalType = 'pitta';
    
    setResultType(finalType);
    setFormSubmitted(true);
    
    setTimeout(() => {
      document.getElementById('result-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="prakriti-page animate-fade-in-up">
      <section className="prakriti-hero">
        <div className="prakriti-hero-content">
          <h1 className="prakriti-title">TEST AYURVEDA</h1>
          <p className="prakriti-subtitle">Metti alla prova la tua conoscenza sull'Ayurveda</p>
        </div>
      </section>

      <div className="container">
        {!formSubmitted ? (
          <div className="prakriti-content">
            <div className="test-intro">
              <h2>Quiz di Conoscenza Ayurvedica</h2>
              <p>Scopri quanto ne sai sull'antica scienza dell'Ayurveda. Rispondi alle domande per verificare la tua preparazione e scoprire il tuo profilo al termine del test!</p>
              <p className="instruction">Rispondi alle seguenti {questions.length} domande (scegli un'opzione per ciascuna).</p>
            </div>

            <div className="quiz-container">
              {questions.map((q, index) => (
                <div key={q.id} className="quiz-question">
                  <h3>{index + 1}. {q.text}</h3>
                  <div className="quiz-options">
                    {q.options.map((opt, optIndex) => (
                      <label 
                        key={optIndex} 
                        className={`quiz-option ${answers[q.id] === opt.text ? 'selected' : ''}`}
                      >
                        <input 
                          type="radio" 
                          name={`question-${q.id}`} 
                          value={opt.text}
                          checked={answers[q.id] === opt.text}
                          onChange={() => handleOptionSelect(q.id, opt.text)}
                        />
                        <span className="option-text">{opt.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="quiz-actions">
              <button 
                className="btn btn-primary btn-large calc-btn"
                onClick={calculateResult}
              >
                Scopri il tuo risultato
              </button>
            </div>
          </div>
        ) : (
          <div className="result-container" id="result-section">
            <div className="result-header">
              <div className="score-circle">
                <span>{score}</span>
                <small>su {questions.length}</small>
              </div>
              <h2>Hai risposto correttamente a {score} domande su {questions.length}!</h2>
              {score >= 8 ? <p className="success-msg">Complimenti! Sei un esperto di Ayurveda.</p> : 
               score >= 4 ? <p className="success-msg">Buon lavoro! Hai una buona conoscenza di base.</p> :
               <p className="success-msg">C'è ancora molto da imparare sull'Ayurveda, esplora i nostri corsi!</p>}
            </div>

            <div className="answers-summary">
              <h3>Dettaglio delle tue risposte:</h3>
              <ul className="answers-review-list">
                {questions.map((q, i) => {
                  const userAnswer = answers[q.id];
                  const isUserCorrect = q.options.find(opt => opt.text === userAnswer)?.isCorrect;
                  const correctAnswer = q.options.find(opt => opt.isCorrect)?.text;

                  return (
                    <li key={q.id} className={`review-item ${isUserCorrect ? 'correct-bg' : 'wrong-bg'}`}>
                      <div className="review-q">
                        <strong>{i + 1}. {q.text}</strong>
                      </div>
                      
                      <div className="review-a">
                        {isUserCorrect ? (
                          <div className="correct-answer">
                            <FaCheckCircle size={20} color="#2ecc71" />
                            <span><strong>La tua risposta:</strong> {userAnswer} (Corretta)</span>
                          </div>
                        ) : (
                          <div className="wrong-answer-container">
                            <div className="wrong-answer">
                              <FaTimesCircle size={20} color="#e74c3c" />
                              <span><strong>La tua risposta:</strong> {userAnswer} (Errata)</span>
                            </div>
                            <div className="correct-answer mt-2">
                              <FaCheckCircle size={20} color="#2ecc71" />
                              <span><strong>Risposta Corretta:</strong> {correctAnswer}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            {/* The Original Text the User Wanted (Mapped by score) */}
            <div className="result-card" style={{ marginTop: '3rem' }}>
              <h3>Il tuo Profilo: {resultsData[resultType].title}</h3>
              <p className="result-description">
                {resultsData[resultType].description}
              </p>
            </div>

            <div className="result-conclusion">
              <h4>Come leggere il risultato del test:</h4>
              <p>Le sopraccitate e distinte tipologie dei tre dosha in Ayurveda riguardano il continuo e fragile equilibrio fisiologico ed il temperamento, quindi in parte anche caratteriale, e che formano l'individualità di ogni persona.</p>
              
              <p>Se conta le risposte potrà rendersi conto della partecipazione di queste tre forze e dare un significato generale alla sua situazione attuale, <strong>che non vuole sostituirsi sicuramente ad una consulenza completa ed approfondita</strong> che potrà richiedere ad esempio al nostro vaidya, in una delle nostre sedi.</p>
              
              <p>In queste tipologie capita spesso di riconoscersi o di riconoscere qualche qualità, questo perché <strong>noi tutti siamo una compartecipazione di questi tre dosha</strong>, alcuni più determinanti di altri nelle situazioni di ogni giorno e la vita ce ne dà dimostrazione con i suoi alti e bassi, con le cose che ci aspettiamo conoscendo la nostra forza e le nostre debolezze, col passare del tempo e lo scandire delle stagioni.</p>
              
              <div className="info-box">
                <h4>Vuoi approfondire?</h4>
                <p>Se Lei volesse approfondire questa conoscenza per essere in grado di capire ed aiutare Sè stesso e gli altri e cominciare a studiare un nuovo modo di vedere le cose attraverso l'antichissima filosofia Samkhya dell'Ayurveda in India e l'arte del massaggio nei suoi aspetti benefici, rilassanti e curativi, devi sapere che:</p>
                <p><strong>L'associazione ARYA VEDA organizza numerosi corsi di massaggio ayurvedico e trattamenti</strong>, per neofiti e per operator professionisti del settore bio-naturale, estetico, medico, paramedico durante tutto l'anno, in varie modalità e tempi, ad esempio i prossimi corsi residenziali in località montane o di campagna, nei quali poter lavorare con serenità e pace, provando per una settimana gli effetti di uno stile di vita sano, cibo vegetariano e yoga, oltre al competente insegnamento del nostro vaidya (medico della tradizione ayurveda indiana) e terapisti che saranno presenti per tutto il tempo.</p>
              </div>
              
              <p className="newsletter-info">Le persone iscritte alla newsletter del nostro sito, potranno essere invitate a ricevere gratuitamente un trattamento, offerto dagli allievi dei corsi, durante tirocini indetti in alcuni periodi dell'anno (maggiori info saranno inviate via email).</p>
              
              <p className="courses-info"><strong>Sono aperte le iscrizioni ai corsi per il professionale in due anni che partiranno regolarmente ogni sei mesi.</strong></p>
              
              <div className="contact-info-result">
                <p>Chiunque fosse interessato ad avere info o ad essere iscritto alla nostra newsletter è pregato di mettersi in contatto con la nostra segreteria o ad iscriversi al nostro indirizzo web: <strong>www.corsimassaggiomilano.it</strong> oppure via mail a <strong>infoaryaveda8@gmail.com</strong> o cell. <strong>+39 340 586 5469</strong></p>
                <p className="salutations">Distinti saluti,<br/>dott.ssa Sadbhawna e tutto lo staff ARYA VEDA</p>
              </div>
            </div>

            <div className="result-actions no-print">
              <button className="btn btn-primary" onClick={downloadPDF}>
                <Download size={18} style={{ marginRight: '8px' }} />
                Scarica PDF / Stampa
              </button>
              <button className="btn btn-outline" onClick={() => window.location.reload()}>
                Ripeti il Test
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrakritiTest;
