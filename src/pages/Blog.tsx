import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
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
