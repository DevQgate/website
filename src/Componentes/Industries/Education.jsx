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
      <Header />
      <ChakraProvider>
        <Box>
          {/* Hero Section with Video */}
          <Box position="relative">
            {/* Video Background */}
            <video
              src="src\Componentes\Video\Education.mp4"
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
                {t("Education")}
              </Heading>
              <Text mb={4}>
                {t("Q-Gate Infotech is dedicated to fostering education and professional growth by providing comprehensive training and development programs. We aim to build capacity in cutting-edge technologies, nurture talent, and bridge the gap between academia and industry.")}
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
                      {t("Professional Training Programs")}:
                    </Text>
                    {t("Offer courses in GIS, remote sensing, AI/ML, software development, data analytics, and engineering, tailored to meet industry demands.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("On-the-Job Training and Internships")}:
                    </Text>
                    {t("Provide hands-on experience through internships without stipends, allowing participants to apply their learning to real-world projects.")}
                  </Text>

                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Collaborations with Educational Institutions")}:
                    </Text>
                    {t("Partner with universities and colleges through MoUs to update curricula, support research initiatives, and facilitate knowledge exchange.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Project Sponsorships and Scholarships")}:
                    </Text>
                    {t("Support innovative projects, research activities, and provide financial assistance to promising students.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Empowering Rural Development")}:
                    </Text>
                    {t("Focus on recruiting and training individuals from rural areas, promoting equal opportunities and contributing to community upliftment.")}
                  </Text>
                </VStack>
              </Box>
              <Box flex="1" p={4}>
                <Image
                  src="src\Componentes\Image\Education 2 - Main.jpg"
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
                    {t("Skill Enhancement")}:
                    </Text>
                    {t("Equip individuals with the latest technological skills required in today's job market.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                      {t("Career Development")}:
                    </Text>
                    {t("Provide pathways for fresh graduates and professionals to build successful careers in technology.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Industry-Academia Collaboration")}:
                    </Text>
                    {t("Strengthen connections between educational institutions and industry to align education with practical needs.")}
                  </Text>
                  <Text fontSize="sm" color="gray.700">
                    <Text
                      as="span"
                      fontWeight="semibold"
                      display="block"
                      color="blue.600"
                    >
                    {t("Social Impact")}:
                    </Text>
                    {t("Contribute to societal development by empowering individuals and fostering innovation.")}
                  </Text>
                </VStack>
              </Box>
              <Box flex="1" p={4}>
                <Image
                  src="src\Componentes\Image\Education - Main.jpg"
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
