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

const TalentSolutions = () => {
  return (
    <>
      <Header />
      <Box bg="gray.100">
        {/* Header Section */}
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\TalentSolutions.jpg"
              alt="Talent Solutions"
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
                Empowering Your Business with Skilled Professionals and Flexible
                Engagement Models
              </Text>
              <Text fontSize="lg">Q-Gate Infotech / Talent Solutions</Text>
            </Box>
          </Box>
        </Box>

        {/* Introductory Section */}
        <Box bg="white" py={8} mb={8}>
          <Container maxW="7xl" px={4}>
            <Heading as="h1" size="md" mb={4} color="gray.900">
              At Q-Gate Infotech, we recognize that having the right talent is
              crucial for organizational success.
            </Heading>
            <Text color="gray.700">
              Our Talent Solutions service provides access to a diverse pool of
              highly skilled professionals, enabling your business to meet its
              objectives effectively. Our offerings include:
            </Text>
          </Container>
        </Box>

        {/* Staff Augmentation */}
        <Container maxW="7xl" py={16} px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                Staff Augmentation
              </Heading>
              <Text color="gray.700" mb={4}>
                Qualified experts to supplement your teams.
              </Text>
              <Text color="gray.700" mb={4}>
                Scalable resources based on project demands.
              </Text>
              <Text color="gray.700" mb={4}>
                Seamless integration with your existing workforce.
              </Text>
              <Text color="gray.700" mb={4}>
                Expertise in geospatial technologies, software, and analytics.
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\Componentes\Image\StaffAugmentation.jpg"
                alt="Staff Augmentation"
                borderRadius="lg"
                boxShadow="lg"
              />
            </GridItem>
          </Grid>
        </Container>

        {/* Dedicated Project Teams */}
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
                  src="src\Componentes\Image\DedicatedTeams.jpg"
                  alt="Dedicated Project Teams"
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
                  Dedicated Project Teams
                </Heading>
                <Text color="gray.700" mb={4}>
                  Exclusive teams focused on your assignments.
                </Text>
                <Text color="gray.700" mb={4}>
                  Ensures alignment with organizational goals.
                </Text>
                <Text color="gray.700" mb={4}>
                  Consistent collaboration with your internal teams.
                </Text>
                <Text color="gray.700" mb={4}>
                  Promotes organizational culture fit.
                </Text>
              </GridItem>
            </Grid>
          </Container>
        </Box>

        {/* Flexible Engagement Models */}
        <Container maxW="7xl" py={16} px={4}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
            <GridItem
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Heading as="h1" size="md" mb={4} color="gray.900">
                Flexible Engagement Models
              </Heading>
              <Text color="gray.700" mb={4}>
                Tailored engagement options based on business needs.
              </Text>
              <Text color="gray.700" mb={4}>
                Short-term contracts for quick solutions.
              </Text>
              <Text color="gray.700" mb={4}>
                Long-term placements for sustained support.
              </Text>
              <Text color="gray.700" mb={4}>
                Project-based arrangements for specific goals.
              </Text>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="src\Componentes\Image\FlexibleEngagement.jpg"
                alt="Flexible Engagement"
                borderRadius="lg"
                boxShadow="lg"
              />
            </GridItem>
          </Grid>
        </Container>

        {/* Quality Assurance and Compliance */}
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
                  src="src\Componentes\Image\QualityAssurance.jpg"
                  alt="Quality Assurance"
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
                  Quality Assurance and Compliance
                </Heading>
                <Text color="gray.700" mb={4}>
                  Rigorous vetting of all professionals.
                </Text>
                <Text color="gray.700" mb={4}>
                  Ensure high standards of technical proficiency.
                </Text>
                <Text color="gray.700" mb={4}>
                  Handle all HR management and compliance aspects.
                </Text>
                <Text color="gray.700" mb={4}>
                  Focus on your core business while we manage the rest.
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

export default TalentSolutions;
