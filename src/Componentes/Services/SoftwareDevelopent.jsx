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

// MotionBox wrapper for animation
const MotionBox = motion(Box);

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SoftwareDevelopment = () => {
  const { t } = useTranslation();

  // Hook to detect if a section is in view
  const [refIntro, inViewIntro] = useInView({ triggerOnce: false });
  const [refCustomSoftware, inViewCustomSoftware] = useInView({ triggerOnce: false });
  const [refWebDevelopment, inViewWebDevelopment] = useInView({ triggerOnce: false });
  const [refMobileApp, inViewMobileApp] = useInView({ triggerOnce: false });
  const [refEnterpriseSolutions, inViewEnterpriseSolutions] = useInView({ triggerOnce: false });

  return (
    <>
      <Header />
      <Box bg="gray.100">
        {/* Header Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\SoftwareDevelopment.jpg"
              alt="Software Development"
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
                {t("Software Development")}
              </Text>
              <Text fontSize="lg">
                {t("Q-Gate Infotech Private Limited / Software Development")}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Introductory Section */}
        <MotionBox
          ref={refIntro}
          variants={animationVariants}
          initial="hidden"
          animate={inViewIntro ? "visible" : "hidden"}
          bg="white"
          py={8}
          mb={8}
        >
          <Container maxW="7xl" px={4}>
            <Heading as="h1" size="md" mb={4} color="gray.900">
              {t("Empowering Your Business with Tailored Software Solutions")}
            </Heading>
            <Text color="gray.700">
              {t("At Q-Gate Infotech, we specialize in creating software solutions that align with your business goals. Our expertise spans across:")}
            </Text>
          </Container>
        </MotionBox>

        {/* Custom Software Development Section */}
        <Container maxW="7xl" py={16} px={4}>
          <MotionBox
            ref={refCustomSoftware}
            variants={animationVariants}
            initial="hidden"
            animate={inViewCustomSoftware ? "visible" : "hidden"}
          >
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Heading as="h1" size="md" mb={4} color="gray.900">
                  {t("Custom Software Development")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Developing software solutions tailored to unique business needs across industries.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Leveraging the latest technologies for robust and scalable applications.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Creating user-friendly designs that enhance operational efficiency.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Supporting business growth through innovative and customized software.")}
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src="src\Componentes\Image\Custom-Software-Development.jpg"
                  alt="Custom Software Development"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>

        {/* Web Development Section */}
        <MotionBox
          ref={refWebDevelopment}
          variants={animationVariants}
          initial="hidden"
          animate={inViewWebDevelopment ? "visible" : "hidden"}
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
                  src="src\Componentes\Image\Web developer.jpg"
                  alt="Web Development"
                  borderRadius="lg"
                  boxShadow="lg"
                />
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
                  {t("Web Development")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Building responsive, dynamic websites that enhance user engagement.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Utilizing modern web technologies for optimized speed and performance.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Designing intuitive interfaces for an exceptional user experience.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Ensuring seamless functionality across all devices and platforms.")}
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </MotionBox>

        {/* Mobile Application Development Section */}
        <Container maxW="7xl" py={16} px={4}>
          <MotionBox
            ref={refMobileApp}
            variants={animationVariants}
            initial="hidden"
            animate={inViewMobileApp ? "visible" : "hidden"}
          >
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Heading as="h1" size="md" mb={4} color="gray.900">
                  {t("Mobile Application Development")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Developing high-performance mobile apps for both Android and iOS platforms.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Crafting intuitive and engaging user interfaces for an optimal mobile experience.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Ensuring compatibility and smooth functionality across a variety of devices.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Integrating advanced features to enhance usability and meet business goals.")}
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src="src\Componentes\Image\App.jpg"
                  alt="Mobile Application Development"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>

        {/* Enterprise Management Solutions Section */}
        <MotionBox
          ref={refEnterpriseSolutions}
          variants={animationVariants}
          initial="hidden"
          animate={inViewEnterpriseSolutions ? "visible" : "hidden"}
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
                  src="src\Componentes\Image\Enterprise Management Solutions.jpg"
                  alt="Enterprise Management Solutions"
                  borderRadius="lg"
                  boxShadow="lg"
                />
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
                  {t("Enterprise Management Solutions")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Implementing ERP and CRM systems to streamline resource management.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Enhancing communication and collaboration across teams.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Optimizing workflows with automation tools for greater efficiency.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Supporting informed decision-making to improve overall business operations.")}
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

export default SoftwareDevelopment;
