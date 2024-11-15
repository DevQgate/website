import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Circle,
  Grid,
  GridItem,
} from '@chakra-ui/react';


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
                A friendly work culture fosters collaboration, open
                communication, and mutual respect among team members. It
                encourages positive relationships, promotes teamwork, and
                creates a supportive atmosphere where everyone feels valued and
                motivated to contribute.
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
                innovation and creativity, leading to successful project
                outcomes and a thriving work environment.
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
                These benefits provide employees with comprehensive resources
                for themselves and their families.
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
                The company provides a provident fund, allowing employees to
                save for their future through regular contributions. The fund
                helps to ensure financial security for employees in the long
                term, promoting long-term savings and stability.
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
      <JobOpportunities />
    </div>
  );
};

const JobCard = ({ number, title, location, type, experience, responsibilities, requirements, email }) => (
  <Box bg="white" p={6} rounded="lg" shadow="md">
    <Heading as="h2" size="lg" color="green.500" mb={4}>
      {number}.
    </Heading>
    <Heading as="h3" size="md" fontWeight="bold" mb={2}>
      {title}
    </Heading>
    <Text color="gray.700" mb={2}><strong>Location:</strong> {location}</Text>
    <Text color="gray.700" mb={2}><strong>Type:</strong> {type}</Text>
    <Text color="gray.700" mb={2}><strong>Experience Level:</strong> {experience}</Text>

    <Heading as="h4" size="sm" fontWeight="bold" mt={4} mb={2}>Responsibilities:</Heading>
    {responsibilities.map((resp, idx) => (
      <Text key={idx} color="gray.700" mb={2}><strong>{resp.title}:</strong> {resp.description}</Text>
    ))}

    <Heading as="h4" size="sm" fontWeight="bold" mt={4} mb={2}>Requirements:</Heading>
    {requirements.map((req, idx) => (
      <Text key={idx} color="gray.700" mb={2}>{req}</Text>
    ))}

    <Heading as="h4" size="sm" fontWeight="bold" mt={4} mb={2}>How to Apply:</Heading>
    <Text color="gray.700">Send your resume and portfolio to {email}</Text>
  </Box>
);

const JobOpportunities = () => {
  return (
    <Box bg="gray.100" p={8}>
      <Heading as="h1" size="xl" fontWeight="bold" textAlign="center" mb={8}>
        <Text as="span" color="green.500">Job</Text> Opportunities
      </Heading>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
        <GridItem>
          <JobCard
            number="01"
            title="Lead Mobile App Developer"
            location="Erode/Bengaluru"
            type="Full-Time"
            experience="5+ years"
            responsibilities={[
              { title: 'Technical Leadership', description: 'Lead the development of mobile applications for iOS and/or Android platforms. Provide technical guidance and mentorship to junior developers. Oversee the entire software development lifecycle, from requirements gathering to deployment and maintenance.' },
              { title: 'Architecture and Design', description: 'Design and implement scalable and maintainable application architectures. Ensure the use of best practices in coding, testing, and deployment. Collaborate with UI/UX designers to create intuitive and visually appealing interfaces.' },
              { title: 'Development and Coding', description: 'Write clean, maintainable, and efficient code. Develop new features and enhance existing functionalities based on project requirements. Integrate third-party services and APIs as needed.' },
              { title: 'Code Reviews and Quality Assurance', description: 'Conduct regular code reviews to ensure code quality and adherence to coding standards. Implement automated testing and continuous integration processes. Troubleshoot and debug issues to optimize performance.' },
              { title: 'Collaboration and Communication', description: 'Work closely with project managers, designers, QA engineers, and other stakeholders. Participate in sprint planning, daily stand-ups, and retrospectives. Provide technical documentation and training materials as needed.' }
            ]}
            requirements={[
              "Bachelor's degree in Computer Science, Software Engineering, or a related field.",
              "5+ years of experience in mobile app development, with a strong focus on either iOS (Swift/Objective-C) or Android (Kotlin/Java).",
              "Proficiency in cross-platform frameworks such as Flutter or React Native is a plus.",
              "Strong understanding of RESTful APIs, JSON, and third-party libraries.",
              "Experience with version control systems (e.g., Git).",
              "Excellent problem-solving skills and attention to detail.",
              "Proven track record of delivering high-quality mobile applications.",
              "Leadership and mentorship experience is highly desirable."
            ]}
            email="hr@q-gate.in"
          />
        </GridItem>
        <GridItem>
          <JobCard
            number="02"
            title="Junior Mobile App Developer (iOS/Android)"
            location="Erode/Bengaluru"
            type="Full-Time"
            experience="Entry-Level / Freshers"
            responsibilities={[
              { title: 'Development and Coding', description: 'Assist in the development of iOS and/or Android applications. Write clean, maintainable, and efficient code under the guidance of senior developers. Develop new features and enhance existing functionalities based on project requirements.' },
              { title: 'Learning and Skill Development', description: 'Participate in training sessions and workshops to improve technical skills. Stay updated with the latest trends and best practices in mobile app development. Apply learned concepts to real-world projects and tasks.' },
              { title: 'Collaboration and Communication', description: 'Work closely with senior developers, designers, and QA engineers. Participate in sprint planning, daily stand-ups, and retrospectives. Provide regular updates on task progress and report any issues encountered.' },
              { title: 'Testing and Debugging', description: 'Assist in the testing and debugging of applications. Work with QA engineers to identify and fix bugs. Conduct code reviews and implement feedback from senior developers.' },
              { title: 'Documentation', description: 'Document code and development processes. Create and maintain technical documentation as required. Assist in creating user guides and training materials.' }
            ]}
            requirements={[
              "Bachelor's degree in Computer Science, Software Engineering, or a related field.",
              "Basic understanding of iOS development (Swift/Objective-C) or Android development (Kotlin/Java).",
              "Familiarity with development tools such as Xcode (for iOS) or Android Studio (for Android).",
              "Knowledge of RESTful APIs and third-party libraries is a plus.",
              "Good problem-solving skills and attention to detail.",
              "Ability to work collaboratively in a team environment.",
              "Eagerness to learn and adapt to new technologies and methodologies."
            ]}
            email="hr@q-gate.in"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};


export default Careers;
