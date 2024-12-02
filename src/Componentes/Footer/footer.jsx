import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Link as ChakraLink,
  Text,
  Image,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      bgImage={{
        base: "none",
        lg: "url('src\Componentes\Image\Footer\Footer.jpg')", // Only apply the background image for larger screens
      }}
      bgColor="gray.300"
      bgSize="cover"
      bgPosition="center"
      color="black"
      py={{ base: 6, lg: 10 }}
    >
      {/* Footer Top */}
      <Flex
        direction={{ base: "column", lg: "row" }} // Stacks vertically on mobile/tablet, horizontal on larger screens
        justify="space-between"
        px={{ base: 4, md: 8, lg: 20 }}
        gap={{ base: 8, md: 6, lg: 0 }} // Increased spacing for mobile/tablet
      >
        {/* Logo and Description */}
        <VStack
          align="start"
          spacing={{ base: 4, lg: 3 }}
          w={{ base: "100%", lg: "25%" }}
          mb={{ base: 6, lg: 0 }}
        >
          <Link to="/">
            <Image
              src="src\Componentes\Image\Q-Gate-Logo.png"
              alt={t("Q-Gate Infotech Private Limited")}
              h={{ base: "40px", lg: "60px" }}
              maxW="100%"
            />
          </Link>
          <Text
            fontSize={{ base: "sm", lg: "md" }}
            textAlign="left"
            lineHeight="1.5"
            wordBreak="break-word"
          >
            {t(
              "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to businesses, organizations, and government."
            )}
          </Text>
        </VStack>

        {/* Industries */}
        <VStack
          align="start"
          spacing={{ base: 3, lg: 2 }}
          w={{ base: "100%", lg: "25%" }}
          mb={{ base: 6, lg: 0 }}
        >
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            fontWeight="bold"
            textAlign="left"
          >
            <Link to="/industries">{t("Industries")}</Link>
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            {["Agriculture", "Education", "Oil & Gas Industry", "Mining & Mineral Exploration", "Energy & Utilities", "Smart Transportation & Logistics", "Marine & Water Resource Management", "Infrastructure Development"].map((industry) => (
              <ListItem key={industry}>
                <Link to={`/${industry.toLowerCase().replace(/ & | /g, "-")}`}>
                  {t(industry)}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>

        {/* Services */}
        <VStack
          align="start"
          spacing={{ base: 3, lg: 2 }}
          w={{ base: "100%", lg: "25%" }}
          mb={{ base: 6, lg: 0 }}
        >
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            fontWeight="bold"
            textAlign="left"
          >
            <Link to="/services">{t("Services")}</Link>
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            {["Geospatial Services", "Software Development", "Data Analytics", "Content Annotation", "Engineering Solutions", "Cloud-Based AI/ML Solutions", "Professional Training", "Talent Solutions"].map((service) => (
              <ListItem key={service}>
                <Link to={`/${service.toLowerCase().replace(/ & | /g, "-")}`}>
                  {t(service)}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>

        {/* Contact Info */}
        <VStack
          align="start"
          spacing={{ base: 3, lg: 2 }}
          w={{ base: "100%", lg: "25%" }}
        >
          <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="bold">
            {t("Contact Info")}
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            <ListItem>
              <HStack>
                <EmailIcon />
                <Link to="mailto:contact.in@q-gate.co">{t("contact.in@q-gate.co")}</Link>
              </HStack>
            </ListItem>
            <ListItem>
              <Text>{t("Opening Hours: 09:00 - 18:00")}</Text>
            </ListItem>
          </UnorderedList>
          <HStack spacing={4}>
            <Link to="https://www.facebook.com/61558757207161/" isExternal>
              <Icon as={FaFacebookF} w={5} h={5} />
            </Link>
            <Link to="https://in.linkedin.com/company/q-gate" isExternal>
              <Icon as={FaLinkedinIn} w={5} h={5} />
            </Link>
            <Link to="https://www.instagram.com/qgateinfotech/" isExternal>
              <Icon as={FaInstagram} w={5} h={5} />
            </Link>
          </HStack>
        </VStack>

        {/* Address */}
        <VStack
          align="start"
          spacing={{ base: 3, lg: 2 }}
          w={{ base: "100%", lg: "25%" }}
        >
          <Text fontSize={{ base: "md", lg: "lg" }} fontWeight="bold">
            {t("Address")}
          </Text>
          <HStack>
            <Icon as={FaMapMarkerAlt} w={5} h={5} />
            <Text>{t("Bengaluru, India - 560078")}</Text>
          </HStack>
        </VStack>
      </Flex>

      {/* Footer Bottom */}
      <Box mt={8} px={{ base: 4, lg: 20 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justify="space-between"
          align="center"
        >
          <Box textAlign={{ base: "center", lg: "left" }}>
            <Text>
              © 2023 {t("All Rights Reserved.")}{" "}
              <Link to="/">Q-Gate Infotech</Link>
            </Text>
          </Box>
          <HStack spacing={4} mt={{ base: 4, lg: 0 }} justify="center">
            <Link to="/about">{t("About Us")}</Link>
            <Link to="/careers">{t("Careers")}</Link>
            <Link to="/contact">{t("Contact")}</Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
