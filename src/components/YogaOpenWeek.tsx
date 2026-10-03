import React from 'react';

const YogaOpenWeek: React.FC = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#fff' }}>
      <div className="container about-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="about-content">
          <span className="section-subtitle">Events</span>
          <h2>Yoga - Open Week from Sept 28 to Oct 1st</h2>
          <p>Presentation of the 2026-2027 yoga courses with free trial lessons.</p>
          <p>Starting from September 28th, we present our yoga courses with a free open week. Every lesson is a journey of exploration where you can feel the connection between body, mind, and prana.</p>
          <p><strong>The practices are suitable for everyone</strong>, designed for those taking their first steps in this ancient discipline.</p>
          <br/>
          <p className="text-light">Janani, the home of Ayurveda<br/>via Francesco Morelli 22, ASTI.</p>
          <br/>
          <button className="btn btn-secondary">Discover More</button>
        </div>
        <div className="about-image-wrapper" style={{ order: 1 }}>
          <img 
            src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=2074&auto=format&fit=crop" 
            alt="Yoga Practitioner" 
            className="about-image" 
          />
        </div>
      </div>
    </section>
  );
};

export default YogaOpenWeek;
