import React, { useRef } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  Image,
  VStack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

const App = () => {
  const servicesRef = useRef(null);
  const { t } = useTranslation();

  const handleScrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <ChakraProvider>
        <Box>
          {/* Hero Section with Video */}
          <Box position="relative">
            {/* Video Background */}
            <video
              src="src\Componentes\Video\EnergyAndUtilities.mp4"
              autoPlay
              loop
              muted
              style={{
                width: "100%",
                height: "92vh",
                objectFit: "cover",
              }}
            />
            {/* Overlay Content */}
            <Box
              position="absolute"
              bottom="0"
              right="16"
              bg="white"
              p={6}
              m={4}
              maxWidth="640px"
              boxShadow="md"
            >
              <Heading as="h1" size="xl" mb={4}>
                {t("Energy and Utilities")}
              </Heading>
              <Text mb={4}>
                {t("At Q-Gate Infotech, we empower the energy and utilities sector by providing innovative geospatial and engineering solutions that enhance efficiency, promote sustainability, and drive technological advancement. Our services enable energy providers, utility companies, and government agencies to optimize operations and meet the growing demand for clean, reliable energy.")}{" "}
              </Text>
              <Button
                colorScheme="yellow"
                mt={4}
                onClick={handleScrollToServices}
              >
                {t("Learn More")}
              </Button>
            </Box>
          </Box>

          {/* Services Section */}
          <Box ref={servicesRef} bg="white" p={4} maxW="6xl" mx="auto" mt={8}>
            {/* First Section */}
            <Box mb={8} />

            {/* Second Section */}
            <Flex
              direction={{ base: "column", md: "row" }}
              alignItems="center"
              mb={8}
            >
              <Box flex="1" p={4}>
                <Heading as="h2" size="lg" color="blue.900">
                  {t("Our Services Include")}
                </Heading>
                <VStack align="start" spacing={2} mt={2}>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      {t("GIS & Remote Sensing")}:
                    </Text>
                        {t("Analyze spatial data for resource exploration, site selection, and infrastructure planning, ensuring optimal placement of energy facilities such as wind farms, solar arrays, and power plants.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Image Processing")}:
                    </Text>
                        {t("Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.  ")}                
                    </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Annotations")}:
                    </Text>
                    {t("Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("LiDAR Data Processing")}:
                    </Text>
                    {t("Generate accurate 3D models of terrain and infrastructure for designing transmission lines, pipelines, and utility networks.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Engineering Solutions")}:
                    </Text>
                    {t("Offer expertise in electrical and civil engineering to support grid modernization, renewable energy integration, and infrastructure upgrades.")}
                  </Text>
                </VStack>
              </Box>
              <Box flex="1" p={4}>
                <Image
                  src="src\Componentes\Image\EnergyAndUtilities - Main.jpg"
                  alt="A worker in safety gear using augmented reality technology"
                  w="full"
                  h="auto"
                />
              </Box>
            </Flex>

            {/* Third Section */}
            <Flex
              direction={{ base: "column", md: "row" }}
              alignItems="center"
              mb={8}
            >
              <Box flex="1" p={4}>
                <Heading as="h2" size="lg" color="blue.900">
                {t("Benefit")}
                </Heading>
                <VStack align="start" spacing={2} mt={2}>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Operational Efficiency")}:
                    </Text>
                    {t("Optimize energy production and distribution through precise data analysis and modeling.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Sustainability")}:
                    </Text>
                    {t("Facilitate the transition to renewable energy sources by identifying optimal sites and integrating clean energy into existing grids.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Reliability")}:
                    </Text>
                    {t("Enhance infrastructure resilience and reduce downtime through predictive maintenance and real-time monitoring.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Regulatory Compliance")}:
                    </Text>
                    {t("Ensure adherence to environmental regulations and safety standards through thorough analysis and reporting.")}
                  </Text>
                </VStack>
              </Box>
              <Box flex="1" p={4}>
                <Image
                  src="src\Componentes\Image\EnergyAndUtilities 2 -Main.jpg"
                  alt="A worker in safety gear using augmented reality technology"
                  w="full"
                  h="auto"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </ChakraProvider>
      <Footer />
    </>
  );
};

export default App;
