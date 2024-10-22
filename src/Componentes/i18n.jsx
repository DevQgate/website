import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      EN: {
        translation: {
          "Home": "Home",
          "About Us": "About Us",
          "Verticals": "Verticals",
          "Services": "Services",
          "Contact": "Contact",
          "Careers": "Careers",
          "Agriculture": "Agriculture",
          "Marine & Water Resource Management": "Marine & Water Resource Management",
          "Infrastructure Development": "Infrastructure Development",
          "Smart Transportation & Logistics": "Smart Transportation & Logistics",
          "Energy & Utilities": "Energy & Utilities",
          "Mining & Mineral Exploration": "Mining & Mineral Exploration",
          "Oil & Gas Industry": "Oil & Gas Industry",
          "Geospatial Services": "Geospatial Services",
          "Software Development": "Software Development",
          "Data Analytics": "Data Analytics",
          "Content Annotation": "Content Annotation",
          "Engineering Solutions": "Engineering Solutions",
          "Cloud-Based AI/ML Solutions": "Cloud-Based AI/ML Solutions",
          "Professional Training": "Professional Training",
          "Talent Solutions": "Talent Solutions",
          // New Company-related translations
          "Company": "Company",
          "About": "About",
          "Careers": "Careers",
          "Contact": "Contact",
          "Mapping solutions as unique as your business":"Mapping solutions as unique as your business."
        }
      },
      GE: {
        translation: {
          "Home": "Startseite",
          "About Us": "Über uns",
          "Verticals": "Vertikale",
          "Services": "Dienstleistungen",
          "Contact": "Kontakt",
          "Careers": "Karriere",
          "Agriculture": "Landwirtschaft",
          "Marine & Water Resource Management": "Meeres- und Wasserressourcenmanagement",
          "Infrastructure Development": "Infrastrukturentwicklung",
          "Smart Transportation & Logistics": "Intelligenter Transport und Logistik",
          "Energy & Utilities": "Energie und Versorgungsunternehmen",
          "Mining & Mineral Exploration": "Bergbau und Rohstofferkundung",
          "Oil & Gas Industry": "Öl- und Gasindustrie",
          "Geospatial Services": "Geodienste",
          "Software Development": "Softwareentwicklung",
          "Data Analytics": "Datenanalyse",
          "Content Annotation": "Inhaltsannotation",
          "Engineering Solutions": "Ingenieurdienstleistungen",
          "Cloud-Based AI/ML Solutions": "Cloud-basierte KI/ML-Lösungen",
          "Professional Training": "Berufsausbildung",
          "Talent Solutions": "Talentlösungen",

          // New Company-related translations
          "Company": "Unternehmen",
          "About": "Über",
          "Careers": "Karriere",
          "Contact": "Kontakt",
          "Mapping solutions as unique as your business":"Maßgeschneiderte Lösungen, die so einzigartig sind wie Ihr Unternehmen."
        }
      }
    },
    fallbackLng: 'EN', // Fallback language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    }
  });

export default i18n;
