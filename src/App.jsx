import React from "react";
import Home from "./components/Pages/Home/HomePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StayTuneSidebar from "./components/StayTuneSidebar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="flex flex-col h-full min-h-screen w-full bg-secondary bg-[radial-gradient(#FBE502_1px,transparent_1px)] [background-size:16px_16px]   ">
      <StayTuneSidebar />
      <div className=" w-full  ">
        <div className="pl-13 pr-4 md:pl-20 md:pr-10">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
