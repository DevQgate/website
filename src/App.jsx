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
import SoftwareDevelopment from "./Componentes/Services/SoftwareDevelopent.jsx";
import DataAnalytics from "./Componentes/Services/DataAnalytics.jsx";
import EngineeringSolutions from "./Componentes/Services/EngineeringSolution.jsx";
import CloudAI_ML from "./Componentes/Services/Cloud AI-ML.jsx";
import ProfessionalTraining from "./Componentes/Services/ProfessionalTraining.jsx";
import ContentAnnotation from "./Componentes/Services/ContentAnnotation.jsx";



function App() {
  return (
    <>
      <div>
        {/* <Header /> */}
        <ChakraProvider>
          {/* <Contact /> */}
          <MainSection/>
          {/* <Career/>  */}
          {/* <AboutUs/>   */}
          
          {/* SERVICES */}

          {/* <GeospatialServices/> */}
          {/* <SoftwareDevelopment/> */}
          {/* <DataAnalytics/> */}
          {/* <EngineeringSolutions/> */}
          {/* <CloudAI_ML/> */}
          {/* <ProfessionalTraining/> */}
          {/* <ContentAnnotation/> */}

          
          {/* <Footer /> */}
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
