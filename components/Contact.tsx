import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { translations } from '@/data/translations';

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

const socialIconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: [1, 1.2, 1.2, 1.1, 1.2],
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    }
  },
  tap: { scale: 0.9 }
};

// Refactored ContactItem component without React.FC
const ContactItem = ({ icon, content, delay = 0 }: ContactItemProps) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex items-center justify-center dark:text-white group"
    whileHover={{ x: 10 }}
  >
    <motion.span
      whileHover={{ scale: 1.2, rotate: 360 }}
      transition={{ type: "spring", stiffness: 400 }}
      className="mr-2"
    >
      {icon}
    </motion.span>
    {content}
  </motion.p>
);

// Refactored SocialLink component without React.FC
const SocialLink = ({ href, icon, hoverColor }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-gray-600 dark:text-gray-400 ${hoverColor} dark:${hoverColor}`}
    variants={socialIconVariants}
    initial="initial"
    whileHover="hover"
    whileTap="tap"
  >
    {icon}
  </motion.a>
);

// Refactored Contact component without React.FC
const Contact = ({ language }: ContactProps) => {
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

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-white dark:bg-gray-800 py-20 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center dark:text-white"
        >
          {translations[language].contact.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 max-w-xl mx-auto"
        >
          <div className="space-y-4 text-center">
            <ContactItem
              icon={<Mail className="mr-2" />}
              content={
                <motion.a
                  href={`mailto:${contactData.email}`}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {contactData.email}
                </motion.a>
              }
              delay={0.1}
            />
            
            <ContactItem
              icon="📍"
              content={
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  {contactData.location}
                </span>
              }
              delay={0.2}
            />
            
            <ContactItem
              icon="📱"
              content={
                <span className="text-gray-600 dark:text-gray-300 ml-2">
                  {contactData.phone}
                </span>
              }
              delay={0.3}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;