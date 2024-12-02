import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import BackgroundImage from "../Image/MainSection/MainSection - Directors - BG.jpg"; // Adjust the path to your image file
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    text: "As the Founder and Director of Q-Gate Infotech, I lead a dynamic team that delivers innovative geospatial solutions integrated with AI/ML technologies. My goal has been to revolutionize the way organizations approach Data processing, that includes Disaster Management, Utility, Urban and Rural planning to Environmental Sustainability.",
    name: "Vijayan Raju",
    title: "Founder & Director",
    image: "https://placehold.co/300x400",
  },
  {
    text: "Our team at Q - Gate is dedicated to providing the best geospatial solutions. We have a passion for innovation and a commitment to excellence that drives us to constantly improve and evolve our services.",
    name: "Michela Zenari Setty",
    title: "Director",
    image: "https://placehold.co/300x400",
  },
  {
    text: "At Q - Gate, we believe in the power of maps to change the world. Our mission is to make geospatial technology accessible and useful for everyone, and we are proud of the impact we have made so far.",
    name: "Indumathi Anbalagan",
    title: "Director Finance",
    image: "https://placehold.co/300x400",
  },
];

const TestimonialSlider = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Translate testimonial text here
  const { text, name, title, image } = testimonials[currentIndex];
  const translatedText = t(text); // Apply translation here

  return (
    <Box
      minH="100vh"
      bgImage={`url(${BackgroundImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Flex justify="center" align="center" minH="100vh">
        <Flex align="center">
          <IconButton
            onClick={handlePrev}
            aria-label="Previous"
            icon={<FaChevronLeft />}
            variant="ghost"
            fontSize={{ base: "md", md: "lg", lg: "2xl" }} // Adjust icon size
            color="gray.600"
            _hover={{ color: "gray.900" }}
            mx={{ base: 1, md: 2 }} // Adjust spacing
          />
        </Flex>
        <Box
          bg="white"
          rounded="lg"
          shadow="lg"
          width={{ base: "90%", md: "80%", lg: "1000px" }} // Adjust width
          height={{ base: "auto", md: "350px", lg: "300px" }} // Adjust height for responsiveness
          overflow="hidden"
          display="flex"
          flexDirection={{ base: "column", md: "row" }} // Stack for smaller screens
          mx={4}
        >
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            boxSize={{ base: "100%", md: "auto" }} // Full width on mobile
            maxW={{ base: "100%", md: "300px" }} // Restrict max width
            objectFit="cover"
          />
          <Box p={{ base: 4, md: 8 }}>
            <Flex align="center" mb={4}>
              <Icon
                as={FaQuoteLeft}
                boxSize={{ base: 4, md: 6 }}
                color="black"
              />{" "}
              {/* Adjust size */}
            </Flex>
            <Text
              color="gray.700"
              fontSize={{ base: "sm", md: "lg" }} // Adjust font size
              mb={4}
              lineHeight="tall"
            >
              {translatedText}
            </Text>
            <Heading
              size="sm"
              fontWeight="bold"
              color="gray.900"
              fontSize={{ base: "md", md: "lg" }} // Adjust heading size
            >
              {name}
            </Heading>
            <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
              {title}
            </Text>
          </Box>
        </Box>
        <Flex align="center">
          <IconButton
            onClick={handleNext}
            aria-label="Next"
            icon={<FaChevronRight />}
            variant="ghost"
            fontSize={{ base: "md", md: "lg", lg: "2xl" }} // Adjust icon size
            color="gray.600"
            _hover={{ color: "gray.900" }}
            mx={{ base: 1, md: 2 }} // Adjust spacing
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TestimonialSlider;
