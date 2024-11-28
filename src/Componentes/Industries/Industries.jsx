import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Icon,
  HStack,
} from "@chakra-ui/react";
import {
  FaCogs,
  FaNetworkWired,
  FaTools,
  FaChartLine,
  FaLightbulb,
  FaTruck,
  FaBatteryFull,
  FaMapMarkedAlt,
  FaWater,
  FaSearch,
  FaChalkboardTeacher,
  FaHardHat,
  FaCog,
  FaOilCan,
  FaSatellite,
  FaCloud,
  FaGraduationCap,
  FaTint,
} from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const sections = [
    {
      title: t("Agriculture"),
      description: t("Q-Gate Infotech offers innovative GIS and geospatial technologies to optimize agricultural practices and ensure sustainable resource management. We provide precision farming solutions that utilize spatial data for improved crop monitoring, soil health analysis, and resource management. Our services empower farmers, agribusinesses, and forestry managers to make data-driven decisions through advanced GIS-based insights. Whether it's mapping, vegetation analysis, or precision irrigation, we bring technology to the forefront of agriculture."),
      icons: [
        { icon: FaMapMarkedAlt, text: t("GIS Mapping & Analysis") },
        { icon: FaSatellite, text: t("Remote Sensing & Imaging") },
        { icon: FaTint, text: t("Precision Irrigation Solutions") },
      ],
      image: "src\\Componentes\\Image\\Industries\\Industrie - Main\\Agriculture.jpg",
    },

    {
      title: t("Marine & Water Resource Management"),
      description: t("Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments. We leverage GIS, satellite imagery, and advanced data analytics to help optimize water usage, monitor marine ecosystems, and manage resources sustainably. Our services empower stakeholders to make data-driven decisions for the protection of vital water bodies."),
      icons: [
        { icon: FaMapMarkedAlt, text: t("Geospatial Data & Mapping") },
        { icon: FaWater, text: t("Marine Ecosystem Monitoring") },
        { icon: FaCloud, text: t("Water Resource Management Solutions") },
      ],
      image: "src\\Componentes\\Image\\Industries\\Industrie - Main\\Marine & Water Resource Management.jpg",
    },

    {
      title: t("Infrastructure Development"),
      description: t("Revolutionize your business with advanced technology solutions. Our innovative approach integrates AI, data insights, and automation systems for seamless operations. We aim to enhance productivity by streamlining processes with cutting-edge tools. Our team specializes in delivering futuristic solutions tailored to industry needs. Stay ahead of the competition by leveraging our expertise in technology innovations."),
      icons: [
        { icon: FaLightbulb, text: t("AI Solutions") },
        { icon: FaCogs, text: t("Automation Systems") },
        { icon: FaChartLine, text: t("Data Insights") },
      ],
      image: "src\\Componentes\\Image\\Industries\\Industrie - Main\\Infrastructure Development.jpg",
    },
    {
      title: t("Smart Transportation & Logistics"),
      description: t("Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise. Our solutions enable intelligent, efficient, and sustainable transportation systems that ensure timely deliveries and optimized operations. From real-time tracking to predictive analytics, we empower businesses with tools to enhance operational transparency, reduce costs, and achieve their logistics goals effortlessly. Experience the future of logistics with smart, data-driven solutions designed to keep you ahead."),
      icons: [
        { icon: FaTruck, text: t("Real-Time Tracking") },
        { icon: FaMapMarkedAlt, text: t("Geospatial Insights") },
        { icon: FaCogs, text: t("Automated Operations") },
      ],
      image: "src\\Componentes\\Image\\Industries\\Industrie - Main\\Smart Transportation And Logistics.jpg",
    },
    
    {
      title: t("Energy & Utilities"),
      description: t("At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability, and drive technological advancement. Our services enable energy providers, utility companies, and government agencies to optimize operations and meet the growing demand for clean, reliable energy. From renewable energy systems to grid optimization, we help build smarter, greener energy networks for a sustainable future."),
      icons: [
        { icon: FaBatteryFull, text: t("Renewable Energy Systems") },
        { icon: FaNetworkWired, text: t("Grid Optimization") },
        { icon: FaLightbulb, text: t("Energy Efficiency Solutions") },
      ],
      image: "src\\Componentes\\Image\\Industries\\Industrie - Main\\Energy & Utilities.jpg",
    },
    
    {
      title: t("Mining & Mineral Exploration"),
      description: t("Q-Gate Infotech provides cutting-edge geospatial and data analytics solutions to the mining and mineral exploration industry, enabling companies to discover resources efficiently while minimizing environmental impact. Our expertise supports exploration, planning, and operational optimization, allowing companies to unlock the full potential of their mining projects. From resource mapping to geospatial analysis, we help you pave the way to smarter, more sustainable resource management."),
      icons: [
        { icon: FaHardHat, text: t("Resource Mapping") },
        { icon: FaTools, text: t("Geospatial Solutions") },
        { icon: FaSearch, text: t("Exploration Optimization") },
      ],
      image: "src\\Componentes\\Image\\Industries\\Industrie - Main\\Mining & Mineral Exploration.jpg",
    },
    {
      title: t("Oil & Gas Industry"),
      description: t("At Q-Gate Infotech, we support the oil and gas industry with specialized geospatial, engineering, and data analytics services that enhance exploration, production, and asset management. Our solutions help companies navigate complex challenges, minimize risks, and optimize operations for greater efficiency in a competitive market. From reservoir management to pipeline monitoring, we bring strategic insights to your projects and ensure safe, sustainable operations."),
      icons: [
        { icon: FaOilCan, text: t("Reservoir Management") },
        { icon: FaNetworkWired, text: t("Pipeline Monitoring") },
        { icon: FaCog, text: t("Operational Optimization") },
      ],
      image: "src\\Componentes\\Image\\Industries\\Industrie - Main\\Oil & Gas Industry.jpg",
    },
    
    {
      title: t("Education"),
      description: t("Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs. We aim to build capacity in cutting-edge technologies, nurture talent, and bridge the gap between academia and industry. Our innovative EdTech solutions enhance learning experiences, streamline administrative tasks, and promote creativity and collaboration. Join us in shaping the future of education and professional development through smarter, more accessible solutions."),
      icons: [
        { icon: FaGraduationCap, text: t("Training Programs") },
        { icon: FaLightbulb, text: t("EdTech Platforms") },
        { icon: FaChalkboardTeacher, text: t("Skill Development") },
      ],
      image: "src\\Componentes\\Image\\Industries\\Industrie - Main\\Education.jpg",
    }
    
  ];

  return (
    <>
      <Header />
      <Box>
        <Box position="relative">
          {/* Video Section */}
          <Box
            as="video"
            src="src\Componentes\Video\Industries.mp4" // Path to your video file
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            height="92vh"
            objectFit="cover"
            style={{ display: "block" }}
          />
          {/* Overlay Section */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            bg="blackAlpha.500" // Optional: Add a translucent background
          >
            <Text fontSize="4xl" fontWeight="bold">
            {t("Industries")}
          </Text>
          <Text fontSize="lg">{t("Q-Gate Infotech Private Limited / Industries")}</Text>
          </Box>
        </Box>
      </Box>

      <Container maxW="container.lg" p={8}>
        <Heading as="h1" size="2xl" textAlign="center" color="green.700" mb={20}>
          {t("What We Do...!")}
        </Heading>
        {sections.map((section, index) => (
          <Flex
            key={index}
            direction={{
              base: "column",
              md: index % 2 === 0 ? "row-reverse" : "row",
            }}
            mb={100} // Adds spacing between each section
            gap={8}
            align="center" // Aligns the content vertically centered
          >
            {/* Left Image Box with Blue Background */}
            <Box
              flex="1"
              position="relative"
              maxW="md"
              mx="auto"
              height="300px"
            >
              <Box
                position="absolute"
                top="0"
                left="0"
                width="full"
                height="full"
                bg="blue.900"
                transform="rotate(4deg)"
                zIndex="-1"
              />
              <img
                src={section.image}
                alt={section.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "md",
                }}
              />
            </Box>
            {/* Right Content Box */}
            <Box flex="1">
              <Heading as="h2" size="lg" color="blue.900" mb={4}>
                {section.title}
              </Heading>
              <Text mb={4}>{section.description}</Text>
              <HStack spacing={4} wrap="wrap" mb={4}>
                {section.icons.map((item, idx) => (
                  <Flex key={idx} align="center">
                    <Icon as={item.icon} color="green" boxSize={6} mr={2} />
                    <Text>{item.text}</Text>
                  </Flex>
                ))}
              </HStack>
              <Button
                bg="blue.900"
                color="white"
                variant="solid"
                size="md"
                _hover={{ bg: "blue.800" }}
              >
                {t("Learn More")}
              </Button>
            </Box>
          </Flex>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default App;
