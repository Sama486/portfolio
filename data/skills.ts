 import { Skills } from '../types/interfaces';

  export const getSkill = (language: string): Skills => ({
    technical: [
      "Next.js", "React.js", "TypeScript", "JavaScript", "HTML", "CSS",
      "Node.js", "C#/.NET", "MongoDB", "SQL", "Prisma", "Google Cloud",
      "Tailwind/Bootstrap", "Linux", "Docker"
    ],
    soft: [
      language === 'de' ? "Agile Methoden" : "Agile Methods",
      language === 'de' ? "Strategisches Denken" : "Strategic Thinking",
      language === 'de' ? "Selbstständiges Arbeiten" : "Independent Work",
      language === 'de' ? "Kommunikation" : "Communication",
      language === 'de' ? "Problemlösungskompetenz" : "Problem Solving",
      language === 'de' ? "Teamwork" : "Teamwork",
      language === 'de' ? "Weiterbildungsbereitschaft" : "Continuous Learning"
    ]
  });
