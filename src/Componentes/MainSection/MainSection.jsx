import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Grid,
  Image,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Footer from "../Footer/footer";
import Header from "../Header/Header";
import MainServ from "../MainSection/MainServ";
import Directors from "../MainSection/Directors";
import MainContact from "../MainSection/MainContact";

import { useTranslation } from "react-i18next";
import { t } from "i18next";

const industries = [
  {
    name: t("AGRICULTURE"),
    img: "src\\Componentes\\Image\\agriculture-Home.jpg",
    alt: "Agriculture",
    route: "/agriculture",
  },
  {
    name: t("MARINE & WATER RESOURCE MANAGEMENT"),
    img: "src\\Componentes\\Image\\Marine-Home.jpg",
    alt: "Marine and water resource management",
    route: "/marine-water-resources",
  },
  {
    name: t("INFRASTRUCTURE DEVELOPMENT"),
    img: "src\\Componentes\\Image\\Infrastucture-Home.jpg",
    alt: "Infrastructure development",
    route: "/infrastructure-development",
  },
  {
    name: t("SMART TRANSPORTATION & LOGISTICS"),
    img: "src\\Componentes\\Image\\SMART TRANSPORTATION & LOGISTICS-Home.jpg",
    alt: "Smart transportation and logistics",
    route: "/transportation-logistics",
  },
  {
    name: t("ENERGY & UTILITIES"),
    img: "src\\Componentes\\Image\\ENERGY & UTILITIES-Home.jpg",
    alt: "Energy and utilities",
    route: "/energy-utilities",
  },
  {
    name: t("MINING & MINERAL EXPLORATION"),
    img: "src\\Componentes\\Image\\MINING & MINERAL EXPLORATION-Home.jpg",
    alt: "Mining and mineral exploration",
    route: "/mining-and-mineral",
  },
  {
    name: t("OIL & GAS INDUSTRY"),
    img: "src\\Componentes\\Image\\OIL & GAS INDUSTRY-Home.jpg",
    alt: "Oil and gas industry",
    route: "/oil-gas-industry",
  },
  {
    name: t("EDUCATION"),
    img: "src\\Componentes\\Image\\EDUCATION-Home.jpg",
    alt: "Education",
    route: "/education",
  },
];

const IndustryCard = ({ name, img, alt, route }) => (
  <Box position="relative" rounded="lg" overflow="hidden">
    {/* Wrap the card with a Link */}
    <Link to={route}>
      <Image src={img} alt={alt} objectFit="cover" boxSize="100%" />
      <Center
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.500"
        _hover={{ bg: "blackAlpha.700" }}
      >
        <Text color="white" fontWeight="semibold" fontSize="lg">
          {name}
        </Text>
      </Center>
    </Link>
  </Box>
);

const App = () => {
  const { t } = useTranslation();
  return (
    <Flex direction="column" minH="100%">
      <Header />
      {/* Hero Section */}
      <Box>
        <Box position="relative">
          {/* Video Section */}
          <Box
            as="video"
            src="src\\Componentes\\Video\\Main.mp4" // Path to your video file
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            height="96vh"
            objectFit="cover"
            style={{ display: "block" }}
          />
          {/* Overlay Section */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            bg="blackAlpha.500" // Optional: Add a translucent background
          >
            <Text fontSize="4xl" fontWeight="bold" position="center">
              {t("Mapping the Future:")} <br />
              {t("Innovative Geospatial Solutions for a Connected World")}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* About Us Section */}
      <Flex
        flex="1"
        align="center"
        justify="center"
        direction={{ base: "column", lg: "row" }}
        maxW="10xl"
        mx="auto"
        px={8}
        gap={10}
      >
        <VStack align="flex-start" maxW="lg" spacing={5}>
          <Flex align="center" gap={4}>
            <Box>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
                {t("About Us")}
              </Heading>
            </Box>
          </Flex>
          <Text color="gray.600" fontSize="lg">
            {t(
              "At Q-Gate Infotech, we drive environmental sustainability through innovative spatial data processing. Leveraging advanced AI and cloud-based technologies, we specialize in geospatial and LiDAR data processing to enhance climate action and disaster management."
            )}
          </Text>
          <Button
            variant="link"
            colorScheme="black"
            size="md"
            as={Link} // Wrap the button with Link component for routing
            to="/about" // The path where the user should be redirected
          >
            {t("Learn More")}
          </Button>
        </VStack>

        <Box
          height="95vh"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <video
            autoPlay
            playsInline
            preload="auto"
            muted
            loop
            controlsList="nodownload noremoteplayback"
            style={{ width: "640px", height: "560px", objectFit: "cover" }}
          >
            <source
              src="src\\Componentes\\Video\\drone_1_mob.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
      </Flex>

      {/* Industries Section */}
      <Box height="100%" width="100%" textAlign="center" py={16}>
        <Text fontSize="sm" color="gray.500" mb={2}>
          <span style={{ color: "#F97316" }}>— </span>
          <Link to="/industries" color="#F97316">
            {t("Industries")}
          </Link>
        </Text>
        <Heading as="h1" size="2xl" color="blue.800" mb={4}>
          {t("Where Q-Gate Works")}
        </Heading>
        <Text color="gray.600" mb={12}>
          {t(
            "Designed with City Planners in mind, Q-Gate empowers various industries to achieve more."
          )}
        </Text>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
          gap={4}
          px={12}
        >
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </Grid>
      </Box>
      <Directors />
      <MainServ />
      <MainContact />
      <Footer />
    </Flex>
  );
};

export default App;
