import React from "react";
import "@/styles/ServicesCard.css";
import Image from "next/image";

function ServicesCard() {
  const CardData = [
    {
      id: 1,
      title: "General Dentistry",
      description:
        "General dentistry is a branch of dentistry that focuses on a wide range of oral health services. General dentists are often the first point of contact for patients seeking dental care.",
      image: "/generalDentistry.jpeg",
    },
    {
      id: 2,
      title: "Skin tag,wart &Tattoo Removal",
      description:
        "1.	Skin Tag Removal: This procedure is quick and minimally invasive, typically performed using cryotherapy (freezing), cauterization (burning)",
      image: "/generalDentistry.jpeg",
    },
    {
      id: 3,
      title: "Cosmetic Dentistry",
      description:
        "Cosmetic Dentistry focuses on improving the appearance of a person’s teeth, gums, and overall smile. While traditional dentistry ",
    },
  ];
  return (
    <div className="services-section">
      <h2>Services</h2>
      <div className="cards-container">
        {CardData.map((card) => (
          <div key={card.id} className="card">
            <Image src="/generalDentistary.jpeg" width={100} height={200} />
            <div className="card-content">
              <span>{card.title}</span>
              <p>{card.description}</p>
              <a href="#" className="read-more">
                READ MORE
              </a>
            </div>
            <button>BOOK APPOINTMENT</button>
          </div>
        ))}
      </div>
      <a href="#" className="view-all">
        VIEW ALL SERVICES
      </a>
    </div>
  );
}

export default ServicesCard;
