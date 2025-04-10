import React from "react";
import VersatileCard from "../../VersatileCard";
import BigPartyImage1 from "../../../assets/bigParty_img_1.png";
import BigPartyImage2 from "../../../assets/bigParty_img_2.png";
import BigPartyImage3 from "../../../assets/bigParty_img_3.png";

const BigPartySection = () => {
  return (
    <div className="flex flex-col justify-center text-center md:text-start pb-10">
      <p className="text-2xl md:text-4xl font-medium mb-5">
        Big Party in this Quarter !!
      </p>
      <p className="text-md md:text-2xl mb-5">
        Discover the incredible Rastafarians of artists who will be performing
        at this Quarter’s Reggae Party.
      </p>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
        <VersatileCard
          variant="imageOnly"
          imageUrl={BigPartyImage1}
          altText="Gitaris reggae solo dengan dreadlocks"
        />
        <VersatileCard
          variant="imageOnly"
          imageUrl={BigPartyImage2}
          altText="Band reggae berbaris dengan latar belakang warna-warni
"  
        />
        <VersatileCard
          variant="imageOnly"
          imageUrl={BigPartyImage3}
          altText="Band reggae di panggung dengan drummer"  
        />
      </div>
    </div>
  );
};

export default BigPartySection;
