import React from "react";
import stepsImage from "../assets/StepsToSuccess.webp";
import person from "../assets/person.jpg";
const Success = () => {
  const testimonials = [
    {
      img: person,
      text: "Today we own a Pvt. Ltd. Firm that achieved 1.5 Cr in 9 months with major BNI support.",
      name: "Bhavesh Vora",
      role: "Engineering Solutions, India",
    },
    {
      img: person,
      text: "Being part of BNI has been one of the most valuable decisions for my business.",
      name: "Dr Prince Sodha",
      role: "Founder & Creative Director, India",
    },
    {
      img: person,
      text: "I secured my first business within just 3 months of relationship building.",
      name: "Payal Ghadge",
      role: "IT Services, India",
    },
    {
      img: person,
      text: "BNI helped me rewrite my entire business growth strategy.",
      name: "Farzana Suri",
      role: "Coaching, India",
    },
    {
      img: person,
      text: "Over 86% of my clients come from BNI referrals.",
      name: "Jennie B",
      role: "Sales, USA",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Visit a BNI chapter",
      desc: "and experience the power of the BNI network",
    },
    {
      number: 2,
      title: "Meet the Members",
      desc: "and learn how they can help you grow your business",
    },
    {
      number: 3,
      title: "Apply",
      desc: "to become a Member of a BNI Chapter",
    },
  ];

  return (
    <div
      className="w-full min-h-screen relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${stepsImage})` }}
    >
      {/* 🔥 BLACK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90"></div>

      <div className="relative z-10 w-full px-4 py-14">
        {/* ================= TOP SECTION ================= */}
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold">3 Steps to Success</h1>

          <p className="mt-4 text-white/80 text-sm sm:text-base">
            Get invited to a BNI networking meeting and witness the power of
            referrals in action.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="relative mt-14 max-w-5xl mx-auto">
          {/* line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-white/30"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-white relative"
              >
                {/* circle */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center z-10 shadow-md">
                  <span className="text-red-600 font-bold text-xl">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-4 font-bold text-lg">{step.title}</h3>

                <p className="text-white/80 text-sm mt-2 max-w-[220px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BUTTON ================= */}
        <div className="text-center mt-10">
          <button className="bg-white text-red-600 font-bold px-10 py-3 rounded-full hover:scale-105 transition">
            GET INVITED
          </button>
        </div>

        {/* ================= TESTIMONIAL CAROUSEL ================= */}
        <div className="mt-14  overflow-hidden relative">
          <div className="flex w-max gap-6 animate-scroll-left">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="w-[340px] sm:w-[380px] flex-shrink-0 
                bg-black/40 backdrop-blur-md 
                border border-white/10 
                text-white rounded-2xl p-6 shadow-xl"
              >
                {/* text */}
                <p className="text-sm sm:text-base leading-relaxed text-white/90">
                  {item.text}
                </p>

                {/* user */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/20 pt-4">
                  <div className="w-11 h-11 rounded-full bg-white/20">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-cover h-full w-full rounded-full"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs text-white/70">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Success;
