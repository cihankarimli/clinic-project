import React from "react";
import { useState, useEffect } from "react";

function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    "/doctorPicture.jpeg",
    "/FamilyClinicGarland.jpg",
    "/doctorPicture.jpeg",
    "/FamilyClinicGarland.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === backgroundImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="hero-slider">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <p className="welcome-text">WELCOME TO</p>
            <h1 className="clinic-title">FAMILY CLINIC</h1>
            <p className="clinic-description">
              Family Multi Speciality Clinic started its medical and dental
              service since 2006 by Dr Kiruthika Asokan, Dental Surgeon. ...
            </p>
            <div className="slider-buttons">
              <a href="/doctor" className="btn btn-primary">
                Meet our doctor
              </a>
              <a href="tel:08048030932" className="btn btn-secondary">
                Call 08048030932
              </a>
            </div>
          </div>
        </div>
      ))}
      <a href="/about" className="see-more">
        SEE MORE
      </a>
    </div>
  );
}

export default Header;
