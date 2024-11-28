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
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

const GeospatialServices = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Box bg="gray.100">
        {/* Careers Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\GGeospatialServices.jpeg"
              alt="Contact"
              width="100%"
              height="70vh "
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
                {t("Geospatial Services")}
              </Text>
              <Text fontSize="lg">
                {t("Q-Gate Infotech Private Limited / Geospatial Services")}
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
              {t("At Q-Gate Infotech, our Geospatial Processing services transform complex spatial data into actionable insights that drive strategic planning and operational efficiency. Utilizing advanced technologies and methodologies, we specialize in:")}
            </Text>
          </Container>
        </Box>

        <Container maxW="7xl" py={16} px={4}>
          {/* First Grid Section */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                {t("Image Data Processing")}
              </Heading>
              <Text color="gray.700" mb={4}>
                {t("Enhancing high-res images from satellites, drones, and aerial platforms.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Extracting key data for agriculture, urban planning, and environmental management.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Providing actionable insights for better decision-making.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Supporting sustainable practices and efficient resource management.")}
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\Componentes\Image\Image Processing.jpg"
                alt="Map of a region with highlighted areas"
                borderRadius="lg"
                boxShadow="lg"
              />
            </GridItem>
          </Grid>
        </Container>

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
                  src="src\Componentes\Image\Hydro Flattening.png"
                  alt="Aerial view of a forest"
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
                  {t("Hydro Flattening")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Processing LiDAR data for accurate hydro-flattened DEMs.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Enhancing hydrological modeling with hydro-flattened surfaces.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Supporting flood risk assessment through hydro-flattened DEMs.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Improving water resource management with precise elevation models.")}
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Box>

        <Container maxW="7xl" py={16} px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                {t("Vegetation Analysis")}
              </Heading>
              <Text color="gray.700" mb={4}>
                {t("Assessing vegetation health using multispectral and hyperspectral imagery.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Estimating biomass for forestry and agricultural applications.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Classifying land cover for ecological and environmental studies.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Supporting forestry management, agriculture, and ecological research.")}
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\Componentes\Image\Vegetation Analysis.png"
                alt="Map of a region with highlighted areas"
                borderRadius="lg"
                boxShadow="lg"
              />
            </GridItem>
          </Grid>
        </Container>

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
                  src="src\Componentes\Image\Satellite Data Analysis.png"
                  alt="Aerial view of a forest"
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
                  {t("Satellite Data Analysis")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Monitoring environmental changes through satellite imagery.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Assessing natural resources with satellite data analysis.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Supporting disaster management with real-time data.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Enabling timely decision-making through data interpretation.")}
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default GeospatialServices;
