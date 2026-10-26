import React, { useEffect, useState, useRef } from 'react';
import { Globe, Users, Star } from 'lucide-react';

const useCountUp = (end: number, duration: number = 2000, delay: number = 0) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime - delay;

      if (progress < 0) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const percentage = Math.min(progress / duration, 1);
      // easeOutExpo
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easeProgress));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, delay, hasStarted]);

  return { count, countRef };
};

const AnimatedNumber = ({ end, suffix = '', delay = 0 }: { end: number, suffix?: string, delay?: number }) => {
  const { count, countRef } = useCountUp(end, 2500, delay);
  return (
    <div ref={countRef}>
      {count}{suffix}
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="stats-section section-padding" style={{ 
      position: 'relative', 
      backgroundColor: 'var(--bg-soft)',
      textAlign: 'center'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title" style={{ marginBottom: '3.5rem' }}>
          I nostri <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Numeri</span>
        </h2>
        
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '2rem' }}>
          
          {/* Card 1 */}
          <div className="stats-card" style={{ 
            background: '#fff', 
            padding: '2.5rem 1.5rem', 
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.02)',
            transition: 'transform 0.3s ease',
          }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(148, 58, 57, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: 'var(--primary)' }}>
              <Globe size={36} />
            </div>
            <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              <AnimatedNumber end={20} delay={0} />
            </div>
            <div style={{ fontSize: '0.82rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Collaborazioni Internazionali</div>
          </div>
          
          {/* Card 2 */}
          <div className="stats-card" style={{ 
            background: '#fff', 
            padding: '2.5rem 1.5rem', 
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.02)',
            transition: 'transform 0.3s ease',
          }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(148, 58, 57, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: 'var(--primary)' }}>
              <Users size={36} />
            </div>
            <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              <AnimatedNumber end={12} suffix="k" delay={200} />
            </div>
            <div style={{ fontSize: '0.82rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Allievi Formati</div>
          </div>
          
          {/* Card 3 */}
          <div className="stats-card" style={{ 
            background: '#fff', 
            padding: '2.5rem 1.5rem', 
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.02)',
            transition: 'transform 0.3s ease',
          }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(148, 58, 57, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', color: 'var(--primary)' }}>
              <Star size={36} />
            </div>
            <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 700, fontFamily: 'var(--font-heading)', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              <AnimatedNumber end={40} delay={400} />
            </div>
            <div style={{ fontSize: '0.82rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Specialisti</div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Stats;
