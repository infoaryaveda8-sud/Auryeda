import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// Slide Images
import heroBannerWhatsApp from '../assets/WhatsApp Image 2026-10-27 at 1.03.49 PM.jpeg';
import heroBannerTreatments from '../assets/ayurveda-hero-bg.jpg';
import heroBannerShirodhara from '../assets/ayurveda-hero-therapy.jpg';

import './Hero.css';

interface SlideData {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  desc: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  objectPosition?: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: heroBannerWhatsApp,
    subtitle: 'Acharyaji',
    title: 'Shree Arya Bhushan',
    desc: "Guidandoti verso il benessere olistico attraverso l'antica saggezza dell'Ayurveda.",
    primaryBtnText: 'Nostro Mentore Acharyaji',
    primaryBtnLink: '/chi-siamo',
    secondaryBtnText: 'Prenota Consulto',
    secondaryBtnLink: '/consulti-sadbhawna',
    objectPosition: 'center 25%'
  },
  {
    id: 2,
    image: heroBannerTreatments,
    subtitle: 'Autentica Tradizione',
    title: 'Trattamenti & Terapie Olistiche',
    desc: 'Massaggi Abhyanga, riequilibrio dei Dosha e percorsi rigeneranti personalizzati per corpo e mente.',
    primaryBtnText: 'Scopri i Trattamenti',
    primaryBtnLink: '/trattamenti-ayurveda',
    secondaryBtnText: 'Visite & Consulenze',
    secondaryBtnLink: '/visite-terapie',
    objectPosition: 'center 35%'
  },
  {
    id: 3,
    image: heroBannerShirodhara,
    subtitle: 'Formazione & Percorsi',
    title: 'Accademia Ayurveda & Corsi',
    desc: 'Diventa un operatore olistico qualificato e partecipa ai nostri viaggi studio trasformativi in India.',
    primaryBtnText: 'I Nostri Corsi',
    primaryBtnLink: '/corsi-viaggi',
    secondaryBtnText: 'Chi Siamo',
    secondaryBtnLink: '/chi-siamo',
    objectPosition: 'center 30%'
  }
];

const SLIDE_DURATION = 5500; // 5.5 seconds per slide

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, SLIDE_DURATION);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentSlide]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section 
      className="hero-slider-section"
      aria-label="Banner Principale Ayurveda"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      <div className="hero-slides-wrapper">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div 
              key={slide.id}
              className={`hero-slide ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="hero-slide-bg"
                style={{ objectPosition: slide.objectPosition || 'center center' }}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="hero-slide-overlay"></div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Chevrons */}
      <button 
        className="hero-nav-btn hero-nav-prev"
        onClick={prevSlide}
        aria-label="Diapositiva precedente"
      >
        <ChevronLeft size={28} />
      </button>

      <button 
        className="hero-nav-btn hero-nav-next"
        onClick={nextSlide}
        aria-label="Prossima diapositiva"
      >
        <ChevronRight size={28} />
      </button>

      {/* Main Content Area */}
      <div className="container hero-content-container">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          if (!isActive) return null;

          return (
            <div key={slide.id} className="hero-slide-content animate-hero-fade">
              <span className="hero-subtitle-badge">
                {slide.subtitle}
              </span>
              <h1 className="hero-slide-title">
                {slide.title}
              </h1>
              <p className="hero-slide-desc">
                {slide.desc}
              </p>
              <div className="hero-slide-actions">
                <Link to={slide.primaryBtnLink} className="btn hero-btn-primary">
                  {slide.primaryBtnText}
                </Link>
                <Link to={slide.secondaryBtnLink} className="btn hero-btn-secondary">
                  {slide.secondaryBtnText}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Controls: Dots & Play/Pause */}
      <div className="hero-controls-bar">
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              aria-label={`Vai alla diapositiva ${index + 1}`}
            >
              <span className="hero-dot-fill"></span>
            </button>
          ))}
        </div>

        <button 
          className="hero-pause-btn"
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Riproduci slide automatiche" : "Pausa slide automatiche"}
          title={isPaused ? "Riproduci" : "Pausa"}
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
        </button>
      </div>
    </section>
  );
};

export default Hero;
