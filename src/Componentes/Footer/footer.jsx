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
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      bgImage="url('src\Componentes\Image\Footer\Footer.jpg')"
      bgColor="gray.300"
      bgSize="cover"
      bgPosition="center"
      color="black"
      py={{ base: 5, md: 10 }}
    >
      {/* Footer Top */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        px={{ base: 5, md: 20 }}
      >
        {/* Logo and Description */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          mb={{ base: 8, md: 0 }}
        >
          <Link to="/">
            <Image
              src="src\Componentes\Image\Q-Gate-Logo.png"
              alt={t("Q-Gate Infotech Private Limited")}
              h={{ base: "40px", md: "60px" }}
            />
          </Link>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            textAlign={{ base: "center", md: "left" }}
          >
            {t(
              "An innovative software provider, systems integrator, technology provider, established to deliver actionable insights, leading-edge intelligent solutions, and consulting services to businesses, organizations, and government."
            )}
          </Text>
        </VStack>

        {/* Industries */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 0, md: 10 }}
          mb={{ base: 8, md: 0 }}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            <Link to="/industries">{t("Industries")}</Link>
          </Text>
          <UnorderedList
            styleType="none"
            m={0}
            spacing={2}
            fontSize={{ base: "sm", md: "md" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <ListItem>
              <Link to="/agriculture">{t("Agriculture")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/education">{t("Education")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/oil-gas-industry">{t("Oil & Gas Industry")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/mining-and-mineral">{t("Mining & Mineral Exploration")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/energy-utilities">{t("Energy & Utilities")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/transportation-logistics">
                {t("Smart Transportation & Logistics")}
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/marine-water-resources">
                {t("Marine & Water Resource Management")}
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/infrastructure-development">{t("Infrastructure Development")}</Link>
            </ListItem>
          </UnorderedList>
        </VStack>

        {/* Services */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 0, md: 10 }}
          mb={{ base: 8, md: 0 }}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            <Link to="/services">{t("Services")}</Link>
          </Text>
          <UnorderedList
            styleType="none"
            m={0}
            spacing={2}
            fontSize={{ base: "sm", md: "md" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <ListItem>
              <Link to="/geospatial-services">{t("Geospatial Services")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/software-development">{t("Software Development")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/data-analytics">{t("Data Analytics")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/content-annotation">{t("Content Annotation")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/engineering-solutions">{t("Engineering Solutions")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/cloud-ai-ml">{t("Cloud-Based AI/ML Solutions")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/professional-training">{t("Professional Training")}</Link>
            </ListItem>
            <ListItem>
              <Link to="/talent-solutions">{t("Talent Solutions")}</Link>
            </ListItem>
          </UnorderedList>
        </VStack>

        {/* Contact Info */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 0, md: 10 }}
          mb={{ base: 8, md: 0 }}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            {t("Contact Info")}
          </Text>
          <UnorderedList
            styleType="none"
            m={0}
            spacing={2}
            fontSize={{ base: "sm", md: "md" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <ListItem>
              <HStack>
                <EmailIcon />
                <Link to="mailto:contact.in@q-gate.co">
                  {t("contact.in@q-gate.co")}
                </Link>
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
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 0, md: 10 }}
          mb={{ base: 8, md: 0 }}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            textAlign={{ base: "center", md: "left" }}
          >
            {t("Address")}
          </Text>
          <HStack>
            <Icon as={FaMapMarkerAlt} w={5} h={5} />
            <Text>{t("Bengaluru, India - 560078")}</Text>
          </HStack>
        </VStack>
      </Flex>

      {/* Footer Bottom */}
      <Box mt={10} px={{ base: 5, md: 20 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          fontSize={{ base: "sm", md: "md" }}
        >
          {/* Left side */}
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text>
              © 2023 {t("All Rights Reserved.")}{" "}
              <Link to="/">Q-Gate Infotech</Link>
            </Text>
          </Box>

          {/* Right side */}
          <Box
            textAlign={{ base: "center", md: "right" }}
            mt={{ base: 4, md: 0 }}
          >
            <HStack spacing={4} justify={{ base: "center", md: "flex-end" }}>
              <Link to="/about">{t("About Us")}</Link>
              <Link to="/careers">{t("Careers")}</Link>
              <Link to="/contact">{t("Contact")}</Link>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
