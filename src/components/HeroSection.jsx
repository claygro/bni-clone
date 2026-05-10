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
      <div className="absolute inset-0 flex items-end justify-end right-20 bottom-6 p-6 md:p-10">
        <button className="bg-[#CF202E] text-white text-xl font-bold py-4 px-32  rounded-xl hover:bg-red-700 transition-colors uppercase tracking-wider">
          GET INVITED
        </button>
      </div>

      <h1 className="absolute top-6 left-6 text-white text-2xl">hello</h1>
    </div>
  );
};

export default HeroSection;
