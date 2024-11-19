import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { translations } from '@/data/translations';
import { fadeInUp, staggerContainer, socialIconAnimation } from '@/utils/animations';

interface ContactProps {
  language: 'de' | 'en';
}

interface ContactItemProps {
  icon: React.ReactNode;
  content: React.ReactNode;
  delay?: number;
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  hoverColor: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, content, delay = 0 }) => (
  <motion.p
    variants={fadeInUp}
    custom={delay}
    className="flex items-center justify-center dark:text-white group"
    whileHover={{ x: 10 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.span
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="mr-2"
    >
      {icon}
    </motion.span>
    {content}
  </motion.p>
);

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-600 dark:text-gray-400 ${hoverColor} dark:${hoverColor}`}
    variants={socialIconAnimation}
    whileHover="hover"
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

const Contact: React.FC<ContactProps> = ({ language }) => {
  const contactData = {
    email: 'k.benziane@web.de',
    location: 'Frankfurt am Main',
    phone: '0157 50145132',
    social: [
      {
        href: 'https://github.com/Sama486',
        icon: <Github size={24} />,
        hoverColor: 'hover:text-black dark:hover:text-white'
      },
      {
        href: 'https://www.linkedin.com/in/karim-benziane-b96a61232/',
        icon: <Linkedin size={24} />,
        hoverColor: 'hover:text-blue-600'
      }
    ]
  };

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
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section
      id="contact"
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
          {translations[language].contact.title}
        </motion.h2>
        <motion.div
          variants={containerVariants}
          whileHover="hover"
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 max-w-xl mx-auto transform-gpu"
        >
          <motion.div
            variants={staggerContainer}
            className="space-y-4 text-center"
          >
            <ContactItem
              icon={<Mail className="mr-2" />}
              content={
                <motion.a
                  href={`mailto:${contactData.email}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {contactData.email}
                </motion.a>
              }
              delay={0.1}
            />
            
            <ContactItem
              icon="📍"
              content={
                <motion.span
                  className="text-gray-600 dark:text-gray-300 ml-2"
                  variants={fadeInUp}
                >
                  {contactData.location}
                </motion.span>
              }
              delay={0.2}
            />
            
            <ContactItem
              icon="📱"
              content={
                <motion.span
                  className="text-gray-600 dark:text-gray-300 ml-2"
                  variants={fadeInUp}
                >
                  {contactData.phone}
                </motion.span>
              }
              delay={0.3}
            />

            <motion.div
              variants={staggerContainer}
              className="flex justify-center space-x-4 mt-4"
            >
              {contactData.social.map((link, index) => (
                <SocialLink
                  key={link.href}
                  href={link.href}
                  icon={link.icon}
                  hoverColor={link.hoverColor}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;