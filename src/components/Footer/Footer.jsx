import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <h2 className="text-3xl font-bold text-white">
          Style<span className="text-pink-500">Hub</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Premium fashion marketplace.
        </p>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          © 2026 StyleHub. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;