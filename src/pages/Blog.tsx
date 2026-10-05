import { FileText, ArrowRight } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page animate-fade-in-up">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-title">IL NOSTRO BLOG</h1>
          <p className="blog-subtitle">Approfondimenti, novità e articoli dal mondo dell'Ayurveda</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-coming-soon">
            <div className="coming-soon-icon">
              <FileText size={64} />
            </div>
            <h2>Presto in arrivo!</h2>
            <p className="coming-soon-text">
              Stiamo preparando una sezione ricca di articoli interessanti, consigli di benessere e 
              approfondimenti sulla millenaria scienza dell'Ayurveda. 
            </p>
            <p className="coming-soon-text">
              Torna a trovarci presto per scoprire i nostri nuovi post.
            </p>
            
            <div className="newsletter-teaser mt-4">
              <h3>Vuoi restare aggiornato?</h3>
              <p>Iscriviti alla nostra newsletter per ricevere le notifiche quando pubblicheremo nuovi articoli.</p>
              <div className="subscribe-mockup mt-3">
                <input type="email" placeholder="La tua email..." disabled />
                <button className="btn btn-primary" disabled>
                  Iscriviti <ArrowRight size={16} style={{marginLeft: '8px'}}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
