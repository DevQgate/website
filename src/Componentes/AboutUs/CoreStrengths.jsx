import React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  Icon,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import {
  FaGlobe,
  FaRobot,
  FaCube,
  FaLock,
  FaUsers,
  FaBolt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";



const CoreStrength = () => {
  const { t } = useTranslation();
  const coreStrengths = [
  {
    title: t("Environmental Geospatial Analytics"),
    description: t(
      "Pioneering sustainability and disaster management solutions."
    ),
    icon: FaGlobe,
  },
  {
    title: t("AI & Machine Learning"),
    description: t("Transforming data into predictive insights."),
    icon: FaRobot,
  },
  {
    title: t("3D Data Processing"),
    description: t("Creating high-fidelity environmental models."),
    icon: FaCube,
  },
  {
    title: t("Blockchain Integration"),
    description: t("Secure and transparent data sharing."),
    icon: FaLock,
  },
  {
    title: t("Scalable Operations"),
    description: t("Ready to meet growing demands effectively."),
    icon: FaUsers,
  },
  {
    title: t("Agile & Collaborative Culture"),
    description: t("Empowering innovation and learning."),
    icon: FaBolt,
  },
  {
    title: t("Continuous Innovation"),
    description: t("Driving progress through knowledge sharing."),
    icon: FaLightbulb,
  },
  {
    title: t("Tailored Solutions"),
    description: t("Customized solutions for client success."),
    icon: FaHandshake,
  },
];
  
  return (
    <ChakraProvider>
      <Box bg="gray.100" py={16} px={6}>
        {/* Header Section */}
        <Box textAlign="center" mb={10}>
          <Heading as="h2" size="2xl" fontWeight="bold" color="gray.800">
            <Text as="span" color="green.500">
              {t("Core")}
            </Text>{" "}
            <Text as="span" color="black">
              {t("Strengths")}
            </Text>
          </Heading>
          <Text mt={4} fontSize="lg" color="gray.600" maxW="3xl" mx="auto">
            {t("Discover the foundation of our expertise and innovation.")}
          </Text>
        </Box>

        {/* Grid Section */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={6}
          maxW="3xl"
          mx="auto"
        >
          {/* Map over core strengths */}
          {coreStrengths.slice(0, 4).map((strength, index) => (
            <GridItem
              key={index}
              bg="black"
              borderRadius="lg"
              shadow="md"
              p={4}
              textAlign="center"
              transition="transform 0.3s, shadow 0.3s"
              _hover={{ transform: "scale(1.05)", shadow: "lg" }}
            >
              <Stack spacing={4} align="center">
                <Icon as={strength.icon} boxSize={8} color="green.500" />
                <Heading as="h3" size="sm" fontWeight="bold" color="green.500">
                  {strength.title}
                </Heading>
                <Text fontSize="sm" color="white">
                  {strength.description}
                </Text>
              </Stack>
            </GridItem>
          ))}

          {/* Image Box */}
          <GridItem
            bg="black"
            borderRadius="lg"
            shadow="lg"
            textAlign="center"
            p={1}
          >
            <Image
              src="src\Componentes\Image\agriculture.jpg" // Update with the correct image path
              alt="Core Strength"
              borderRadius="md"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </GridItem>

          {/* Map over remaining core strengths */}
          {coreStrengths.slice(4).map((strength, index) => (
            <GridItem
              key={index}
              bg="black"
              borderRadius="lg"
              shadow="md"
              p={6}
              textAlign="center"
              transition="transform 0.3s, shadow 0.3s"
              _hover={{ transform: "scale(1.05)", shadow: "lg" }}
            >
              <Stack spacing={4} align="center">
                <Icon as={strength.icon} boxSize={8} color="green.500" />
                <Heading as="h3" size="sm" fontWeight="bold" color="green.500">
                  {strength.title}
                </Heading>
                <Text fontSize="sm" color="white">
                  {strength.description}
                </Text>
              </Stack>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default CoreStrength;
