import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const ProfessionalTraining = () => {
  return (
    <Box bg="gray.100">
      {/* Header Section */}
      <Box>
        <Box position="relative">
          <Image
            src="src\Componentes\Image\ProfessionalTraining.jpg"
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
            color="White"
          >
            <Text fontSize="4xl" fontWeight="bold">
                Professional Training
            </Text>
            <Text fontSize="lg">
              Q-Gate Infotech / Professional Training
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Introductory Section with White Background */}
      <Box bg="white" py={8} mb={8}>
        <Container maxW="7xl" px={4}>
          <Heading as="h1" size="md" mb={4} color="gray.900">
            At Q-Gate Infotech, we believe that investing in people is key to driving innovation and achieving excellence.
          </Heading>
          <Text color="gray.700">
            Our Professional Training services are designed to empower individuals, particularly fresh graduates and those from rural communities, by providing opportunities to develop valuable skills and build successful careers in technology. Our initiatives include:
          </Text>
        </Container>
      </Box>

      <Container maxW="7xl" py={16} px={4}>
        {/* On-the-Job Training Section */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <GridItem display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="md" mb={4} color="gray.900">
              On-the-Job Training Programs
            </Heading>
            <Text color="gray.700" mb={4}>
              Hands-on training with real projects.
            </Text>
            <Text color="gray.700" mb={4}>
              Mentorship from experienced professionals.
            </Text>
            <Text color="gray.700" mb={4}>
              Accelerates learning through practical experience.
            </Text>
            <Text color="gray.700" mb={4}>
              Prepares individuals for industry demands.
            </Text>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Image
              src="src\Componentes\Image\OnJobTraining.jpg"
              alt="On-the-Job Training"
              borderRadius="lg"
              boxShadow="lg"
            />
          </GridItem>
        </Grid>
      </Container>

      <Box bg="white" py={16}>
        <Container maxW="7xl" px={4}>
          {/* Internships with Stipends */}
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            <GridItem display="flex" justifyContent="center" alignItems="center" position="relative">
              <Image
                src="src\Componentes\Image\Internships.jpg"
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
                Internships with Stipends
              </Heading>
              <Text color="gray.700" mb={4}>
                Paid internships for financial support.
              </Text>
              <Text color="gray.700" mb={4}>
                Develop essential industry exposure.
              </Text>
              <Text color="gray.700" mb={4}>
                Contribute meaningfully to real projects.
              </Text>
              <Text color="gray.700" mb={4}>
                Gain insights into professional workflows.
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container maxW="7xl" py={16} px={4}>
        {/* Collaborations with Educational Institutions */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <GridItem display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="md" mb={4} color="gray.900">
              Collaborations with Educational Institutions
            </Heading>
            <Text color="gray.700" mb={4}>
              Enhance curricula with industry insights.
            </Text>
            <Text color="gray.700" mb={4}>
              Bridge the gap between academia and industry.
            </Text>
            <Text color="gray.700" mb={4}>
              Sponsor innovative research projects.
            </Text>
            <Text color="gray.700" mb={4}>
              Encourage student engagement with technology.
            </Text>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Image
              src="src\Componentes\Image\EducationCollaboration.jpg"
              alt="Educational Collaboration"
              borderRadius="lg"
              boxShadow="lg"
            />
          </GridItem>
        </Grid>
      </Container>

      <Box bg="white" py={16}>
        <Container maxW="7xl" px={4}>
          {/* Empowering Rural Development */}
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            <GridItem display="flex" justifyContent="center" alignItems="center" position="relative">
              <Image
                src="src\Componentes\Image\RuralDevelopment.jpg"
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
                Empowering Rural Development
              </Heading>
              <Text color="gray.700" mb={4}>
                Focus on recruiting talent from rural areas.
              </Text>
              <Text color="gray.700" mb={4}>
                Provide equal opportunities for local communities.
              </Text>
              <Text color="gray.700" mb={4}>
                Stimulate economic growth in underserved regions.
              </Text>
              <Text color="gray.700" mb={4}>
                Contribute to social responsibility and community upliftment.
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ProfessionalTraining;
