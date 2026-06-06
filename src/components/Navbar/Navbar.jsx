import { Link } from "react-router-dom";
import {FiSearch, FiShoppingCart, FiUser} from "react-icons/fi";

const Navbar = () => {
    return (
        <header className="w-full shadow-sm">
            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-between py-4">

                    <Link
                    to="/" 
                    className="text-3xl font-bold text-pink-600"
                    >
                        StyleHub
                    </Link>

                    <nav className="hidden md:flex gap-8 font-medium">
                        <Link to="/">Home</Link>
                        <Link to="/">Shop</Link>
                        <Link to="/">Categories</Link>
                        <Link to="/">Contact</Link>
                    </nav>

                    <div className="flex gap-5 text-xl">
                        <FiSearch />
                        <FiUser />
                        <FiShoppingCart />
                    </div>

                </div>


            </div>
        </header>
    );
};

export default Navbar;