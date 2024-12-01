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
          Product: "Product",
          Industries: "Industries",
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
          "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to businesses, organizations, and government.":
            "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to businesses, organizations, and government.",
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
          "Q-Gate Infotech Private Limited / careers":
            "Q-Gate Infotech Private Limited / careers",

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
          "Q-Gate Infotech Private Limited / Geospatial Services":
            "Q-Gate Infotech Private Limited / Geospatial Services",

          //Service - Software Development
          "Q-Gate Infotech Private Limited / Software Development":
            "Q-Gate Infotech Private Limited / Software Development",
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

          //Service - Data Analytics
          "Data Analytics": "Data Analytics",
          "Q-Gate Infotech Private Limited / Data Analytics":
            "Q-Gate Infotech Private Limited / Data Analytics",
          "Unlocking the Power of Spatial Data for Informed Decision-Making":
            "Unlocking the Power of Spatial Data for Informed Decision-Making",
          "At Q-Gate Infotech, our Data Analytics services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency. Utilizing advanced technologies and methodologies, we specialize in:":
            "At Q-Gate Infotech, our Data Analytics services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency. Utilizing advanced technologies and methodologies, we specialize in:",
          "Advanced Imagery Analytics": "Advanced Imagery Analytics",
          "Extracting meaningful patterns from high-resolution satellite and aerial imagery.":
            "Extracting meaningful patterns from high-resolution satellite and aerial imagery.",
          "Enabling informed decision-making in agriculture, forestry, mining, and urban planning.":
            "Enabling informed decision-making in agriculture, forestry, mining, and urban planning.",
          "Providing real-time data insights for accurate trend analysis.":
            "Providing real-time data insights for accurate trend analysis.",
          "Supporting industry-specific insights to drive efficiency and innovation.":
            "Supporting industry-specific insights to drive efficiency and innovation.",
          "Spectral Analysis": "Spectral Analysis",
          "Identifying material compositions through multispectral and hyperspectral imaging.":
            "Identifying material compositions through multispectral and hyperspectral imaging.",
          "Assessing vegetation health for environmental monitoring and precision agriculture.":
            "Assessing vegetation health for environmental monitoring and precision agriculture.",
          "Locating mineral deposits critical to resource exploration.":
            "Locating mineral deposits critical to resource exploration.",
          "Supporting mineral exploration and environmental applications.":
            "Supporting mineral exploration and environmental applications.",
          "Computer Vision Applications": "Computer Vision Applications",
          "Developing models for object detection and classification.":
            "Developing models for object detection and classification.",
          "Enabling automated surveillance and monitoring systems.":
            "Enabling automated surveillance and monitoring systems.",
          "Supporting automation across industries through advanced vision tech.":
            "Supporting automation across industries through advanced vision tech.",
          "Tracking and analyzing objects in real time for various applications.":
            "Tracking and analyzing objects in real time for various applications.",

          //Service - Cloud-Based AI/ML Solutions
          "Cloud-Based AI/ML Solutions": "Cloud-Based AI/ML Solutions",
          "Q-Gate Infotech Private Limited / Cloud-Based AI/ML Solutions":
            "Q-Gate Infotech Private Limited / Cloud-Based AI/ML Solutions",
          "Driving Innovation with Scalable Cloud and Artificial Intelligence Technologies":
            "Driving Innovation with Scalable Cloud and Artificial Intelligence Technologies",
          "At Q-Gate Infotech, we leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward. Our Cloud-Based AI/ML Solutions offer:":
            "At Q-Gate Infotech, we leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward. Our Cloud-Based AI/ML Solutions offer:",
          "Development of Intelligent Applications":
            "Development of Intelligent Applications",
          "Enables predictive analytics for informed decision-making.":
            "Enables predictive analytics for informed decision-making.",
          "Streamlines tasks through automation to boost efficiency.":
            "Streamlines tasks through automation to boost efficiency.",
          "Supports real-time decision-making with rapid response to data.":
            "Supports real-time decision-making with rapid response to data.",
          "Continuously evolves through adaptive learning to provide insights.":
            "Continuously evolves through adaptive learning to provide insights.",
          "Integration with Geospatial Data":
            "Integration with Geospatial Data",
          "Integrates AI/ML with geospatial data for enhanced insights.":
            "Integrates AI/ML with geospatial data for enhanced insights.",
          "Enables pattern recognition in complex spatial datasets.":
            "Enables pattern recognition in complex spatial datasets.",
          "Supports anomaly detection for identifying unusual patterns.":
            "Supports anomaly detection for identifying unusual patterns.",
          "Enhances predictive modeling for urban planning and resource management.":
            "Enhances predictive modeling for urban planning and resource management.",
          "Scalable Cloud Infrastructure": "Scalable Cloud Infrastructure",
          "Provides accessibility from anywhere for seamless operations.":
            "Provides accessibility from anywhere for seamless operations.",
          "Supports efficient data processing and storage for large datasets.":
            "Supports efficient data processing and storage for large datasets.",
          "Reduces need for on-premise infrastructure investment.":
            "Reduces need for on-premise infrastructure investment.",
          "Customized AI Models": "Customized AI Models",
          "Develops custom ML models tailored to specific business needs.":
            "Develops custom ML models tailored to specific business needs.",
          "Specializes in language processing, computer vision, and predictive analytics.":
            "Specializes in language processing, computer vision, and predictive analytics.",
          "Builds models that provide actionable insights for decision-making.":
            "Builds models that provide actionable insights for decision-making.",
          "Delivers solutions that adapt to evolving business challenges.":
            "Delivers solutions that adapt to evolving business challenges.",

          //Service - Professional Training
          "Q-Gate Infotech / Professional Training":"Q-Gate Infotech / Professional Training",
          "Professional Training": "Professional Training",
          "Q-Gate Infotech / Professional Training":
            "Q-Gate Infotech / Professional Training",
          "At Q-Gate Infotech, we believe that investing in people is key to driving innovation and achieving excellence.":
            "At Q-Gate Infotech, we believe that investing in people is key to driving innovation and achieving excellence.",
          "Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology. Our initiatives include:":
            "Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology. Our initiatives include:",
          "On-the-Job Training Programs": "On-the-Job Training Programs",
          "Hands-on training with real projects.":
            "Hands-on training with real projects.",
          "Mentorship from experienced professionals.":
            "Mentorship from experienced professionals.",
          "Accelerates learning through practical experience.":
            "Accelerates learning through practical experience.",
          "Prepares individuals for industry demands.":
            "Prepares individuals for industry demands.",
          "Internships with Stipends": "Internships with Stipends",
          "Paid internships for financial support.":
            "Paid internships for financial support.",
          "Develop essential industry exposure.":
            "Develop essential industry exposure.",
          "Contribute meaningfully to real projects.":
            "Contribute meaningfully to real projects.",
          "Gain insights into professional workflows.":
            "Gain insights into professional workflows.",
          "Collaborations with Educational Institutions":
            "Collaborations with Educational Institutions",
          "Enhance curricula with industry insights.":
            "Enhance curricula with industry insights.",
          "Bridge the gap between academia and industry.":
            "Bridge the gap between academia and industry.",
          "Sponsor innovative research projects.":
            "Sponsor innovative research projects.",
          "Encourage student engagement with technology.":
            "Encourage student engagement with technology.",
          "Empowering Rural Development": "Empowering Rural Development",
          "Focus on recruiting talent from rural areas.":
            "Focus on recruiting talent from rural areas.",
          "Provide equal opportunities for local communities.":
            "Provide equal opportunities for local communities.",
          "Stimulate economic growth in underserved regions.":
            "Stimulate economic growth in underserved regions.",
          "Contribute to social responsibility and community upliftment.":
            "Contribute to social responsibility and community upliftment.",

          //Service - Talent Solutions

          "Talent Solutions": "Talent Solutions",
          "Q-Gate Infotech / Talent Solutions":
            "Q-Gate Infotech / Talent Solutions",
          "At Q-Gate Infotech, we recognize that having the right talent is crucial for organizational success.":
            "At Q-Gate Infotech, we recognize that having the right talent is crucial for organizational success.",
          "Our Talent Solutions service provides access to a diverse pool of highly skilled professionals, enabling your business to meet its objectives effectively. Our offerings include:":
            "Our Talent Solutions service provides access to a diverse pool of highly skilled professionals, enabling your business to meet its objectives effectively. Our offerings include:",
          "Staff Augmentation": "Staff Augmentation",
          "Qualified experts to supplement your teams.":
            "Qualified experts to supplement your teams.",
          "Scalable resources based on project demands.":
            "Scalable resources based on project demands.",
          "Seamless integration with your existing workforce.":
            "Seamless integration with your existing workforce.",
          "Expertise in geospatial technologies, software, and analytics.":
            "Expertise in geospatial technologies, software, and analytics.",
          "Dedicated Project Teams": "Dedicated Project Teams",
          "Exclusive teams focused on your assignments.":
            "Exclusive teams focused on your assignments.",
          "Ensures alignment with organizational goals.":
            "Ensures alignment with organizational goals.",
          "Consistent collaboration with your internal teams.":
            "Consistent collaboration with your internal teams.",
          "Promotes organizational culture fit.":
            "Promotes organizational culture fit.",
          "Flexible Engagement Models": "Flexible Engagement Models",
          "Tailored engagement options based on business needs.":
            "Tailored engagement options based on business needs.",
          "Short-term contracts for quick solutions.":
            "Short-term contracts for quick solutions.",
          "Long-term placements for sustained support.":
            "Long-term placements for sustained support.",
          "Project-based arrangements for specific goals.":
            "Project-based arrangements for specific goals.",
          "Quality Assurance and Compliance":
            "Quality Assurance and Compliance",
          "Rigorous vetting of all professionals.":
            "Rigorous vetting of all professionals.",
          "Ensure high standards of technical proficiency.":
            "Ensure high standards of technical proficiency.",
          "Handle all HR management and compliance aspects.":
            "Handle all HR management and compliance aspects.",
          "Focus on your core business while we manage the rest.":
            "Focus on your core business while we manage the rest.",

          //Service - Engineering Solution

          "Engineering Solutions": "Engineering Solutions",
          "Q-Gate Infotech Private Limited / Engineering Solutions":
            "Q-Gate Infotech Private Limited / Engineering Solutions",
          "Innovative Engineering for Sustainable Development":
            "Innovative Engineering for Sustainable Development",
          "Q-Gate Infotech's Engineering Solutions merge cutting-edge technology with engineering expertise to support the design, development and optimization of infrastructure and industrial projects. Our services aim to enhance efficiency, sustainability and innovation in engineering practices. We offer:":
            "Q-Gate Infotech's Engineering Solutions merge cutting-edge technology with engineering expertise to support the design, development and optimization of infrastructure and industrial projects. Our services aim to enhance efficiency, sustainability and innovation in engineering practices. We offer:",
          "Building Information Modeling (BIM)":
            "Building Information Modeling (BIM)",
          "Developing detailed and intelligent 3D models of buildings and infrastructure.":
            "Developing detailed and intelligent 3D models of buildings and infrastructure.",
          "Enabling effective visualization, simulation, and project management.":
            "Enabling effective visualization, simulation, and project management.",
          "Facilitating collaboration, reducing errors, and streamlining delivery.":
            "Facilitating collaboration, reducing errors, and streamlining delivery.",
          "Reverse Engineering for Existing Structures":
            "Reverse Engineering for Existing Structures",
          "Utilizing advanced scanning and modeling for structural analysis.":
            "Utilizing advanced scanning and modeling for structural analysis.",
          "Assisting renovation planning, analysis, and maintenance scheduling.":
            "Assisting renovation planning, analysis, and maintenance scheduling.",
          "Ensuring longevity and safety of infrastructure assets.":
            "Ensuring longevity and safety of infrastructure assets.",
          "Engineering Consultancy": "Engineering Consultancy",
          "Providing expert consultancy across various engineering projects.":
            "Providing expert consultancy across various engineering projects.",
          "Conducting feasibility studies, environmental assessments, and optimization.":
            "Conducting feasibility studies, environmental assessments, and optimization.",
          "Enhancing project outcomes with multidisciplinary expertise.":
            "Enhancing project outcomes with multidisciplinary expertise.",

          //Service - Content Annotation

          "Content Annotation": "Content Annotation",
          "Q-Gate Infotech / Content Annotation":
            "Q-Gate Infotech / Content Annotation",
          "At Q-Gate Infotech, we understand that precise data annotation is the foundation of effective AI and machine learning models.":
            "At Q-Gate Infotech, we understand that precise data annotation is the foundation of effective AI and machine learning models.",
          "Our Content Annotation services provide meticulous labeling of diverse data types, enabling your AI applications to perform with greater accuracy and efficiency. Our offerings include:":
            "Our Content Annotation services provide meticulous labeling of diverse data types, enabling your AI applications to perform with greater accuracy and efficiency. Our offerings include:",
          "Image, Video, and Text Annotation":
            "Image, Video, and Text Annotation",
          "Annotating images, videos, and text for AI model training.":
            "Annotating images, videos, and text for AI model training.",
          "Supports computer vision and natural language processing applications.":
            "Supports computer vision and natural language processing applications.",
          "Ensures precise data labeling for reliable model performance.":
            "Ensures precise data labeling for reliable model performance.",
          "Facilitates accurate object recognition and text understanding.":
            "Facilitates accurate object recognition and text understanding.",
          "Point Cloud Annotation": "Point Cloud Annotation",
          "Annotating 3D point cloud data for object recognition.":
            "Annotating 3D point cloud data for object recognition.",
          "Essential for autonomous vehicles and robotics applications.":
            "Essential for autonomous vehicles and robotics applications.",
          "Supports scene understanding and environmental modeling.":
            "Supports scene understanding and environmental modeling.",
          "Leverages LiDAR technology for detailed spatial analysis.":
            "Leverages LiDAR technology for detailed spatial analysis.",
          "Object Detection and Semantic Segmentation":
            "Object Detection and Semantic Segmentation",
          "Detailed annotations for object detection tasks.":
            "Detailed annotations for object detection tasks.",
          "Pixel-level semantic segmentation for precise visual data interpretation.":
            "Pixel-level semantic segmentation for precise visual data interpretation.",
          "Enables accurate understanding of complex visual data.":
            "Enables accurate understanding of complex visual data.",
          "Supports advanced computer vision applications.":
            "Supports advanced computer vision applications.",

          // Industries - Agriculture
          Agriculture: "Agriculture",
          "At Q-Gate Infotech, we empower the agriculture and forestry sectors by harnessing cutting-edge geospatial technologies and data analytics to promote sustainable practices and optimize productivity. Our comprehensive solutions enable farmers, agribusinesses, and forestry managers to make informed decisions through precise, real-time insights.":
            "At Q-Gate Infotech, we empower the agriculture and forestry sectors by harnessing cutting-edge geospatial technologies and data analytics to promote sustainable practices and optimize productivity. Our comprehensive solutions enable farmers, agribusinesses, and forestry managers to make informed decisions through precise, real-time insights.",
          "Learn More": "Learn More",
          "Our Services Include": "Our Services Include",
          "GIS & Remote Sensing": "GIS & Remote Sensing",
          "Utilize spatial data to monitor agricultural lands and forest ecosystems, enabling precise mapping and analysis.":
            "Utilize spatial data to monitor agricultural lands and forest ecosystems, enabling precise mapping and analysis.",
          "Image Processing Analysis": "Image Processing Analysis",
          "Interpret high-resolution satellite and aerial imagery to assess crop health, soil conditions, and detect pests or diseases early.":
            "Interpret high-resolution satellite and aerial imagery to assess crop health, soil conditions, and detect pests or diseases early.",
          "Vegetation Analysis": "Vegetation Analysis",
          "Conduct detailed assessments of vegetation cover, growth patterns, biomass estimation, and species classification to support sustainable forest management and conservation efforts.":
            "Conduct detailed assessments of vegetation cover, growth patterns, biomass estimation, and species classification to support sustainable forest management and conservation efforts.",
          Annotations: "Annotations",
          "Provide precise labeling of imagery to train AI models for predictive analytics, facilitating precision agriculture and efficient resource management.":
            "Provide precise labeling of imagery to train AI models for predictive analytics, facilitating precision agriculture and efficient resource management.",
          "LiDAR Measurement Analysis": "LiDAR Measurement Analysis",
          "Use LiDAR technology to generate accurate 3D models of terrain and vegetation structures, assisting in land assessment, irrigation planning, and forest inventory.":
            "Use LiDAR technology to generate accurate 3D models of terrain and vegetation structures, assisting in land assessment, irrigation planning, and forest inventory.",
          Benefit: "Benefit",
          "Enhanced Crop Yields": "Enhanced Crop Yields",
          "Optimize planting schedules, irrigation, and fertilization through precise data analysis.":
            "Optimize planting schedules, irrigation, and fertilization through precise data analysis.",
          "Resource Efficiency": "Resource Efficiency",
          "Reduce waste and improve resource utilization by targeting interventions where they are most needed.":
            "Reduce waste and improve resource utilization by targeting interventions where they are most needed.",
          Sustainability: "Sustainability",
          "Promote environmentally friendly practices by effectively monitoring and managing land use.":
            "Promote environmentally friendly practices by effectively monitoring and managing land use.",
          "Risk Mitigation": "Risk Mitigation",
          "Identify potential threats such as pest infestations or environmental stressors early to prevent losses.":
            "Identify potential threats such as pest infestations or environmental stressors early to prevent losses.",

          // Industries - Education

          Education: "Education",
          "Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs. We aim to build capacity in cutting-edge technologies, nurture talent, and bridge the gap between academia and industry.":
            "Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs. We aim to build capacity in cutting-edge technologies, nurture talent, and bridge the gap between academia and industry.",
          "Learn More": "Learn More",
          "Our Services Include": "Our Services Include",
          "Professional Training Programs": "Professional Training Programs",
          "Offer courses in GIS, remote sensing, AI/ML, software development, data analytics, and engineering, tailored to meet industry demands.":
            "Offer courses in GIS, remote sensing, AI/ML, software development, data analytics, and engineering, tailored to meet industry demands.",
          "On-the-Job Training and Internships":
            "On-the-Job Training and Internships",
          "Provide hands-on experience through internships without stipends, allowing participants to apply their learning to real-world projects.":
            "Provide hands-on experience through internships without stipends, allowing participants to apply their learning to real-world projects.",
          "Collaborations with Educational Institutions":
            "Collaborations with Educational Institutions",
          "Partner with universities and colleges through MoUs to update curricula, support research initiatives, and facilitate knowledge exchange.":
            "Partner with universities and colleges through MoUs to update curricula, support research initiatives, and facilitate knowledge exchange.",
          "Project Sponsorships and Scholarships":
            "Project Sponsorships and Scholarships",
          "Support innovative projects, research activities, and provide financial assistance to promising students.":
            "Support innovative projects, research activities, and provide financial assistance to promising students.",
          "Empowering Rural Development": "Empowering Rural Development",
          "Focus on recruiting and training individuals from rural areas, promoting equal opportunities and contributing to community upliftment.":
            "Focus on recruiting and training individuals from rural areas, promoting equal opportunities and contributing to community upliftment.",
          Benefit: "Benefit",
          "Skill Enhancement": "Skill Enhancement",
          "Equip individuals with the latest technological skills required in today's job market.":
            "Equip individuals with the latest technological skills required in today's job market.",
          "Career Development": "Career Development",
          "Provide pathways for fresh graduates and professionals to build successful careers in technology.":
            "Provide pathways for fresh graduates and professionals to build successful careers in technology.",
          "Industry-Academia Collaboration": "Industry-Academia Collaboration",
          "Strengthen connections between educational institutions and industry to align education with practical needs.":
            "Strengthen connections between educational institutions and industry to align education with practical needs.",
          "Social Impact": "Social Impact",
          "Contribute to societal development by empowering individuals and fostering innovation.":
            "Contribute to societal development by empowering individuals and fostering innovation.",

          // Industries - Energy & Utilities

          "Energy and Utilities": "Energy and Utilities",
          "At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability, and drive technological advancement. Our services enable energy providers, utility companies, and government agencies to optimize operations and meet the growing demand for clean, reliable energy.":
            "At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability, and drive technological advancement. Our services enable energy providers, utility companies, and government agencies to optimize operations and meet the growing demand for clean, reliable energy.",
          "Learn More": "Learn More",
          "Our Services Include": "Our Services Include",
          "GIS & Remote Sensing": "GIS & Remote Sensing",
          "Analyze spatial data for resource exploration, site selection, and infrastructure planning, ensuring optimal placement of energy facilities such as wind farms, solar arrays, and power plants.":
            "Analyze spatial data for resource exploration, site selection, and infrastructure planning, ensuring optimal placement of energy facilities such as wind farms, solar arrays, and power plants.",
          "Image Processing": "Image Processing",
          "Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.":
            "Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.",
          Annotations: "Annotations",
          "Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.":
            "Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.",
          "LiDAR Data Processing": "LiDAR Data Processing",
          "Generate accurate 3D models of terrain and infrastructure for designing transmission lines, pipelines, and utility networks.":
            "Generate accurate 3D models of terrain and infrastructure for designing transmission lines, pipelines, and utility networks.",
          "Engineering Solutions": "Engineering Solutions",
          "Offer expertise in electrical and civil engineering to support grid modernization, renewable energy integration, and infrastructure upgrades.":
            "Offer expertise in electrical and civil engineering to support grid modernization, renewable energy integration, and infrastructure upgrades.",
          Benefit: "Benefit",
          "Operational Efficiency": "Operational Efficiency",
          "Optimize energy production and distribution through precise data analysis and modeling.":
            "Optimize energy production and distribution through precise data analysis and modeling.",
          Sustainability: "Sustainability",
          "Facilitate the transition to renewable energy sources by identifying optimal sites and integrating clean energy into existing grids.":
            "Facilitate the transition to renewable energy sources by identifying optimal sites and integrating clean energy into existing grids.",
          Reliability: "Reliability",
          "Enhance infrastructure resilience and reduce downtime through predictive maintenance and real-time monitoring.":
            "Enhance infrastructure resilience and reduce downtime through predictive maintenance and real-time monitoring.",
          "Regulatory Compliance": "Regulatory Compliance",
          "Ensure adherence to environmental regulations and safety standards through thorough analysis and reporting.":
            "Ensure adherence to environmental regulations and safety standards through thorough analysis and reporting.",

          // Industries - Infrastructure Development
          "Infrastructure Development": "Infrastructure Development",
          "At Q-Gate Infotech, we drive infrastructure development by providing comprehensive geospatial and engineering solutions that enable planners, architects, and developers to design and construct smarter, more sustainable infrastructure.":
            "At Q-Gate Infotech, we drive infrastructure development by providing comprehensive geospatial and engineering solutions that enable planners, architects, and developers to design and construct smarter, more sustainable infrastructure.",
          "Learn More": "Learn More",
          "Our Services Include": "Our Services Include",
          "GIS & Remote Sensing": "GIS & Remote Sensing",
          "Collect and analyze spatial data for site selection, feasibility studies, and impact assessments, ensuring projects are grounded in accurate geographic information.":
            "Collect and analyze spatial data for site selection, feasibility studies, and impact assessments, ensuring projects are grounded in accurate geographic information.",
          "Image Processing Analysis": "Image Processing Analysis",
          "Interpret high-resolution imagery to monitor construction progress, assess environmental impact, and detect changes in land use.":
            "Interpret high-resolution imagery to monitor construction progress, assess environmental impact, and detect changes in land use.",
          Annotations: "Annotations",
          "Provide detailed data annotation to train AI models for automated feature extraction, aiding in urban planning and infrastructure maintenance.":
            "Provide detailed data annotation to train AI models for automated feature extraction, aiding in urban planning and infrastructure maintenance.",
          "Engineering Solutions": "Engineering Solutions",
          "Deliver expert engineering services, including structural analysis, design optimization, and Building Information Modeling (BIM), to streamline project workflows.":
            "Deliver expert engineering services, including structural analysis, design optimization, and Building Information Modeling (BIM), to streamline project workflows.",
          "LiDAR Measurement Analysis": "LiDAR Measurement Analysis",
          "Generate precise 3D models and digital elevation models (DEMs) for terrain analysis, aiding in the design of roads, bridges, and other infrastructure components.":
            "Generate precise 3D models and digital elevation models (DEMs) for terrain analysis, aiding in the design of roads, bridges, and other infrastructure components.",
          Benefit: "Benefit",
          "Enhanced Planning": "Enhanced Planning",
          "Make informed decisions with accurate spatial data, reducing risks and unforeseen challenges.":
            "Make informed decisions with accurate spatial data, reducing risks and unforeseen challenges.",
          "Cost Efficiency": "Cost Efficiency",
          Sustainability: "Sustainability",
          "Incorporate environmental considerations into infrastructure projects to minimize ecological impact and promote long-term viability.":
            "Incorporate environmental considerations into infrastructure projects to minimize ecological impact and promote long-term viability.",
          "Regulatory Compliance": "Regulatory Compliance",
          "Ensure adherence to zoning laws, environmental regulations, and building codes through detailed analysis and documentation.":
            "Ensure adherence to zoning laws, environmental regulations, and building codes through detailed analysis and documentation.",

          // Industries - Marine & Water Resource Management

          "Marine & Water Resource Management":
            "Marine & Water Resource Management",
          "Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments.":
            "Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments.",
          "Learn More": "Learn More",
          "Our Services Include": "Our Services Include",
          "GIS & Remote Sensing": "GIS & Remote Sensing",
          "Leverage spatial data to monitor marine ecosystems, coastal zones, and freshwater bodies for environmental changes and resource assessment.":
            "Leverage spatial data to monitor marine ecosystems, coastal zones, and freshwater bodies for environmental changes and resource assessment.",
          "Sea & Water Bed Mapping": "Sea & Water Bed Mapping",
          "Generate detailed bathymetric maps of seabeds and riverbeds using sonar and LiDAR technologies for navigation safety, resource exploration, and habitat mapping.":
            "Generate detailed bathymetric maps of seabeds and riverbeds using sonar and LiDAR technologies for navigation safety, resource exploration, and habitat mapping.",
          "Hydro Flattening": "Hydro Flattening",
          "Apply hydro-flattening techniques to LiDAR data to accurately represent water surfaces in digital elevation models, essential for flood modeling and hydrological studies.":
            "Apply hydro-flattening techniques to LiDAR data to accurately represent water surfaces in digital elevation models, essential for flood modeling and hydrological studies.",
          "Engineering Solutions": "Engineering Solutions",
          "Offer expertise in coastal infrastructure development, erosion control, and shoreline management to protect against sea-level rise and extreme weather events.":
            "Offer expertise in coastal infrastructure development, erosion control, and shoreline management to protect against sea-level rise and extreme weather events.",
          "LiDAR Measurement Analysis": "LiDAR Measurement Analysis",
          "Process LiDAR data to create high-resolution 3D models of coastal and underwater terrains, supporting dredging operations, port development, and environmental monitoring.":
            "Process LiDAR data to create high-resolution 3D models of coastal and underwater terrains, supporting dredging operations, port development, and environmental monitoring.",
          Benefit: "Benefit",
          "Resource Optimization": "Resource Optimization",
          "Manage fisheries and aquatic resources sustainably by understanding population dynamics and habitat conditions.":
            "Manage fisheries and aquatic resources sustainably by understanding population dynamics and habitat conditions.",
          "Environmental Protection": "Environmental Protection",
          "Monitor water quality, detect pollution sources, and assess the impact of human activities on marine ecosystems.":
            "Monitor water quality, detect pollution sources, and assess the impact of human activities on marine ecosystems.",
          "Risk Management": "Risk Management",
          "Enhance disaster preparedness by modeling storm surges, flooding, and coastal erosion scenarios.":
            "Enhance disaster preparedness by modeling storm surges, flooding, and coastal erosion scenarios.",
          "Infrastructure Development": "Infrastructure Development",
          "Support the planning and maintenance of maritime infrastructure such as ports, harbors, and offshore installations.":
            "Support the planning and maintenance of maritime infrastructure such as ports, harbors, and offshore installations.",

          // Industries - Mining & Mineral Exploration

          "Mining & Mineral Exploration": "Mining & Mineral Exploration",
          "Q-Gate Infotech provides cutting-edge geospatial and data analytics solutions to the mining and mineral exploration industry, enabling companies to discover resources efficiently while minimizing environmental impact. Our expertise supports exploration, planning, and operational optimization.":
            "Q-Gate Infotech provides cutting-edge geospatial and data analytics solutions to the mining and mineral exploration industry, enabling companies to discover resources efficiently while minimizing environmental impact. Our expertise supports exploration, planning, and operational optimization.",
          "Learn More": "Learn More",
          "Our Services Include": "Our Services Include",
          "GIS & Image Processing": "GIS & Image Processing",
          "Utilize spatial data to identify potential mineral deposits, map geological formations, and analyze terrain.":
            "Utilize spatial data to identify potential mineral deposits, map geological formations, and analyze terrain.",
          Annotations: "Annotations",
          "Provide precise labeling of geological data to train AI models for mineral identification, enhancing exploration accuracy.":
            "Provide precise labeling of geological data to train AI models for mineral identification, enhancing exploration accuracy.",
          "LiDAR Data Processing": "LiDAR Data Processing",
          "Create high-resolution topographic maps and 3D models of mining sites for planning and monitoring purposes.":
            "Create high-resolution topographic maps and 3D models of mining sites for planning and monitoring purposes.",
          "Engineering Solutions": "Engineering Solutions",
          "Offer support in mine design, infrastructure development, and environmental compliance through advanced engineering practices.":
            "Offer support in mine design, infrastructure development, and environmental compliance through advanced engineering practices.",
          Benefit: "Benefit",
          "Exploration Efficiency": "Exploration Efficiency",
          "Accelerate discovery of resources by accurately pinpointing potential sites using advanced geospatial analysis.":
            "Accelerate discovery of resources by accurately pinpointing potential sites using advanced geospatial analysis.",
          "Operational Optimization": "Operational Optimization",
          "Improve mine planning and resource extraction processes through detailed modeling and simulation.":
            "Improve mine planning and resource extraction processes through detailed modeling and simulation.",
          "Environmental Stewardship": "Environmental Stewardship",
          "Reduce ecological footprint by integrating sustainable practices and complying with environmental regulations.":
            "Reduce ecological footprint by integrating sustainable practices and complying with environmental regulations.",
          "Safety Enhancement": "Safety Enhancement",
          "Identify potential hazards and implement measures to protect workers and assets.":
            "Identify potential hazards and implement measures to protect workers and assets.",

          // Industries - Oil and Gas Industry
          "Oil and Gas Industry": "Oil and Gas Industry",
          "At Q-Gate Infotech, we support the oil and gas industry with specialized geospatial, engineering, and data analytics services that enhance exploration, production, and asset management. Our solutions help companies navigate complex challenges and operate efficiently in a competitive market.":
            "At Q-Gate Infotech, we support the oil and gas industry with specialized geospatial, engineering, and data analytics services that enhance exploration, production, and asset management. Our solutions help companies navigate complex challenges and operate efficiently in a competitive market.",
          "Learn More": "Learn More",
          "Our Services Include": "Our Services Include",
          "GIS & Remote Sensing": "GIS & Remote Sensing",
          "Analyze spatial data for exploration mapping, pipeline routing, and environmental monitoring.":
            "Analyze spatial data for exploration mapping, pipeline routing, and environmental monitoring.",
          "Image Processing": "Image Processing",
          "Interpret seismic imagery and satellite data to identify geological features and assess potential drilling sites.":
            "Interpret seismic imagery and satellite data to identify geological features and assess potential drilling sites.",
          Annotations: "Annotations",
          "Provide data labeling for AI models used in reservoir characterization, predictive maintenance, and operational optimization.":
            "Provide data labeling for AI models used in reservoir characterization, predictive maintenance, and operational optimization.",
          "LiDAR Data Processing": "LiDAR Data Processing",
          "Generate accurate 3D models of terrains and offshore platforms for planning and safety assessments.":
            "Generate accurate 3D models of terrains and offshore platforms for planning and safety assessments.",
          "Engineering Solutions": "Engineering Solutions",
          "Deliver expertise in petroleum engineering, infrastructure design, and process optimization.":
            "Deliver expertise in petroleum engineering, infrastructure design, and process optimization.",
          Benefit: "Benefit",
          "Exploration Enhancement": "Exploration Enhancement",
          "Increase success rates in finding new reserves through advanced data analysis and modeling.":
            "Increase success rates in finding new reserves through advanced data analysis and modeling.",
          "Operational Efficiency": "Operational Efficiency",
          "Optimize production processes and reduce downtime with predictive analytics and real-time monitoring.":
            "Optimize production processes and reduce downtime with predictive analytics and real-time monitoring.",
          "Risk Mitigation": "Risk Mitigation",
          "Identify and manage risks associated with exploration and production activities, including environmental and safety concerns.":
            "Identify and manage risks associated with exploration and production activities, including environmental and safety concerns.",
          "Regulatory Compliance": "Regulatory Compliance",
          "Ensure adherence to industry regulations and environmental standards through comprehensive analysis and reporting.":
            "Ensure adherence to industry regulations and environmental standards through comprehensive analysis and reporting.",

          // Industries - Smart Transportation & Logistics

          "Smart Transportation & Logistics":
            "Smart Transportation & Logistics",
          "At Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise to create intelligent, efficient, and sustainable transportation systems.":
            "At Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise to create intelligent, efficient, and sustainable transportation systems.",
          "Learn More": "Learn More",
          "Our Services Include": "Our Services Include",
          "GIS & Remote Sensing": "GIS & Remote Sensing",
          "Utilize spatial data to map transportation networks, analyze traffic patterns, and identify areas for improvement.":
            "Utilize spatial data to map transportation networks, analyze traffic patterns, and identify areas for improvement.",
          "360-Degree Mobile Mapping & Analysis":
            "360-Degree Mobile Mapping & Analysis",
          "Capture comprehensive street-level imagery using advanced mobile mapping systems to create accurate, up-to-date maps of roads and infrastructure.":
            "Capture comprehensive street-level imagery using advanced mobile mapping systems to create accurate, up-to-date maps of roads and infrastructure.",
          Annotations: "Annotations",
          "Provide precise labeling of transportation data to train AI models for route optimization, autonomous vehicle navigation, and traffic management.":
            "Provide precise labeling of transportation data to train AI models for route optimization, autonomous vehicle navigation, and traffic management.",
          "LiDAR Data Processing": "LiDAR Data Processing",
          "Create detailed 3D models of roadways, bridges, and tunnels to support infrastructure maintenance, safety assessments, and future planning.":
            "Create detailed 3D models of roadways, bridges, and tunnels to support infrastructure maintenance, safety assessments, and future planning.",
          "Engineering Solutions": "Engineering Solutions",
          "Offer expertise in transportation engineering, including design, analysis, and optimization of transportation systems.":
            "Offer expertise in transportation engineering, including design, analysis, and optimization of transportation systems.",
          Benefit: "Benefit",
          "Operational Efficiency": "Operational Efficiency",
          "Optimize routes, reduce fuel consumption, and improve delivery times through advanced analytics and real-time data.":
            "Optimize routes, reduce fuel consumption, and improve delivery times through advanced analytics and real-time data.",
          "Enhanced Safety": "Enhanced Safety",
          "Identify and mitigate potential hazards by monitoring infrastructure conditions and traffic patterns.":
            "Identify and mitigate potential hazards by monitoring infrastructure conditions and traffic patterns.",
          Innovation: "Innovation",
          "Support the development of autonomous vehicles and smart city initiatives through high-quality data and modeling.":
            "Support the development of autonomous vehicles and smart city initiatives through high-quality data and modeling.",
          "Environmental Impact Reduction": "Environmental Impact Reduction",
          "Decrease emissions and congestion by optimizing logistics and promoting sustainable transportation practices.":
            "Decrease emissions and congestion by optimizing logistics and promoting sustainable transportation practices.",

          //Industries - Main
          Agriculture: "Agriculture",
          "Q-Gate Infotech offers innovative GIS and geospatial technologies to optimize agricultural practices and ensure sustainable resource management. We provide precision farming solutions that utilize spatial data for improved crop monitoring, soil health analysis, and resource management. Our services empower farmers, agribusinesses, and forestry managers to make data-driven decisions through advanced GIS-based insights. Whether it's mapping, vegetation analysis, or precision irrigation, we bring technology to the forefront of agriculture.":
            "Q-Gate Infotech offers innovative GIS and geospatial technologies to optimize agricultural practices and ensure sustainable resource management. We provide precision farming solutions that utilize spatial data for improved crop monitoring, soil health analysis, and resource management. Our services empower farmers, agribusinesses, and forestry managers to make data-driven decisions through advanced GIS-based insights. Whether it's mapping, vegetation analysis, or precision irrigation, we bring technology to the forefront of agriculture.",
          "GIS Mapping & Analysis": "GIS Mapping & Analysis",
          "Remote Sensing & Imaging": "Remote Sensing & Imaging",
          "Precision Irrigation Solutions": "Precision Irrigation Solutions",
          "Marine & Water Resource Management":
            "Marine & Water Resource Management",
          "Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments. We leverage GIS, satellite imagery, and advanced data analytics to help optimize water usage, monitor marine ecosystems, and manage resources sustainably. Our services empower stakeholders to make data-driven decisions for the protection of vital water bodies.":
            "Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments. We leverage GIS, satellite imagery, and advanced data analytics to help optimize water usage, monitor marine ecosystems, and manage resources sustainably. Our services empower stakeholders to make data-driven decisions for the protection of vital water bodies.",
          "Geospatial Data & Mapping": "Geospatial Data & Mapping",
          "Marine Ecosystem Monitoring": "Marine Ecosystem Monitoring",
          "Water Resource Management Solutions":
            "Water Resource Management Solutions",
          "Infrastructure Development": "Infrastructure Development",
          "Revolutionize your business with advanced technology solutions. Our innovative approach integrates AI, data insights, and automation systems for seamless operations. We aim to enhance productivity by streamlining processes with cutting-edge tools. Our team specializes in delivering futuristic solutions tailored to industry needs. Stay ahead of the competition by leveraging our expertise in technology innovations.":
            "Revolutionize your business with advanced technology solutions. Our innovative approach integrates AI, data insights, and automation systems for seamless operations. We aim to enhance productivity by streamlining processes with cutting-edge tools. Our team specializes in delivering futuristic solutions tailored to industry needs. Stay ahead of the competition by leveraging our expertise in technology innovations.",
          "AI Solutions": "AI Solutions",
          "Automation Systems": "Automation Systems",
          "Data Insights": "Data Insights",
          "Smart Transportation & Logistics":
            "Smart Transportation & Logistics",
          "Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise. Our solutions enable intelligent, efficient, and sustainable transportation systems that ensure timely deliveries and optimized operations. From real-time tracking to predictive analytics, we empower businesses with tools to enhance operational transparency, reduce costs, and achieve their logistics goals effortlessly. Experience the future of logistics with smart, data-driven solutions designed to keep you ahead.":
            "Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise. Our solutions enable intelligent, efficient, and sustainable transportation systems that ensure timely deliveries and optimized operations. From real-time tracking to predictive analytics, we empower businesses with tools to enhance operational transparency, reduce costs, and achieve their logistics goals effortlessly. Experience the future of logistics with smart, data-driven solutions designed to keep you ahead.",
          "Real-Time Tracking": "Real-Time Tracking",
          "Geospatial Insights": "Geospatial Insights",
          "Automated Operations": "Automated Operations",
          "Energy & Utilities": "Energy & Utilities",
          "At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability, and drive technological advancement. Our services enable energy providers, utility companies, and government agencies to optimize operations and meet the growing demand for clean, reliable energy. From renewable energy systems to grid optimization, we help build smarter, greener energy networks for a sustainable future.":
            "At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability, and drive technological advancement. Our services enable energy providers, utility companies, and government agencies to optimize operations and meet the growing demand for clean, reliable energy. From renewable energy systems to grid optimization, we help build smarter, greener energy networks for a sustainable future.",
          "Renewable Energy Systems": "Renewable Energy Systems",
          "Grid Optimization": "Grid Optimization",
          "Energy Efficiency Solutions": "Energy Efficiency Solutions",
          "Mining & Mineral Exploration": "Mining & Mineral Exploration",
          "Q-Gate Infotech provides cutting-edge geospatial and data analytics solutions to the mining and mineral exploration industry, enabling companies to discover resources efficiently while minimizing environmental impact. Our expertise supports exploration, planning, and operational optimization, allowing companies to unlock the full potential of their mining projects. From resource mapping to geospatial analysis, we help you pave the way to smarter, more sustainable resource management.":
            "Q-Gate Infotech provides cutting-edge geospatial and data analytics solutions to the mining and mineral exploration industry, enabling companies to discover resources efficiently while minimizing environmental impact. Our expertise supports exploration, planning, and operational optimization, allowing companies to unlock the full potential of their mining projects. From resource mapping to geospatial analysis, we help you pave the way to smarter, more sustainable resource management.",
          "Resource Mapping": "Resource Mapping",
          "Geospatial Solutions": "Geospatial Solutions",
          "Exploration Optimization": "Exploration Optimization",
          "Oil & Gas Industry": "Oil & Gas Industry",
          "At Q-Gate Infotech, we support the oil and gas industry with specialized geospatial, engineering, and data analytics services that enhance exploration, production, and asset management. Our solutions help companies navigate complex challenges, minimize risks, and optimize operations for greater efficiency in a competitive market. From reservoir management to pipeline monitoring, we bring strategic insights to your projects and ensure safe, sustainable operations.":
            "At Q-Gate Infotech, we support the oil and gas industry with specialized geospatial, engineering, and data analytics services that enhance exploration, production, and asset management. Our solutions help companies navigate complex challenges, minimize risks, and optimize operations for greater efficiency in a competitive market. From reservoir management to pipeline monitoring, we bring strategic insights to your projects and ensure safe, sustainable operations.",
          "Reservoir Management": "Reservoir Management",
          "Pipeline Monitoring": "Pipeline Monitoring",
          "Operational Optimization": "Operational Optimization",
          Education: "Education",
          "Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs. We aim to build capacity in cutting-edge technologies, nurture talent, and bridge the gap between academia and industry. Our innovative EdTech solutions enhance learning experiences, streamline administrative tasks, and promote creativity and collaboration. Join us in shaping the future of education and professional development through smarter, more accessible solutions.":
            "Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs. We aim to build capacity in cutting-edge technologies, nurture talent, and bridge the gap between academia and industry. Our innovative EdTech solutions enhance learning experiences, streamline administrative tasks, and promote creativity and collaboration. Join us in shaping the future of education and professional development through smarter, more accessible solutions.",
          "Training Programs": "Training Programs",
          "EdTech Platforms": "EdTech Platforms",
          "Skill Development": "Skill Development",
          "What We Do...!": "What We Do...!",
          Industries: "Industries",
          "Q-Gate Infotech Private Limited / Industries":
            "Q-Gate Infotech Private Limited / Industries",

          // Service - Main
          Services: "Services",
          "Plan, design, build, and manage your assets better with us":
            "Plan, design, build, and manage your assets better with us",
          "Geospatial Services": "Geospatial Services",
          "Geospatial Processing services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency.":
            "Geospatial Processing services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency.",
          "Image Data Processing": "Image Data Processing",
          "Satellite Data Analysis": "Satellite Data Analysis",
          "Hydro Flattening": "Hydro Flattening",
          "Vegetation Analysis": "Vegetation Analysis",
          "Software Development": "Software Development",
          "Our Software Development services are designed to create custom solutions that address your specific challenges and objectives.":
            "Our Software Development services are designed to create custom solutions that address your specific challenges and objectives.",
          "Custom Software Development": "Custom Software Development",
          "Enterprise Management Solutions": "Enterprise Management Solutions",
          "Web & Mobile Application Development":
            "Web & Mobile Application Development",
          "Data Analytics": "Data Analytics",
          "Data Analytics services empower organizations to transform vast amounts of complex data into actionable intelligence. Leveraging advanced algorithms and machine learning techniques.":
            "Data Analytics services empower organizations to transform vast amounts of complex data into actionable intelligence. Leveraging advanced algorithms and machine learning techniques.",
          "Advanced Imagery Analytics": "Advanced Imagery Analytics",
          "Spectral Analysis": "Spectral Analysis",
          "Computer Vision Applications": "Computer Vision Applications",
          "Engineering Solutions": "Engineering Solutions",
          "Engineering Solutions merge cutting-edge technology with engineering expertise to support the design, development, and optimization of infrastructure and industrial projects.":
            "Engineering Solutions merge cutting-edge technology with engineering expertise to support the design, development, and optimization of infrastructure and industrial projects.",
          BIM: "BIM",
          "Reverse Engineering": "Reverse Engineering",
          "Engineering Consultancy": "Engineering Consultancy",
          "Cloud-Based AI/ML Solutions": "Cloud-Based AI/ML Solutions",
          "We leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward.":
            "We leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward.",
          "Development of Intelligent Applications":
            "Development of Intelligent Applications",
          "Integration with Geospatial Data":
            "Integration with Geospatial Data",
          "Scalable Cloud Infrastructure": "Scalable Cloud Infrastructure",
          "Customized AI Models": "Customized AI Models",
          "Content Annotation": "Content Annotation",
          "Our Content Annotation services provide meticulous labeling of diverse data types, enabling your AI applications to perform with greater accuracy and efficiency.":
            "Our Content Annotation services provide meticulous labeling of diverse data types, enabling your AI applications to perform with greater accuracy and efficiency.",
          "Image, Video, and Text Annotation":
            "Image, Video, and Text Annotation",
          "Point Cloud Annotation": "Point Cloud Annotation",
          "Object Detection and Semantic Segmentation":
            "Object Detection and Semantic Segmentation",
          "Professional Training": "Professional Training",
          "Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology.":
            "Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology.",
          "On-the-Job Training Programs": "On-the-Job Training Programs",
          "Internships with Stipends": "Internships with Stipends",
          "Collaborations with Educational Institutions":
            "Collaborations with Educational Institutions",
          "Talent Solutions": "Talent Solutions",
          "Our Talent Solutions service provides access to a diverse pool of highly skilled professionals across various domains, enabling your business to meet its objectives effectively.":
            "Our Talent Solutions service provides access to a diverse pool of highly skilled professionals across various domains, enabling your business to meet its objectives effectively.",
          "Staff Augmentation": "Staff Augmentation",
          "Dedicated Project Teams": "Dedicated Project Teams",
          "Flexible Engagement Models": "Flexible Engagement Models",
          "Quality Assurance and Compliance":
            "Quality Assurance and Compliance",
          "Q-Gate Infotech Private Limited / Services":
            "Q-Gate Infotech Private Limited / Services",

          "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making.":
            "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making.",

          // Contact - Main

          Contact: "Contact",
          "Q-Gate Infotech Private Limited / contact":
            "Q-Gate Infotech Private Limited / contact",
          "We'd love to hear from you! Reach out with any questions or feedback.":
            "We'd love to hear from you! Reach out with any questions or feedback.",
          "Our team is here to assist you. Let’s connect!":
            "Our team is here to assist you. Let’s connect!",
          "Bangalore, India": "Bangalore, India",
          "Full Name": "Full Name",
          "Phone Number": "Phone Number",
          "Your Email": "Your Email",
          "Your Message": "Your Message",
          "Send Message": "Send Message",
          "Contact Us": "Contact Us",
          "Contact Info": "Contact Info",
          Address: "Address",

          //Blog

          "Geospatial Data Analysis for Environmental Monitoring":
            "Geospatial Data Analysis for Environmental Monitoring",
          "Explore how geospatial data analysis is used to monitor and protect the environment. Learn about the latest tools and techniques in this field.":
            "Explore how geospatial data analysis is used to monitor and protect the environment. Learn about the latest tools and techniques in this field.",
          "Remote Sensing Applications in Agriculture":
            "Remote Sensing Applications in Agriculture",
          "Discover the applications of remote sensing in agriculture. Understand how satellite imagery helps in crop monitoring and yield prediction.":
            "Discover the applications of remote sensing in agriculture. Understand how satellite imagery helps in crop monitoring and yield prediction.",
          "GIS in Urban Planning and Development":
            "GIS in Urban Planning and Development",
          "Learn about the role of Geographic Information Systems (GIS) in urban planning. See how GIS technology aids in sustainable city development.":
            "Learn about the role of Geographic Information Systems (GIS) in urban planning. See how GIS technology aids in sustainable city development.",
          "Satellite Imagery Processing Techniques":
            "Satellite Imagery Processing Techniques",
          "Understand the techniques used in processing satellite imagery. Gain insights into the methods for enhancing and analyzing satellite data.":
            "Understand the techniques used in processing satellite imagery. Gain insights into the methods for enhancing and analyzing satellite data.",
          "Integration of AI in Geospatial Technologies":
            "Integration of AI in Geospatial Technologies",
          "Explore the integration of Artificial Intelligence (AI) in geospatial technologies. Learn how AI is revolutionizing geospatial data analysis.":
            "Explore the integration of Artificial Intelligence (AI) in geospatial technologies. Learn how AI is revolutionizing geospatial data analysis.",
          "Climate Change Modeling using Geospatial Data":
            "Climate Change Modeling using Geospatial Data",
          "Discover how geospatial data is used in climate change modeling. Understand the impact of geospatial analysis on climate research.":
            "Discover how geospatial data is used in climate change modeling. Understand the impact of geospatial analysis on climate research.",
          "Handling Big Data in Geospatial Analysis":
            "Handling Big Data in Geospatial Analysis",
          "Learn about the challenges and solutions in handling big data in geospatial analysis. See how big data technologies are applied in this field.":
            "Learn about the challenges and solutions in handling big data in geospatial analysis. See how big data technologies are applied in this field.",
          "Advancements in 3D Mapping Technologies":
            "Advancements in 3D Mapping Technologies",
          "Explore the latest advancements in 3D mapping technologies. Understand how 3D mapping is transforming various industries.":
            "Explore the latest advancements in 3D mapping technologies. Understand how 3D mapping is transforming various industries.",
          "Innovative Geospatial Data Visualization Techniques":
            "Innovative Geospatial Data Visualization Techniques",
          "Discover innovative techniques for visualizing geospatial data. Learn how effective visualization enhances data interpretation and decision-making.":
            "Discover innovative techniques for visualizing geospatial data. Learn how effective visualization enhances data interpretation and decision-making.",

          // MainSection

          "At Q-Gate Infotech, we drive environmental sustainability through innovative spatial data processing. Leveraging advanced AI and cloud-based technologies, we specialize in geospatial and LiDAR data processing to enhance climate action and disaster management.":
            "At Q-Gate Infotech, we drive environmental sustainability through innovative spatial data processing. Leveraging advanced AI and cloud-based technologies, we specialize in geospatial and LiDAR data processing to enhance climate action and disaster management.",
          "Mapping the Future:": "Mapping the Future:",
          "Innovative Geospatial Solutions for a Connected World":
            "Innovative Geospatial Solutions for a Connected World",
          "Where Q-Gate Works": "Where Q-Gate Works",
          "Designed with City Planners in mind, Q-Gate empowers various industries to achieve more.":
            "Designed with City Planners in mind, Q-Gate empowers various industries to achieve more.",
          "MARINE & WATER RESOURCE MANAGEMENT":
            "MARINE & WATER RESOURCE MANAGEMENT",
          "INFRASTRUCTURE DEVELOPMENT": "INFRASTRUCTURE DEVELOPMENT",
          "SMART TRANSPORTATION & LOGISTICS":
            "SMART TRANSPORTATION & LOGISTICS",
          "ENERGY & UTILITIES": "ENERGY & UTILITIES",
          "MINING & MINERAL EXPLORATION": "MINING & MINERAL EXPLORATION",
          "OIL & GAS INDUSTRY": "OIL & GAS INDUSTRY",
          EDUCATION: "EDUCATION",
          "Accelerate your environmental reporting and compliance efforts with Earth Blox.":
            "Accelerate your environmental reporting and compliance efforts with Earth Blox.",
          "Get Started": "Get Started",
          "As the Founder and Director of Q-Gate Infotech, I lead a dynamic team that delivers innovative geospatial solutions integrated with AI/ML technologies. My goal has been to revolutionize the way organizations approach Data processing, that includes Disaster Management, Utility, Urban and Rural planning to Environmental Sustainability.":"As the Founder and Director of Q-Gate Infotech, I lead a dynamic team that delivers innovative geospatial solutions integrated with AI/ML technologies. My goal has been to revolutionize the way organizations approach Data processing, that includes Disaster Management, Utility, Urban and Rural planning to Environmental Sustainability.",
          "Our team at Q - Gate is dedicated to providing the best geospatial solutions. We have a passion for innovation and a commitment to excellence that drives us to constantly improve and evolve our services.":"Our team at Q - Gate is dedicated to providing the best geospatial solutions. We have a passion for innovation and a commitment to excellence that drives us to constantly improve and evolve our services.",
          "At Q - Gate, we believe in the power of maps to change the world. Our mission is to make geospatial technology accessible and useful for everyone, and we are proud of the impact we have made so far.":"At Q - Gate, we believe in the power of maps to change the world. Our mission is to make geospatial technology accessible and useful for everyone, and we are proud of the impact we have made so far.",
          "Director Finance":"Director Finance"
        },
      },
      GE: {
        translation: {
          Home: "Startseite",
          "About Us": "Über uns",
          Product: "Produkt",
          Industries: "Branchen",
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
          "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to businesses, organizations, and government.":
            "Ein innovativer Softwareanbieter, Systemintegrator und Technologieanbieter, der gegründet wurde, um verwertbare Erkenntnisse, fortschrittliche intelligente Lösungen und Beratungsdienstleistungen für Unternehmen, Organisationen und die Regierung bereitzustellen.",
          "Q-gate Infotech Private Limited": "Q-Gate Infotech GmbH",
          "Bengaluru, India - 560078": "München, Deutschland - 80331",

          "+91 93428 55394": "+49 176 99519797",
          "Opening Hours: 09:00 - 18:00": "Öffnungszeiten: 09:00 - 18:00",
          "contact.in@q-gate.co": "contact.de@q-gate.co",
          AGRICULTURE: "LANDWIRTSCHAFT",
          "View More": "Mehr erfahren",

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
          "Q-Gate Infotech Private Limited / careers":
            "Q-Gate Infotech Private Limited / Karriere",

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
          "Q-Gate Infotech Private Limited / Geospatial Services":
            "Q-Gate Infotech Private Limited / Geodaten-Dienstleistungen",

          //Service - Software Development
          "Q-Gate Infotech Private Limited / Software Development":
            "Q-Gate Infotech Private Limited / Softwareentwicklung",
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

          //Service - Data Analytics
          "Data Analytics": "Datenanalyse",
          "Q-Gate Infotech Private Limited / Data Analytics":
            "Q-Gate Infotech Private Limited / Datenanalyse",
          "Unlocking the Power of Spatial Data for Informed Decision-Making":
            "Die Kraft räumlicher Daten für fundierte Entscheidungen freisetzen",
          "At Q-Gate Infotech, our Data Analytics services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency. Utilizing advanced technologies and methodologies, we specialize in:":
            "Bei Q-Gate Infotech verwandeln unsere Datenanalysetools komplexe räumliche Daten in umsetzbare Erkenntnisse, die strategische Planung und betriebliche Effizienz fördern. Mithilfe fortschrittlicher Technologien und Methoden spezialisieren wir uns auf:",
          "Advanced Imagery Analytics": "Erweiterte Bildanalyse",
          "Extracting meaningful patterns from high-resolution satellite and aerial imagery.":
            "Erkennung aussagekräftiger Muster aus hochauflösenden Satelliten- und Luftbildern.",
          "Enabling informed decision-making in agriculture, forestry, mining, and urban planning.":
            "Ermöglichung fundierter Entscheidungen in Landwirtschaft, Forstwirtschaft, Bergbau und Stadtplanung.",
          "Providing real-time data insights for accurate trend analysis.":
            "Bereitstellung von Echtzeit-Dateneinblicken für präzise Trendanalysen.",
          "Supporting industry-specific insights to drive efficiency and innovation.":
            "Unterstützung branchenspezifischer Erkenntnisse zur Steigerung von Effizienz und Innovation.",
          "Spectral Analysis": "Spektralanalyse",
          "Identifying material compositions through multispectral and hyperspectral imaging.":
            "Erkennung von Materialzusammensetzungen durch multispektrale und hyperspektrale Bildgebung.",
          "Assessing vegetation health for environmental monitoring and precision agriculture.":
            "Bewertung der Vegetationsgesundheit für Umweltüberwachung und Präzisionslandwirtschaft.",
          "Locating mineral deposits critical to resource exploration.":
            "Ortung von Mineralvorkommen, die für die Ressourcenerkundung entscheidend sind.",
          "Supporting mineral exploration and environmental applications.":
            "Unterstützung bei der Mineraliensuche und Umweltanwendungen.",
          "Computer Vision Applications": "Computer Vision-Anwendungen",
          "Developing models for object detection and classification.":
            "Entwicklung von Modellen zur Objekterkennung und -klassifizierung.",
          "Enabling automated surveillance and monitoring systems.":
            "Ermöglichung automatisierter Überwachungs- und Kontrollsysteme.",
          "Supporting automation across industries through advanced vision tech.":
            "Unterstützung der Automatisierung in verschiedenen Branchen durch fortschrittliche Bildverarbeitungstechnologien.",
          "Tracking and analyzing objects in real time for various applications.":
            "Verfolgung und Analyse von Objekten in Echtzeit für verschiedene Anwendungen.",

          //Service - Cloud-Based AI/ML Solutions
          "Cloud-Based AI/ML Solutions": "Cloudbasierte KI/ML-Lösungen",
          "Q-Gate Infotech Private Limited / Cloud-Based AI/ML Solutions":
            "Q-Gate Infotech Private Limited / Cloudbasierte KI/ML-Lösungen",
          "Driving Innovation with Scalable Cloud and Artificial Intelligence Technologies":
            "Innovation durch skalierbare Cloud- und KI-Technologien vorantreiben",
          "At Q-Gate Infotech, we leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward. Our Cloud-Based AI/ML Solutions offer:":
            "Bei Q-Gate Infotech nutzen wir die Synergie von Cloud-Computing und fortschrittlichen KI- und ML-Algorithmen, um intelligente Lösungen zu entwickeln, die Unternehmen voranbringen. Unsere cloudbasierten KI/ML-Lösungen bieten:",
          "Development of Intelligent Applications":
            "Entwicklung intelligenter Anwendungen",
          "Enables predictive analytics for informed decision-making.":
            "Ermöglicht prädiktive Analysen für fundierte Entscheidungen.",
          "Streamlines tasks through automation to boost efficiency.":
            "Optimiert Aufgaben durch Automatisierung zur Steigerung der Effizienz.",
          "Supports real-time decision-making with rapid response to data.":
            "Unterstützt Echtzeitentscheidungen durch schnelle Datenreaktion.",
          "Continuously evolves through adaptive learning to provide insights.":
            "Entwickelt sich durch adaptives Lernen kontinuierlich weiter, um Erkenntnisse zu liefern.",
          "Integration with Geospatial Data": "Integration mit Geodaten",
          "Integrates AI/ML with geospatial data for enhanced insights.":
            "Integriert KI/ML mit Geodaten für verbesserte Einblicke.",
          "Enables pattern recognition in complex spatial datasets.":
            "Ermöglicht Mustererkennung in komplexen räumlichen Datensätzen.",
          "Supports anomaly detection for identifying unusual patterns.":
            "Unterstützt Anomalieerkennung zur Identifizierung ungewöhnlicher Muster.",
          "Enhances predictive modeling for urban planning and resource management.":
            "Verbessert prädiktive Modelle für Stadtplanung und Ressourcenmanagement.",
          "Scalable Cloud Infrastructure": "Skalierbare Cloud-Infrastruktur",
          "Provides accessibility from anywhere for seamless operations.":
            "Bietet von überall aus Zugriff für reibungslose Abläufe.",
          "Supports efficient data processing and storage for large datasets.":
            "Unterstützt effiziente Datenverarbeitung und Speicherung großer Datenmengen.",
          "Reduces need for on-premise infrastructure investment.":
            "Reduziert den Bedarf an Investitionen in lokale Infrastruktur.",
          "Customized AI Models": "Kundenspezifische KI-Modelle",
          "Develops custom ML models tailored to specific business needs.":
            "Entwickelt maßgeschneiderte ML-Modelle für spezifische Geschäftsanforderungen.",
          "Specializes in language processing, computer vision, and predictive analytics.":
            "Spezialisiert auf Sprachverarbeitung, Computer Vision und prädiktive Analysen.",
          "Builds models that provide actionable insights for decision-making.":
            "Entwickelt Modelle, die umsetzbare Erkenntnisse für Entscheidungen liefern.",
          "Delivers solutions that adapt to evolving business challenges.":
            "Liefert Lösungen, die sich an sich wandelnde geschäftliche Herausforderungen anpassen.",

          //Service - Professional Training
          "Q-Gate Infotech / Professional Training":"Q-Gate Infotech / Professionelle Schulung",
          "Professional Training": "Professionelle Schulung",
          "Q-Gate Infotech / Professional Training":
            "Q-Gate Infotech / Professionelle Schulung",
          "At Q-Gate Infotech, we believe that investing in people is key to driving innovation and achieving excellence.":
            "Bei Q-Gate Infotech sind wir der Meinung, dass Investitionen in Menschen der Schlüssel zur Förderung von Innovation und Exzellenz sind.",
          "Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology. Our initiatives include:":
            "Unsere Berufsausbildungsdienste sollen Einzelpersonen, insbesondere Hochschulabsolventen und Menschen aus ländlichen Gemeinden, durch die Vermittlung wertvoller Fähigkeiten und den Aufbau erfolgreicher Karrieren in der Technologiebranche stärken. Unsere Initiativen umfassen:",
          "On-the-Job Training Programs":
            "Berufsbegleitende Schulungsprogramme",
          "Hands-on training with real projects.":
            "Praktisches Training mit realen Projekten.",
          "Mentorship from experienced professionals.":
            "Mentoring durch erfahrene Fachleute.",
          "Accelerates learning through practical experience.":
            "Beschleunigt das Lernen durch praktische Erfahrung.",
          "Prepares individuals for industry demands.":
            "Bereitet Einzelpersonen auf die Anforderungen der Branche vor.",
          "Internships with Stipends": "Praktika mit Stipendien",
          "Paid internships for financial support.":
            "Bezahlte Praktika zur finanziellen Unterstützung.",
          "Develop essential industry exposure.":
            "Entwicklung grundlegender Branchenkenntnisse.",
          "Contribute meaningfully to real projects.":
            "Sinnvoller Beitrag zu realen Projekten.",
          "Gain insights into professional workflows.":
            "Einblicke in professionelle Arbeitsabläufe gewinnen.",
          "Collaborations with Educational Institutions":
            "Zusammenarbeit mit Bildungseinrichtungen",
          "Enhance curricula with industry insights.":
            "Lehrpläne mit Branchenkenntnissen erweitern.",
          "Bridge the gap between academia and industry.":
            "Überbrückung der Kluft zwischen Wissenschaft und Industrie.",
          "Sponsor innovative research projects.":
            "Förderung innovativer Forschungsprojekte.",
          "Encourage student engagement with technology.":
            "Förderung der Schülerbindung an Technologie.",
          "Empowering Rural Development":
            "Förderung der ländlichen Entwicklung",
          "Focus on recruiting talent from rural areas.":
            "Fokus auf die Rekrutierung von Talenten aus ländlichen Gebieten.",
          "Provide equal opportunities for local communities.":
            "Chancengleichheit für lokale Gemeinschaften bieten.",
          "Stimulate economic growth in underserved regions.":
            "Wirtschaftswachstum in unterversorgten Regionen anregen.",
          "Contribute to social responsibility and community upliftment.":
            "Beitrag zur sozialen Verantwortung und Förderung der Gemeinschaft.",

          //Service - Talent Solutions
          "Talent Solutions": "Talentlösungen",
          "Q-Gate Infotech / Talent Solutions":
            "Q-Gate Infotech / Talentlösungen",
          "At Q-Gate Infotech, we recognize that having the right talent is crucial for organizational success.":
            "Bei Q-Gate Infotech erkennen wir, dass die richtigen Talente entscheidend für den Erfolg einer Organisation sind.",
          "Our Talent Solutions service provides access to a diverse pool of highly skilled professionals, enabling your business to meet its objectives effectively. Our offerings include:":
            "Unser Talentlösungsdienst bietet Zugang zu einem vielfältigen Pool hochqualifizierter Fachkräfte, um Ihr Unternehmen effektiv bei der Erreichung seiner Ziele zu unterstützen. Unsere Angebote umfassen:",
          "Staff Augmentation": "Personalaufstockung",
          "Qualified experts to supplement your teams.":
            "Qualifizierte Experten zur Ergänzung Ihrer Teams.",
          "Scalable resources based on project demands.":
            "Skalierbare Ressourcen basierend auf den Projektanforderungen.",
          "Seamless integration with your existing workforce.":
            "Nahtlose Integration in Ihre bestehende Belegschaft.",
          "Expertise in geospatial technologies, software, and analytics.":
            "Fachwissen in Geotechnologien, Software und Analytik.",
          "Dedicated Project Teams": "Engagierte Projektteams",
          "Exclusive teams focused on your assignments.":
            "Exklusive Teams, die sich auf Ihre Aufgaben konzentrieren.",
          "Ensures alignment with organizational goals.":
            "Stellt die Ausrichtung auf organisatorische Ziele sicher.",
          "Consistent collaboration with your internal teams.":
            "Konstante Zusammenarbeit mit Ihren internen Teams.",
          "Promotes organizational culture fit.":
            "Fördert die Passung zur Unternehmenskultur.",
          "Flexible Engagement Models": "Flexible Engagement-Modelle",
          "Tailored engagement options based on business needs.":
            "Angepasste Engagement-Optionen basierend auf den Geschäftsanforderungen.",
          "Short-term contracts for quick solutions.":
            "Kurzzeitverträge für schnelle Lösungen.",
          "Long-term placements for sustained support.":
            "Langfristige Einsätze für nachhaltige Unterstützung.",
          "Project-based arrangements for specific goals.":
            "Projektbasierte Vereinbarungen für spezifische Ziele.",
          "Quality Assurance and Compliance":
            "Qualitätssicherung und Compliance",
          "Rigorous vetting of all professionals.":
            "Strenge Überprüfung aller Fachkräfte.",
          "Ensure high standards of technical proficiency.":
            "Sicherstellung hoher technischer Kompetenzen.",
          "Handle all HR management and compliance aspects.":
            "Übernahme aller HR-Management- und Compliance-Aspekte.",
          "Focus on your core business while we manage the rest.":
            "Konzentrieren Sie sich auf Ihr Kerngeschäft, während wir den Rest übernehmen.",

          //Service - Engineering Solutions

          "Engineering Solutions": "Ingenieurlösungen",
          "Q-Gate Infotech Private Limited / Engineering Solutions":
            "Q-Gate Infotech Private Limited / Ingenieurlösungen",
          "Innovative Engineering for Sustainable Development":
            "Innovatives Ingenieurwesen für nachhaltige Entwicklung",
          "Q-Gate Infotech's Engineering Solutions merge cutting-edge technology with engineering expertise to support the design, development and optimization of infrastructure and industrial projects. Our services aim to enhance efficiency, sustainability and innovation in engineering practices. We offer:":
            "Die Ingenieurlösungen von Q-Gate Infotech verbinden modernste Technologie mit Ingenieurkompetenz, um die Planung, Entwicklung und Optimierung von Infrastruktur- und Industrieprojekten zu unterstützen. Unsere Dienstleistungen zielen darauf ab, Effizienz, Nachhaltigkeit und Innovation in der Ingenieurpraxis zu fördern. Wir bieten:",
          "Building Information Modeling (BIM)":
            "Building Information Modeling (BIM)",
          "Developing detailed and intelligent 3D models of buildings and infrastructure.":
            "Entwicklung detaillierter und intelligenter 3D-Modelle von Gebäuden und Infrastrukturen.",
          "Enabling effective visualization, simulation, and project management.":
            "Ermöglichung effektiver Visualisierung, Simulation und Projektmanagement.",
          "Facilitating collaboration, reducing errors, and streamlining delivery.":
            "Förderung der Zusammenarbeit, Reduzierung von Fehlern und Optimierung der Abläufe.",
          "Reverse Engineering for Existing Structures":
            "Reverse Engineering für bestehende Strukturen",
          "Utilizing advanced scanning and modeling for structural analysis.":
            "Nutzung fortschrittlicher Scanning- und Modellierungstechniken für die Strukturanalyse.",
          "Assisting renovation planning, analysis, and maintenance scheduling.":
            "Unterstützung bei der Renovierungsplanung, Analyse und Wartungsplanung.",
          "Ensuring longevity and safety of infrastructure assets.":
            "Sicherung der Langlebigkeit und Sicherheit von Infrastrukturvermögen.",
          "Engineering Consultancy": "Ingenieurberatung",
          "Providing expert consultancy across various engineering projects.":
            "Bereitstellung fachkundiger Beratung für verschiedene Ingenieurprojekte.",
          "Conducting feasibility studies, environmental assessments, and optimization.":
            "Durchführung von Machbarkeitsstudien, Umweltbewertungen und Optimierungen.",
          "Enhancing project outcomes with multidisciplinary expertise.":
            "Verbesserung der Projektergebnisse durch interdisziplinäres Fachwissen.",

          //Service - Content Annotation
          "Content Annotation": "Inhaltsannotation",
          "Q-Gate Infotech / Content Annotation":
            "Q-Gate Infotech / Inhaltsannotation",
          "At Q-Gate Infotech, we understand that precise data annotation is the foundation of effective AI and machine learning models.":
            "Bei Q-Gate Infotech verstehen wir, dass präzise Datenannotation die Grundlage effektiver KI- und Machine-Learning-Modelle ist.",
          "Our Content Annotation services provide meticulous labeling of diverse data types, enabling your AI applications to perform with greater accuracy and efficiency. Our offerings include:":
            "Unsere Datenannotationsdienste bieten eine sorgfältige Kennzeichnung verschiedener Datentypen, die es Ihren KI-Anwendungen ermöglichen, mit größerer Genauigkeit und Effizienz zu arbeiten. Unsere Angebote umfassen:",
          "Image, Video, and Text Annotation":
            "Bild-, Video- und Textannotation",
          "Annotating images, videos, and text for AI model training.":
            "Annotation von Bildern, Videos und Texten für das Training von KI-Modellen.",
          "Supports computer vision and natural language processing applications.":
            "Unterstützt Anwendungen der Computervision und der natürlichen Sprachverarbeitung.",
          "Ensures precise data labeling for reliable model performance.":
            "Sicherstellt präzise Datenkennzeichnung für eine zuverlässige Modellleistung.",
          "Facilitates accurate object recognition and text understanding.":
            "Ermöglicht eine genaue Objekterkennung und Textverständnis.",
          "Point Cloud Annotation": "Punktwolkenannotation",
          "Annotating 3D point cloud data for object recognition.":
            "Annotation von 3D-Punktwolkendaten zur Objekterkennung.",
          "Essential for autonomous vehicles and robotics applications.":
            "Wesentlich für autonome Fahrzeuge und Robotikanwendungen.",
          "Supports scene understanding and environmental modeling.":
            "Unterstützt das Verständnis von Szenen und die Modellierung der Umgebung.",
          "Leverages LiDAR technology for detailed spatial analysis.":
            "Nutzen von LiDAR-Technologie für eine detaillierte räumliche Analyse.",
          "Object Detection and Semantic Segmentation":
            "Objekterkennung und Semantische Segmentierung",
          "Detailed annotations for object detection tasks.":
            "Detaillierte Annotationen für Objekterkennungsaufgaben.",
          "Pixel-level semantic segmentation for precise visual data interpretation.":
            "Pixelgenaue semantische Segmentierung für präzise visuelle Dateninterpretation.",
          "Enables accurate understanding of complex visual data.":
            "Ermöglicht ein genaues Verständnis komplexer visueller Daten.",
          "Supports advanced computer vision applications.":
            "Unterstützt fortschrittliche Anwendungen der Computervision.",

          // Industries - Agriculture
          Agriculture: "Landwirtschaft",
          "At Q-Gate Infotech, we empower the agriculture and forestry sectors by harnessing cutting-edge geospatial technologies and data analytics to promote sustainable practices and optimize productivity. Our comprehensive solutions enable farmers, agribusinesses and forestry managers to make informed decisions through precise, real-time insights.":
            "Bei Q-Gate Infotech befähigen wir die Landwirtschafts- und Forstwirtschaftssektoren, indem wir modernste geospatiale Technologien und Datenanalyse nutzen, um nachhaltige Praktiken zu fördern und die Produktivität zu optimieren. Unsere umfassenden Lösungen ermöglichen es Landwirten, Agrarunternehmen und Forstmanagern, fundierte Entscheidungen auf der Grundlage präziser Echtzeitdaten zu treffen.",
          "Learn More": "Erfahren Sie mehr",
          "Our Services Include": "Unsere Dienstleistungen umfassen",
          "GIS & Remote Sensing:": "GIS & Fernerkundung:",
          "Utilize spatial data to monitor agricultural lands and forest ecosystems, enabling precise mapping and analysis.":
            "Nutzung räumlicher Daten zur Überwachung landwirtschaftlicher Flächen und Waldökosysteme, die präzise Kartierung und Analyse ermöglichen.",
          "Image Processing Analysis:": "Bildverarbeitungsanalyse:",
          "Interpret high-resolution satellite and aerial imagery to assess crop health, soil conditions, and detect pests or diseases early.":
            "Interpretation von hochauflösenden Satelliten- und Luftaufnahmen zur Beurteilung der Gesundheit von Pflanzen, Bodenbedingungen und zur frühzeitigen Erkennung von Schädlingen oder Krankheiten.",
          "Vegetation Analysis:": "Vegetationsanalyse:",
          "Conduct detailed assessments of vegetation cover, growth patterns, biomass estimation, and species classification to support sustainable forest management and conservation efforts.":
            "Durchführung detaillierter Bewertungen der Vegetationsbedeckung, Wachstums- und Biomasse-Schätzungen sowie der Artenklassifikation zur Unterstützung des nachhaltigen Waldmanagements und der Naturschutzbemühungen.",
          "Annotation :": "Annotationen :",
          "Provide precise labeling of imagery to train AI models for predictive analytics, facilitating precision agriculture and efficient resource management.":
            "Präzise Kennzeichnung von Bildern zur Schulung von KI-Modellen für prädiktive Analysen, die präzise Landwirtschaft und effizientes Ressourcenmanagement ermöglichen.",
          "LiDAR Measurement Analysis:": "LiDAR-Messanalyse:",
          "Use LiDAR technology to generate accurate 3D models of terrain and vegetation structures, assisting in land assessment, irrigation planning, and forest inventory.":
            "Verwendung von LiDAR-Technologie zur Erstellung genauer 3D-Modelle von Gelände- und Vegetationsstrukturen, die bei der Landbewertung, Bewässerungsplanung und Waldinventur helfen.",
          Benefit: "Vorteil",
          "Enhanced Crop Yields:": "Ertragssteigerung:",
          "Optimize planting schedules, irrigation, and fertilization through precise data analysis.":
            "Optimierung von Pflanzplänen, Bewässerung und Düngung durch präzise Datenanalyse.",
          "Resource Efficiency:": "Ressourceneffizienz:",
          "Reduce waste and improve resource utilization by targeting interventions where they are most needed.":
            "Verringerung von Abfall und Verbesserung der Ressourcennutzung durch gezielte Maßnahmen an den am meisten benötigten Stellen.",
          "Sustainability :": "Nachhaltigkeit :",
          "Promote environmentally friendly practices by effectively monitoring and managing land use.":
            "Förderung umweltfreundlicher Praktiken durch effektive Überwachung und Verwaltung der Landnutzung.",
          "Risk Mitigation:": "Risikominderung:",
          "Identify potential threats such as pest infestations or environmental stressors early to prevent losses.":
            "Frühe Identifizierung potenzieller Bedrohungen wie Schädlingsbefall oder Umweltbelastungen, um Verluste zu verhindern.",

          // Industries - Education

          Education: "Bildung",
          "Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs. We aim to build capacity in cutting-edge technologies, nurture talent, and bridge the gap between academia and industry.":
            "Q-Gate Infotech setzt sich dafür ein, Bildung und berufliche Weiterentwicklung zu fördern, indem umfassende Trainings- und Entwicklungsprogramme angeboten werden. Wir wollen Kapazitäten in modernsten Technologien aufbauen, Talente fördern und die Kluft zwischen akademischer Bildung und Industrie überbrücken.",
          "Learn More": "Mehr erfahren",
          "Our Services Include": "Unsere Dienstleistungen umfassen",
          "Professional Training Programs": "Professionelle Trainingsprogramme",
          "Offer courses in GIS, remote sensing, AI/ML, software development, data analytics, and engineering, tailored to meet industry demands.":
            "Bieten Kurse in GIS, Fernerkundung, KI/ML, Softwareentwicklung, Datenanalyse und Ingenieurwesen an, die an die Anforderungen der Industrie angepasst sind.",
          "On-the-Job Training and Internships":
            "Praktische Ausbildung und Praktika",
          "Provide hands-on experience through internships without stipends, allowing participants to apply their learning to real-world projects.":
            "Bieten praktische Erfahrungen durch unbezahlte Praktika, die es den Teilnehmern ermöglichen, ihr Wissen in realen Projekten anzuwenden.",
          "Collaborations with Educational Institutions":
            "Zusammenarbeit mit Bildungseinrichtungen",
          "Partner with universities and colleges through MoUs to update curricula, support research initiatives, and facilitate knowledge exchange.":
            "Partnerschaften mit Universitäten und Hochschulen durch Absichtserklärungen (MoUs), um Lehrpläne zu aktualisieren, Forschungsinitiativen zu unterstützen und den Wissensaustausch zu fördern.",
          "Project Sponsorships and Scholarships":
            "Projektförderung und Stipendien",
          "Support innovative projects, research activities, and provide financial assistance to promising students.":
            "Unterstützung innovativer Projekte, Forschungsaktivitäten und finanzielle Hilfe für vielversprechende Studenten.",
          "Empowering Rural Development": "Stärkung der ländlichen Entwicklung",
          "Focus on recruiting and training individuals from rural areas, promoting equal opportunities and contributing to community upliftment.":
            "Fokus auf die Rekrutierung und Ausbildung von Menschen aus ländlichen Gebieten, Förderung der Chancengleichheit und Beitrag zur Gemeinwohlentwicklung.",
          Benefit: "Vorteil",
          "Skill Enhancement": "Fähigkeitserweiterung",
          "Equip individuals with the latest technological skills required in today's job market.":
            "Ausstattung von Personen mit den neuesten technologischen Fähigkeiten, die auf dem heutigen Arbeitsmarkt erforderlich sind.",
          "Career Development": "Karriereentwicklung",
          "Provide pathways for fresh graduates and professionals to build successful careers in technology.":
            "Bereitstellung von Wegen für Absolventen und Fachleute, um erfolgreiche Karrieren in der Technologiebranche aufzubauen.",
          "Industry-Academia Collaboration":
            "Zusammenarbeit zwischen Industrie und Hochschule",
          "Strengthen connections between educational institutions and industry to align education with practical needs.":
            "Stärkung der Verbindungen zwischen Bildungseinrichtungen und Industrie, um die Ausbildung an die praktischen Bedürfnisse anzupassen.",
          "Social Impact": "Gesellschaftlicher Einfluss",
          "Contribute to societal development by empowering individuals and fostering innovation.":
            "Beitrag zur gesellschaftlichen Entwicklung durch die Förderung von Individuen und Innovation.",

          // Industries - Energy & Utilities

          "Energy and Utilities": "Energie und Versorgungsunternehmen",
          "At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability, and drive technological advancement. Our services enable energy providers, utility companies, and government agencies to optimize operations and meet the growing demand for clean, reliable energy.":
            "Bei Q-Gate Infotech stärken wir den Energiesektor und die Versorgungsunternehmen, indem wir innovative geospatiale und ingenieurtechnische Lösungen bieten, die die Effizienz steigern, die Nachhaltigkeit fördern und technologische Fortschritte vorantreiben. Unsere Dienstleistungen ermöglichen es Energieversorgern, Versorgungsunternehmen und Regierungsbehörden, ihre Abläufe zu optimieren und der wachsenden Nachfrage nach sauberer, zuverlässiger Energie gerecht zu werden.",
          "Learn More": "Mehr erfahren",
          "Our Services Include": "Unsere Dienstleistungen umfassen",
          "GIS & Remote Sensing": "GIS & Fernerkundung",
          "Analyze spatial data for resource exploration, site selection, and infrastructure planning, ensuring optimal placement of energy facilities such as wind farms, solar arrays, and power plants.":
            "Analysieren Sie räumliche Daten für die Ressourcenerkundung, Standortauswahl und Infrastrukturplanung, um eine optimale Platzierung von Energieanlagen wie Windparks, Solaranlagen und Kraftwerken sicherzustellen.",
          "Image Processing": "Bildverarbeitung",
          "Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.":
            "Bieten Sie detaillierte Datenkennzeichnung, um KI-Modelle für vorausschauende Wartung, Fehlererkennung und Energiebedarfsvorhersage zu trainieren.",
          Annotations: "Markierungen",
          "Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.":
            "Bieten Sie detaillierte Datenkennzeichnung, um KI-Modelle für vorausschauende Wartung, Fehlererkennung und Energiebedarfsvorhersage zu trainieren.",
          "LiDAR Data Processing": "LiDAR-Datenverarbeitung",
          "Generate accurate 3D models of terrain and infrastructure for designing transmission lines, pipelines, and utility networks.":
            "Erstellen Sie genaue 3D-Modelle von Gelände und Infrastruktur für die Planung von Übertragungsleitungen, Pipelines und Versorgungsnetzen.",
          "Engineering Solutions": "Ingenieurlösungen",
          "Offer expertise in electrical and civil engineering to support grid modernization, renewable energy integration, and infrastructure upgrades.":
            "Bieten Sie Fachwissen in der Elektro- und Bauingenieurtechnik, um die Modernisierung von Netzen, die Integration erneuerbarer Energien und Infrastrukturaufwertungen zu unterstützen.",
          Benefit: "Vorteil",
          "Operational Efficiency": "Betriebseffizienz",
          "Optimize energy production and distribution through precise data analysis and modeling.":
            "Optimieren Sie die Energieproduktion und -verteilung durch präzise Datenanalyse und Modellierung.",
          Sustainability: "Nachhaltigkeit",
          "Facilitate the transition to renewable energy sources by identifying optimal sites and integrating clean energy into existing grids.":
            "Erleichtern Sie den Übergang zu erneuerbaren Energiequellen, indem Sie optimale Standorte identifizieren und saubere Energie in bestehende Netze integrieren.",
          Reliability: "Zuverlässigkeit",
          "Enhance infrastructure resilience and reduce downtime through predictive maintenance and real-time monitoring.":
            "Steigern Sie die Widerstandsfähigkeit der Infrastruktur und reduzieren Sie Ausfallzeiten durch vorausschauende Wartung und Echtzeitüberwachung.",
          "Regulatory Compliance": "Regulatorische Compliance",
          "Ensure adherence to environmental regulations and safety standards through thorough analysis and reporting.":
            "Stellen Sie die Einhaltung von Umweltvorschriften und Sicherheitsstandards durch gründliche Analysen und Berichterstattung sicher.",

          // Industries - Infrastructure Development

          "Infrastructure Development": "Infrastrukturausbau",
          "At Q-Gate Infotech, we drive infrastructure development by providing comprehensive geospatial and engineering solutions that enable planners, architects, and developers to design and construct smarter, more sustainable infrastructure.":
            "Bei Q-Gate Infotech treiben wir den Infrastrukturausbau voran, indem wir umfassende geospatiale und ingenieurtechnische Lösungen bereitstellen, die es Planern, Architekten und Entwicklern ermöglichen, intelligentere und nachhaltigere Infrastrukturen zu entwerfen und zu bauen.",
          "Learn More": "Mehr erfahren",
          "Our Services Include": "Unsere Dienstleistungen umfassen",
          "GIS & Remote Sensing": "GIS & Fernerkundung",
          "Collect and analyze spatial data for site selection, feasibility studies, and impact assessments, ensuring projects are grounded in accurate geographic information.":
            "Erfassen und analysieren Sie räumliche Daten für die Standortauswahl, Machbarkeitsstudien und Auswirkungen, um sicherzustellen, dass Projekte auf genauen geografischen Informationen basieren.",
          "Image Processing Analysis": "Bildverarbeitungsanalyse",
          "Interpret high-resolution imagery to monitor construction progress, assess environmental impact, and detect changes in land use.":
            "Interpretieren Sie hochauflösende Bilder, um den Baufortschritt zu überwachen, die Umweltauswirkungen zu bewerten und Änderungen der Landnutzung zu erkennen.",
          Annotations: "Annotations",
          "Provide detailed data annotation to train AI models for automated feature extraction, aiding in urban planning and infrastructure maintenance.":
            "Bieten Sie detaillierte Datenannotation, um KI-Modelle für die automatisierte Merkmalserkennung zu trainieren, die bei der Stadtplanung und Infrastrukturpflege unterstützen.",
          "Engineering Solutions": "Ingenieurlösungen",
          "Deliver expert engineering services, including structural analysis, design optimization, and Building Information Modeling (BIM), to streamline project workflows.":
            "Bieten Sie fachkundige Ingenieurdienstleistungen, einschließlich der strukturellen Analyse, Designoptimierung und Building Information Modeling (BIM), um die Projektabläufe zu optimieren.",
          "LiDAR Measurement Analysis": "LiDAR-Messanalyse",
          "Generate precise 3D models and digital elevation models (DEMs) for terrain analysis, aiding in the design of roads, bridges, and other infrastructure components.":
            "Erstellen Sie präzise 3D-Modelle und digitale Höhenmodelle (DEMs) für die Geländeanalyse, die bei der Gestaltung von Straßen, Brücken und anderen Infrastrukturkomponenten helfen.",
          Benefit: "Vorteil",
          "Enhanced Planning": "Verbesserte Planung",
          "Make informed decisions with accurate spatial data, reducing risks and unforeseen challenges.":
            "Treffen Sie fundierte Entscheidungen mit genauen räumlichen Daten, um Risiken und unvorhergesehene Herausforderungen zu minimieren.",
          "Cost Efficiency": "Kosten-Effizienz",
          Sustainability: "Nachhaltigkeit",
          "Incorporate environmental considerations into infrastructure projects to minimize ecological impact and promote long-term viability.":
            "Berücksichtigen Sie Umweltaspekte in Infrastrukturprojekten, um die ökologischen Auswirkungen zu minimieren und die langfristige Lebensfähigkeit zu fördern.",
          "Regulatory Compliance": "Regulatorische Compliance",
          "Ensure adherence to zoning laws, environmental regulations, and building codes through detailed analysis and documentation.":
            "Stellen Sie sicher, dass die Vorschriften für Bebauungspläne, Umweltvorschriften und Bauvorschriften durch detaillierte Analyse und Dokumentation eingehalten werden.",

          // Industries - Marine & Water Resource Management

          "Marine & Water Resource Management":
            "Marine- und Wasserressourcenmanagement",
          "Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments.":
            "Q-Gate Infotech bietet fortschrittliche geospatiale und ingenieurtechnische Lösungen zur Verbesserung des Marine- und Wasserressourcenmanagements. Unsere Expertise ermöglicht es Regierungen, Umweltbehörden und maritimen Industrien, aquatische Umgebungen effektiv zu überwachen, zu verwalten und zu schützen.",
          "Learn More": "Mehr Erfahren",
          "Our Services Include": "Unsere Dienstleistungen beinhalten",
          "GIS & Remote Sensing": "GIS und Fernerkundung",
          "Leverage spatial data to monitor marine ecosystems, coastal zones, and freshwater bodies for environmental changes and resource assessment.":
            "Nutzen Sie räumliche Daten zur Überwachung von marinen Ökosystemen, Küstenzonen und Süßwasserkörpern für Umweltveränderungen und Ressourcenschätzungen.",
          "Sea & Water Bed Mapping": "Seekarten- und Wasserbettraster",
          "Generate detailed bathymetric maps of seabeds and riverbeds using sonar and LiDAR technologies for navigation safety, resource exploration, and habitat mapping.":
            "Erstellen Sie detaillierte bathymetrische Karten von Meeres- und Flussbetten mit Sonar- und LiDAR-Technologien für die Navigationssicherheit, Ressourcenerkundung und Habitatkartierung.",
          "Hydro Flattening": "Hydro-Flachstellung",
          "Apply hydro-flattening techniques to LiDAR data to accurately represent water surfaces in digital elevation models, essential for flood modeling and hydrological studies.":
            "Wenden Sie Hydro-Flachstellungstechniken auf LiDAR-Daten an, um Wasseroberflächen in digitalen Höhenmodellen genau darzustellen, was für Überschwemmungsmodellierung und hydrologische Studien wichtig ist.",
          "Engineering Solutions": "Ingenieurlösungen",
          "Offer expertise in coastal infrastructure development, erosion control, and shoreline management to protect against sea-level rise and extreme weather events.":
            "Bieten Sie Expertise in der Entwicklung von Küstenschutzinfrastruktur, Erosionskontrolle und Ufermanagement, um sich gegen den Anstieg des Meeresspiegels und extreme Wetterereignisse zu schützen.",
          "LiDAR Measurement Analysis": "LiDAR-Messanalyse",
          "Process LiDAR data to create high-resolution 3D models of coastal and underwater terrains, supporting dredging operations, port development, and environmental monitoring.":
            "Verarbeiten Sie LiDAR-Daten, um hochauflösende 3D-Modelle von Küsten- und Unterwasser-Terrain zu erstellen, die Dredging-Operationen, Hafenentwicklung und Umweltmonitoring unterstützen.",
          Benefit: "Vorteil",
          "Resource Optimization": "Ressourcenoptimierung",
          "Manage fisheries and aquatic resources sustainably by understanding population dynamics and habitat conditions.":
            "Verwalten Sie Fischerei- und Wasserressourcen nachhaltig, indem Sie die Populationsdynamik und Habitatbedingungen verstehen.",
          "Environmental Protection": "Umweltschutz",
          "Monitor water quality, detect pollution sources, and assess the impact of human activities on marine ecosystems.":
            "Überwachen Sie die Wasserqualität, erkennen Sie Verschmutzungsquellen und bewerten Sie die Auswirkungen menschlicher Aktivitäten auf marine Ökosysteme.",
          "Risk Management": "Risikomanagement",
          "Enhance disaster preparedness by modeling storm surges, flooding, and coastal erosion scenarios.":
            "Verbessern Sie die Katastrophenvorsorge durch Modellierung von Sturmfluten, Überschwemmungen und Küstenerosion.",
          "Infrastructure Development": "Infrastrukturentwicklung",
          "Support the planning and maintenance of maritime infrastructure such as ports, harbors, and offshore installations.":
            "Unterstützen Sie die Planung und Wartung von maritimer Infrastruktur wie Häfen, Hafenanlagen und Offshore-Installationen.",

          // Industries - Mining & Mineral Exploration
          "Mining & Mineral Exploration": "Bergbau und Mineralexploration",
          "Q-Gate Infotech provides cutting-edge geospatial and data analytics solutions to the mining and mineral exploration industry, enabling companies to discover resources efficiently while minimizing environmental impact. Our expertise supports exploration, planning, and operational optimization.":
            "Q-Gate Infotech bietet fortschrittliche geospatiale und Datenanalysetools für die Bergbau- und Mineralexplorationsbranche, um Unternehmen bei der effizienten Ressourcensuche zu unterstützen und gleichzeitig die Umweltbelastung zu minimieren. Unsere Expertise unterstützt die Exploration, Planung und Optimierung des Betriebs.",
          "Learn More": "Mehr Erfahren",
          "Our Services Include": "Unsere Dienstleistungen beinhalten",
          "GIS & Image Processing": "GIS und Bildverarbeitung",
          "Utilize spatial data to identify potential mineral deposits, map geological formations, and analyze terrain.":
            "Nutzen Sie räumliche Daten, um potenzielle Mineralvorkommen zu identifizieren, geologische Formationen zu kartieren und das Gelände zu analysieren.",
          Annotations: "Anmerkungen",
          "Provide precise labeling of geological data to train AI models for mineral identification, enhancing exploration accuracy.":
            "Bieten Sie präzise Kennzeichnung geologischer Daten zur Schulung von KI-Modellen für die Mineralidentifikation und verbessern Sie die Genauigkeit der Exploration.",
          "LiDAR Data Processing": "LiDAR-Datenverarbeitung",
          "Create high-resolution topographic maps and 3D models of mining sites for planning and monitoring purposes.":
            "Erstellen Sie hochauflösende topografische Karten und 3D-Modelle von Bergbaustellen für Planungs- und Überwachungszwecke.",
          "Engineering Solutions": "Ingenieurlösungen",
          "Offer support in mine design, infrastructure development, and environmental compliance through advanced engineering practices.":
            "Bieten Sie Unterstützung bei der Mine-Design, Infrastrukturentwicklung und Einhaltung von Umweltvorschriften durch fortschrittliche Ingenieurpraktiken.",
          Benefit: "Vorteil",
          "Exploration Efficiency": "Explorations-Effizienz",
          "Accelerate discovery of resources by accurately pinpointing potential sites using advanced geospatial analysis.":
            "Beschleunigen Sie die Entdeckung von Ressourcen, indem Sie potenzielle Standorte mit fortschrittlicher geospatialer Analyse genau identifizieren.",
          "Operational Optimization": "Betriebsoptimierung",
          "Improve mine planning and resource extraction processes through detailed modeling and simulation.":
            "Verbessern Sie die Mine-Planung und Ressourcengewinnung durch detaillierte Modellierung und Simulation.",
          "Environmental Stewardship": "Umweltschutz",
          "Reduce ecological footprint by integrating sustainable practices and complying with environmental regulations.":
            "Reduzieren Sie den ökologischen Fußabdruck, indem Sie nachhaltige Praktiken integrieren und Umweltvorschriften einhalten.",
          "Safety Enhancement": "Sicherheitsverbesserung",
          "Identify potential hazards and implement measures to protect workers and assets.":
            "Identifizieren Sie potenzielle Gefahren und ergreifen Sie Maßnahmen zum Schutz von Arbeitern und Vermögenswerten.",

          // Industries - Oil and Gas Industry

          "Oil and Gas Industry": "Öl- und Gasindustrie",
          "At Q-Gate Infotech, we support the oil and gas industry with specialized geospatial, engineering, and data analytics services that enhance exploration, production, and asset management. Our solutions help companies navigate complex challenges and operate efficiently in a competitive market.":
            "Bei Q-Gate Infotech unterstützen wir die Öl- und Gasindustrie mit spezialisierten geospatiale, Ingenieur- und Datenanalysetools, die Exploration, Produktion und Asset-Management verbessern. Unsere Lösungen helfen Unternehmen, komplexe Herausforderungen zu meistern und effizient in einem wettbewerbsintensiven Markt zu operieren.",
          "Learn More": "Mehr Erfahren",
          "Our Services Include": "Unsere Dienstleistungen beinhalten",
          "GIS & Remote Sensing": "GIS & Fernerkundung",
          "Analyze spatial data for exploration mapping, pipeline routing, and environmental monitoring.":
            "Analysieren Sie räumliche Daten für Explorationskarten, Pipeline-Routing und Umweltüberwachung.",
          "Image Processing": "Bildverarbeitung",
          "Interpret seismic imagery and satellite data to identify geological features and assess potential drilling sites.":
            "Interpretieren Sie seismische Bilder und Satellitendaten, um geologische Merkmale zu identifizieren und potenzielle Bohrstandorte zu bewerten.",
          Annotations: "Anmerkungen",
          "Provide data labeling for AI models used in reservoir characterization, predictive maintenance, and operational optimization.":
            "Bieten Sie Datenkennzeichnung für KI-Modelle, die in der Reservoircharakterisierung, vorausschauender Wartung und Betriebsoptimierung verwendet werden.",
          "LiDAR Data Processing": "LiDAR-Datenverarbeitung",
          "Generate accurate 3D models of terrains and offshore platforms for planning and safety assessments.":
            "Erstellen Sie genaue 3D-Modelle von Gelände und Offshore-Plattformen für Planungs- und Sicherheitsbewertungen.",
          "Engineering Solutions": "Ingenieurlösungen",
          "Deliver expertise in petroleum engineering, infrastructure design, and process optimization.":
            "Bieten Sie Expertise in Petroleumingenieurwesen, Infrastrukturdesign und Prozessoptimierung.",
          Benefit: "Vorteil",
          "Exploration Enhancement": "Explorationsverbesserung",
          "Increase success rates in finding new reserves through advanced data analysis and modeling.":
            "Erhöhen Sie die Erfolgsraten bei der Entdeckung neuer Vorkommen durch fortschrittliche Datenanalyse und Modellierung.",
          "Operational Efficiency": "Betriebsoptimierung",
          "Optimize production processes and reduce downtime with predictive analytics and real-time monitoring.":
            "Optimieren Sie Produktionsprozesse und reduzieren Sie Ausfallzeiten mit vorausschauender Analyse und Echtzeitüberwachung.",
          "Risk Mitigation": "Risikominderung",
          "Identify and manage risks associated with exploration and production activities, including environmental and safety concerns.":
            "Identifizieren und managen Sie Risiken im Zusammenhang mit Explorations- und Produktionsaktivitäten, einschließlich Umwelt- und Sicherheitsbedenken.",
          "Regulatory Compliance": "Regulatorische Compliance",
          "Ensure adherence to industry regulations and environmental standards through comprehensive analysis and reporting.":
            "Stellen Sie die Einhaltung von Branchenvorschriften und Umweltstandards durch umfassende Analyse und Berichterstattung sicher.",

          // Industries - Smart Transportation & Logistics

          "Smart Transportation & Logistics":
            "Intelligente Transport- und Logistiklösungen",
          "At Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise to create intelligent, efficient, and sustainable transportation systems.":
            "Q-Gate Infotech revolutioniert den Transport- und Logistiksektor durch den Einsatz fortschrittlicher Geodaten-Technologien, Datenanalysen und Ingenieurkompetenz, um intelligente, effiziente und nachhaltige Verkehrssysteme zu schaffen.",
          "Learn More": "Mehr Erfahren",
          "Our Services Include": "Unsere Dienstleistungen umfassen",
          "GIS & Remote Sensing": "GIS & Fernerkundung",
          "Utilize spatial data to map transportation networks, analyze traffic patterns, and identify areas for improvement.":
            "Nutzen Sie räumliche Daten, um Verkehrsnetze zu kartieren, Verkehrsströme zu analysieren und Verbesserungsbereiche zu identifizieren.",
          "360-Degree Mobile Mapping & Analysis":
            "360-Grad-Mobilkartierung und Analyse",
          "Capture comprehensive street-level imagery using advanced mobile mapping systems to create accurate, up-to-date maps of roads and infrastructure.":
            "Erfassen Sie umfassende Straßenniveau-Bilder mit fortschrittlichen mobilen Kartierungssystemen, um genaue, aktuelle Karten von Straßen und Infrastruktur zu erstellen.",
          Annotations: "Anmerkungen",
          "Provide precise labeling of transportation data to train AI models for route optimization, autonomous vehicle navigation, and traffic management.":
            "Bieten Sie präzise Kennzeichnung von Transportdaten, um KI-Modelle für Routenoptimierung, autonome Fahrzeugnavigation und Verkehrsmanagement zu trainieren.",
          "LiDAR Data Processing": "LiDAR-Datenverarbeitung",
          "Create detailed 3D models of roadways, bridges, and tunnels to support infrastructure maintenance, safety assessments, and future planning.":
            "Erstellen Sie detaillierte 3D-Modelle von Straßen, Brücken und Tunneln, um die Infrastrukturwartung, Sicherheitsbewertungen und zukünftige Planungen zu unterstützen.",
          "Engineering Solutions": "Ingenieurlösungen",
          "Offer expertise in transportation engineering, including design, analysis, and optimization of transportation systems.":
            "Bieten Sie Expertise im Verkehrswesen, einschließlich Design, Analyse und Optimierung von Verkehrssystemen.",
          Benefit: "Vorteile",
          "Operational Efficiency": "Betriebseffizienz",
          "Optimize routes, reduce fuel consumption, and improve delivery times through advanced analytics and real-time data.":
            "Optimieren Sie Routen, reduzieren Sie den Kraftstoffverbrauch und verbessern Sie Lieferzeiten durch fortschrittliche Analysen und Echtzeitdaten.",
          "Enhanced Safety": "Erhöhte Sicherheit",
          "Identify and mitigate potential hazards by monitoring infrastructure conditions and traffic patterns.":
            "Identifizieren und mindern Sie potenzielle Gefahren durch Überwachung der Infrastrukturbedingungen und Verkehrsströme.",
          Innovation: "Innovation",
          "Support the development of autonomous vehicles and smart city initiatives through high-quality data and modeling.":
            "Unterstützen Sie die Entwicklung autonomer Fahrzeuge und Smart-City-Initiativen durch hochwertige Daten und Modellierung.",
          "Environmental Impact Reduction": "Umweltauswirkungen verringern",
          "Decrease emissions and congestion by optimizing logistics and promoting sustainable transportation practices.":
            "Reduzieren Sie Emissionen und Staus, indem Sie die Logistik optimieren und nachhaltige Transportpraktiken fördern.",

          //Industries - Main

          Agriculture: "Landwirtschaft",
          "Q-Gate Infotech offers innovative GIS and geospatial technologies to optimize agricultural practices and ensure sustainable resource management. We provide precision farming solutions that utilize spatial data for improved crop monitoring, soil health analysis, and resource management. Our services empower farmers, agribusinesses, and forestry managers to make data-driven decisions through advanced GIS-based insights. Whether it's mapping, vegetation analysis, or precision irrigation, we bring technology to the forefront of agriculture.":
            "Q-Gate Infotech bietet innovative GIS- und Geodaten-Technologien zur Optimierung landwirtschaftlicher Praktiken und zur Gewährleistung einer nachhaltigen Ressourcennutzung. Wir stellen Präzisionslandwirtschaftslösungen bereit, die räumliche Daten nutzen, um die Überwachung von Ernten, die Analyse der Bodenqualität und das Ressourcenmanagement zu verbessern. Unsere Dienstleistungen befähigen Landwirte, Agrarunternehmen und Forstmanager, datenbasierte Entscheidungen durch fortschrittliche GIS-gestützte Einblicke zu treffen. Ob Kartierung, Vegetationsanalyse oder Präzisionsbewässerung – wir bringen Technologie in den Vordergrund der Landwirtschaft.",
          "GIS Mapping & Analysis": "GIS-Kartierung und Analyse",
          "Remote Sensing & Imaging": "Fernerkundung und Bildgebung",
          "Precision Irrigation Solutions": "Präzisionsbewässerungslösungen",
          "Marine & Water Resource Management":
            "Marine- und Wasserressourcenmanagement",
          "Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments. We leverage GIS, satellite imagery, and advanced data analytics to help optimize water usage, monitor marine ecosystems, and manage resources sustainably. Our services empower stakeholders to make data-driven decisions for the protection of vital water bodies.":
            "Q-Gate Infotech bietet fortschrittliche geospatiale und ingenieurtechnische Lösungen zur Verbesserung des Marine- und Wasserressourcenmanagements. Unsere Expertise ermöglicht es Regierungen, Umweltagenturen und maritimen Industrien, aquatische Umwelten effektiv zu überwachen, zu verwalten und zu schützen. Wir nutzen GIS, Satellitenbilder und fortschrittliche Datenanalysen, um den Wasserverbrauch zu optimieren, marine Ökosysteme zu überwachen und Ressourcen nachhaltig zu verwalten. Unsere Dienstleistungen befähigen die Stakeholder, datengestützte Entscheidungen zum Schutz lebenswichtiger Gewässer zu treffen.",
          "Geospatial Data & Mapping": "Geospatiale Daten & Kartierung",
          "Marine Ecosystem Monitoring": "Überwachung mariner Ökosysteme",
          "Water Resource Management Solutions":
            "Lösungen für das Wassermanagement",
          "Infrastructure Development": "Infrastrukturausbau",
          "Revolutionize your business with advanced technology solutions. Our innovative approach integrates AI, data insights, and automation systems for seamless operations. We aim to enhance productivity by streamlining processes with cutting-edge tools. Our team specializes in delivering futuristic solutions tailored to industry needs. Stay ahead of the competition by leveraging our expertise in technology innovations.":
            "Revolutionieren Sie Ihr Unternehmen mit fortschrittlichen Technologielösungen. Unser innovativer Ansatz integriert KI, Datenanalysen und Automatisierungssysteme für reibungslose Abläufe. Wir zielen darauf ab, die Produktivität zu steigern, indem wir Prozesse mit modernsten Tools optimieren. Unser Team ist auf die Bereitstellung zukunftsweisender Lösungen spezialisiert, die auf die Bedürfnisse der Branche zugeschnitten sind. Bleiben Sie der Konkurrenz voraus, indem Sie unsere Expertise in Technologieinnovationen nutzen.",
          "AI Solutions": "KI-Lösungen",
          "Automation Systems": "Automatisierungssysteme",
          "Data Insights": "Datenanalysen",
          "Smart Transportation & Logistics":
            "Intelligente Verkehrssysteme & Logistik",
          "Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise. Our solutions enable intelligent, efficient, and sustainable transportation systems that ensure timely deliveries and optimized operations. From real-time tracking to predictive analytics, we empower businesses with tools to enhance operational transparency, reduce costs, and achieve their logistics goals effortlessly. Experience the future of logistics with smart, data-driven solutions designed to keep you ahead.":
            "Q-Gate Infotech revolutioniert die Verkehrs- und Logistikbranche, indem es fortschrittliche geospatiale Technologien, Datenanalysen und Ingenieurwissen nutzt. Unsere Lösungen ermöglichen intelligente, effiziente und nachhaltige Verkehrssysteme, die rechtzeitige Lieferungen und optimierte Abläufe gewährleisten. Von der Echtzeitverfolgung bis hin zu prädiktiven Analysen bieten wir Unternehmen Werkzeuge, um die betriebliche Transparenz zu verbessern, Kosten zu senken und ihre Logistikziele mühelos zu erreichen. Erleben Sie die Zukunft der Logistik mit intelligenten, datengestützten Lösungen, die darauf ausgelegt sind, Sie voranzubringen.",
          "Real-Time Tracking": "Echtzeitverfolgung",
          "Geospatial Insights": "Geospatiale Einblicke",
          "Automated Operations": "Automatisierte Abläufe",
          "Energy & Utilities": "Energie & Versorgungsunternehmen",
          "At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability, and drive technological advancement. Our services enable energy providers, utility companies, and government agencies to optimize operations and meet the growing demand for clean, reliable energy. From renewable energy systems to grid optimization, we help build smarter, greener energy networks for a sustainable future.":
            "Bei Q-Gate Infotech stärken wir den Energiesektor und Versorgungsunternehmen, indem wir innovative geospatiale und ingenieurtechnische Lösungen bereitstellen, die die Effizienz steigern, Nachhaltigkeit fördern und technologische Fortschritte vorantreiben. Unsere Dienstleistungen ermöglichen es Energieversorgern, Versorgungsunternehmen und Regierungsbehörden, die Abläufe zu optimieren und der wachsenden Nachfrage nach sauberer, zuverlässiger Energie gerecht zu werden. Von erneuerbaren Energiesystemen bis hin zur Netzoptimierung helfen wir dabei, intelligentere, grünere Energienetze für eine nachhaltige Zukunft aufzubauen.",
          "Renewable Energy Systems": "Erneuerbare Energiesysteme",
          "Grid Optimization": "Netzoptimierung",
          "Energy Efficiency Solutions": "Energieeffizienzlösungen",
          "Mining & Mineral Exploration": "Bergbau & Mineralexploration",
          "Q-Gate Infotech provides cutting-edge geospatial and data analytics solutions to the mining and mineral exploration industry, enabling companies to discover resources efficiently while minimizing environmental impact. Our expertise supports exploration, planning, and operational optimization, allowing companies to unlock the full potential of their mining projects. From resource mapping to geospatial analysis, we help you pave the way to smarter, more sustainable resource management.":
            "Q-Gate Infotech bietet fortschrittliche geospatiale und Datenanalyse-Lösungen für die Bergbau- und Mineralexplorationsbranche, die es Unternehmen ermöglichen, Ressourcen effizient zu entdecken und gleichzeitig die Umweltauswirkungen zu minimieren. Unsere Expertise unterstützt die Exploration, Planung und operative Optimierung, sodass Unternehmen das volle Potenzial ihrer Bergbauprojekte ausschöpfen können. Von der Ressourcenabbildung bis hin zur geospatialen Analyse helfen wir Ihnen, den Weg zu einem intelligenteren und nachhaltigeren Ressourcenmanagement zu ebnen.",
          "Resource Mapping": "Ressourcenabbildung",
          "Geospatial Solutions": "Geospatiale Lösungen",
          "Exploration Optimization": "Explorationsoptimierung",
          "Oil & Gas Industry": "Öl- & Gasindustrie",
          "At Q-Gate Infotech, we support the oil and gas industry with specialized geospatial, engineering, and data analytics services that enhance exploration, production, and asset management. Our solutions help companies navigate complex challenges, minimize risks, and optimize operations for greater efficiency in a competitive market. From reservoir management to pipeline monitoring, we bring strategic insights to your projects and ensure safe, sustainable operations.":
            "Bei Q-Gate Infotech unterstützen wir die Öl- und Gasindustrie mit spezialisierten geospatiale, ingenieurtechnischen und Datenanalyse-Dienstleistungen, die die Exploration, Produktion und Asset-Management verbessern. Unsere Lösungen helfen Unternehmen, komplexe Herausforderungen zu bewältigen, Risiken zu minimieren und die Betriebsabläufe für eine höhere Effizienz in einem wettbewerbsintensiven Markt zu optimieren. Von der Reservoir-Management bis hin zur Pipeline-Überwachung bringen wir strategische Einblicke in Ihre Projekte und gewährleisten sichere, nachhaltige Betriebsabläufe.",
          "Reservoir Management": "Reservoir-Management",
          "Pipeline Monitoring": "Pipeline-Überwachung",
          "Operational Optimization": "Betriebsoptimierung",
          Education: "Bildung",
          "Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs. We aim to build capacity in cutting-edge technologies, nurture talent, and bridge the gap between academia and industry. Our innovative EdTech solutions enhance learning experiences, streamline administrative tasks, and promote creativity and collaboration. Join us in shaping the future of education and professional development through smarter, more accessible solutions.":
            "Q-Gate Infotech engagiert sich für die Förderung von Bildung und beruflicher Weiterentwicklung, indem es umfassende Schulungs- und Entwicklungsprogramme bereitstellt. Unser Ziel ist es, Kapazitäten in modernen Technologien aufzubauen, Talente zu fördern und die Lücke zwischen Akademia und Industrie zu überbrücken. Unsere innovativen EdTech-Lösungen verbessern das Lernerlebnis, optimieren administrative Aufgaben und fördern Kreativität und Zusammenarbeit. Schließen Sie sich uns an, um die Zukunft der Bildung und beruflichen Entwicklung durch intelligentere, zugänglichere Lösungen zu gestalten.",
          "Training Programs": "Schulungsprogramme",
          "EdTech Platforms": "EdTech-Plattformen",
          "Skill Development": "Fähigkeitenentwicklung",
          "What We Do...!": "Was wir tun...!",
          Industries: "Branchen",
          "Q-Gate Infotech Private Limited / Industries":
            "Q-Gate Infotech Private Limited / Branchen",

          // Service - Main
          Services: "Dienstleistungen",
          "Plan, design, build, and manage your assets better with us":
            "Planen, entwerfen, bauen und verwalten Sie Ihre Ressourcen besser mit uns",
          "Geospatial Services": "Geodaten-Dienstleistungen",
          "Geospatial Processing services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency.":
            "Geodatenverarbeitungsdienste verwandeln komplexe räumliche Daten in umsetzbare Erkenntnisse, die die strategische Planung und betriebliche Effizienz fördern.",
          "Image Data Processing": "Bilddatenverarbeitung",
          "Satellite Data Analysis": "Satellitendatenanalyse",
          "Hydro Flattening": "Hydroglättung",
          "Vegetation Analysis": "Vegetationsanalyse",
          "Software Development": "Softwareentwicklung",
          "Our Software Development services are designed to create custom solutions that address your specific challenges and objectives.":
            "Unsere Softwareentwicklungsdienste sind darauf ausgelegt, maßgeschneiderte Lösungen zu erstellen, die Ihre spezifischen Herausforderungen und Ziele adressieren.",
          "Custom Software Development": "Maßgeschneiderte Softwareentwicklung",
          "Enterprise Management Solutions":
            "Lösungen für das Unternehmensmanagement",
          "Web & Mobile Application Development":
            "Entwicklung von Web- und mobilen Anwendungen",
          "Data Analytics": "Datenanalyse",
          "Data Analytics services empower organizations to transform vast amounts of complex data into actionable intelligence. Leveraging advanced algorithms and machine learning techniques.":
            "Datenanalysedienste ermöglichen es Unternehmen, riesige Mengen komplexer Daten in umsetzbare Erkenntnisse zu verwandeln, indem sie fortschrittliche Algorithmen und maschinelles Lernen nutzen.",
          "Advanced Imagery Analytics": "Erweiterte Bildanalyse",
          "Spectral Analysis": "Spektralanalyse",
          "Computer Vision Applications": "Anwendungen der Computer Vision",
          "Engineering Solutions": "Ingenieurlösungen",
          "Engineering Solutions merge cutting-edge technology with engineering expertise to support the design, development, and optimization of infrastructure and industrial projects.":
            "Ingenieurlösungen verbinden modernste Technologie mit Ingenieurkompetenz, um die Planung, Entwicklung und Optimierung von Infrastruktur- und Industrieprojekten zu unterstützen.",
          BIM: "BIM",
          "Reverse Engineering": "Reverse Engineering",
          "Engineering Consultancy": "Ingenieurberatung",
          "Cloud-Based AI/ML Solutions": "Cloud-basierte KI/ML-Lösungen",
          "We leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward.":
            "Wir nutzen die Synergie aus Cloud-Computing und fortschrittlichen KI- (künstliche Intelligenz) und ML- (maschinelles Lernen) Algorithmen, um intelligente Lösungen zu entwickeln, die Unternehmen voranbringen.",
          "Development of Intelligent Applications":
            "Entwicklung intelligenter Anwendungen",
          "Integration with Geospatial Data": "Integration mit Geodaten",
          "Scalable Cloud Infrastructure": "Skalierbare Cloud-Infrastruktur",
          "Customized AI Models": "Angepasste KI-Modelle",
          "Content Annotation": "Inhaltsannotation",
          "Our Content Annotation services provide meticulous labeling of diverse data types, enabling your AI applications to perform with greater accuracy and efficiency.":
            "Unsere Inhaltsannotationsdienste bieten eine sorgfältige Kennzeichnung verschiedener Datentypen, wodurch Ihre KI-Anwendungen mit größerer Genauigkeit und Effizienz arbeiten können.",
          "Image, Video, and Text Annotation":
            "Bild-, Video- und Textannotation",
          "Point Cloud Annotation": "Punktwolkenannotation",
          "Object Detection and Semantic Segmentation":
            "Objekterkennung und semantische Segmentierung",
          "Professional Training": "Professionelle Schulung",
          "Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology.":
            "Unsere professionellen Schulungsdienste sollen Einzelpersonen, insbesondere frischen Absolventen und Menschen aus ländlichen Gemeinden, befähigen, wertvolle Fähigkeiten zu entwickeln und erfolgreiche Karrieren in der Technologie aufzubauen.",
          "On-the-Job Training Programs":
            "Berufsbegleitende Ausbildungsprogramme",
          "Internships with Stipends": "Praktika mit Stipendien",
          "Collaborations with Educational Institutions":
            "Zusammenarbeit mit Bildungseinrichtungen",
          "Talent Solutions": "Talentsuchlösungen",
          "Our Talent Solutions service provides access to a diverse pool of highly skilled professionals across various domains, enabling your business to meet its objectives effectively.":
            "Unser Talentsuchdienst bietet Zugang zu einem vielfältigen Pool hochqualifizierter Fachkräfte aus verschiedenen Bereichen, damit Ihr Unternehmen seine Ziele effektiv erreichen kann.",
          "Staff Augmentation": "Personalverstärkung",
          "Dedicated Project Teams": "Engagierte Projektteams",
          "Flexible Engagement Models": "Flexible Engagement-Modelle",
          "Quality Assurance and Compliance":
            "Qualitätssicherung und Compliance",
          "Q-Gate Infotech Private Limited / Services":
            "Q-Gate Infotech Private Limited / Dienstleistungen",

          // Contact - Main

          Contact: "Kontakt",
          "Q-Gate Infotech Private Limited / contact":
            "Q-Gate Infotech Private Limited / Kontakt",
          "We'd love to hear from you! Reach out with any questions or feedback.":
            "Wir würden gerne von Ihnen hören! Melden Sie sich bei Fragen oder Feedback.",
          "Our team is here to assist you. Let’s connect!":
            "Unser Team ist hier, um Ihnen zu helfen. Lassen Sie uns verbinden!",
          "Bangalore, India": "München, Deutschland",
          "Full Name": "Vollständiger Name",
          "Phone Number": "Telefonnummer",
          "Your Email": "Ihre E-Mail",
          "Your Message": "Ihre Nachricht",
          "Send Message": "Nachricht senden",
          "Contact Us": "Kontaktieren Sie uns",
          "Contact Info": "Kontaktinformationen",
          Address: "Adresse",

          //Blogs

          "Geospatial Data Analysis for Environmental Monitoring":
            "Geodatenanalyse für Umweltüberwachung",
          "Explore how geospatial data analysis is used to monitor and protect the environment. Learn about the latest tools and techniques in this field.":
            "Erfahren Sie, wie die Analyse von Geodaten zur Überwachung und zum Schutz der Umwelt eingesetzt wird. Lernen Sie die neuesten Werkzeuge und Techniken in diesem Bereich kennen.",
          "Remote Sensing Applications in Agriculture":
            "Fernerkundungsanwendungen in der Landwirtschaft",
          "Discover the applications of remote sensing in agriculture. Understand how satellite imagery helps in crop monitoring and yield prediction.":
            "Entdecken Sie die Anwendungen der Fernerkundung in der Landwirtschaft. Verstehen Sie, wie Satellitenbilder bei der Überwachung von Kulturen und der Ertragsprognose helfen.",
          "GIS in Urban Planning and Development":
            "GIS in der Stadtplanung und -entwicklung",
          "Learn about the role of Geographic Information Systems (GIS) in urban planning. See how GIS technology aids in sustainable city development.":
            "Erfahren Sie mehr über die Rolle von Geoinformationssystemen (GIS) in der Stadtplanung. Sehen Sie, wie GIS-Technologie die nachhaltige Stadtentwicklung unterstützt.",
          "Satellite Imagery Processing Techniques":
            "Verarbeitungstechniken für Satellitenbilder",
          "Understand the techniques used in processing satellite imagery. Gain insights into the methods for enhancing and analyzing satellite data.":
            "Verstehen Sie die Techniken, die bei der Verarbeitung von Satellitenbildern verwendet werden. Erhalten Sie Einblicke in Methoden zur Verbesserung und Analyse von Satellitendaten.",
          "Integration of AI in Geospatial Technologies":
            "Integration von KI in Geotechnologien",
          "Explore the integration of Artificial Intelligence (AI) in geospatial technologies. Learn how AI is revolutionizing geospatial data analysis.":
            "Erkunden Sie die Integration von künstlicher Intelligenz (KI) in Geotechnologien. Erfahren Sie, wie KI die Analyse von Geodaten revolutioniert.",
          "Climate Change Modeling using Geospatial Data":
            "Klimawandelmodellierung mit Geodaten",
          "Discover how geospatial data is used in climate change modeling. Understand the impact of geospatial analysis on climate research.":
            "Entdecken Sie, wie Geodaten in der Klimawandelmodellierung verwendet werden. Verstehen Sie die Auswirkungen der Geodatenanalyse auf die Klimaforschung.",
          "Handling Big Data in Geospatial Analysis":
            "Umgang mit Big Data in der Geodatenanalyse",
          "Learn about the challenges and solutions in handling big data in geospatial analysis. See how big data technologies are applied in this field.":
            "Erfahren Sie mehr über die Herausforderungen und Lösungen im Umgang mit Big Data in der Geodatenanalyse. Sehen Sie, wie Big-Data-Technologien in diesem Bereich angewendet werden.",
          "Advancements in 3D Mapping Technologies":
            "Fortschritte in der 3D-Kartierungstechnologie",
          "Explore the latest advancements in 3D mapping technologies. Understand how 3D mapping is transforming various industries.":
            "Erkunden Sie die neuesten Fortschritte in der 3D-Kartierungstechnologie. Verstehen Sie, wie die 3D-Kartierung verschiedene Branchen transformiert.",
          "Innovative Geospatial Data Visualization Techniques":
            "Innovative Techniken zur Visualisierung von Geodaten",
          "Discover innovative techniques for visualizing geospatial data. Learn how effective visualization enhances data interpretation and decision-making.":
            "Entdecken Sie innovative Techniken zur Visualisierung von Geodaten. Lernen Sie, wie effektive Visualisierung die Dateninterpretation und Entscheidungsfindung verbessert.",

          // MainSection

          "At Q-Gate Infotech, we drive environmental sustainability through innovative spatial data processing. Leveraging advanced AI and cloud-based technologies, we specialize in geospatial and LiDAR data processing to enhance climate action and disaster management.":
            "Bei Q-Gate Infotech fördern wir die ökologische Nachhaltigkeit durch innovative räumliche Datenverarbeitung. Durch den Einsatz fortschrittlicher KI- und Cloud-Technologien sind wir auf die Verarbeitung von Geodaten und LiDAR-Daten spezialisiert, um Klimaschutzmaßnahmen und Katastrophenmanagement zu verbessern.",
          "Mapping the Future:": "Die Zukunft kartieren:",
          "Innovative Geospatial Solutions for a Connected World":
            "Innovative geospatiale Lösungen für eine vernetzte Welt",
          "Where Q-Gate Works": "Wo Q-Gate arbeitet",
          "Designed with City Planners in mind, Q-Gate empowers various industries to achieve more.":
            "Mit Blick auf Stadtplaner entwickelt, befähigt Q-Gate verschiedene Branchen, mehr zu erreichen.",
          "MARINE & WATER RESOURCE MANAGEMENT":
            "MARITIME & WASSERRESSOURCENMANAGEMENT",
          "INFRASTRUCTURE DEVELOPMENT": "INFRSTRUKTURENTWICKLUNG",
          "SMART TRANSPORTATION & LOGISTICS":
            "INTELLIGENTE TRANSPORT- UND LOGISTIKLÖSUNGEN",
          "ENERGY & UTILITIES": "ENERGIE & VERSORGUNGSUNTERNEHMEN",
          "MINING & MINERAL EXPLORATION": "BERGBAU & MINERALEXPLORATION",
          "OIL & GAS INDUSTRY": "ÖL- UND GASINDUSTRIE",
          EDUCATION: "BILDUNG",
          "Accelerate your environmental reporting and compliance efforts with Earth Blox.":
            "Beschleunigen Sie Ihre Umweltberichterstattung und Compliance-Bemühungen mit Earth Blox.",
          "Get Started": "Loslegen",
          "Our team at Q - Gate is dedicated to providing the best geospatial solutions. We have a passion for innovation and a commitment to excellence that drives us to constantly improve and evolve our services":"Unser Team bei Q-Gate ist darauf bedacht, die besten geospatialen Lösungen anzubieten. Wir haben eine Leidenschaft für Innovation und ein Engagement für Exzellenz, das uns dazu treibt, unsere Dienstleistungen ständig zu verbessern und weiterzuentwickeln.",
          "At Q - Gate, we believe in the power of maps to change the world. Our mission is to make geospatial technology accessible and useful for everyone, and we are proud of the impact we have made so far.":"Bei Q-Gate glauben wir an die Kraft von Karten, die Welt zu verändern. Unsere Mission ist es, geospatiale Technologie für jeden zugänglich und nützlich zu machen, und wir sind stolz auf die Auswirkungen, die wir bisher erzielt haben.",
          "As the Founder and Director of Q-Gate Infotech, I lead a dynamic team that delivers innovative geospatial solutions integrated with AI/ML technologies. My goal has been to revolutionize the way organizations approach Data processing, that includes Disaster Management, Utility, Urban and Rural planning to Environmental Sustainability.":"Als Gründer und Direktor von Q-Gate Infotech leite ich ein dynamisches Team, das innovative geospatiale Lösungen integriert mit KI/ML-Technologien liefert. Mein Ziel war es, die Art und Weise zu revolutionieren, wie Organisationen die Datenverarbeitung angehen, einschließlich Katastrophenmanagement, Versorgungswirtschaft, Stadt- und Landplanung sowie Umwelt-Nachhaltigkeit.",
          "Director Finance":"Direktor Finanzen",
        },
      },
    },
    fallbackLng: "EN", // Fallback language
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
  });

export default i18n;
