import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '@/data/translations';
import { getExperience } from '@/data/experience';
import type { Experience as ExperienceType } from '@/types/interfaces';
import { fadeInUp, staggerContainer, listItem } from '@/utils/animations';

interface ExperienceProps {
  language: 'de' | 'en';
}

interface JobCardProps {
  job: ExperienceType;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const cardVariants = {
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
        delay: index * 0.1
      }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 border dark:border-gray-600 transform-gpu"
    >
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-start mb-4"
        variants={fadeInUp}
      >
        <div>
          <motion.h3 
            className="text-xl font-semibold dark:text-white"
            variants={fadeInUp}
          >
            {job.title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 dark:text-gray-300"
            variants={fadeInUp}
          >
            {job.company}
          </motion.p>
        </div>
        <motion.span 
          className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0"
          variants={fadeInUp}
        >
          {job.period}
        </motion.span>
      </motion.div>
      <motion.ul 
        className="list-disc space-y-2"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {job.responsibilities.map((responsibility, idx) => (
          <motion.li 
            key={idx} 
            variants={listItemVariants}
            whileHover={{ 
              x: 10,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="text-gray-600 dark:text-gray-300 pl-4 ml-4 cursor-default"
          >
            <span className="flex">
              <motion.span 
                className="-ml-4"
                variants={fadeInUp}
              >
                {responsibility}
              </motion.span>
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const experience = getExperience(language);

  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white dark:bg-gray-800 py-20 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          variants={fadeInUp}
          className="text-3xl font-bold mb-8 text-center dark:text-white"
        >
          {translations[language].experience.title}
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          className="space-y-6"
        >
          {experience.map((job, index) => (
            <JobCard 
              key={`${job.company}-${index}`} 
              job={job}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;