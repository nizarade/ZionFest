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
  

  return (
    <div>
      <div className="w-full mt-[-20px] overflow-hidden pl-13 pr-4 md:pl-20 md:pr-10 ">
        
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
