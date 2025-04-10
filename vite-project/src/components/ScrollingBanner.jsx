import React from "react";

const ScrollingBanner = ({
  logos,
  scrollSpeed = "medium",
  backgroundColor = "bg-white",
  borderColor = "border-black",
  shadowColor = "black",
}) => {
  if (!logos || logos.length === 0) {
    return null;
  }

  // Tentukan durasi animasi berdasarkan prop 'speed'
  const durationMap = {
    slow: "40s",
    medium: "25s",
    fast: "15s",
  };

  const animationDuration = durationMap[scrollSpeed] || durationMap.medium;

  // Kita akan menggunakan style inline untuk durasi animasi agar dinamis
  const animationStyle = { animationDuration: animationDuration };

  const repeatedLogos = Array(4).fill([...logos]).flat();

  const shadowStyle = `4px 4px ${shadowColor}`; // Offset 4px kanan & bawah
  const hoverShadowStyle = `6px 6px ${shadowColor}`; // Offset lebih besar saat hover

  return (
    <div
      className={`
      w-full
      ${backgroundColor}  // Warna background solid
      border-2          // Border solid tebal (bisa border-4)
      ${borderColor}    // Warna border (biasanya hitam)
      overflow-hidden   // Tetap penting untuk memotong logo
      py-6 md:py-8      // Padding vertikal (mungkin lebih besar)
      relative          // Tetap perlu untuk potensi elemen absolut di masa depan
      group             // Tetap perlu untuk group-hover:paused
      transition-shadow duration-200 ease-in-out // Transisi untuk shadow saat hover
      hover:shadow-[var(--hover-shadow)] // Terapkan shadow hover dari variable CSS
      shadow-[var(--base-shadow)] // Terapkan shadow dasar dari variable CSS
    `}
      // Set custom properties (CSS Variables) untuk shadow agar bisa pakai warna dari prop
      style={{
        "--base-shadow": shadowStyle,
        "--hover-shadow": hoverShadowStyle,
      }}
    >
      {/* TIDAK ADA LAGI MASKING GRADIENT */}

      {/* 2. Kontainer Dalam (Inner Container / Scroller) - Tidak banyak berubah */}
      <div
        className="flex w-max logo-scroll-animation group-hover:paused"
        style={animationStyle} // Terapkan durasi animasi dinamis
      >
        {/* 3. Render Logo (Sudah diduplikasi) */}
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`} // Key yang lebih unik
            className="flex-shrink-0 mx-6 md:mx-8 lg:mx-10" // Jarak antar logo (mungkin lebih besar)
          >
            <img
              src={logo.src}
              alt={logo.alt || `Logo ${(index % logos.length) + 1}`}
              // Ukuran logo mungkin bisa sedikit lebih besar juga
              className="h-30  lg:h-50 w-auto object-contain hover:scale-110 transform transition-all duration-100 ease-in-out"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
