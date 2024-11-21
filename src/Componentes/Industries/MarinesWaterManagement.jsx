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
            src="src\Componentes\Video\MarinesandWater.mp4"
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
            Marine & Water Resource Management
            </Heading>
            <Text mb={4}>
              Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments.
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
                  Leverage spatial data to monitor marine ecosystems, coastal zones, and freshwater
                  bodies for environmental changes and resource assessment.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    Sea & Water Bed Mapping:
                  </Text>
                    Generate detailed bathymetric maps of seabeds and 
                    riverbeds using sonar and LiDAR technologies for navigation safety, 
                    resource exploration, and habitat mapping.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    Hydro Flattening:
                  </Text>
                    Apply hydro-flattening techniques to LiDAR data to accurately 
                    represent water surfaces in digital elevation models, essential 
                    for flood modeling and hydrological studies.
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
                  Offer expertise in coastal infrastructure development, 
                  erosion control, and shoreline management to protect against sea-level
                  rise and extreme weather events.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    LiDAR Measurement Analysis:
                  </Text>
                  Process LiDAR data to create high-resolution 3D models of coastal and 
                  underwater terrains, supporting dredging operations, port development,
                  and environmental monitoring.
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\Marine-Indutries.png"
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
                    Resource Optimization: :
                  </Text>
                  Manage fisheries and aquatic resources sustainably 
                  by understanding population dynamics and habitat conditions.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    Environmental Protection:
                  </Text>
                  Monitor water quality, detect pollution sources, 
                  and assess the impact of human activities on marine ecosystems.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    Risk Management:
                  </Text>
                  Enhance disaster preparedness by modeling storm surges, 
                  flooding, and coastal erosion scenarios.
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    Infrastructure Development:
                  </Text>
                  Support the planning and maintenance of maritime 
                  infrastructure such as ports, harbors, and offshore installations.
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\Marine-Main.jpg"
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
