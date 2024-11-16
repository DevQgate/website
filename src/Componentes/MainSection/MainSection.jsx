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
import {
  Box,
  Heading,
  Text,
  Button,
  Grid,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Badge } from "@chakra-ui/react";

const MainSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("Geospatial Processing"),
      description: t(
        "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making."
      ),
      icon: FaMapMarkedAlt,
    },
    {
      title: t("Software Development"),
      description: t(
        "Delivering innovative IT solutions and development services to enhance geospatial data processing and management."
      ),
      icon: FaLaptopCode,
    },
    {
      title: t("Data Analytics"),
      description: t(
        "Unlocking actionable insights through advanced data analytics, transforming geospatial data into strategic solutions."
      ),
      icon: FaChartLine,
    },
    {
      title: t("Content Annotation"),
      description: t(
        "Providing expert content annotation services to enrich geospatial data for improved accuracy and analysis."
      ),
      icon: FaPencilAlt,
    },
    {
      title: t("Engineering Solutions"),
      description: t(
        "Providing tailored engineering solutions powered by geospatial technology for accurate planning, design, and infrastructure management."
      ),
      icon: FaCogs,
    },
    {
      title: t("Cloud-Based AI/ML Solutions"),
      description: t(
        "Delivering cutting-edge cloud-based AI/ML solutions to accelerate geospatial data processing and intelligent decision-making."
      ),
      icon: FaCloud,
    },
    {
      title: t("Professional Training"),
      description: t(
        "Offering professional training programs to equip individuals and teams with essential geospatial and remote sensing skills."
      ),
      icon: FaChalkboardTeacher,
    },
    {
      title: t("Talent Solutions"),
      description: t(
        "Connecting businesses with top-tier talent through specialized geospatial and remote sensing talent solutions."
      ),
      icon: FaUsers,
    },
  ];

  return (
    <div>
      <Header />
      <Box bg="gray.50" minH="100vh" p={{ base: 4, md: 8 }}>
        <Box textAlign="center" mb={12}>
          <Text>
            <Badge
              bgGradient="linear(to-r, green.400, blue.500)"
              color="white"
              px={5}
              py={3}
              rounded="full"
              shadow="md"
              fontSize="2xl"
              fontWeight="bold"
              mb={3}
            >
              {t("SERVICES")}
            </Badge>
          </Text>
          <Heading fontSize={{ base: "2xl", md: "3xl" }} mt={2}>
            {t("In the meantime, here are the services we offer")}
          </Heading>
        </Box>
        <Grid
          templateColumns="repeat(4, 1fr)" // 4 items per row
          gap={8}
          justifyItems="center"
        >
          {services.map((service) => (
            <Box
              key={service.title}
              bg="white"
              p={6}
              rounded="lg"
              shadow="lg"
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box
                color="teal.500"
                mb={4}
                fontSize="4xl"
                textAlign="center"
                transition="color 0.3s ease"
                _hover={{ color: "teal.700" }}
              >
                <Icon as={service.icon} aria-label={service.title} />
              </Box>
              <Heading fontSize="xl" mb={2} textAlign="center" color="teal.700">
                {service.title}
              </Heading>
              <Text color="gray.600" mb={4} textAlign="center" fontSize="md">
                {service.description}
              </Text>
              <Box
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={4}
              >
                <Button
                  colorScheme="teal"
                  variant="outline"
                  _hover={{
                    bg: "teal.500",
                    color: "white",
                    borderColor: "teal.500",
                  }}
                  px={6}
                  width="auto" // Maintain the button's natural width
                  transition="all 0.3s ease"
                >
                  {t("View More")}
                </Button>
              </Box>
            </Box>
          ))}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};

export default MainSection;
