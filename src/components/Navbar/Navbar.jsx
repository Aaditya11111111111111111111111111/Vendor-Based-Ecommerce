import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch } from "react-icons/fi";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Categories", to: "/categories" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // hook up to router/search page later
      console.log("Search:", searchQuery);
    }
  };

  return (
    <header className="w-full shadow-sm fixed top-0 left-0 z-50 bg-[#fdf7fa]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex items-center justify-between gap-4 py-3 sm:py-4">

          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-pink-600 shrink-0">
            StyleHub
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8 font-medium text-sm lg:text-base shrink-0">
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

          {/* Search bar — visible on md+ */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center flex-1 max-w-sm lg:max-w-md
                       bg-gray-100 rounded-full px-4 py-2 gap-2"
          >
            <FiSearch className="text-gray-400 shrink-0" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm w-full text-gray-700
                         placeholder-gray-400"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-gray-400 hover:text-gray-600 shrink-0"
              >
                <FiX size={14} />
              </button>
            )}
          </form>

          {/* Right icons */}
          <div className="flex items-center gap-3 sm:gap-4 text-xl shrink-0">
            {/* Search icon — mobile only, toggles mobile search */}
            <FiSearch
              className="md:hidden cursor-pointer hover:text-pink-600 transition-colors"
              onClick={() => setMenuOpen((o) => !o)}
            />
            <FiUser className="cursor-pointer hover:text-pink-600 transition-colors hidden sm:block" />
            <FiShoppingCart className="cursor-pointer hover:text-pink-600 transition-colors" />
            {/* Hamburger */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdf7fa] border-t border-gray-100 px-5 pb-6 pt-4
                        flex flex-col gap-4 shadow-lg">

          {/* Mobile search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-full px-4 py-2 gap-2"
          >
            <FiSearch className="text-gray-400 shrink-0" size={15} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm w-full text-gray-700
                         placeholder-gray-400"
            />
          </form>

          {/* Mobile nav links */}
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

          <div className="flex items-center gap-3 pt-2 border-t border-gray-100 mt-1">
            <FiUser size={18} className="text-gray-700" />
            <span className="text-sm text-gray-500">Account</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
