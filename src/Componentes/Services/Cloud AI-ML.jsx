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

const CloudAI_ML = () => {
  return (
    <Box bg="gray.100">
      {/* Header Section */}
      <Box>
        <Box position="relative">
          <Image
            src="src\Componentes\Image\CloudAI_ML.jpg"
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
            color="White"
          >
            <Text fontSize="4xl" fontWeight="bold">
              Cloud-Based AI/ML Solutions
            </Text>
            <Text fontSize="lg">Q-Gate Infotech Private Limited / Cloud-Based AI/ML Solutions</Text>
          </Box>
        </Box>
      </Box>

      {/* Introductory Section with White Background */}
      <Box bg="white" py={8} mb={8}>
        <Container maxW="7xl" px={4}>
          <Heading as="h1" size="md" mb={4} color="gray.900">
            Driving Innovation with Scalable Cloud and Artificial Intelligence Technologies
          </Heading>
          <Text color="gray.700">
            At Q-Gate Infotech, we leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward. Our Cloud-Based AI/ML Solutions offer:
          </Text>
        </Container>
      </Box>

      <Container maxW="7xl" py={16} px={4}>
        {/* Intelligent Applications Section */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <GridItem display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="md" mb={4} color="gray.900">
              Development of Intelligent Applications
            </Heading>
            <Text color="gray.700" mb={4}>
                Enables predictive analytics for informed decision-making.
            </Text>
            <Text color="gray.700" mb={4}>
                Streamlines tasks through automation to boost efficiency.
            </Text>
            <Text color="gray.700" mb={4}>
                Supports real-time decision-making with rapid response to data.
            </Text>
            <Text color="gray.700" mb={4}>
                Continuously evolves through adaptive learning to provide insights.
            </Text>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Image
              src="src\Componentes\Image\AI_ML.jpg"
              alt="AI-powered applications"
              borderRadius="lg"
              boxShadow="lg"
            />
          </GridItem>
        </Grid>
      </Container>

      <Box bg="white" py={16}>
        <Container maxW="7xl" px={4}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            <GridItem display="flex" justifyContent="center" alignItems="center" position="relative">
              <Image
                src="src\Componentes\Image\Geo-Spacial.jpg"
                alt="Geospatial data integration"
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
                Integration with Geospatial Data
              </Heading>
              <Text color="gray.700" mb={4}>
                    Integrates AI/ML with geospatial data for enhanced insights.
              </Text>
              <Text color="gray.700" mb={4}>
                    Enables pattern recognition in complex spatial datasets.
              </Text>
              <Text color="gray.700" mb={4}>
                    Supports anomaly detection for identifying unusual patterns.
              </Text>
              <Text color="gray.700" mb={4}>
                    Enhances predictive modeling for urban planning and resource management.
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      <Container maxW="7xl" py={16} px={4}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <GridItem display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="md" mb={4} color="gray.900">
              Scalable Cloud Infrastructure
            </Heading>
            <Text color="gray.700" mb={4}>
                Ensures scalability and flexibility through cloud platforms.
            </Text>
            <Text color="gray.700" mb={4}>
                Provides accessibility from anywhere for seamless operations.
            </Text>
            <Text color="gray.700" mb={4}>
                Supports efficient data processing and storage for large datasets.
            </Text>
            <Text color="gray.700" mb={4}>
                Reduces need for on-premise infrastructure investment.
            </Text>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Image
              src="src\Componentes\Image\Cloud.jpg"
              alt="Scalable cloud infrastructure"
              borderRadius="lg"
              boxShadow="lg"
            />
          </GridItem>
        </Grid>
      </Container>

      <Box bg="white" py={16}>
        <Container maxW="7xl" px={4}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            <GridItem display="flex" justifyContent="center" alignItems="center" position="relative">
              <Image
                src="src\Componentes\Image\Customized AI Models.jpg"
                alt="Custom AI models"
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
                Customized AI Models
              </Heading>
              <Text color="gray.700" mb={4}>
                    Develops custom ML models tailored to specific business needs.
              </Text>
              <Text color="gray.700" mb={4}>
                    Specializes in language processing, computer vision, and predictive analytics.
              </Text>
              <Text color="gray.700" mb={4}>
                    Builds models that provide actionable insights for decision-making.
              </Text>
              <Text color="gray.700" mb={4}>
                    Delivers solutions that adapt to evolving business challenges.
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CloudAI_ML;
