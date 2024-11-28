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
  const { t } = useTranslation();
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
            src="src\Componentes\Video\Agriculture.mp4"
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
              {t("Agriculture")}
            </Heading>
            <Text mb={4}>
              {t("At Q-Gate Infotech, we empower the agriculture and forestry sectors by harnessing cutting-edge geospatial technologies and data analytics to promote sustainable practices and optimize productivity. Our comprehensive solutions enable farmers, agribusinesses and forestry managers to make informed decisions through precise, real-time insights.")}
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
                    {t("GIS & Remote Sensing:")}
                  </Text>
                  {t("Utilize spatial data to monitor agricultural lands and forest ecosystems, enabling precise mapping and analysis.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    {t("Image Processing Analysis:")}
                  </Text>
                    {t("Interpret high-resolution satellite and aerial imagery to assess crop health, soil conditions, and detect pests or diseases early.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    {t("Vegetation Analysis:")}
                  </Text>
                    {t("Conduct detailed assessments of vegetation cover, growth patterns, biomass estimation, and species classification to support sustainable forest management and conservation efforts.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    {t("Annotation :")}
                  </Text>
                  {t("Provide precise labeling of imagery to train AI models for predictive analytics, facilitating precision agriculture and efficient resource management.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    {t("LiDAR Measurement Analysis:")}
                  </Text>
                  {t("Use LiDAR technology to generate accurate 3D models of terrain and vegetation structures, assisting in land assessment, irrigation planning, and forest inventory.")}
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\Agriculture-Main.jpg"
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
                    {t("Enhanced Crop Yields:")}
                  </Text>
                  {t("Optimize planting schedules, irrigation, and fertilization through precise data analysis.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    {t("Resource Efficiency:")}
                  </Text>
                  {t("Reduce waste and improve resource utilization by targeting interventions where they are most needed.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    {t("Sustainability :")}
                  </Text>
                  {t("Promote environmentally friendly practices by effectively monitoring and managing land use.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                    {t("Risk Mitigation:")}
                  </Text>
                  {t("Identify potential threats such as pest infestations or environmental stressors early to prevent losses.")}
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\Agriculture 2 -Main.jpg"
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
