import React from "react";
import heroSectionVideo from "../assets/heroSectionVideo.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Video */}
      <video
        className="w-full h-auto object-cover"
        src={heroSectionVideo}
        loop
        autoPlay
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute  inset-0 flex flex-col items-end justify-end p-4  md:px-32 md:py-22 md:p-10">
        {/* ✅ Add new elements here — they'll stack above the button */}
        {/* <p className="text-white text-lg mb-4">Some new element</p> */}

        <button className="bg-[#CF202E] text-white text-base md:text-xl font-bold py-3 md:py-4 px-10  md:px-32 rounded-xl hover:bg-white hover:text-[#CF202E] hover:border-2 hover:border-[#CF202E] sm:border-[#CF202E] sm:border-2 cursor-pointer  transition-all ">
          GET INVITED
        </button>
      </div>
      <h1>hello world</h1>
    </div>
  );
};

export default HeroSection;
