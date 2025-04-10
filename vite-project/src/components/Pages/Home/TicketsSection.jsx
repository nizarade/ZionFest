import React from "react";
import Slider from "react-slick";
import ReactSlickCarousel from "../../ReactSlickCarousel";
import VersatileCard from "../../VersatileCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TicketImage1 from "../../../assets/ticket_img_1.png";
import TicketImage2 from "../../../assets/ticket_img_2.png";
import TicketImage3 from "../../../assets/ticket_img_3.png";

const TicketsSection = () => {
  // Data untuk slider event
  const eventSlidesData = [
    {
      id: "evt1",
      imageUrl: TicketImage1,
      title: "Reggater Fest",
      date: "04 December 2025",
      location: "Malang",
    },
    {
      id: "evt2",
      imageUrl: TicketImage2,
      title: "Tribal Sound",
      date: "18 January 2026",
      location: "Surabaya",
    },
    {
      id: "evt3",
      imageUrl: TicketImage3,
      title: "Island Rhythm",
      date: "22 February 2026",
      location: "Bali",
    },

  ];
  return (
    <div>
      <ReactSlickCarousel
        slidesToShow={2} // Tampilkan 2 card
        showDots={false} // Tidak pakai dots
        arrows={true} // Pakai panah
        className="event-slider" // Opsional: kelas custom
      >
        {/* Masukkan VersatileCard sebagai children, map data di sini */}
        {eventSlidesData.map((event) => (
            <div key={event.id} className="px-3  md:px-4 my-2">
              {" "}
              {/* Padding antar slide */}
              <VersatileCard
                variant="contentBelow"
                imageUrl={event.imageUrl}
                altText={`Event: ${event.title}`}
                title={event.title}
                date={event.date}
                location={event.location}
                imageHeightClass="h-60"
                className="text-start"
              />

          </div>
        ))}
      </ReactSlickCarousel>
    </div>
  );
};

export default TicketsSection;
