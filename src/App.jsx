import React from "react";
import Navbar from "./components/header/Navbar";
import HomeSection from "./components/home/HomeSection";
import AboutSection from "./components/about/AboutSection";
import ServiceSection from "./components/service/ServiceSection";
import TeamSection from "./components/team/TeamSection";
import ContactUsSection from "./components/contactUs/ContactUsSection";
import Footer from "./components/footer/Footer";
import "../src/assets/css/style.css";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServiceSection />
      <TeamSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default App;
