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
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-transparent relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between py-4 sm:py-5">

          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-white shrink-0">
            Style<span className="text-pink-500">Hub</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex gap-8 font-medium text-sm text-white/80">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.to}
                className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop icons */}
          <div className="hidden md:flex gap-5 text-xl text-white/80">
            <FiSearch className="cursor-pointer hover:text-white transition-colors" />
            <FiUser className="cursor-pointer hover:text-white transition-colors" />
            <FiShoppingCart className="cursor-pointer hover:text-white transition-colors" />
          </div>

          {/* Mobile: cart + hamburger */}
          <div className="flex md:hidden items-center gap-4 text-white">
            <FiShoppingCart size={20} className="cursor-pointer" />
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
            <Link key={link.label} to={link.to}
              className="text-white/90 font-medium text-base hover:text-pink-400 transition-colors"
              onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-5 pt-4 border-t border-white/10 text-white/70">
            <FiSearch size={20} className="cursor-pointer hover:text-white" />
            <FiUser size={20} className="cursor-pointer hover:text-white" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
