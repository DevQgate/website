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
          "Founded in Bengaluru, India.": "Founded in Bengaluru, India.",
          "Specializing in geospatial data & analytics":
            "Specializing in geospatial data & analytics",
          "Expertise in large-scale geospatial analytics":
            "Expertise in large-scale geospatial analytics",
          "Delivered 20,000+ miles of 3D annotated maps":
            "Delivered 20,000+ miles of 3D annotated maps",
          "Contributed to navigation, environmental monitoring, and":
            "Contributed to navigation, environmental monitoring, and",
          "infrastructure projects": "infrastructure projects",
          "Expansion and Technological Advancements":
            "Expansion and Technological Advancements",
          "Used LiDAR and custom tools for terrain analysis.":
            "Used LiDAR and custom tools for terrain analysis.",
          "Extracted data insights for climate and disaster response.":
            "Extracted data insights for climate and disaster response.",
          "Explored minerals using satellite imagery.":
            "Explored minerals using satellite imagery.",
          "Analyzed light wave data for resource management.":
            "Analyzed light wave data for resource management.",
          "Social Responsibility & Education Commitment.":
            "Social Responsibility & Education Commitment.",
          "Promoted equal gender opportunities":
            "Promoted equal gender opportunities",
          "Focusing on rural-based graduates.":
            "Focusing on rural-based graduates.",
          "Fostered diversity and inclusion within our teams.":
            "Fostered diversity and inclusion within our teams.",
          "Signed MoUs with universities to update curricula.":
            "Signed MoUs with universities to update curricula.",
          "Collab with academia on research, bridging the industry gap.":
            "Collab with academia on research, bridging the industry gap.",
          "Looking Ahead": "Looking Ahead",
          "Advanced AI and ML for sustainability and resilience.":
            "Advanced AI and ML for sustainability and resilience.",
          "Explored spatial computing with digital twins.":
            "Explored spatial computing with digital twins.",
          "Integrated physical and digital realms seamlessly.":
            "Integrated physical and digital realms seamlessly.",
          "Redefined industry standards with cutting-edge geospatial intelligence":
            "Redefined industry standards with cutting-edge geospatial intelligence",
          "for climate adaptation.": "for climate adaptation.",

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
          " Bangaluru, India - 560078":
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

          //Career
          "Join with us": "Join with us",
          "Why choose your brilliant": "Why choose your brilliant",
          career: "career",
          "with us?": "with us?",
          "Friendly Environment": "Friendly Environment",
          "A friendly work culture fosters collaboration, open  communication, and mutual respect among team members. It encourages positive relationships, promotes teamwork, and creates a supportive atmosphere where everyone feels valued and motivated to contribute.":
            "A friendly work culture fosters collaboration, open  communication, and mutual respect among team members. It encourages positive relationships, promotes teamwork, and creates a supportive atmosphere where everyone feels valued and motivated to contribute.",
          "Team Work": "Team Work",
          "The company emphasizes teamwork, fostering collaboration and communication among employees to achieve common goals. This approach enhances skills, strengthens relationships, and drives innovation and creativity, leading to successful projects outcomes and a thriving work environment.":
            "The company emphasizes teamwork, fostering collaboration and communication among employees to achieve common goals. This approach enhances skills, strengthens relationships, and drives innovation and creativity, leading to successful projects outcomes and a thriving work environment.",
          "Health Insurance": "Health Insurance",
          "The company offers health insurance that includes coverage for medical, dental, and vision care, as well as wellness programs. These benefits provide employees with comprehensive resources for themselves and their families.":
            "The company offers health insurance that includes coverage for medical, dental, and vision care, as well as wellness programs. These benefits provide employees with comprehensive resources for themselves and their families.",
          "Provident Fund": "Provident Fund",
          "The company provides a provident fund, allowing employees to save for their future through regular contributions. The fund helps to ensure financial security for employees in the long term, promoting long-term savings and stability.":
            "The company provides a provident fund, allowing employees to save for their future through regular contributions. The fund helps to ensure financial security for employees in the long term, promoting long-term savings and stability.",
          Location: "Location",
          Type: "Type",
          "Experience Level": "Experience Level",
          Responsibilities: "Responsibilities",
          Requirements: "Requirements",
          "How to Apply": "How to Apply",
          "Send your resume and portfolio to ":
            "Send your resume and portfolio to ",
          Job: "Job",
          Opportunities: "Opportunities",

          //Service - Geospatial Services

          "Unlocking the Power of Spatial Data for Informed Decision-Making":
            "Unlocking the Power of Spatial Data for Informed Decision-Making",
          "At Q-Gate Infotech, our Geospatial Processing services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency.":
            "At Q-Gate Infotech, our Geospatial Processing services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency.",
          "Utilizing advanced technologies and methodologies, we specialize in":
            "Utilizing advanced technologies and methodologies, we specialize in",
          "Image Data Processing": "Image Data Processing",
          "Enhancing high-res images from satellites, drones, and aerial platforms.":
            "Enhancing high-res images from satellites, drones, and aerial platforms.",
          "Extracting key data for agriculture, urban planning, and environmental management.":
            "Extracting key data for agriculture, urban planning, and environmental management.",
          "Providing actionable insights for better decision-making.":
            "Providing actionable insights for better decision-making.",
          "Supporting sustainable practices and efficient resource management.":
            "Supporting sustainable practices and efficient resource management.",
          "Hydro Flattening": "Hydro Flattening",
          "Processing LiDAR data for accurate hydro-flattened DEMs.":
            "Processing LiDAR data for accurate hydro-flattened DEMs.",
          "Enhancing hydrological modeling with hydro-flattened surfaces.":
            "Enhancing hydrological modeling with hydro-flattened surfaces.",
          "Supporting flood risk assessment through hydro-flattened DEMs.":
            "Supporting flood risk assessment through hydro-flattened DEMs.",
          "Improving water resource management with precise elevation models.":
            "Improving water resource management with precise elevation models.",
          "Vegetation Analysis": "Vegetation Analysis",
          "Assessing vegetation health using multispectral and hyperspectral imagery.":
            "Assessing vegetation health using multispectral and hyperspectral imagery.",
          "Estimating biomass for forestry and agricultural applications.":
            "Estimating biomass for forestry and agricultural applications.",
          "Classifying land cover for ecological and environmental studies.":
            "Classifying land cover for ecological and environmental studies.",
          "Supporting forestry management, agriculture, and ecological research.":
            "Supporting forestry management, agriculture, and ecological research.",
          "Satellite Data Analysis": "Satellite Data Analysis",
          "Monitoring environmental changes through satellite imagery.":
            "Monitoring environmental changes through satellite imagery.",
          "Assessing natural resources with satellite data analysis.":
            "Assessing natural resources with satellite data analysis.",
          "Supporting disaster management with real-time data.":
            "Supporting disaster management with real-time data.",
          "Enabling timely decision-making through data interpretation.":
            "Enabling timely decision-making through data interpretation.",

          //Service - Software Development
          "Software Development": "Software Development",
          "Empowering Your Business with Tailored Software Solutions":
            "Empowering Your Business with Tailored Software Solutions",
          "At Q-Gate Infotech, we specialize in creating software solutions that align with your business goals. Our expertise spans across:":
            "At Q-Gate Infotech, we specialize in creating software solutions that align with your business goals. Our expertise spans across:",
          "Custom Software Development": "Custom Software Development",
          "Developing software solutions tailored to unique business needs across industries.":
            "Developing software solutions tailored to unique business needs across industries.",
          "Leveraging the latest technologies for robust and scalable applications.":
            "Leveraging the latest technologies for robust and scalable applications.",
          "Creating user-friendly designs that enhance operational efficiency.":
            "Creating user-friendly designs that enhance operational efficiency.",
          "Supporting business growth through innovative and customized software.":
            "Supporting business growth through innovative and customized software.",
          "Web Development": "Web Development",
          "Building responsive, dynamic websites that enhance user engagement.":
            "Building responsive, dynamic websites that enhance user engagement.",
          "Utilizing modern web technologies for optimized speed and performance.":
            "Utilizing modern web technologies for optimized speed and performance.",
          "Designing intuitive interfaces for an exceptional user experience.":
            "Designing intuitive interfaces for an exceptional user experience.",
          "Ensuring seamless functionality across all devices and platforms.":
            "Ensuring seamless functionality across all devices and platforms.",
          "Mobile Application Development": "Mobile Application Development",
          "Developing high-performance mobile apps for both Android and iOS platforms.":
            "Developing high-performance mobile apps for both Android and iOS platforms.",
          "Crafting intuitive and engaging user interfaces for an optimal mobile experience.":
            "Crafting intuitive and engaging user interfaces for an optimal mobile experience.",
          "Ensuring compatibility and smooth functionality across a variety of devices.":
            "Ensuring compatibility and smooth functionality across a variety of devices.",
          "Integrating advanced features to enhance usability and meet business goals.":
            "Integrating advanced features to enhance usability and meet business goals.",
          "Enterprise Management Solutions": "Enterprise Management Solutions",
          "Implementing ERP and CRM systems to streamline resource management.":
            "Implementing ERP and CRM systems to streamline resource management.",
          "Enhancing communication and collaboration across teams.":
            "Enhancing communication and collaboration across teams.",
          "Optimizing workflows with automation tools for greater efficiency.":
            "Optimizing workflows with automation tools for greater efficiency.",
          "Supporting informed decision-making to improve overall business operations.":
            "Supporting informed decision-making to improve overall business operations.",
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
          "Founded in Bengaluru, India.": "Gegründet in Bengaluru, Indien.",
          "Specializing in geospatial data & analytics":
            "Spezialisiert auf Geodaten und Analysen",
          "Expertise in large-scale geospatial analytics":
            "Expertise in großflächiger Geodatenanalyse",
          "Delivered 20,000+ miles of 3D annotated maps":
            "Über 20.000 Meilen 3D-annotierter Karten geliefert",
          "Contributed to navigation, environmental monitoring, and":
            "Beigetragen zu Navigation, Umweltüberwachung und",
          "infrastructure projects": "Infrastrukturprojekten",
          "Expansion and Technological Advancements":
            "Expansion und technologische Fortschritte",
          "Used LiDAR and custom tools for terrain analysis.":
            "Verwendete LiDAR und maßgeschneiderte Werkzeuge zur Geländeanalyse.",
          "Extracted data insights for climate and disaster response.":
            "Gewonnene Datenanalysen für Klima- und Katastrophenreaktionen.",
          "Explored minerals using satellite imagery.":
            "Untersuchte Mineralien mithilfe von Satellitenbildern.",
          "Analyzed light wave data for resource management.":
            "Analysierte Lichtwellen-Daten für Ressourcenmanagement.",
          "Social Responsibility & Education Commitment.":
            "Soziale Verantwortung und Engagement für Bildung.",
          "Promoted equal gender opportunities":
            "Förderte gleiche Chancen für beide Geschlechter",
          "Focusing on rural-based graduates.":
            "Fokus auf Absolventen aus ländlichen Gebieten.",
          "Fostered diversity and inclusion within our teams.":
            "Förderte Vielfalt und Inklusion in unseren Teams.",
          "Signed MoUs with universities to update curricula.":
            "Unterzeichnete MoUs mit Universitäten zur Aktualisierung der Lehrpläne.",
          "Collab with academia on research, bridging the industry gap.":
            "Zusammenarbeit mit der Wissenschaft bei Forschung zur Überbrückung der Kluft zur Industrie.",
          "Looking Ahead": "Zukunftsausblick",
          "Advanced AI and ML for sustainability and resilience.":
            "Fortgeschrittene KI und ML für Nachhaltigkeit und Widerstandsfähigkeit.",
          "Explored spatial computing with digital twins.":
            "Erforschte räumliches Computing mit digitalen Zwillingen.",
          "Integrated physical and digital realms seamlessly.":
            "Integrierte physische und digitale Bereiche nahtlos.",
          "Redefined industry standards with cutting-edge geospatial intelligence for climate adaptation.":
            "Neudefinition von Industriestandards mit modernster Geodatenintelligenz für Klimaanpassung.",

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
          "Used LiDAR and custom tools for terrain analysis.":
            "LiDAR und maßgeschneiderte Werkzeuge für die Geländeanalyse verwendet.",

          //Footer
          "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to business, organizations, and government.":
            "Ein innovativer Softwareanbieter, Systemintegrator und Technologieanbieter, der gegründet wurde, um verwertbare Erkenntnisse, fortschrittliche intelligente Lösungen und Beratungsdienstleistungen für Unternehmen, Organisationen und die Regierung bereitzustellen.",
          "Q-gate Infotech Private Limited": "Q-Gate Infotech GmbH",
          "#11, Abhaya Heights, JP Nagar, Bengaluru,": "München",
          "India - 560078": "Deutschland - 80331",
          "+91 93428 55394": "+49 176 99519797",
          "Opening Hours: 09:00 - 18:00": "Öffnungszeiten: 09:00 - 18:00",
          "contact.in@q-gate.co": "contact.de@q-gate.co",
          AGRICULTURE: "LANDWIRTSCHAFT",

          //Career

          "Join with us": "Kommen Sie zu uns",
          "Why choose your brilliant": "Warum sollten Sie Ihr brillantes",
          career: "Karriere",
          "with us?": "mit uns?",
          "Friendly Environment": "Freundliche Arbeitsumgebung",
          "A friendly work culture fosters collaboration, open communication, and mutual respect among team members. It encourages positive relationships, promotes teamwork, and creates a supportive atmosphere where everyone feels valued and motivated to contribute.":
            "Eine freundliche Arbeitskultur fördert Zusammenarbeit, offene Kommunikation und gegenseitigen Respekt unter den Teammitgliedern. Sie fördert positive Beziehungen, stärkt den Teamgeist und schafft eine unterstützende Atmosphäre, in der sich jeder wertgeschätzt fühlt und motiviert ist, beizutragen.",
          "Team Work": "Teamarbeit",
          "The company emphasizes teamwork, fostering collaboration and communication among employees to achieve common goals. This approach enhances skills, strengthens relationships, and drives innovation and creativity, leading to successful project outcomes and a thriving work environment.":
            "Das Unternehmen legt großen Wert auf Teamarbeit, fördert Zusammenarbeit und Kommunikation unter den Mitarbeitern, um gemeinsame Ziele zu erreichen. Dieser Ansatz verbessert Fähigkeiten, stärkt Beziehungen und fördert Innovation und Kreativität, was zu erfolgreichen Projektergebnissen und einer florierenden Arbeitsumgebung führt.",
          "Health Insurance": "Krankenversicherung",
          "The company offers health insurance that includes coverage for medical, dental, and vision care, as well as wellness programs. These benefits provide employees with comprehensive resources for themselves and their families.":
            "Das Unternehmen bietet eine Krankenversicherung, die medizinische, zahnärztliche und Augenpflege sowie Wellnessprogramme abdeckt. Diese Leistungen bieten den Mitarbeitern umfassende Ressourcen für sich selbst und ihre Familien.",
          "Provident Fund": "Vorsorgefonds",
          "The company provides a provident fund, allowing employees to save for their future through regular contributions. The fund helps to ensure financial security for employees in the long term, promoting long-term savings and stability.":
            "Das Unternehmen bietet einen Vorsorgefonds, der es den Mitarbeitern ermöglicht, durch regelmäßige Beiträge für ihre Zukunft zu sparen. Der Fonds trägt zur langfristigen finanziellen Sicherheit der Mitarbeiter bei und fördert langfristige Ersparnisse und Stabilität.",
          Location: "Standort",
          Type: "Typ",
          "Experience Level": "Erfahrungsstufe",
          Responsibilities: "Verantwortlichkeiten",
          Requirements: "Anforderungen",
          "How to Apply": "Bewerbungshinweise",
          "Send your resume and portfolio to ":
            "Senden Sie Ihren Lebenslauf und Ihr Portfolio an ",
          Job: "Stellenangebot",
          Opportunities: "Möglichkeiten",

          //Service - Geospatial Services
          "Unlocking the Power of Spatial Data for Informed Decision-Making":
            "Die Macht räumlicher Daten für fundierte Entscheidungsfindung freisetzen",
          "At Q-Gate Infotech, our Geospatial Processing services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency.":
            "Bei Q-Gate Infotech verwandeln unsere geospatialen Verarbeitungsdienste komplexe räumliche Daten in umsetzbare Erkenntnisse, die die strategische Planung und operative Effizienz vorantreiben.",
          "Utilizing advanced technologies and methodologies, we specialize in":
            "Wir nutzen fortschrittliche Technologien und Methoden und spezialisieren uns auf",
          "Image Data Processing": "Bilddatenverarbeitung",
          "Enhancing high-res images from satellites, drones, and aerial platforms.":
            "Verbesserung von hochauflösenden Bildern von Satelliten, Drohnen und Luftplattformen.",
          "Extracting key data for agriculture, urban planning, and environmental management.":
            "Extrahierung wichtiger Daten für die Landwirtschaft, Stadtplanung und Umweltmanagement.",
          "Providing actionable insights for better decision-making.":
            "Bereitstellung umsetzbarer Erkenntnisse für bessere Entscheidungsfindung.",
          "Supporting sustainable practices and efficient resource management.":
            "Unterstützung nachhaltiger Praktiken und effizienten Ressourcenmanagements.",
          "Hydro Flattening": "Hydro-Glättung",
          "Processing LiDAR data for accurate hydro-flattened DEMs.":
            "Verarbeitung von LiDAR-Daten für präzise hydro-gewölbte DEMs.",
          "Enhancing hydrological modeling with hydro-flattened surfaces.":
            "Verbesserung der hydrologischen Modellierung mit hydro-gewölbten Oberflächen.",
          "Supporting flood risk assessment through hydro-flattened DEMs.":
            "Unterstützung der Überschwemmungsrisikobewertung durch hydro-gewölbte DEMs.",
          "Improving water resource management with precise elevation models.":
            "Verbesserung des Wassermanagements mit präzisen Höhenmodellen.",
          "Vegetation Analysis": "Vegetationsanalyse",
          "Assessing vegetation health using multispectral and hyperspectral imagery.":
            "Bewertung der Vegetationsgesundheit mit multispektralen und hyperspektralen Bildern.",
          "Estimating biomass for forestry and agricultural applications.":
            "Schätzung der Biomasse für Forst- und Agraranwendungen.",
          "Classifying land cover for ecological and environmental studies.":
            "Klassifizierung der Landbedeckung für ökologische und umweltbezogene Studien.",
          "Supporting forestry management, agriculture, and ecological research.":
            "Unterstützung des Forstmanagements, der Landwirtschaft und der ökologischen Forschung.",
          "Satellite Data Analysis": "Satellitendatenanalyse",
          "Monitoring environmental changes through satellite imagery.":
            "Überwachung von Umweltveränderungen durch Satellitenbilder.",
          "Assessing natural resources with satellite data analysis.":
            "Bewertung von Naturressourcen mit Satellitendatenanalyse.",
          "Supporting disaster management with real-time data.":
            "Unterstützung des Katastrophenmanagements mit Echtzeitdaten.",
          "Enabling timely decision-making through data interpretation.":
            "Ermöglichung einer zeitgerechten Entscheidungsfindung durch Dateninterpretation.",

          //Service - Software Development
          "Software Development": "Softwareentwicklung",
          "Empowering Your Business with Tailored Software Solutions":
            "Stärken Sie Ihr Unternehmen mit maßgeschneiderten Softwarelösungen",
          "At Q-Gate Infotech, we specialize in creating software solutions that align with your business goals. Our expertise spans across:":
            "Bei Q-Gate Infotech spezialisieren wir uns auf die Erstellung von Softwarelösungen, die mit Ihren Geschäftszielen in Einklang stehen. Unsere Expertise erstreckt sich über:",
          "Custom Software Development": "Maßgeschneiderte Softwareentwicklung",
          "Developing software solutions tailored to unique business needs across industries.":
            "Entwicklung von Softwarelösungen, die auf die einzigartigen geschäftlichen Anforderungen verschiedener Branchen zugeschnitten sind.",
          "Leveraging the latest technologies for robust and scalable applications.":
            "Nutzung der neuesten Technologien für robuste und skalierbare Anwendungen.",
          "Creating user-friendly designs that enhance operational efficiency.":
            "Erstellung benutzerfreundlicher Designs, die die betriebliche Effizienz steigern.",
          "Supporting business growth through innovative and customized software.":
            "Unterstützung des Unternehmenswachstums durch innovative und maßgeschneiderte Software.",
          "Web Development": "Webentwicklung",
          "Building responsive, dynamic websites that enhance user engagement.":
            "Erstellung von responsiven, dynamischen Websites, die das Benutzerengagement steigern.",
          "Utilizing modern web technologies for optimized speed and performance.":
            "Nutzung moderner Webtechnologien für optimierte Geschwindigkeit und Leistung.",
          "Designing intuitive interfaces for an exceptional user experience.":
            "Gestaltung intuitiver Benutzeroberflächen für ein außergewöhnliches Benutzererlebnis.",
          "Ensuring seamless functionality across all devices and platforms.":
            "Gewährleistung nahtloser Funktionalität auf allen Geräten und Plattformen.",
          "Mobile Application Development":
            "Entwicklung von mobilen Anwendungen",
          "Developing high-performance mobile apps for both Android and iOS platforms.":
            "Entwicklung leistungsstarker mobiler Apps für Android- und iOS-Plattformen.",
          "Crafting intuitive and engaging user interfaces for an optimal mobile experience.":
            "Gestaltung intuitiver und ansprechender Benutzeroberflächen für ein optimales mobiles Erlebnis.",
          "Ensuring compatibility and smooth functionality across a variety of devices.":
            "Gewährleistung der Kompatibilität und reibungslosen Funktionalität auf verschiedenen Geräten.",
          "Integrating advanced features to enhance usability and meet business goals.":
            "Integration fortschrittlicher Funktionen zur Verbesserung der Benutzerfreundlichkeit und Erreichung von Geschäftszielen.",
          "Enterprise Management Solutions": "Enterprise Management-Lösungen",
          "Implementing ERP and CRM systems to streamline resource management.":
            "Implementierung von ERP- und CRM-Systemen zur Optimierung des Ressourcenmanagements.",
          "Enhancing communication and collaboration across teams.":
            "Förderung der Kommunikation und Zusammenarbeit zwischen den Teams.",
          "Optimizing workflows with automation tools for greater efficiency.":
            "Optimierung von Arbeitsabläufen mit Automatisierungstools für mehr Effizienz.",
          "Supporting informed decision-making to improve overall business operations.":
            "Unterstützung fundierter Entscheidungsfindung zur Verbesserung der gesamten Geschäftsabläufe.",
        },
      },
    },
    fallbackLng: "EN", // Fallback language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
