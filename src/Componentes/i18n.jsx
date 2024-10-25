import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      EN: {
        translation: {
          Home: "Home",
          "About Us": "About Us",
          Verticals: "Verticals",
          Services: "Services",
          Contact: "Contact",
          Careers: "Careers",
          Agriculture: "Agriculture",
          "Marine & Water Resource Management":
            "Marine & Water Resource Management",
          "Infrastructure Development": "Infrastructure Development",
          "Smart Transportation & Logistics":
            "Smart Transportation & Logistics",
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
          Company: "Company",
          About: "About",
          Careers: "Careers",
          Contact: "Contact",
          "Mapping solutions as unique as your business":
            "Mapping solutions as unique as your business.",
          "Geospatial Processing": "Geospatial Processing",
          "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making.":
            "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making.",
          "Software Development": "Software Development",
          "Delivering innovative IT solutions and development services to enhance geospatial data processing and management.":
            "Delivering innovative IT solutions and development services to enhance geospatial data processing and management.",
          "Data Analytics": "Data Analytics",
          "Unlocking actionable insights through advanced data analytics, transforming geospatial data into strategic solutions.":
            "Unlocking actionable insights through advanced data analytics, transforming geospatial data into strategic solutions.",
          "Content Annotation": "Content Annotation",
          "Providing expert content annotation services to enrich geospatial data for improved accuracy and analysis.":
            "Providing expert content annotation services to enrich geospatial data for improved accuracy and analysis.",
          "Engineering Solutions": "Engineering Solutions",
          "Providing tailored engineering solutions powered by geospatial technology for accurate planning, design, and infrastructure management.":
            "Providing tailored engineering solutions powered by geospatial technology for accurate planning, design, and infrastructure management.",
          "Cloud-Based AI/ML Solutions": "Cloud-Based AI/ML Solutions",
          "Delivering cutting-edge cloud-based AI/ML solutions to accelerate geospatial data processing and intelligent decision-making.":
            "Delivering cutting-edge cloud-based AI/ML solutions to accelerate geospatial data processing and intelligent decision-making.",
          "Professional Training": "Professional Training",
          "Offering professional training programs to equip individuals and teams with essential geospatial and remote sensing skills.":
            "Offering professional training programs to equip individuals and teams with essential geospatial and remote sensing skills.",
          "Talent Solutions": "Talent Solutions",
          "Connecting businesses with top-tier talent through specialized geospatial and remote sensing talent solutions.":
            "Connecting businesses with top-tier talent through specialized geospatial and remote sensing talent solutions.",
          "In the meantime, here are the services we offer":
            "In the meantime, here are the services we offer",
          SERVICES: "SERVICES",

          // Footer
          "Q-gate Infotech Private Limited #11, Abhaya Heights, JP Nagar, Bangaluru, India - 560078":
            "Q-gate Infotech Private Limited #11, Abhaya Heights, JP Nagar, Bangaluru, India - 560078",
          "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to business, organizations, and government.":
            "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to business, organizations, and government.",
          "Q-gate Infotech Private Limited": "Q-gate Infotech Private Limited",
          "#11, Abhaya Heights, JP Nagar, Bangaluru,":
            "#11, Abhaya Heights, JP Nagar, Bangaluru,",
          "India - 560078": "India - 560078",
          "+91 93428 55394": "+91 93428 55394",
          "Opening Hours: 09:00 - 18:00": "Opening Hours: 09:00 - 18:00",
          "contact.in@q-gate.co": "contact.in@q-gate.co",
        },
      },
      GE: {
        translation: {
          Home: "Startseite",
          "About Us": "Über uns",
          Verticals: "Vertikale",
          Services: "Dienstleistungen",
          Contact: "Kontakt",
          Careers: "Karriere",
          Agriculture: "Landwirtschaft",
          "Marine & Water Resource Management":
            "Meeres- und Wasserressourcenmanagement",
          "Infrastructure Development": "Infrastrukturentwicklung",
          "Smart Transportation & Logistics":
            "Intelligenter Transport und Logistik",
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
          "In the meantime, here are the services we offer":
            "In the meantime, here are the services we offer",

          // New Company-related translations
          Company: "Unternehmen",
          About: "Über",
          Careers: "Karriere",
          Contact: "Kontakt",
          "Mapping solutions as unique as your business":
            "Maßgeschneiderte Lösungen, die so einzigartig sind wie Ihr Unternehmen.",
          "Geospatial Processing": "Geoverarbeitung",
          "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making.":
            "Experte für Geoverarbeitung, um Rohraumdaten in umsetzbare Erkenntnisse für fundierte Entscheidungen zu verwandeln.",
          "Software Development": "Softwareentwicklung",
          "Delivering innovative IT solutions and development services to enhance geospatial data processing and management.":
            "Bereitstellung innovativer IT-Lösungen und Entwicklungsdienstleistungen zur Verbesserung der Verarbeitung und Verwaltung geospatialer Daten.",
          "Data Analytics": "Datenanalyse",
          "Unlocking actionable insights through advanced data analytics, transforming geospatial data into strategic solutions.":
            "Ermöglichen umsetzbarer Erkenntnisse durch fortschrittliche Datenanalyse, die geospatiale Daten in strategische Lösungen umwandelt.",
          "Content Annotation": "Inhaltsannotation",
          "Providing expert content annotation services to enrich geospatial data for improved accuracy and analysis.":
            "Bereitstellung von Experten-Inhaltsannotationen zur Anreicherung geospatialer Daten für eine verbesserte Genauigkeit und Analyse.",
          "Engineering Solutions": "Ingenieurlösungen",
          "Providing tailored engineering solutions powered by geospatial technology for accurate planning, design, and infrastructure management.":
            "Bereitstellung maßgeschneiderter Ingenieurlösungen, die durch geospatiale Technologie unterstützt werden, für eine genaue Planung, Konstruktion und Infrastrukturverwaltung.",
          "Cloud-Based AI/ML Solutions": "Cloud-basierte KI/ML-Lösungen",
          "Delivering cutting-edge cloud-based AI/ML solutions to accelerate geospatial data processing and intelligent decision-making.":
            "Bereitstellung modernster cloudbasierter KI/ML-Lösungen zur Beschleunigung der Verarbeitung geospatialer Daten und intelligenter Entscheidungsfindung.",
          "Professional Training": "Berufsausbildung",
          "Offering professional training programs to equip individuals and teams with essential geospatial and remote sensing skills.":
            "Angebot von Schulungsprogrammen zur Vermittlung wesentlicher geospatialer und Fernerkundungsfähigkeiten an Einzelpersonen und Teams.",
          SERVICES: "DIENSTLEISTUNGEN",
          "In the meantime, here are the services we offer":
            "In der Zwischenzeit finden Sie hier die Dienstleistungen, die wir anbieten.",

          //Footer
          "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to business, organizations, and government.":
            "Ein innovativer Softwareanbieter, Systemintegrator und Technologieanbieter, der gegründet wurde, um verwertbare Erkenntnisse, fortschrittliche intelligente Lösungen und Beratungsdienstleistungen für Unternehmen, Organisationen und die Regierung bereitzustellen.",
          "Q-gate Infotech Private Limited": "Q-Gate Infotech GmbH",
          "#11, Abhaya Heights, JP Nagar, Bangaluru,": "München",
          "India - 560078": "Deutschland - 80331",
          "+91 93428 55394": "+49 176 99519797",
          "Opening Hours: 09:00 - 18:00": "Öffnungszeiten: 09:00 - 18:00",
          "contact.in@q-gate.co": "contact.de@q-gate.co",
        },
      },
    },
    fallbackLng: "EN", // Fallback language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
