import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { translations } from '@/data/translations';
import { fadeInUp, staggerContainer, floatingAnimation } from '@/utils/animations';

interface HeroProps {
  language: 'de' | 'en';
  openCertificateSlideshow: () => void;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
  isButton?: boolean;
  label?: string;
}

const socialIconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: [1, 1.2, 1.2, 1.1, 1.2],
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    }
  }
};

const buttonVariants = {
  initial: { scale: 1, backgroundColor: "rgba(0, 0, 0, 0)" },
  hover: { 
    scale: 1.05, 
    backgroundColor: "rgba(5, 150, 105, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
  tap: {
    scale: 0.95,
    backgroundColor: "rgba(5, 150, 105, 0.2)",
    transition: {
      duration: 0.1,
    }
  }
};

// Refactored AnimatedBackground component without React.FC
const AnimatedBackground = () => {
  const shapes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    animationDuration: Math.random() * 20 + 20,
    delay: Math.random() * -20
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map(({ id, size, left, animationDuration, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: delay * 0.1 }}
          className="absolute rounded-full dark:opacity-10 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: '100%',
            animation: `float ${animationDuration}s infinite`,
            animationDelay: `${delay}s`
          }}
        />
      ))}
    </div>
  );
};

// Fixed SocialLink component with simpler approach
const SocialLink = ({ href, icon, color, onClick, isButton = false, label }: SocialLinkProps) => {
  if (isButton) {
    return (
      <motion.button 
        onClick={onClick}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 shadow-sm transition-all ${color}`}
      >
        {icon}
        {label && <span className="text-sm font-medium">{label}</span>}
      </motion.button>
    );
  }

  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={socialIconVariants}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.9 }}
      className={`transition-colors duration-300 ${color}`}
    >
      {icon}
    </motion.a>
  );
};

// Refactored Hero component without React.FC
const Hero = ({ language, openCertificateSlideshow }: HeroProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-gray-800 pt-20 transition-colors duration-200 relative overflow-hidden"
    >
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-100vh) rotate(180deg);
          }
          100% {
            transform: translateY(-200vh) rotate(360deg);
          }
        }
        .animate-float {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
      <AnimatedBackground />
      <motion.div 
        style={{ y }}
        className="max-w-6xl mx-auto px-4 py-20 relative"
      >
        <motion.div 
          variants={staggerContainer}
          className="flex flex-col md:flex-row items-center justify-center md:space-x-12"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 md:mb-0"
          >
            <motion.div
              variants={floatingAnimation}
              initial="initial"
              animate="animate"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-500 shadow-lg"
            >
              <img
                src="./3.jpg"
                alt="Karim Benziane"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeInUp} 
            className="text-center md:text-left"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold mb-4 dark:text-white"
            >
              Karim Benziane
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {translations[language].hero.title}
            </motion.p>
            <div className="flex flex-col space-y-4 items-center md:items-start">
              <motion.div
                variants={staggerContainer}
                className="flex justify-center md:justify-start space-x-4"
              >
                <SocialLink 
                  href="https://github.com/Sama486" 
                  icon={<Github size={24} />}
                  color="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                />
                <SocialLink 
                  href="https://www.linkedin.com/in/karim-benziane-b96a61232/"
                  icon={<Linkedin size={24} />}
                  color="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                />
                <SocialLink 
                  href="mailto:k.benziane@web.de"
                  icon={<Mail size={24} />}
                  color="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
                />
                <SocialLink 
                  href="https://www.cloudskillsboost.google/public_profiles/ab57cc82-4633-4bab-b091-67eebec2f59e"
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  }
                  color="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                />
              </motion.div>
              
              {/* Zertifikate-Button - Separate from social icons */}
              <motion.div 
                variants={fadeInUp}
                className="mt-2 self-end md:self-start md:mt-4"
              >
                <SocialLink 
                  href="#"
                  icon={<FileText size={18} />}
                  color="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  onClick={openCertificateSlideshow}
                  isButton={true}
                  label={language === 'en' ? 'View Certificates' : 'Weitere Zertifikate'}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;