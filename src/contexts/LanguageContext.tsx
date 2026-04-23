import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import vi from '../locales/vi';
import en from '../locales/en';

type Language = 'vi' | 'en';
type Dictionary = typeof vi;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const storedLang = localStorage.getItem('language');
    return (storedLang as Language) || 'vi';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'vi' ? 'en' : 'vi');
  };

  // Helper to get nested properties by string path (like 'navbar.about')
  const getNestedTranslation = (obj: any, path: string): string => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
  };

  const t = (key: string): string => {
    const dict: Dictionary = language === 'vi' ? vi : en;
    return getNestedTranslation(dict, key);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
