import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1 className="h1">Chi Siamo</h1>
          <p>L'Accademia Aryaveda: Tradizione, Passione e Benessere a Milano.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="story-content">
              <h2 className="h2">La Nostra Storia</h2>
              <p>
                Fondata con la missione di diffondere la millenaria saggezza dell'Ayurveda in Italia, l'Associazione Culturale Aryaveda A.C. è oggi un punto di riferimento per chi cerca una formazione autentica e di alta qualità nel campo delle discipline olistiche.
              </p>
              <p>
                Il nostro approccio unisce l'antica conoscenza vedica con le esigenze della vita moderna, offrendo percorsi che non sono solo professionalizzanti, ma anche veri e propri viaggi di trasformazione personale.
              </p>
              
              <div className="core-values">
                <div className="value-item">
                  <CheckCircle className="value-icon" />
                  <span>Insegnanti Qualificati e Medici Esperti</span>
                </div>
                <div className="value-item">
                  <CheckCircle className="value-icon" />
                  <span>Diplomi Riconosciuti a Livello Nazionale</span>
                </div>
                <div className="value-item">
                  <CheckCircle className="value-icon" />
                  <span>Approccio Pratico e Olistico</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-mockup">
                <span>Foto dell'Accademia</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
