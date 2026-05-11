import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
function Footer1() {
  return (
    <footer className="bg-[#5b5f63] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
          <div className="space-y-2">
            <p>The BNI Experience</p>
            <p>Our Global Community</p>
            <p>My BNI Story</p>
            <p>BNI Franchising</p>
          </div>

          <div className="space-y-2">
            <p>About Us</p>
            <p>Leadership</p>
            <p>National Directors</p>
            <p>Our Founder</p>
            <p>BNI Foundation</p>
          </div>

          <div className="space-y-2">
            <p>Blog & News</p>
            <p>In The Media</p>
            <p>Networking Tips</p>
            <p>Global Events</p>
            <p>Careers</p>
          </div>

          <div className="space-y-2">
            <p>Chapter Map</p>
            <p>Start a Chapter</p>
            <p>Exclusive Member Benefits</p>
            <p>Contact Us</p>
          </div>

          <div className="space-y-2">
            <p>Member Services</p>
            <p>BNI Connect</p>
            <p>BNI Academy</p>
            <p>BNI Brandshare</p>
            <p>BNI US Store</p>
            <p>BNI Global Store</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-sm">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>In U.S. (800)-825-8286</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>Outside U.S. support@bni.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} />
              <span>
                3430 Toringdon Way,
                <br /> Suite 300 Charlotte, NC 28277
              </span>
            </div>
          </div>

          {/* Email Signup */}
          <div>
            <h3 className="font-semibold text-lg">BNI SuccessNet™</h3>
            <p className="text-xs mt-1 mb-3">
              Sign up for exclusive networking tips and more.
            </p>

            <section className="flex items-center justify-between bg-white rounded-full overflow-hidden">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className=" px-4 py-2 text-black outline-none"
                />
              </div>
              <div>
                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full m-1">
                  <ArrowRight className="text-white" />
                </button>
              </div>
            </section>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <p className="mb-2">Follow BNI</p>
            <div className="flex gap-3">
              <FaFacebook size={18} />
              <FaLinkedin size={18} />
              <FaInstagram size={18} />
              <FaYoutube size={18} />
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer1;
