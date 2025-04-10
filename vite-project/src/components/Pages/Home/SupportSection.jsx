import React from "react";
import ScrollingBanner from "../../ScrollingBanner";
import SupportIcon1 from "../../../assets/support_icon_1.png";
import SupportIcon2 from "../../../assets/support_icon_2.png";
import SupportIcon3 from "../../../assets/support_icon_3.png";
import SupportIcon4 from "../../../assets/support_icon_4.png";

const SupportSection = () => {
  const partnerLogos = [
    { src: SupportIcon1, alt: "Brand A Logo" },
    { src: SupportIcon2, alt: "Brand B Logo" },
    { src: SupportIcon3, alt: "Brand C Logo" },
    { src: SupportIcon4, alt: "Brand D Logo" },
    // ...tambahkan objek logo lainnya
  ];
  return (
    <div className="w-full">
      <div className=" mb-10 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Our Partner !?
        </h1>

        {/* Gunakan komponen LogoScroller */}
        <ScrollingBanner backgroundColor="bg-primary" logos={partnerLogos} speed="medium" />

      </div>
    </div>
  );
};

export default SupportSection;
