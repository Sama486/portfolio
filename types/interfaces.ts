export interface Translations {
  nav: {
    about: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    title: string;
  };
  about: {
    title: string;
    description: string;
    languages: string;
    native: string;
    fluent: string;
  };
  experience: {
    title: string;
    present: string;
  };
  skills: {
    title: string;
    technical: string;
    soft: string;
  };
  contact: {
    title: string;
    location: string;
  };
  footer: {
    rights: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Skills {
  technical: string[];
  soft: string[];
}

export interface LanguageMap {
  en: Translations;
  de: Translations;
}

export interface Certificate {
  id: string;
  title: string;
  category: string;
  pdfUrl: string;
  description?: string;
}

export interface CertificateCategory {
  name: string;
  certificates: Certificate[];
}

export interface CertificateSlideShowProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: Certificate[];
  language: 'en' | 'de';
  categories: CertificateCategory[];
}
