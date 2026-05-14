import { useState } from "react";
import collaborateImage from "../assets/collaborate.jpg";
import person from "../assets/person.jpg";
import krishnaMit from "../assets/krishnamit.png";
function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      title: "Lifelong Learning",
      heading: "Become a Master Connector",
      description:
        "Grow to the Master Connector level, where you actively help your BNI Chapter to thrive and increase revenue for each Member.",
      image: krishnaMit,
      name: "Krishna MIT",
      position: "Business Development | USA",
      testimonial:
        "I used to struggle to get trusted logistic partners in other countries. Since I joined BNI, I get credible and trusted partners in just an hour after asking.",
    },
    {
      id: 2,
      title: "Network Growth",
      heading: "Expand Your Reach",
      description:
        "Connect with professionals across industries and build meaningful business relationships that drive sustainable growth.",
      image: person,
      name: "Ernest Buaeng",
      position: "Clearing & Forwarding | Ghana",
      testimonial:
        "I used to struggle to get trusted logistic partners in other countries. Since I joined BNI, I get credible and trusted partners in just an hour after asking.",
    },
    {
      id: 3,
      title: "Business Excellence",
      heading: "Achieve Your Goals",
      description:
        "Through strategic networking and collaborative efforts, reach new heights in your professional journey with BNI support.",
      image: person,
      name: "Sarah Johnson",
      position: "Marketing | Canada",
      testimonial:
        "Being part of BNI transformed how I approach business. The referrals and support from members have doubled my revenue.",
    },
    {
      id: 4,
      title: "Community Impact",
      heading: "Give and Receive",
      description:
        "Build a legacy of mutual success by contributing to your BNI community and receiving endless opportunities.",
      image: person,
      name: "Michael Chen",
      position: "Finance | Singapore",
      testimonial:
        "The BNI network opened doors I never thought were possible. Quality over quantity is what makes this organization special.",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const currentItem = data[currentSlide];

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {/* Background with image and gradient */}
      <div
        className="w-full min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%), url(${collaborateImage})`,
        }}
      >
        {/* Carousel content */}
        <div className="w-full min-h-screen flex flex-col items-center justify-between p-3 sm:p-4 md:p-6 box-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 w-full max-w-[1200px] flex-1 items-center content-center">
            {/* Left section - Text */}
            <div className="text-white animate-[slideInLeft_0.5s_ease-in-out]">
              <div className="inline-block bg-red-500 text-white px-4 py-2 rounded text-sm font-semibold mb-4">
                {currentItem.title}
              </div>

              <h2 className="text-[clamp(1.5rem,5vw,3.5rem)] font-bold my-4 leading-tight tracking-[-1px]">
                {currentItem.heading}
              </h2>

              <p className="text-[clamp(1rem,2vw,1.125rem)] leading-[1.6] text-white/90 mb-8">
                {currentItem.description}
              </p>
            </div>

            {/* Right section - Testimonial */}
            <div className="animate-[slideInRight_0.5s_ease-in-out]">
              <div className="bg-black/50  p-4 sm:p-6 md:p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] text-white mb-6 italic">
                  {currentItem.testimonial}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={currentItem.image}
                    alt={currentItem.name}
                    className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="text-base font-bold text-white m-0">
                      {currentItem.name}
                    </h4>

                    <p className="text-sm text-white/80 mt-1">
                      {currentItem.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 w-full py-6 flex-wrap">
            <button
              className="bg-white/20 border-2 border-white text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full text-xl sm:text-2xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              &#10094;
            </button>

            <div className="flex gap-3 items-center w-full sm:w-auto justify-center order-[-1] sm:order-none">
              {data.map((_, index) => (
                <div
                  key={index}
                  className={`h-[10px] sm:h-[12px] rounded-full cursor-pointer transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white w-[28px] sm:w-[32px]"
                      : "bg-white/40 w-[10px] sm:w-[12px]"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            <button
              className="bg-white/20 border-2 border-white text-white w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full text-xl sm:text-2xl cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-white/30 hover:scale-110 active:scale-95"
              onClick={handleNext}
              aria-label="Next slide"
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
