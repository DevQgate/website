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

const App = () => {
  const servicesRef = useRef(null);

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
                Energy and Utilities
              </Heading>
              <Text mb={4}>
                At Q-Gate Infotech, we empower the energy and utilities sector
                by providing innovative geospatial and engineering solutions
                that enhance efficiency, promote sustainability, and drive
                technological advancement. Our services enable energy providers,
                utility companies, and government agencies to optimize
                operations and meet the growing demand for clean, reliable
                energy.{" "}
              </Text>
              <Button
                colorScheme="yellow"
                mt={4}
                onClick={handleScrollToServices}
              >
                Learn More
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
                  Our Services Include
                </Heading>
                <VStack align="start" spacing={2} mt={2}>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      GIS & Remote Sensing:
                    </Text>
                        Analyze spatial data for resource exploration, site selection, and infrastructure planning, ensuring optimal placement of energy facilities such as wind farms, solar arrays, and power plants.
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      Image Processing:
                    </Text>
                        Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      Annotations:
                    </Text>
                        Provide detailed data labeling to train AI models for predictive maintenance, fault detection, and energy demand forecasting.
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      LiDAR Data Processing:
                    </Text>
                        Generate accurate 3D models of terrain and infrastructure for designing transmission lines, pipelines, and utility networks.
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      Engineering Solutions:
                    </Text>
                        Offer expertise in electrical and civil engineering to support grid modernization, renewable energy integration, and infrastructure upgrades.
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
                  Benefit
                </Heading>
                <VStack align="start" spacing={2} mt={2}>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      Operational Efficiency:
                    </Text>
                        Optimize energy production and distribution through precise data analysis and modeling.
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      Sustainability:
                    </Text>
                        Facilitate the transition to renewable energy sources by identifying optimal sites and integrating clean energy into existing grids.
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      Reliability:
                    </Text>
                        Enhance infrastructure resilience and reduce downtime through predictive maintenance and real-time monitoring.
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      Regulatory Compliance:
                    </Text>
                        Ensure adherence to environmental regulations and safety standards through thorough analysis and reporting.
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
