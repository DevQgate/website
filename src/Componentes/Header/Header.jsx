import React, { useState } from "react";
import { Box, Flex, HStack, VStack, Button, Image, Link, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import CountryFlag from "react-native-country-flag"; // Flag component
import logo from "../Image/Q-Gate-Logo.png";

const Header = () => {
  const { t, i18n } = useTranslation(); // Hook for translation
  const [language, setLanguage] = useState(i18n.language || "EN");
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const changeLanguage = (lang) => {
    setLanguage(lang); // Update local language state
    i18n.changeLanguage(lang); // Change language using i18n
    setIsLanguageOpen(false); // Close the language dropdown after selection
  };

  const flag =
    language === "GE" ? (
      <CountryFlag isoCode="DE" size={20} />
    ) : (
      <CountryFlag isoCode="IN" size={20} />
    );

  const menuItems = {
    industries: [
      t("Agriculture"),
      t("Energy & Utilities"),
      t("Education"),
      t("Smart Transportation & Logistics"),
      t("Infrastructure Development"),
      t("Mining & Mineral Exploration"),
      t("Oil & Gas Industry"),
      t("Marine & Water Resource Management"),
    ],
    services: [
      t("Geospatial Services"),
      t("Software Development"),
      t("Data Analytics"),
      t("Content Annotation"),
      t("Engineering Solutions"),
      t("Cloud-Based AI/ML Solutions"),
      t("Professional Training"),
      t("Talent Solutions"),
    ],
  };

  return (
    <Box as="nav" bg="white" boxShadow="sm" position="sticky" top="0" zIndex="100" px={6} py={4}>
      <Flex align="center" justify="space-between" wrap="wrap">
        {/* Logo */}
        <Box>
          <Image src={logo} alt="Q-Gate Logo" height="40px" />
        </Box>

        {/* Menu */}
        <HStack spacing={{ base: 4, md: 8 }} display={{ base: "none", md: "flex" }} align="center">
          <Link href="#" fontWeight="600" fontSize="md" _hover={{ color: "blue.500" }}>
            {t("Home")}
          </Link>
          <Link href="#" fontWeight="600" fontSize="md" _hover={{ color: "blue.500" }}>
            {t("About")}
          </Link>
          <Link href="#" fontWeight="600" fontSize="md" _hover={{ color: "blue.500" }}>
            {t("Product")}
          </Link>

          {/* Industries Dropdown */}
          <Box
            onMouseEnter={() => setIsIndustriesOpen(true)}
            onMouseLeave={() => setIsIndustriesOpen(false)}
          >
            <Menu isOpen={isIndustriesOpen}>
              <MenuButton as={Button} variant="ghost" fontWeight="600">
                {t("Industries")}
              </MenuButton>
              <MenuList>
                <HStack align="start" px={4} py={2}>
                  <VStack align="start" spacing={2}>
                    {menuItems.industries.slice(0, 4).map((item, index) => (
                      <MenuItem key={index}>{item}</MenuItem>
                    ))}
                  </VStack>
                  <VStack align="start" spacing={2}>
                    {menuItems.industries.slice(4).map((item, index) => (
                      <MenuItem key={index}>{item}</MenuItem>
                    ))}
                  </VStack>
                </HStack>
              </MenuList>
            </Menu>
          </Box>

          {/* Services Dropdown */}
          <Box
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Menu isOpen={isServicesOpen}>
              <MenuButton as={Button} variant="ghost" fontWeight="600" href ="#">
                {t("Services")}
              </MenuButton>
              <MenuList>
                <HStack align="start" px={4} py={2}>
                  <VStack align="start" spacing={2}>
                    {menuItems.services.slice(0, 4).map((item, index) => (
                      <MenuItem key={index}>{item}</MenuItem>
                    ))}
                  </VStack>
                  <VStack align="start" spacing={2}>
                    {menuItems.services.slice(4).map((item, index) => (
                      <MenuItem key={index}>{item}</MenuItem>
                    ))}
                  </VStack>
                </HStack>
              </MenuList>
            </Menu>
          </Box>

          <Link href="#" fontWeight="600" fontSize="md" _hover={{ color: "blue.500" }}>
            {t("Careers")}
          </Link>
          <Link href="#" fontWeight="600" fontSize="md" _hover={{ color: "blue.500" }}>
            {t("Contact")}
          </Link>
          <Link href="#" fontWeight="600" fontSize="md" _hover={{ color: "blue.500" }}>
            {t("Blogs")}
          </Link>
        </HStack>

        {/* Language Selector */}
        <Box position="relative">
          <Button onClick={() => setIsLanguageOpen(!isLanguageOpen)} variant="ghost" fontWeight="600">
            {flag} {language.toUpperCase()}
          </Button>
          {isLanguageOpen && (
            <Box
              position="absolute"
              right="0"
              top="100%"
              bg="white"
              boxShadow="md"
              borderRadius="md"
              mt={2}
              zIndex="popover"
            >
              <Button variant="ghost" onClick={() => changeLanguage("EN")} width="100%">
                EN
              </Button>
              <Button variant="ghost" onClick={() => changeLanguage("GE")} width="100%">
                GE
              </Button>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
