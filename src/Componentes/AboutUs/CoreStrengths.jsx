import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
} from "@chakra-ui/react";

const coreStrengths = [
  {
    title: "Expertise in Environmental Geospatial Analytics",
    description:
      "Leading the industry with pioneering expertise in geospatial analytics focused on environmental sustainability, climate change mitigation, and disaster management.",
  },
  {
    title: "Advanced AI and Machine Learning Capabilities",
    description:
      "Utilizing cutting-edge AI and machine learning technologies to process geospatial and LiDAR data, providing accurate predictive insights and actionable intelligence for environmental initiatives.",
  },
  {
    title: "Proficiency in 3D Data Capture and Processing",
    description:
      "Mastery in 3D mapping, photogrammetry, and high-fidelity spatial data processing to create detailed environmental models and simulations.",
  },
  {
    title: "Collaborative Blockchain Integration for Secure Data Sharing",
    description:
      "Collaboratively implementing blockchain technologies to ensure secure, transparent, and efficient data sharing among stakeholders.",
  },
  {
    title: "Interdisciplinary Team of Experts",
    description:
      "A talented workforce of over 200+ professionals, including domain experts, data scientists, and full-stack developers with deep knowledge in GIS, LiDAR, spatial computing, and data science.",
  },
  {
    title: "Capacity for Rapid Scaling",
    description:
      "Equipped to scale operations beyond 500 personnel, ensuring we meet expanding client demands efficiently and effectively.",
  },
  {
    title: "Agile and Collaborative Culture",
    description:
      "Fostering an agile and collaborative environment that empowers teams, encourages innovation, and promotes continuous learning.",
  },
  {
    title: "Commitment to Continuous Innovation",
    description:
      "Dedicated to ongoing innovation, talent nurturing, and knowledge sharing to remain at the forefront of environmental intelligence.",
  },
  {
    title: "Tailored Solutions and Partnerships",
    description:
      "Crafting customized solutions and building strong partnerships to help clients achieve their environmental and operational objectives.",
  },
];

const CoreStrength = () => {
  return (
    <ChakraProvider>
      <Box py={10} px={{ base: 4, md: 8 }} maxW="7xl" mx="auto">
        <Heading
          as="h2"
          size="2xl"
          mb={8}
          fontWeight="bold"
          textAlign={{ base: "center", md: "left" }}
        >
          Core Strength
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Column - Core Strengths List */}
          <Box flex="1" pr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
            <Stack spacing={6}>
              {coreStrengths.map((strength, index) => (
                <Box key={index}>
                  <Heading as="h3" size="md" mb={1} fontWeight="bold">
                    {strength.title}
                  </Heading>
                  <Text fontSize="md" color="gray.700">
                    {strength.description}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Right Column - Image */}
          <Box flex="1" pl={{ base: 0, md: 8 }} maxW={{ md: "400px" }}>
            <Image
              src="src/Componentes/Image/core_strength.jpg" // Update with the actual path to your image
              alt="Core Strength"
              borderRadius="md"
              shadow="lg"
              objectFit="cover"
              width="100%"
              height={{ base: "300px", md: "100%" }}
            />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default CoreStrength;
