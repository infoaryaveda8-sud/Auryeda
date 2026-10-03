import { ArrowRight } from 'lucide-react';
import './Courses.css';

const coursesData = [
  {
    id: 1,
    title: 'Operatore Ayurveda Intensivo',
    duration: '2 Anni - Weekend',
    description: 'Il corso più completo per diventare operatore olistico specializzato in massaggio ayurvedico.',
    tag: 'Popolare'
  },
  {
    id: 2,
    title: 'Corso di Massaggio Base',
    duration: '3 Weekend',
    description: 'Un\'introduzione pratica alle tecniche fondamentali del massaggio rilassante ayurvedico.',
    tag: 'Principianti'
  },
  {
    id: 3,
    title: 'Viaggio Studio in India',
    duration: '15 Giorni',
    description: 'Un\'esperienza immersiva nel Kerala, la culla dell\'Ayurveda, per studiare con medici locali.',
    tag: 'Esperienza'
  }
];

const Courses = () => {
  return (
    <div className="courses-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="h1">Corsi ed Eventi</h1>
          <p>Scopri i nostri percorsi formativi per trasformare la tua passione in professione.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="courses-grid">
            {coursesData.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <span className="course-tag">{course.tag}</span>
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-duration">{course.duration}</p>
                  <p className="course-desc">{course.description}</p>
                  <button className="btn btn-outline" style={{ width: '100%' }}>
                    Dettagli Corso <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
