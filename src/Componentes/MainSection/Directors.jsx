import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Heading,
  Center,
  Icon,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Since I started Sparkgeo in 2010, our mission has always been to ‘put maps on the internet.’ Even as we have grown into a mature services organization with staff across the globe, that mission is still at our core.",
    name: "Will Cadell",
    title: "Sparkgeo CEO",
    image: "https://placehold.co/300x400",
  },
  {
    text: "Our team at Sparkgeo is dedicated to providing the best geospatial solutions. We have a passion for innovation and a commitment to excellence that drives us to constantly improve and evolve our services.",
    name: "Jane Doe",
    title: "Sparkgeo CTO",
    image: "https://placehold.co/300x400",
  },
  {
    text: "At Sparkgeo, we believe in the power of maps to change the world. Our mission is to make geospatial technology accessible and useful for everyone, and we are proud of the impact we have made so far.",
    name: "John Smith",
    title: "Sparkgeo COO",
    image: "https://placehold.co/300x400",
  },
];

const TestimonialSlider = () => {
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

  const { text, name, title, image } = testimonials[currentIndex];

  return (
    <Flex justify="center" align="center" minH="50vh" bg="gray.400">
      <Flex align="center">
        <IconButton
          onClick={handlePrev}
          aria-label="Previous"
          icon={<FaChevronLeft />}
          variant="ghost"
          fontSize="2xl"
          color="gray.600"
          _hover={{ color: "gray.900" }}
        />
      </Flex>
      <Box
        bg="white"
        rounded="lg"
        shadow="lg"
        width='1000px'
        height='300px'
        overflow="hidden"
        display="flex"
        mx={4}
      >
        <Image
          src={image}
          alt={`Portrait of ${name}`}
          boxSize="auto"
          maxW="300px"
          objectFit="cover"
        />
        <Box p={8}>
          <Flex align="center" mb={4}>
            <Icon as={FaQuoteLeft} boxSize={6} color="black" />
          </Flex>
          <Text color="gray.700" fontSize="lg" mb={4} lineHeight="tall">
            {text}
          </Text>
          <Heading size="md" fontWeight="bold" color="gray.900">
            {name}
          </Heading>
          <Text color="gray.600">{title}</Text>
        </Box>
      </Box>
      <Flex align="center">
        <IconButton
          onClick={handleNext}
          aria-label="Next"
          icon={<FaChevronRight />}
          variant="ghost"
          fontSize="2xl"
          color="gray.600"
          _hover={{ color: "gray.900" }}
        />
      </Flex>
    </Flex>
  );
};

export default TestimonialSlider;
