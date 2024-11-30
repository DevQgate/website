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
  const { t } = useTranslation();
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
              src="src\Componentes\Video\OilAndGas.mp4"
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
                {t("Oil and Gas Industry")}
              </Heading>
              <Text mb={4}>
              {t("At Q-Gate Infotech, we support the oil and gas industry with specialized geospatial, engineering, and data analytics services that enhance exploration, production, and asset management. Our solutions help companies navigate complex challenges and operate efficiently in a competitive market.")}
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
                    {t("Analyze spatial data for exploration mapping, pipeline routing, and environmental monitoring.")}
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
                    {t("Interpret seismic imagery and satellite data to identify geological features and assess potential drilling sites.")}
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
                    {t("Provide data labeling for AI models used in reservoir characterization, predictive maintenance, and operational optimization.")}
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
                    {t("Generate accurate 3D models of terrains and offshore platforms for planning and safety assessments.")}
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
                    {t("Deliver expertise in petroleum engineering, infrastructure design, and process optimization.")}
                  </Text>
                </VStack>
              </Box>
              <Box flex="1" p={4}>
                <Image
                  src="src\Componentes\Image\OilAndGas - Main.jpg"
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
                    {t("Exploration Enhancement")}:
                    </Text>
                    {t("Increase success rates in finding new reserves through advanced data analysis and modeling.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Operational Efficiency")}:
                    </Text>
                    {t("Optimize production processes and reduce downtime with predictive analytics and real-time monitoring.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Risk Mitigation")}:
                    </Text>
                    {t("Identify and manage risks associated with exploration and production activities, including environmental and safety concerns.")}
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
                    {t("Ensure adherence to industry regulations and environmental standards through comprehensive analysis and reporting.")}
                  </Text>
                </VStack>
              </Box>
              <Box flex="1" p={4}>  
                <Image
                  src="src\Componentes\Image\OilAndGas 2 - Main.jpg"
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
