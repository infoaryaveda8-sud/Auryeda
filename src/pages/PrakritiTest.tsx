import React, { useState } from 'react';
import '../pages/locations/Location.css';

const PrakritiTest = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="location-page animate-fade-in">
      <div className="page-header" style={{ backgroundImage: 'url("https://corsimassaggiomilano.it/wp-content/uploads/2018/12/slider-2-1.jpg")' }}>
        <div className="container">
          <h1 className="h1">Prakriti Test</h1>
          <p>Test Costituzionale Ayurvedico</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div className="text-center mb-5">
            <h2 className="h2 text-primary">Scopri la tua Costituzione (Dosha)</h2>
            <p className="mt-3">
              Dopo aver compilato e inviato il Test di Costituzione (Prakriti Test), riceverà un e-mail contenente un link da cliccare per riconfermare la sua volontà.<br/>
              In base al test da lei compilato, un esperto in medicina ayurvedica dell’associazione Arya veda le invierà un esito (generico) sulla sua costituzione ayurvedica al più presto.
            </p>
          </div>

          {submitted ? (
            <div className="bg-light p-5 rounded text-center shadow-sm">
              <h3 className="h3 text-primary mb-3">Grazie per aver compilato il test!</h3>
              <p>Il suo modulo è stato inviato correttamente. Un nostro esperto analizzerà le sue risposte e la contatterà presto via email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-light p-5 rounded shadow-sm">
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="form-group mb-3">
                  <label className="mb-2 block font-medium">Nome e Cognome *</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-2 block font-medium">Email *</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-2 block font-medium">Età *</label>
                  <input type="number" className="form-control" required />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-2 block font-medium">Sesso *</label>
                  <select className="form-control" required>
                    <option value="">Seleziona...</option>
                    <option value="M">Uomo</option>
                    <option value="F">Donna</option>
                  </select>
                </div>
              </div>

              <h4 className="h4 text-primary mt-4 mb-3 border-bottom pb-2">1) Corporatura *</h4>
              <div className="form-group mb-4">
                <label className="block mb-2"><input type="radio" name="q1" required /> Magra/Snella</label>
                <label className="block mb-2"><input type="radio" name="q1" /> Media</label>
                <label className="block mb-2"><input type="radio" name="q1" /> Robusta</label>
              </div>

              <h4 className="h4 text-primary mt-4 mb-3 border-bottom pb-2">2) Peso Corporeo *</h4>
              <div className="form-group mb-4">
                <label className="block mb-2"><input type="radio" name="q2" required /> Facile a perderlo, difficile ad acquistarlo</label>
                <label className="block mb-2"><input type="radio" name="q2" /> Facile a perderlo, facile ad acquistarlo</label>
                <label className="block mb-2"><input type="radio" name="q2" /> Difficile a perderlo, facile ad acquistarlo</label>
              </div>

              <h4 className="h4 text-primary mt-4 mb-3 border-bottom pb-2">3) Pelle *</h4>
              <div className="form-group mb-4">
                <label className="block mb-2"><input type="radio" name="q3" required /> Secca, ruvida, fredda, tendente a screpolarsi</label>
                <label className="block mb-2"><input type="radio" name="q3" /> Morbida, oleosa, calda, tendente a scottarsi al sole</label>
                <label className="block mb-2"><input type="radio" name="q3" /> Spessa, oleosa, fredda, tendente ad abbronzarsi facilmente</label>
              </div>

              <h4 className="h4 text-primary mt-4 mb-3 border-bottom pb-2">4) Articolazioni *</h4>
              <div className="form-group mb-4">
                <label className="block mb-2"><input type="radio" name="q4" required /> Esili, poco elastiche</label>
                <label className="block mb-2"><input type="radio" name="q4" /> Morbide ed elastiche, buoni legamenti</label>
                <label className="block mb-2"><input type="radio" name="q4" /> Massicce, ben lubrificate e forti</label>
              </div>

              <button type="submit" className="btn btn-primary mt-4 w-full" style={{ padding: '15px' }}>Invia il Test</button>
            </form>
          )}

        </div>
      </section>
    </div>
  );
};

export default PrakritiTest;
