import React from 'react';
import { Box, Container, Heading, Text, Image, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionText = motion(Text);

const CloudAI_ML = () => {
  return (
    <Box bg="gray.100">
      {/* Header Section */}
      <Box>
        <Box position="relative">
          <MotionImage
            src="src\Componentes\Image\CloudAI_ML.jpg"
            alt="Cloud AI-ML Solutions"
            width="100%"
            height="96"
            objectFit="cover"
            initial={{ opacity: 0, x: -100 }}  // Start from left
            whileInView={{ opacity: 1, x: 0 }}  // Move to its original position
            transition={{ duration: 1 }}
            viewport={{ once: false }}
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
            <MotionText 
              fontSize="4xl" 
              fontWeight="bold" 
              initial={{ y: -50 }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }}
            >
              Cloud-Based AI/ML Solutions
            </MotionText>
            <MotionText 
              fontSize="lg" 
              initial={{ y: -50 }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }}
            >
              Q-Gate Infotech Private Limited / Cloud-Based AI/ML Solutions
            </MotionText>
          </Box>
        </Box>
      </Box>

      {/* Introductory Section with White Background */}
      <Box bg="white" py={8} mb={8}>
        <Container maxW="7xl" px={4}>
          <Heading as="h1" size="md" mb={4} color="gray.900">
            Driving Innovation with Scalable Cloud and Artificial Intelligence Technologies
          </Heading>
          <MotionText 
            color="gray.700" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 1 }}
            viewport={{ once: false }} // Triggers animation on every scroll
          >
            At Q-Gate Infotech, we leverage the synergy of cloud computing and advanced Artificial Intelligence (AI) and Machine Learning (ML) algorithms to develop intelligent solutions that propel businesses forward. Our Cloud-Based AI/ML Solutions offer:
          </MotionText>
        </Container>
      </Box>

      <Container maxW="7xl" py={16} px={4}>
        {/* Intelligent Applications Section */}
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <GridItem display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="md" mb={4} color="gray.900">
              Development of Intelligent Applications
            </Heading>
            <MotionText 
              color="gray.700" 
              mb={4} 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }} // Triggers animation on every scroll
            >
              Enables predictive analytics for informed decision-making.
            </MotionText>
            <MotionText 
              color="gray.700" 
              mb={4} 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              Streamlines tasks through automation to boost efficiency.
            </MotionText>
            <MotionText 
              color="gray.700" 
              mb={4} 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              Supports real-time decision-making with rapid response to data.
            </MotionText>
            <MotionText 
              color="gray.700" 
              mb={4} 
              initial={{ x: -100, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
            >
              Continuously evolves through adaptive learning to provide insights.
            </MotionText>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <MotionImage
              src="src\Componentes\Image\AI_ML.jpg"
              alt="AI-powered applications"
              borderRadius="lg"
              boxShadow="lg"
              initial={{ opacity: 0, x: 100 }}  // Start from right
              animate={{ opacity: 1, x: 0 }}   // Move to its original position
              transition={{ duration: 1, delay: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            />
          </GridItem>
        </Grid>
      </Container>

      {/* Geospatial Integration Section */}
      <Box bg="white" py={16}>
        <Container maxW="7xl" px={4}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            <GridItem display="flex" justifyContent="center" alignItems="center" position="relative">
              <MotionImage
                src="src\Componentes\Image\Geo-Spacial.jpg"
                alt="Geospatial data integration"
                borderRadius="lg"
                boxShadow="lg"
                initial={{ opacity: 0, x: -100 }}  // Start from left
                animate={{ opacity: 1, x: 0 }}   // Move to its original position
                transition={{ duration: 1, delay: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
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
              <MotionText 
                color="gray.700" 
                mb={4} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Integrates AI/ML with geospatial data for enhanced insights.
              </MotionText>
              <MotionText 
                color="gray.700" 
                mb={4} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Enables pattern recognition in complex spatial datasets.
              </MotionText>
              <MotionText 
                color="gray.700" 
                mb={4} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Supports anomaly detection for identifying unusual patterns.
              </MotionText>
              <MotionText 
                color="gray.700" 
                mb={4} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Enhances predictive modeling for urban planning and resource management.
              </MotionText>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Scalable Cloud Infrastructure Section */}
      <Container maxW="7xl" py={16} px={4}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <GridItem display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="md" mb={4} color="gray.900">
              Scalable Cloud Infrastructure
            </Heading>
            <MotionText 
              color="gray.700" 
              mb={4} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Provides accessibility from anywhere for seamless operations.
            </MotionText>
            <MotionText 
              color="gray.700" 
              mb={4} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Supports efficient data processing and storage for large datasets.
            </MotionText>
            <MotionText 
              color="gray.700" 
              mb={4} 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              Reduces need for on-premise infrastructure investment.
            </MotionText>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <MotionImage
              src="src\Componentes\Image\Cloud.jpg"
              alt="Scalable cloud infrastructure"
              borderRadius="lg"
              boxShadow="lg"
              initial={{ opacity: 0, x: 100 }} // Start from right
              animate={{ opacity: 1, x: 0 }}  // Move to its original position
              transition={{ duration: 1, delay: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
            />
          </GridItem>
        </Grid>
      </Container>

      {/* Customized AI Models Section */}
      <Box bg="white" py={16}>
        <Container maxW="7xl" px={4}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            <GridItem display="flex" justifyContent="center" alignItems="center" position="relative">
              <MotionImage
                src="src\Componentes\Image\Customized AI Models.jpg"
                alt="Custom AI models"
                borderRadius="lg"
                boxShadow="lg"
                initial={{ opacity: 0, x: -100 }} // Start from left
                animate={{ opacity: 1, x: 0 }} // Move to its original position
                transition={{ duration: 1, delay: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
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
              <MotionText 
                color="gray.700" 
                mb={4} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Develops custom ML models tailored to specific business needs.
              </MotionText>
              <MotionText 
                color="gray.700" 
                mb={4} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Specializes in language processing, computer vision, and predictive analytics.
              </MotionText>
              <MotionText 
                color="gray.700" 
                mb={4} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Builds models that provide actionable insights for decision-making.
              </MotionText>
              <MotionText 
                color="gray.700" 
                mb={4} 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                viewport={{ once: false }}
              >
                Delivers solutions that adapt to evolving business challenges.
              </MotionText>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CloudAI_ML;
