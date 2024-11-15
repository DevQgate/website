import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Heading,
  Flex,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"; // Keep the left and right chevrons
import { FaQuoteLeft } from "react-icons/fa"; // Import the quote-left icon from react-icons
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 3
    );
  };
  const testimonials = [
    {
      text: t(
        "Geoweek is an amazing opportunity to network, learn about innovations, and grow as a Geospatial professional. I highly recommend attending if you get the chance!"
      ),
      author: t("VDOT"),
    },
    {
      text: t(
        "Geo Week is the premiere conference for geospatial professionals; it is an unparalleled opportunity to meet and collaborate with our fellows from around the world."
      ),
      author: t("David Evans and Associates, Inc"),
    },
    {
      text: t(
        "This event was full of industry experts sharing best practices and real world applications of solutions they've created for unique problems."
      ),
      author: t("Blue Nose Aerial Imaging - Trinidad"),
    },
    {
      text: t(
        "The networking opportunities at Geo Week are unmatched. I made connections that will last a lifetime."
      ),
      author: t("John Doe"),
    },
    {
      text: t(
        "The sessions were incredibly informative and the speakers were top-notch. I learned so much!"
      ),
      author: t("Jane Smith"),
    },
    {
      text: t(
        "Geo Week is a must-attend event for anyone in the geospatial industry. Highly recommended!"
      ),
      author: t("Acme Corp"),
    },
  ];
  
  return (
    <Box
      width="100%"
      height="400px"
      backgroundImage="url('src\\Componentes\\Image\\about-2.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      position="relative"
      padding={4}
    >
      <Flex direction="column" align="center" justify="center" height="100%">
        <Box textAlign="center" marginBottom={8}>
          <Icon as={FaQuoteLeft} boxSize={8} />{" "}
          {/* Changed to use quote-left icon */}
          <Heading size="2xl" fontWeight="bold" mt={2}>
            {t("What People Are Saying")}
          </Heading>
        </Box>

        <Flex justify="space-between" width="full" marginTop={4}>
          <Button onClick={handlePrev} colorScheme="blue" variant="ghost">
            <ChevronLeftIcon boxSize={8} />{" "}
            {/* Left arrow remains for carousel navigation */}
          </Button>

          <Flex overflow="hidden" width="full" justify="center">
            <Stack direction="row" spacing={4} align="center">
              {testimonials
                .slice(currentIndex, currentIndex + 3)
                .map((testimonial, index) => (
                  <Box
                    key={index}
                    bg="black"
                    p={6}
                    borderRadius="lg"
                    maxWidth="xs"
                    textAlign="center"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="full"
                  >
                    <Text mb={4}>{testimonial.text}</Text>
                    <Text fontWeight="bold">{testimonial.author}</Text>
                  </Box>
                ))}
            </Stack>
          </Flex>

          <Button onClick={handleNext} colorScheme="blue" variant="ghost">
            <ChevronRightIcon boxSize={8} />{" "}
            {/* Right arrow remains for carousel navigation */}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Blog;
