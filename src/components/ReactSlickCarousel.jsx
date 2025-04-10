import React from "react";
import Slider from "react-slick";

// Komponen Kustom untuk Tombol Panah (agar bisa di-style dengan Tailwind)
const SlickArrow = ({ direction, onClick, icon }) => (
  <button
    className={`absolute top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-black bg-opacity-40 text-white hover:bg-opacity-60 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
      direction === "prev"
        ? "left-[-25px] md:left-[-33px]"
        : "right-[-25px] md:right-[-33px]" // Sesuaikan posisi panah agar sedikit keluar
    }`}
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous Slide" : "Next Slide"}
  >
    {icon}
  </button>
);

const PrevArrow = (props) => {
  const { className, style, onClick } = props; // Ambil props default dari react-slick jika diperlukan
  return (
    <SlickArrow
      direction="prev"
      onClick={onClick}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      }
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props; // Ambil props default dari react-slick jika diperlukan
  return (
    <SlickArrow
      direction="next"
      onClick={onClick}
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      }
    />
  );
};

// Komponen Carousel Utama
const ReactSlickCarousel = ({
  children, // Terima children sebagai prop
  autoplaySpeed = 3000,
  slidesToShow = 1, // Default 1, akan di-override saat penggunaan
  slidesToScroll = 1,
  showDots = false, // Default false (lebih umum untuk non-hero slider)
  arrows = true,
  className = "", // Untuk styling eksternal wrapper
  // Anda bisa menambahkan props lain untuk mengontrol react-slick jika perlu
}) => {
  // Hitung jumlah children untuk pengaturan 'infinite'
  const childrenCount = React.Children.count(children);

  const settings = {
    dots: showDots,
    infinite: childrenCount > slidesToShow, // Hanya loop jika children cukup
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
    arrows: arrows,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    // Logika dots (tetap sama)
    ...(showDots && {
      appendDots: (dots) => (
        <div className="absolute bottom-[-25px] w-full">
          <ul className="m-0 flex justify-center space-x-2"> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div className="w-2.5 h-2.5 rounded-full bg-gray-400 transition-colors duration-300 slick-dot-inactive"></div>
      ),
    }),

    // Responsive (sesuaikan jika perlu)
    responsive: [
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Sembunyikan panah di mobile (opsional)
          dots: showDots, // Tampilkan dots sesuai prop utama
        },
      },
      {
        breakpoint: 1024, // lg (jika slidesToShow > 2)
        settings: {
          slidesToShow: Math.min(slidesToShow, 2), // Max 2 jika aslinya > 2
          slidesToScroll: 1,
          arrows: arrows,
        },
      },
    ],
  };

  // Jika tidak ada children, tampilkan pesan
  if (childrenCount === 0) {
    return (
      <div className="text-center p-4">Tidak ada slide untuk ditampilkan.</div>
    );
  }

  return (
    // Wrapper relatif, beri padding untuk panah
    <div className={`relative w-full mx-auto my-8 px-8  ${className}`}>
      {/* Komentar CSS untuk dots aktif (jika digunakan) */}
      {/*
          .slick-dots li.slick-active div { @apply bg-gray-700 scale-110; }
          .slick-dots li div.slick-dot-inactive:hover { @apply bg-gray-500; }
        */}
      <Slider {...settings}>
        {/* Langsung render children yang diberikan */}
        {children}
      </Slider>
    </div>
  );
};

export default ReactSlickCarousel;
