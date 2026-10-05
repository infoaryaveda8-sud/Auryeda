import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import CorsiViaggi from './pages/CorsiViaggi';
import AccademiaAyurveda from './pages/AccademiaAyurveda';
import Milano from './pages/Milano';
import ReggioEmilia from './pages/locations/ReggioEmilia';
import OperatoreOnline from './pages/OperatoreOnline';
import FormazioneSwastya from './pages/FormazioneSwastya';
import VisiteTerapie from './pages/VisiteTerapie';
import ConsultiSadbhawna from './pages/ConsultiSadbhawna';
import TrattamentiAyurveda from './pages/TrattamentiAyurveda';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PrakritiTest from './pages/PrakritiTest';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/corsi-viaggi" element={<CorsiViaggi />} />
          <Route path="/accademia" element={<AccademiaAyurveda />} />
          <Route path="/milano" element={<Milano />} />
          <Route path="/reggio-emilia" element={<ReggioEmilia />} />
          <Route path="/operatore-online" element={<OperatoreOnline />} />
          <Route path="/formazione-swastya" element={<FormazioneSwastya />} />
          <Route path="/visite-terapie" element={<VisiteTerapie />} />
          <Route path="/consulti-sadbhawna" element={<ConsultiSadbhawna />} />
          <Route path="/trattamenti-ayurveda" element={<TrattamentiAyurveda />} />
          <Route path="/prakriti-test" element={<PrakritiTest />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
