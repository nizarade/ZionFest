// src/components/sections/NewsPortalSection.jsx
import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Button from '../../../components/Button'; // Import Button Anda
import { AppContext } from '../../../context/AppContext';


// Komponen Kartu Berita Individual (opsional, bisa inline)
const NewsCard = ({news}) => {
  return (
    <div className="flex flex-col bg-white border-4 overflow-hidde border-black  shadow-[6px_6px_0_black] select-none transition-all duration-100 ease-in-out hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_black] "> {/* Efek hover di kartu */}

      {/* Gambar Berita */}
      <div className="aspect-video border-b-4 border-black overflow-hidden"> {/* Aspect ratio & border bawah */}
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" // Efek zoom halus saat kartu hover (perlu 'group' di parent jika mau)
        />
      </div>

      {/* Konten Teks */}
      <div className="p-5 md:p-6 flex flex-col flex-grow"> {/* flex-grow agar tombol 'Read More' rata bawah */}
        {/* Kategori & Tanggal */}
        <div className="flex justify-between items-center mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-bold uppercase rounded ${news.categoryColor} ${news.categoryTextColor} shadow-[2px_2px_0_black]`}> {/* Kategori dengan style chip */}
            {news.category}
          </span>
          <span className="text-xs text-gray-500 font-medium">{news.date}</span>
        </div>

        {/* Judul Berita (Link) */}
        <Link to={news.slug} className="block mb-3 group"> {/* Link membungkus judul */}
          <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight line-clamp-2 group-hover:text-secondary transition-colors duration-150"> {/* line-clamp batasi 2 baris, hover ganti warna */}
            {news.title}
          </h3>
        </Link>

        {/* Kutipan */}
        <p className="text-base text-gray-700 leading-relaxed line-clamp-3 mb-5 flex-grow"> {/* line-clamp batasi 3 baris, flex-grow dorong tombol ke bawah */}
          {news.excerpt}
        </p>

        {/* Tombol Read More */}
        <div className="mt-auto"> {/* mt-auto untuk menempatkan tombol di bagian bawah flex container */}
          <Link to={news.slug}>
            <Button
              className="w-full sm:w-auto text-sm py-2 px-5" // Ukuran tombol lebih kecil
              bgColor="bg-secondary"
              textColor="text-white"
              // Tombol sudah punya interaksi hover sendiri
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};


// Komponen Utama Section Berita
const NewsPortalSection = () => {
  const { newsData } = useContext(AppContext);

   // --- State dan Konfigurasi Pagination ---
   const [currentPage, setCurrentPage] = useState(1);
   const [selectedCategory, setSelectedCategory] = useState(null); // null = 'All'
   const itemsPerPage = 6; // Tampilkan 6 berita per halaman (sesuaikan jika perlu)

   // --- Mendapatkan Kategori Unik ---
  const uniqueCategories = useMemo(() => {
    // Gunakan Set untuk mendapatkan nilai unik
    const categories = new Set(newsData.map(news => news.category));
    // Ubah Set kembali ke array dan tambahkan 'All' di depan
    return ['All', ...Array.from(categories)];
  }, [newsData]); // Hanya hitung ulang jika data asli berubah

  // --- Logika Filter dan Pagination (digabung dalam useMemo) ---
  const { currentItems, totalPages } = useMemo(() => {
    // 1. Filter data berdasarkan selectedCategory
    const filteredData = selectedCategory
      ? newsData.filter(news => news.category === selectedCategory)
      : newsData; // Jika null, gunakan semua data

    // 2. Lakukan pagination pada data yang sudah difilter
    const pages = Math.ceil(filteredData.length / itemsPerPage);
    // Pastikan currentPage valid setelah filter (tidak lebih besar dari total halaman baru)
    // Meskipun kita reset di handler, ini sebagai pengaman tambahan jika data berubah drastis
    const safeCurrentPage = Math.max(1, Math.min(currentPage, pages));
    const indexOfLastItem = safeCurrentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const itemsToShow = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return { currentItems: itemsToShow, totalPages: pages };
  }, [currentPage, selectedCategory, newsData, itemsPerPage]); // Dependency ditambahkan

  // --- Handler untuk Mengubah Halaman ---
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // --- Handler untuk Mengubah Filter Kategori ---
  const handleCategoryFilter = (category) => {
    // Set kategori yang dipilih (null jika 'All' diklik)
    setSelectedCategory(category === 'All' ? null : category);
    // !! Reset halaman ke 1 setiap kali filter berubah !!
    setCurrentPage(1);
  };


  return (
    <section className=" pl-13 pr-4 mb-10 md:pl-20 md:pr-10 "> {/* Background netral */}
      <div className="max-w-7xl mx-auto">

        {/* Judul Section */}
        <div className="mb-12 md:mb-16 text-center">
           <h2 className="inline-block text-4xl md:text-5xl font-extrabold text-black mb-4 border-b-4 border-primary pb-2 px-4">
                Latest News
           </h2>
           <p className="text-lg md:text-xl  max-w-2xl mx-auto">
                Stay updated with the latest happenings, event announcements, and community stories from the world of ZionFest.
           </p>
        </div>

        {/* --- UI Filter Kategori --- */}
        <div className="flex justify-center flex-wrap gap-3 mb-10 md:mb-12">
            {uniqueCategories.map(category => {
                const isActive = (selectedCategory === category) || (selectedCategory === null && category === 'All');
                return (
                    <Button
                        key={category}
                        onClick={() => handleCategoryFilter(category)}
                        // Style berbeda untuk filter aktif
                        bgColor={isActive ? 'bg-primary' : 'bg-white'}
                        textColor="text-black"
                        className={`text-sm px-5 py-2 ${isActive ? 'font-bold shadow-[2px_2px_0_black]' : 'hover:bg-gray-200'}`}
                        // Nonaktifkan efek klik default jika sudah aktif
                        style={isActive ? { boxShadow: '2px 2px 0 black', transform: 'translate(0, 0)' } : {}}
                    >
                        {category}
                    </Button>
                );
            })}
        </div>

        {/* Grid Berita - Gunakan currentItems */}
        {currentItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {currentItems.map((news) => ( // Map dari currentItems
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          // Tampilan jika tidak ada berita di halaman ini atau data kosong
           <div className="text-center p-10 bg-white border-4 border-black shadow-[8px_8px_0px_#000]">
                <h3 className="text-2xl font-semibold text-gray-700">
                    {newsData.length === 0 ? "No news available yet." : "No news found on this page."}
                </h3>
                {newsData.length === 0 && <p className="text-gray-500 mt-2">Please check back later!</p>}
           </div>
        )}

        {/* --- UI Pagination (Tetap sama logikanya, tapi nilai totalPages dinamis) --- */}
        {totalPages > 1 && (
            <div className="mt-12 md:mt-16 flex justify-center items-center space-x-2 flex-wrap gap-y-2">
                {/* Tombol Previous */}
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    bgColor={currentPage === 1 ? 'bg-gray-300' : 'bg-white'}
                    textColor="text-black"
                    className={`text-sm px-4 py-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/30'}`}
                    style={currentPage === 1 ? { boxShadow: '4px 4px 0 black' } : {}}
                >
                     Prev
                </Button>

                {/* Tombol Nomor Halaman */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <Button
                        key={number}
                        onClick={() => handlePageChange(number)}
                        disabled={currentPage === number}
                        bgColor={currentPage === number ? 'bg-primary' : 'bg-white'}
                        textColor="text-black"
                        className={`text-sm px-4 py-2 ${currentPage === number ? 'font-bold shadow-[2px_2px_0_black] cursor-default' : 'hover:bg-primary/30'}`}
                        style={currentPage === number ? { boxShadow: '2px 2px 0 black' } : {}}
                    >
                        {number}
                    </Button>
                ))}

                 {/* Tombol Next */}
                 <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    bgColor={currentPage === totalPages ? 'bg-gray-300' : 'bg-white'}
                    textColor="text-black"
                    className={`text-sm px-4 py-2 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/30'}`}
                    style={currentPage === totalPages ? { boxShadow: '4px 4px 0 black' } : {}}
                >
                    Next 
                </Button>
            </div>
        )}

      </div>
    </section>
  );
};

export default NewsPortalSection;