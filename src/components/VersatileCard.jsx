import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

// Komponen Card Serbaguna
const VersatileCard = ({
  onClick,
  variant = "contentBelow", // 'imageOnly' atau 'contentBelow'
  imageUrl,
  altText = "Deskripsi gambar",
  date,
  location,
  title, // Hanya untuk variant 'contentBelow'
  subtitle, // Hanya untuk variant 'contentBelow'
  buttonText, // Hanya untuk variant 'contentBelow'
  onButtonClick = () => {}, // Handler klik tombol (default: fungsi kosong)
  className = "", // Kelas tambahan dari luar
  imageHeightClass = "h-48", // Kelas tinggi gambar (bisa di-override)
  children, // Konten tambahan (opsional)
}) => {

  const navigate = useNavigate();
  // ---- Gaya untuk Variant 'imageOnly' (Seperti contoh pertama) ----
  if (variant === "imageOnly") {
    return (
      <div
        onClick={()=>navigate(`/tickets/${onClick}`)}
        className={`
          rounded-lg             
        overflow-hidden   
        hover:scale-[0.98] 
        cursor-pointer   
        border-black border-[3px] shadow-[6px_6px_0_black] 
        select-none transition-all duration-100 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none
          ${className}      // Gabungkan kelas eksternal
        `}
      >
        <img
          src={imageUrl}
          alt={altText}
          className={`
            w-full        
          h-48 md:h-full          
          object-cover  
          block          
          `}
        />
        {/* Tempat untuk children jika diberikan */}
        {children && <div className="p-4">{children}</div>}
      </div>
    );
  }

  // ---- Gaya untuk Variant 'contentBelow' (Seperti contoh kedua) ----
  if (variant === "contentBelow") {
    return (
      <div
        className={`
          bg-[#FBE502]            
          p-3               
          flex flex-col    
          rounded-lg             
        overflow-hidden   
        hover:scale-101 
        cursor-pointer   
        border-black border-[3px] shadow-[6px_6px_0_black] 
        select-none transition-all duration-100 ease-in-out
          ${className}     
        `}
      >
        {/* Container Gambar dengan Border Internal */}

        {imageUrl && (
          <div className="mb-4 border-2 border-black rounded-md overflow-hidden">
            <img
              src={imageUrl}
              alt={altText}
              className={`
                  w-full         
                  ${imageHeightClass} // Gunakan tinggi dari prop
                  object-cover   
                  block          
                `}
            />
          </div>
        )}

        {/* Area Konten */}
        <div className="flex flex-col justify-between items-center text-center gap-1 w-full">
          {title && (
            <h3 className="font-bold text-black text-md md:text-2xl ">
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              className="
              text-sm text-black opacity-80 mb-2 
              w-full            
              overflow-hidden    
              whitespace-nowrap 
              text-ellipsis     
            "
            >
              {subtitle}
            </p>
          )}

          {date && <p>{date}</p>}

          {location && <p>{location}</p>}

          {/* Tombol */}
          {buttonText && (
            <Button
              onClick={onButtonClick}
              textColor="text-black"
              bgColor="bg-secondary"
            >
              {buttonText}
            </Button>
          )}

          {/* Tempat untuk children jika diberikan */}
          {children}
        </div>
      </div>
    );
  }

  // Jika variant tidak valid (opsional, bisa return null atau pesan error)
  console.warn("Variant card tidak valid:", variant);
  return null;
};

export default VersatileCard;
