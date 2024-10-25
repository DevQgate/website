import "./App.css";
import Footer from "./Componentes/Footer/Footer.jsx";
import Header from "./Componentes/Header/Header.jsx";
import "./Componentes/i18n";
import MainSection from "./Componentes/MainSection/MainSection.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./Componentes/Contact.jsx";

function App() {
  return (
    <>
      <div>
        <Header />
        <ChakraProvider>
          <Contact />
          {/* <MainSection/> */}
          <Footer />
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
