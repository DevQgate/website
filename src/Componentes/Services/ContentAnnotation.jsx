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

const ContentAnnotation = () => {
  const { t } = useTranslation();
  return (
    <>
    <Header/>
      <Box bg="gray.100">
        {/* Header Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\Content Annotation.jpg"
              alt="Content Annotation"
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
              color="White"
            >
              <Text fontSize="4xl" fontWeight="bold">
                {t("Content Annotation")}
              </Text>
              <Text fontSize="lg">{t("Q-Gate Infotech / Content Annotation")}</Text>
            </Box>
          </Box>
        </Box>

        {/* Introductory Section */}
        <Box bg="white" py={8} mb={8}>
          <Container maxW="7xl" px={4}>
            <Heading as="h1" size="md" mb={4} color="gray.900">
              {t("At Q-Gate Infotech, we understand that precise data annotation is the foundation of effective AI and machine learning models.")}
            </Heading>
            <Text color="gray.700">
              {t("Our Content Annotation services provide meticulous labeling of diverse data types, enabling your AI applications to perform with greater accuracy and efficiency. Our offerings include:")}
            </Text>
          </Container>
        </Box>

        {/* Image, Video, and Text Annotation */}
        <Container maxW="7xl" py={16} px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                {t("Image, Video, and Text Annotation")}
              </Heading>
              <Text color="gray.700" mb={4}>
                {t("Annotating images, videos, and text for AI model training.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Supports computer vision and natural language processing applications.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Ensures precise data labeling for reliable model performance.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Facilitates accurate object recognition and text understanding.")}
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\Componentes\Image\Content Annotation - 1.jpg"
                alt="Image, Video, and Text Annotation"
                borderRadius="lg"
                boxShadow="lg"
              />
            </GridItem>
          </Grid>
        </Container>

        {/* Point Cloud Annotation */}
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
                  src="src\Componentes\Image\Content Annotation - 2.jpg"
                  alt="Point Cloud Annotation"
                  borderRadius="lg"
                  boxShadow="lg"
                />
                {/* Blue Ball */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
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
                  {t("Point Cloud Annotation")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Annotating 3D point cloud data for object recognition.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Essential for autonomous vehicles and robotics applications.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Supports scene understanding and environmental modeling.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Leverages LiDAR technology for detailed spatial analysis.")}
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Box>

        {/* Object Detection and Semantic Segmentation */}
        <Container maxW="7xl" py={16} px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                {t("Object Detection and Semantic Segmentation")}
              </Heading>
              <Text color="gray.700" mb={4}>
                {t("Detailed annotations for object detection tasks.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Pixel-level semantic segmentation for precise visual data interpretation.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Enables accurate understanding of complex visual data.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Supports advanced computer vision applications.")}
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\Componentes\Image\Content Annotation - 3.jpg"
                alt="Object Detection and Semantic Segmentation"
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

export default ContentAnnotation;
