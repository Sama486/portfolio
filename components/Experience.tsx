import React from 'react';
import { motion, useInView } from 'framer-motion';
import { translations } from '@/data/translations';
import { getExperience } from '@/data/experience';
import type { Experience as ExperienceType } from '@/types/interfaces';

interface ExperienceProps {
  language: 'de' | 'en';
}

interface JobCardProps {
  job: ExperienceType;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 border dark:border-gray-600"
    >
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <motion.div 
          whileHover={{ x: 10, transition: { duration: 0.2 } }}
        >
          <h3 className="text-xl font-semibold dark:text-white">{job.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
        </motion.div>
        <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">{job.period}</span>
      </div>
      <ul className="list-disc space-y-2">
        {job.responsibilities.map((responsibility, idx) => (
          <motion.li 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: (index * 0.2) + ((idx + 1) * 0.1) }}
            whileHover={{ x: 20, transition: { duration: 0.2 } }}
            className="text-gray-600 dark:text-gray-300 pl-4 ml-4 cursor-default"
          >
            <span className="flex">
              <span className="-ml-4">{responsibility}</span>
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const experience = getExperience(language);
  const titleRef = React.useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="experience" className="bg-white dark:bg-gray-800 py-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center dark:text-white"
        >
          {translations[language].experience.title}
        </motion.h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <JobCard 
              key={`${job.company}-${index}`} 
              job={job}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;