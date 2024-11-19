"use client"
import React, { useState, useEffect } from 'react';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Home: React.FC = () => {
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Handle theme changes
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark');
  };


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <Hero language={language} />
      <About language={language} />
      <Experience language={language} />
      <Skills language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Home;