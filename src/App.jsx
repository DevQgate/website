import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Componentes/Footer/Footer.jsx";
import Header from "./Componentes/Header/Header.jsx";
import "./Componentes/i18n";
import MainSection from "./Componentes/MainSection/MainSection.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import Contact from "./Componentes/Contacts/Contact.jsx";
import Career from "./Componentes/Career/Career.jsx";
import AboutUs from "./Componentes/AboutUs/AboutUs.jsx";
import GeospatialServices from "./Componentes/Services/GeospatialServices.jsx";
import SoftwareDevelopment from "./Componentes/Services/SoftwareDevelopent.jsx";
import DataAnalytics from "./Componentes/Services/DataAnalytics.jsx";
import EngineeringSolutions from "./Componentes/Services/EngineeringSolution.jsx";
import CloudAI_ML from "./Componentes/Services/Cloud AI-ML.jsx";
import ProfessionalTraining from "./Componentes/Services/ProfessionalTraining.jsx";
import ContentAnnotation from "./Componentes/Services/ContentAnnotation.jsx";
import Industries from "./Componentes/Industries/Industries.jsx";
import Agriculture from "./Componentes/Industries/Agriculture.jsx";
import MarinesWaterManagement from "./Componentes/Industries/MarinesWaterManagement.jsx";
import InfrastructureDevelopment from "./Componentes/Industries/InfrastructureDevelopment.jsx";
import SmartTransporatation from "./Componentes/Industries/SmartTransporatation.jsx";
import EnergyAndUtilities from "./Componentes/Industries/EnergyAndUtilities.jsx";
import MiningAndMineral from "./Componentes/Industries/MiningAndMineral.jsx";
import OilAndGas from "./Componentes/Industries/OilAndGas.jsx";
import Education from "./Componentes/Industries/Education.jsx";
import Service from "./Componentes/Services/Service.jsx";
import TalentSolutions from "./Componentes/Services/TalentSolutions.jsx";
import Product from "./Componentes/Product/Product.jsx";
import Blogs from "./Componentes/Blogs/Blogs.jsx";

function App() {
  return (
    <>
      <ChakraProvider>
        <Router>
          {/* <Header />  */}
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<Service />} />
            <Route path="/geospatial-services" element={<GeospatialServices />} />
            <Route path="/software-development" element={<SoftwareDevelopment />} />
            <Route path="/data-analytics" element={<DataAnalytics />} />
            <Route path="/engineering-solutions" element={<EngineeringSolutions />} />
            <Route path="/cloud-ai-ml" element={<CloudAI_ML />} />
            <Route path="/professional-training" element={<ProfessionalTraining />} />
            <Route path="/content-annotation" element={<ContentAnnotation />} />
            <Route path="/talent-solutions" element={<TalentSolutions />} />

            {/* Industries Routes */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/marine-water-resources" element={<MarinesWaterManagement />} />
            <Route path="/infrastructure-development" element={<InfrastructureDevelopment />} />
            <Route path="/transportation-logistics" element={<SmartTransporatation />} />
            <Route path="/energy-utilities" element={<EnergyAndUtilities />} />
            <Route path="/mining-and-mineral" element={<MiningAndMineral />} />
            <Route path="/oil-gas-industry" element={<OilAndGas />} />
            <Route path="/education" element={<Education />} />

            {/* Other Routes */}
            <Route path="/product" element={<Product />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
          {/* <Footer />  */}
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
