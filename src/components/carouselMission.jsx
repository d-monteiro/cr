import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import rocketSvg from "../assets/rocket.svg";
import megaPhoneSvg from "../assets/megaPhone.svg";
import balloonSvg from "../assets/balloon.svg";
import clickSvg from "../assets/click.svg";

const CarouselMission = () => {
  const slides = [
    {
      id: 1,
      img: clickSvg,
      imgIcon: rocketSvg,
      title: "Gestão Institucional",
      title1: "Texto 1",
      description1:
        "Coordenar a eleição para Diretor da FEUP e aprovar o regulamento interno e alterações estatutárias da instituição.",
      title2: "Texto 2",
      description2:
        "Coordenar a eleição para Diretor da FEUP e aprovar o regulamento interno e alterações estatutárias da instituição.",
      bgColor: "#E7EEFF",
      textColor: "#1E5BFE",
    },
    {
      id: 2,
      img: clickSvg,
      imgIcon: megaPhoneSvg,
      title: "Supervisão e Avaliação",
      title1: "Texto 1",
      description1:
        "Coordenar a eleição para Diretor da FEUP e aprovar o regulamento interno e alterações estatutárias da instituição.",
      title2: "Texto 2",
      description2:
        "Coordenar a eleição para Diretor da FEUP e aprovar o regulamento interno e alterações estatutárias da instituição.",
      bgColor: "#FFF4D2",
      textColor: "#FFCE2F",
    },
    {
      id: 3,
      img: clickSvg,
      imgIcon: balloonSvg,
      title: "Desenvolvimento Estratégico",
      title1: "Texto 1",
      description1:
        "Coordenar a eleição para Diretor da FEUP e aprovar o regulamento interno e alterações estatutárias da instituição.",
      title2: "Texto 2",
      description2:
        "Coordenar a eleição para Diretor da FEUP e aprovar o regulamento interno e alterações estatutárias da instituição.",
      bgColor: "#E7EEFF",
      textColor: "#1E5BFE",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleSwipe = (direction) => {
    if (direction === "LEFT" && currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (direction === "RIGHT" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("LEFT"),
    onSwipedRight: () => handleSwipe("RIGHT"),
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      {...handlers}
      className="relative w-full max-w-lg mx-auto overflow-hidden"
    >
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="w-full flex-shrink-0 px-4"
            style={{ flexBasis: "100%" }}
            animate={{
              height: expandedIndex === index ? "80vh" : "35vh",
              scale: expandedIndex === index ? 1.05 : 1,
              opacity: expandedIndex === index ? 1 : 0.9, 
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            onClick={() => toggleExpand(index)}
          >
            <div
              className="p-8 rounded-3xl w-4/5 h-full mx-auto relative"
              style={{ backgroundColor: slide.bgColor }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute top-8 right-8 h-12 w-12"
              />
              <h3
                className="text-3xl py-20 text-left font-semibold"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: slide.textColor,
                }}
              >
                {slide.title}
              </h3>
              <motion.img
                src={slide.imgIcon}
                alt={`${slide.title} Icon`}
                className="absolute transition-transform"  
                style={{
                  right: expandedIndex === index ? "20vw" : "2vw",
                  bottom: expandedIndex === index ? "2vh" : "0vh",
                }}
                animate={{
                  height: expandedIndex === index ? "20vh" : index === 0 ? "18vh" : "15vh",
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              />
              {expandedIndex === index && (
                <motion.div
                  className="mt-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="font-bold text-lg mt-2" style={{ color: slide.textColor }}>
                    {slide.title1}
                  </h4>
                  <p className="text-sm text-gray-600">{slide.description1}</p>
                  <h4 className="font-bold text-lg mt-4" style={{ color: slide.textColor }}>
                    {slide.title2}
                  </h4>
                  <p className="text-sm text-gray-600">{slide.description2}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all`}
            style={{
              backgroundColor: index === currentIndex ? "#FFF4D2" : "#D9D9D9",
              opacity: index === currentIndex ? 1 : 0.5,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMission;
