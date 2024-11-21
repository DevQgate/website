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
    <Header/>
    <ChakraProvider>
      <Box>
        {/* Hero Section with Video */}
        <Box position="relative">
          {/* Video Background */}
          <video
            src="src\Componentes\Video\SmartTransporatation.mp4"
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
            Smart Transportation & Logistics
            </Heading>
            <Text mb={4}>
            At Q-Gate Infotech revolutionizes the transportation and logistics sectors by leveraging advanced geospatial technologies, data analytics, and engineering expertise to create intelligent, efficient, and sustainable transportation systems.
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
                    Utilize spatial data to map transportation networks, analyze traffic patterns, and identify areas for improvement.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    360-Degree Mobile Mapping & Analysis: 
                  </Text>
                  Capture comprehensive street-level imagery using advanced mobile mapping systems to create accurate, up-to-date maps of roads and infrastructure.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    Annotations:
                  </Text>
                  Provide precise labeling of transportation data to train AI models for route optimization, autonomous vehicle navigation, and traffic management.
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
                  Create detailed 3D models of roadways, bridges, and tunnels to support infrastructure maintenance, safety assessments, and future planning.
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
                  Offer expertise in transportation engineering, including design, analysis, and optimization of transportation systems.
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\SmartTransporatation 2-Main.jpg"
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
                    Optimize routes, reduce fuel consumption, and improve delivery times through advanced analytics and real-time data.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    Enhanced Safety: 
                  </Text>
                    Identify and mitigate potential hazards by monitoring infrastructure conditions and traffic patterns.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                   Innovation:
                  </Text>
                    Support the development of autonomous vehicles and smart city initiatives through high-quality data and modeling.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    Environmental Impact Reduction:
                  </Text>
                    Decrease emissions and congestion by optimizing logistics and promoting sustainable transportation practices.
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\SmartTransporatation-Main.jpg"
                alt="A worker in safety gear using augmented reality technology"
                w="full"
                h="auto"
              />
            </Box>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
    <Footer/>
    </>
    
  );
};

export default App;
