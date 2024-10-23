import './App.css'
import Footer from './Componentes/Footer/Footer.jsx';
import Header from './Componentes/Header/Header.jsx'
import "./Componentes/i18n"
import MainSection from './Componentes/MainSection/MainSection.jsx';
import { ChakraProvider } from '@chakra-ui/react'

function App() {


  return (
    <>
    <div>

  
   <Header/>
<ChakraProvider>
 
  <MainSection/>
  <Footer/>
</ChakraProvider>


      
    </div>
     
    </>
  )
}

export default App
