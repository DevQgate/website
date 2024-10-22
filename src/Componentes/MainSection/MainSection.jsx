import "./MainSection.css";
import { FaMapMarkedAlt, FaLaptopCode, FaChartLine, FaPencilAlt, FaCogs, FaCloud, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import { Box, Heading, Text, Button, Grid, Icon } from '@chakra-ui/react';

const MainSection = () => {

    const services = [
        {
            title: "Geospatial Processing",
            description: "Expert in geospatial processing to transform raw spatial data into actionable insights for informed decision-making.",
            icon: FaMapMarkedAlt
        },
        {
            title: "Software Development",
            description: "Delivering innovative IT solutions and development services to enhance geospatial data processing and management.",
            icon: FaLaptopCode
        },
        {
            title: "Data Analytics",
            description: "Unlocking actionable insights through advanced data analytics, transforming geospatial data into strategic solutions.",
            icon: FaChartLine
        },
        {
            title: "Content Annotation",
            description: "Providing expert content annotation services to enrich geospatial data for improved accuracy and analysis.",
            icon: FaPencilAlt
        },
        {
            title: "Engineering Solutions",
            description: "Providing tailored engineering solutions powered by geospatial technology for accurate planning, design, and infrastructure management.",
            icon: FaCogs
        },
        {
            title: "Cloud-Based AI/ML Solutions",
            description: "Delivering cutting-edge cloud-based AI/ML solutions to accelerate geospatial data processing and intelligent decision-making.",
            icon: FaCloud
        },
        {
            title: "Professional Training",
            description: "Offering professional training programs to equip individuals and teams with essential geospatial and remote sensing skills.",
            icon: FaChalkboardTeacher
        },
        {
            title: "Talent Solutions",
            description: "Connecting businesses with top-tier talent through specialized geospatial and remote sensing talent solutions.",
            icon: FaUsers
        }
    ];

    return (
        <Box bg="gray.50" minH="100vh" p={8}>
            <Box textAlign="center" mb={12}>
                <Text color="blue.600" fontSize="sm" fontWeight="bold">
                    SERVICES
                </Text>
                <Heading fontSize="3xl" mt={2}>
                    In the meantime, here are the services we offer
                </Heading>
            </Box>
            <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={8}>
                {services.map((service) => (
                    <Box key={service.title} bg="white" p={6} rounded="lg" shadow="md">
                        <Box color="blue.600" mb={4} fontSize="4xl">
                            <Icon as={service.icon} aria-label={service.title} />
                        </Box>
                        <Heading fontSize="xl" mb={2}>
                            {service.title}
                        </Heading>
                        <Text color="gray.700" mb={4}>
                            {service.description}
                        </Text>
                        <Button colorScheme="blue" variant="link" _hover={{ textDecoration: 'underline' }}>
                            View More
                        </Button>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default MainSection;
