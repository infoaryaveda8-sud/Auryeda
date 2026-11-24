import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './Blog.css';

const blogPosts = [
  {
    id: 4,
    slug: 'cos-e-il-panchakarma-in-ayurveda',
    title: "Che cos'è il Panchakarma in Ayurveda? Benefici, tipi e la sua importanza",
    category: "Trattamenti Ayurvedici",
    date: "24 Novembre 2026",
    readTime: "10 min di lettura",
    excerpt: "Scopri cos'è il Panchakarma in Ayurveda: le sue cinque terapie tradizionali, le tre fasi del trattamento, i potenziali benefici e le precauzioni da conoscere prima di prenderlo in considerazione."
  },
  {
    id: 3,
    slug: 'comprendere-i-tre-dosha-in-ayurveda',
    title: "Comprendere i tre dosha in Ayurveda: Vata, Pitta e Kapha spiegati",
    category: "Principi Ayurvedici",
    date: "24 Novembre 2026",
    readTime: "9 min di lettura",
    excerpt: "Scopri i tre dosha in Ayurveda: Vata, Pitta e Kapha. Comprendi i loro significati tradizionali, gli elementi associati, le caratteristiche e il concetto di Prakriti nel benessere ayurvedico."
  },
  {
    id: 1,
    slug: 'open-day-ayurveda-milano-22-novembre-2026',
    title: "Open Day Ayurveda a Milano: scopri il mondo dell’Ayurveda il 22 novembre 2026",
    category: "Eventi & Formazione",
    date: "22 Novembre 2026",
    readTime: "5 min di lettura",
    excerpt: "Partecipa all’Open Day Ayurveda a Milano domenica 22 novembre 2026. Scopri i corsi, i trattamenti e la filosofia ayurvedica di ARYAVEDA Academy. Prenota il tuo posto gratuito!"
  },
  {
    id: 2,
    slug: 'perche-ayurveda-e-importante-nella-nostra-vita',
    title: "Perché l'Ayurveda è importante nella nostra vita? I benefici dell'Ayurveda per uno stile di vita sano",
    category: "Benessere & Stile di Vita",
    date: "26 Ottobre 2026",
    readTime: "8 min di lettura",
    excerpt: "Nel mondo frenetico di oggi, mantenere uno stile di vita sano è diventato fondamentale. Scopri come l'Ayurveda incoraggia l'equilibrio attraverso alimentazione consapevole, sonno regolare, gestione dello stress e ascolto delle esigenze personali."
  }
];

const Blog = () => {
  return (
    <div className="blog-page animate-fade-in-up">
      {/* Hero Header */}
      <section className="blog-hero">
        <div className="container blog-hero-content">
          <h1 className="blog-title">IL NOSTRO BLOG</h1>
          <p className="blog-subtitle">Approfondimenti, novità e articoli dal mondo dell'Ayurveda</p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-cards-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="simple-blog-card">
                <span className="blog-tag">{post.category}</span>
                
                <h2 className="blog-card-heading">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <div className="blog-card-meta">
                  <span><Calendar size={14} /> {post.date}</span>
                  <span>•</span>
                  <span><Clock size={14} /> {post.readTime}</span>
                </div>

                <p className="blog-card-desc">
                  {post.excerpt}
                </p>

                <Link to={`/blog/${post.slug}`} className="read-article-link">
                  Leggi l'articolo completo <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
