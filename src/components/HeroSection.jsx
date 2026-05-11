import React from "react";
import heroSectionVideo from "../assets/heroSectionVideo.mp4";

const HeroSection = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-4">
      {/* ── Video Container (rounded, with overlay) ── */}
      <div className="relative w-full overflow-hidden rounded-2xl md:rounded-[30px]">
        {/* Video */}
        <video
          className="w-full h-[320px] md:h-[420px] lg:h-[540px] xl:h-[600px] object-cover block"
          src={heroSectionVideo}
          loop
          autoPlay
          muted
          playsInline
        />

        {/* Dark gradient scrim — bottom only */}
        <div className="absolute inset-0 " />

        {/* ── Mobile & Tablet: text + button both inside video bottom-left ── */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:px-32 flex flex-col md:flex-row md:items-end md:justify-end  gap-4">
          {/* GET INVITED button */}
          <button
            className="
          
              self-start md:self-auto shrink-0
              bg-[#CF202E] text-white font-bold uppercase tracking-wider
              rounded-xl border-2 border-transparent
              cursor-pointer transition-all duration-200
              hover:bg-white hover:text-[#CF202E] hover:border-[#CF202E]
              text-sm md:text-base lg:text-lg
              py-3 px-7 md:py-4 md:px-10 lg:py-4 lg:px-14
            "
          >
            GET INVITED
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
