import React from 'react';
import FAQItem from './FAQItem.jsx'

const FAQSection = () => {
  const faqData = [
    {
      question: "Apa itu gaya desain Neo-Brutalisme?",
      answer: "Neo-Brutalisme adalah gaya desain web modern yang terinspirasi oleh arsitektur Brutalisme. Ciri khasnya meliputi warna solid, kontras tinggi, tipografi tegas, border tebal, shadow keras, dan fokus pada fungsionalitas mentah."
    },
    {
      question: "Bagaimana cara mengimplementasikannya dengan Tailwind CSS?",
      answer: "Tailwind menyediakan utility classes yang memudahkan penerapan gaya ini. Gunakan class untuk border tebal (border-2, border-4), warna solid (bg-warna, text-warna), shadow custom (shadow-[...]), dan font (font-bold, font-mono)."
    },
    {
      question: "Apakah ini cocok untuk semua jenis website?",
      answer: "Gaya ini sangat mencolok dan mungkin tidak cocok untuk semua brand atau tujuan website. Cocok untuk proyek yang ingin tampil beda, artistik, atau menonjolkan kesan 'digital' dan 'jujur'."
    },
    {
      question: "Bagaimana dengan aksesibilitas?",
      answer: "Penting untuk tetap memperhatikan aksesibilitas. Gunakan kontras warna yang cukup (meskipun tinggi), struktur HTML semantik (seperti <button> untuk elemen interaktif), dan atribut ARIA yang sesuai (aria-expanded, aria-controls) untuk komponen seperti akordion FAQ ini."
    }
    // Tambahkan pertanyaan dan jawaban lain di sini
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