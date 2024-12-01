import React from "react";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  Link,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import {
  FaMapMarkedAlt,
  FaLaptopCode,
  FaChartLine,
  FaPencilAlt,
  FaCogs,
  FaCloud,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const services = [
  {
    title: t("Geospatial Processing"),
    description: t(
      "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making."
    ),
    icon: FaMapMarkedAlt,
    url: "/geospatial-services",
  },
  {
    title: t("Software Development"),
    description: t(
      "Delivering innovative IT solutions and development services to enhance geospatial data processing and management."
    ),
    icon: FaLaptopCode,
    url: "/software-development",
  },
  {
    title: t("Data Analytics"),
    description: t(
      "Unlocking actionable insights through advanced data analytics, transforming geospatial data into strategic solutions."
    ),
    icon: FaChartLine,
    url: "/data-analytics",
  },
  {
    title: t("Content Annotation"),
    description: t(
      "Providing expert content annotation services to enrich geospatial data for improved accuracy and analysis."
    ),
    icon: FaPencilAlt,
    url: "/content-annotation",
  },
  {
    title: t("Engineering Solutions"),
    description: t(
      "Providing tailored engineering solutions powered by geospatial technology for accurate planning, design, and infrastructure management."
    ),
    icon: FaCogs,
    url: "/engineering-solutions",
  },
  {
    title: t("Cloud-Based AI/ML Solutions"),
    description: t(
      "Delivering cutting-edge cloud-based AI/ML solutions to accelerate geospatial data processing and intelligent decision-making."
    ),
    icon: FaCloud,
    url: "/cloud-ai-ml",
  },
  {
    title: t("Professional Training"),
    description: t(
      "Offering professional training programs to equip individuals and teams with essential geospatial and remote sensing skills."
    ),
    icon: FaChalkboardTeacher,
    url: "/professional-training",
  },
  {
    title: t("Talent Solutions"),
    description: t(
      "Connecting businesses with top-tier talent through specialized geospatial and remote sensing talent solutions."
    ),
    icon: FaUsers,
    url: "/talent-solutions",
  },
];

function Services() {
  const { t } = useTranslation();
  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={12}>
      <Container maxW="7xl">
        <VStack spacing={6} textAlign="center" mb={12}>
          <Link href="/services" _hover={{ textDecoration: "underline" }}>
            <Text fontSize="sm" color="gray.500" mb={2}>
              <span style={{ color: "#F97316" }}>—</span> {t("Services")}
            </Text>
          </Link>
          <Heading
            fontSize="4xl"
            color={useColorModeValue("gray.800", "white")}
          >
            {t("In the meantime, here are the services we offer")}
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8}>
          {services.map((service, index) => (
            <Flex
              key={index}
              direction="column"
              justify="space-between"
              bg={useColorModeValue("white", "gray.700")}
              p={6}
              rounded="lg"
              shadow="md"
              _hover={{ shadow: "lg" }}
              transition="box-shadow 0.3s ease"
              h="full"
            >
              <VStack align="start" spacing={4}>
                <Icon as={service.icon} boxSize={10} color="green.600" />
                <Heading
                  fontSize="xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  {service.title}
                </Heading>
                <Text color={useColorModeValue("gray.600", "gray.300")}>
                  {service.description}
                </Text>
              </VStack>
              <Box mt="auto">
                <Link
                  href={service.url}
                  color="blue.600"
                  fontWeight="bold"
                  _hover={{ textDecoration: "underline" }}
                >
                  {t("View More")}
                </Link>
              </Box>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Services;
