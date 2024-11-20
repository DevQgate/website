import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Icon,
  HStack,
} from "@chakra-ui/react";
import {
  FaCogs,
  FaBriefcase,
  FaTasks,
  FaNetworkWired,
  FaTools,
  FaChartLine,
  FaLightbulb,
  FaTruck,
  FaBatteryFull,
  FaHardHat,
  FaOilCan,
  FaGraduationCap,
} from "react-icons/fa";

const App = () => {
  const sections = [
    {
      title: "Agriculture",
      description: `KaNRSoft offers cutting-edge solutions in data management, 
        large-scale services, and geospatial technologies. Our services are tailored 
        to empower utility companies to handle modern challenges effectively. 
        With a focus on innovation, we optimize workflows for maximum efficiency. 
        We specialize in helping clients leverage advanced tools for better decision-making. 
        Whether it's enterprise solutions or managed services, we have you covered.`,
      icons: [
        { icon: FaCogs, text: "Special Enterprise Solutions" },
        { icon: FaBriefcase, text: "Professional Services" },
        { icon: FaTasks, text: "Managed Services" },
        { icon: FaNetworkWired, text: "Utility Network Services" },
        { icon: FaTools, text: "Esri Solutions" },
      ],
      image: "src\\Componentes\\Image\\agriculture-Home.jpg",
    },
    {
      title: "Marine & Water Resource Management",
      description: `Our additional services are designed to complement your core business needs. 
        From consulting to custom software development, we ensure seamless integration with 
        your existing systems. Performance analytics help you monitor and optimize workflows. 
        We provide strategic guidance to help you achieve your goals efficiently. 
        Partner with us for a holistic approach to improving your operational outcomes. 
        Let us simplify complexities, so you can focus on what matters most.`,
      icons: [
        { icon: FaChartLine, text: "Performance Analytics" },
        { icon: FaCogs, text: "Custom Software Development" },
        { icon: FaBriefcase, text: "Consulting Services" },
      ],
      image: "src/Componentes/Image/Marine-Home.jpg",
    },
    {
      title: "Infrastructure Development",
      description: `Revolutionize your business with advanced technology solutions. 
        Our innovative approach integrates AI, data insights, and automation systems 
        for seamless operations. We aim to enhance productivity by streamlining 
        processes with cutting-edge tools. Our team specializes in delivering 
        futuristic solutions tailored to industry needs. Stay ahead of the competition 
        by leveraging our expertise in technology innovations.`,
      icons: [
        { icon: FaLightbulb, text: "AI Solutions" },
        { icon: FaCogs, text: "Automation Systems" },
        { icon: FaChartLine, text: "Data Insights" },
      ],
      image: "src/Componentes/Image/Infrastucture-Home.jpg",
    },
    {
      title: "Smart Transportation & Logistics",
      description: `Efficient transportation and logistics are critical for modern businesses. 
        Our solutions include real-time monitoring and route optimization to ensure timely deliveries. 
        We use state-of-the-art technology to streamline fleet management operations. 
        Our clients benefit from enhanced operational transparency and reduced costs. 
        By integrating smart systems, we help businesses achieve their logistics goals effortlessly. 
        Let us transform your logistics operations into a well-oiled machine.`,
      icons: [
        { icon: FaTruck, text: "Real-Time Monitoring" },
        { icon: FaTools, text: "Route Optimization" },
      ],
      image: "src/Componentes/Image/SMART TRANSPORTATION & LOGISTICS-Home.jpg",
    },
    {
      title: "Energy & Utilities",
      description: `KaNRSoft provides innovative solutions for the energy and utility sector. 
        Our renewable energy systems and grid optimization services ensure sustainable practices. 
        We help clients adopt technologies that improve energy efficiency. 
        Our expertise lies in delivering tools that simplify complex operations. 
        Partner with us to create smarter, greener energy networks. 
        Together, we can power the future with cleaner, reliable energy solutions.`,
      icons: [
        { icon: FaBatteryFull, text: "Renewable Energy Systems" },
        { icon: FaNetworkWired, text: "Grid Optimization" },
      ],
      image: "src/Componentes/Image/ENERGY & UTILITIES-Home.jpg",
    },
    {
      title: "Mining & Mineral Exploration",
      description: `Explore mining and mineral resources with precision using our advanced solutions. 
        We specialize in resource mapping and geospatial technologies tailored for exploration needs. 
        Our tools optimize operations and reduce exploration costs. 
        Sustainability is at the core of what we do, ensuring minimal environmental impact. 
        Collaborate with us to unlock the full potential of your mining projects. 
        Let’s pave the way to smarter and greener resource management.`,
      icons: [
        { icon: FaHardHat, text: "Resource Mapping" },
        { icon: FaTools, text: "Geospatial Solutions" },
      ],
      image: "src/Componentes/Image/MINING & MINERAL EXPLORATION-Home.jpg",
    },
    {
      title: "Oil & Gas Industry",
      description: `Transform your oil and gas operations with innovative solutions. 
        Our services include reservoir management and pipeline monitoring for enhanced safety. 
        We use advanced tools to minimize risks and optimize processes. 
        With years of industry experience, we bring strategic insights to your projects. 
        Let us help you navigate the challenges of this dynamic sector. 
        Partner with us for sustainable and efficient operations.`,
      icons: [
        { icon: FaOilCan, text: "Reservoir Management" },
        { icon: FaNetworkWired, text: "Pipeline Monitoring" },
      ],
      image: "src/Componentes/Image/OIL & GAS INDUSTRY-Home.jpg",
    },
    {
      title: "Education",
      description: `Empowering the education sector with modern technological solutions. 
        Our EdTech tools enhance learning experiences for students and educators alike. 
        Learning management systems streamline administrative tasks and boost engagement. 
        We provide innovative platforms to foster creativity and collaboration. 
        By leveraging technology, we make education more accessible and efficient. 
        Join us in shaping the future of learning with smarter solutions.`,
      icons: [
        { icon: FaGraduationCap, text: "EdTech Solutions" },
        { icon: FaLightbulb, text: "Learning Management Systems" },
      ],
      image: "src/Componentes/Image/EDUCATION-Home.jpg",
    },
  ];

  return (
    <Container maxW="container.lg" p={8}>
      <Heading as="h1" size="2xl" textAlign="center" color="blue.900" mb={20}>
        What We Do...!
      </Heading>
      {sections.map((section, index) => (
        <Flex
          key={index}
          direction={{ base: "column", md: index % 2 === 0 ? "row-reverse" : "row" }}
          mb={100}  // Adds spacing between each section
          gap={8}
          align="center" // Aligns the content vertically centered
        >
          {/* Left Image Box with Blue Background */}
          <Box flex="1" position="relative" maxW="md" mx="auto" height="300px">
            <Box
              position="absolute"
              top="0"
              left="0"
              width="full"
              height="full"
              bg="blue.900"
              transform="rotate(4deg)"
              zIndex="-1"
            />
            <img
              src={section.image}
              alt={section.title}
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "md",
              }}
            />
          </Box>
          {/* Right Content Box */}
          <Box flex="1">
            <Heading as="h2" size="lg" color="blue.900" mb={4}>
              {section.title}
            </Heading>
            <Text mb={4}>{section.description}</Text>
            <HStack spacing={4} wrap="wrap" mb={4}>
              {section.icons.map((item, idx) => (
                <Flex key={idx} align="center">
                  <Icon as={item.icon} color="green" boxSize={6} mr={2} />
                  <Text>{item.text}</Text>
                </Flex>
              ))}
            </HStack>
            <Button colorScheme="blue" variant="solid" size="md">
              Learn More
            </Button>
          </Box>
        </Flex>
      ))}
    </Container>
  );
};

export default App;
