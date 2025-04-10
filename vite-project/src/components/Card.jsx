// src/components/Cards.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaInfoCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// --- Helper untuk menggabungkan classNames ---
// (Anda bisa juga menggunakan library seperti clsx atau classnames)
const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- Gaya Dasar Neobrutalisme (Kelas yang sering dipakai) ---
const neobrutalismBase = 'border-2 border-black shadow-[4px_4px_0px_#000] transition-all duration-150';
const activeEffect = 'active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]'; // Efek ditekan

// --- Komponen Card Spesifik ---

// 1. Basic Card (Untuk Konten Umum)
export const BasicCard = ({ children, className = '', bgColor = 'bg-white', ...restProps }) => {
  return (
    <div
      className={cn(
        neobrutalismBase,
        bgColor, // Warna latar bisa di-override
        'p-4 md:p-6', // Padding default
        className // Kelas tambahan dari luar
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

BasicCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string, // Contoh prop kustom untuk warna latar
};

// 2. Ticket Card
export const TicketCard = ({ children, className = '', bgColor = 'bg-sky-300', ...restProps }) => {
  return (
    <div
      className={cn(
        neobrutalismBase,
        bgColor,
        'p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden', // Layout tiket
        // Garis putus-putus pemisah (opsional, styling kasar ala neobrutalism)
        'before:content-[""] before:absolute before:left-1/2 before:top-2 before:bottom-2 before:border-l-2 before:border-dashed before:border-black before:-ml-px', // Vertikal di tengah (kasar)
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

TicketCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
};

// 3. Category Card (Untuk Pilihan Kategori)
export const CategoryCard = ({ children, className = '', bgColor = 'bg-lime-400', hoverBgColor = 'hover:bg-lime-300', ...restProps }) => {
  return (
    <div
      className={cn(
        neobrutalismBase,
        activeEffect, // Tambahkan efek aktif/klik
        bgColor,
        hoverBgColor, // Efek hover sederhana
        'p-6 text-center cursor-pointer flex flex-col items-center justify-center aspect-square', // Layout kategori
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

CategoryCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
};


// 4. Profile Card
export const ProfileCard = ({ children, className = '', bgColor = 'bg-fuchsia-300', ...restProps }) => {
  return (
    <div
      className={cn(
        neobrutalismBase,
        bgColor,
        'p-5 flex flex-col items-center text-center', // Layout profil
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

ProfileCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
};


// 5. Highlight Card (Untuk Informasi Penting)
export const HighlightCard = ({ children, className = '', bgColor = 'bg-yellow-300', borderColor = 'border-black', ...restProps }) => {
  // Bisa juga dengan border lebih tebal atau warna beda
  return (
    <div
      className={cn(
        neobrutalismBase,
        'border-4', // Border lebih tebal untuk highlight
        borderColor,
        bgColor,
        'p-4',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

HighlightCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
};

export const ExpandableCard = ({ title, summary, children, className = '', bgColor = 'bg-teal-300', initialOpen = false }) => {
    const [isOpen, setIsOpen] = useState(initialOpen);
  
    return (
      <div className={cn(neobrutalismBase, bgColor, 'p-4', className)}>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            {!isOpen && <p className="text-sm text-black opacity-80 mt-1">{summary}</p>}
          </div>
          <button className={cn(neobrutalismBase, activeEffect, 'p-1 bg-white ml-2 flex-shrink-0')}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        {/* Konten yang bisa disembunyikan/ditampilkan */}
        <div className={cn(
          'overflow-hidden transition-[max-height] duration-500 ease-in-out',
          isOpen ? 'max-h-screen mt-4' : 'max-h-0' // Animasi buka/tutup
        )}>
          <div className="pt-4 border-t-2 border-black border-dashed"> {/* Pemisah opsional */}
              {children}
          </div>
        </div>
      </div>
    );
  };
  ExpandableCard.propTypes = {
    title: PropTypes.node.isRequired,
    summary: PropTypes.node, // Ringkasan opsional saat tertutup
    children: PropTypes.node.isRequired, // Konten detail
    className: PropTypes.string,
    bgColor: PropTypes.string,
    initialOpen: PropTypes.bool,
  };