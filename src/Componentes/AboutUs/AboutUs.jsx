import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Image,
} from '@chakra-ui/react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <AccordionItem border="none">
    <h2>
      <AccordionButton
        bg={isOpen ? "gray.800" : "gray.200"}
        color={isOpen ? "white" : "gray.800"}
        _hover={{ bg: "gray.800", color: "white" }}
        onClick={onClick}
        p={4}
        textAlign="left"
        width="100%"
      >
        <Box flex="1" fontWeight="semibold">
          {question}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    {isOpen && (
      <AccordionPanel p={4} bg="gray.50" color="gray.800">
        {answer}
      </AccordionPanel>
    )}
  </AccordionItem>
);

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is Q-Gate Infotech’s main focus in geospatial intelligence?", answer: "Q-Gate Infotech’s main focus in geospatial intelligence is to provide advanced spatial data analysis and visualization solutions to help organizations make informed decisions." },
    { question: "How does Q-Gate Infotech contribute to environmental sustainability?", answer: "Q-Gate Infotech contributes to environmental sustainability by leveraging geospatial technologies to monitor and manage natural resources, track environmental changes, and support sustainable development initiatives." },
    { question: "What types of technologies does Q-Gate use for disaster management?", answer: "Q-Gate Infotech uses a range of technologies for disaster management, including remote sensing, GIS mapping, real-time data analytics, and early warning systems to enhance disaster preparedness and response." },
    { question: "How does blockchain enhance data sharing in Q-Gate’s projects?", answer: "Blockchain enhances data sharing in Q-Gate’s projects by providing a secure, transparent, and immutable ledger for recording and verifying data transactions, ensuring data integrity and trust among stakeholders." },
    { question: "What industries does Q-Gate Infotech serve with its spatial intelligence solutions?", answer: "Q-Gate Infotech serves various industries with its spatial intelligence solutions, including agriculture, urban planning, transportation, environmental management, and public safety." },
    { question: "What is the role of AI and machine learning in Q-Gate’s services?", answer: "AI and machine learning play a crucial role in Q-Gate’s services by enabling advanced data analysis, predictive modeling, and automation of geospatial processes, leading to more accurate and efficient solutions." },
    { question: "What is Q-Gate Infotech’s approach to climate change mitigation?", answer: "Q-Gate Infotech’s approach to climate change mitigation involves using geospatial technologies to monitor climate patterns, assess vulnerabilities, and support the development of strategies for reducing greenhouse gas emissions and enhancing climate resilience." },
    { question: "What experience does Q-Gate have with 3D mapping and photogrammetry?", answer: "Q-Gate Infotech has extensive experience with 3D mapping and photogrammetry, utilizing these technologies to create detailed and accurate 3D models of landscapes, infrastructure, and urban environments for various applications." },
    { question: "How does Q-Gate Infotech support educational and social responsibility initiatives?", answer: "Q-Gate Infotech supports educational and social responsibility initiatives by providing training programs, collaborating with academic institutions, and engaging in community projects that promote the use of geospatial technologies for social good." },
    { question: "What are Q-Gate’s goals for expanding its services in the future?", answer: "Q-Gate’s goals for expanding its services in the future include exploring new geospatial technologies, expanding into new markets, and continuing to innovate and provide cutting-edge solutions to address emerging challenges in various industries." },
  ];

  return (
    <ChakraProvider>
      <Box mb={10}>
        {/* Image Section at the Top */}
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
                About Us
            </Text>
            <Text fontSize="lg">Q-Gate Infotech Private Limited / About Us</Text>
          </Box>
        </Box>

        {/* FAQ Section */}
        <Box
          maxW="4xl"
          mx="auto"
          mt={10}
          mb={10}
          bg="white"
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          borderWidth="1px"
          borderColor="gray.200"
        >
          <Heading as="h1" size="xl" p={6} bg="white" color="gray.800" textAlign="center">
            Q-Gate Infotech FAQs
          </Heading>
          <Accordion allowToggle>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </Accordion>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default FAQList;