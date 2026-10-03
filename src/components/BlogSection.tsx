import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Wisdom</span>
          <h2 className="section-title">Latest from our Blog</h2>
        </div>

        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-img-wrapper">
              <img src="https://images.unsplash.com/photo-1528318269466-69f9490fd326?q=80&w=2070&auto=format&fit=crop" alt="Blog 1" className="blog-img" />
            </div>
            <span className="blog-meta">Oct 12 • Philosophy</span>
            <h3 className="blog-title">The Exhaustion of the Heart</h3>
            <p className="blog-desc">There is an exhaustion that settles in the chest like a thin fog. It happens when the Hridaya — the heart — stops feeling its natural rhythm...</p>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem' }}>Read More</a>
          </div>

          <div className="blog-card">
            <div className="blog-img-wrapper">
              <img src="https://images.unsplash.com/photo-1615486171448-479601dc8cc4?q=80&w=2070&auto=format&fit=crop" alt="Blog 2" className="blog-img" />
            </div>
            <span className="blog-meta">Oct 05 • Treatments</span>
            <h3 className="blog-title">The Body as a Vessel: Oleation</h3>
            <p className="blog-desc">In Ayurveda, every purification process starts long before the actual treatment. The preparation phase is called Snehana...</p>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem' }}>Read More</a>
          </div>

          <div className="blog-card">
            <div className="blog-img-wrapper">
              <img src="https://images.unsplash.com/photo-1564759077036-3def242e81c4?q=80&w=2070&auto=format&fit=crop" alt="Blog 3" className="blog-img" />
            </div>
            <span className="blog-meta">Sep 28 • Herbs & Diet</span>
            <h3 className="blog-title">Infusions and Decoctions</h3>
            <p className="blog-desc">Hima is the cold infusion. In this specific infusion, one part of coarse plant powder and eight parts of cold water are used...</p>
            <a href="#" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem' }}>Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
