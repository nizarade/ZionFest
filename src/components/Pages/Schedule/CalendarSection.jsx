import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";
import { AppContext } from "../../../context/AppContext";
import { useContext } from "react";

const CalendarSection = () => {
  const { concertsData } = useContext(AppContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  // Ubah state untuk menyimpan ARRAY konser terpilih
  const [selectedConcerts, setSelectedConcerts] = useState([]); // Inisialisasi dengan array kosong

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const calendarGrid = useMemo(() => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    const grid = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      grid.push({ key: `empty-${i}`, day: null, isDummy: true });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(i).padStart(2, "0")}`;
      const concertsOnDate = concertsData[dateString]; // Akan mendapatkan array atau undefined
      grid.push({
        key: dateString,
        day: i,
        dateString: dateString,
        // Cek apakah ada array dan array tersebut tidak kosong
        hasConcert: !!concertsOnDate && concertsOnDate.length > 0,
        // Simpan array konser (atau array kosong jika tidak ada)
        concertData: concertsOnDate || [],
        isDummy: false,
      });
    }
    return grid;
  }, [currentMonth, currentYear]);

  const changeMonth = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + direction);
      return newDate;
    });
    // Reset array konser terpilih saat ganti bulan
    setSelectedConcerts([]);
  };

  const handleDayClick = (dayData) => {
    if (dayData.isDummy) return;

    // Ambil array konser dari data grid (yang sudah diisi [] jika kosong)
    setSelectedConcerts(dayData.concertData);
  };

  // --- Helper functions (tetap sama) ---
  const formatPrice = (price) => {
    return price ? `Rp ${price.toLocaleString("id-ID")}` : "N/A";
  };

  const getCheapestAvailablePrice = (tickets) => {
    if (!tickets || tickets.length === 0) return null;
    const availableTickets = tickets
      .filter((t) => t.available)
      .sort((a, b) => a.price - b.price);
    return availableTickets.length > 0 ? availableTickets[0].price : null;
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      {/* Calendar Box (Tetap Sama) */}
      <div className="bg-yellow-100 p-5 border-4 border-black shadow-[8px_8px_0_#FBE502]">
        {/* Header: Prev, Month/Year, Next */}
        <div className="flex justify-between items-center mb-4">
          <Button
            onClick={() => changeMonth(-1)}
            className="bg-secondary text-white border-2 border-black px-4 py-2 text-xl font-bold shadow-[3px_3px_0_#111111] transition-all duration-100 ease-in-out hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none active:bg-[#cc332b]"
          >
            Prev
          </Button>
          <h2 className="text-xl md:text-2xl font-bold text-black">
            {currentDate.toLocaleString("id-ID", {
              month: "long",
              year: "numeric",
            })}
          </h2>
          <Button
            onClick={() => changeMonth(1)}
            className="bg-secondary text-white border-2 border-black px-4 py-2 text-xl font-bold shadow-[3px_3px_0_#111111] transition-all duration-100 ease-in-out hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none active:bg-[#cc332b]"
          >
            Next
          </Button>
        </div>
        {/* Day Names Header (Tetap Sama) */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center font-bold text-black pb-1 border-b-2 border-black text-sm md:text-base"
            >
              {day}
            </div>
          ))}
        </div>
        {/* Calendar Body Grid (Tetap Sama, styling hasConcert sudah benar) */}
        <div className="grid grid-cols-7 gap-1 md:gap-2">
          {calendarGrid.map((dayData) => (
            <div
              key={dayData.key}
              onClick={() => handleDayClick(dayData)}
              className={`p-2 md:p-3 text-center border-2 border-black text-black aspect-square flex items-center justify-center text-sm sm:text-base ${
                dayData.isDummy
                  ? "bg-gray-100 opacity-50"
                  : "cursor-pointer transition-all duration-150 ease-in-out"
              } ${
                !dayData.isDummy
                  ? "hover:scale-105 hover:shadow-[4px_4px_0_#111111] hover:bg-gray-200 hover:z-10 relative active:translate-y-[2px] active:shadow-[2px_2px_0_#111111] active:bg-gray-300"
                  : ""
              } ${dayData.hasConcert ? "bg-[#ffdc00] font-bold" : ""} ${
                dayData.hasConcert
                  ? "hover:bg-[#e6c200] active:bg-[#b39200]"
                  : ""
              }`}
            >
              {dayData.day}
            </div>
          ))}
        </div>
      </div>

      {/* Concert Details Box - Logika Rendering Diubah */}
      <div className="mt-6 bg-yellow-100 p-5 border-4 border-black shadow-[8px_8px_0_#3d9970]">
        <div className="w-full flex justify-center">
          <h3 className="text-2xl font-bold text-black mb-3">
            {/* Judul dinamis berdasarkan ada tidaknya konser */}
            {selectedConcerts.length > 0
              ? `Concerts at ${selectedConcerts[0].date}`
              : "Detail Concert"}
          </h3>
        </div>
        {selectedConcerts.length > 0 ? (
          // Jika ada konser terpilih (array tidak kosong), map melalui array
          <div className="space-y-5">
            {" "}
            {/* Tambah space antar konser */}
            {selectedConcerts.map((concert, index) => (
              <div
                key={concert.id}
                className={index > 0 ? "pt-4 border-t border-gray-300" : ""}
              >
                {" "}
                {/* Tambah pemisah jika lebih dari 1 */}
                <p className="text-lg font-semibold text-black">
                  {concert.eventName}
                </p>
                <p className="text-black">
                  <span className="font-medium">Band:</span> {concert.bandName}
                </p>
                {/* Tidak perlu menampilkan tanggal lagi karena sudah di judul */}
                <p className="text-black">
                  <span className="font-medium">Time:</span> {concert.time}
                </p>
                <p className="text-black">
                  <span className="font-medium">Venue:</span>{" "}
                  {concert.venue.name}, {concert.venue.city}
                </p>
                {/* Status Tiket */}
                {concert.tickets &&
                  concert.tickets.length > 0 &&
                  (() => {
                    const cheapestPrice = getCheapestAvailablePrice(
                      concert.tickets
                    );
                    if (cheapestPrice !== null) {
                      return (
                        <p className="font-medium text-secondary">
                          Start from: {formatPrice(cheapestPrice)}
                        </p>
                      );
                    } else {
                      return (
                        <p className="font-medium text-warning">
                          Tickets Sold Out
                        </p>
                      );
                    }
                  })()}
                {/* Tombol Link */}
                {concert.id && (
                  <Link
                    to={`/concert/${concert.id}`}
                    className="inline-block mt-3"
                  >
                    <Button
                      textColor="text-black"
                      className="bg-primary text text-black border-2 border-black px-4 py-2 font-bold shadow-[3px_3px_0_#111111] transition-all duration-100 ease-in-out hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >
                      View Details
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Tampilkan pesan default jika array kosong
          <p className="text-gray-600">
            Pilih tanggal pada kalender untuk melihat detail konser.
          </p>
        )}
      </div>
    </div>
  );
};

export default CalendarSection;
