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

const Footer = () => {
  return (
    <Box
      bgImage="url('src\Componentes\Image\Footer\Footer.jpg')" // Replace with your image URL
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
              alt="Q-Gate Infotech Private Limited"
              h="60px"
            />
          </Link>
          <Text>
            An innovative software provider, systems integrator, technology
            provider, established to deliver actionable insights, leading-edge
            intelligent solutions, and consulting services to businesses,
            organizations, and government.
          </Text>
        </VStack>

        {/* Industries */}
        <VStack
          align="start"
          spacing={4}
          w={{ base: "full", md: "25%" }}
          pl={{ base: 5, md: 10 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            Industries
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            <ListItem>
              <Link href="https://q-gate.co/ind/agriculture/">Agriculture</Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/education/">Education</Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/oil-gas-industry/">
                Oil & Gas Industry
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/mining-mineral-exploration/">
                Mining & Mineral Exploration
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/energy-utilities/">
                Energy & Utilities
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/intelligent-transport-logitics/">
                Smart Transportation & Logistics
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/intelligent-transport-logitics/">
                Marine & Water Resource Management
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://q-gate.co/ind/intelligent-transport-logitics/">
                Infrastructure Development
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
            Services
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            <ListItem>
              <Link>Geospatial Services</Link>
            </ListItem>
            <ListItem>
              <Link>Software Development</Link>
            </ListItem>
            <ListItem>
              <Link>Data Analytics</Link>
            </ListItem>
            <ListItem>
              <Link>Content Annotation</Link>
            </ListItem>
            <ListItem>
              <Link>Engineering Solutions</Link>
            </ListItem>
            <ListItem>
              <Link>Cloud-Based AI/ML Solutions</Link>
            </ListItem>
            <ListItem>
              <Link>Professional Training</Link>
            </ListItem>
            <ListItem>
              <Link>Talent Solutions</Link>
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
            Contact Info
          </Text>
          <UnorderedList styleType="none" m={0} spacing={2}>
            <ListItem>
              <HStack>
                <EmailIcon />
                <Link href="mailto:contact.in@q-gate.co">
                  contact.in@q-gate.co
                </Link>
              </HStack>
            </ListItem>
            <ListItem>
              <Text>Opening Hours: 09:00 - 18:00</Text>
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
            Address
          </Text>
          <HStack>
            <Icon as={FaMapMarkerAlt} w={5} h={5} />
            <Text>Bengaluru, India - 560078</Text>
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
              © 2023 All Rights Reserved. <Link href="#">Q-Gate Infotech</Link>
            </Text>
          </Box>

          {/* Right side */}
          <Box
            textAlign={{ base: "center", md: "right" }}
            mt={{ base: 4, md: 0 }}
          >
            <HStack spacing={4} justify={{ base: "center", md: "flex-end" }}>
              <Link href="https://q-gate.co/ind/about/">About Us</Link>
              <Link href="https://q-gate.co/ind/careers/">Careers</Link>
              <Link href="https://q-gate.co/ind/contact/" aria-current="page">
                Contact
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
