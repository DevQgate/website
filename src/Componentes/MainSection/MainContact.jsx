import React from "react";
import { ChakraProvider, Box, Button, Heading, extendTheme } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


const theme = extendTheme({
    
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
});

function App() {
    const { t } = useTranslation();
    
  return (
    <ChakraProvider theme={theme}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
        bg="gray.800"
        p={4}
      >
        <Box textAlign="center">
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight="medium" color="white" mb={4}>
            {t("Accelerate your environmental reporting and compliance efforts with Earth Blox.")}
          </Heading>
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <Button
              colorScheme="green"
              size={{ base: "sm", md: "md", lg: "lg" }}
              px={6}
              py={2}
              borderRadius="full"
            >
              {t("Get Started")}
            </Button>
          </a>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
