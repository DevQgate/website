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

const SoftwareDevelopment = () => {
  return (
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
              Software Development
            </Text>
            <Text fontSize="lg">Q-Gate Infotech Private Limited / Software Development</Text>
          </Box>
        </Box>
      </Box>

      {/* Introductory Section */}
      <Box bg="white" py={8} mb={8}>
        <Container maxW="7xl" px={4}>
          <Heading as="h1" size="md" mb={4} color="gray.900">
            Empowering Your Business with Tailored Software Solutions
          </Heading>
          <Text color="gray.700">
            At Q-Gate Infotech, we specialize in creating software solutions that align with your business goals. Our expertise spans across:
          </Text>
        </Container>
      </Box>

      {/* Custom Software Development Section */}
      <Container maxW="7xl" py={16} px={4}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <GridItem display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="md" mb={4} color="gray.900">
              Custom Software Development
            </Heading>
            <Text color="gray.700" mb={4}>
                Developing software solutions tailored to unique business needs across industries.
            </Text>
            <Text color="gray.700" mb={4}>
                Leveraging the latest technologies for robust and scalable applications.
            </Text>
            <Text color="gray.700" mb={4}>
                Creating user-friendly designs that enhance operational efficiency.
            </Text>
            <Text color="gray.700" mb={4}>
                Supporting business growth through innovative and customized software.
            </Text>
          </GridItem>   
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Image
              src="src\Componentes\Image\Custom-Software-Development.jpg"
              alt="Custom Software Development"
              borderRadius="lg"
              boxShadow="lg"
            />
          </GridItem>
        </Grid>
      </Container>

      {/* Web Development Section */}
      <Box bg="white" py={16}>
        <Container maxW="7xl" px={4}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            <GridItem display="flex" justifyContent="center" alignItems="center" position="relative">
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
            <GridItem display="flex" flexDirection="column" justifyContent="center">
              <Heading as="h2" size="md" mb={4} color="gray.900">
                Web Development
              </Heading>
              <Text color="gray.700" mb={4}>
                Building responsive, dynamic websites that enhance user engagement.
              </Text>
              <Text color="gray.700" mb={4}>
                Utilizing modern web technologies for optimized speed and performance.
              </Text>
              <Text color="gray.700" mb={4}>
                Designing intuitive interfaces for an exceptional user experience.
              </Text>
              <Text color="gray.700" mb={4}>
                Ensuring seamless functionality across all devices and platforms.
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Mobile Application Development Section */}
      <Container maxW="7xl" py={16} px={4}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
          <GridItem display="flex" flexDirection="column" justifyContent="center">
            <Heading as="h1" size="md" mb={4} color="gray.900">
              Mobile Application Development
            </Heading>
            <Text color="gray.700" mb={4}>
                Developing high-performance mobile apps for both Android and iOS platforms.
            </Text>
            <Text color="gray.700" mb={4}>
                Crafting intuitive and engaging user interfaces for an optimal mobile experience.
            </Text>
            <Text color="gray.700" mb={4}>
                Ensuring compatibility and smooth functionality across a variety of devices.
            </Text>
            <Text color="gray.700" mb={4}>
                Integrating advanced features to enhance usability and meet business goals.
            </Text>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Image
              src="src\Componentes\Image\App.jpg"
              alt="Mobile Application Development"
              borderRadius="lg"
              boxShadow="lg"
            />
          </GridItem>
        </Grid>
      </Container>

      {/* Enterprise Management Solutions Section */}
      <Box bg="white" py={16}>
        <Container maxW="7xl" px={4}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={8}>
            <GridItem display="flex" justifyContent="center" alignItems="center" position="relative">
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
            <GridItem display="flex" flexDirection="column" justifyContent="center">
              <Heading as="h2" size="md" mb={4} color="gray.900">
                Enterprise Management Solutions
              </Heading>
              <Text color="gray.700" mb={4}>
                    Implementing ERP and CRM systems to streamline resource management.
              </Text>
              <Text color="gray.700" mb={4}>
                    Enhancing communication and collaboration across teams.
              </Text>
              <Text color="gray.700" mb={4}>
                    Optimizing workflows with automation tools for greater efficiency.
              </Text>
              <Text color="gray.700" mb={4}>
                    Supporting informed decision-making to improve overall business operations.
              </Text>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SoftwareDevelopment;
