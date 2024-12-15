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

// MotionBox wrapper for animation
const MotionBox = motion(Box);

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProfessionalTraining = () => {
  const { t } = useTranslation();

  // Hook to detect if a section is in view
  const [refIntro, inViewIntro] = useInView({ triggerOnce: false });
  const [refOnJobTraining, inViewOnJobTraining] = useInView({ triggerOnce: false });
  const [refInternships, inViewInternships] = useInView({ triggerOnce: false });
  const [refCollaborations, inViewCollaborations] = useInView({ triggerOnce: false });
  const [refRuralDevelopment, inViewRuralDevelopment] = useInView({ triggerOnce: false });

  return (
    <>
      <Header />
      <Box bg="gray.100">
        {/* Header Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\Professional Training.jpg"
              alt="Professional Training"
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
                {t("Professional Training")}
              </Text>
              <Text fontSize="lg">{t("Q-Gate Infotech / Professional Training")}</Text>
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
              {t("At Q-Gate Infotech, we believe that investing in people is key to driving innovation and achieving excellence.")}
            </Heading>
            <Text color="gray.700">
              {t("Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology. Our initiatives include:")}
            </Text>
          </Container>
        </MotionBox>

        {/* On-the-Job Training Section */}
        <Container maxW="7xl" py={16} px={4}>
          <MotionBox
            ref={refOnJobTraining}
            variants={animationVariants}
            initial="hidden"
            animate={inViewOnJobTraining ? "visible" : "hidden"}
          >
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem display="flex" flexDirection="column" justifyContent="center">
                <Heading as="h1" size="md" mb={4} color="gray.900">
                  {t("On-the-Job Training Programs")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Hands-on training with real projects.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Mentorship from experienced professionals.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Accelerates learning through practical experience.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Prepares individuals for industry demands.")}
                </Text>
              </GridItem>
              <GridItem display="flex" justifyContent="center" alignItems="center">
                <Image
                  src="src\Componentes\Image\Professional Training - 1.jpg"
                  alt="On-the-Job Training"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>

        {/* Internships with Stipends */}
        <Box bg="white" py={16}>
          <Container maxW="7xl" px={4}>
            <MotionBox
              ref={refInternships}
              variants={animationVariants}
              initial="hidden"
              animate={inViewInternships ? "visible" : "hidden"}
            >
              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
                <GridItem
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                >
                  <Image
                    src="src\Componentes\Image\Professional Training - 2.jpg"
                    alt="Internships with Stipends"
                    borderRadius="lg"
                    boxShadow="lg"
                  />
                  {/* Blue Ball */}
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
                    {t("Internships with Stipends")}
                  </Heading>
                  <Text color="gray.700" mb={4}>
                    {t("Paid internships for financial support.")}
                  </Text>
                  <Text color="gray.700" mb={4}>
                    {t("Develop essential industry exposure.")}
                  </Text>
                  <Text color="gray.700" mb={4}>
                    {t("Contribute meaningfully to real projects.")}
                  </Text>
                  <Text color="gray.700" mb={4}>
                    {t("Gain insights into professional workflows.")}
                  </Text>
                </GridItem>
              </Grid>
            </MotionBox>
          </Container>
        </Box>

        {/* Collaborations with Educational Institutions */}
        <Container maxW="7xl" py={16} px={4}>
          <MotionBox
            ref={refCollaborations}
            variants={animationVariants}
            initial="hidden"
            animate={inViewCollaborations ? "visible" : "hidden"}
          >
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <GridItem display="flex" flexDirection="column" justifyContent="center">
                <Heading as="h1" size="md" mb={4} color="gray.900">
                  {t("Collaborations with Educational Institutions")}
                </Heading>
                <Text color="gray.700" mb={4}>
                  {t("Enhance curricula with industry insights.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Bridge the gap between academia and industry.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Sponsor innovative research projects.")}
                </Text>
                <Text color="gray.700" mb={4}>
                  {t("Encourage student engagement with technology.")}
                </Text>
              </GridItem>
              <GridItem display="flex" justifyContent="center" alignItems="center">
                <Image
                  src="src/Componentes/Image/Professional Training - 3.jpg"
                  alt="Educational Collaboration"
                  borderRadius="lg"
                  boxShadow="lg"
                />
              </GridItem>
            </Grid>
          </MotionBox>
        </Container>

        {/* Empowering Rural Development */}
        <Box bg="white" py={16}>
          <Container maxW="7xl" px={4}>
            <MotionBox
              ref={refRuralDevelopment}
              variants={animationVariants}
              initial="hidden"
              animate={inViewRuralDevelopment ? "visible" : "hidden"}
            >
              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
                <GridItem
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  position="relative"
                >
                  <Image
                    src="src/Componentes/Image/Professional Training - 4.jpg"
                    alt="Rural Development"
                    borderRadius="lg"
                    boxShadow="lg"
                  />
                  {/* Blue Ball */}
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
                    {t("Empowering Rural Development")}
                  </Heading>
                  <Text color="gray.700" mb={4}>
                    {t("Focus on recruiting talent from rural areas.")}
                  </Text>
                  <Text color="gray.700" mb={4}>
                    {t("Provide equal opportunities for local communities.")}
                  </Text>
                  <Text color="gray.700" mb={4}>
                    {t("Stimulate economic growth in underserved regions.")}
                  </Text>
                  <Text color="gray.700" mb={4}>
                    {t("Contribute to social responsibility and community upliftment.")}
                  </Text>
                </GridItem>
              </Grid>
            </MotionBox>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProfessionalTraining;
