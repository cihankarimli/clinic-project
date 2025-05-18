import Image from "next/image";
import React from "react";
import "@/styles/MeetDoctor.css";

function MeetDoctor() {
  return (
    <>
      <h2>Meet Our Doctor</h2>
      <div className="meet-doctor">
        <div className="doctor-img">
          <img src="/doctorPicture.jpeg" />
        </div>
        <div className="doctor-info">
          <h1>Kiruthika Asokan</h1>
          <span>Dental Surgeon</span>
          <div className="doctor-phone">
            <img src="/phoneIcon.png" alt="" />
            <span>+91 1234567890</span>
          </div>
          <div className="descreption">
            <p>
              Dr. Kiruthika Asokan completed her BDS from the prestigious SRM
              Medical University in 2004. Subsequently, she pursued her
              certified course in Rotary Root Canal Treatment in 2013. Her skill
              and commitment in dentistry create trust and confidence in every
              smile she works on. Based in Karambakkam, Porur, Chennai she has
              more than 19 years of experience and is practicing as a full-time
              Dentist in a Family Clinic.
            </p>
            <p>
              In 2017, her outstanding skills and strong dedication placed her
              on the prestigious "Top 10 Dentists" list recognized by Business
              Review Today. She is also valued member of the respected Indian
              Dental Association.
            </p>
            <div className="doctor-info-button">
              <button>Read more</button>
              <button>Book Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetDoctor;
