import React, { useContext, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";
import ReactMarkdown from "react-markdown";

// Komponen kecil untuk kartu berita terkait di sidebar
const RelatedNewsCard = ({ news }) => {
  if (!news) return null;
  return (
    <Link
      to={news.slug} // Arahkan ke slug berita terkait
      className="block bg-primary border-2 border-black shadow-[4px_4px_0_black] mb-4 transition-all duration-150 ease-in-out hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_black] group" // Efek hover pada kartu
    >
      <div className="flex items-start gap-3 p-3">
        {/* Gambar Kecil */}
        <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border-2 border-black bg-gray-200 overflow-hidden">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        {/* Judul & Kategori */}
        <div className="flex-grow">
          <h4 className="text-sm md:text-base font-bold text-black leading-tight line-clamp-2 mb-1 group-hover:text-secondary">
            {" "}
            {/* Judul */}
            {news.title}
          </h4>
          <span
            className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded-sm ${news.categoryColor} ${news.categoryTextColor} shadow-[1px_1px_0_black]`}
          >
            {" "}
            {/* Kategori */}
            {news.category}
          </span>
        </div>
      </div>
    </Link>
  );
};

// Komponen utama halaman detail
const NewsDetailPage = () => {
  const { slug } = useParams();
  const { newsData } = useContext(AppContext);
  const navigate = useNavigate();

  // Cari artikel berita saat ini
  const newsArticle = useMemo(() => {
    if (!newsData || !slug) return null;
    return newsData.find((news) => news.slug.endsWith(`/${slug}`)); // Sesuaikan jika perlu
  }, [newsData, slug]);

  // Cari berita terkait (kategori sama, bukan artikel ini, maks 3)
  const relatedNews = useMemo(() => {
    if (!newsArticle || !newsData) return [];
    return newsData
      .filter(
        (news) =>
          news.category === newsArticle.category && news.id !== newsArticle.id
      )
      .slice(0, 3); // Ambil maksimal 3 berita terkait
  }, [newsArticle, newsData]);

  // --- Simulasi Konten Lengkap (SAMA seperti sebelumnya) ---
  const simulatedFullContent = newsArticle
    ? `... (Konten HTML simulasi Anda dari respons sebelumnya) ...`
    : "";
  // Ganti ini dengan logika konten nyata Anda (Markdown/HTML)

  // Handle Not Found
  if (!newsArticle) {
    // return <NotFound />; // Gunakan komponen NotFound jika ada
    return <div className="text-center py-20">News article not found!</div>;
  }

  return (
    <div className="  w-full mt-[-20px] overflow-hidden pl-13 mb-10 pr-4 md:pl-20 md:pr-10">
      <div className="container mx-auto px-4">
        {/* Tombol Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 bg-primary text-black font-semibold py-2 px-4 border-2 border-black shadow-[3px_3px_0_black] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_black] transition-all duration-150 ease-in-out"
        >
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
          Back
        </button>
        {/* --- Layout Utama (Grid 2 Kolom di lg) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* --- Kolom Kiri: Konten Utama (lg:col-span-2) --- */}
          <article className="lg:col-span-2 bg-primary p-6 md:p-10 border-4 border-black shadow-[8px_8px_0_#17A15F]">
            {" "}
            {/* Shadow Hijau (Secondary) */}
            {/* Judul Utama */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-4">
              {newsArticle.title}
            </h1>
            {/* Metadata: Kategori & Tanggal */}
            <div className="flex flex-wrap justify-start items-center mb-6 gap-x-4 gap-y-2 border-b-2 border-t-2 border-black py-3">
              <span
                className={`inline-block px-4 py-1 text-sm font-bold uppercase rounded ${newsArticle.categoryColor} ${newsArticle.categoryTextColor} shadow-[2px_2px_0_black]`}
              >
                {newsArticle.category}
              </span>
              <span className="text-sm font-medium text-gray-600">
                Published: {newsArticle.date}
              </span>
            </div>
            <div className="prose prose-lg max-w-none ...">
              <ReactMarkdown>{newsArticle.fullContent}</ReactMarkdown>
            </div>
          </article>

          {/* --- Kolom Kanan: Gambar & Berita Terkait (lg:col-span-1) --- */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Gambar Utama Artikel */}
            <div className="border-4 border-black shadow-[8px_8px_0_#FBE502] overflow-hidden">
              {" "}
              {/* Shadow Kuning (Primary) */}
              <img
                src={newsArticle.imageUrl}
                alt={newsArticle.title}
                className="w-full h-auto object-cover aspect-square md:aspect-video lg:aspect-square" // Coba aspect ratio berbeda
              />
            </div>

            {/* Bagian Berita Terkait */}
            <div className="sticky top-24">
              {" "}
              {/* Membuat sidebar sticky */}
              <h3 className="text-2xl font-bold text-black mb-4 border-b-4 border-primary pb-2">
                Related News
              </h3>
              {relatedNews.length > 0 ? (
                <div>
                  {relatedNews.map((related) => (
                    <RelatedNewsCard key={related.id} news={related} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 bg-primary p-4 border-2 border-black shadow-[3px_3px_0_black]">
                  No other news found in this category.
                </p>
              )}
            </div>
          </aside>
        </div>{" "}
        {/* Akhir Grid Utama */}
      </div>{" "}
      {/* Akhir Container */}
    </div> // Akhir Background Div
  );
};

export default NewsDetailPage;
