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