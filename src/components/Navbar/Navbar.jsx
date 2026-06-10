import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About US", to: "/AboutUs" },
  { label: "Contact", to: "/contact" },
];

const Navbar = ({ solid = false }) => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  // Returns className for desktop nav links
  const desktopLinkClass = ({ isActive }) =>
    `relative pb-0.5 transition-colors font-medium text-sm
     after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
     after:transition-transform after:duration-200 after:origin-left
     ${isActive
       ? "text-pink-500 after:bg-pink-500 after:scale-x-100"
       : `after:scale-x-0 hover:after:scale-x-100 after:bg-pink-500
          ${solid ? "text-gray-700 hover:text-pink-500" : "text-white/80 hover:text-pink-400"}`
     }`;

  // Returns className for mobile drawer links
  const mobileLinkClass = ({ isActive }) =>
    `font-medium text-base transition-colors
     ${isActive ? "text-pink-400" : "text-white/90 hover:text-pink-400"}`;

  return (
    <header className={`w-full z-50 ${solid ? "relative shadow-sm" : "relative z-20 bg-transparent"}`}
            style={solid ? { backgroundColor: "#f7f3ef" } : {}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between py-4 sm:py-5">

          {/* Logo */}
          <Link to="/" className={`text-2xl sm:text-3xl font-bold shrink-0 ${solid ? "text-gray-900" : "text-white"}`}>
            Style<span className="text-pink-500">Hub</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={desktopLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop: search bar + icons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search bar */}
            <form className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm
                              ${solid
                                ? "bg-gray-100 text-gray-700"
                                : "bg-white/10 backdrop-blur-sm text-white border border-white/20"
                              }`}>
              <FiSearch size={14} className={solid ? "text-gray-400" : "text-white/60"} />
              <input
                type="text"
                placeholder="Search products..."
                className={`bg-transparent outline-none w-36 lg:w-48 text-sm
                            ${solid ? "placeholder-gray-400 text-gray-700" : "placeholder-white/40 text-white"}`}
              />
            </form>

            {/* Icons */}
            <div className={`flex gap-4 text-xl items-center ${solid ? "text-gray-700" : "text-white/80"}`}>
              <FiUser className="cursor-pointer hover:text-pink-500 transition-colors" />
              <Link to="/cart" className="relative">
                <FiShoppingCart className="cursor-pointer hover:text-pink-500 transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold
                                   w-4 h-4 flex items-center justify-center rounded-full leading-none">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile: cart + hamburger */}
          <div className={`flex md:hidden items-center gap-4 ${solid ? "text-gray-700" : "text-white"}`}>
            <Link to="/cart" className="relative">
              <FiShoppingCart size={20} className="cursor-pointer hover:text-pink-500 transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold
                                 w-4 h-4 flex items-center justify-center rounded-full leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-sm
                        px-6 py-6 flex flex-col gap-5 z-50">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              className={mobileLinkClass}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-5 pt-4 border-t border-white/10 text-white/70">
            <form className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 flex-1">
              <FiSearch size={14} className="text-white/50 shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-full text-white placeholder-white/40"
              />
            </form>
            <FiUser size={20} className="cursor-pointer hover:text-white shrink-0" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
