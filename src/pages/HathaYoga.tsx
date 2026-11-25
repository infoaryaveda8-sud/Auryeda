import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Clock, Phone, MessageCircle } from 'lucide-react';
import imgMahakal from '../assets/mahakal-hatha-yoga.jpeg';
import './BlogPost.css';
import './CorsoAyurvedaTradizionale.css';
import './HathaYoga.css';

const orari = [
  {
    day: 'Lunedì',
    slots: [
      { label: 'Mattina', time: '9.00 – 10.30' },
      { label: 'Mattina', time: '11.00 – 12.30' },
      { label: 'Pausa pranzo', time: '13.00 – 14.30' }
    ]
  },
  {
    day: 'Martedì',
    slots: [
      { label: 'Sera', time: '17.00 – 18.30' },
      { label: 'Sera', time: '18.45 – 20.00' }
    ]
  },
  {
    day: 'Venerdì',
    slots: [
      { label: 'Mattina', time: '9.00 – 10.30' },
      { label: 'Mattina', time: '11.00 – 12.30' },
      { label: 'Pausa pranzo', time: '13.00 – 14.30' },
      { label: 'Sera', time: '17.00 – 18.30' },
      { label: 'Sera', time: '18.45 – 20.00' },
      { label: 'Sera', time: '20.30 – 22.00' }
    ]
  }
];

const HathaYoga = () => {
  useEffect(() => {
    document.title = 'Hatha Yoga & Nidra con Mahakal | ARYA VEDA';
  }, []);

  return (
    <article className="blog-post-page animate-fade-in-up">
      <div className="post-breadcrumbs-bar">
        <div className="container">
          <Link to="/corsi-viaggi" className="back-to-blog-link">
            <ChevronLeft size={16} /> Torna a Corsi & Viaggi
          </Link>
        </div>
      </div>

      <header className="post-header">
        <div className="container post-header-container">
          <span className="post-category-tag">Yoga</span>
          <h1 className="post-main-title">Hatha Yoga & Nidra</h1>
          <p className="cat-subtitle">Lezioni di Yoga con l’insegnante Mahakal presso il Centro Arya Veda</p>
        </div>
      </header>

      <div className="container post-content-container">
        <div className="post-body">
          <section className="post-section">
            <div className="hy-teacher">
              <img src={imgMahakal} alt="Mahakal, insegnante di Yoga" className="hy-teacher-img" />
              <div>
                <h2>L’insegnante</h2>
                <p>
                  Namaskar, il mio nome spirituale è <strong>Mahakal</strong> e sono un insegnante. Insegno da tantissimi anni, ho iniziato ad insegnare nel 1990, prima fitness e poi Yoga. Insegnare è il mio sentiero, la mia vera natura.
                </p>
              </div>
            </div>

            <p className="quote-callout">
              Penso che l’insegnamento sia una luminosa forma di Amore che, direzionata nella giusta maniera, può aprire tantissime porte sia all’allievo che all’insegnante, lasciando andare ciò che ci limita ed accogliendo una visione più ampia della realtà, più profonda e più centrata nell’anima.
            </p>

            <p>
              Il mio amore per lo Yoga nasce quando ero ancora un bimbo, avendo avuto la fortuna di avere una zia materna insegnante di Yoga. Lei è stata la mia prima maestra, di Yoga e di vita, la prima persona che mi ha indicato il sentiero da seguire.
            </p>
            <p>
              Parallelamente allo Yoga, inizio ad incuriosirmi ed interessarmi al mondo del fitness e nel 1990 inizio ad insegnare a Torino, poi a Parigi ed infine approdo a Milano nel 1997. Passo diversi anni nei quali raggiungo un buon livello sia come istruttore, formandomi e aggiornandomi costantemente, sia come atleta, approdando a risultati considerevoli.
            </p>
            <p>
              Nel 2011 incontro per la prima volta Amma e ciò arricchisce considerevolmente la mia vita, il mio essere e la mia anima in modo totale.
            </p>
            <p>
              Nel 2018 inizio un prezioso percorso formativo per operatore Ayurveda presso la scuola diretta dalla Dr.ssa Sadbhawna Bhardwaj e nel 2023 incomincio a formarmi nello Yoga specializzandomi nel Purna Yoga, Hatha Yoga, Raja Yoga e Kundalini Yoga. Infine nel 2025 intraprendo un percorso spirituale della tradizione yogica di Paramahansa Yogananda, venendo iniziato al Kriya Yoga.
            </p>
          </section>

          <section className="post-section">
            <h2>Hatha Yoga</h2>
            <p>
              Lo Hatha Yoga che insegno e porto sul tappetino è la forma di Yoga tradizionale, tramandatami dalla mia prima Maestra, nella quale ogni asana trova la sua vera essenza e la sua vera ragion d’essere, venendo corredato dal suo pranayama, dal suo mantra, dalla sua mudra e dal suo bandha quando possibile e necessario. Ne consegue una profonda immersione negli asana che si approcceranno che porterà un reale benessere psico-fisico ed una essenziale preparazione per raggiungere stadi superiori di coscienza.
            </p>
            <p>
              <strong>È accessibile a tutti e non è importante il livello di preparazione fisica.</strong>
            </p>
          </section>

          <section className="post-section">
            <h2>Purna Yoga</h2>
            <p>
              Il Purna Yoga (o Yoga integrale) è un sistema yogico sviluppato da Sri Aurobindo intorno agli anni ’20 dello scorso secolo, che unisce tutte le vie tradizionali dello Yoga per ottenere una trasformazione globale della vita secondo il concetto per il quale “Tutto è Yoga”. Il Purna Yoga integra Hatha, Raja, Karma, Bhakti, Jnana, Tantra e Kundalini Yoga interpretando la vita come sadhana: ogni aspetto della quotidianità è parte del cammino spirituale.
            </p>
          </section>

          <section className="post-section">
            <h2>Orari delle lezioni</h2>
            <div className="cat-calendari">
              {orari.map((o) => (
                <div className="cat-cal-card" key={o.day}>
                  <h3>{o.day}</h3>
                  <ol>
                    {o.slots.map((s) => (
                      <li key={s.time}>
                        <Clock size={14} /> {s.time}
                        <span className="hy-slot-label">{s.label}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <div className="dosha-highlight-card">
              <h3>Tutti i corsi sono aperti a tutti.</h3>
            </div>
          </section>

          <section className="post-section">
            <div className="event-info-box">
              <div className="event-contact-block" style={{ marginTop: 0 }}>
                <h4>Per informazioni</h4>
                <div className="event-contact-links">
                  <a href="tel:+393405865469" className="event-contact-pill">
                    <Phone size={16} /> 3405865469
                  </a>
                  <a href="https://wa.me/393405865469" target="_blank" rel="noopener noreferrer" className="event-contact-pill whatsapp-pill">
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default HathaYoga;
