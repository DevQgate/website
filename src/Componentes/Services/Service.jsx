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
import Footer from "../Footer/footer";
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
            <Text fontSize="lg">
              {t("Q-Gate Infotech Private Limited / Services")}
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Services Section */}
      <Box bg="white" fontFamily="Arial, sans-serif" py={10}>
        <VStack spacing={6} mb={10} textAlign="center">
          <Heading size="xl" color="gray.900" fontWeight="dark">
            {t("Plan, design, build, and manage your assets better with us")}
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
                {t(
                  "Geospatial Processing services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency."
                )}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Image Data Processing")}
                <br />
                {t("Satellite Data Analysis")}
                <br />
                {t("Hydro Flattening")}
                <br />
                {t("Vegetation Analysis")}
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="/geospatial-services" color="white" fontSize="lg">
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
                {t(
                  "Our Software Development services are designed to create custom solutions that address your specific challenges and objectives."
                )}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Custom Software Development")}
                <br />
                {t("Enterprise Management Solutions ")}
                <br />
                {t("Web & Mobile Application Development")}
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="/software-development" color="white" fontSize="lg">
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
                {t(
                  "Data Analytics services empower organizations to transform vast amounts of complex data into actionable intelligence. Leveraging advanced algorithms and machine learning techniques."
                )}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Advanced Imagery Analytics")}
                <br />
                {t("Spectral Analysis")}
                <br />
                {t("Computer Vision Applications")}
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="/data-analytics" color="white" fontSize="lg">
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
                {t(
                  "Engineering Solutions merge cutting-edge technology with engineering expertise to support the design, development, and optimization of infrastructure and industrial projects."
                )}
              </Text>
              <Text mt={5} fontSize="11">
                {t("BIM ")}
                <br />
                {t("Reverse Engineering")}
                <br />
                {t("Engineering Consultancy")}
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="/engineering-solutions" color="white" fontSize="lg">
              
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
                {t(
                  "We leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward."
                )}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Development of Intelligent Applications")}
                <br />
                {t("Integration with Geospatial Data")}
                <br />
                {t("Scalable Cloud Infrastructure")}
                <br />
                {t("Customized AI Models")}
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="/cloud-ai-ml" color="white" fontSize="lg">
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
                {t(
                  "Our Content Annotation services provide meticulous labeling of diverse data types, enabling your AI applications to perform with greater accuracy and efficiency."
                )}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Image, Video, and Text Annotation ")}
                <br />
                {t("Point Cloud Annotation ")}
                <br />
                {t("Object Detection and Semantic Segmentation")}
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="/content-annotation" color="white" fontSize="lg">
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
                {t(
                  "Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology."
                )}
              </Text>
              <Text mt={5} fontSize="11">
                {t("On-the-Job Training Programs")}
                <br />
                {t("Internships with Stipends")}
                <br />
                {t("Collaborations with Educational Institutions")}
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="/professional-training" color="white" fontSize="lg">
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
                {t(
                  "Our Talent Solutions service provides access to a diverse pool of highly skilled professionals across various domains, enabling your business to meet its objectives effectively."
                )}
              </Text>
              <Text mt={5} fontSize="11">
                {t("Staff Augmentation")}
                <br />
                {t("Dedicated Project Teams")}
                <br />
                {t("Flexible Engagement Models")}
                <br />
                {t("Quality Assurance and Compliance")}
              </Text>
            </Box>
            <Box mt={4}>
              <Link href="/talent-solutions" color="white" fontSize="lg">
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
