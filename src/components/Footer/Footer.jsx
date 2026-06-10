import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const links = {
  Shop: [
    { label: "All Products", to: "/shop" },
    { label: "Men",          to: "/categories" },
    { label: "Women",        to: "/categories" },
    { label: "Kids",         to: "/categories" },
    { label: "Sarees",       to: "/categories" },
  ],
  Company: [
    { label: "About Us",    to: "/" },
    { label: "Careers",     to: "/" },
    { label: "Press",       to: "/" },
    { label: "Blog",        to: "/" },
  ],
  Support: [
    { label: "Contact Us",      to: "/contact" },
    { label: "FAQ",             to: "/" },
    { label: "Shipping Policy", to: "/" },
    { label: "Return Policy",   to: "/" },
    { label: "Track Order",     to: "/" },
  ],
};

const socials = [
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiFacebook,  href: "#", label: "Facebook" },
  { icon: FiTwitter,   href: "#", label: "Twitter" },
  { icon: FiYoutube,   href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white">

      {/* ── Top strip ── */}
      <div className="border-b border-white/8 px-6 sm:px-10 lg:px-16 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-6">

          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Style<span className="text-pink-500">Hub</span>
            </Link>
            <p className="mt-2 text-white/40 text-sm max-w-xs leading-relaxed">
              Nepal's premium fashion marketplace — curated collections from verified vendors.
            </p>
          </div>

          {/* Newsletter */}
          <div className="lg:max-w-sm w-full">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3 font-semibold">
              Stay in the loop
            </p>
            <form
              className="flex"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 text-white text-sm
                           placeholder-white/30 px-4 py-3 outline-none
                           focus:border-pink-500 transition-colors"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white text-xs font-semibold
                           uppercase tracking-wider px-5 py-3 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── Main links grid ── */}
      <div className="px-6 sm:px-10 lg:px-16 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white text-xs uppercase tracking-[0.25em] font-bold mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-white/45 hover:text-pink-400 text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social + contact */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.25em] font-bold mb-5">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center
                             text-white/50 hover:text-pink-400 hover:border-pink-500
                             transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="text-white/30 text-xs leading-relaxed">
             stylehub@gmail.com<br />
              +977 984200 9649<br />
              Biratnagar, Nepal
            </p>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8 px-6 sm:px-10 lg:px-16 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2026 StyleHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/25">
            <Link to="/" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-white/60 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
