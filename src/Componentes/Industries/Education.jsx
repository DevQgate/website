import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import {
  FaCogs,
  FaBriefcase,
  FaTasks,
  FaNetworkWired,
  FaTools,
  FaChartLine, // Added new icon for the new box
} from "react-icons/fa";

const App = () => {
  return (
    <Container maxW="container.lg" p={8}>
      <Heading as="h1" size="2xl" textAlign="center" color="blue.900" mb={8}>
        What We Do
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} mb={16} gap={8}>
        {/* Existing Box for Utilities */}
        <Box flex="1" position="relative" maxW="md" mx="auto">
          <Box
            position="absolute"
            top="65px"
            left="0"
            width="full"
            height="300px"
            bg="blue.900"
            transform="rotate(3deg)"
            zIndex="-1"
          />
          <img
            src="https://placehold.co/600x400"
            alt="Utility meters"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "md",
            }}
          />
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" color="blue.900" mb={4}>
            Utilities
          </Heading>
          <Text mb={4}>
            KaNRSoft offers a full range of solutions in the areas of data
            management and integration, large scale managed services, strategic
            consulting, and systems integration to help our clients successfully
            plan, deploy, and support geospatial technologies and data.
          </Text>
          <Stack spacing={4} mb={4}>
            <Flex align="center">
              <Icon as={FaCogs} color="blue.900" boxSize={6} mr={2} />
              <Text>Special Enterprise Solutions</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaBriefcase} color="blue.900" boxSize={6} mr={2} />
              <Text>Professional Services</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaTasks} color="blue.900" boxSize={6} mr={2} />
              <Text>Managed Services</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaNetworkWired} color="blue.900" boxSize={6} mr={2} />
              <Text>Utility Network Services</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaTools} color="blue.900" boxSize={6} mr={2} />
              <Text>Esri Solutions</Text>
            </Flex>
          </Stack>
          <Button colorScheme="blue" variant="solid" size="md">
            Read More
          </Button>
        </Box>
      </Flex>

      {/* New Box for Additional Services on the right side */}
      <Flex direction={{ base: "column", md: "row" }} mb={16} gap={8}>
        <Box flex="1">
          <Heading as="h2" size="lg" color="blue.900" mb={4}>
            Additional Services
          </Heading>
          <Text mb={4}>
            We provide a variety of additional services to complement our main
            offerings, ensuring that our clients have everything they need to
            succeed in their projects.
          </Text>
          <Stack spacing={4} mb={4}>
            <Flex align="center">
              <Icon as={FaChartLine} color="blue.900" boxSize={6} mr={2} />
              <Text>Performance Analytics</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaCogs} color="blue.900" boxSize={6} mr={2} />
              <Text>Custom Software Development</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaBriefcase} color="blue.900" boxSize={6} mr={2} />
              <Text>Consulting Services</Text>
            </Flex>
          </Stack>
          <Button colorScheme="blue" variant="solid" size="md">
            Discover More
          </Button>
        </Box>
        <Box flex="1" position="relative" maxW="md" mx="auto">
          <Box
            position="absolute"
            top="0px"
            left="0"
            width="full"
            height="300px"
            bg="blue.900"
            transform="rotate(3deg)"
            zIndex="-1"
          />
          <img
            src="https://placehold.co/600x400"
            alt="Additional services"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              borderRadius: "md",
            }}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default App;
