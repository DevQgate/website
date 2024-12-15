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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const CloudAI_ML = () => {
  const { t } = useTranslation();

  // Hooks to observe sections
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <>
      <Header />
      <Box bg="gray.100">
        {/* Header Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\\Componentes\\Image\\CloudAI_ML.jpg"
              alt="Cloud AI-ML Solutions"
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
              color="Black"
            >
              <Text fontSize="4xl" fontWeight="bold">
                {t("Cloud-Based AI/ML Solutions")}
              </Text>
              <Text fontSize="lg">
                {t(
                  "Q-Gate Infotech Private Limited / Cloud-Based AI/ML Solutions"
                )}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Introductory Section */}
        <MotionBox
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={sectionVariant}
          transition={{ duration: 0.8 }}
          bg="white"
          py={8}
          mb={8}
        >
          <Container maxW="7xl" px={4}>
            <Heading as="h1" size="md" mb={4} color="gray.900">
              {t(
                "Driving Innovation with Scalable Cloud and Artificial Intelligence Technologies"
              )}
            </Heading>
            <Text color="gray.700">
              {t(
                "At Q-Gate Infotech, we leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward. Our Cloud-Based AI/ML Solutions offer:"
              )}
            </Text>
          </Container>
        </MotionBox>

        <Container maxW="7xl" py={16} px={4}>
          {/* Intelligent Applications Section */}
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <MotionBox
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={sectionVariant}
              transition={{ duration: 0.8 }}
              as={GridItem}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                {t("Development of Intelligent Applications")}
              </Heading>
              <Text color="gray.700" mb={4}>
                {t(
                  "Enables predictive analytics for informed decision-making."
                )}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Streamlines tasks through automation to boost efficiency.")}
              </Text>
              <Text color="gray.700" mb={4}>
                {t(
                  "Supports real-time decision-making with rapid response to data."
                )}
              </Text>
              <Text color="gray.700" mb={4}>
                {t(
                  "Continuously evolves through adaptive learning to provide insights."
                )}
              </Text>
            </MotionBox>
            <MotionBox
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={sectionVariant}
              transition={{ duration: 1 }}
              as={GridItem}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\\Componentes\\Image\\AI_ML.jpg"
                alt="AI-powered applications"
                borderRadius="lg"
                boxShadow="lg"
              />
            </MotionBox>
          </Grid>
        </Container>

        {/* Geospatial Integration Section */}
        <MotionBox
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={sectionVariant}
          transition={{ duration: 0.8 }}
          bg="white"
          py={16}
        >
          <Container maxW="7xl" px={4}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
              >
                <Image
                  src="src\\Componentes\\Image\\Geo-Spacial.jpg"
                  alt="Geospatial data integration"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </GridItem>
              <GridItem
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Heading as="h2" size="md" mb={4} color="gray.900">
                  {t("Integration with Geospatial Data")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t(
                    "Integrates AI/ML with geospatial data for enhanced insights."
                  )}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t(
                    "Enables pattern recognition in complex spatial datasets."
                  )}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t(
                    "Supports anomaly detection for identifying unusual patterns."
                  )}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t(
                    "Enhances predictive modeling for urban planning and resource management."
                  )}
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </MotionBox>

        {/* Scalable Cloud Infrastructure Section */}
        <Container maxW="7xl" py={16} px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <MotionBox
              ref={ref4}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={sectionVariant}
              transition={{ duration: 0.8 }}
              as={GridItem}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                {t("Scalable Cloud Infrastructure")}
              </Heading>
              <Text color="gray.700" mb={4}>
                {t(
                  "Provides accessibility from anywhere for seamless operations."
                )}
              </Text>
              <Text color="gray.700" mb={4}>
                {t(
                  "Supports efficient data processing and storage for large datasets."
                )}
              </Text>
              <Text color="gray.700" mb={4}>
                {t("Reduces need for on-premise infrastructure investment.")}
              </Text>
            </MotionBox>
            <MotionBox
              ref={ref4}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={sectionVariant}
              transition={{ duration: 1 }}
              as={GridItem}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\\Componentes\\Image\\Cloud.jpg"
                alt="Scalable cloud infrastructure"
                borderRadius="lg"
                boxShadow="lg"
              />
            </MotionBox>
          </Grid>
        </Container>

        {/* Customized AI Models Section */}
        <MotionBox
          ref={ref5}
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={sectionVariant}
          transition={{ duration: 0.8 }}
          bg="white"
          py={16}
        >
          <Container maxW="7xl" px={4}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="relative"
              >
                <Image
                  src="src\\Componentes\\Image\\Customized AI Models.jpg"
                  alt="Custom AI models"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </GridItem>
              <GridItem
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Heading as="h2" size="md" mb={4} color="gray.900">
                  {t("Customized AI Models")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t(
                    "Develops custom ML models tailored to specific business needs."
                  )}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t(
                    "Specializes in language processing, computer vision, and predictive analytics."
                  )}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t(
                    "Builds models that provide actionable insights for decision-making."
                  )}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t(
                    "Delivers solutions that adapt to evolving business challenges."
                  )}
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </MotionBox>
      </Box>
      <Footer />
    </>
  );
};

export default CloudAI_ML;
