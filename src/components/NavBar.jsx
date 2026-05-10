import { useState } from "react";
import bniLogo from "../assets/BNI_logo.png";
import { ChevronDown, Mail, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-32 py-6 bg-white font-sans shadow-lg">
      {/* Logo Section */}
      <div className="flex-shrink-0 z-50">
        <img src={bniLogo} alt="BNI logo" className="h-10 md:h-12 w-auto" />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden z-50 p-2 text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Pill / Mobile Menu */}
      <div
        className={`
        fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out
        md:static md:flex md:flex-row md:translate-y-0 md:bg-[#F1F1F1] md:rounded-full md:px-6 md:py-2 md:ml-4 md:shadow-sm md:border md:border-gray-100
        ${isOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"}
      `}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 text-[16px] md:text-[14px] font-medium text-gray-800">
          <li className="cursor-pointer hover:text-red-600">
            The BNI Experience
          </li>
          <li className="cursor-pointer hover:text-red-600">
            Our Global Community
          </li>
          <li className="cursor-pointer hover:text-red-600">My BNI Story</li>
          <li className="cursor-pointer hover:text-red-600">BNI Franchising</li>
          <li className="flex items-center cursor-pointer hover:text-red-600">
            About BNI <ChevronDown size={16} className="ml-1" />
          </li>

          {/* Email Support */}
          <li className="flex items-center text-[#CF202E] font-bold cursor-pointer">
            <Mail size={16} className="mr-2" />
            support@bni.com
          </li>

          {/* CTA Button */}
          <li className="pt-4 md:pt-0">
            <button className="bg-[#CF202E] text-white px-8 md:px-6 py-3 md:py-2 rounded-full font-bold uppercase tracking-wide text-sm active:scale-95 transition-all">
              GET INVITED
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
