import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';
import type { Translations } from '@/types/interfaces';
import { fadeInUp, staggerContainer, listItem } from '@/utils/animations';

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

const About: React.FC<AboutProps> = ({ language }) => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold mb-8 text-center dark:text-white"
        >
          {translations[language].about.title}
        </motion.h2>
        
        <motion.div 
          variants={fadeInUp}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transform-gpu"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Description */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p 
                variants={fadeInUp}
                className="text-gray-600 dark:text-gray-300 mb-6"
              >
                {translations[language].about.description}
              </motion.p>
            </motion.div>
            
            {/* Languages */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                variants={fadeInUp}
                className="text-lg font-semibold mb-4 dark:text-white"
              >
                {translations[language].about.languages}
              </motion.h3>
              <motion.div 
                className="space-y-2 dark:text-gray-300"
                variants={staggerContainer}
              >
                {LANGUAGES.map((lang) => (
                  <motion.div 
                    key={lang.name.en}
                    variants={listItem}
                    whileHover={{ 
                      x: 10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <motion.span 
                      variants={fadeInUp}
                    >
                      {lang.name[language]}
                    </motion.span>
                    <motion.span
                      variants={fadeInUp}
                      className="font-medium"
                    >
                      {translations[language].about[lang.level]}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;