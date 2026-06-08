import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

        <div className="flex items-center justify-between py-4 sm:py-5">

          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl font-bold text-white">
            Style<span className="text-pink-500">Hub</span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex gap-8 font-medium text-sm text-white/80">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/" className="hover:text-white transition-colors">Shop</Link>
            <Link to="/" className="hover:text-white transition-colors">Categories</Link>
            <Link to="/" className="hover:text-white transition-colors">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex gap-5 text-xl text-white/80">
            <FiSearch className="cursor-pointer hover:text-white transition-colors" />
            <FiUser className="cursor-pointer hover:text-white transition-colors" />
            <FiShoppingCart className="cursor-pointer hover:text-white transition-colors" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
