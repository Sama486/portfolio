"use client"
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CertificateSlideShowProps } from '@/types/interfaces';



const CertificateSlideshow = ({ isOpen, onClose, certificates, language, categories }: CertificateSlideShowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryExpanded, setCategoryExpanded] = useState<boolean>(false);

  // Reset index when slideshow is opened
  useEffect(() => {
    if (isOpen && certificates.length > 0) {
      setCurrentIndex(0);
      // Standardmäßig die erste Kategorie auswählen
      if (categories && categories.length > 0) {
        setSelectedCategory(categories[0].name);
      }
    }
  }, [isOpen, categories, certificates.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, certificates.length, onClose]);

  const handleNext = () => {
    if (certificates.length === 0) return;
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    if (certificates.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  // Kategorie wechseln und Index zurücksetzen
  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    
    // Finde den Index des ersten Zertifikats in dieser Kategorie
    const firstCertIndex = certificates.findIndex(cert => cert.category === categoryName);
    if (firstCertIndex !== -1) {
      setCurrentIndex(firstCertIndex);
    }
    
    setCategoryExpanded(false);
  };

  if (!isOpen || certificates.length === 0) return null;

  const currentCertificate = certificates[currentIndex];

  // Überprüfe, ob das aktuelle Zertifikat noch zur ausgewählten Kategorie gehört
  // und aktualisiere die Kategorie, falls nicht
  if (currentCertificate && currentCertificate.category !== selectedCategory) {
    setSelectedCategory(currentCertificate.category);
  }

  const translations = {
    title: language === 'en' ? 'Certificates' : 'Zertifikate',
    closeSlideshow: language === 'en' ? 'Close Slideshow' : 'Slideshow schließen',
    previous: language === 'en' ? 'Previous' : 'Vorheriges',
    next: language === 'en' ? 'Next' : 'Nächstes',
    of: language === 'en' ? 'of' : 'von',
    category: language === 'en' ? 'Category' : 'Kategorie',
    selectCategory: language === 'en' ? 'Select Category' : 'Kategorie auswählen',
  };

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { 
        duration: 0.2 
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full h-full flex flex-col"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white truncate max-w-[200px] md:max-w-none">
                  {currentCertificate.title}
                </h3>
                
                {/* Kategorie-Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setCategoryExpanded(!categoryExpanded)}
                    className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span>{translations.category}: {selectedCategory}</span>
                    {categoryExpanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {categoryExpanded && (
                      <motion.div 
                        className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-700 rounded-md shadow-lg z-10 w-48 py-1 overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {categories.map((category) => (
                          <button
                            key={category.name}
                            onClick={() => handleCategoryChange(category.name)}
                            className={`block px-4 py-2 text-sm w-full text-left transition-colors ${
                              selectedCategory === category.name
                                ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                            }`}
                          >
                            {category.name} ({category.certificates.length})
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={translations.closeSlideshow}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-grow overflow-auto p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full h-full"
                >
                  <iframe
                    src={`${currentCertificate.pdfUrl}#view=FitH`}
                    className="w-full h-full border-0 rounded-md"
                    title={currentCertificate.title}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {currentIndex + 1} {translations.of} {certificates.length}
              </div>
              
              <div className="flex space-x-3">
                <motion.button
                  onClick={handlePrevious}
                  className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={translations.previous}
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  onClick={handleNext}
                  className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={translations.next}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificateSlideshow;