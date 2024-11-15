import React from 'react';
import { ChakraProvider, Box, Image, Text, Stack, Flex, Container, Badge } from '@chakra-ui/react';

const VisionMission = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl" p={8}>
        <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          {/* Left image */}
          <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
            <Image
              src="src\\Componentes\\Image\\Vision.jpg"
              alt="Graph showing data trends"
              width="100%"
              height="auto"
              borderRadius="lg"
            />
          </Box>

          {/* Vision Section */}
          <Box maxW="100%" mx="auto">
            <Badge
              bgGradient="linear(to-r, green.400, blue.500)"
              color="white"
              px={6}
              py={3}
              rounded="full"
              shadow="md"
              fontSize="2xl"
              fontWeight="bold"
              mb={2}
            >
              Vision
            </Badge>
            <Stack spacing={4} mt={4}>
              {[
                "Empower organizations and communities to envision a sustainable future.",
                "Leverage environmental intelligence, predictive insights, and engineering excellence.",
                "Provide tailored solutions to maximize the value of data.",
                "Drive transformative outcomes in sustainability and resilience.",
                "Foster an agile, collaborative culture that nurtures talent and propagates knowledge."
              ].map((text, index) => (
                <Flex key={index} align="flex-start" maxW="100%">
                  <Box as="span" color="green.500" mt={1} fontSize="xl">•</Box>
                  <Text ml={4} color="gray.700" fontSize="xl">{text}</Text>
                </Flex>
              ))}
            </Stack>
          </Box>

          {/* Mission Section */}
          <Box maxW="100%" mx="auto">
            <Badge
              bgGradient="linear(to-r, green.400, blue.500)"
              color="white"
              px={6}
              py={3}
              rounded="full"
              shadow="md"
              fontSize="2xl"
              fontWeight="bold"
              mb={6}
            >
              Mission
            </Badge>
            <Stack spacing={4} mt={4}>
              {[
                "Lead the environmental intelligence revolution, integrating advanced technologies for sustainable solutions.",
                "Empower organizations to accelerate environmental transformation and unlock unprecedented value.",
                "Be at the forefront of innovation in environmental intelligence, data analytics, and engineering solutions.",
                "Create an ecosystem where environmental data and insights seamlessly integrate."
              ].map((text, index) => (
                <Flex key={index} align="flex-start" maxW="100%">
                  <Box as="span" color="green.500" mt={1} fontSize="xl">•</Box>
                  <Text ml={4} color="gray.700" fontSize="xl">{text}</Text>
                </Flex>
              ))}
            </Stack>
          </Box>

          {/* Right image */}
          <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
            <Image
              src="src\Componentes\Image\Mission.jpg"
              alt="Graph showing data trends"
              width="100%"
              height="auto"
              borderRadius="lg"
            />
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default VisionMission;
