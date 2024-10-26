import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Circle,
} from "@chakra-ui/react";

const Careers = () => {
  return (
    <div>
        <Box>
        <Box position="relative">
          <Image
            src="src\Componentes\Image\contact.jpg"
            alt="Contact"
            width="100%"
            height="96"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
          >
            <Text fontSize="4xl" fontWeight="bold">
              Careers
            </Text>
            <Text fontSize="lg">Q-Gate Infotech Private Limited / careers</Text>
          </Box>
        </Box>
      </Box>
      <Box
      bg="white"
      color="gray.800"
      fontFamily="Roboto, sans-serif"
      p={6}
      maxW="4xl"
      mx="auto"
    >
      <VStack spacing={2} mb={8}>
        <Text fontSize="xl" fontWeight="normal" textAlign="center">
          Join with us
        </Text>
        <Heading fontSize="2xl" fontWeight="bold" textAlign="center">
          Why choose your brilliant{" "}
          <Text as="span" color="green.500">
            career
          </Text>{" "}
          with us?
        </Heading>
      </VStack>
      <VStack spacing={8}>
        {/* Friendly Environment */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            src="src\Componentes\Image\Career-1.jpg"
            alt="Illustration of a friendly work environment with people collaborating"
            rounded="lg"
            shadow="lg"
            mb={{ base: 4, md: 0 }}
            order={{ base: 1, md: 0 }}
          />
          <Box ml={{ md: 4 }}>
            <Flex align="center" mb={2}>
              <Circle
                size="10"
                bg="green.500"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mr={2}
              >
                1
              </Circle>
              <Heading fontSize="xl" fontWeight="bold">
                Friendly Environment
              </Heading>
            </Flex>
            <Text color="gray.600" textAlign="justify">
              A friendly work culture fosters collaboration, open communication,
              and mutual respect among team members. It encourages positive
              relationships, promotes teamwork, and creates a supportive
              atmosphere where everyone feels valued and motivated to
              contribute.
            </Text>
          </Box>
        </Flex>

        {/* Team Work */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            src="src\Componentes\Image\Career-2.jpg"
            alt="Image of hands working together to plant a tree"
            rounded="lg"
            shadow="lg"
            mb={{ base: 4, md: 0 }}
            order={{ base: 1, md: 2 }}
          />
          <Box mr={{ md: 4 }}>
            <Flex align="center" mb={2}>
              <Circle
                size="10"
                bg="green.500"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mr={2}
              >
                2
              </Circle>
              <Heading fontSize="xl" fontWeight="bold">
                Team Work
              </Heading>
            </Flex>
            <Text color="gray.600" textAlign="justify">
              The company emphasizes teamwork, fostering collaboration and
              communication among employees to achieve common goals. This
              approach enhances skills, strengthens relationships, and drives
              innovation and creativity, leading to successful project outcomes
              and a thriving work environment.
            </Text>
          </Box>
        </Flex>

        {/* Health Insurance */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            src="src\Componentes\Image\Career-3.jpg"
            alt="Image representing health insurance with medical icons"
            rounded="lg"
            shadow="lg"
            mb={{ base: 4, md: 0 }}
            order={{ base: 1, md: 0 }}
          />
          <Box ml={{ md: 4 }}>
            <Flex align="center" mb={2}>
              <Circle
                size="10"
                bg="green.500"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mr={2}
              >
                3
              </Circle>
              <Heading fontSize="xl" fontWeight="bold">
                Health Insurance
              </Heading>
            </Flex>
            <Text color="gray.600" textAlign="justify">
              The company offers health insurance that includes coverage for
              medical, dental, and vision care, as well as wellness programs.
              These benefits provide employees with comprehensive resources for
              themselves and their families.
            </Text>
          </Box>
        </Flex>

        {/* Provident Fund */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          textAlign={{ base: "center", md: "left" }}
        >
          <Image
            src="src\Componentes\Image\Career-4.jpg"
            alt="Image of coins and plants representing provident fund growth"
            rounded="lg"
            shadow="lg"
            mb={{ base: 4, md: 0 }}
            order={{ base: 1, md: 2 }}
          />
          <Box mr={{ md: 4 }}>
            <Flex align="center" mb={2}>
              <Circle
                size="10"
                bg="green.500"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mr={2}
              >
                4
              </Circle>
              <Heading fontSize="xl" fontWeight="bold">
                Provident Fund
              </Heading>
            </Flex>
            <Text color="gray.600" textAlign="justify">
              The company provides a provident fund, allowing employees to save
              for their future through regular contributions. The fund helps to
              ensure financial security for employees in the long term,
              promoting long-term savings and stability.
            </Text>
          </Box>
        </Flex>
      </VStack>

    </Box>
    
    </div>
   
  );
};

export default Careers;
