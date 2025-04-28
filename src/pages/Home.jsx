import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactForm />
    </main>
  );
};

export default Home;