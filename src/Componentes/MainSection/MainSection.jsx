import React from "react";
import { Box, Flex, Heading, Text, VStack, Button } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const App = () => {
  return (
    <Flex direction="column" minH="1310px"> {/* Flex container for the entire page */}
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
          spacing={5} // Increased spacing between elements for a more spacious layout
        >
          <Flex align="center" gap={4}>
            
            <Box>
              
              <Heading fontSize={{ base: "4xl", md: "5x1" }} fontWeight="bold"> {/* Larger heading size */}
                About Us
              </Heading>
            </Box>
          </Flex>
          <Text color="gray.600" fontSize="lg"> {/* Increased text size for better readability */}
          At Q-Gate Infotech, we drive environmental sustainability through innovative spatial data processing. 
          Leveraging advanced AI and cloud-based technologies, we specialize in geospatial and LiDAR data processing to enhance climate action and disaster management. 
          </Text>

          {/* More Button */}
          <Button 
            variant="link" 
            colorScheme="blue" 
            size="md"
            onClick={() => alert('Redirect to more info!')} // You can replace this with a real link or action
          >
            Learn More
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
