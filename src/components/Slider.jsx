import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image1 from "@/assets/slider/img1.jpg";
import Image2 from "@/assets/slider/img2.jpg";
import Image3 from "@/assets/slider/img3.jpg";
import Image4 from "@/assets/slider/img4.jpg";

const Slider = () => {
  const slides = [
    {
      id: 1,
      name: "Q3 TRENDS TO WATCH",
      description:
        "In Q3 2023, the consumer packaged goods (CPG) industry continued to face a substantial threat of class-action activity, with continued filings against companies in the food, beverage, and personal care spaces. Recent months have also seen significant regulatory developments on both the federal and state levels.",
      image: Image1,
      from: "from-[#000000]",
    },
    {
      id: 2,
      name: "MAXIMIZE RECOVERY, MINIMIZE LOSS",
      description:
        "When a hurricane hits, some of the most significant losses involve interruption to normal business operations. First-party property coverage can protect businesses in such losses, yet this insurance is among the most complicated. Perkins Coie’s Insurance Recovery team assists policyholders with first-party property coverage and is available to guide policyholders.",
      image: Image2,
      from: "from-[#000000]",
    },
    {
      id: 3,
      name: "LEGAL EXECELLENCE",
      description:
        "Law360 has recognized Perkins Coie as a Regional Powerhouse law firm for delivering litigation success to its clients across the Pacific Northwest and for providing AI-related counsel to global technology clients, among other aspects of the firm's legal work.",
      image: Image3,
      from: "from-[#000000]",
    },
    {
      id: 4,
      name: "MIDYEAR TRENDS TO WATCH",
      description:
        "In the first half of 2023, the consumer packaged goods (CPG) industry continued to face a substantial threat of class-action activity, with continued filings against companies in the food, beverage, and personal care spaces. Recent months have also seen significant regulatory developments on both the federal and state levels.",
      image: Image4,
      from: "from-[#000000]",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Establecer un intervalo para cambiar automáticamente el slide cada 3 segundos
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Limpiar el intervalo cuando el componente se desmonta o el índice cambia manualmente
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Dependencia para el useEffect
  return (
    <div className="relative h-[100vh] overflow-hidden   ">
      {/* Contenedor de puntos y descripción */}
      <div className="absolute z-40 flex mx-auto w-full bottom-0 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="flex flex-col items-center  justify-center "
          >
            <RxDotFilled
              onClick={() => goToSlide(slideIndex)}
              className={`text-4xl cursor-pointer ${
                slideIndex === currentIndex ? "text-primary" : "text-white"
              }`}
            />
            <div
              onClick={() => goToSlide(slideIndex)}
              className={` ${
                slideIndex === currentIndex ? "bg-blue-500" : "bg-white"
              }  rounded-full h-10 w-10 cursor-pointer flex items-center mx-2 mt-6 justify-center`}
            >
              <p className="text-black">{slideIndex + 1}</p>
            </div>
            <div
              onClick={() => goToSlide(slideIndex)}
              className={` ${
                slideIndex === currentIndex ? "bg-yellow-500" : "bg-white"
              }   h-2 w-20 cursor-pointer flex items-center mx-2 mt-6 justify-center`}
            ></div>
          </div>
        ))}
      </div>

      {/* Contenido del slide */}
      <div className="z-10 text-white text-left absolute inset-0 flex flex-col items-start justify-center pl-5">
        <div
          className={`z-80 bg-gradient-to-r to-transparent ${slides[currentIndex].from} `}
          style={{
            width: "70%", // Ajusta el porcentaje para determinar la anchura del gradiente
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1, // Coloca el gradiente detrás del contenido
          }}
        ></div>
        <div className=" ml-40">
          <p className="font-bold text-7xl max-w-[1000px] mb-6">
            {slides[currentIndex].name}
          </p>
          <p className="max-w-[500px]">{slides[currentIndex].description}</p>
          <div className="mt-6 flex items-center gap-2 hover:text-primary">
            <p className="uppercase font-bold ">learn more</p>
            <BsChevronCompactRight />
          </div>
        </div>
      </div>

      {/* Flechas de navegación */}
      <div
        onClick={prevSlide}
        className="z-30 absolute left-5 top-[50%] transform -translate-y-1/2 text-2xl rounded-full p-2 bg-white cursor-pointer"
      >
        <BsChevronCompactLeft className="text-primary" size={20} />
      </div>
      <div
        onClick={nextSlide}
        className="z-30 absolute right-5 top-[50%] transform -translate-y-1/2 text-2xl rounded-full p-2 bg-white  cursor-pointer"
      >
        <BsChevronCompactRight className="text-primary" size={20} />
      </div>

      {/* Imagen de fondo */}
      <img
        src={slides[currentIndex].image}
        alt={slides[currentIndex].name}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Slider;
