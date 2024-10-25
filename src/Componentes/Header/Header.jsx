import React from "react";
import { useTranslation } from "react-i18next";
import CountryFlag from "react-native-country-flag"; // Import the flag component
import "./Header.css";
import logo from "../Image/Q-Gate-Logo.png";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import EvStationIcon from '@mui/icons-material/EvStation';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DnsIcon from '@mui/icons-material/Dns';


const Header = () => {
    const { t, i18n } = useTranslation(); // Hook for translation
    const [showLanguageDropdown, setShowLanguageDropdown] = React.useState(false); 
    const [language, setLanguage] = React.useState(i18n.language || "EN");

    const toggleLanguageDropdown = () => {
        setShowLanguageDropdown(!showLanguageDropdown);
    };

    const changeLanguage = (lang) => {
        setLanguage(lang);
        i18n.changeLanguage(lang); // Change language using i18next
        setShowLanguageDropdown(false);
    };

    const flag = language === "GE" ? (  
        <CountryFlag isoCode="DE" size={20} />
    ) : (
        <CountryFlag isoCode="IN" size={20} />
    );

    return (
        <div className="navbar">
            <div className="logo">
                <img alt="Q-Gate Logo" height="50" src={logo} width="200" />
            </div>
            <div className="menu">
                <a href="#">{t("Home")}</a>

                {/* Display About */}
                <a href="#">{t("About")}</a>
              
                {/* Verticals Dropdown */}
                <div className="dropdown">
                    <a className="dropdown-toggle">{t("Verticals")}</a>
                    <div className="verticals-dropdown">
                        <div className="left-column">
                            <ul>
                                <li><AgricultureIcon style={{ color: '#ce4074' }}/><a href="#">{t("Agriculture")}</a></li>
                                <li><WaterDropIcon style={{ color: '#ce4074' }}/><a href="#">{t("Marine & Water Resource Management")}</a></li>
                                <li><EnergySavingsLeafIcon style={{ color: '#ce4074' }}/><a href="#">{t("Infrastructure Development")}</a></li>
                                <li><ConnectingAirportsIcon style={{ color: '#ce4074' }}/><a href="#">{t("Smart Transportation & Logistics")}</a></li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <ul>
                                <li><EnergySavingsLeafIcon style={{ color: '#ce4074' }}/><a href="#">{t("Energy & Utilities")}</a></li>
                                <li><EnergySavingsLeafIcon style={{ color: '#ce4074' }}/><a href="#">{t("Mining & Mineral Exploration")}</a></li>
                                <li><EvStationIcon style={{ color: '#ce4074' }}/><a href="#">{t("Oil & Gas Industry")}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Services Dropdown */}
                <div className="dropdown">
                    <a className="dropdown-toggle">{t("Services")}</a>
                    <div className="services-dropdown">
                        <div className="left-column">
                            <ul>
                                <li><a href="#">{t("Geospatial Services")}</a></li>
                                <li><a href="#">{t("Software Development")}</a></li>
                                <li><a href="#">{t("Data Analytics")}</a></li>
                                <li><a href="#">{t("Content Annotation")}</a></li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <ul>
                                <li><a href="#">{t("Engineering Solutions")}</a></li>
                                <li><a href="#">{t("Cloud-Based AI/ML Solutions")}</a></li>
                                <li><a href="#">{t("Professional Training")}</a></li>
                                <li><a href="#">{t("Talent Solutions")}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Display Careers and Contact */}
                <a href="#">{t("Careers")}</a>
                <a href="#">{t("Contact")}</a>
            </div>

            {/* Language Switcher */}
            <div className="language">
                <button onClick={toggleLanguageDropdown} className="dropdown-button">
                    {flag} {/* Display the flag */}
                    {language.toUpperCase()} {/* Display the language code */}
                </button>
                {showLanguageDropdown && (
                    <div className="dropdown-menu">
                        <button onClick={() => changeLanguage("EN")}>
                            EN
                        </button>
                        <button onClick={() => changeLanguage("GE")}>
                            GE
                        </button>
                    </div>
                )}
            </div>
           
        </div>
    );
};

export default Header;
