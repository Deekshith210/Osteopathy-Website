import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Explainer from './components/Explainer';
import Doctor from './components/Doctor';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-brand-peach selection:bg-brand-peachDark selection:text-brand-dark">
      <h1>Osteopathy Website Deployed</h1>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Explainer />
        <Doctor />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
      </main>
      <Contact />
      <FloatingCTA />
    </div>
  );
}

export default App;