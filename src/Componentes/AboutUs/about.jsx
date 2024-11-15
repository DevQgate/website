import { Box, Container, Flex, Heading, Image, Stack, Text, Badge, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";

function About() {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("blue.600", "blue.300");

  return (
    <Box bg={bgColor} fontFamily="Roboto" minHeight="10vh">
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <Flex direction={{ base: "column-reverse", md: "row" }} align="center" justify="space-between">
          {/* Left Side: Image */}
          <Box flex="1" display="flex" justifyContent="center" mb={{ base: 6, md: 0 }}>
            <Box position="relative" w={{ base: "80%", md: "95%" }} h="80%">
              <Image
                src="src\Componentes\Image\GLOBAL.png"
                alt="Two people working on a laptop, smiling and discussing"
                
                
                
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w=""
                h=""
                bgGradient="linear(to-r, transparent, white)"
                borderRadius="full"  // Apply rounded border to the overlay as well
                opacity="0.6"
              />
            </Box>
          </Box>

          {/* Right Side: Text Content */}
          <Box flex="1" mt={{ base: 8, md: 0 }} ml={{ md: 6 }} textAlign={{ base: "center", md: "left" }}>
            <Badge
              bgGradient="linear(to-r, teal.400, blue.500)"
              color="white"
              px={4}
              py={2}
              rounded="full"
              shadow="md"
              fontSize="md"
              fontWeight="semibold"
              mb={6}
            >
              ABOUT US
            </Badge>

            <Heading as="h1" size="xl" color={headingColor} fontWeight="extrabold" mb={6}>
              Advancing Spatial Intelligence for Sustainability
            </Heading>

            <Stack spacing={6} fontSize="lg" color={textColor} lineHeight="1.8" >
              <Text>
                Welcome to <Text as="span" fontWeight="bold" color="gray.800">Q-Gate Infotech</Text>, a leader in spatial data solutions. Our team, headquartered in Bengaluru, India, with a subsidiary in Munich, Germany, creates AI-driven, blockchain-enabled solutions to solve complex environmental challenges.
              </Text>

              <Text>
                We specialize in geospatial analytics for climate action, disaster management, and environmental sustainability. With our advanced technologies, we offer tailored solutions for businesses, governments, and organizations globally.
              </Text>

              <Text>
                Our solutions are built on cutting-edge tools, including AI, cloud computing, and LiDAR data analysis, to provide accurate insights and mitigate risks associated with climate change and natural disasters.
              </Text>

              <Text>
                Join us in our mission to drive meaningful change and contribute to a more sustainable future through innovation and technology.
              </Text>
            </Stack>

          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default About;
