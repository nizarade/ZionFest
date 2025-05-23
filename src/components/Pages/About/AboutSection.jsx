import React, { use } from "react";
import Button from "../../Button"; // Pastikan path ini benar
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Tombol diklik, mengarahkan ke halaman tickets...");
    navigate("/ticketCenter");
  };
  return (
    // Section container dengan padding responsif dan background netral
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 ">
      {/* Wrapper untuk membatasi lebar konten dan memusatkannya */}
      <div className="max-w-6xl mx-auto">
        {/* Blok Judul Utama */}
        <div className="mb-10 md:mb-16 p-6 bg-primary border-2 border-black shadow-[8px_8px_0px_#000000] transition-shadow duration-200 hover:shadow-[10px_10px_0px_#000000]">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-black">
            Who are <span className="text-secondary">WE</span> !!?
          </h1>
          <p className="text-xl md:text-3xl font-medium text-center text-gray-700">
            Hello !!
          </p>
        </div>

        {/* Grid Layout untuk Konten Teks (Responsif) */}
        {/* Menggunakan grid agar bisa jadi 2 kolom di layar besar dan 1 kolom di layar kecil */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Blok Teks Pertama */}
          <div className="bg-primary border-2 border-black p-6 md:p-8 shadow-[8px_8px_0px_#000000] transition-shadow duration-200 hover:shadow-[10px_10px_0px_#000000]">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
              Welcome to ZionFest!
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
              The home of all things reggae in Indonesia! More than just an
              event organizer, we are the beating heart of the reggae community,
              where music, culture, and friendship meet. Our goal is simple: to
              create unforgettable experiences that inspire your soul. From
              uplifting concerts to warm community gatherings, ZionFest is the
              bridge that connects you to the world of Indonesian reggae. Find
              out about the latest events, buy tickets easily, and connect with
              fellow reggae lovers.
            </p>
          </div>

          {/* Blok Teks Kedua */}
          <div className="bg-primary border-2 border-black p-6 md:p-8 shadow-[8px_8px_0px_#000000] transition-shadow duration-200 hover:shadow-[10px_10px_0px_#000000]">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
              More Than Music
            </h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
              At ZionFest, we believe that reggae is not just music, but a
              lifestyle. We are dedicated to supporting local reggae musicians,
              promoting Indonesian reggae culture, and creating a safe and
              inclusive space for everyone to enjoy music. We are more than just
              a platform - we are a movement, a community that celebrates the
              beauty, peace, and unity contained in every reggae beat. Join the
              ZionFest family, where we celebrate music, share passion, and
              create lasting memories!
            </p>
          </div>
        </div>

        {/* Area Tombol */}
        <div className="mt-10 md:mt-16 flex justify-center">
          {/* Pastikan komponen Button Anda juga memiliki style yang konsisten (misal: border, shadow on hover) */}
          <Button
            onClick={handleClick}
            className="w-fit px-8 py-3 border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[6px_6px_0px_#000000] active:shadow-[2px_2px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-150 font-semibold text-lg" // Tambahkan style Neobrutalism dasar ke button
            textColor="text-black"
            bgColor="bg-primary" // Asumsi 'primary' adalah warna cerah khas Neobrutalism (misal: kuning, hijau cerah, dll)
          >
            Find the party!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
