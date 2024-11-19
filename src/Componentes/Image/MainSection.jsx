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
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const industries = [
  {
    name: "AGRICULTURE",
    img: "src\\Componentes\\Image\\agriculture-Home.jpg",
    alt: "Agriculture",
  },
  {
    name: "MARINE & WATER RESOURCE MANAGEMENT",
    img: "src\\Componentes\\Image\\Marine-Home.jpg",
    alt: "Marine and water resource management",
  },
  {
    name: "INFRASTRUCTURE DEVELOPMENT",
    img: "src\\Componentes\\Image\\Infrastucture-Home.jpg",
    alt: "Infrastructure development",
  },
  {
    name: "SMART TRANSPORTATION & LOGISTICS",
    img: "src\\Componentes\\Image\\SMART TRANSPORTATION & LOGISTICS-Home.jpg",
    alt: "Smart transportation and logistics",
  },
  {
    name: "ENERGY & UTILITIES",
    img: "src\\Componentes\\Image\\ENERGY & UTILITIES-Home.jpg",
    alt: "Energy and utilities",
  },
  {
    name: "MINING & MINERAL EXPLORATION",
    img: "src\\Componentes\\Image\\MINING & MINERAL EXPLORATION-Home.jpg",
    alt: "Mining and mineral exploration",
  },
  {
    name: "OIL & GAS INDUSTRY",
    img: "src\\Componentes\\Image\\OIL & GAS INDUSTRY-Home.jpg",
    alt: "Oil and gas industry",
  },
  {
    name: "EDUCATION",
    img: "src\\Componentes\\Image\\EDUCATION-Home.jpg",
    alt: "Education",
  },
];

const IndustryCard = ({ name, img, alt }) => (
  <Box position="relative" rounded="lg" overflow="hidden">
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
  </Box>
);

const App = () => {
  return (
    <Flex direction="column" minH="100%">
      {" "}
      {/* Flex container for the entire page */}
      <Header /> {/* Header Section */}
      <Flex
        flex="1" // Ensures this section takes up the remaining available height
        align="center"
        justify="center"
        direction={{ base: "column", lg: "row" }}
        maxW="10xl"
        mx="auto"
        px={8}
        gap={10}
      >
        {/* Left Content Section */}
        <VStack
          align="flex-start"
          maxW="lg" // Increase the max width to make it bigger
          spacing={5} // Increased spacing between elements for a more spacious layout
        >
          <Flex align="center" gap={4}>
            <Box>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold">
                About Us
              </Heading>
            </Box>
          </Flex>
          <Text color="gray.600" fontSize="lg">
            {" "}
            {/* Increased text size for better readability */}
            At Q-Gate Infotech, we drive environmental sustainability through
            innovative spatial data processing. Leveraging advanced AI and
            cloud-based technologies, we specialize in geospatial and LiDAR data
            processing to enhance climate action and disaster management.
          </Text>

          {/* More Button */}
          <Button
            variant="link"
            colorScheme="blue"
            size="md"
            onClick={() => alert("Redirect to more info!")} // You can replace this with a real link or action
          >
            Learn More
          </Button>
        </VStack>

        {/* Video Section */}
        <Box
          as="video"
          autoPlay
          playsInline
          preload="auto"
          muted
          loop
          controlsList="nodownload noremoteplayback"
          autoPictureInPicture={false}
          webkitAirplay="deny"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          width="740px" // Fixed video width
          height="560px" // Fixed video height
          id="ver-media-video"
        >
          <source
            src="src\Componentes\Video\drone_1_mob.mp4"
            type="video/mp4"
          />
        </Box>
      </Flex>
      {/* Industries Section */}
      <Box textAlign="center" py={16}>
        <Text fontSize="sm" color="gray.500" mb={2}>
          <span style={{ color: "#F97316" }}>—</span> Industries
        </Text>
        <Heading as="h1" size="2xl" color="blue.800" mb={4}>
          Where Q-Gate Works
        </Heading>
        <Text color="gray.600" mb={12}>
          Designed with City Planners in mind, Q-Gate empowers various
          industries to achieve more.{" "}
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
      <Footer /> {/* Footer Section */}
    </Flex>
  );
};

export default App;
