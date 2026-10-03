import React from 'react';
import Hero from '../components/Hero';
import WelcomeNotice from '../components/WelcomeNotice';
import ServicesCards from '../components/ServicesCards';
import AboutAcademy from '../components/AboutAcademy';
import PrakritiTest from '../components/PrakritiTest';
import Stats from '../components/Stats';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <WelcomeNotice />
      <ServicesCards />
      <AboutAcademy />
      <PrakritiTest />
      <Stats />
      <ContactForm />
    </main>
  );
};

export default Home;
