import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaGlobe,
  FaBriefcase,
  FaCogs,
  FaNetworkWired,
  FaSitemap,
  FaTools,
  FaLeaf,
  FaRecycle,
  FaSeedling,
  FaWater,
  FaTree,
  FaHeartbeat,
  FaHospital,
  FaStethoscope,
  FaUserMd,
  FaPills,
  FaBook,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaRobot,
  FaSatellite,
  FaIndustry,
  FaCity,
  FaBuilding,
  FaHandHoldingUsd,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";

const WhatWeDo = () => {
  const sections = [
    {
      title: "Agriculture",
      description:
        "EaRthCiti offers a full range of solutions in data management and integration, managed services, and systems integration to help clients deploy geospatial technologies effectively.",
      features: [
        { icon: FaGlobe, label: "Spatial Enterprise Solutions" },
        { icon: FaBriefcase, label: "Professional Services" },
        { icon: FaCogs, label: "Managed Services" },
        { icon: FaNetworkWired, label: "Utility Network Services" },
        { icon: FaSitemap, label: "Esri Solutions" },
      ],
      image: "https://placehold.co/600x400",
      alt: "Utility meters",
    },
    {
      title: "Marine & Water Resource Management",
      description:
        "EaRthCiti provides engineering services for Telcos, MSOs, Wireless, E-Coops, and Municipalities, offering scalable, cost-effective, and high-quality deliverables.",
      features: [
        { icon: FaTools, label: "Engineering Services" },
        { icon: FaGlobe, label: "Spatial Enterprise Solutions" },
        { icon: FaSitemap, label: "Esri Solutions" },
      ],
      image: "https://placehold.co/600x400",
      alt: "Telecom towers at sunset",
    },
    {
      title: "Infrastructure Development",
      description:
        "Our sustainability solutions integrate waste reduction, renewable energy, and resource optimization, supporting global climate action and ecosystem protection.",
      features: [
        { icon: FaLeaf, label: "Green Initiatives" },
        { icon: FaRecycle, label: "Recycling Programs" },
        { icon: FaSeedling, label: "Renewable Energy" },
        { icon: FaWater, label: "Water Conservation" },
        { icon: FaTree, label: "Afforestation Projects" },
      ],
      image: "https://placehold.co/600x400",
      alt: "Sustainable practices",
    },
    {
      title: "Smart Transportation & Logistics",
      description:
        "Innovative healthcare solutions improve patient outcomes and optimize medical services. We offer tools for AI diagnostics, telemedicine, and hospital management.",
      features: [
        { icon: FaHeartbeat, label: "Patient Care Systems" },
        { icon: FaHospital, label: "Hospital Management" },
        { icon: FaStethoscope, label: "Medical Diagnostics" },
        { icon: FaUserMd, label: "Healthcare Professionals" },
        { icon: FaPills, label: "Pharmaceuticals" },
      ],
      image: "https://placehold.co/600x400",
      alt: "Healthcare innovation",
    },
    {
      title: "Energy & Utilities",
      description:
        "Our education solutions focus on online learning platforms, AI-based tutoring, and efficient classroom technologies, enabling lifelong learning opportunities.",
      features: [
        { icon: FaBook, label: "E-Learning Platforms" },
        { icon: FaLaptopCode, label: "Coding Bootcamps" },
        { icon: FaChalkboardTeacher, label: "Virtual Classrooms" },
        { icon: FaRobot, label: "AI Tutoring" },
        { icon: FaSatellite, label: "Remote Education" },
      ],
      image: "https://placehold.co/600x400",
      alt: "Educational tools",
    },
    {
      title: "Mining & Mineral Exploration",
      description:
        "Cutting-edge technological solutions for AI, machine learning, robotics, and automation empower businesses to innovate and streamline operations.",
      features: [
        { icon: FaRobot, label: "AI & Robotics" },
        { icon: FaLaptopCode, label: "Software Development" },
        { icon: FaNetworkWired, label: "Networking Solutions" },
        { icon: FaSatellite, label: "Geospatial Tech" },
        { icon: FaCogs, label: "Automation Systems" },
      ],
      image: "https://placehold.co/600x400",
      alt: "Technology advancements",
    },
    // **NEW SECTION 1**
    {
      title: "Oil & Gas Industry",
      description:
        "Providing advanced industrial automation solutions, from manufacturing robotics to smart sensors, that optimize production efficiency and reduce operational costs.",
      features: [
        { icon: FaIndustry, label: "Industrial Automation" },
        { icon: FaCity, label: "Urban Development" },
        { icon: FaBuilding, label: "Construction Management" },
        { icon: FaHandHoldingUsd, label: "Cost Optimization" },
        { icon: FaShieldAlt, label: "Safety Solutions" },
      ],
      image: "https://placehold.co/600x400",
      alt: "Industrial solutions",
    },
    // **NEW SECTION 2**
    {
      title: "Education",
      description:
        "Delivering strategic consulting and technology solutions to public sector organizations, enhancing government operations, service delivery, and citizen engagement.",
      features: [
        { icon: FaHandshake, label: "Public-Private Partnerships" },
        { icon: FaGlobe, label: "Global Governance" },
        { icon: FaCity, label: "Smart Cities" },
        { icon: FaBuilding, label: "Urban Infrastructure" },
        { icon: FaShieldAlt, label: "Public Safety" },
      ],
      image: "https://placehold.co/600x400",
      alt: "Government services",
    },
  ];

  return (
    <Box bg="white" color="gray.800" py={8}>
      <Container maxW="container.lg">
        <Heading as="h1" size="xl" textAlign="center" color="blue.800" mb={8}>
          What We Do
        </Heading>

        {sections.map((section, index) => (
          <Grid
            key={index}
            templateColumns={{
              base: "1fr",
              md: index % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
            }}
            gap={8}
            mb={16}
          >
            {index % 2 === 0 ? (
              <>
                <Box flex="1" position="relative" maxW="md" mx="auto">
                  {/* Blue Box */}
                  <Box
                    position="absolute"
                    top="50%" // Position it at the center vertically
                    left="0"
                    width="full"
                    height="300px"
                    bg="blue.900"
                    transform="rotate(3deg)"
                    zIndex="-1" // Ensures the blue box is behind the image
                  />

                  {/* Image */}
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width="100%"
                    maxWidth="400px"
                    height="250px"
                    objectFit="cover"
                    transform="rotate(-2deg)"
                    borderRadius="md"
                  />
                </Box>
                <Box>
                  <Heading as="h2" size="lg" color="blue.800" mb={4}>
                    {section.title}
                  </Heading>
                  <Text mb={4}>{section.description}</Text>
                  <Stack spacing={4} mb={4}>
                    {section.features.map((feature, featureIndex) => (
                      <Flex align="center" key={featureIndex}>
                        <Icon
                          as={feature.icon}
                          boxSize={6}
                          color="blue.800"
                          mr={2}
                        />
                        <Text>{feature.label}</Text>
                      </Flex>
                    ))}
                  </Stack>
                  <Button colorScheme="blue">Read More</Button>
                </Box>
              </>
            ) : (
              <>
                <Box>
                  <Heading as="h2" size="lg" color="blue.800" mb={4}>
                    {section.title}
                  </Heading>
                  <Text mb={4}>{section.description}</Text>
                  <Stack spacing={4} mb={4}>
                    {section.features.map((feature, featureIndex) => (
                      <Flex align="center" key={featureIndex}>
                        <Icon
                          as={feature.icon}
                          boxSize={6}
                          color="blue.800"
                          mr={2}
                        />
                        <Text>{feature.label}</Text>
                      </Flex>
                    ))}
                  </Stack>
                  <Button colorScheme="blue">Read More</Button>
                </Box>
                <Box flex="1" position="relative" maxW="md" mx="auto">
                  {/* Blue Box */}
                  <Box
                    position="absolute"
                    top="50%" // Position it at the center vertically
                    left="0"
                    width="full"
                    height="300px"
                    bg="blue.900"
                    transform="rotate(3deg)"
                    zIndex="-1"
                  />
                  <Image
                    src={section.image}
                    alt={section.alt}
                    width="100%"
                    maxWidth="400px"
                    height="250px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                </Box>
              </>
            )}
          </Grid>
        ))}
      </Container>
    </Box>
  );
};

export default WhatWeDo;
