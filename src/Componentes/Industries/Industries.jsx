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
import Footer from "../Footer/footer";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  const sections = [
    {
      title: t("Agriculture"),
      description: t(
        "Q-Gate Infotech offers innovative GIS and geospatial technologies to optimize agricultural practices and ensure sustainable resource management..."
      ),
      icons: [
        { icon: FaMapMarkedAlt, text: t("GIS Mapping & Analysis") },
        { icon: FaSatellite, text: t("Remote Sensing & Imaging") },
        { icon: FaTint, text: t("Precision Irrigation Solutions") },
      ],
      image:
        "src\\Componentes\\Image\\Industries\\Industrie - Main\\Agriculture.jpg",
      link: "/agriculture",
    },
    {
      title: t("Marine & Water Resource Management"),
      description: t(
        "Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management..."
      ),
      icons: [
        { icon: FaMapMarkedAlt, text: t("Geospatial Data & Mapping") },
        { icon: FaWater, text: t("Marine Ecosystem Monitoring") },
        { icon: FaCloud, text: t("Water Resource Management Solutions") },
      ],
      image:
        "src\\Componentes\\Image\\Industries\\Industrie - Main\\Marine & Water Resource Management.jpg",
      link: "/marine-water-resources",
    },
    {
      title: t("Mining & Mineral Exploration"),
      description: t(
        "Discover untapped potential with Q-Gate Infotech's expertise in mining and mineral exploration. We provide advanced geospatial technologies, 3D modeling, and geological data analysis to optimize resource extraction, streamline operations, and ensure sustainability. Our innovative solutions empower mining companies to reduce costs, increase efficiency, and improve decision-making through actionable insights and precise data."
      ),
      icons: [
        { icon: FaSearch, text: t("Geological Data Analysis") },
        { icon: FaHardHat, text: t("Resource Management") },
        { icon: FaTools, text: t("Sustainable Mining Practices") },
      ],
      image:
        "src\\Componentes\\Image\\Industries\\Industrie - Main\\Mining & Mineral Exploration.jpg",
      link: "/mining-exploration",
    },
    {
      title: t("Oil & Gas Industry"),
      description: t(
        "Q-Gate Infotech delivers cutting-edge solutions for the oil and gas sector, leveraging geospatial technologies and advanced data analytics to optimize exploration, production, and distribution. Our expertise ensures improved operational efficiency, safety, and sustainability. From pipeline monitoring to resource management, we provide tailored solutions to meet the challenges of the ever-evolving oil and gas industry."
      ),
      icons: [
        { icon: FaOilCan, text: t("Pipeline Monitoring") },
        { icon: FaCog, text: t("Resource Optimization") },
        { icon: FaChartLine, text: t("Predictive Analytics") },
      ],
      image:
        "src\\Componentes\\Image\\Industries\\Industrie - Main\\Oil & Gas Industry.jpg",
      link: "/oil-gas-industry",
    },
    {
      title: t("Infrastructure Development"),
      description: t(
        "Revolutionize your business with advanced technology solutions. Our innovative approach integrates AI, data insights, and automation systems for seamless operations..."
      ),
      icons: [
        { icon: FaLightbulb, text: t("AI Solutions") },
        { icon: FaCogs, text: t("Automation Systems") },
        { icon: FaChartLine, text: t("Data Insights") },
      ],
      image:
        "src\\Componentes\\Image\\Industries\\Industrie - Main\\Infrastructure Development.jpg",
      link: "/infrastructure-development",
    },
    {
      title: t("Smart Transportation & Logistics"),
      description: t(
        "Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise..."
      ),
      icons: [
        { icon: FaTruck, text: t("Real-Time Tracking") },
        { icon: FaMapMarkedAlt, text: t("Geospatial Insights") },
        { icon: FaCogs, text: t("Automated Operations") },
      ],
      image:
        "src\\Componentes\\Image\\Industries\\Industrie - Main\\Smart Transportation And Logistics.jpg",
      link: "/transportation-logistics",
    },
    {
      title: t("Energy & Utilities"),
      description: t(
        "At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability..."
      ),
      icons: [
        { icon: FaBatteryFull, text: t("Renewable Energy Systems") },
        { icon: FaNetworkWired, text: t("Grid Optimization") },
        { icon: FaLightbulb, text: t("Energy Efficiency Solutions") },
      ],
      image:
        "src\\Componentes\\Image\\Industries\\Industrie - Main\\Energy & Utilities.jpg",
      link: "/energy-utilities",
    },
    {
      title: t("Education"),
      description: t(
        "Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs..."
      ),
      icons: [
        { icon: FaGraduationCap, text: t("Training Programs") },
        { icon: FaLightbulb, text: t("EdTech Platforms") },
        { icon: FaChalkboardTeacher, text: t("Skill Development") },
      ],
      image:
        "src\\Componentes\\Image\\Industries\\Industrie - Main\\Education.jpg",
      link: "/education",
    },
  ];

  return (
    <>
      <Header />
      <Box>
        <Box position="relative">
          <Box
            as="video"
            src="src\\Componentes\\Video\\Industries.mp4"
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            height="92vh"
            objectFit="cover"
            style={{ display: "block" }}
          />
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
            bg="blackAlpha.500"
          >
            <Text fontSize="4xl" fontWeight="bold">
              {t("Industries")}
            </Text>
            <Text fontSize="lg">
              {t("Q-Gate Infotech Private Limited / Industries")}
            </Text>
          </Box>
        </Box>
      </Box>

      <Container maxW="container.lg" p={8}>
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          color="green.700"
          mb={20}
        >
          {t("What We Do...!")}
        </Heading>
        {sections.map((section, index) => (
          <Flex
            key={index}
            direction={{
              base: "column",
              md: index % 2 === 0 ? "row-reverse" : "row",
            }}
            mb={100}
            gap={8}
            align="center"
          >
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
                as="a"
                href={section.link}
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
