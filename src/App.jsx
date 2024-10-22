import './App.css'
import Header from './Componentes/Header/Header'
import { useTranslation } from "react-i18next";
import "./Componentes/i18n"
import MainSection from './Componentes/MainSection/MainSection';
function App() {


  return (
    <>
      <Header/>
      <MainSection/>
    </>
  )
}

export default App
