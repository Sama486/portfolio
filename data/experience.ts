import { Experience } from '../types/interfaces';

export const getExperience = (language: string): Experience[] => [
    {
      title: "Full Stack Developer / Proxy PO",
      company: "Gesundheitsamt Frankfurt",
      period: language === 'de' ? "12/2023 - Heute" : "12/2023 - Present",
      responsibilities: [
        language === 'de' ?
          "Entwicklung der Softwarelösung für die Digitalisierung von Gesundheitsämtern 'GA-Lotse'" :
          "Development of software solution for digitalization of health departments 'GA-Lotse'",
        language === 'de' ?
          "Entwicklung von Webapplikationen mit React.js/Next.js und gängigen CSS Frameworks" :
          "Development of web applications using React.js/Next.js and common CSS frameworks",
        language === 'de' ?
          "Erstellung und Verwaltung von Epics und User Stories im Scrum-Team" :
          "Creation and management of epics and user stories in Scrum team",
        language === 'de' ?
          "Enge Zusammenarbeit mit Stakeholdern zur Analyse von Geschäftsanforderungen" :
          "Close collaboration with stakeholders for business requirements analysis"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Ingenium Labs GmbH, Frankfurt",
      period: "11/2022 - 11/2023",
      responsibilities: [
        language === 'de' ?
          "Entwicklung und Pflege von webbasierten Anwendungen (Frontend und Backend)" :
          "Development and maintenance of web-based applications (frontend and backend)",
        language === 'de' ?
          "Planung und Umsetzung von responsiven Benutzeroberflächen (UI/UX)" :
          "Planning and implementation of responsive user interfaces (UI/UX)",
        language === 'de' ?
          "Verwaltung und Optimierung von Datenbanken (MySQL)" :
          "Management and optimization of databases (MySQL)"
      ]
    },
    {
      title: language === 'de' ? "Software Entwickler" : "Software Developer",
      company: "HitchHiker GmbH, Frankfurt",
      period: "08/2019 - 07/2022",
      responsibilities: [
        language === 'de' ?
          "Entwicklung und Implementierung von Windows-Services" :
          "Development and implementation of Windows services",
        language === 'de' ?
          "Erstellung von Windows-Forms- und WPF-Anwendungen" :
          "Creation of Windows Forms and WPF applications",
        language === 'de' ?
          "Entwicklung mit Microsoft Visual Studio, C# und .NET Framework" :
          "Development with Microsoft Visual Studio, C# and .NET Framework"
      ]
    }
  ];