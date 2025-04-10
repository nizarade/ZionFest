import React from "react";
import StayTuneSidebar from "../../StayTuneSidebar";
import ReactSlickCarousel from "../../ReactSlickCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import BigPartySection from "./BigPartySection";
import NewsSection from "./NewsSection";
import TicketsSection from "./TicketsSection";
import FAQSection from "./FAQSection";
import SupportSection from "./SupportSection";
import ContactUsSection from "./ContactUsSection";

// import {
//   BasicCard,
//   TicketCard,
//   CategoryCard,
//   ProfileCard,
//   HighlightCard,
//   ExpandableCard,
// } from "../../Card"; // Sesuaikan path jika perlu
// import Button from "../../Button";
// import { FaTicketAlt, FaTag, FaUserCircle, FaStar, FaPlaneDeparture, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const HomePage = () => {
  //Data untuk announcement
  const announcementData = [
    {
      id: 1,
      title: "Slide Pertama",
      content: "Ini adalah konten untuk slide pertama. Menjelaskan fitur A.",
      // imageUrl: "/images/slide1.jpg" // Opsional
    },
    {
      id: 2,
      title: "ReggaePora - Malang", // Menggunakan contoh dari gambar Anda
      content: "Tony Q Rastafara On Stage diundur 2 Jam",
    },
    {
      id: 3,
      title: "Slide Ketiga",
      content: "Ini adalah konten untuk slide ketiga. Menjelaskan fitur C.",
    },
    {
      id: 4,
      title: "Slide Keempat",
      content: "Konten terakhir sebagai contoh tambahan.",
    },
  ];

  return (
    <div>
      <div className="w-full mt-[-20px] overflow-hidden pl-13 pr-4 md:pl-20 md:pr-10 ">
        <ReactSlickCarousel
          slidesToShow={1} // Tampilkan 1 announcement
          showDots={false} // Pakai dots
          arrows={true} // Pakai panah
          autoplaySpeed={4000} // Kecepatan berbeda
          className="announcement-slider"
        >
          {/* Masukkan elemen announcement sebagai children */}
          {announcementData.map((announcement) => (
            <div className="px-1">
              <div key={announcement.id} className="px-1 md:px-8">
                {/* Ini adalah struktur slide announcement Anda yang lama */}
                <div className="border-black border-[3px] shadow-[6px_6px_0_black] bg-primary my-4  text-black rounded-lg p-6 min-h-[120px] w-full flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-semibold mb-2">
                    {announcement.title}
                  </h3>
                  <p className="text-md">{announcement.content}</p>
                </div>
              </div>
            </div>
          ))}
        </ReactSlickCarousel>
        <div className="lg:px-20 ">
          <HeroSection />
          <AboutSection />
          <BigPartySection />
          <NewsSection />
          <TicketsSection />
          <FAQSection />
        </div>
      </div>
      <SupportSection />
      <div className="w-full mt-[-20px] overflow-hidden pl-13 pr-4 md:pl-20 md:pr-10 ">
        <ContactUsSection />
      </div>
    </div>
  );
};

export default HomePage;
