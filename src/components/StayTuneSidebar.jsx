import React, { useRef, useEffect } from 'react';

const StayTuneSidebar = () => {
  const textContainerRef = useRef(null);
  const animationFrameId = useRef(null); // Ref untuk menyimpan ID requestAnimationFrame

  useEffect(() => {
    const container = textContainerRef.current;
    if (!container) return; // Pastikan container ada

    const calculateScroll = () => {
      // Hitung tinggi teks SEBENARNYA di dalam container
      // Kadang scrollHeight belum akurat saat pertama kali mount,
      // kita bisa gunakan child element jika perlu, tapi scrollHeight biasanya cukup.
      // Pastikan ada cukup teks agar scrollHeight > clientHeight
      const textHeight = container.scrollHeight;
      const containerHeight = container.clientHeight; // Tinggi container (viewport height karena h-screen)
      
      // Hanya scroll jika konten lebih tinggi dari container
      if (textHeight <= containerHeight) {
          console.warn("Konten sidebar tidak cukup tinggi untuk di-scroll.");
          return; // Tidak perlu animasi jika tidak ada yang di-scroll
      }

      let scrollPosition = 0;

      const scrollUp = () => {
        scrollPosition += 0.5; // PERLAMBAT sedikit kecepatan scroll jika perlu
        
        // Reset ketika posisi scroll MELEBIHI area yang bisa di-scroll
        // Area scroll = textHeight - containerHeight
        if (scrollPosition >= textHeight - containerHeight) {
          scrollPosition = 0; // Reset ke awal
        }
        
        container.scrollTop = scrollPosition;
        
        // Simpan ID agar bisa dibatalkan saat unmount
        animationFrameId.current = requestAnimationFrame(scrollUp); 
      };

      // Hentikan animasi sebelumnya jika ada (misal karena resize atau re-render cepat)
      if (animationFrameId.current) {
         cancelAnimationFrame(animationFrameId.current);
      }
      
      animationFrameId.current = requestAnimationFrame(scrollUp); // Memulai animasi
    };

    // Beri sedikit waktu agar layout stabil sebelum menghitung scrollHeight
    // Atau gunakan ResizeObserver jika perlu penanganan resize yang lebih canggih
    const timeoutId = setTimeout(calculateScroll, 100); 

    // Cleanup function: Dijalankan saat komponen unmount
    return () => {
      clearTimeout(timeoutId); // Bersihkan timeout jika komponen unmount sebelum timeout selesai
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current); // Hentikan animasi
      }
    };
    // Jangan tambahkan dependensi jika Anda ingin ini hanya berjalan sekali saat mount
    // Jika perlu re-calculate saat resize, tambahkan logic event listener untuk resize
  }, []); // Dependency array kosong agar useEffect hanya jalan sekali saat mount

  // Tambah jumlah repeat jika perlu untuk memastikan scrollHeight > clientHeight
  const stayTuneText = "Stay Tune • ".repeat(50); 

  return (
      <div 
        ref={textContainerRef}
        className="fixed top-0 left-0 z-10 
                   flex text-center justify-center items-center 
                   bg-[#FBE502] 
                   h-screen  
                   overflow-hidden 
                   min-w-10 w-10 md:w-15
                   border-4 border-black 
                   border-x-0" 
        style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}
      >
        {/* Div inner tidak perlu, tapi bisa membantu jika ada styling tambahan */}
        <div className="whitespace-nowrap">
          {stayTuneText}
        </div>
      </div>
  );
};

export default StayTuneSidebar;