import React from "react";
import { Box, Flex, Image, Text, Heading, Stack } from "@chakra-ui/react";

function ArticleCard({ date, title, description, imageUrl, isLeftAligned }) {
  return (
    <Flex
      direction="column"
      align="center"
      pos="relative"
      w="full"
      maxW="500px"
      mx="auto"
    >
      <Box
        bg="white"
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        w="full"
        h="300px"
      >
        <Image
          src={imageUrl}
          alt="Illustration of AI technology with various elements connected to a central robot"
          objectFit="cover"
          w="full"
          h="full"
        />
      </Box>
      <Box
        bg="white"
        shadow="lg"
        rounded="lg"
        p={6}
        mt={-8}
        pos="relative"
        maxW="400px"
        transform={`translate(${isLeftAligned ? "-25%" : "25%"})`}
      >
        <Flex
          pos="absolute"
          top={-4}
          left={isLeftAligned ? 0 : "auto"}
          right={!isLeftAligned ? 0 : "auto"}
          bg="blue.500"
          color="white"
          w={16}
          h={16}
          rounded="full"
          align="center"
          justify="center"
          direction="column"
          textAlign="center"
          transform={`translate(${isLeftAligned ? "-50%, -50%" : "50%, -50%"})`}
        >
          <Text fontSize="xs">{date.month}</Text>
          <Text fontSize="xs">{date.year}</Text>
        </Flex>
        <Heading as="h2" size="md" mb={2}>
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </Box>
    </Flex>
  );
}

function App() {
  const articles = [
    {
      date: { month: "OCT", year: "2024" },
      title: "Different types of Artificial Intelligence: AI based on Functionality",
      description:
        "The disruptive power of artificial intelligence (AI) is changing entire economies, industries, and lifestyles. Knowing how artificial intelligence expands and what it can do is",
      imageUrl: "https://placehold.co/500x300",
      isLeftAligned: true,
    },
    {
      date: { month: "OCT", year: "2024" },
      title: "Different types of Artificial Intelligence: AI based on Functionality",
      description:
        "The disruptive power of artificial intelligence (AI) is changing entire economies, industries, and lifestyles. Knowing how artificial intelligence expands and what it can do is",
      imageUrl: "https://placehold.co/500x300",
      isLeftAligned: false,
    },
    {
      date: { month: "OCT", year: "2024" },
      title: "Different types of Artificial Intelligence: AI based on Functionality",
      description:
        "The disruptive power of artificial intelligence (AI) is changing entire economies, industries, and lifestyles. Knowing how artificial intelligence expands and what it can do is",
      imageUrl: "https://placehold.co/500x300",
      isLeftAligned: true,
    },
    {
      date: { month: "OCT", year: "2024" },
      title: "Different types of Artificial Intelligence: AI based on Functionality",
      description:
        "The disruptive power of artificial intelligence (AI) is changing entire economies, industries, and lifestyles. Knowing how artificial intelligence expands and what it can do is",
      imageUrl: "https://placehold.co/500x300",
      isLeftAligned: false,
    },
  ];

  return (
    <Flex
      direction="column"
      align="center"
      bg="gray.100"
      minH="100vh"
      justify="center"
      py={8}
    >
      <Stack spacing={8} align="center">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            date={article.date}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            isLeftAligned={article.isLeftAligned}
          />
        ))}
      </Stack>
    </Flex>
  );
}

export default App;
