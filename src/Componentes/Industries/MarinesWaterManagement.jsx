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
import Footer from "../Footer/footer";
import { useTranslation } from "react-i18next";

const App = () => {
  const servicesRef = useRef(null);
  const { t } = useTranslation();

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
            {t("Marine & Water Resource Management")}
            </Heading>
            <Text mb={4}>
              {t("Q-Gate Infotech provides advanced geospatial and engineering solutions to enhance marine and water resource management. Our expertise enables governments, environmental agencies, and maritime industries to effectively monitor, manage, and protect aquatic environments.")}
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
                  {t("Leverage spatial data to monitor marine ecosystems, coastal zones, and freshwater bodies for environmental changes and resource assessment.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t("Sea & Water Bed Mapping")}:
                  </Text>
                  {t("Generate detailed bathymetric maps of seabeds and riverbeds using sonar and LiDAR technologies for navigation safety, resource exploration, and habitat mapping.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t("Hydro Flattening")}:
                  </Text>
                  {t("Apply hydro-flattening techniques to LiDAR data to accurately represent water surfaces in digital elevation models, essential for flood modeling and hydrological studies.")}
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
                  {t("Offer expertise in coastal infrastructure development, erosion control, and shoreline management to protect against sea-level rise and extreme weather events.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t("LiDAR Measurement Analysis")}:
                  </Text>
                  {t("Process LiDAR data to create high-resolution 3D models of coastal and underwater terrains, supporting dredging operations, port development, and environmental monitoring.")}
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\Industries\Marine & Water Resource Management\Marine - 1.png"
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
                  {t("Resource Optimization")}: 
                  </Text>
                  {t("Manage fisheries and aquatic resources sustainably by understanding population dynamics and habitat conditions.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t("Environmental Protection")}:
                  </Text>
                  {t("Monitor water quality, detect pollution sources, and assess the impact of human activities on marine ecosystems.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t("Risk Management")}:
                  </Text>
                  {t("Enhance disaster preparedness by modeling storm surges, flooding, and coastal erosion scenarios.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t("Infrastructure Development")}:
                  </Text>
                  {t("Support the planning and maintenance of maritime infrastructure such as ports, harbors, and offshore installations.")}
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\Industries\Marine & Water Resource Management\Marine - 2.jpg"
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
