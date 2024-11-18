import React from "react";
import { Box, Flex, Heading, Icon, Text, VStack, Button } from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const App = () => {
  return (
    <Flex direction="column" minH="1300px"> {/* Flex container for the entire page */}
      <Header /> {/* Header Section */}
      <Flex
        flex="1" // Ensures this section takes up the remaining available height
        align="center"
        justify="center"
        direction={{ base: "column", lg: "row" }}
        maxW="10xl"
        mx="auto"
        px={8}
        gap={10}
      >
        {/* Left Content Section */}
        <VStack
          align="flex-start"
          maxW="lg" // Increase the max width to make it bigger
          spacing={6} // Increased spacing between elements for a more spacious layout
        >
          <Flex align="center" gap={4}>
            <Box bg="blue.500" color="white" p={3} rounded="full"> {/* Increased padding */}
              <Icon as={FaCog} w={6} h={7} /> {/* Adjusted icon size */}
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500" position="relative">
                Enhancing Organization-wide
              </Text>
              <Heading fontSize={{ base: "4xl", md: "5xl" }} fontWeight="bold"> {/* Larger heading size */}
                About Us
              </Heading>
            </Box>
          </Flex>
          <Text color="gray.600" fontSize="lg"> {/* Increased text size for better readability */}
            Aereo is a leading drone solutions provider that enables informed
            decision-making, faster turnaround, and enhanced efficiency of your
            projects using end-to-end drone solutions.
          </Text>

          {/* More Button */}
          <Button 
            variant="link" 
            colorScheme="blue" 
            size="md"
            onClick={() => alert('Redirect to more info!')} // You can replace this with a real link or action
          >
            More
          </Button>
        </VStack>

        {/* Video Section */}
        <Box
          as="video"
          autoPlay
          playsInline
          preload="auto"
          muted
          loop
          controlsList="nodownload noremoteplayback"
          autoPictureInPicture={false}
          webkitAirplay="deny"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
          width="740px" // Fixed video width
          height="560px" // Fixed video height
          id="ver-media-video"
        >
          <source
            src="src\Componentes\Video\drone_1_mob.mp4"
            type="video/mp4"
          />
        </Box>
      </Flex>

      <Footer /> {/* Footer Section */}
    </Flex>
  );
};

export default App;
