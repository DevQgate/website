import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Link,
  Text,
  Image,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next"; // Import the translation hook

const Footer = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <Box
      bgImage="url('src\Componentes\Image\Footer\Footer.jpg')" // Replace with your image URL
      bgColor="gray.300"
      bgSize="cover"
      bgPosition="center"
      color="black"
      py={10}
    >
      {/* Footer Top */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        px={{ base: 5, md: 20 }}
      >
        {/* Logo and Description */}
        <VStack align="start" spacing={4} w={{ base: "full", md: "25%" }}>
          <Link href="https://q-gate.co/ind/">
            <Image
              src="https://q-gate.co/ind/wp-content/uploads/2024/05/Q-Gate-Logo.png"
              alt={t("Q-Gate Infotech Private Limited")} // Add translation key
              h="60px"
            />
          </Link>
          <Text>
            {t(
              "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to businesses, organizations, and government."
            )}
          </Text>{" "}
          {/* Add translation key */}
        </VStack>

        {/* Industries */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 5, md: 10 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            {t("Industries")} {/* Add translation key */}
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            <ListItem>
              <Link href="https://q-gate.co/ind/agriculture/">
                {t("Agriculture")}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/education/">
                {t("Education")}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/oil-gas-industry/">
                {t("Oil & Gas Industry")}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/mining-mineral-exploration/">
                {t("Mining & Mineral Exploration")}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/energy-utilities/">
                {t("Energy & Utilities")}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/intelligent-transport-logitics/">
                {t("Smart Transportation & Logistics")}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/intelligent-transport-logitics/">
                {t("Marine & Water Resource Management")}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/intelligent-transport-logitics/">
                {t("Infrastructure Development")}
              </Link>
            </ListItem>
          </UnorderedList>
        </VStack>

        {/* Services */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 5, md: 10 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            {t("Services")} {/* Add translation key */}
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            <ListItem>
              <Link>{t("Geospatial Services")}</Link>
            </ListItem>
            <ListItem>
              <Link>{t("Software Development")}</Link>
            </ListItem>
            <ListItem>
              <Link>{t("Data Analytics")}</Link>
            </ListItem>
            <ListItem>
              <Link>{t("Content Annotation")}</Link>
            </ListItem>
            <ListItem>
              <Link>{t("Engineering Solutions")}</Link>
            </ListItem>
            <ListItem>
              <Link>{t("Cloud-Based AI/ML Solutions")}</Link>
            </ListItem>
            <ListItem>
              <Link>{t("Professional Training")}</Link>
            </ListItem>
            <ListItem>
              <Link>{t("Talent Solutions")}</Link>
            </ListItem>
          </UnorderedList>
        </VStack>

        {/* Contact Info */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 5, md: 10 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            {t("Contact Info")} {/* Add translation key */}
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            <ListItem>
              <HStack>
                <EmailIcon />
                <Link href="mailto:contact.in@q-gate.co">
                  {t("contact.in@q-gate.co")} {/* Add translation key */}
                </Link>
              </HStack>
            </ListItem>
            <ListItem>
              <Text>{t("Opening Hours: 09:00 - 18:00")}</Text>{" "}
              {/* Add translation key */}
            </ListItem>
          </UnorderedList>
          <HStack spacing={4}>
            <Link href="https://www.facebook.com/61558757207161/" isExternal>
              <Icon as={FaFacebookF} w={5} h={5} />
            </Link>
            <Link href="https://in.linkedin.com/company/q-gate" isExternal>
              <Icon as={FaLinkedinIn} w={5} h={5} />
            </Link>
            <Link href="https://www.instagram.com/qgateinfotech/" isExternal>
              <Icon as={FaInstagram} w={5} h={5} />
            </Link>
          </HStack>
        </VStack>

        {/* Address */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 5, md: 10 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            {t("Address")} {/* Add translation key */}
          </Text>
          <HStack>
            <Icon as={FaMapMarkerAlt} w={5} h={5} />
            <Text>{t("Bengaluru, India - 560078")}</Text>{" "}
            {/* Add translation key */}
          </HStack>
        </VStack>
      </Flex>

      {/* Footer Bottom */}

      <Box mt={10} px={{ base: 5, md: 20 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          fontSize="sm"
        >
          {/* Left side */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text>
              © 2023 {t("All Rights Reserved.")}{" "}
              <Link href="#">Q-Gate Infotech</Link>
            </Text>
          </Box>

          {/* Right side */}
          <Box
            textAlign={{ base: "center", md: "right" }}
            mt={{ base: 4, md: 0 }}
          >
            <HStack spacing={4} justify={{ base: "center", md: "flex-end" }}>
              <Link href="https://q-gate.co/ind/about/">{t("About Us")}</Link>
              <Link href="https://q-gate.co/ind/careers/">{t("Careers")}</Link>
              <Link href="https://q-gate.co/ind/contact/" aria-current="page">
                {t("Contact")}
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
