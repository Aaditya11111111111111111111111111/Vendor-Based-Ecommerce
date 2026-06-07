import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-16 sm:mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-500">StyleHub</h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed">
              Premium fashion marketplace connecting vendors and style lovers across India.
            </p>
            <div className="flex gap-4 mt-5 text-xl text-gray-400">
              <FiInstagram className="hover:text-pink-500 cursor-pointer transition-colors" />
              <FiFacebook className="hover:text-pink-500 cursor-pointer transition-colors" />
              <FiTwitter className="hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Shop</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Sarees", "Lehengas", "T-Shirts", "Pants & Jeans", "Kurtis"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="hover:text-pink-500 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["About Us", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-pink-500 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-base mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["FAQ", "Shipping Policy", "Return Policy", "Track Order"].map((item) => (
                <li key={item}>
                  <Link to="/" className="hover:text-pink-500 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-3 text-gray-500 text-xs sm:text-sm">
          <span>© 2026 StyleHub. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-pink-500 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-pink-500 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
