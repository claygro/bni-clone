const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm md:text-base font-normal">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Cookie Policy
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Terms and Conditions
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-sm md:text-base font-normal whitespace-nowrap">
          © 2026 BNI Global, LLC
        </div>
      </div>
    </footer>
  );
};

export default Footer;
