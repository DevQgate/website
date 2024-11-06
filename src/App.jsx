import "./App.css";
import Footer from "./Componentes/Footer/Footer.jsx";
import Header from "./Componentes/Header/Header.jsx";
import "./Componentes/i18n";
import MainSection from "./Componentes/MainSection/MainSection.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./Componentes/Contacts/Contact.jsx";
import Career  from "./Componentes/Career/Career.jsx";
import AboutUs from  "./Componentes/AboutUs/AboutUs.jsx";
import GeospatialServices from "./Componentes/Services/GeospatialServices.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <ChakraProvider>
          {/* <Contact /> */}
          {/* <MainSection/> */}
          {/* <Career/>  */}
          {/* <AboutUs/> */}
          <GeospatialServices/>
          <Footer />
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
