import React from "react";
import { Box, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { FaCog } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const App = () => {
  return (
    <>
    <Header/>
    <Flex align="center" justify="center" h="100vh" bg="white">
      <Flex
        align="center"
        direction={{ base: "column", lg: "row" }}
        maxW="10xl"
        mx="auto"
        px={8}
        gap={10}
      >
        <VStack align="flex-start" maxW="md" spacing={4}>
          <Flex align="center" gap={4}>
            <Box bg="blue.500" color="white" p={2} rounded="full">
              <Icon as={FaCog} w={5} h={6} />
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.500" position="relative">
                Enhancing Organization-wide
              </Text>
              <Heading fontSize={{ base: "3xl", md: "4x1" }} fontWeight="bold">
                About Us
              </Heading>
            </Box>
          </Flex>
          <Text color="gray.600">
            Aereo is a leading drone solutions provider that enables informed
            decision-making, faster turnaround, and enhanced efficiency of your
            projects using end-to-end drone solutions.
          </Text>
        </VStack>
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
          width="100%"
          height="100%"
          id="ver-media-video"
        >
          <source
            src="src\Componentes\Video\drone_1_mob.mp4"
            type="video/mp4"
          />
        </Box>
      </Flex>
    </Flex>
    <Footer/>
    </>
    
  );
};

export default App;
