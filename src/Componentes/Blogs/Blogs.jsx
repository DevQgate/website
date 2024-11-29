import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Card = ({ image, title, description }) => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        height="200px"
        width="100%"
      />
      <Box p="4">
        <Heading as="h2" size="md" mb="2">
          {t(title)} {/* Use the t function for title */}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {t(description)} {/* Use the t function for description */}
        </Text>
      </Box>
    </Box>
  );
};

const App = () => {
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <>
      <Header />
      <Box>
        {/* Blogs Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\Blogs\Blogs.jpg"
              alt={t("Blogs")}
              width="100%"
              height="96vh"
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
              bg="rgba(0, 0, 0, 0.5)" // Added overlay effect
            ></Box>
          </Box>
        </Box>

        {/* News Cards Section */}
        <Container maxW="container.xl" py="8">
          <SimpleGrid columns={[1, 2, 3]} spacing="4">
            <Card
              image="src\Componentes\Image\Blogs\Geospatial Data Analysis for Environmental Monitoring.png"
              title={t("Geospatial Data Analysis for Environmental Monitoring")}
              description={t("Explore how geospatial data analysis is used to monitor and protect the environment. Learn about the latest tools and techniques in this field.")}
            />
            <Card
              image="src\Componentes\Image\Blogs\Remote Sensing Applications in Agriculture.png"
              title={t("Remote Sensing Applications in Agriculture")}
              description={t("Discover the applications of remote sensing in agriculture. Understand how satellite imagery helps in crop monitoring and yield prediction.")}
            />
            <Card
              image="src\Componentes\Image\Blogs\GIS in Urban Planning and Development.jpg"
              title={t("GIS in Urban Planning and Development")}
              description={t("Learn about the role of Geographic Information Systems (GIS) in urban planning. See how GIS technology aids in sustainable city development.")}
            />
            <Card
              image="src\Componentes\Image\Blogs\Satellite Imagery Processing Techniques.jpeg"
              title={t("Satellite Imagery Processing Techniques")}
              description={t("Understand the techniques used in processing satellite imagery. Gain insights into the methods for enhancing and analyzing satellite data.")}
            />
            <Card
              image="src\Componentes\Image\Blogs\Integration of AI in Geospatial Technologies.jpg"
              title={t("Integration of AI in Geospatial Technologies")}
              description={t("Explore the integration of Artificial Intelligence (AI) in geospatial technologies. Learn how AI is revolutionizing geospatial data analysis.")}
            />
            <Card
              image="src\Componentes\Image\Blogs\Climate Change Modeling using Geospatial Data.jpg"
              title={t("Climate Change Modeling using Geospatial Data")}
              description={t("Discover how geospatial data is used in climate change modeling. Understand the impact of geospatial analysis on climate research.")}
            />
            <Card
              image="src\Componentes\Image\Blogs\Handling Big Data in Geospatial Analysis.jpeg"
              title={t("Handling Big Data in Geospatial Analysis")}
              description={t("Learn about the challenges and solutions in handling big data in geospatial analysis. See how big data technologies are applied in this field.")}
            />
            <Card
              image="src\Componentes\Image\Blogs\Advancements in 3D Mapping Technologies.jpeg"
              title={t("Advancements in 3D Mapping Technologies")}
              description={t("Explore the latest advancements in 3D mapping technologies. Understand how 3D mapping is transforming various industries.")}
            />
            <Card
              image="src\Componentes\Image\Blogs\Innovative Geospatial Data Visualization Techniques.jpeg"
              title={t("Innovative Geospatial Data Visualization Techniques")}
              description={t("Discover innovative techniques for visualizing geospatial data. Learn how effective visualization enhances data interpretation and decision-making.")}
            />
          </SimpleGrid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default App;
