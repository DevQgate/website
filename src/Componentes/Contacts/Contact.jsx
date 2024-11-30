import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Icon,
  Input,
  Textarea,
  Button,
  Stack,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <ChakraProvider>
        <Box>
          <Box position="relative">
            <Image
              src="src\Componentes\Image\Contact\Contact.jpg"
              alt="Contact"
              width="100%"
              height="96vh"
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
                {t("Contact")}
              </Text>
              <Text fontSize="lg">
                {t("Q-Gate Infotech Private Limited / contact")}
              </Text>
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
              color="black"
              p={100}
              rounded="lg"
              shadow="lg"
              w={{ base: "full", md: "1/3" }}
              textAlign="center"
            >
              <VStack spacing={6}>
                <Text fontSize="3xl" fontWeight="bold">
                  {t("Contact Us")}
                </Text>
                <Text fontSize="md">
                  {t(
                    "We'd love to hear from you! Reach out with any questions or feedback."
                  )}
                  <br />
                  {t("Our team is here to assist you. Let’s connect!")}
                </Text>
                <VStack align="start" spacing={4}>
                  <HStack>
                    <Icon as={FaEnvelope} fontSize="xl" />
                    <a href="mailto:contact.in@q-gate.co">
                      <Text
                        fontSize="md"
                        color="black"
                        _hover={{ textDecoration: "underline" }}
                      >
                        contact.in@q-gate.co
                      </Text>
                    </a>
                  </HStack>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} fontSize="xl" />
                    <Text fontSize="md">{t("Bangalore, India")}</Text>
                  </HStack>
                  <></>
                </VStack>
                <VStack>
                  <HStack spacing={6}>
                    <a
                      href="https://www.facebook.com/61558757207161/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon as={FaFacebookF} boxSize={7} />
                    </a>
                    <a
                      href="https://in.linkedin.com/company/q-gate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon as={FaLinkedinIn} boxSize={7} />
                    </a>
                    <a
                      href="https://www.instagram.com/qgateinfotech/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon as={FaInstagram} boxSize={7} />
                    </a>
                  </HStack>
                </VStack>
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
                    placeholder={t("Full Name")}
                    bg="#1a1a40"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    fontSize="md"
                  />
                  
                </HStack>
                <Input
                  placeholder={t("Your Email")}
                  bg="#1a1a40"
                  borderColor="gray.600"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  w="full"
                  fontSize="md"
                />
                <Textarea
                  placeholder={t("Your Message")}
                  bg="#1a1a40"
                  borderColor="gray.600"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  h="40"
                  w="full"
                  fontSize="md"
                />
                <Button
                  bg="#ff4b5c"
                  color="white"
                  _hover={{ bg: "#ff3a4a" }}
                  fontSize="md"
                >
                  {t("Send Message")}
                </Button>
              </VStack>
            </Box>
          </Stack>
        </Box>
      </ChakraProvider>
      <Footer />
    </>
  );
};

export default Contact;
