import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';
import { getSkill } from '@/data/skills';

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

// Refactored SkillCategory component without React.FC
const SkillCategory = ({ 
  title, 
  skills, 
  colorClass,
  index
}: SkillCategoryProps) => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      rotateX: -10
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
        delay: index * 0.2,
        when: "beforeChildren",
        staggerChildren: 0.05
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: (i: number) => ({ 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }),
    hover: { 
      scale: 1.08,
      y: -4,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform-gpu"
    >
      <motion.h3 
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }
        }}
        className="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h3>
      <motion.div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            variants={skillVariants}
            custom={i}
            whileHover="hover"
            className={`${colorClass.bg} ${colorClass.text} dark:${colorClass.darkBg} dark:${colorClass.darkText} 
              px-3 py-1 rounded-full text-sm font-medium cursor-default transform-gpu`}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Refactored Skills component without React.FC
const Skills = ({ language }: SkillsProps) => {
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-200"
      id='skills'
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
          className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white"
        >
          {translations[language].skills.title}
        </motion.h2>
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
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