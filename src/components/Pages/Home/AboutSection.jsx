import React from "react";
import NewsImage from "../../../../src/assets/news_img.png";
import Button from "../../Button"
import { useNavigate  } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between sm:grid sm:grid-cols-5 py-10 items-center mb-2">
      <div className="hidden col-span-2 sm:flex sm:justify-center sm:w-[280px] md:w-full">
        <img src={NewsImage} alt="" />
      </div>
      <div className="col-span-3 flex flex-col w-full justify-start items-center sm:items-start text-center md:text-start"> 
        <p className="text-2xl md:text-4xl font-medium mb-5">Reggae Party</p>
        <p className="text-md md:text-2xl mb-5">Come discover a rich and eclectic program, internationally renowned artists and a friendly and lively atmosphere. </p>
        <Button onClick={() => navigate("/about")} textColor='text-black' bgColor='bg-primary'>About Us</Button>
      </div>
    </div>
  );
};

export default AboutSection;
