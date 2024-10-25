import { ChakraProvider, Box, VStack, HStack, Text, Image, Icon, Input, Textarea, Button, Stack } from "@chakra-ui/react";
  import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
  
  const Contact = () => {
    return (
      <ChakraProvider>
        <Box>
            <Box position="relative">
                <Image src="https://placehold.co/1200x400" alt="Forest background with sunlight filtering through trees" width="100%" height="96" objectFit="cover" />
                    <Box position="absolute" top="0" left="0" right="0" bottom="0" display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="white">
                                <Text fontSize="4xl" fontWeight="bold">Contact</Text>
                                <Text fontSize="lg">Q-Gate Infotech Private Limited / contact</Text>
                            </Box>
                        </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          minH="100vh"
          p={16}
          bg="#1a1a40"
          color="white"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={12}
            w="full"
            maxW="container.lg"
            align="center"
          >
            {/* Contact Card */}
            <Box
              bg="#6c63ff"
              color="white"
              p={10}
              rounded="lg"
              shadow="lg"
              w={{ base: "full", md: "1/3" }}
              textAlign="center"
            >
              <VStack spacing={6}>
                <Text fontSize="3xl" fontWeight="bold">
                  Contact Us
                </Text>
                <Text fontSize="md">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Fugit
                  temporibus voluptatum eos, maiores ullam nam sapiente labore
                  voluptates. Ratione, blanditiis?
                </Text>
                <VStack align="start" spacing={4}>
                  <HStack>
                    <Icon as={FaPhoneAlt} fontSize="xl" />
                    <Text fontSize="md">+91 93428 55394</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaEnvelope} fontSize="xl" /> <Text fontSize="md">contact.in@q-gate.co</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} fontSize="xl" />
                    <Text fontSize="md">Bangalore, India</Text>
                  </HStack>
                </VStack>
                <HStack spacing={6}>
                  <Icon as={FaFacebookF} boxSize={7} />
                  <Icon as={FaLinkedinIn} boxSize={7} />
                  <Icon as={FaInstagram} boxSize={7} />
                  
                  
                </HStack>
              </VStack>
            </Box>
  
            {/* Contact Form */}
            <Box
              bg="#2c2c54"
              color="white"
              p={10}
              rounded="lg"
              shadow="lg"
              w={{ base: "full", md: "2/3" }}
            >
              <VStack as="form" spacing={6}>
                <HStack spacing={6} w="full">
                  <Input
                    placeholder="Full Name"
                    bg="#1a1a40"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    fontSize="md"
                  />
                  <Input
                    placeholder="Phone Number"
                    bg="#1a1a40"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    fontSize="md"
                  />
                </HStack>
                <Input
                  placeholder="Your Email"
                  bg="#1a1a40"
                  borderColor="gray.600"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  w="full"
                  fontSize="md"
                />
                <Textarea
                  placeholder="Your Message"
                  bg="#1a1a40"
                  borderColor="gray.600"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  h="40"
                  w="full"
                  fontSize="md"
                />
                <Button bg="#ff4b5c" color="white" _hover={{ bg: "#ff3a4a" }} fontSize="md">
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </ChakraProvider>
    );
  };
  
  export default Contact;