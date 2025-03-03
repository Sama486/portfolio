"use client"
import React, { useState } from 'react';
import { X, Menu, Sun, Moon, Globe } from 'lucide-react';
import { translations } from '@/data/translations';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const Navigation = ({
  darkMode,
  toggleDarkMode,
  language,
  setLanguage
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: Array<keyof typeof translations.en.nav> = ['about', 'experience', 'skills', 'contact'];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-20 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:scale-105 transition-all duration-200 dark:text-white backdrop-blur-sm"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 dark:bg-gray-900/90 shadow-lg fixed w-full top-0 z-10 transition-all duration-200 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Karim Benziane
            </h1>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-6">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="relative text-gray-700 dark:text-gray-300 py-2 px-3 group overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-white transition-colors duration-200">
                      {translations[language].nav[item]}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 group-hover:h-full -z-0 transition-all duration-300 ease-in-out transform origin-bottom rounded-lg" />
                  </a>
                ))}
              </div>

              {/* Theme & Language Switchers */}
              <div className="flex space-x-3 pr-12 md:pr-0">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 group transition-all duration-300"
                  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {darkMode ? 
                    <Sun size={20} className="text-yellow-500 group-hover:text-white transition-colors duration-300" /> : 
                    <Moon size={20} className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  }
                </button>

                <button
                  onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
                  className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-500 group transition-all duration-300"
                  aria-label={`Switch to ${language === 'de' ? 'English' : 'German'}`}
                >
                  <Globe size={20} className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                    {language.toUpperCase()}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-white/95 dark:bg-gray-900/95 z-20 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden backdrop-blur-sm`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsMenuOpen(false)}
              className="relative text-xl text-gray-800 dark:text-gray-200 py-2 group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                {translations[language].nav[item]}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 group-hover:h-full -z-0 transition-all duration-300 ease-in-out transform origin-bottom rounded-lg" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;