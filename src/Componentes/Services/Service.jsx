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
import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();
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
            {t("Services")}
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
              src="src\\Componentes\\Image\\Services\\Geospatial.jpg"
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
              {t("Geospatial Services")}
              </Heading>
              <Text mt={5} fontSize="14">
                {t("Unlock the potential of your assets by using geospatial")}
                {t("intelligence to build geographic and temporal context.")}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Make informed decisions | Increase ROI | Accelerate")}
                {t("collaboration")}
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
                {t("Software Development")}
              </Heading>
              <Text mt={5} fontSize="14">
                {t("Optimize your engineering design with accurate, current, and")}
                {t("reliable geospatial data.")}
              </Text>
              <Text mt={5} fontSize="11">
              {t("Implement data-driven design and planning | Adopt domain")}
                {t("knowledge easily | Manage assets efficiently")}
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
              src="src\Componentes\Image\Services\Software Development.jpg"
              alt="Aerial view of agricultural fields"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>

          {/* Service 3 */}
          <GridItem>
            <Image
              src="src\Componentes\Image\Services\Data Analytics.jpg"
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
                {t("Data Analytics")}
              </Heading>
              <Text mt={5} fontSize="14">
                {t("Build context for your geospatial database and transform it into")}
                {t("actionable insights.")}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Detect and quantify patterns | Take data-driven decisions")}
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
                {t("Engineering Solutions")}
              </Heading>
              <Text mt={5} fontSize="14">
                {t("Leverage geospatial data for planning and optimizing renewable")}
                {t("energy projects.")}
              </Text>
              <Text mt={5} fontSize="11">
              {t("Maximize energy output | Reduce environmental impact")}
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
              src="src\Componentes\Image\Services\Engineering Solutions.jpg"
              alt="Solar panels in a field"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>

          {/* Service 5 */}
          <GridItem>
            <Image
              src="src\Componentes\Image\Services\Cloud- AI ML.jpg"
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
                {t("Cloud-Based AI/ML Solutions")}
              </Heading>
              <Text mt={5} fontSize="14" color="gray.100">
                {t("Plan and execute urban projects with precision using geospatial")}
                {t("insights.")}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Improve infrastructure | Enhance urban planning")}
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
              {t("Content Annotation")}
              </Heading>
              <Text mt={5} fontSize="14">
                {t("Use geospatial analysis to design optimized transportation")}
                {t("networks and logistics.")}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Reduce costs | Enhance efficiency | Improve connectivity")}
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
              src="src\Componentes\Image\Services\Content Annotation.jpg"
              alt="Highway at sunset"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </GridItem>

          

          {/* Service 7 */}
          <GridItem>
            <Image
              src="src\Componentes\Image\Services\Professional Training.jpg"
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
                {t("Professional Training")}
              </Heading>
              <Text mt={5} fontSize="14">
                {t("Use location intelligence to streamline supply chain operations.")}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Optimize routes | Minimize costs | Enhance visibility")}
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
                {t("Talent Solutions")}
              </Heading>
              <Text mt={5} fontSize="14">
                {t("Use geospatial analysis to design optimized transportation")}
                {t("networks and logistics.")}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Reduce costs | Enhance efficiency | Improve connectivity")}
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
              src="src\Componentes\Image\Services\Talent Solutions.jpg"
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
