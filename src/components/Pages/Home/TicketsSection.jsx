import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Slider from "react-slick";
import ReactSlickCarousel from "../../ReactSlickCarousel";
import VersatileCard from "../../VersatileCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TicketImage1 from "../../../assets/ticket_img_1.png";
import TicketImage2 from "../../../assets/ticket_img_2.png";
import TicketImage3 from "../../../assets/ticket_img_3.png";
import { AppContext } from "../../../context/AppContext";

const TicketsSection = () => {
  const { concertsData } = useContext(AppContext);
  const navigate = useNavigate();
  // Data untuk slider event

  // 1. Ubah struktur data dari Object of Arrays menjadi Flat Array of Objects
  // Gunakan useMemo agar tidak dihitung ulang setiap render kecuali concertsData berubah
  const flatConcertList = useMemo(() => {
    // Pastikan concertsData ada dan merupakan objek sebelum diproses
    if (!concertsData || typeof concertsData !== 'object' || Array.isArray(concertsData)) {
      console.warn("TicketsSection: concertsData is not in the expected format (object). Received:", concertsData);
      return []; // Kembalikan array kosong jika data tidak sesuai
    }
    // Object.values(concertsData) -> mengambil semua array konser: [[c1], [c2], [c3, c4], ...]
    // .flat() -> mengubahnya menjadi satu array: [c1, c2, c3, c4, ...]
    return Object.values(concertsData).flat();
  }, [concertsData]); // Bergantung pada concertsData

  // 2. Handle jika tidak ada data konser untuk ditampilkan
  if (!flatConcertList || flatConcertList.length === 0) {
    // Anda bisa menampilkan pesan loading atau "Tidak ada event"
    return (
        <div className="text-center py-10 text-gray-500">
            Tidak ada jadwal konser reggae saat ini.
        </div>
    );
    // atau return null jika tidak ingin menampilkan apa-apa
    // return null;
  }

  return (
    <div>
      <ReactSlickCarousel
        slidesToShow={2} // Tampilkan 2 card
        showDots={false} // Tidak pakai dots
        arrows={true} // Pakai panah
        className="event-slider" // Opsional: kelas custom
      >
        {/* Masukkan VersatileCard sebagai children, map data di sini */}
        {flatConcertList.map((event) => (
          <div
          key={event.id}
            className="px-3  md:px-4 my-2"
          >
            {" "}
            {/* Padding antar slide */}
            <div onClick={() => navigate(`/concert/${event.id}`)}>
              <VersatileCard
                
                variant="contentBelow"
                imageUrl={event.imageUrl}
                altText={`Event: ${event.eventName}`}
                title={event.eventName}
                date={event.date}
                location={event.venue.city}
                imageHeightClass="h-60"
                className="text-start"
              />
            </div>
          </div>
        ))}
      </ReactSlickCarousel>
    </div>
  );
};

export default TicketsSection;
