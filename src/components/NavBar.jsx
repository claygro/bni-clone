import { useState } from "react";
import bniLogo from "../assets/BNI_logo.png";
import { ChevronDown, Mail, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-4 md:py-6 bg-white font-sans shadow-lg">
      {/* Logo Section */}
      <div className="flex-shrink-0 z-50">
        <img
          src={bniLogo}
          alt="BNI logo"
          className="h-8 sm:h-10 md:h-12 w-auto"
        />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden z-50 p-2 text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Pill / Mobile Menu */}
      <div
        className={`
        fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out
        lg:static lg:flex lg:flex-row lg:translate-y-0 lg:bg-[#F1F1F1] lg:rounded-full lg:px-4 xl:px-6 lg:py-2 lg:ml-4 lg:shadow-sm lg:border lg:border-gray-100
        ${isOpen ? "translate-y-0" : "-translate-y-full lg:translate-y-0"}
      `}
      >
        <ul className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-4 xl:space-x-6 2xl:space-x-8 text-[15px] xl:text-[14px] font-medium text-gray-800">
          <li className="cursor-pointer hover:text-red-600 text-center">
            The BNI Experience
          </li>

          <li className="cursor-pointer hover:text-red-600 text-center">
            Our Global Community
          </li>

          <li className="cursor-pointer hover:text-red-600">My BNI Story</li>

          <li className="cursor-pointer hover:text-red-600">BNI Franchising</li>

          <li className="flex items-center cursor-pointer hover:text-red-600">
            About BNI <ChevronDown size={16} className="ml-1" />
          </li>

          {/* Email Support */}
          <li className="flex items-center text-[#CF202E] font-bold cursor-pointer text-sm xl:text-base">
            <Mail size={16} className="mr-2 flex-shrink-0" />
            <span className="break-all sm:break-normal">support@bni.com</span>
          </li>

          {/* CTA Button */}
          <li className="pt-2 lg:pt-0">
            <button className="bg-[#CF202E] text-white px-6 sm:px-8 lg:px-5 xl:px-6 py-3 lg:py-2 rounded-full font-bold uppercase tracking-wide text-xs sm:text-sm active:scale-95 transition-all whitespace-nowrap">
              GET INVITED
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
