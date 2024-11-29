import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Button,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import CountryFlag from "react-native-country-flag"; // Flag component
import logo from "../Image/Q-Gate-Logo.png";

const Header = () => {
  const { t, i18n } = useTranslation(); // Hook for translation
  const [language, setLanguage] = useState(i18n.language || "EN");
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure(); // Drawer state for mobile menu

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
      { label: t("Agriculture"), href: "/agriculture" },
      { label: t("Energy & Utilities"), href: "/energy-utilities" },
      { label: t("Education"), href: "/education" },
      { label: t("Smart Transportation & Logistics"), href: "/transportation-logistics" },
      { label: t("Infrastructure Development"), href: "/infrastructure-development" },
      { label: t("Mining & Mineral Exploration"), href: "/mining-exploration" },
      { label: t("Oil & Gas Industry"), href: "/oil-gas-industry" },
      { label: t("Marine & Water Resource Management"), href: "/marine-water-resources" },
    ],
    services: [
      { label: t("Geospatial Services"), href: "/geospatial-services" },
      { label: t("Software Development"), href: "/software-development" },
      { label: t("Data Analytics"), href: "/data-analytics" },
      { label: t("Content Annotation"), href: "/content-annotation" },
      { label: t("Engineering Solutions"), href: "/engineering-solutions" },
      { label: t("Cloud-Based AI/ML Solutions"), href: "/cloud-ai-ml" },
      { label: t("Professional Training"), href: "/professional-training" },
      { label: t("Talent Solutions"), href: "/talent-solutions" },
    ],
  };

  return (
    <Box as="nav" bg="white" boxShadow="sm" position="sticky" top="0" zIndex="100" px={6} py={4}>
      <Flex align="center" justify="space-between" wrap="wrap">
        {/* Logo */}
        <Box>
          <Image src={logo} alt="Q-Gate Logo" height="40px" />
        </Box>

        {/* Menu for larger screens */}
        <HStack spacing={{ base: 4, md: 8 }} display={{ base: "none", md: "flex" }} align="center">
          <Link href="#" fontWeight="600" fontSize="md" _hover={{ color: "blue.500" }}>
            {t("Home")}
          </Link>
          <Link href="<AboutUs/>" fontWeight="600" fontSize="md" _hover={{ color: "blue.500" }}>
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
                      <MenuItem key={index}>
                        <Link href={item.href} _hover={{ textDecoration: "none", color: "blue.500" }}>
                          {item.label}
                        </Link>
                      </MenuItem>
                    ))}
                  </VStack>
                  <VStack align="start" spacing={2}>
                    {menuItems.industries.slice(4).map((item, index) => (
                      <MenuItem key={index}>
                        <Link href={item.href} _hover={{ textDecoration: "none", color: "blue.500" }}>
                          {item.label}
                        </Link>
                      </MenuItem>
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
              <MenuButton as={Button} variant="ghost" fontWeight="600" href="#">
                {t("Services")}
              </MenuButton>
              <MenuList>
                <HStack align="start" px={4} py={2}>
                  <VStack align="start" spacing={2}>
                    {menuItems.services.slice(0, 4).map((item, index) => (
                      <MenuItem key={index}>
                        <Link href={item.href} _hover={{ textDecoration: "none", color: "blue.500" }}>
                          {item.label}
                        </Link>
                      </MenuItem>
                    ))}
                  </VStack>
                  <VStack align="start" spacing={2}>
                    {menuItems.services.slice(4).map((item, index) => (
                      <MenuItem key={index}>
                        <Link href={item.href} _hover={{ textDecoration: "none", color: "blue.500" }}>
                          {item.label}
                        </Link>
                      </MenuItem>
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
        <Flex align="center" gap={4}>
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

          {/* Hamburger Icon for mobile */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Flex>

      {/* Drawer for Mobile Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Link href="#">{t("Home")}</Link>
              <Link href="#">{t("About")}</Link>
              <Link href="#">{t("Product")}</Link>
              <Link href="#">{t("Industries")}</Link>
              <Link href="#">{t("Services")}</Link>
              <Link href="#">{t("Careers")}</Link>
              <Link href="#">{t("Contact")}</Link>
              <Link href="#">{t("Blogs")}</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
