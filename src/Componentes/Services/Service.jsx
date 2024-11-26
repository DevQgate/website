import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Link,
  Image,
  VStack,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Service = () => {
  return (
    <>
      <Header />
      {/* Video Section */}
      <Box>
        <Box position="relative">
          {/* Video Section */}
          <Box
            as="video"
            src="src\Componentes\Video\Services.mp4" // Path to your video file
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            height="92vh"
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
            <Text fontSize="4xl" fontWeight="bold">
            Services
          </Text>
          <Text fontSize="lg">Q-Gate Infotech Private Limited / Services</Text>
          </Box>
        </Box>
      </Box>

      {/* Services Section */}
      <Box bg="" fontFamily="Arial, sans-serif" py={10}>
        <VStack spacing={6} mb={10} textAlign="center">
          <Heading size="xl" color="gray.900" fontWeight="dark">
            Plan, design, build, and manage your assets better with us
          </Heading>
        </VStack>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={4}
          maxW="4xl"
          mx="auto"
        >
          {/* Service 1 */}
          <GridItem>
            <Image
              src="https://placehold.co/600x400"
              alt="Aerial view of a coastal area with boats and buildings"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            bg="teal.700"
            color="white"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" fontWeight="bold">
              Geospatial Services
              </Heading>
              <Text mt={5} fontSize="14">
                Unlock the potential of your assets by using geospatial
                intelligence to build geographic and temporal context.
              </Text>
              <Text mt={5} fontSize="11">
                Make informed decisions | Increase ROI | Accelerate
                collaboration
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="#" color="white" fontSize="lg">
                <FaArrowRight />
              </Link>
            </Box>
          </GridItem>

          {/* Service 2 */}
          <GridItem
            bg="blue.900"
            color="white"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" fontWeight="bold">
                Software Development
              </Heading>
              <Text mt={5} fontSize="14">
                Optimize your engineering design with accurate, current, and
                reliable geospatial data.
              </Text>
              <Text mt={5} fontSize="11">
                Implement data-driven design and planning | Adopt domain
                knowledge easily | Manage assets efficiently
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="#" color="white" fontSize="lg">
                <FaArrowRight />
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="https://placehold.co/600x400"
              alt="Aerial view of agricultural fields"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>

          {/* Service 3 */}
          <GridItem>
            <Image
              src="https://placehold.co/600x400"
              alt="Telecommunication tower with satellite dishes"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            bg="blue.800"
            color="white"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" fontWeight="bold">
                Data Analytics
              </Heading>
              <Text mt={5} fontSize="14">
                Build context for your geospatial database and transform it into
                actionable insights.
              </Text>
              <Text mt={5} fontSize="11">
                Detect and quantify patterns | Take data-driven decisions
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="#" color="white" fontSize="lg">
                <FaArrowRight />
              </Link>
            </Box>
          </GridItem>

          {/* Service 4 */}
          <GridItem
            bg="green.700"
            color="white"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" fontWeight="bold">
                Engineering Solutions
              </Heading>
              <Text mt={5} fontSize="14">
                Leverage geospatial data for planning and optimizing renewable
                energy projects.
              </Text>
              <Text mt={5} fontSize="11">
                Maximize energy output | Reduce environmental impact
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="#" color="white" fontSize="lg">
                <FaArrowRight />
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="https://placehold.co/600x400"
              alt="Solar panels in a field"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>

          {/* Service 5 */}
          <GridItem>
            <Image
              src="https://placehold.co/600x400"
              alt="City skyline at night"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            bg="purple.800"
            color="white"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" fontWeight="bold">
                Cloud-Based AI/ML Solutions
              </Heading>
              <Text mt={5} fontSize="14" color="gray.100">
                Plan and execute urban projects with precision using geospatial
                insights.
              </Text>
              <Text mt={5} fontSize="11">
                Improve infrastructure | Enhance urban planning
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="#" color="white" fontSize="lg">
                <FaArrowRight />
              </Link>
            </Box>
          </GridItem>

          {/* Service 6 */}
          <GridItem
            bg="red.700"
            color="white"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" fontWeight="bold">
              Content Annotation
              </Heading>
              <Text mt={5} fontSize="14">
                Use geospatial analysis to design optimized transportation
                networks and logistics.
              </Text>
              <Text mt={5} fontSize="11">
                Reduce costs | Enhance efficiency | Improve connectivity
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="#" color="white" fontSize="lg">
                <FaArrowRight />
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="https://placehold.co/600x400"
              alt="Highway at sunset"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>

          

          {/* Service 7 */}
          <GridItem>
            <Image
              src="https://placehold.co/600x400"
              alt="Warehouse with shipping containers"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>
          <GridItem
            bg="orange.700"
            color="white"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" fontWeight="bold">
                Professional Training
              </Heading>
              <Text mt={5} fontSize="14">
                Use location intelligence to streamline supply chain operations.
              </Text>
              <Text mt={5} fontSize="11">
                Optimize routes | Minimize costs | Enhance visibility
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="#" color="white" fontSize="lg">
                <FaArrowRight />
              </Link>
            </Box>
          </GridItem>

          {/* Service 8 */}
          <GridItem
            bg="red.900"
            color="white"
            p={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Heading size="md" fontWeight="bold">
                Talent Solutions
              </Heading>
              <Text mt={5} fontSize="14">
                Use geospatial analysis to design optimized transportation
                networks and logistics.
              </Text>
              <Text mt={5} fontSize="11">
                Reduce costs | Enhance efficiency | Improve connectivity
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="#" color="white" fontSize="lg">
                <FaArrowRight />
              </Link>
            </Box>
          </GridItem>
          <GridItem>
            <Image
              src="https://placehold.co/600x400"
              alt="Highway at sunset"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>


        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Service;
