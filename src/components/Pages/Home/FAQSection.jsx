import React from 'react';
import FAQItem from './FAQItem.jsx'

const FAQSection = () => {
  const faqData = [
    {
      question: "Apa itu ZionFest?",
      answer: "ZionFest adalah platform komunitas dan pusat informasi untuk event musik Reggae, Ska, Dub, dan Roots di Indonesia. Kami bertujuan menyebarkan positive vibes melalui musik dan menghubungkan para pecinta reggae dengan konser-konser berkualitas."
    },
    {
      question: "Bagaimana cara membeli tiket konser di ZionFest?",
      answer: "Sangat mudah! Cukup cari konser yang Anda inginkan di halaman 'Ticket Center' atau 'Schedule'. Klik tombol 'View Details' atau 'Get Tickets', pilih jenis tiket yang tersedia, lalu ikuti proses checkout (saat ini masih dalam tahap simulasi)."
    },
    {
      question: "Tiket yang saya inginkan bertuliskan 'Sold Out'. Apakah benar-benar sudah habis?",
      answer: "Ya, status 'Sold Out' berarti semua alokasi tiket untuk kategori tersebut sudah habis terjual melalui platform kami. Kami tidak memiliki tiket tambahan. Coba periksa kategori tiket lain atau event lainnya!"
    },
    {
      question: "Apakah tiket yang sudah dibeli bisa di-refund atau dipindahtangankan?",
      answer: "Umumnya, tiket yang sudah dibeli bersifat *non-refundable* (tidak dapat dikembalikan dananya) kecuali ada pembatalan atau penjadwalan ulang event oleh pihak penyelenggara. Kebijakan pemindahtanganan (transfer) tiket mungkin berbeda-beda tergantung event, silakan cek syarat & ketentuan pada detail konser."
    },
    {
      question: "Di mana saya bisa melihat jadwal lengkap dan lineup (daftar penampil) konser?",
      answer: "Anda bisa melihat jadwal konser mendatang di halaman 'Schedule'. Untuk lineup detail dan rundown acara spesifik, silakan lihat pada halaman detail masing-masing konser yang Anda minati."
    },
    {
      question: "Barang apa saja yang biasanya dilarang dibawa masuk ke area konser?",
      answer: "Setiap event mungkin memiliki aturan spesifik, namun umumnya barang yang dilarang meliputi senjata tajam/api, obat-obatan terlarang, minuman beralkohol dari luar, makanan/minuman dari luar, kamera profesional tanpa izin, dan barang berbahaya lainnya. Selalu periksa detail aturan di halaman konser."
    },
    {
      question: "Apakah ada batasan usia untuk menghadiri konser?",
      answer: "Batasan usia bisa bervariasi tergantung pada kebijakan venue dan penyelenggara event. Beberapa event mungkin khusus dewasa (18+ atau 21+), sementara yang lain terbuka untuk semua umur (mungkin dengan pendampingan orang tua untuk anak-anak). Informasi ini biasanya tertera jelas di detail tiket atau halaman informasi konser."
    },
    {
      question: "Bagaimana cara mengetahui informasi tentang akses ke venue (lokasi) dan parkir?",
      answer: "Informasi mengenai alamat lengkap venue, peta lokasi (jika tersedia), pilihan transportasi umum terdekat, dan detail area parkir biasanya dapat ditemukan pada halaman detail setiap konser. Kami sarankan untuk memeriksanya sebelum hari H."
    }

  ];


  return (
    // Background Section TRANSPARAN, Border Hitam, Responsive Padding & Max Width
    <section className="w-full  mx-auto p-4 sm:p-8 md:p-12 ">
      {/* Judul dengan text responsive */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 md:mb-8  text-center">
        FAQ - Frequently Asked Questions
      </h2>
      {/* Container untuk item FAQ */}
      <div> {/* Tidak perlu space-y jika mb-4 sudah ada di FAQItem */}
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;