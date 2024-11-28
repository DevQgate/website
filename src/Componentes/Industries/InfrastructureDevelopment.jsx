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
    <Header/>
    <ChakraProvider>
      <Box>
        {/* Hero Section with Video */}
        <Box position="relative">
          {/* Video Background */}
          <video
            src="src\Componentes\Video\InfrastructureDevelopment.mp4"
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
            {t("Infrastructure Development")}
            </Heading>
            <Text mb={4}>
            {t("At Q-Gate Infotech, we drive infrastructure development by providing comprehensive geospatial and engineering solutions that enable planners, architects, and developers to design and construct smarter, more sustainable infrastructure.")}
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
                  {t("Collect and analyze spatial data for site selection, feasibility studies, and impact assessments, ensuring projects are grounded in accurate geographic information.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t("Image Processing Analysis")}:
                  </Text>
                  {t("Interpret high-resolution imagery to monitor construction progress, assess environmental impact, and detect changes in land use.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t(" Annotations")}:
                  </Text>
                  {t("Provide detailed data annotation to train AI models for automated feature extraction, aiding in urban planning and infrastructure maintenance.")}
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
                  {t("Deliver expert engineering services, including structural analysis, design optimization, and Building Information Modeling (BIM), to streamline project workflows.")}
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
                  {t("Generate precise 3D models and digital elevation models (DEMs) for terrain analysis, aiding in the design of roads, bridges, and other infrastructure components.")}
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\InfrastructureDevelopment-Main.jpg"
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
                  {t("Enhanced Planning")}: 
                  </Text>
                  {t("Make informed decisions with accurate spatial data, reducing risks and unforeseen challenges.")}
                </Text>
                <Text fontSize="sm" color="gray.700">
                  <Text
                    as="span"
                    fontWeight="semibold"
                    display="block"
                    color="blue.600"
                  >
                  {t("Cost Efficiency")}:
                  </Text>
                  {t("Optimize designs and construction processes to save time and resources.")}
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
                  {t("Incorporate environmental considerations into infrastructure projects to minimize ecological impact and promote long-term viability.")}
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
                  {t("Ensure adherence to zoning laws, environmental regulations, and building codes through detailed analysis and documentation.")}
                </Text>
              </VStack>
            </Box>
            <Box flex="1" p={4}>
              <Image
                src="src\Componentes\Image\InfrastuctureDevelopment 2 -Main.jpg"
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
