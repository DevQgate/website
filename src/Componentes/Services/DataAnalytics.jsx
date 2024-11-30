import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import { useTranslation } from "react-i18next";

const DataAnalytics = () => {
  const { t } = useTranslation();
  return (
    <>
    <Header/>
      <Box bg="gray.100">
        {/* Header Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\DataAnalytics.jpg"
              alt="Data Analytics"
              width="100%"
              height="96"
              objectFit="cover"
            />
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
            >
              <Text fontSize="4xl" fontWeight="bold">
                {t("Data Analytics")}
              </Text>
              <Text fontSize="lg">
                {t("Q-Gate Infotech Private Limited / Data Analytics")}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Introductory Section with White Background */}
        <Box bg="white" py={8} mb={8}>
          <Container maxW="7xl" px={4}>
            <Heading as="h1" size="md" mb={4} color="gray.900">
              {t("Unlocking the Power of Spatial Data for Informed Decision-Making")}
            </Heading>
            <Text color="gray.700">
              {t("At Q-Gate Infotech, our Data Analytics services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency. Utilizing advanced technologies and methodologies, we specialize in:")}
            </Text>
          </Container>
        </Box>

        {/* Advanced Imagery Analytics Section */}
        <Container maxW="7xl" py={16} px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                {t("Advanced Imagery Analytics")}
              </Heading>
              <Text color="gray.700" mb={4}>
                {t("Extracting meaningful patterns from high-resolution satellite and aerial imagery.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Enabling informed decision-making in agriculture, forestry, mining, and urban planning.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Providing real-time data insights for accurate trend analysis.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Supporting industry-specific insights to drive efficiency and innovation.")}
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\Componentes\Image\Advanced Imagery Analytics.jpg"
                alt="Satellite Imagery"
                borderRadius="lg"
                boxShadow="lg"
              />
            </GridItem>
          </Grid>
        </Container>

        {/* Spectral Analysis Section */}
        <Box bg="white" py={16}>
          <Container maxW="7xl" px={4}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
              >
                <Image
                  src="src\Componentes\Image\Spectral Analysis.jpg"
                  alt="Spectral Image"
                  borderRadius="lg"
                  boxShadow="lg"
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  width="24"
                  height="24"
                  bg="blue.200"
                  borderRadius="full"
                  transform="translate(-12px, -12px)"
                />
              </GridItem>
              <GridItem
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Heading as="h2" size="md" mb={4} color="gray.900">
                  {t("Spectral Analysis")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Identifying material compositions through multispectral and hyperspectral imaging.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Assessing vegetation health for environmental monitoring and precision agriculture.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Locating mineral deposits critical to resource exploration.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Supporting mineral exploration and environmental applications.")}
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Box>

        {/* Computer Vision Applications Section */}
        <Container maxW="7xl" py={16} px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                {t("Computer Vision Applications")}
              </Heading>

              <Text color="gray.700" mb={4}>
                {t("Developing models for object detection and classification.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Enabling automated surveillance and monitoring systems.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Supporting automation across industries through advanced vision tech.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Tracking and analyzing objects in real time for various applications.")}
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\Componentes\Image\DataAnalytics.jpeg"
                alt="Computer Vision Model"
                borderRadius="lg"
                boxShadow="lg"
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Footer/>
    </>
  );
};

export default DataAnalytics;
