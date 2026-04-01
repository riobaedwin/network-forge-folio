import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      <Toaster position="top-right" theme="light" closeButton />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;