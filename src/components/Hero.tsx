import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1 from '../assets/AYURVEDA-SLIDER-2.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/8-5-dhanvantari101-craft-quest-original-imahc7yznj5crj2t.webp';

const slides = [slide1, slide2, slide3];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" style={{ position: 'relative' }}>
      {slides.map((slide, index) => (
        <img 
          key={index}
          src={slide} 
          alt={`Slide ${index + 1}`} 
          style={{ 
            opacity: index === currentSlide ? 1 : 0, 
            transition: 'opacity 1s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%', /* This keeps the top/heads visible while filling the screen! */
            zIndex: 1
          }}
        />
      ))}
      <div className="hero-overlay" style={{ zIndex: 2 }}></div>
      
      {/* Slider Arrows */}
      <button 
        onClick={prevSlide}
        style={{ position: 'absolute', left: '20px', zIndex: 10, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }}
        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
      >
        <ChevronLeft size={36} />
      </button>
      
      <button 
        onClick={nextSlide}
        style={{ position: 'absolute', right: '20px', zIndex: 10, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', padding: '10px', cursor: 'pointer', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }}
        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
      >
        <ChevronRight size={36} />
      </button>

      <div className="hero-content animate-fade-in-up" style={{ zIndex: 3, position: 'relative' }}>
        <span className="hero-subtitle">Acharyaji</span>
        <h1 className="hero-title">Shree Arya Bhushan</h1>
        <p className="hero-desc">Guidandoti verso il benessere olistico attraverso l'antica saggezza dell'Ayurveda.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button className="btn btn-primary">Incontra Acharyaji</button>
          <button className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Prenota Consulto</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
