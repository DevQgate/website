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
              src="src\Componentes\Video\MiningAndMineral.mp4"
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
                {t("Mining & Mineral Exploration")}
              </Heading>
              <Text mb={4}>
                {t("Q-Gate Infotech provides cutting-edge geospatial and data analytics solutions to the mining and mineral exploration industry, enabling companies to discover resources efficiently while minimizing environmental impact. Our expertise supports exploration, planning, and operational optimization.")}
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
                      {t("GIS & Image Processing")}:
                    </Text>
                    {t("Utilize spatial data to identify potential mineral deposits, map geological formations, and analyze terrain.")}
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
                    {t("Provide precise labeling of geological data to train AI models for mineral identification, enhancing exploration accuracy.")}
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
                    {t("Create high-resolution topographic maps and 3D models of mining sites for planning and monitoring purposes.")}
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
                    {t("Offer support in mine design, infrastructure development, and environmental compliance through advanced engineering practices.")}
                  </Text>
                </VStack>
              </Box>
              <Box flex="1" p={4}>
                <Image
                  src="src\Componentes\Image\MiningAndMineral 2 - Main.jpg"
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
                    {t("Exploration Efficiency")}:
                    </Text>
                    {t("Accelerate discovery of resources by accurately pinpointing potential sites using advanced geospatial analysis.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Operational Optimization")}:
                    </Text>
                    {t("Improve mine planning and resource extraction processes through detailed modeling and simulation.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Environmental Stewardship")}:
                    </Text>
                    {t("Reduce ecological footprint by integrating sustainable practices and complying with environmental regulations.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Safety Enhancement")}:
                    </Text>
                    {t("Identify potential hazards and implement measures to protect workers and assets.")}
                  </Text>
                </VStack>
              </Box>
              <Box flex="1" p={4}>
                <Image
                  src="src\Componentes\Image\MiningAndMineral  - Main.jpg"
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
