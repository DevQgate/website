import { Box, Text } from "@chakra-ui/react"; // Import necessary Chakra UI components
import { useTranslation } from "react-i18next"; // For translations
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Product = () => {
  const { t } = useTranslation(); // Use translation hook

  return (
    <>
    <Header/>
      {" "}
      <Box>
        {/* Video Section */}
        <Box position="relative">
          <Box
            as="video"
            src="src\Componentes\Video\Launching Soon.mp4" // Ensure the correct path to your video file
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            height="96vh"
            objectFit="cover"
            style={{ display: "block" }}
          />
          {/* Overlay Section */}
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
            color="yellow.500"
            bg="blackAlpha.500" // Optional: translucent background for better contrast
          >
            <Text fontSize="6xl" fontWeight="bold">
              {t("LAUNCHING SOON....")}
            </Text>
            
          </Box>
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default Product;
