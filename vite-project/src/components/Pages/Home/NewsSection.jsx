import React from "react";
import VersatileCard from "../../VersatileCard";
import NewsImage1 from "../../../assets/news_img_1.png";
import NewsImage2 from "../../../assets/news_img_2.png";
import NewsImage3 from "../../../assets/news_img_3.png";

const NewsSection = () => {
  const handleReadMoreClick = (title) => {
    alert(`Tombol "Read More" untuk "${title}" diklik!`);
    // Tambahkan logika navigasi atau aksi lain di sini
  };
  return (
    <div className="flex flex-col justify-center text-center pb-10">
      <p className="text-2xl md:text-4xl font-medium mb-5">News !!</p>
      <p className="text-md md:text-2xl mb-5">Follow The Latest Party News</p>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        <VersatileCard
          variant="contentBelow" // <--- Tentukan variant
          imageUrl={NewsImage1} // Ganti dengan IMG_CROWD jika sudah ada
          altText="Kerumunan konser"
          title="Festival Vibes"
          subtitle="Aenean nec ipsum placerat, ultricies purus vitae, vulputate nisl. Vivamus nec ante non lectus gravida interdum id nec mi. Vestibulum rhoncus tellus at mattis convallis. Duis ac gravida turpis. Aenean interdum ullamcorper ante, dictum tincidunt tortor efficitur eu. Integer non mi finibus, aliquet nisl et, convallis augue. Proin pretium massa eget velit fermentum, eu dictum quam molestie. Donec fermentum nisl at elit convallis lacinia. Nam quis lorem dignissim, malesuada ex vel, faucibus orci. Donec mollis lacus felis, dictum gravida nunc tristique sed. Donec sit amet rutrum dui. Suspendisse justo justo, dignissim id placerat eu, tincidunt vel erat. Sed sodales sodales enim a hendrerit. Maecenas quis tellus vel risus ullamcorper porttitor. Donec eget mi turpis."
          buttonText="Read More"
          onButtonClick={() => handleReadMoreClick("Festival Vibes")}
          imageHeightClass="h-40" // Sesuaikan tinggi gambar untuk layout ini
        />
         <VersatileCard
          variant="contentBelow" 
          imageUrl={NewsImage2} // Ganti dengan IMG_STAGE
          altText="Panggung konser reggae"
          title="Live Performance"
          subtitle="Aenean nec ipsum placerat, ultricies purus vitae, vulputate nisl. Vivamus nec ante non lectus gravida interdum id nec mi. Vestibulum rhoncus tellus at mattis convallis. Duis ac gravida turpis. Aenean interdum ullamcorper ante, dictum tincidunt tortor efficitur eu. Integer non mi finibus, aliquet nisl et, convallis augue. Proin pretium massa eget velit fermentum, eu dictum quam molestie. Donec fermentum nisl at elit convallis lacinia. Nam quis lorem dignissim, malesuada ex vel, faucibus orci. Donec mollis lacus felis, dictum gravida nunc tristique sed. Donec sit amet rutrum dui. Suspendisse justo justo, dignissim id placerat eu, tincidunt vel erat. Sed sodales sodales enim a hendrerit. Maecenas quis tellus vel risus ullamcorper porttitor. Donec eget mi turpis."
          buttonText="Read More"
           onButtonClick={() => handleReadMoreClick("Live Performance")}
           imageHeightClass="h-40"
        />
         <VersatileCard
          variant="contentBelow" 
          imageUrl={NewsImage3} // Ganti dengan IMG_PEOPLE
          altText="Orang-orang menikmati musik"
          title="Community Jam"
          subtitle="Join the Fun lorem mosefesie sef s efs efsefsf sfesef sfesfe sfsefsef fsefsefsef sefsefsef sfefs efLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare ligula vitae ex aliquet, eu elementum sem placerat. Etiam in accumsan quam. Suspendisse ut egestas lorem, at pellentesque turpis. Duis ut finibus ligula, vel dignissim nunc. Nam fringilla, ex et ultricies pulvinar, arcu ante tincidunt enim, non cursus velit arcu at tellus. Cras auctor odio metus, non auctor nunc placerat eget. Integer ac magna sit amet justo consequat volutpat. Nam ut rhoncus risus, ac semper lorem. Proin consequat nisl malesuada feugiat venenatis. Mauris urna ipsum, convallis nec massa et, scelerisque auctor sapien. Donec vitae arcu molestie, lacinia ipsum eu, luctus eros. Pellentesque vitae diam lorem. Phasellus pellentesque ac massa vel gravida. Etiam porta egestas purus quis faucibus."
          buttonText="Read More"
          onButtonClick={() => handleReadMoreClick("Community Jam")}
          imageHeightClass="h-40"
          // Contoh menambahkan children
          // children={ 
          //   <p className="text-xs mt-2 text-gray-600">Limited spots available!</p> 
          // }
        />
      </div>
    </div>
  );
};

export default NewsSection;
