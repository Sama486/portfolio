"use client"
import { useState, useEffect } from 'react';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CertificateSlideshow from '@/components/CertificateSlideshow';
import { getCertificates } from '@/data/certificates';

// Client component for the page
const Home = () => {
  const [language, setLanguage] = useState<'de' | 'en'>('de');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [slideshowOpen, setSlideshowOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark');
  };

  // Functions to handle the certificate slideshow
  const openCertificateSlideshow = () => {
    setSlideshowOpen(true);
  };

  const closeCertificateSlideshow = () => {
    setSlideshowOpen(false);
  };

  // Get certificates based on current language
  const certificateCategories = getCertificates(language);
  
  // All certificates from all categories in a flat list - descriptions are already included in the data
  const allCertificates = certificateCategories.flatMap(category => 
    category.certificates
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navigation
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <Hero 
        language={language} 
        openCertificateSlideshow={openCertificateSlideshow} 
      />
      <About language={language} />
      <Experience language={language} />
      <Skills language={language} />
      <Contact language={language} />
      <Footer language={language} />
      
      {/* Certificate Slideshow */}
      <CertificateSlideshow
        isOpen={slideshowOpen}
        onClose={closeCertificateSlideshow}
        certificates={allCertificates}
        language={language}
        categories={certificateCategories}
      />
    </div>
  );
};

export default Home;