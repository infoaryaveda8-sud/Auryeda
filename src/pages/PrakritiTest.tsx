import { useState, useEffect } from 'react';
import './PrakritiTest.css';
import { Download } from 'lucide-react';
import { FaCheckCircle } from 'react-icons/fa';

type Dosha = 'vata' | 'pitta' | 'kapha';

interface Option {
  text: string;
  type: Dosha;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: 1, text: "1) CORPORATURA*", options: [
      { text: "Magra/Snella", type: "vata" },
      { text: "Robusta", type: "kapha" },
      { text: "Media", type: "pitta" }
    ]
  },
  {
    id: 2, text: "2) PESO CORPOREO*", options: [
      { text: "Facile a perderlo, facile ad acquistarlo", type: "pitta" },
      { text: "Facile a perderlo, difficile ad acquistarlo", type: "vata" },
      { text: "Difficile a perderlo, facile ad acquistarlo", type: "kapha" }
    ]
  },
  {
    id: 3, text: "3) PELLE*", options: [
      { text: "Spessa, oleosa, fredda, tendente ad abbronzarsi facilmente", type: "kapha" },
      { text: "Morbida, oleosa, calda, tendente a scottarsi al sole", type: "pitta" },
      { text: "Secca, ruvida, fredda, tendente a screpolarsi", type: "vata" }
    ]
  },
  {
    id: 4, text: "4) ARTICOLAZIONI*", options: [
      { text: "Morbide ed elastiche, buoni legamenti", type: "pitta" },
      { text: "Esili, poco elastiche", type: "vata" },
      { text: "Massicce, ben lubrificate e forti", type: "kapha" }
    ]
  },
  {
    id: 5, text: "5) CAPELLI*", options: [
      { text: "Spessi, oleosi, scuri o chiari, folti", type: "kapha" },
      { text: "Secchi, riccioluti, neri o biondi", type: "vata" },
      { text: "Setosi, sottili, bruni, precocemente grigi", type: "pitta" }
    ]
  },
  {
    id: 6, text: "6) SPALLE, TORACE E FRONTE *", options: [
      { text: "Nella media", type: "pitta" },
      { text: "Spaziose, larghe", type: "kapha" },
      { text: "Piccole", type: "vata" }
    ]
  },
  {
    id: 7, text: "7) DENTI*", options: [
      { text: "Forti, bianchi, gengive sane", type: "kapha" },
      { text: "Irregolari, piccoli e storti, tendenza alle carie", type: "vata" },
      { text: "Medi, gialli, problemi alle gengive", type: "pitta" }
    ]
  },
  {
    id: 8, text: "8) OCCHI*", options: [
      { text: "Grandi, attraenti, blu scuro, castano scuro", type: "kapha" },
      { text: "Acuti, penetranti, verdi, nocciola", type: "pitta" },
      { text: "Piccoli, statici, scuri, grigi, azzurri", type: "vata" }
    ]
  },
  {
    id: 9, text: "9) NASO*", options: [
      { text: "Largo e lungo", type: "kapha" },
      { text: "Piccolo", type: "vata" },
      { text: "Medio", type: "pitta" }
    ]
  },
  {
    id: 10, text: "10) UNGHIE*", options: [
      { text: "Fragili con tendenza a spezzarsi", type: "vata" },
      { text: "Dure e resistenti", type: "kapha" },
      { text: "Flessibili", type: "pitta" }
    ]
  },
  {
    id: 11, text: "11) PIEDI E MANI *", options: [
      { text: "Medi e morbidi", type: "pitta" },
      { text: "Piccoli e ruvidi", type: "vata" },
      { text: "Grandi e solidi", type: "kapha" }
    ]
  },
  {
    id: 12, text: "12) APPETITO*", options: [
      { text: "Buon appetito, mangia una buona quantità di cibo, regolare ai pasti", type: "pitta" },
      { text: "Poco appetito, mangia per abitudine o per autogratificazione", type: "kapha" },
      { text: "Irregolare, piccoli pasti frequenti a orari diversi", type: "vata" }
    ]
  },
  {
    id: 13, text: "13) VOCE*", options: [
      { text: "Profonda, risonante, affascinante, forte", type: "kapha" },
      { text: "Rauca, debole, instabile, parlata veloce", type: "vata" },
      { text: "Chiara, tonante, armonica", type: "pitta" }
    ]
  },
  {
    id: 14, text: "14) BOCCA*", options: [
      { text: "Spesso secca, secchezza delle fauci", type: "vata" },
      { text: "Eccessiva salivazione, prevalenza di gusto dolce in bocca", type: "kapha" },
      { text: "Tendenza ad arrossare il palato, gusto di lingua e labbra talvolta amaro, sensazione di gusto pungente in bocca", type: "pitta" }
    ]
  },
  {
    id: 15, text: "15) URINA*", options: [
      { text: "Gialla e abbondante", type: "pitta" },
      { text: "Chiara e scarsa", type: "vata" },
      { text: "Molto chiara e moderata", type: "kapha" }
    ]
  },
  {
    id: 16, text: "16) EVACUAZIONE*", options: [
      { text: "Grossa, oleosa, pesante, lenta", type: "kapha" },
      { text: "Secca, dura, costipata", type: "vata" },
      { text: "Morbida, oleosa, liquida", type: "pitta" }
    ]
  },
  {
    id: 17, text: "17) SUDORAZIONE*", options: [
      { text: "Moderata senza particolare odore", type: "kapha" },
      { text: "Abbondante e maleodorante", type: "pitta" },
      { text: "Scarsa e inodore", type: "vata" }
    ]
  },
  {
    id: 18, text: "18) FEDE*", options: [
      { text: "Fanatica", type: "pitta" },
      { text: "Incostante", type: "vata" },
      { text: "Stabile", type: "kapha" }
    ]
  },
  {
    id: 19, text: "19) MEMORIA*", options: [
      { text: "Lenta ma prolungata", type: "kapha" },
      { text: "Buona la recente, scarsa la remota", type: "vata" },
      { text: "Normale", type: "pitta" }
    ]
  },
  {
    id: 20, text: "20) PENSIERO*", options: [
      { text: "Organizzato", type: "pitta" },
      { text: "Pianificante", type: "kapha" },
      { text: "Creativo", type: "vata" }
    ]
  },
  {
    id: 21, text: "21) SOGNI*", options: [
      { text: "Sogna spesso ma raramente ricorda", type: "vata" },
      { text: "Sogna spesso e ricorda bene i sogni", type: "pitta" },
      { text: "Ricorda i sogni solo se particolari, sogna poco", type: "kapha" }
    ]
  },
  {
    id: 22, text: "22) SONNO*", options: [
      { text: "Prolungato, pesante", type: "kapha" },
      { text: "Leggero, irregolare", type: "vata" },
      { text: "Breve, profondo", type: "pitta" }
    ]
  },
  {
    id: 23, text: "23) RICERCA DELLA VERITA*", options: [
      { text: "Mente solo se conveniente e premeditatamente", type: "pitta" },
      { text: "Non è portato a mentire, non ne è capace", type: "kapha" },
      { text: "Mente facilmente su piccole cose", type: "vata" }
    ]
  },
  {
    id: 24, text: "24) REAZIONE ALLO STRESS*", options: [
      { text: "Perseveranza, calma e accondiscendenza", type: "kapha" },
      { text: "Paura, ansia e agitazione", type: "vata" },
      { text: "Collera, invidia e ira", type: "pitta" }
    ]
  },
  {
    id: 25, text: "25) IRRITABILITA*", options: [
      { text: "Odia i climi caldi e soleggiati", type: "pitta" },
      { text: "Odia i climi freddi e umidi", type: "kapha" },
      { text: "Odia i climi ventosi e freddi", type: "vata" }
    ]
  },
  {
    id: 26, text: "26) SELF-CONTROL*", options: [
      { text: "Mente incostante, un pò caotica", type: "vata" },
      { text: "Buon controllo, preciso", type: "pitta" },
      { text: "Forte controllo, razionale, pianificatore", type: "kapha" }
    ]
  },
  {
    id: 27, text: "27) RAPPORTI SOCIALI*", options: [
      { text: "Leale, con molte amicizie", type: "kapha" },
      { text: "Molto selettivo, crea amicizie profonde e pochi nemici", type: "pitta" },
      { text: "Conosce molte persone, pochi amici intimi", type: "vata" }
    ]
  },
  {
    id: 28, text: "28) ATTIVITA*", options: [
      { text: "Molto lenti, tendenti alla pigrizia", type: "kapha" },
      { text: "Irrequieti", type: "vata" },
      { text: "Iperattivi", type: "pitta" }
    ]
  },
  {
    id: 29, text: "29) SOGLIA D'ATTENZIONE*", options: [
      { text: "Attenzione ad un soggetto alla volta", type: "pitta" },
      { text: "Incostante", type: "vata" },
      { text: "Attento a più cose simultaneamente", type: "kapha" }
    ]
  },
  {
    id: 30, text: "30) INCLINAZIONI CARATTERIALI*", options: [
      { text: "Non aggressivo, tollerante", type: "kapha" },
      { text: "Aggressivo con gli aggressivi, consolatore degli umili, non perdona mai totalmente", type: "pitta" },
      { text: "Aggressivo, distruttivo, non incline al perdono", type: "vata" }
    ]
  }
];

const resultsData = {
  vata: {
    title: "Il tuo predominante è Vata (Aria ed Etere)",
    description: "Indice e sinonimo di dinamismo, irrequietezza, incostanza e loquacità. A livello fisico si manifesta con magrezza e sottigliezza dei tessuti corporei, freddezza delle estremità, secchezza diffusa. A livello psico-attitudinale tende a dare importanza all'elemento uditivo ed utilizza la propria loquela a sua volta nel lavoro come nella vita per credere ed essere credibile, dotato di scarsa memoria, tende a tenersi continuamente aggiornato. Detesta i climi freddi – secchi, che contribuiscono ad accrescere la sua insicurezza ed il suo nervosismo. Il tipo Vata ha maggiori possibilità di disturbi in Inverno e in avanzata età."
  },
  pitta: {
    title: "Il tuo predominante è Pitta (Fuoco e Acqua)",
    description: "È la rappresentazione del fuoco fatto a persona e, quindi, di tutte le emozioni che ciò ispira, dalla sfera passionale a quella competitiva, dotato di particolari doti di coraggio e generosità. A livello fisico si manifesta con tutto ciò che intendiamo come 'nella media'. Possiede una buona digestione e ne deriva un buon controllo della temperatura corporea. A livello psico-attitudinale tanto ama, quanto sa odiare, tende ad avere disturbi del metabolismo, in particolare bruciori ed infiammazioni che lo rendono facilmente irritabile di carattere. Detesta i climi eccessivamente caldi che diminuiscono il suo self-control e la sua capacità di giudizio."
  },
  kapha: {
    title: "Il tuo predominante è Kapha (Terra e Acqua)",
    description: "Questo tipo impersona solidità, abbondanza e resistenza. È dotato di qualità come lungimiranza, pazienza, tolleranza, buona memoria e lunga vita. A livello fisico tende alla grossezza e alla ritenzione, al maggiore spessore dei tessuti corporei. A livello psico-attitudinale può propendere a stati di depressione e di pigrezza estremi e non è necessariamente organizzato o preciso nelle sue scelte e necessità, ma è comunque propenso a lavori con doti di insegnamento e ad avere una prole anche numerosa. Detesta i climi e le stagioni fredde – umide durante le quali accumula spesso peso, possiede comunque buone difese immunitarie."
  }
};

const PrakritiTest = () => {
  const [answers, setAnswers] = useState<Record<number, Dosha>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scores, setScores] = useState({ vata: 0, pitta: 0, kapha: 0 });
  const [resultType, setResultType] = useState<keyof typeof resultsData>('vata');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOptionSelect = (questionId: number, type: Dosha) => {
    setAnswers(prev => ({ ...prev, [questionId]: type }));
  };

  const calculateResult = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Per favore, rispondi a tutte le domande prima di procedere.");
      return;
    }
    
    // Calcola il punteggio
    let vCount = 0;
    let pCount = 0;
    let kCount = 0;
    
    Object.values(answers).forEach(ans => {
      if(ans === 'vata') vCount++;
      if(ans === 'pitta') pCount++;
      if(ans === 'kapha') kCount++;
    });

    setScores({ vata: vCount, pitta: pCount, kapha: kCount });

    // Assegna il testo in base al punteggio maggiore
    let finalType: keyof typeof resultsData = 'vata';
    if (pCount > vCount && pCount > kCount) finalType = 'pitta';
    if (kCount > vCount && kCount > pCount) finalType = 'kapha';
    
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
          <h1 className="prakriti-title">TEST PRAKRITI</h1>
          <p className="prakriti-subtitle">Scopri la tua costituzione Ayurvedica predominante</p>
        </div>
      </section>

      <div className="container">
        {!formSubmitted ? (
          <div className="prakriti-content">
            <div className="test-intro">
              <h2>Scopri la tua vera natura (Prakriti)</h2>
              <p>In Ayurveda, la "Prakriti" è la costituzione psico-fisica unica di ogni individuo, formata dall'equilibrio dei tre Dosha (Vata, Pitta e Kapha). Rispondi con onestà alle seguenti 30 domande basandoti sulla tua natura di lungo periodo (non solo come ti senti oggi).</p>
              <p className="instruction">Seleziona un'opzione per ciascuna delle {questions.length} domande.</p>
            </div>

            <div className="quiz-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {questions.map((q) => (
                <div key={q.id} className="quiz-question" style={{ marginBottom: 0, padding: '1.5rem', background: '#fcfaf7', borderRadius: '12px', border: '1px solid #efe8df' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--primary)' }}>{q.text}</h3>
                  <div className="quiz-options">
                    {q.options.map((opt, optIndex) => (
                      <label 
                        key={optIndex} 
                        className={`quiz-option ${answers[q.id] === opt.type ? 'selected' : ''}`}
                        style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}
                      >
                        <input 
                          type="radio" 
                          name={`question-${q.id}`} 
                          value={opt.type}
                          checked={answers[q.id] === opt.type}
                          onChange={() => handleOptionSelect(q.id, opt.type)}
                        />
                        <span className="option-text" style={{ fontSize: '0.9rem' }}>{opt.text}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="quiz-actions" style={{ marginTop: '3rem' }}>
              <button 
                className="btn btn-primary btn-large calc-btn"
                onClick={calculateResult}
              >
                Scopri il tuo Dosha
              </button>
            </div>
          </div>
        ) : (
          <div className="result-container" id="result-section">
            <div className="result-header">
              <h2>Il tuo Dosha predominante è {resultType.toUpperCase()}</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', margin: '2rem 0' }}>
                <div style={{ textAlign: 'center' }}>
                  <div className="score-circle" style={{ width: '80px', height: '80px', fontSize: '24px', background: '#e0f2fe', color: '#0369a1', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>{scores.vata}</div>
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Vata</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="score-circle" style={{ width: '80px', height: '80px', fontSize: '24px', background: '#fef08a', color: '#a16207', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>{scores.pitta}</div>
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Pitta</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div className="score-circle" style={{ width: '80px', height: '80px', fontSize: '24px', background: '#dcfce7', color: '#15803d', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>{scores.kapha}</div>
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Kapha</p>
                </div>
              </div>
            </div>

            <div className="result-body">
              <h3 className="result-title">{resultsData[resultType].title}</h3>
              <p className="result-desc">{resultsData[resultType].description}</p>
            </div>

            <div className="result-actions" style={{ marginTop: '3rem' }}>
              <button className="btn btn-outline" onClick={downloadPDF}>
                <Download size={20} /> Salva Risultato (Stampa PDF)
              </button>
              <button className="btn btn-primary" onClick={() => setFormSubmitted(false)} style={{ marginLeft: '1rem' }}>
                Rifai il test
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrakritiTest;
