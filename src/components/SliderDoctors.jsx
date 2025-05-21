import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/SliderDoctors.css";

const doctors = [
  "/doctorPicture.jpeg",
  "/FamilyClinicGarland.jpg",
  "/doctorPicture.jpeg",
  "/FamilyClinicGarland.jpg",
  "/doctorPicture.jpeg",
  "/FamilyClinicGarland.jpg",
];

function SliderDoctors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  const handleScroll = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev + 1) % doctors.length);
    }
  };

  const getVisibleDoctors = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      result.push(doctors[(currentIndex + i) % doctors.length]);
    }
    return result;
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Gallery</h2>
      <div className="carousel-wrapper">
        <button
          className="nav-button left"
          onClick={() => handleScroll("left")}
        >
          &#8592;
        </button>

        <motion.div className="carousel-track">
          <AnimatePresence mode="smooth">
            {getVisibleDoctors().map((src, idx) => (
              <motion.div
                key={`${src}-${idx}`}
                className="carousel-item"
                animate={{ fontSmoothing: 1 }}
              >
                <img src={src} alt={`Doctor ${idx}`} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <button
          className="nav-button right"
          onClick={() => handleScroll("right")}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default SliderDoctors;
