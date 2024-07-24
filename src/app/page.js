"use client";

import React from "react";
import Logo from "../components/Header/logo.jsx";
import Slide from "../components/slide.jsx";
import WhatsAppButton from "@/components/Contacto/wap.jsx";
import "./globals.css";
import SlideBis from "@/components/SlideBis.jsx";
import Ansioso from "@/components/Ansioso.jsx";
import Cierre from "@/components/Footer.jsx";

function App() {
  return (
    <div className="Paseador de Perros">
      <Logo />
      <SlideBis />
      <WhatsAppButton />
      <Ansioso />
     
     
    </div>
  );
}

export default App;
