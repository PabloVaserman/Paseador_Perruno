"use client";

import React from "react";

function Logo() {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <img
        src={"/imagenes/logo.gif"}
        className="bg-amber-400"
        alt="Paseador Perruno, LOGO"
      />

      <div className="w-2/4 h-40 border-teal-300 rounded-2xl border-8 bg-yellow-400 flex justify-center items-center ">
        <h1 className="text-2xl text-center font-bold text-purple-500">
          ¿Buscás un servicio de paseo de perros confiable?{" "}
          <br></br> Nuestros paseadores brindan atención individualizada a cada mascota, <br></br> creando una experiencia positiva que
          tu perro disfrutará al máximo.{" "}
        </h1>
      </div>
    </div>
  );
}

export default Logo;
