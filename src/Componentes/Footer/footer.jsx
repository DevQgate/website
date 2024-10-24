import { Box, Flex, Text, Link, Image, List, ListItem, Icon, VStack } from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../Image/Q-Gate-Logo.png"

const Footer = () => {
  return (
    <Box
      id="rs-footer"
      bgImage="url('https://q-gate.co/ind/wp-content/uploads/2020/12/footer-5.png')"
      bgPosition="inherit"
      as="footer"
      className="footer-style-1"
    >
      <Box className="footer-top" py={10}>
        <Flex className="container" flexWrap="wrap">
          {/* Footer Logo & Description */}
          <VStack align="flex-start" w={["100%", "50%", "25%"]} p={4}>
            <Link href="https://q-gate.co/ind/" className="footer-top-logo">
              <Image
                height="60px"
                src={logo}
                alt="Q-Gate Infotech Private Limited"
              />
            </Link>
            <Text>
              An innovative software provider, systems integrator, technology provider, established to deliver actionable
              insights, leading-edge intelligent solutions, and consulting services to business, organizations, and government.
            </Text>
          </VStack>

          {/* Industries Section */}
          <VStack align="flex-start" w={["100%", "50%", "25%"]} p={4}>
            <Text as="h3" fontWeight="bold" className="footer-title">Industries</Text>
            <List spacing={2}>
              <ListItem>
                <Link href="https://q-gate.co/ind/agriculture/">Agriculture</Link>
              </ListItem>
              <ListItem>
                <Link href="https://q-gate.co/ind/education/">Education</Link>
              </ListItem>
              <ListItem>
                <Link href="https://q-gate.co/ind/oil-gas-industry/">Oil &amp; Gas Industry</Link>
              </ListItem>
              <ListItem>
                <Link href="https://q-gate.co/ind/mining-mineral-exploration/">Mining &amp; Mineral Exploration</Link>
              </ListItem>
              <ListItem>
                <Link href="https://q-gate.co/ind/energy-utilities/">&nbsp;Energy &amp; Utilities</Link>
              </ListItem>
              <ListItem>
                <Link href="https://q-gate.co/ind/intelligent-transport-logitics/">Smart Transportation &amp; Logistics</Link>
              </ListItem>
            </List>
          </VStack>

          {/* Contact Info Section */}
          <VStack align="flex-start" w={["100%", "50%", "25%"]} p={4}>
            <Text as="h3" fontWeight="bold" className="footer-title">Contact Info</Text>
            <List spacing={2}>
              <ListItem>
                <Icon as={FaPhone} mr={2} />
                <Link href="tel:+919342855394">+91 93428 55394</Link>
              </ListItem>
              <ListItem>
                <Icon as={SiGmail} mr={2} />
                <Link href="mailto:contact.in@q-gate.co">contact.in@q-gate.co</Link>
              </ListItem>
              <ListItem>
                <Text>Opening Hours: 09:00 - 18:00</Text>
              </ListItem>
            </List>

            <Flex mt={4}>
              <Link href="https://www.facebook.com/61558757207161/" target="_blank" mr={4}>
                <Icon as={FaFacebookF} boxSize={5} />
              </Link>
              <Link href="https://in.linkedin.com/company/q-gate" target="_blank" mr={4}>
                <Icon as={FaLinkedinIn} boxSize={5} />
              </Link>
              <Link href="https://www.instagram.com/qgateinfotech/" target="_blank">
                <Icon as={FaInstagram} boxSize={5} />
              </Link>
            </Flex>
          </VStack>

          {/* Address Section */}
          <VStack align="flex-start" w={["100%", "50%", "25%"]} p={4}>
            <Text as="h3" fontWeight="bold" className="footer-title">Address</Text>
            <Text>Q-gate Infotech Private Limited #11,<br></br>Abhaya Heights, JP Nagar, Bangaluru,<br></br> India - 560078</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Footer Bottom */}
      <Box className="footer-bottom" py={5} borderTop="1px solid" borderColor="gray.200">
        <Flex
            className="container"
            justify="space-between"
            align={["flex-start", "center"]}
            direction={["column", "row"]}
            flexWrap="wrap"
            textAlign={["center", "left"]}
        >
        <Text mb={[4, 0]}>&copy; 2023 All Rights Reserved. <Link href="https://q-gate.co/ind/#">Q-Gate Infotech</Link></Text>

        <List display="flex" flexDirection={["row"]} mb={[10, 0]} alignItems="center">
    <ListItem mr={[4, 2]}> {/* Add right margin for spacing */}
        <Link href="https://q-gate.co/ind/about/">About Us</Link>
    </ListItem>
    <ListItem mr={[4, 2]}>
        <Link href="https://q-gate.co/ind/careers/">Careers</Link>
    </ListItem>
    <ListItem mr={[4, 2]}>
        <Link href="https://q-gate.co/ind/contact/">Contact</Link>
    </ListItem>
</List>
        </Flex>
        </Box>

    </Box>
  );
};

export default Footer;
