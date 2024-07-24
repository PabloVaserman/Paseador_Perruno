import React, { useState, useEffect } from "react";
import { recomendaciones } from "@/app/db.js";

const SlideBis = () => {
  const images = [
    "/imagenes/perro1.jpg",
    "/imagenes/perro2.jpg",
    "/imagenes/perro3.jpg",
    "/imagenes/perro4.jpg",
    "/imagenes/perro5.jpg",
    "/imagenes/perro6.jpg",
    "/imagenes/perro7.jpg",
    "/imagenes/perro8.jpg",
    "/imagenes/perro9.jpg",
    "/imagenes/perro10.jpg",
    "/imagenes/perro11.jpeg",
    "/imagenes/perro12.jpeg",
    "/imagenes/perro13.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="flex justify-center items-center h-screen flex-col relative">
      <div className="slide-container relative flex flex-col items-center">
        <div className="flex justify-center items-center">
          <div className="border-emerald-400 rounded-full bg-blue-700 border-8 circulo flex items-center justify-center">
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute right-20 top-13 p-4">
        <div className="bg-yellow-400 text-blue-600 rounded-lg p-4 shadow-md max-w-xs">
          <p className="text-lg italic relative text-center">
            <span className="font-bold text-4xl absolute top-1 left-0">
              &ldquo;
            </span>
            <br />
            {recomendaciones[currentImageIndex].comentario}
            <br />
            <span className="font-bold text-4xl absolute bottom-8 right-3">
              &rdquo;
            </span>
            <br />
            <span className="font-bold text-xl">
              {recomendaciones[currentImageIndex].nombre}, de{" "}
              {recomendaciones[currentImageIndex].barrio}
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-20 h-10 bg-orange-600 rounded-xl text-center font-bold text-yellow-200 flex items-center justify-center mr-12">
          <button onClick={prevImage}>Previa</button>
        </div>
        <div className="w-24 h-10 bg-orange-600 rounded-xl text-center font-bold text-yellow-200 flex items-center justify-center ml-12">
          <button onClick={nextImage}>Siguiente</button>
        </div>
      </div>
    </div>
  );
};

export default SlideBis;
