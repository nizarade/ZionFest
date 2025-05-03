import React from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./components/Pages/Home/HomePage";
import About from "./components/Pages/About/AboutPage";
import Tickets from "./components/Pages/TicketCenter/TicketsPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StayTuneSidebar from "./components/StayTuneSidebar";
import ReactSlickCarousel from "./components/ReactSlickCarousel";
import ConcertDetailSection from "./components/Pages/ConcertDetailSection";
import Schedule from "./components/Pages/Schedule/SchedulePage";
import NewsPortalSection from "./components/Pages/News/NewsPortalSection";
import NewsDetailPage from "./components/Pages/News/NewsDetailPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  
  const { announcementData } = useContext(AppContext);


  return (
    <div className="flex flex-col h-full min-h-screen w-full bg-secondary bg-[radial-gradient(#FBE502_1px,transparent_1px)] [background-size:16px_16px]   ">
      <StayTuneSidebar />
      <div className=" w-full  ">
        <div className="pl-13 pr-4 md:pl-20 md:pr-10">
          <Navbar />
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
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/ticketCenter" element={<Tickets/>} />
          <Route path="/concert/:concertId" element={<ConcertDetailSection />} />
          <Route path="/news" element={<NewsPortalSection />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/schedule" element={<Schedule />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
