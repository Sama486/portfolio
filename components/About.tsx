import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';
import type { Translations } from '@/types/interfaces';

interface AboutProps {
  language: 'de' | 'en';
}

interface LanguageItem {
  name: {
    de: string;
    en: string;
  };
  level: keyof Translations['about'];
}

// Refactored LanguageCard component without React.FC
const LanguageCard = ({ lang, language }: { lang: LanguageItem; language: 'de' | 'en' }) => {
  return (
    <motion.div 
      whileHover={{ 
        x: 5,
        backgroundColor: 'rgba(209, 213, 219, 0.1)',
        scale: 1.02,
        transition: { duration: 0 }
      }}
      className="flex justify-between items-center p-2 rounded-lg"
    >
      <span>{lang.name[language]}</span>
      <motion.span
        whileHover={{
          scale: 1.05,
          rotate: 5,
          y: -2,
          transition: { duration: 0 }
        }}
        className="font-medium"
      >
        {translations[language].about[lang.level]}
      </motion.span>
    </motion.div>
  );
};

const LANGUAGES: LanguageItem[] = [
  {
    name: {
      de: 'Deutsch',
      en: 'German'
    },
    level: 'native'
  },
  {
    name: {
      de: 'Englisch', 
      en: 'English'
    },
    level: 'fluent'
  },
  {
    name: {
      de: 'Italienisch',
      en: 'Italian'
    },
    level: 'fluent'
  }
];

// Refactored About component without React.FC
const About = ({ language }: AboutProps) => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-bold mb-8 text-center dark:text-white"
        >
          {translations[language].about.title}
        </motion.h2>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            y: -5,
            transition: { duration: 0.2 }
          }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {translations[language].about.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 dark:text-white">
                {translations[language].about.languages}
              </h3>
              <div className="space-y-2 dark:text-gray-300">
                {LANGUAGES.map((lang, index) => (
                  <LanguageCard 
                    key={lang.name.en}
                    lang={lang}
                    language={language}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;