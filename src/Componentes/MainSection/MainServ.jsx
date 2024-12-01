import React from "react";
import { ChakraProvider, Box, Heading, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import {
  FaMapMarkedAlt,
  FaCode,
  FaChartLine,
  FaPencilAlt,
  FaCogs,
  FaCloud,
  FaChalkboardTeacher,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const services = [
  {
    title: "Geospatial Processing",
    description:
      "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making.",
    icon: FaMapMarkedAlt,
    link: "/geospatial-services",
  },
  {
    title: "Software Development",
    description:
      "Delivering innovative IT solutions and development services to enhance geospatial data processing and management.",
    icon: FaCode,
    link: "/software-development",
  },
  {
    title: "Data Analytics",
    description:
      "Unlocking actionable insights through advanced data analytics, transforming geospatial data into strategic solutions.",
    icon: FaChartLine,
    link: "/data-analytics",
  },
  {
    title: "Content Annotation",
    description:
      "Providing expert content annotation services to enrich geospatial data for improved accuracy and analysis.",
    icon: FaPencilAlt,
    link: "/content-annotation",
  },
  {
    title: "Engineering Solutions",
    description:
      "Providing tailored engineering solutions powered by geospatial technology for accurate planning, design, and infrastructure management.",
    icon: FaCogs,
    link: "/engineering-solutions",
  },
  {
    title: "Cloud-Based AI/ML Solutions",
    description:
      "Delivering cutting-edge cloud-based AI/ML solutions to accelerate geospatial data processing and intelligent decision-making.",
    icon: FaCloud,
    link: "/cloud-ai-ml",
  },
  {
    title: "Professional Training",
    description:
      "Offering professional training programs to equip individuals and teams with essential geospatial and remote sensing skills.",
    icon: FaChalkboardTeacher,
    link: "/professional-training",
  },
  {
    title: "Talent Solutions",
    description:
      "Connecting businesses with top-tier talent through specialized geospatial and remote sensing talent solutions.",
    icon: FaUsers,
    link: "/talent-solutions",
  },
];

function App() {
  const { t } = useTranslation();  // using translation hook
  
  return (
    <ChakraProvider>
      <Box maxW="1400px" mx="auto" py={12}>
        <Box textAlign="center" mb={12}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            <span style={{ color: "#F97316" }}>—</span> {t("Services")}
          </Text>
          <Heading as="h1" fontSize="3xl" fontWeight="bold">
            {t("In the meantime, here are the services we offer")}
          </Heading>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {services.map((service, index) => (
            <Box
              key={index}
              bg="gray.200"
              p={6}
              borderRadius="lg"
              boxShadow="md"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box>
                <Icon as={service.icon} w={10} h={10} color="green.600" mb={4} />
                <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2}>
                  {t(service.title)}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {t(service.description)}
                </Text>
              </Box>
              <Text
                as="a"
                href={service.link}
                color="black"
                fontWeight="semibold"
                mt={4}
                _hover={{ textDecoration: "underline" }}
              >
                {t("View More")}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
