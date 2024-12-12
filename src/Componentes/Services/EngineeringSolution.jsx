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
import Footer from "../Footer/footer";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EngineeringSolutions = () => {
  const { t } = useTranslation();

  // Hook to detect if a section is in view
  const [refIntro, inViewIntro] = useInView({ triggerOnce: false });
  const [refBIM, inViewBIM] = useInView({ triggerOnce: false });
  const [refReverse, inViewReverse] = useInView({ triggerOnce: false });
  const [refConsultancy, inViewConsultancy] = useInView({ triggerOnce: false });

  return (
    <>
      <Header />
      <Box bg="gray.100">
        {/* Header Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\Engineering Solutions.jpeg"
              alt="Engineering Solutions"
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
                {t("Engineering Solutions")}
              </Text>
              <Text fontSize="lg">
                {t("Q-Gate Infotech Private Limited / Engineering Solutions")}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Introductory Section with White Background */}
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
              {t("Innovative Engineering for Sustainable Development")}
            </Heading>
            <Text color="gray.700">
              {t("Q-Gate Infotech's Engineering Solutions merge cutting-edge technology with engineering expertise to support the design, development and optimization of infrastructure and industrial projects. Our services aim to enhance efficiency, sustainability and innovation in engineering practices. We offer:")}
            </Text>
          </Container>
        </MotionBox>

        {/* Building Information Modeling (BIM) Section */}
        <MotionBox
          ref={refBIM}
          variants={animationVariants}
          initial="hidden"
          animate={inViewBIM ? "visible" : "hidden"}
          py={16}
          px={4}
        >
          <Container maxW="7xl">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem display="flex" flexDirection="column" justifyContent="center">
                <Heading as="h1" size="md" mb={4} color="gray.900">
                  {t("Building Information Modeling (BIM)")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Developing detailed and intelligent 3D models of buildings and infrastructure.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Enabling effective visualization, simulation, and project management.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Facilitating collaboration, reducing errors, and streamlining delivery.")}
                </Text>
              </GridItem>
              <GridItem display="flex" justifyContent="center" alignItems="center">
                <Image
                  src="src\Componentes\Image\BIM.jpg"
                  alt="Building Information Modeling"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </GridItem>
            </Grid>
          </Container>
        </MotionBox>

        {/* Reverse Engineering for Existing Structures Section */}
        <MotionBox
          ref={refReverse}
          variants={animationVariants}
          initial="hidden"
          animate={inViewReverse ? "visible" : "hidden"}
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
                  src="src\Componentes\Image\Reverse Engineering.jpg"
                  alt="Reverse Engineering"
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
              <GridItem display="flex" flexDirection="column" justifyContent="center">
                <Heading as="h2" size="md" mb={4} color="gray.900">
                  {t("Reverse Engineering for Existing Structures")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Utilizing advanced scanning and modeling for structural analysis.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Assisting renovation planning, analysis, and maintenance scheduling.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Ensuring longevity and safety of infrastructure assets.")}
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </MotionBox>

        {/* Engineering Consultancy Section */}
        <MotionBox
          ref={refConsultancy}
          variants={animationVariants}
          initial="hidden"
          animate={inViewConsultancy ? "visible" : "hidden"}
          py={16}
          px={4}
        >
          <Container maxW="7xl">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem display="flex" flexDirection="column" justifyContent="center">
                <Heading as="h1" size="md" mb={4} color="gray.900">
                  {t("Engineering Consultancy")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Providing expert consultancy across various engineering projects.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Conducting feasibility studies, environmental assessments, and optimization.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Enhancing project outcomes with multidisciplinary expertise.")}
                </Text>
              </GridItem>
              <GridItem display="flex" justifyContent="center" alignItems="center">
                <Image
                  src="src\Componentes\Image\Engineering Consultancy.jpg"
                  alt="Engineering Consultancy"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </GridItem>
            </Grid>
          </Container>
        </MotionBox>
      </Box>
      <Footer />
    </>
  );
};

export default EngineeringSolutions;
