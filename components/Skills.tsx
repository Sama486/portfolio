import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';
import { getSkill } from '@/data/skills';
import { fadeInUp, staggerContainer } from '@/utils/animations';

interface SkillsProps {
  language: 'de' | 'en';
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  colorClass: {
    bg: string;
    text: string;
    darkBg: string;
    darkText: string;
  };
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ 
  title, 
  skills, 
  colorClass,
  index
}) => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.2
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform-gpu"
    >
      <motion.h3 
        variants={fadeInUp}
        className="text-xl font-semibold mb-4 dark:text-white"
      >
        {title}
      </motion.h3>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={skillVariants}
            whileHover="hover"
            className={`${colorClass.bg} ${colorClass.text} dark:${colorClass.darkBg} dark:${colorClass.darkText} 
              px-3 py-1 rounded-full text-sm cursor-default transform-gpu`}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

const Skills: React.FC<SkillsProps> = ({ language }) => {
  const skills = getSkill(language);

  const colorClasses = {
    technical: {
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      darkBg: 'bg-blue-900',
      darkText: 'text-blue-100'
    },
    soft: {
      bg: 'bg-green-100',
      text: 'text-green-800',
      darkBg: 'bg-green-900',
      darkText: 'text-green-100'
    }
  };

  return (
    <motion.section
      id="skills"
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
          {translations[language].skills.title}
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          <SkillCategory
            title={translations[language].skills.technical}
            skills={skills.technical}
            colorClass={colorClasses.technical}
            index={0}
          />
          <SkillCategory
            title={translations[language].skills.soft}
            skills={skills.soft}
            colorClass={colorClasses.soft}
            index={1}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;