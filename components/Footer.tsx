import { translations } from '@/data/translations';

interface FooterProps {
 language: 'de' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
 const currentYear = new Date().getFullYear();

 return (
   <footer className="bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-200">
     <div className="max-w-6xl mx-auto px-4">
       <p className="text-center text-gray-600">
         © {currentYear} Karim Benziane. {translations[language].footer.rights}
       </p>
     </div>
   </footer>
 );
};

export default Footer;