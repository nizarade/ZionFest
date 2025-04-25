// src/components/sections/ConcertDetailSection.jsx
import React, { useState, useEffect, useContext, useMemo } from 'react'; // Import useMemo
import { AppContext } from "../../context/AppContext";
import { useParams, useNavigate } from "react-router-dom";

import Button from '../Button'; // Sesuaikan path

const formatCurrency = (amount) => {
    if (typeof amount !== 'number' || isNaN(amount)) {
      return 'Invalid Price';
    }
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};

// ASUMSI: Struktur concertsData di AppContext:
// const concertsData = { 'YYYY-MM-DD': [ { id: '...', ... }, ... ], ... };

const ConcertDetailSection = () => {
  const { concertId } = useParams();
  const { concertsData } = useContext(AppContext); // Ini adalah OBJECT sekarang
  const navigate = useNavigate();

  const [selectedTicket, setSelectedTicket] = useState(null); // State untuk ID tiket terpilih
  const [concertInfo, setConcertInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // 1. Memoize a flattened list of concerts (sama seperti di TicketsSection)
  const flatConcertList = useMemo(() => {
    if (!concertsData || typeof concertsData !== 'object' || Array.isArray(concertsData)) {
      // Kembalikan array kosong jika data tidak valid atau belum dimuat
      return [];
    }
    return Object.values(concertsData).flat();
  }, [concertsData]);

  // 2. useEffect untuk mencari konser berdasarkan ID dari list yang sudah di-flatten
  useEffect(() => {
    setIsLoading(true);
    setNotFound(false);
    setConcertInfo(null);

    // Hanya cari jika flatConcertList sudah ada isinya
    // dan concertsData sudah dimuat (ditandai dengan flatConcertList tidak kosong ATAU concertsData bukan null/undefined)
    if (concertsData !== null && concertsData !== undefined) {
        if (flatConcertList.length > 0) {
            const foundConcert = flatConcertList.find((concert) => concert.id === concertId);

            if (foundConcert) {
                setConcertInfo(foundConcert);
                setNotFound(false);
            } else {
                setNotFound(true); // ID tidak ditemukan di list
            }
        } else {
             // concertsData sudah dimuat tapi kosong (misal {}), atau format salah
            setNotFound(true);
        }
         setIsLoading(false); // Selesai loading, baik ketemu atau tidak
    }
    // Jika concertsData masih null/undefined, isLoading tetap true, tunggu update context

  }, [flatConcertList, concertId, concertsData]); // Tambahkan flatConcertList dan concertsData ke dependency

  // --- Fungsi handler tiket ---
  const handleBuyTicketClick = (ticket) => {
    // Pastikan ticket punya ID unik (jika belum ada, tambahkan ke data source)
    // Jika tidak ada ID unik per tiket, gunakan nama atau indeks sebagai fallback (kurang ideal)
    const ticketIdentifier = ticket.id || ticket.name;

    if (ticket.available) {
      // Pilih tiket (simpan identifier uniknya)
      setSelectedTicket(ticketIdentifier);
      console.log(`Tombol Beli untuk ${ticket.name} (${ticketIdentifier}) diklik!`);
      // Mungkin navigasi ke halaman checkout atau tampilkan modal
      // Untuk simulasi:
      // alert(`Anda memilih ${ticket.name}. Lanjutkan ke pembayaran (simulasi).`);
    } else {
      alert(`Maaf, tiket ${ticket.name} sudah habis terjual.`);
    }
  };

  // --- Loading State ---
  if (isLoading) {
    return (
        <section className='py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-emerald-50 to-teal-100'>
          <div className='text-center p-6 bg-primary border-4 border-black shadow-[8px_8px_0px_#000]'>
            <p className='text-2xl font-semibold animate-pulse'>Loading Concert Details...</p>
          </div>
        </section>
      );
  }

  // --- Not Found State ---
  // Kondisi notFound diperbaiki: jika loading selesai TAPI concertInfo masih null
  if (notFound || (!isLoading && !concertInfo)) {
    return (
        <section className='py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-red-50 to-orange-100'>
          <div className='text-center p-10 bg-primary border-4 border-black shadow-[8px_8px_0px_#000]'>
            <h1 className='text-3xl font-bold text-warning mb-4'>Oops! Concert Not Found</h1>
            <p className='text-xl text-gray-700 mb-6'>We couldn't find details for the concert ID: {concertId}</p>
            <Button onClick={() => navigate('/')} bgColor='bg-primary' textColor='text-black'>
              Back to Home
            </Button>
          </div>
        </section>
      );
  }

  // --- Render Konten Utama ---
  // Pastikan concertInfo ada sebelum mencoba merender detailnya
   if (!concertInfo) {
       // Seharusnya tidak tercapai karena sudah ditangani state notFound, tapi sebagai fallback
       return null;
   }

  return (
    // --- Konten JSX utama tetap sama, menggunakan 'concertInfo' ---
    <section className='pl-4 pr-4 md:pl-20 md:pr-10 py-10 md:py-16'> {/* Tambah padding vertikal */}
      <div className='max-w-6xl mx-auto'>

        {/* Grid Utama */}
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16'>

          {/* Kolom Gambar */}
          <div className='lg:col-span-2 group'>
             <div className='relative border-4 border-black shadow-[10px_10px_0px_rgb(0,0,0)] aspect-w-4 aspect-h-3 lg:aspect-w-3 lg:aspect-h-4 overflow-hidden
                           transition-all duration-200 ease-in-out
                           hover:shadow-[12px_12px_0px_#FBE502] hover:-translate-x-1 hover:-translate-y-1'>
              <img
                src={concertInfo.imageUrl || '/images/reggae/placeholder-default.jpg'} // Fallback image
                alt={`${concertInfo.bandName} - ${concertInfo.eventName} Poster`}
                className='w-full h-full object-cover' />
            </div>
          </div>

          {/* Kolom Detail */}
          <div className='lg:col-span-3 bg-yellow-100 p-6 md:p-10 border-4 border-black shadow-[10px_10px_0px_#000]
                         transition-all duration-200 ease-in-out
                         hover:shadow-[12px_12px_0px_#FBE502] hover:-translate-x-1 hover:-translate-y-1'>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-3 leading-tight'>
              {concertInfo.bandName}
            </h1>
            <p className='text-2xl md:text-3xl font-semibold text-secondary mb-6'>
              {concertInfo.eventName}
            </p>
            <div className='space-y-3 text-lg md:text-xl mb-6'>
              {/* Detail Tanggal, Waktu, Venue */}
              <p className='flex items-center gap-3'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /> </svg>
                 <span className='font-semibold'>{concertInfo.date}</span>
              </p>
               <p className='flex items-center gap-3'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>
                 <span className='font-semibold'>{concertInfo.time}</span>
               </p>
                <p className='flex items-start gap-3'>
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-pink-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /> </svg>
                 <span className='font-semibold'>
                     {concertInfo.venue?.name}, {concertInfo.venue?.city}
                     {/* Tampilkan alamat jika ada */}
                     {concertInfo.venue?.address && (
                       <><br/><span className='font-normal text-gray-700'>{concertInfo.venue.address}</span></>
                     )}
                 </span>
               </p>
            </div>
             {/* Deskripsi Konser (jika ada) */}
            {concertInfo.description && (
                 <div className='prose prose-lg md:prose-xl max-w-none text-gray-800 text-justify border-t-2 border-dashed border-black pt-6'>
                     <p>{concertInfo.description}</p>
                 </div>
            )}
            {!concertInfo.description && ( // Tampilkan pesan jika tidak ada deskripsi
                 <div className='border-t-2 border-dashed border-black pt-6'>
                     <p className='text-gray-500 italic'>No description available for this event.</p>
                 </div>
            )}
          </div>
        </div>

        {/* Bagian Pembelian Tiket */}
        <div className='mt-12 md:mt-20 p-6 md:p-10 bg-primary border-4 border-black shadow-[10px_10px_0px_#000]
                       transition-all duration-200 ease-in-out
                       hover:shadow-[12px_12px_0px_#17A15F] hover:-translate-x-1 hover:-translate-y-1'>

            <h2 className='text-3xl md:text-4xl font-bold text-black text-center mb-8'>
                Secure Your Spot!
            </h2>

            {concertInfo.tickets && concertInfo.tickets.length > 0 ? (
              <div className='max-w-3xl mx-auto space-y-5'> {/* Lebarkan max-w */}
                  {concertInfo.tickets.map((ticket) => {
                      // Pastikan tiket punya identifier unik
                      const ticketIdentifier = ticket.id || ticket.name || ticket.type; // Gunakan id, name, atau type
                      const isSelected = selectedTicket === ticketIdentifier;

                      return (
                          <div
                              key={ticketIdentifier} // Gunakan identifier unik sebagai key
                              onClick={() => ticket.available && handleBuyTicketClick(ticket)} // Hanya bisa diklik jika available
                              className={`flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-2 border-black shadow-[4px_4px_0px_#000] transition-all duration-150 ease-in-out rounded-md
                                      ${ticket.available
                                          ? `bg-white ${isSelected ? 'ring-4 ring-offset-2 ring-secondary' : ''} hover:bg-gray-50 hover:shadow-[6px_6px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px] cursor-pointer`
                                          : 'bg-gray-300 opacity-70 cursor-not-allowed'
                                      }`}
                              role={ticket.available ? "button" : undefined}
                              tabIndex={ticket.available ? 0 : -1}
                              onKeyPress={(e) => ticket.available && e.key === 'Enter' && handleBuyTicketClick(ticket)}
                          >
                              <div className='text-center sm:text-left flex-grow'> {/* Tambah flex-grow */}
                                  <span className={`block text-xl md:text-2xl font-semibold ${ticket.available ? 'text-black' : 'text-gray-600'}`}>
                                      {/* Gunakan ticket.type atau ticket.name */}
                                      {ticket.type || ticket.name || 'Ticket'}
                                  </span>
                                  <span className={`block text-lg md:text-xl font-bold ${ticket.available ? 'text-secondary' : 'text-gray-500'}`}>
                                      {formatCurrency(ticket.price)}
                                  </span>
                              </div>
                              {/* Tombol hanya visual jika tiket sudah dipilih, aksi utama di div luar */}
                              <div className={`w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 ${!ticket.available ? 'pointer-events-none' : ''}`}>
                                  <Button
                                      // onClick={(e) => { e.stopPropagation(); handleBuyTicketClick(ticket); }} // Bisa juga event di sini
                                      disabled={!ticket.available}
                                      className={`w-full text-lg py-2.5 px-6 ${!ticket.available ? 'cursor-not-allowed' : ''} ${isSelected ? 'ring-2 ring-offset-1 ring-black':''}`}
                                      bgColor={ticket.available ? (isSelected ? 'bg-secondary' : 'bg-gray-700') : 'bg-gray-500'}
                                      textColor="text-white"
                                      // aria-pressed={isSelected} // Accessibility
                                  >
                                      {ticket.available ? (isSelected ? 'Selected' : 'Select Ticket') : 'Sold Out'}
                                  </Button>
                              </div>
                          </div>
                      );
                  })}
              </div>
            ) : (
              <p className="text-center text-xl text-black font-semibold">No tickets available for this event yet.</p>
            )}


             {/* Tombol Checkout Umum */}
             {selectedTicket && (
                 <div className='mt-10 text-center'>
                     <Button
                         onClick={() => alert(`Proceeding to checkout with ticket ID/Type: ${selectedTicket} (simulasi)...`)}
                         bgColor="bg-secondary"
                         textColor="text-white"
                         className="text-xl px-10 py-3"
                     >
                         Proceed to Checkout
                     </Button>
                 </div>
             )}
        </div>

      </div>
    </section>
  );
};

export default ConcertDetailSection;