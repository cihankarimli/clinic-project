import React from "react";
import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "@/styles/Gallery.css";

const imgs = [
  "/doctorPicture.jpeg",
  "/FamilyClinicGarland.jpg",
  "/doctorPicture.jpeg",
  "/FamilyClinicGarland.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

function Gallery() {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="gallery-container">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="gallery-slider"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
}

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="gallery-image"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="gallery-dots">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`gallery-dot ${idx === imgIndex ? "active" : ""}`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="gradient-edge left" />
      <div className="gradient-edge right" />
    </>
  );
};

export default Gallery;
