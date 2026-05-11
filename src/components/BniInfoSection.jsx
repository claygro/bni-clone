import bniYoutube from "../assets/bniYoutube.jpg";

const BNIInfoSection = () => {
  return (
    <section className="w-full px-4 sm:px-5 md:px-6 lg:px-32 xl:px-32 py-8 md:py-14">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-[42px] font-bold text-[#64666a] leading-tight">
            Join <span className="text-[#cf2030]">BNI</span>
            <sup className="text-[#CF202E] text-sm sm:text-lg md:text-2xl font-bold">
              ®
            </sup>
            , the world's largest and most successful{" "}
            <span className="text-[#cf2030]">
              referral networking organization
            </span>
          </h2>

          {/* "What is BNI" video thumbnail */}
          <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden cursor-pointer group">
            <img
              src={bniYoutube}
              alt="bni youtube"
              className="w-full h-auto object-cover"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all duration-200 rounded-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-4 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white fill-white ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* "WHAT IS BNI" text overlay */}
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4">
              <div className="text-right leading-none">
                <p className="text-gray-900 font-black text-sm sm:text-lg md:text-xl tracking-tight">
                  WHAT IS
                </p>

                <p className="text-[#CF202E] font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                  BNI
                  <span className="text-[#CF202E] text-lg sm:text-2xl align-super">
                    .
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Discover how BNI Members around the world meet each week locally to
            pass millions of referrals to each other worth billions of dollars
            in revenue for businesses just like yours.
          </p>

          {/* Stats Grid */}
          <div className="relative ">
            {/* Outer grey background grid */}
            <div className="shadow-lg rounded-2xl grid grid-cols-2 gap-[2px] overflow-hidden">
              {/* Top-left: Global Members */}
              <div className="bg-white rounded-tl-2xl p-12 sm:p-21   flex flex-col items-center text-center">
                <span className="text-[#CF202E] font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                  355K+
                </span>

                <span className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base mt-1">
                  Global Members
                </span>

                <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-1 leading-tight">
                  As of 31<sup>st</sup> December, 2025
                </span>
              </div>

              {/* Top-right: Global Chapters */}
              <div className="bg-gray-100 rounded-tr-2xl p-12 sm:p-21  flex flex-col items-center text-center">
                <span className="text-[#CF202E] font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                  11,600+
                </span>

                <span className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base mt-1">
                  Global Chapters
                </span>
              </div>

              {/* Bottom-left: Countries */}
              <div className="bg-gray-100 rounded-bl-2xl p-12 sm:p-21 flex flex-col items-center text-center">
                <span className="text-[#CF202E] font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                  77
                </span>

                <span className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base mt-1">
                  Countries
                </span>
              </div>

              {/* Bottom-right: Member Referrals */}
              <div className="bg-white rounded-br-2xl p-12 sm:p-21 flex flex-col items-center text-center">
                <span className="text-[#CF202E] font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                  17.9M
                </span>

                <span className="text-gray-800 font-semibold text-xs sm:text-sm md:text-base mt-1">
                  Member Referrals
                </span>

                <span className="text-gray-500 text-[10px] sm:text-xs md:text-sm mt-1">
                  Last 12 Months*
                </span>
              </div>
            </div>

            {/* Floating center card — $26.9B */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[70%] sm:w-[48%]   bg-white rounded-2xl shadow-xl  sm:px-5 sm:py-6 md:p-7 flex flex-col items-center text-center">
              <span className="text-[#CF202E] font-bold text-lg sm:text-2xl md:text-3xl xl:text-4xl leading-none">
                $26.9B
              </span>

              <span className="text-gray-800 font-semibold text-[11px] sm:text-xs md:text-sm mt-2 leading-snug">
                Member Generated Business
              </span>

              <span className="text-gray-500 text-[10px] sm:text-xs mt-1">
                Last 12 Months*
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BNIInfoSection;
