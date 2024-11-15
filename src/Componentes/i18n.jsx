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

          // About Us

          "ABOUT US": "ABOUT US",
          "Advancing Spatial Intelligence for Sustainability":
            "Advancing Spatial Intelligence for Sustainability",
          "Welcome to Q-Gate Infotech, a leader in spatial data solutions. Our team, headquartered in Bengaluru, India, with a subsidiary in Munich, Germany, creates AI-driven, blockchain-enabled solutions to solve complex environmental challenges.":
            "Welcome to Q-Gate Infotech, a leader in spatial data solutions. Our team, headquartered in Bengaluru, India, with a subsidiary in Munich, Germany, creates AI-driven, blockchain-enabled solutions to solve complex environmental challenges.",
          "We specialize in geospatial analytics for climate action, disaster management, and environmental sustainability. With our advanced technologies, we offer tailored solutions for businesses, governments, and organizations globally.":
            "We specialize in geospatial analytics for climate action, disaster management, and environmental sustainability. With our advanced technologies, we offer tailored solutions for businesses, governments, and organizations globally.",
          "Our solutions are built on cutting-edge tools, including AI, cloud computing, and LiDAR data analysis, to provide accurate insights and mitigate risks associated with climate change and natural disasters.":
            "Our solutions are built on cutting-edge tools, including AI, cloud computing, and LiDAR data analysis, to provide accurate insights and mitigate risks associated with climate change and natural disasters.",
          "Join us in our mission to drive meaningful change and contribute to a more sustainable future through innovation and technology.":
            "Join us in our mission to drive meaningful change and contribute to a more sustainable future through innovation and technology.",
          "History and Milestone": "History and Milestone",
          "In just over a year since our founding in 2022, Q-Gate Infotech has traversed an exponential growth trajectory that exemplifies our boundary-pushing ethos and commitment to environmental sustainability.":
            "In just over a year since our founding in 2022, Q-Gate Infotech has traversed an exponential growth trajectory that exemplifies our boundary-pushing ethos and commitment to environmental sustainability.",
          "Establishment and Early Innovations":
            "Establishment and Early Innovations",
          "Expansion and Technological Advancements":
            "Expansion and Technological Advancements",
          "Social Responsibility & Education Commitment.":
            "Social Responsibility & Education Commitment.",
          "Looking Ahead": "Looking Ahead",

          Vision: "Vision",
          "Empower organizations and communities to envision a sustainable future.":
            "Empower organizations and communities to envision a sustainable future.",
          "Leverage environmental intelligence, predictive insights, and engineering excellence.":
            "Leverage environmental intelligence, predictive insights, and engineering excellence.",
          "Provide tailored solutions to maximize the value of data.":
            "Provide tailored solutions to maximize the value of data.",
          "Drive transformative outcomes in sustainability and resilience.":
            "Drive transformative outcomes in sustainability and resilience.",
          "Foster an agile, collaborative culture that nurtures talent and propagates knowledge.":
            "Foster an agile, collaborative culture that nurtures talent and propagates knowledge.",

          Mission: "Mission",
          "Lead the environmental intelligence revolution, integrating advanced technologies for sustainable solutions.":
            "Lead the environmental intelligence revolution, integrating advanced technologies for sustainable solutions.",
          "Empower organizations to accelerate environmental transformation and unlock unprecedented value.":
            "Empower organizations to accelerate environmental transformation and unlock unprecedented value.",
          "Be at the forefront of innovation in environmental intelligence, data analytics, and engineering solutions.":
            "Be at the forefront of innovation in environmental intelligence, data analytics, and engineering solutions.",
          "Create an ecosystem where environmental data and insights seamlessly integrate.":
            "Create an ecosystem where environmental data and insights seamlessly integrate.",

          "What People Are Saying": "What People Are Saying",

          Core: "Core",
          Strengths: "Strengths",
          "Discover the foundation of our expertise and innovation.":
            "Discover the foundation of our expertise and innovation.",
          "Environmental Geospatial Analytics":
            "Environmental Geospatial Analytics",
          "Pioneering sustainability and disaster management solutions.":
            "Pioneering sustainability and disaster management solutions.",
          "AI & Machine Learning": "AI & Machine Learning",
          "Transforming data into predictive insights.":
            "Transforming data into predictive insights.",
          "3D Data Processing": "3D Data Processing",
          "Creating high-fidelity environmental models.":
            "Creating high-fidelity environmental models.",
          "Blockchain Integration": "Blockchain Integration",
          "Secure and transparent data sharing.":
            "Secure and transparent data sharing.",
          "Scalable Operations": "Scalable Operations",
          "Ready to meet growing demands effectively.":
            "Ready to meet growing demands effectively.",
          "Agile & Collaborative Culture": "Agile & Collaborative Culture",
          "Empowering innovation and learning.":
            "Empowering innovation and learning.",
          "Continuous Innovation": "Continuous Innovation",
          "Driving progress through knowledge sharing.":
            "Driving progress through knowledge sharing.",
          "Tailored Solutions": "Tailored Solutions",
          "Customized solutions for client success.":
            "Customized solutions for client success.",

          "Q-Gate Infotech FAQs": "Q-Gate Infotech FAQs",
          "What is Q-Gate Infotech’s main focus in geospatial intelligence?":
            "What is Q-Gate Infotech’s main focus in geospatial intelligence?",
          "Q-Gate Infotech’s main focus in geospatial intelligence is to provide advanced spatial data analysis and visualization solutions to help organizations make informed decisions.":
            "Q-Gate Infotech’s main focus in geospatial intelligence is to provide advanced spatial data analysis and visualization solutions to help organizations make informed decisions.",
          "How does Q-Gate Infotech contribute to environmental sustainability?":
            "How does Q-Gate Infotech contribute to environmental sustainability?",
          "Q-Gate Infotech contributes to environmental sustainability by leveraging geospatial technologies to monitor and manage natural resources, track environmental changes, and support sustainable development initiatives.":
            "Q-Gate Infotech contributes to environmental sustainability by leveraging geospatial technologies to monitor and manage natural resources, track environmental changes, and support sustainable development initiatives.",
          "What types of technologies does Q-Gate use for disaster management?":
            "What types of technologies does Q-Gate use for disaster management?",
          "Q-Gate Infotech uses a range of technologies for disaster management, including remote sensing, GIS mapping, real-time data analytics, and early warning systems to enhance disaster preparedness and response.":
            "Q-Gate Infotech uses a range of technologies for disaster management, including remote sensing, GIS mapping, real-time data analytics, and early warning systems to enhance disaster preparedness and response.",
          "How does blockchain enhance data sharing in Q-Gate’s projects?":
            "How does blockchain enhance data sharing in Q-Gate’s projects?",
          "Blockchain enhances data sharing in Q-Gate’s projects by providing a secure, transparent, and immutable ledger for recording and verifying data transactions, ensuring data integrity and trust among stakeholders.":
            "Blockchain enhances data sharing in Q-Gate’s projects by providing a secure, transparent, and immutable ledger for recording and verifying data transactions, ensuring data integrity and trust among stakeholders.",
          "What industries does Q-Gate Infotech serve with its spatial intelligence solutions?":
            "What industries does Q-Gate Infotech serve with its spatial intelligence solutions?",
          "Q-Gate Infotech serves various industries with its spatial intelligence solutions, including agriculture, urban planning, transportation, environmental management, and public safety.":
            "Q-Gate Infotech serves various industries with its spatial intelligence solutions, including agriculture, urban planning, transportation, environmental management, and public safety.",
          "What is the role of AI and machine learning in Q-Gate’s services?":
            "What is the role of AI and machine learning in Q-Gate’s services?",
          "AI and machine learning play a crucial role in Q-Gate’s services by enabling advanced data analysis, predictive modeling, and automation of geospatial processes, leading to more accurate and efficient solutions.":
            "AI and machine learning play a crucial role in Q-Gate’s services by enabling advanced data analysis, predictive modeling, and automation of geospatial processes, leading to more accurate and efficient solutions.",
          "What is Q-Gate Infotech’s approach to climate change mitigation?":
            "What is Q-Gate Infotech’s approach to climate change mitigation?",
          "Q-Gate Infotech’s approach to climate change mitigation involves using geospatial technologies to monitor climate patterns, assess vulnerabilities, and support the development of strategies for reducing greenhouse gas emissions and enhancing climate resilience.":
            "Q-Gate Infotech’s approach to climate change mitigation involves using geospatial technologies to monitor climate patterns, assess vulnerabilities, and support the development of strategies for reducing greenhouse gas emissions and enhancing climate resilience.",
          "What experience does Q-Gate have with 3D mapping and photogrammetry?":
            "What experience does Q-Gate have with 3D mapping and photogrammetry?",
          "Q-Gate Infotech has extensive experience with 3D mapping and photogrammetry, utilizing these technologies to create detailed and accurate 3D models of landscapes, infrastructure, and urban environments for various applications.":
            "Q-Gate Infotech has extensive experience with 3D mapping and photogrammetry, utilizing these technologies to create detailed and accurate 3D models of landscapes, infrastructure, and urban environments for various applications.",
          "How does Q-Gate Infotech support educational and social responsibility initiatives?":
            "How does Q-Gate Infotech support educational and social responsibility initiatives?",
          "Q-Gate Infotech supports educational and social responsibility initiatives by providing training programs, collaborating with academic institutions, and engaging in community projects that promote the use of geospatial technologies for social good.":
            "Q-Gate Infotech supports educational and social responsibility initiatives by providing training programs, collaborating with academic institutions, and engaging in community projects that promote the use of geospatial technologies for social good.",
          "What are Q-Gate’s goals for expanding its services in the future?":
            "What are Q-Gate’s goals for expanding its services in the future?",
          "Q-Gate’s goals for expanding its services in the future include exploring new geospatial technologies, expanding into new markets, and continuing to innovate and provide cutting-edge solutions to address emerging challenges in various industries.":
            "Q-Gate’s goals for expanding its services in the future include exploring new geospatial technologies, expanding into new markets, and continuing to innovate and provide cutting-edge solutions to address emerging challenges in various industries.",

          // Footer
          "Q-gate Infotech Private Limited #11, Abhaya Heights, JP Nagar, Bangaluru, India - 560078":
            "Q-gate Infotech Private Limited #11, Abhaya Heights, JP Nagar, Bangaluru, India - 560078",
          "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to business, organizations, and government.":
            "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to business, organizations, and government.",
          "Q-gate Infotech Private Limited": "Q-gate Infotech Private Limited",
          "#11, Abhaya Heights, JP Nagar, Bangaluru,":
            "#11, Abhaya Heights, JP Nagar, Bengaluru,",
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

          //About Us
          "ABOUT US": "ÜBER UNS",
          "Advancing Spatial Intelligence for Sustainability":
            "Förderung räumlicher Intelligenz für Nachhaltigkeit",
          "Welcome to Q-Gate Infotech, a leader in spatial data solutions. Our team, headquartered in Bengaluru, India, with a subsidiary in Munich, Germany, creates AI-driven, blockchain-enabled solutions to solve complex environmental challenges.":
            "Willkommen bei Q-Gate Infotech, einem führenden Anbieter von räumlichen Datenlösungen. Unser Team mit Sitz in Bengaluru, Indien, und einer Niederlassung in München, Deutschland, entwickelt KI-gesteuerte, blockchain-fähige Lösungen zur Lösung komplexer Umweltprobleme.",
          "We specialize in geospatial analytics for climate action, disaster management, and environmental sustainability. With our advanced technologies, we offer tailored solutions for businesses, governments, and organizations globally.":
            "Wir sind auf geospatiale Analysen für Klimaschutz, Katastrophenmanagement und ökologische Nachhaltigkeit spezialisiert. Mit unseren fortschrittlichen Technologien bieten wir maßgeschneiderte Lösungen für Unternehmen, Regierungen und Organisationen weltweit.",
          "Our solutions are built on cutting-edge tools, including AI, cloud computing, and LiDAR data analysis, to provide accurate insights and mitigate risks associated with climate change and natural disasters.":
            "Unsere Lösungen basieren auf modernsten Werkzeugen, einschließlich KI, Cloud-Computing und LiDAR-Datenanalyse, um präzise Einblicke zu bieten und Risiken im Zusammenhang mit dem Klimawandel und Naturkatastrophen zu mindern.",
          "Join us in our mission to drive meaningful change and contribute to a more sustainable future through innovation and technology.":
            "Schließen Sie sich uns an, um durch Innovation und Technologie einen bedeutenden Wandel voranzutreiben und zu einer nachhaltigeren Zukunft beizutragen.",
          "History and Milestone": "Geschichte und Meilensteine",
          "In just over a year since our founding in 2022, Q-Gate Infotech has traversed an exponential growth trajectory that exemplifies our boundary-pushing ethos and commitment to environmental sustainability.":
            "In etwas mehr als einem Jahr seit unserer Gründung im Jahr 2022 hat Q-Gate Infotech eine exponentielle Wachstumsbahn durchlaufen, die unseren grenzenüberschreitenden Ethos und unser Engagement für ökologische Nachhaltigkeit veranschaulicht.",
          "Establishment and Early Innovations":
            "Gründung und frühe Innovationen",
          "Expansion and Technological Advancements":
            "Expansion und technologische Fortschritte",
          "Social Responsibility & Education Commitment.":
            "Soziale Verantwortung & Engagement für Bildung.",
          "Looking Ahead": "Blick nach vorne",
          Vision: "Vision",
          "Empower organizations and communities to envision a sustainable future.":
            "Befähigung von Organisationen und Gemeinschaften, eine nachhaltige Zukunft zu gestalten.",
          "Leverage environmental intelligence, predictive insights, and engineering excellence.":
            "Nutzung von Umweltintelligenz, prädiktiven Einblicken und Ingenieurskompetenz.",
          "Provide tailored solutions to maximize the value of data.":
            "Bereitstellung maßgeschneiderter Lösungen zur Maximierung des Werts von Daten.",
          "Drive transformative outcomes in sustainability and resilience.":
            "Förderung transformierender Ergebnisse in Nachhaltigkeit und Resilienz.",
          "Foster an agile, collaborative culture that nurtures talent and propagates knowledge.":
            "Förderung einer agilen, kollaborativen Kultur, die Talente fördert und Wissen verbreitet.",
          Mission: "Mission",
          "Lead the environmental intelligence revolution, integrating advanced technologies for sustainable solutions.":
            "Führen Sie die Revolution der Umweltintelligenz an, indem Sie fortschrittliche Technologien für nachhaltige Lösungen integrieren.",
          "Empower organizations to accelerate environmental transformation and unlock unprecedented value.":
            "Befähigen Sie Organisationen, die Umwelttransformation zu beschleunigen und beispiellosen Wert freizusetzen.",
          "Be at the forefront of innovation in environmental intelligence, data analytics, and engineering solutions.":
            "Seien Sie an vorderster Front der Innovation in Umweltintelligenz, Datenanalyse und Ingenieurlösungen.",
          "Create an ecosystem where environmental data and insights seamlessly integrate.":
            "Schaffen Sie ein Ökosystem, in dem Umweltdaten und Erkenntnisse nahtlos integriert werden.",
          "What People Are Saying": "Was Menschen sagen",
          Core: "Kern",
          Strengths: "Stärken",
          "Discover the foundation of our expertise and innovation.":
            "Entdecken Sie die Grundlage unserer Expertise und Innovation.",
          "Environmental Geospatial Analytics": "Umweltgeospatiale Analysen",
          "Pioneering sustainability and disaster management solutions.":
            "Pionierarbeit bei Lösungen für Nachhaltigkeit und Katastrophenmanagement.",
          "AI & Machine Learning": "KI & Maschinelles Lernen",
          "Transforming data into predictive insights.":
            "Daten in prädiktive Einblicke verwandeln.",
          "3D Data Processing": "3D-Datenverarbeitung",
          "Creating high-fidelity environmental models.":
            "Erstellung hochpräziser Umweltmodelle.",
          "Blockchain Integration": "Blockchain-Integration",
          "Secure and transparent data sharing.":
            "Sichere und transparente Datenfreigabe.",
          "Scalable Operations": "Skalierbare Operationen",
          "Ready to meet growing demands effectively.":
            "Bereit, wachsende Anforderungen effektiv zu erfüllen.",
          "Agile & Collaborative Culture": "Agile & Kollaborative Kultur",
          "Empowering innovation and learning.":
            "Förderung von Innovation und Lernen.",
          "Continuous Innovation": "Kontinuierliche Innovation",
          "Driving progress through knowledge sharing.":
            "Fortschritt durch Wissensaustausch vorantreiben.",
          "Tailored Solutions": "Maßgeschneiderte Lösungen",
          "Customized solutions for client success.":
            "Maßgeschneiderte Lösungen für den Erfolg der Kunden.",
          "Q-Gate Infotech FAQs": "Q-Gate Infotech FAQs",
          "What is Q-Gate Infotech’s main focus in geospatial intelligence?":
            "Was ist der Hauptfokus von Q-Gate Infotech in der geospatialen Intelligenz?",
          "Q-Gate Infotech’s main focus in geospatial intelligence is to provide advanced spatial data analysis and visualization solutions to help organizations make informed decisions.":
            "Der Hauptfokus von Q-Gate Infotech in der geospatialen Intelligenz liegt in der Bereitstellung fortschrittlicher Lösungen für die räumliche Datenanalyse und Visualisierung, um Organisationen zu helfen, fundierte Entscheidungen zu treffen.",
          "How does Q-Gate Infotech contribute to environmental sustainability?":
            "Wie trägt Q-Gate Infotech zur ökologischen Nachhaltigkeit bei?",
          "Q-Gate Infotech contributes to environmental sustainability by leveraging geospatial technologies to monitor and manage natural resources, track environmental changes, and support sustainable development initiatives.":
            "Q-Gate Infotech trägt zur ökologischen Nachhaltigkeit bei, indem es geospatial Technologien einsetzt, um natürliche Ressourcen zu überwachen und zu verwalten, Umweltveränderungen zu verfolgen und nachhaltige Entwicklungsinitiativen zu unterstützen.",
          "What types of technologies does Q-Gate use for disaster management?":
            "Welche Technologien setzt Q-Gate für das Katastrophenmanagement ein?",
          "Q-Gate Infotech uses a range of technologies for disaster management, including remote sensing, GIS mapping, real-time data analytics, and early warning systems to enhance disaster preparedness and response.":
            "Q-Gate Infotech setzt eine Vielzahl von Technologien für das Katastrophenmanagement ein, darunter Fernerkundung, GIS-Kartierung, Echtzeit-Datenanalyse und Frühwarnsysteme, um die Katastrophenprävention und -reaktion zu verbessern.",
          "How does blockchain enhance data sharing in Q-Gate’s projects?":
            "Wie verbessert Blockchain das Teilen von Daten in Q-Gate Projekten?",
          "Blockchain enhances data sharing in Q-Gate’s projects by providing a secure, transparent, and immutable ledger for recording and verifying data transactions, ensuring data integrity and trust among stakeholders.":
            "Blockchain verbessert das Teilen von Daten in Q-Gate-Projekten, indem es ein sicheres, transparentes und unveränderliches Register für die Aufzeichnung und Verifizierung von Datentransaktionen bereitstellt und so die Datenintegrität und das Vertrauen unter den Beteiligten gewährleistet.",
          "What industries does Q-Gate Infotech serve with its spatial intelligence solutions?":
            "Welche Industrien bedient Q-Gate Infotech mit seinen Lösungen für räumliche Intelligenz?",
          "Q-Gate Infotech serves various industries with its spatial intelligence solutions, including agriculture, urban planning, transportation, environmental management, and public safety.":
            "Q-Gate Infotech bedient verschiedene Industrien mit seinen Lösungen für räumliche Intelligenz, darunter Landwirtschaft, Stadtplanung, Verkehr, Umweltmanagement und öffentliche Sicherheit.",
          "What is the role of AI and machine learning in Q-Gate’s services?":
            "Welche Rolle spielen KI und maschinelles Lernen in den Diensten von Q-Gate?",
          "AI and machine learning play a crucial role in Q-Gate’s services by enabling advanced data analysis, predictive modeling, and automation of geospatial processes, leading to more accurate and efficient solutions.":
            "KI und maschinelles Lernen spielen eine entscheidende Rolle in den Diensten von Q-Gate, indem sie fortschrittliche Datenanalysen, prädiktive Modellierung und Automatisierung geospatialer Prozesse ermöglichen, was zu genaueren und effizienteren Lösungen führt.",
          "What is Q-Gate Infotech’s approach to climate change mitigation?":
            "Wie geht Q-Gate Infotech mit der Minderung des Klimawandels um?",
          "Q-Gate Infotech’s approach to climate change mitigation involves using geospatial technologies to monitor climate patterns, assess vulnerabilities, and support the development of strategies for reducing greenhouse gas emissions and enhancing climate resilience.":
            "Der Ansatz von Q-Gate Infotech zur Minderung des Klimawandels umfasst den Einsatz geospatialer Technologien zur Überwachung von Klimamustern, Bewertung von Verwundbarkeiten und Unterstützung bei der Entwicklung von Strategien zur Reduzierung von Treibhausgasemissionen und zur Förderung der Klimarresilienz.",
          "What experience does Q-Gate have with 3D mapping and photogrammetry?":
            "Welche Erfahrungen hat Q-Gate mit 3D-Kartierung und Photogrammetrie?",
          "Q-Gate Infotech has extensive experience with 3D mapping and photogrammetry, utilizing these technologies to create detailed and accurate 3D models of landscapes, infrastructure, and urban environments for various applications.":
            "Q-Gate Infotech hat umfassende Erfahrungen in der 3D-Kartierung und Photogrammetrie und nutzt diese Technologien zur Erstellung detaillierter und genauer 3D-Modelle von Landschaften, Infrastrukturen und städtischen Umgebungen für verschiedene Anwendungen.",
          "How does Q-Gate Infotech support educational and social responsibility initiatives?":
            "Wie unterstützt Q-Gate Infotech Bildungs- und soziale Verantwortunginitiativen?",
          "Q-Gate Infotech supports educational and social responsibility initiatives by providing training programs, collaborating with academic institutions, and engaging in community projects that promote the use of geospatial technologies for social good.":
            "Q-Gate Infotech unterstützt Bildungs- und soziale Verantwortunginitiativen, indem es Schulungsprogramme anbietet, mit akademischen Institutionen zusammenarbeitet und sich in Gemeinschaftsprojekten engagiert, die den Einsatz geospatialer Technologien für das Gemeinwohl fördern.",
          "What are Q-Gate’s goals for expanding its services in the future?":
            "Was sind die Ziele von Q-Gate für die Erweiterung seiner Dienste in der Zukunft?",
          "Q-Gate’s goals for expanding its services in the future include exploring new geospatial technologies, expanding into new markets, and continuing to innovate and provide cutting-edge solutions to address emerging challenges in various industries.":
            "Die Ziele von Q-Gate für die Erweiterung seiner Dienste in der Zukunft umfassen die Erforschung neuer geospatialer Technologien, die Expansion in neue Märkte und die fortlaufende Innovation und Bereitstellung von bahnbrechenden Lösungen zur Bewältigung neuer Herausforderungen in verschiedenen Industrien.",

          //Footer
          "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to business, organizations, and government.":
            "Ein innovativer Softwareanbieter, Systemintegrator und Technologieanbieter, der gegründet wurde, um verwertbare Erkenntnisse, fortschrittliche intelligente Lösungen und Beratungsdienstleistungen für Unternehmen, Organisationen und die Regierung bereitzustellen.",
          "Q-gate Infotech Private Limited": "Q-Gate Infotech GmbH",
          "#11, Abhaya Heights, JP Nagar, Bengaluru,": "München",
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
