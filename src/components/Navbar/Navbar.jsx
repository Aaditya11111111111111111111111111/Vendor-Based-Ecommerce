import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Categories", to: "/categories" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm fixed top-0 left-0 z-50 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex items-center justify-between py-3 sm:py-4">

          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-pink-600 shrink-0">
            StyleHub
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8 font-medium text-sm lg:text-base">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-700 hover:text-pink-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons + Hamburger */}
          <div className="flex items-center gap-4 text-xl">
            <FiSearch className="cursor-pointer hover:text-pink-600 transition-colors" />
            <FiUser className="cursor-pointer hover:text-pink-600 transition-colors hidden sm:block" />
            <FiShoppingCart className="cursor-pointer hover:text-pink-600 transition-colors" />
            {/* Hamburger — mobile only */}
            <button
              className="md:hidden ml-1 text-gray-700"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-gray-700 font-medium text-base hover:text-pink-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100 mt-2">
            <FiUser size={20} className="text-gray-700" />
            <span className="text-sm text-gray-500">Account</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
